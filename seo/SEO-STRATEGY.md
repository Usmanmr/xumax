# xuMax SEO & Marketing Strategy

Domain: **https://www.xumax.site** · Markets: Pakistan, UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, USA · Language: English now, Arabic in phase 2 · Written 2 November 2026

---

## 1. The honest starting point

- **No one can guarantee the top spot on Google.** What works is the right pages for the right searches, steady proof that real businesses trust you, and patience. New domains usually take **3 to 9 months** to rank for competitive terms.
- **Target what your buyers type, not what sounds biggest.** Someone searching "maintenance service in Dubai" wants an AC technician today, so ranking there would bring the wrong people. Your buyers search for things like:
  - "maintenance management software Dubai"
  - "complaint management system Pakistan"
  - "work order app"
  - "restaurant ordering system Riyadh"
  - "food delivery app for restaurants".

  The pages are built around these.
- **Facility and maintenance *companies* are buyers too.** Searches like "software for facility management companies UAE" are worth owning.
- **Don't mass-produce city pages.** A page for every city with only the city name swapped is what Google calls a *doorway page*. It can get the whole site demoted. Cities are mentioned on the country pages and in the structured data. A city gets its own page only when you have something real to say there, such as a client, a case study or a local partner.
- **Google Maps results need a real address.** You can only appear in the map listings where you have one, so that means Pakistan. Never use a virtual office for a Google Business Profile: it breaks Google's rules and gets profiles suspended. Gulf and US rankings come from the normal results below the map.

## 2. What is built (the `site/` folder)

Run `node seo/build.js` after any change. It rebuilds `site/`, which is exactly what you upload.

| Type | Count | URLs |
|---|---|---|
| Homepage | 1 | `/`: new title, description, mobile viewport, canonical, social image, structured data, footer links to every page below |
| Services hub + service pages | 1 + 10 | `/services/`, `/services/maintenance-management-software/`, `/services/restaurant-ordering-app/`, hotel housekeeping, clinic booking, school admissions, factory downtime, sales order app, gym member app, websites & reels, custom software |
| Country hub + country pages | 1 + 8 | `/where-we-work/`, `/pakistan/`, `/uae/`, `/saudi-arabia/`, `/qatar/`, `/kuwait/`, `/bahrain/`, `/oman/`, `/usa/` |
| Service × country pages | 8 | `/pakistan/…`, `/uae/…`, `/saudi-arabia/…`, `/usa/…` for maintenance software and restaurant ordering |
| Technical files | | `robots.txt`, `sitemap.xml` (29 URLs), `llms.txt` (for AI assistants), `favicon.ico/.svg`, `logo.png`, `apple-touch-icon.png`, `og-image.png` |

Every landing page has:
- a unique title (65 characters or fewer) and description (165 or fewer)
- one H1, breadcrumbs, a visible FAQ and internal links
- structured data: Organization, Service with the cities served, BreadcrumbList and FAQPage.

The pages are plain HTML with no scripts, so they load fast and every search engine and AI crawler can read them.

The content only repeats claims the homepage already makes: fixed price, live in weeks, three buttons, a free Problem Hunt, the one-week audit and the care plan. Pages never claim clients, offices or prices you haven't given me. Gulf and US pages say plainly that the team is based in Pakistan and works remotely.

## 3. Before you upload: checklist

1. **Connect the contact form.** The homepage form still shows "Preview page: this form isn't connected yet". Without it, every visitor these pages bring in is lost. Add the WhatsApp number too.
2. **Fill in `seo/config.js`:**
   - email, phone and WhatsApp
   - full Pakistan office address
   - social profile links

   Then run `node seo/build.js`. Empty fields are simply left out, and a WhatsApp number adds "Chat on WhatsApp" buttons to every page.
3. **Upload the *contents* of `site/`** to the web root, so `site/index.html` becomes `https://www.xumax.site/`.
4. **Hosting setup:**
   - force HTTPS
   - redirect `xumax.site` to `www.xumax.site` with a 301
   - make sure `/services/` serves `/services/index.html`, which almost every host does by default.
5. **Google Search Console:**
   - verify the domain (DNS record)
   - submit `https://www.xumax.site/sitemap.xml`
   - use URL Inspection → Request indexing on the homepage and the 8 service × country pages.
