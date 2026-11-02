// Builds the upload-ready site into ../site: the homepage (index.html), the SEO landing pages,
// structured data, sitemap, robots.txt and llms.txt. Run: node seo/build.js
const fs = require('fs');
const path = require('path');
const C = require('./config');
const { services, markets, combos } = require('./content');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'site');
const D = C.domain.replace(/\/$/, '');
const svc = Object.fromEntries(services.map((s) => [s.slug, s]));
const mkt = Object.fromEntries(markets.map((m) => [m.slug, m]));
const comboOf = (m, s) => combos.find((c) => c.market === m && c.service === s);
const mName = (m) => m.short || m.name;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const plain = (s) => String(s).replace(/<[^>]+>/g, '');
const url = (p) => D + p;
const write = (p, body) => { const f = path.join(OUT, p); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, body); };
const copy = (from, to) => { const t = path.join(OUT, to); fs.mkdirSync(path.dirname(t), { recursive: true }); fs.cpSync(path.join(ROOT, from), t, { recursive: true }); };

// ---------- structured data ----------
const orgId = D + '/#org';
function org() {
  const o = {
    '@type': 'Organization', '@id': orgId, name: C.name, alternateName: C.shortName, url: D + '/',
    logo: { '@type': 'ImageObject', url: D + '/logo.png', width: 512, height: 512 },
    image: D + '/og-image.png', description: C.tagline,
    areaServed: markets.map((m) => ({ '@type': 'Country', name: mName(m) }))
  };
  const a = C.office;
  o.address = Object.assign({ '@type': 'PostalAddress', addressCountry: a.country },
    a.street ? { streetAddress: a.street } : {}, a.city ? { addressLocality: a.city } : {},
    a.region ? { addressRegion: a.region } : {}, a.postalCode ? { postalCode: a.postalCode } : {});
  if (C.email) o.email = C.email;
  if (C.phone) { o.telephone = C.phone; o.contactPoint = { '@type': 'ContactPoint', telephone: C.phone, contactType: 'sales', availableLanguage: ['English', 'Urdu'] }; }
  if (C.sameAs.length) o.sameAs = C.sameAs;
  return o;
}
const crumbsLd = (trail) => ({ '@type': 'BreadcrumbList', itemListElement: trail.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t[0], item: url(t[1]) })) });
const faqLd = (faqs) => ({ '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f[0], acceptedAnswer: { '@type': 'Answer', text: f[1] } })) });
const serviceLd = (s, area, p) => ({
  '@type': 'Service', '@id': url(p) + '#service', name: s.name, serviceType: s.name, description: s.desc,
  provider: { '@id': orgId }, url: url(p),
  areaServed: area ? (area.cities.map((c) => ({ '@type': 'City', name: c, containedInPlace: { '@type': 'Country', name: mName(area) } }))) : markets.map((m) => ({ '@type': 'Country', name: mName(m) }))
});
const ld = (graph) => '<script type="application/ld+json">' + JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c') + '</script>';

// ---------- shared markup ----------
const waLink = C.whatsapp ? 'https://wa.me/' + C.whatsapp.replace(/\D/g, '') : '';
function head(p, title, desc, graph) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url(p)}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#05052a">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(C.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url(p)}">
<meta property="og:image" content="${D}/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600&amp;family=Nunito:wght@600;700;800;900&amp;display=swap">
<link rel="stylesheet" href="/css/seo.css">
${ld(graph)}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="hd"><div class="wrap hd-in">
  <a class="brand" href="/"><img src="/favicon.svg" width="38" height="38" alt="">xuMax <span>interActive</span></a>
  <nav aria-label="Main"><a href="/services/">Services</a><a href="/where-we-work/">Where we work</a><a class="btn" href="/#contact">Book a free Problem Hunt</a></nav>
</div></header>
<main id="main" class="wrap">
`;
}
const crumbs = (trail) => '<nav class="crumbs" aria-label="Breadcrumb"><ol>' + trail.map((t, i) => i === trail.length - 1 ? '<li aria-current="page">' + esc(t[0]) + '</li>' : '<li><a href="' + t[1] + '">' + esc(t[0]) + '</a></li>').join('') + '</ol></nav>\n';
const ctaRow = () => '<div class="cta-row"><a class="btn" href="/#contact">Book a free Problem Hunt</a>' + (waLink ? '<a class="btn wa" href="' + waLink + '" rel="noopener">Chat on WhatsApp</a>' : '<a class="btn ghost" href="/#tools">See the tools</a>') + '</div>\n<ul class="ticks"><li>Fixed price</li><li>Live in weeks</li><li>Zero training needed</li></ul>\n';
const faqHtml = (faqs) => '<section class="sec faq"><h2>Questions we get a lot</h2>\n' + faqs.map((f) => '<details><summary>' + esc(f[0]) + '</summary><p>' + esc(f[1]) + '</p></details>').join('\n') + '\n</section>\n';
const steps = () => `<section class="sec"><h2>How a project runs</h2>
<p>Every project starts with your problem, not our software.</p>
<ol class="steps">
<li><small>Free · 30 minutes</small><b>Problem Hunt</b><span>You show us the messiest part of your day. We take notes and try not to laugh.</span></li>
<li><small>1 week</small><b>Audit</b><span>We map how you work and hand you three tool ideas, each with a fixed price.</span></li>
<li><small>1 to 2 weeks</small><b>Prototype</b><span>A clickable version of your tool, tested by your real staff on their real phones.</span></li>
<li><small>A few weeks</small><b>Build &amp; go live</b><span>Built around your workflow, with screens simple enough to pass our 3-button test.</span></li>
<li><small>Monthly</small><b>Care plan</b><span>Hosting, fixes and small upgrades, so the tool grows with your business.</span></li>
</ol></section>
`;
const band = () => `<section class="band"><h2>Tell us what’s driving you crazy.</h2><p>30 free minutes. You show us the mess, we show you what it could look like with three buttons.</p><div class="cta-row"><a class="btn" href="/#contact">Book my free Problem Hunt</a>${waLink ? '<a class="btn wa" href="' + waLink + '" rel="noopener">Chat on WhatsApp</a>' : ''}</div></section>
`;
const cards = (items) => '<div class="grid">' + items.map((i) => '<a class="card" href="' + i[0] + '"><h3>' + esc(i[1]) + '</h3><p>' + esc(i[2]) + '</p></a>').join('') + '</div>\n';
function foot() {
  const a = C.office;
  const addr = [a.street, a.city, a.region, a.postalCode].filter(Boolean).join(', ');
  return `</main>
<footer class="ft"><div class="wrap ft-cols">
  <div><h2>${esc(C.name)}</h2><p>${esc(C.tagline)}</p><p>Based in Pakistan${addr ? ' (' + esc(addr) + ')' : ''}. Working with businesses in Pakistan, the Gulf and the USA.</p>${C.email ? '<p><a href="mailto:' + esc(C.email) + '">' + esc(C.email) + '</a></p>' : ''}${C.phone ? '<p><a href="tel:' + esc(C.phone.replace(/\s/g, '')) + '">' + esc(C.phone) + '</a></p>' : ''}<p>© 2026 ${esc(C.name)}</p></div>
  <nav aria-label="Services"><h2>Services</h2><ul>${services.map((s) => '<li><a href="/services/' + s.slug + '/">' + esc(s.name) + '</a></li>').join('')}</ul></nav>
  <nav aria-label="Where we work"><h2>Where we work</h2><ul>${markets.map((m) => '<li><a href="/' + m.slug + '/">' + esc(mName(m)) + '</a></li>').join('')}</ul></nav>
</div></footer>
</body>
</html>
`;
}

const pages = [];
const page = (p, html) => { write(p.replace(/^\//, '') + 'index.html', html); pages.push(p); };

// ---------- service pages ----------
for (const s of services) {
  const p = '/services/' + s.slug + '/';
  const trail = [['Home', '/'], ['Services', '/services/'], [s.name, p]];
  const where = markets.map((m) => { const c = comboOf(m.slug, s.slug); return [c ? '/' + m.slug + '/' + s.slug + '/' : '/' + m.slug + '/', mName(m), c ? s.name + ' in ' + m.name : 'Custom business apps in ' + m.name]; });
  page(p, head(p, s.title, s.desc, [org(), { '@type': 'WebPage', '@id': url(p), url: url(p), name: s.title, description: s.desc, isPartOf: { '@id': D + '/#website' }, about: { '@id': url(p) + '#service' } }, serviceLd(s, null, p), crumbsLd(trail), faqLd(s.faqs)]) +
    crumbs(trail) +
    `<section class="hero"><span class="eyebrow">${esc(s.tool)}</span><h1>${s.h1}</h1><p class="lead">${esc(s.lead)}</p>\n${ctaRow()}</section>\n` +
    `<section class="sec"><h2>Sound familiar?</h2><ul class="list">${s.problems.map((x) => '<li>' + esc(x) + '</li>').join('')}</ul></section>\n` +
    `<section class="sec"><h2>What we build</h2><ul class="list">${s.features.map((x) => '<li>' + esc(x) + '</li>').join('')}</ul></section>\n` +
    `<section class="sec"><h2>Three buttons. Zero drama.</h2><p>Your staff see three buttons, in the order the work actually happens:</p><div class="btns">${s.buttons.map((b) => '<span>' + esc(b) + '</span>').join('')}</div><p class="ai">${esc(s.ai)}</p></section>\n` +
    `<section class="sec"><h2>Who it’s for</h2><ul class="chips">${s.who.map((x) => '<li>' + esc(x) + '</li>').join('')}</ul></section>\n` +
    steps() +
    `<section class="sec"><h2>Where we build it</h2><p>Our team is based in Pakistan and works with businesses across the Gulf and the USA.</p>${cards(where)}</section>\n` +
    faqHtml(s.faqs) +
    `<section class="sec"><h2>Related tools</h2>${cards(s.related.map((r) => ['/services/' + r + '/', svc[r].name, svc[r].desc]))}</section>\n` +
    band() + foot());
}

// ---------- services hub ----------
{
  const p = '/services/';
  const t = 'Custom Business Apps & AI Tools for SMEs | xuMax Services';
  const d = 'Maintenance software, restaurant ordering, hotel housekeeping, clinic booking, school admissions and custom business apps. Fixed price, live in weeks.';
  const trail = [['Home', '/'], ['Services', p]];
  page(p, head(p, t, d, [org(), { '@type': 'CollectionPage', '@id': url(p), url: url(p), name: t, description: d }, crumbsLd(trail), { '@type': 'ItemList', itemListElement: services.map((s, i) => ({ '@type': 'ListItem', position: i + 1, url: url('/services/' + s.slug + '/'), name: s.name })) }]) +
    crumbs(trail) +
    `<section class="hero"><span class="eyebrow">Services</span><h1>Your problem. Your tool. <em>Your three buttons.</em></h1><p class="lead">Every tool is custom-built around how your business already works. Pick the one closest to your mess, or tell us about something completely different.</p>\n${ctaRow()}</section>\n` +
    `<section class="sec"><h2>Tools we build</h2>${cards(services.map((s) => ['/services/' + s.slug + '/', s.name, s.desc]))}</section>\n` + steps() + band() + foot());
}

// ---------- market pages ----------
for (const m of markets) {
  const p = '/' + m.slug + '/';
  const trail = [['Home', '/'], ['Where we work', '/where-we-work/'], [mName(m), p]];
  const items = m.top.map((sl) => { const c = comboOf(m.slug, sl); return [c ? '/' + m.slug + '/' + sl + '/' : '/services/' + sl + '/', svc[sl].name + (c ? ' in ' + mName(m) : ''), svc[sl].desc]; });
  page(p, head(p, m.title, m.desc, [org(), { '@type': 'WebPage', '@id': url(p), url: url(p), name: m.title, description: m.desc, about: { '@type': 'Country', name: mName(m) } }, crumbsLd(trail), faqLd(m.faqs)]) +
    crumbs(trail) +
    `<section class="hero"><span class="eyebrow">${esc(mName(m))}</span><h1>${m.h1}</h1><p class="lead">${esc(m.lead)}</p>\n${ctaRow()}</section>\n` +
    m.local.map((l) => `<section class="sec"><h2>${esc(l[0])}</h2><p>${esc(l[1])}</p></section>\n`).join('') +
    `<section class="sec"><h2>Tools ${esc(mName(m))} businesses ask us for</h2>${cards(items)}</section>\n` +
    `<section class="sec"><h2>Cities we work with</h2><p>We work with businesses in ${esc(m.cities.slice(0, -1).join(', '))} and ${esc(m.cities[m.cities.length - 1])}, and anywhere else in ${esc(m.name)}. The Problem Hunt is a 30-minute call, so distance doesn’t matter.</p><ul class="chips">${m.cities.map((c) => '<li>' + esc(c) + '</li>').join('')}</ul></section>\n` +
    steps() + faqHtml(m.faqs) + band() + foot());
}

// ---------- where we work hub ----------
{
  const p = '/where-we-work/';
  const t = 'Where We Work: Pakistan, UAE, Saudi Arabia, Gulf & USA | xuMax';
  const d = 'Custom business apps for SMEs in Pakistan, the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman and the USA. Based in Pakistan, working with teams worldwide.';
  const trail = [['Home', '/'], ['Where we work', p]];
  page(p, head(p, t, d, [org(), { '@type': 'CollectionPage', '@id': url(p), url: url(p), name: t, description: d }, crumbsLd(trail)]) +
    crumbs(trail) +
    `<section class="hero"><span class="eyebrow">Where we work</span><h1>Based in Pakistan. <em>Building for the Gulf and the USA.</em></h1><p class="lead">Our team is in Pakistan, one or two hours ahead of the Gulf and overlapping with the US morning. We work over calls, WhatsApp and screen-shares, wherever you are.</p>\n${ctaRow()}</section>\n` +
    `<section class="sec"><h2>Countries</h2>${cards(markets.map((m) => ['/' + m.slug + '/', mName(m), m.desc]))}</section>\n` +
    `<section class="sec"><h2>Most-asked-for tools by country</h2>${cards(combos.map((c) => ['/' + c.market + '/' + c.service + '/', svc[c.service].name + ' in ' + mName(mkt[c.market]), c.desc]))}</section>\n` + band() + foot());
}

// ---------- service × country pages ----------
for (const c of combos) {
  const s = svc[c.service], m = mkt[c.market];
  const p = '/' + m.slug + '/' + s.slug + '/';
  const trail = [['Home', '/'], [mName(m), '/' + m.slug + '/'], [s.name, p]];
  const faqs = c.faqs.concat(s.faqs.slice(-1));
  page(p, head(p, c.title, c.desc, [org(), { '@type': 'WebPage', '@id': url(p), url: url(p), name: c.title, description: c.desc, about: { '@id': url(p) + '#service' } }, serviceLd(s, m, p), crumbsLd(trail), faqLd(faqs)]) +
    crumbs(trail) +
    `<section class="hero"><span class="eyebrow">${esc(s.tool)} · ${esc(mName(m))}</span><h1>${c.h1}</h1><p class="lead">${esc(c.lead)}</p>\n${ctaRow()}</section>\n` +
    c.local.map((l) => `<section class="sec"><h2>${esc(l[0])}</h2><p>${esc(l[1])}</p></section>\n`).join('') +
    `<section class="sec"><h2>Three buttons. Zero drama.</h2><div class="btns">${s.buttons.map((b) => '<span>' + esc(b) + '</span>').join('')}</div><p class="ai">${esc(s.ai)}</p><ul class="list">${s.features.map((x) => '<li>' + esc(x) + '</li>').join('')}</ul></section>\n` +
    `<section class="sec"><h2>Across ${esc(m.name)}</h2><p>We work with businesses in ${esc(m.cities.join(', '))}.</p><ul class="chips">${m.cities.map((x) => '<li>' + esc(x) + '</li>').join('')}</ul></section>\n` +
    steps() + faqHtml(faqs) +
    `<section class="sec"><h2>More from xuMax in ${esc(mName(m))}</h2>${cards([['/' + m.slug + '/', 'All tools in ' + mName(m), m.desc], ['/services/' + s.slug + '/', s.name, s.desc]])}</section>\n` +
    band() + foot());
}

// ---------- homepage + runtime ----------
{
  const t = 'Custom Business Apps & AI Tools for SMEs | xuMax interActive';
  const d = 'Custom apps and AI tools for SMEs in Pakistan, the Gulf and the USA: maintenance software, food ordering, bookings and more. Fixed price, live in weeks.';
  const home = [org(),
    { '@type': 'WebSite', '@id': D + '/#website', url: D + '/', name: C.name, alternateName: C.shortName, publisher: { '@id': orgId }, inLanguage: 'en' },
    { '@type': 'WebPage', '@id': D + '/', url: D + '/', name: t, description: d, isPartOf: { '@id': D + '/#website' }, about: { '@id': orgId } },
    { '@type': 'OfferCatalog', '@id': D + '/#services', name: 'xuMax tools', itemListElement: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, url: url('/services/' + s.slug + '/'), provider: { '@id': orgId } } })) }];
  const tags = `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(t)}</title>