6. **Bing Webmaster Tools:** import from Search Console and submit the sitemap. Bing also feeds several AI assistants.
7. **Analytics:** Google Analytics 4, or a lighter tool like Plausible. Track two conversions: form submit and WhatsApp click.

## 4. Keyword map

| Page | Main searches | Supporting searches |
|---|---|---|
| `/` | custom business software, AI tools for small business | software house Pakistan, custom apps for SMEs |
| `/services/maintenance-management-software/` | maintenance management software, complaint management system | work order app, CMMS for small business, facility maintenance app, QR maintenance request |
| `/pakistan/maintenance-management-software/` | maintenance management software Pakistan, complaint management system Lahore/Karachi | hospital maintenance software Pakistan, housing society complaint app |
| `/uae/maintenance-management-software/` | maintenance management software UAE/Dubai | facility management software Dubai, CAFM alternative |
| `/saudi-arabia/maintenance-management-software/` | maintenance management software Saudi Arabia/Riyadh | facility maintenance app Jeddah |
| `/usa/maintenance-management-software/` | work order software small business, maintenance request software | property maintenance app, HOA maintenance requests |
| `/services/restaurant-ordering-app/` | restaurant online ordering system, food delivery app for restaurants | WhatsApp ordering for restaurants, kitchen order screen |
| `/pakistan/restaurant-ordering-app/` | food delivery app development Pakistan, restaurant ordering system Lahore/Karachi | WhatsApp ordering Pakistan, cloud kitchen software |
| `/uae/restaurant-ordering-app/` | restaurant ordering system Dubai, commission-free ordering UAE | cloud kitchen ordering software |
| `/saudi-arabia/restaurant-ordering-app/` | restaurant ordering app Saudi Arabia, food ordering system Riyadh | |
| `/usa/restaurant-ordering-app/` | commission-free online ordering, restaurant ordering system | DoorDash alternative for restaurants |
| Other service pages | hotel housekeeping app, clinic appointment app, school admission software, downtime tracking software, order booking app, gym member app, website design small business, custom software development | |
| Country pages | custom software / business apps + country name | city mentions: Lahore, Dubai, Riyadh, Doha… |

## 5. Local SEO (Pakistan) and directory listings

- **Google Business Profile** at your real Pakistan office:
  - category "Software company"
  - services list matching section 4
  - 10+ real photos of the team and office
  - a post every week
  - ask every happy client for a review. Reviews are the biggest local ranking factor.
- **Bing Places** and **Apple Business Connect** with the same details.
- **Identical name, address and phone everywhere.** Use exactly the same business name, address and phone on your website, Google profile and every directory.
- **Pakistan:**
  - P@SHA (Pakistan Software Houses Association) membership
  - PSEB (Pakistan Software Export Board) registration, which also helps when exporting to Gulf and US clients.

## 6. Authority: getting other sites to point at you

Most of your ranking power will come from here. Pages alone won't rank against established competitors.

- **Software and agency directories:**
  - **Clutch**, **GoodFirms** and **DesignRush**, with verified client reviews. These rank well in Gulf and US searches and feed AI answers.
  - **List MaxWorkManager as a product** on **Capterra / G2 / GetApp**, in the "Maintenance Management" and "CMMS" categories. These sites dominate "best maintenance software" searches in every country.
  - **LinkedIn company page** and **Crunchbase** profile, with each added to `sameAs` in `seo/config.js`.
- **Case studies:** one for each finished project, with the client's permission. Write it as problem → three buttons → numbers. Each one becomes a page, and later a city page where it fits.
- **PR:** pitch launch and case-study stories to tech news sites:
  - Pakistan: TechJuice, ProPakistani
  - Middle East: MENAbytes, Wamda.
- **Partners:** facility management companies, POS resellers and restaurant consultants who can link to you and refer clients.

## 7. Content plan (first 12 weeks)

Publish one useful guide a week as a page under `/guides/`, linking to the matching service and country pages:

1. How hospitals in Pakistan can stop losing AC complaints in WhatsApp
2. Aggregator commission vs your own WhatsApp ordering: the maths for a UAE restaurant
3. A QR maintenance request system for housing societies: setup in a day
4. What a facility management company in Dubai should report to clients every month
5. Saudi restaurants: preparing ordering for Ramadan rushes
6. Factory downtime: measuring the real cost of "10 minutes"
7. School admission season checklist (Pakistan)
8. Work order software vs WhatsApp groups (US property managers)
9. Hotel room status without a big property management system
10. Clinic no-shows: WhatsApp reminders that work
11. Case study #1
12. Case study #2

## 8. Marketing by region

SEO is slow. Paid ads and outreach bring leads in the meantime and show which keywords convert. Treat every budget below as a starting test, then move money to whatever brings booked Problem Hunts.

| Region | Who to reach | Channels | Message |
|---|---|---|---|
| **Pakistan** | Hospital admins, school groups, housing societies, restaurants, factories | Facebook/Instagram ads with short reels, Google Search ads ("complaint management system", "restaurant software Lahore"), LinkedIn, WhatsApp click-to-chat ads, ITCN Asia and P@SHA events | Urdu/English reels showing the "312 unread → three buttons" story. Start around PKR 50–100k a month. |
| **UAE** | Facility management companies, property managers, restaurant groups, clinics | Google Search ads on the service × country keywords, LinkedIn ads and outreach to FM managers, GITEX Global (October, Dubai) | "Custom, fixed price, no per-user fees, team one hour ahead." Start around USD 500–1,000 a month. |
| **Saudi Arabia** | Compounds, FM companies, restaurant chains, clinics | Google Search ads, LinkedIn, LEAP (February, Riyadh), Arabic content in phase 2 | Fast-growing teams need tools that require no training. Start around USD 500–1,000 a month. |
| **Qatar, Kuwait, Bahrain, Oman** | FM, restaurants, clinics, hotels | Organic (country pages), LinkedIn outreach, small Google Search tests | Start with LinkedIn outreach and test ads only once a market shows interest. |
| **USA** | Independent restaurants, property managers/HOAs, clinics, especially owners in South Asian and Arab communities | Google Search ads ("work order software small business", "commission-free online ordering"), Clutch profile, LinkedIn, community business associations | "Custom tool at a fixed price, often less than a year of per-seat SaaS." Start around USD 1,000 a month; US clicks cost more. |

Everywhere:
- Post the MaxBot reels weekly on Instagram, TikTok, YouTube Shorts and LinkedIn. Each one should link to a service page.
- Send ads to the matching landing page, not the homepage. For example, a Dubai ad for "restaurant ordering" goes to `/uae/restaurant-ordering-app/`.

## 9. Showing up in AI answers (ChatGPT, Perplexity, Google AI Overviews)

Already in place:
- `llms.txt`
- plain-HTML pages with clear facts and FAQs
- consistent structured data
- open `robots.txt`

What moves it further:
- mentions on Clutch, G2, Capterra, LinkedIn and news sites
- the same one-sentence description of xuMax everywhere: "Easy custom-built AI tools for small and medium businesses."

## 10. Phase 2: Arabic

- **When:** once Gulf leads start coming in.
- **Language:** have a native speaker write Arabic versions of the UAE, Saudi and Qatar pages under `/ar/…`. Don't publish machine translation unedited.
- **Search engines:** add `hreflang` links between each English page and its Arabic version. The build script has one place to add them.
- **Other languages:** Urdu landing pages for Pakistan are optional, since Pakistani business buyers mostly search in English.

## 11. What to measure

| Metric | Where | 90-day target |
|---|---|---|
| Pages indexed | Search Console → Pages | All 29 |
| Impressions for service × country keywords | Search Console → Performance | Steady growth week on week |
| Booked Problem Hunts by source | Analytics + form | Know which channel each one came from |
| Reviews | Google profile, Clutch | 5+ each |
| Links from other sites | Search Console → Links | 15+ quality directories and profiles |

## 12. Technical notes

- **The homepage is drawn by JavaScript** (the Design Component runtime). Google renders it, but some crawlers and AI tools only see the raw template. That's why the landing pages are plain HTML and the homepage links to all of them from its footer. If the homepage is rebuilt later, render the text into the HTML on the server.
- **Mobile:** the homepage now has a mobile `viewport` tag, so phones use the mobile layout. Before, they showed the desktop layout zoomed out, and Google ranks sites on their mobile version.
- **Images:** keep any new images under about 200 KB and give them descriptive `alt` text.
- **After editing `index-v2.html` or the content:**
  1. rerun `node seo/build.js` and re-upload `site/`
  2. update `lastmod` in `seo/config.js` when content changes meaningfully.