<meta name="description" content="${esc(d)}">
<link rel="canonical" href="${D}/">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#05052a">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(C.name)}">
<meta property="og:title" content="${esc(t)}">
<meta property="og:description" content="${esc(d)}">
<meta property="og:url" content="${D}/">
<meta property="og:image" content="${D}/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="en_US">
<meta name="twitter:card" content="summary_large_image">
${ld(home)}`;
  let h = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const from = '<meta charset="utf-8">\n<title>xuMax interActive</title>';
  if (!h.includes(from)) throw new Error('homepage head changed; update the head injection in seo/build.js');
  h = h.replace(from, tags);
  write('index.html', h);
}
copy('support.js', 'support.js');
copy('vendor', 'vendor');
copy('assets', 'assets');
copy('seo/seo.css', 'css/seo.css');
copy('seo/favicon.svg', 'favicon.svg');
for (const img of ['og-image.png', 'logo.png', 'apple-touch-icon.png', 'favicon.ico']) if (fs.existsSync(path.join(__dirname, img))) copy('seo/' + img, img);

// ---------- robots, sitemap, llms.txt ----------
write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${D}/sitemap.xml\n`);
const all = ['/'].concat(pages);
const pri = (p) => p === '/' ? '1.0' : (/^\/(services|where-we-work)\/$/.test(p) || markets.some((m) => p === '/' + m.slug + '/') ? '0.8' : '0.7');
write('sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + all.map((p) => `  <url><loc>${url(p)}</loc><lastmod>${C.lastmod}</lastmod><priority>${pri(p)}</priority></url>`).join('\n') + '\n</urlset>\n');
write('llms.txt', `# ${C.name}\n\n> ${C.tagline} We build custom software and AI tools for small and medium businesses, highly customised around how each business already works: fixed price, live in weeks, zero training needed. Based in Pakistan; working with businesses in Pakistan, the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman and the USA.\n\n` +
  `## How a project runs\n\n- Problem Hunt: free 30-minute call\n- Audit: 1 week, three tool ideas with fixed prices\n- Prototype: 1 to 2 weeks, tested by real staff\n- Build & go live: a few weeks\n- Care plan: monthly hosting, fixes and small upgrades\n\n` +
  `## Services\n\n${services.map((s) => `- [${s.name}](${url('/services/' + s.slug + '/')}): ${s.desc}`).join('\n')}\n\n` +
  `## Where we work\n\n${markets.map((m) => `- [${mName(m)}](${url('/' + m.slug + '/')}): ${m.desc}`).join('\n')}\n\n` +
  `## Contact\n\n- Book a free Problem Hunt: ${D}/#contact\n${C.email ? '- Email: ' + C.email + '\n' : ''}${C.phone ? '- Phone: ' + C.phone + '\n' : ''}`);

console.log('built', all.length, 'pages into', path.relative(ROOT, OUT) + '/');
