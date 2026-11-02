// Page content for the SEO landing pages. Every claim here mirrors what the homepage already says;
// anything that depends on facts we don't have yet (prices, clients, offices) is left out on purpose.

const services = [
  {
    slug: 'maintenance-management-software',
    name: 'Maintenance Management Software',
    tool: 'MaxWorkManager',
    title: 'Maintenance Management Software & Complaint App | xuMax',
    desc: 'MaxWorkManager: maintenance and complaint management software for hospitals, campuses, malls, housing and facility companies. Report by QR, fix with three buttons.',
    h1: 'Maintenance management software your technicians <em>actually use</em>',
    lead: 'MaxWorkManager is our flagship: maintenance by area and department. Staff report by QR, supervisors assign in one tap, technicians fix with three buttons, and you see every job live.',
    problems: ['AC, plumbing and electrical complaints lost in WhatsApp groups', '“Any update??” messages because nobody knows who owns the job', 'No record of how long repairs really take, or which fault keeps coming back', 'Paper registers and Excel sheets that never match reality'],
    buttons: ['Start', 'Photo', 'Done'],
    ai: 'AI bit: sorts each complaint to the right department and spots repeat faults.',
    features: ['QR codes in every room, ward, block or lift: scan, describe, send', 'Jobs routed by area and department, with one-tap assignment', 'Technicians close jobs with a photo, so “done” really means done', 'Live screen for the admin office; reports by building, department and technician', 'Works for in-house teams and for facility companies serving many clients'],
    who: ['Private hospitals and clinic chains', 'Colleges, universities and school campuses', 'Shopping malls and plazas', 'Housing societies, residential towers and office buildings', 'Property and facility management companies', 'Hotels, banks and multi-branch businesses'],
    keywords: 'maintenance management software, complaint management system, work order app, CMMS, facility maintenance app',
    faqs: [
      ['Is this a CMMS?', 'It does the job most small and medium teams want from a CMMS: complaints in, jobs assigned, work tracked and reported. It just skips the 200-page manual. We shape it around how your maintenance team already works.'],
      ['Do my technicians need training?', 'No. If your staff need training, we built it wrong. Technicians see three buttons: Start, Photo, Done.'],
      ['Can it handle several buildings or clients?', 'Yes. Jobs are organised by area and department, supervisors see only their own block, and you see everything. Facility companies can track each client separately with deadlines and monthly reports.'],
      ['How much does it cost?', 'Fixed price. After a free 30-minute Problem Hunt and a one-week audit, we hand you three tool ideas, each with a fixed price, before you commit to anything.']
    ],
    related: ['hotel-housekeeping-app', 'factory-downtime-tracker', 'custom-business-software']
  },
  {
    slug: 'restaurant-ordering-app',
    name: 'Restaurant Ordering & Food Delivery App',
    tool: 'WhatsApp Ordering Assistant',
    title: 'Restaurant Ordering & Food Delivery App for Your Brand | xuMax',
    desc: 'Take food orders on WhatsApp and your own app, send them to a kitchen screen and update customers automatically. Built for restaurants, cloud kitchens and cafés.',
    h1: 'Your own food ordering and delivery system, <em>not another commission</em>',
    lead: 'Our WhatsApp Ordering Assistant takes orders, sends them to a kitchen screen and tells the customer when it’s on the way. Your orders, your customers, your brand.',
    problems: ['Orders spread across 3 phones, 2 notebooks and one waiter’s memory', 'Phone orders that never reach the kitchen', 'Customers asking “where is my order?” every ten minutes', 'Aggregator commissions eating the margin on your loyal regulars'],
    buttons: ['Accepted', 'Ready', 'Sent'],
    ai: 'AI bit: understands “2 karahi, 1 extra spicy” in Urdu or English.',
    features: ['Orders from WhatsApp straight to a kitchen order screen', 'Automatic status messages: accepted, ready, out for delivery', 'Dine-in, takeaway and delivery in one queue', 'Rider and branch view for multi-branch restaurants', 'Daily sales and best-seller reports without counting slips'],
    who: ['Restaurants and family dining', 'Cloud kitchens and home-chef brands', 'Cafés, bakeries and sweet shops', 'Multi-branch food chains', 'Caterers taking bulk orders'],
    keywords: 'food delivery app for restaurants, restaurant online ordering system, WhatsApp ordering, kitchen order screen, food delivery app development',
    faqs: [
      ['Will this replace delivery aggregators?', 'It doesn’t have to. Many restaurants keep aggregators for new customers and move regulars to their own WhatsApp ordering, where there’s no commission per order.'],
      ['Do customers need to download an app?', 'No. Customers order on WhatsApp, which they already use. If you also want a branded app or website ordering, we can scope that in the audit.'],
      ['Can the kitchen use it during a rush?', 'Yes. The kitchen screen shows three buttons per order: Accepted, Ready, Sent. Nothing to learn in the middle of a Friday night rush.'],
      ['How long does it take?', 'A clickable prototype in 1 to 2 weeks after the audit, and live in weeks, not months, at a fixed price.']
    ],
    related: ['websites-and-reels', 'sales-order-app', 'custom-business-software']
  },
  {
    slug: 'hotel-housekeeping-app',
    name: 'Hotel Housekeeping & Room Status App',
    tool: 'Housekeeping & Room Status',
    title: 'Hotel Housekeeping & Room Status App | xuMax',
    desc: 'Live room status for hotels, resorts and marriage halls: dirty, cleaning, ready, out of order. Guest requests and maintenance issues never get forgotten.',
    h1: 'Finally answer the question: <em>is room 305 clean?</em>',
    lead: 'Every room’s status live: dirty, cleaning, ready, out of order. Guest requests and maintenance issues go to the right person and never get forgotten.',
    problems: ['Front desk calling housekeeping to ask which rooms are ready', 'Towel and amenity requests forgotten for 40 minutes', 'AC and plumbing issues reported verbally and lost', 'No checklist before the next guest, or the next wedding'],
    buttons: ['Cleaning', 'Done', 'Issue'],
    ai: 'AI bit: turns a voice note like “AC leaking in 214” into a job for maintenance.',
    features: ['Live room board for front desk and housekeeping', 'Guest requests with timers so nothing waits too long', 'One tap to raise a maintenance issue from any room', 'Checklists for checkout cleans, inspections and events', 'Floor and shift reports for managers'],
    who: ['Hotels and serviced apartments', 'Resorts and guest houses', 'Marriage halls and event venues', 'Hostels and staff accommodation'],
    keywords: 'hotel housekeeping app, room status software, hotel maintenance app, housekeeping management system',
    faqs: [
      ['Does it connect to our PMS?', 'We look at what you already use during the audit. If your property system can share room status, we connect to it; if not, the app works on its own.'],
      ['Will housekeeping staff manage it?', 'Yes. Three buttons per room: Cleaning, Done, Issue. If your staff need training, we built it wrong.'],
      ['Can it cover events and weddings?', 'Yes. Event checklists make sure nothing is forgotten before guests arrive.']
    ],
    related: ['maintenance-management-software', 'restaurant-ordering-app', 'custom-business-software']
  },
  {
    slug: 'clinic-appointment-app',
    name: 'Clinic & Salon Appointment App',
    tool: 'Appointment Assistant',
    title: 'Clinic & Salon Appointment Booking on WhatsApp | xuMax',
    desc: 'An appointment assistant that books, confirms and reminds patients and clients on WhatsApp so no-shows stop eating your day. For clinics, dentists and salons.',
    h1: 'Appointments that book, confirm and remind <em>themselves</em>',
    lead: 'Our Appointment Assistant books, confirms and reminds on WhatsApp, so no-shows stop eating your day and your reception stops living on the phone.',
    problems: ['Reception spending the day on calls and messages', 'No-shows leaving empty slots', 'Double bookings from paper diaries', 'Patients who “never got a reminder”'],
    buttons: ['Booked', 'Confirmed', 'Arrived'],
    ai: 'AI bit: patients reply 1 to confirm or 2 to reschedule, in plain words.',
    features: ['Booking and reminders on WhatsApp', 'Confirm or reschedule with one reply', 'Doctor, stylist or room calendars side by side', 'Arrival tracking at the front desk', 'No-show and busiest-hour reports'],
    who: ['Clinics and polyclinics', 'Dental and physiotherapy practices', 'Salons, spas and barbers', 'Diagnostic and sample-collection centres'],
    keywords: 'clinic appointment app, WhatsApp appointment booking, salon booking system, patient reminder software',
    faqs: [
      ['Do patients need an app?', 'No. Everything happens on WhatsApp, which patients already use.'],
      ['Can each doctor see their own schedule?', 'Yes. Each doctor, stylist or room has its own calendar, and reception sees them all.'],
      ['What about patient privacy?', 'We keep patient data to what the booking needs and agree how it’s stored during the audit, in line with the privacy rules where you operate.']
    ],
    related: ['maintenance-management-software', 'school-admissions-software', 'custom-business-software']
  },
  {
    slug: 'school-admissions-software',
    name: 'School Admissions & Enquiry Software',
    tool: 'Admissions Desk',
    title: 'School Admissions & Enquiry Management Software | xuMax',
    desc: 'Admissions Desk logs every enquiry, makes sure every parent is called back and tracks every seat through admission season. For schools, colleges and school groups.',
    h1: 'Admission season, <em>minus the panic</em>',
    lead: 'Admissions Desk logs every enquiry, makes sure every parent gets called back and tracks every seat, from first message to admitted.',
    problems: ['400 enquiries and one very tired receptionist', 'Parents who were never called back', 'Fee and form questions answered again and again', 'Branches doing the same thing ten different ways'],
    buttons: ['Called', 'Visited', 'Admitted'],
    ai: 'AI bit: answers fee and form questions on WhatsApp, day and night.',
    features: ['Every enquiry logged from WhatsApp, phone and walk-ins', 'Call-back reminders so no parent is forgotten', 'Seat tracking by class, campus and session', 'Head office view across all branches', 'Simple maintenance requests for campuses too'],
    who: ['Private schools and school groups', 'Colleges and universities', 'Academies and tuition centres', 'Branch networks across several cities'],
    keywords: 'school admission software, enquiry management system for schools, admission CRM, college admissions app',
    faqs: [
      ['Can several campuses share it?', 'Yes. Every campus uses the same three buttons, and head office sees all branches side by side.'],
      ['Can parents apply online?', 'Yes, if you want an online form. We scope it in the audit along with your existing fee and form process.'],
      ['Does it handle campus maintenance?', 'Campuses often pair it with MaxWorkManager so projectors and ACs get fixed as fast as enquiries get answered.']
    ],
    related: ['maintenance-management-software', 'clinic-appointment-app', 'custom-business-software']
  },
  {
    slug: 'factory-downtime-tracker',
    name: 'Factory Downtime Tracker',
    tool: 'Downtime Tracker',
    title: 'Factory Downtime Tracking & Maintenance App | xuMax',
    desc: 'Know which line is down, who is fixing it and how long it really took. A downtime tracker for factories and industrial units, with shift reports from voice notes.',
    h1: '“10 minutes” now means <em>10 minutes</em>',
    lead: 'Downtime Tracker shows which line is down, who’s fixing it and how long it really took, so breakdowns stop hiding inside shift reports.',
    problems: ['“Coming in 10 minutes,” said maintenance, two hours ago', 'Shift reports that live in one supervisor’s head', 'No idea which machine causes the most lost hours', 'Paper logs filled in at the end of the week'],
    buttons: ['Down', 'Fixing', 'Running'],
    ai: 'AI bit: turns shift voice notes into a clean daily report.',
    features: ['One tap to mark a line or machine down', 'Maintenance alerted instantly, with response and repair times', 'Live plant view for supervisors and owners', 'Downtime reports by machine, shift and cause', 'Daily reports drafted from voice notes'],
    who: ['Textile, weaving and garment units', 'Food processing and packaging plants', 'Plastics, steel and light manufacturing', 'Warehouses and production lines'],
    keywords: 'downtime tracking software, factory maintenance app, machine breakdown log, OEE downtime tracker',
    faqs: [
      ['Does it need sensors on machines?', 'No. Supervisors and operators mark status with three buttons. If you already have machine data, we can look at connecting it.'],
      ['Will it work on the factory floor?', 'Yes. Big buttons on any phone, built for gloves, noise and hurry.'],
      ['Can owners see it remotely?', 'Yes. The live plant view and daily reports work from anywhere.']
    ],
    related: ['maintenance-management-software', 'sales-order-app', 'custom-business-software']
  },
  {
    slug: 'sales-order-app',
    name: 'Sales Rep Order App for Distributors',
    tool: 'Sales Rep Order App',
    title: 'Sales Rep Order Taking App for Distributors | xuMax',
    desc: 'Reps take orders shop by shop on their phone: no paper, no lost slips, live stock. An order booking app for distributors and FMCG field teams.',
    h1: 'Goodbye paper order books. <em>You won’t be missed.</em>',
    lead: 'Reps take orders shop by shop on their phone. No paper, no lost slips, and the warehouse sees every order the moment it’s sent.',
    problems: ['Order slips lost between the shop and the warehouse', 'Reps calling in orders that get written down wrong', 'No live view of stock while the rep is in the shop', 'Route performance you only discover at month end'],
    buttons: ['Shop', 'Items', 'Send'],
    ai: 'AI bit: suggests what each shop usually orders.',
    features: ['Shop-by-shop order booking on any phone', 'Live stock and price lists', 'Orders straight to the warehouse and dispatch', 'Route and rep performance reports', 'Works with patchy mobile signal'],
    who: ['FMCG and food distributors', 'Pharma and medical distributors', 'Wholesalers and dealers', 'Field sales teams'],
    keywords: 'order booking app, sales rep app, distributor order taking software, field sales app',
    faqs: [
      ['Does it work offline?', 'It’s built for patchy signal: orders are saved on the phone and sent when the connection comes back.'],
      ['Can it connect to our accounting software?', 'We check what you use during the audit and connect where it’s possible.'],
      ['How fast can reps start?', 'Same day. Three buttons: Shop, Items, Send.']
    ],
    related: ['restaurant-ordering-app', 'factory-downtime-tracker', 'custom-business-software']
  },
  {
    slug: 'gym-member-app',
    name: 'Gym & Club Member App',
    tool: 'Member App',
    title: 'Gym Member App: Check-ins, Renewals & Trainer Booking | xuMax',
    desc: 'Check-ins by QR, renewal reminders and trainer bookings in one simple app for gyms, fitness studios and clubs.',
    h1: 'Finally, <em>proof that Ali exists</em>',
    lead: 'Member App puts QR check-ins, renewal reminders and trainer bookings in one simple app, so your front desk stops guessing who renewed.',
    problems: ['“Did Ali renew?” asked every morning', 'Trainers double-booked or no-shows', 'Membership cards lost again', 'Members who quietly stop coming, then cancel'],
    buttons: ['Check in', 'Renew', 'Book'],
    ai: 'AI bit: flags members who stopped coming before they cancel.',
    features: ['QR check-in at the door', 'Automatic renewal reminders', 'Trainer and class booking', 'Attendance and churn reports', 'Works for multi-branch clubs'],
    who: ['Gyms and fitness studios', 'Sports and social clubs', 'Martial arts and dance academies', 'Swimming and padel clubs'],
    keywords: 'gym member app, gym management software, fitness club check-in app, membership renewal reminders',
    faqs: [
      ['Do members need to install something?', 'We scope it in the audit: a light app or WhatsApp-based reminders, whichever your members will actually use.'],
      ['Can it handle several branches?', 'Yes, with each branch’s check-ins and renewals visible to head office.']
    ],
    related: ['clinic-appointment-app', 'websites-and-reels', 'custom-business-software']
  },
  {
    slug: 'websites-and-reels',
    name: 'Websites & Scroll-Stopping Reels',
    tool: 'Websites & reels',
    title: 'Business Websites & Video Reels for Social Media | xuMax',
    desc: 'Fast, good-looking business websites and scroll-stopping reels for Instagram, TikTok and Facebook, from the team that builds your business tools.',
    h1: 'We also make you <em>look amazing</em>',
    lead: 'Yes, we also do the pretty stuff: fast business websites and scroll-stopping reels, made by the same team that builds your tools, so your marketing matches how you actually work.',
    problems: ['A website nobody has updated since it launched', 'Pages that are slow on phones, where your customers are', 'Social posts that don’t stop anyone’s thumb', 'Marketing that promises things your operations can’t deliver'],
    buttons: ['Brief', 'Shoot', 'Post'],
    ai: 'AI bit: drafts captions and cut-downs for each platform from one shoot.',
    features: ['Mobile-first websites that load fast', 'Built for search from day one: clean pages, structured data, local pages', 'Short-form reels for Instagram, TikTok and Facebook', 'Website ordering or booking, connected to your tools', 'Simple monthly care plans'],
    who: ['Restaurants, cafés and food brands', 'Clinics, salons and gyms', 'Schools and colleges', 'Any small business that wants to look as good as it is'],
    keywords: 'website design for small business, business website development, video reels production, social media reels',
    faqs: [
      ['Can you connect the website to ordering or booking?', 'Yes. That’s the point of having one team: your website can take orders or bookings straight into the tools we build.'],
      ['Do you shoot the reels?', 'Tell us what you need in the Problem Hunt and we’ll scope the shoot, editing and posting plan.']
    ],
    related: ['restaurant-ordering-app', 'gym-member-app', 'custom-business-software']
  },
  {
    slug: 'custom-business-software',
    name: 'Custom Business Software & AI Tools',
    tool: 'Custom tools',
    title: 'Custom Business Software & AI Tools for SMEs | xuMax',
    desc: 'Custom-built software and AI tools for small and medium businesses: fixed price, live in weeks, zero training needed. Built around how you already work.',
    h1: 'Software that fits your business. <em>Not the other way round.</em>',
    lead: 'We use AI tools to build products highly customised around how your business already works: fixed price, live in weeks, at a fraction of agency cost.',
    problems: ['Off-the-shelf software that makes your staff change how they work', 'Per-user fees that grow faster than your team', 'Business processes running on WhatsApp groups and vibes', 'Agency quotes measured in months and lakhs'],
    buttons: ['Hunt', 'Audit', 'Build'],
    ai: 'AI bit: we use AI tools to build faster, and add AI where it saves your team real time.',
    features: ['Built around your existing workflow, not a template', 'Fixed price, agreed before we start', 'A clickable prototype tested by your real staff', 'No per-user fees eating your budget', 'Monthly care plan for hosting, fixes and small upgrades'],
    who: ['Multi-branch businesses in several cities', 'Banks and microfinance branch networks', 'Shopping malls and property companies', 'Any small or medium business with a messy process'],
    keywords: 'custom software development, custom business software, AI tools for small business, software house',
    faqs: [
      ['How is this different from an agency?', 'Fixed price, live in weeks and built around one problem at a time. You see a clickable prototype within 1 to 2 weeks of the audit.'],
      ['What if my business is unusual?', 'Good. Describe it in the Problem Hunt and we’ll show you what three buttons could do for it.'],
      ['Who owns the software?', 'We agree ownership, hosting and support in writing before the build starts, as part of the fixed price.']
    ],
    related: ['maintenance-management-software', 'restaurant-ordering-app', 'websites-and-reels']
  }
];

// Where we work. We are based in Pakistan and work with Gulf and US teams remotely.
const markets = [
  {
    slug: 'pakistan', name: 'Pakistan', code: 'PK', adj: 'Pakistani',
    cities: ['Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Peshawar', 'Sialkot', 'Hyderabad', 'Quetta'],
    title: 'Custom Business Apps & Software in Pakistan | xuMax',
    desc: 'Custom maintenance, ordering, admissions and business apps for Pakistani SMEs in Lahore, Karachi, Islamabad and beyond. Fixed price, live in weeks, Urdu and English.',
    h1: 'Business apps built for how <em>Pakistan</em> actually works',
    lead: 'We’re a Pakistani team building custom tools for hospitals, restaurants, schools, factories, hotels and housing societies, in English and Urdu, at a fixed price.',
    local: [
      ['WhatsApp first, because that’s where your business already runs', 'Most Pakistani businesses run on WhatsApp groups: complaints, orders, approvals, all mixed together. We don’t fight that. Our tools take requests from WhatsApp and turn them into jobs with an owner, a status and a deadline.'],
      ['Urdu, English and everything in between', 'Your staff and customers write in Urdu, English and Roman Urdu, often in the same message. Our AI bits understand “2 karahi, 1 extra spicy” and “AC kaam nahi kar raha” alike.'],
      ['Local payments and the way you get paid', 'Where an app needs payments, we design around what your customers already use, such as JazzCash, Easypaisa, Raast transfers, bank transfer and cash on delivery.'],
      ['Close enough to visit, priced for local budgets', 'Fixed prices agreed upfront, no per-user fees, and a team in your time zone. Load-shedding and patchy signal? Our apps are built to save work and send it when the connection comes back.']
    ],
    top: ['maintenance-management-software', 'restaurant-ordering-app', 'school-admissions-software', 'factory-downtime-tracker', 'hotel-housekeeping-app', 'sales-order-app'],
    faqs: [
      ['Where is xuMax based?', 'We’re based in Pakistan and work with businesses across the country, in person and online.'],
      ['Do you work outside Lahore and Karachi?', 'Yes. We work with teams in Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Sialkot and other cities; the Problem Hunt is a 30-minute call, so distance doesn’t matter.'],
      ['Can the app be in Urdu?', 'Yes. Screens, messages and reports can be in Urdu, English or both.']
    ]
  },
  {
    slug: 'uae', name: 'the UAE', short: 'UAE', code: 'AE', adj: 'UAE',
    cities: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Al Ain'],
    title: 'Custom Business Software & Apps in the UAE | xuMax',
    desc: 'Maintenance, food ordering, housekeeping and custom business apps for SMEs in Dubai, Abu Dhabi and Sharjah. Fixed price, live in weeks, built around your workflow.',
    h1: 'Custom business apps for <em>UAE</em> teams that move fast',
    lead: 'From facility companies in Dubai to restaurants in Sharjah, we build tools around how your team already works: fixed price, live in weeks, and no per-user fees.',
    local: [
      ['Built for multinational teams', 'UAE teams mix many languages and nationalities. Three-button screens work for everyone on day one, and messages can go out in English, Arabic, Urdu or Hindi where you need them.'],
      ['Facility and property management is big here', 'Towers, communities, malls and hotels generate a constant stream of maintenance requests. MaxWorkManager routes them by building and client, with deadlines and monthly reports your clients will actually read.'],
      ['Data and privacy', 'We agree where data lives and who can see it during the audit, with the UAE’s Personal Data Protection Law (Federal Decree-Law No. 45 of 2021) in mind.'],
      ['Working hours that overlap', 'Pakistan is one hour ahead of the UAE, so our working day overlaps yours almost completely. Calls, WhatsApp and screen-shares are how we work.']
    ],
    top: ['maintenance-management-software', 'restaurant-ordering-app', 'hotel-housekeeping-app', 'clinic-appointment-app', 'sales-order-app', 'custom-business-software'],
    faqs: [
      ['Do you have an office in the UAE?', 'Our team is based in Pakistan and works with UAE businesses remotely, one hour ahead of Gulf Standard Time.'],
      ['Can the app be in Arabic?', 'Tell us in the Problem Hunt and we’ll scope Arabic screens and messages alongside English.'],
      ['How do we pay?', 'Fixed price, agreed in writing after the audit, in a currency we agree upfront.']
    ]
  },
  {
    slug: 'saudi-arabia', name: 'Saudi Arabia', short: 'Saudi Arabia', code: 'SA', adj: 'Saudi',
    cities: ['Riyadh', 'Jeddah', 'Dammam', 'Al Khobar', 'Makkah', 'Madinah'],
    title: 'Custom Business Software & Apps in Saudi Arabia | xuMax',
    desc: 'Maintenance management, restaurant ordering and custom apps for Saudi SMEs in Riyadh, Jeddah and Dammam. Fixed price, built around your workflow, live in weeks.',
    h1: 'Business apps for <em>Saudi Arabia’s</em> fast-growing SMEs',
    lead: 'We build tools that help restaurants, clinics, facility companies and factories in Riyadh, Jeddah and the Eastern Province replace WhatsApp chaos with three buttons.',
    local: [
      ['Growing fast, hiring fast', 'Saudi businesses are growing quickly and onboarding new staff all the time. Tools that need no training matter more when the team keeps changing.'],
      ['Food and hospitality boom', 'With delivery apps like HungerStation, Jahez and Keeta everywhere, many restaurants want their own ordering channel for regulars. Our WhatsApp Ordering Assistant gives you one without a commission per order.'],
      ['Data and e-invoicing', 'We agree where data lives during the audit with the Personal Data Protection Law (PDPL) in mind, and if your tool touches invoicing we plan around your ZATCA e-invoicing setup rather than replacing it.'],
      ['Working hours that overlap', 'Pakistan is two hours ahead of Riyadh, so our working day covers yours. Calls, WhatsApp and screen-shares are how we work.']
    ],
    top: ['maintenance-management-software', 'restaurant-ordering-app', 'clinic-appointment-app', 'factory-downtime-tracker', 'hotel-housekeeping-app', 'custom-business-software'],
    faqs: [
      ['Do you have an office in Saudi Arabia?', 'Our team is based in Pakistan and works with Saudi businesses remotely, two hours ahead of Riyadh time.'],
      ['Can the app be in Arabic?', 'Tell us in the Problem Hunt and we’ll scope Arabic screens and messages alongside English.'],
      ['Can customers pay with mada?', 'If your tool needs payments, we plan them around the methods your customers use, such as mada, Apple Pay and STC Pay, through a local payment provider.']
    ]
  },
  {
    slug: 'qatar', name: 'Qatar', code: 'QA', adj: 'Qatari',
    cities: ['Doha', 'Al Wakrah', 'Lusail', 'Al Rayyan', 'Al Khor'],
    title: 'Custom Business Apps & Software in Qatar | xuMax',
    desc: 'Facility maintenance, restaurant ordering and custom business apps for SMEs in Doha and across Qatar. Fixed price, live in weeks, no per-user fees.',
    h1: 'Custom business tools for <em>Qatar</em>',
    lead: 'We build simple custom tools that let facility companies, restaurants, clinics and schools in Doha see every request, every order and every job, live.',
    local: [
      ['Facilities that never sleep', 'Towers, compounds, schools and hotels in Qatar run big maintenance teams. MaxWorkManager routes every request by building and department and shows who’s on it.'],
      ['Ordering without the commission', 'Delivery apps like Talabat and Snoonu bring new customers; your own WhatsApp ordering keeps regulars without a commission per order.'],
      ['Data and privacy', 'We agree where data lives during the audit, with Qatar’s personal data protection law (Law No. 13 of 2016) in mind.'],
      ['Two hours ahead, always reachable', 'Pakistan is two hours ahead of Doha, so our day covers yours.']
    ],
    top: ['maintenance-management-software', 'restaurant-ordering-app', 'school-admissions-software', 'clinic-appointment-app'],
    faqs: [
      ['Do you have an office in Qatar?', 'Our team is based in Pakistan and works with Qatari businesses remotely.'],
      ['How long does a project take?', 'A clickable prototype in 1 to 2 weeks after a one-week audit, then live in weeks, at a fixed price.']
    ]
  },
  {
    slug: 'kuwait', name: 'Kuwait', code: 'KW', adj: 'Kuwaiti',
    cities: ['Kuwait City', 'Hawalli', 'Salmiya', 'Farwaniya', 'Jahra', 'Ahmadi'],
    title: 'Custom Business Apps & Software in Kuwait | xuMax',
    desc: 'Restaurant ordering, maintenance and custom business apps for SMEs in Kuwait City, Hawalli and Salmiya. Fixed price, live in weeks, built around your workflow.',
    h1: 'Simple custom apps for <em>Kuwait’s</em> businesses',
    lead: 'We build tools that help restaurants, clinics, salons and property companies in Kuwait turn WhatsApp messages into orders, bookings and jobs with an owner.',
    local: [
      ['Restaurants and cafés everywhere', 'Kuwait’s food scene runs on delivery apps like Talabat. Your own WhatsApp ordering keeps loyal customers coming straight to you.'],
      ['Clinics and salons on WhatsApp', 'Our Appointment Assistant books, confirms and reminds on WhatsApp so no-shows stop eating your day.'],
      ['Payments your customers use', 'If your tool needs payments, we plan them around methods your customers already use, such as KNET, through a local payment provider.'],
      ['Close time zones', 'Pakistan is two hours ahead of Kuwait, so our working day covers yours.']
    ],
    top: ['restaurant-ordering-app', 'clinic-appointment-app', 'maintenance-management-software', 'sales-order-app'],
    faqs: [
      ['Do you have an office in Kuwait?', 'Our team is based in Pakistan and works with Kuwaiti businesses remotely.'],
      ['Can the app be in Arabic?', 'Tell us in the Problem Hunt and we’ll scope Arabic screens and messages alongside English.']
    ]
  },
  {
    slug: 'bahrain', name: 'Bahrain', code: 'BH', adj: 'Bahraini',
    cities: ['Manama', 'Muharraq', 'Riffa', 'Hamad Town', 'Isa Town'],
    title: 'Custom Business Apps & Software in Bahrain | xuMax',
    desc: 'Maintenance, ordering and custom business apps for SMEs in Manama, Muharraq and Riffa. Fixed price, live in weeks, no per-user fees.',
    h1: 'Custom business tools for <em>Bahrain</em>',
    lead: 'We help small and medium businesses in Manama and beyond replace messy WhatsApp groups with three buttons and a live view of every job.',
    local: [
      ['Small market, big expectations', 'Bahraini customers expect fast, polished service. Our tools make sure requests and orders never fall through the cracks.'],
      ['Payments your customers use', 'If your tool needs payments, we plan them around methods your customers already use, such as BenefitPay, through a local payment provider.'],
      ['Data and privacy', 'We agree where data lives during the audit, with Bahrain’s Personal Data Protection Law (Law No. 30 of 2018) in mind.'],
      ['Two hours ahead', 'Pakistan is two hours ahead of Bahrain, so our day covers yours.']
    ],
    top: ['maintenance-management-software', 'restaurant-ordering-app', 'clinic-appointment-app', 'custom-business-software'],
    faqs: [
      ['Do you have an office in Bahrain?', 'Our team is based in Pakistan and works with Bahraini businesses remotely.'],
      ['What does the free Problem Hunt involve?', '30 minutes on a call. You show us the messiest part of your day, we take notes and try not to laugh.']
    ]
  },
  {
    slug: 'oman', name: 'Oman', code: 'OM', adj: 'Omani',
    cities: ['Muscat', 'Sohar', 'Salalah', 'Nizwa', 'Sur'],
    title: 'Custom Business Apps & Software in Oman | xuMax',
    desc: 'Maintenance, hotel housekeeping, ordering and custom business apps for SMEs in Muscat, Sohar and Salalah. Fixed price, live in weeks.',
    h1: 'Custom business tools for <em>Oman</em>',
    lead: 'We build simple custom tools that let hotels, restaurants, factories and facility teams in Muscat, Sohar and Salalah see every job live.',
    local: [
      ['Tourism and hospitality', 'Hotels and resorts in Oman need rooms ready and requests handled fast. Our housekeeping app shows every room’s status live.'],
      ['Industry and logistics', 'For factories and warehouses around Sohar and Duqm, our Downtime Tracker shows which line is down and who’s fixing it.'],
      ['Data and privacy', 'We agree where data lives during the audit, with Oman’s Personal Data Protection Law (Royal Decree 6/2022) in mind.'],
      ['One hour ahead', 'Pakistan is one hour ahead of Oman, so our working days line up.']
    ],
    top: ['hotel-housekeeping-app', 'maintenance-management-software', 'factory-downtime-tracker', 'restaurant-ordering-app'],
    faqs: [
      ['Do you have an office in Oman?', 'Our team is based in Pakistan and works with Omani businesses remotely.'],
      ['How much does it cost?', 'Fixed price. After the audit you get three tool ideas, each with a fixed price, before you commit.']
    ]
  },
  {
    slug: 'usa', name: 'the USA', short: 'USA', code: 'US', adj: 'US',
    cities: ['New York', 'Houston', 'Dallas', 'Chicago', 'Los Angeles', 'Atlanta', 'New Jersey'],
    title: 'Custom Business Software for US Small Businesses | xuMax',
    desc: 'Custom maintenance, ordering, booking and operations apps for US small and medium businesses. Fixed price, live in weeks, at a fraction of US agency cost.',
    h1: 'Custom software for <em>US small businesses</em>, without US agency prices',
    lead: 'We build custom tools for restaurants, clinics, property managers and multi-location businesses across the US, around how they already work: fixed price, live in weeks.',
    local: [
      ['A fraction of agency cost', 'Our team is based in Pakistan, and we use AI tools to build faster. You get a custom tool at a fixed price, often for less than a year of per-seat SaaS fees.'],
      ['Overnight progress', 'Pakistan is 9 to 10 hours ahead of US Eastern Time. We overlap with your morning for calls, then build while you sleep.'],
      ['Restaurants without the commission', 'Delivery apps like DoorDash and Uber Eats charge a commission on every order. Your own ordering channel keeps your regulars’ orders commission-free.'],
      ['Privacy and compliance', 'We agree where data lives during the audit. If your tool touches patient information, tell us upfront so we plan hosting and access around HIPAA requirements with your compliance advisor.']
    ],
    top: ['maintenance-management-software', 'restaurant-ordering-app', 'clinic-appointment-app', 'custom-business-software', 'websites-and-reels'],
    faqs: [
      ['Where is your team?', 'Our team is based in Pakistan and works with US businesses remotely, overlapping with your morning.'],
      ['How do we pay?', 'A fixed price in US dollars, agreed in writing after the audit, before any build starts.'],
      ['Who owns the code?', 'We agree ownership, hosting and support in writing before the build starts.']
    ]
  }
];

// Service × country pages for the two flagship services in the four priority markets.
const combos = [
  { market: 'pakistan', service: 'maintenance-management-software',
    title: 'Maintenance Management Software in Pakistan | MaxWorkManager',
    desc: 'Complaint and maintenance software for hospitals, campuses, housing societies and malls in Lahore, Karachi and Islamabad. Report by QR, fix in 3 taps.',
    h1: 'Maintenance management software for <em>Pakistan</em>',
    lead: 'MaxWorkManager gets complaints out of WhatsApp groups and into jobs with an owner, for hospitals, universities, housing societies and malls across Pakistan.',
    local: [
      ['Built where it was born', 'MaxWorkManager was built for hospitals first: ward-wise reporting, department heads, technicians with three buttons. It’s built for the realities here: shared phones, mixed Urdu and English, and patchy signal in basements and plant rooms.'],
      ['Housing societies and towers', 'Residents scan a QR at the gate or lift to report, supervisors see only their own block, and management finally sees which block keeps breaking, from large societies to standalone towers.'],
      ['Load-shedding ready', 'Generators, UPS and AC complaints spike in summer. Repeat-fault reports show which unit keeps failing so you fix the cause, not the symptom.']
    ],
    faqs: [['Can residents report in Urdu?', 'Yes. Residents and staff can report in Urdu, Roman Urdu or English, and the AI sorts each complaint to the right department.'], ['Do you set it up on site?', 'We set it up with your team and give you QR codes for every area to print, so staff can start the same day.']] },
  { market: 'pakistan', service: 'restaurant-ordering-app',
    title: 'Food Ordering & Delivery App for Restaurants in Pakistan | xuMax',
    desc: 'WhatsApp ordering and kitchen screens for restaurants, cloud kitchens and cafés in Lahore, Karachi and Islamabad. Your own delivery orders, no per-order commission.',
    h1: 'Your own food ordering and delivery system in <em>Pakistan</em>',
    lead: 'Built for restaurants and cloud kitchens in Lahore, Karachi, Islamabad and beyond: take orders on WhatsApp, send them to a kitchen screen and keep customers updated automatically.',
    local: [
      ['Urdu orders, understood', 'Customers write “2 karahi, 1 extra spicy, raita alag se”. Our ordering assistant understands Urdu, Roman Urdu and English and turns it into a clean kitchen ticket.'],
      ['Keep your regulars off the commission', 'Aggregators like foodpanda are great for new customers. Your regulars can order straight from you on WhatsApp, with cash on delivery, JazzCash or Easypaisa.'],
      ['Riders and branches', 'Multi-branch chains route orders to the nearest kitchen, and riders update status from their phone so customers stop calling.']
    ],
    faqs: [['Does it work with cash on delivery?', 'Yes. Cash on delivery, bank transfer and wallets like JazzCash and Easypaisa can all be part of the order flow.'], ['Can it handle iftar and Eid rushes?', 'Yes. The kitchen screen queues every order with three buttons, so peak hours stay organised.']] },
  { market: 'uae', service: 'maintenance-management-software',
    title: 'Maintenance Management Software in the UAE | Dubai, Abu Dhabi',
    desc: 'Maintenance and complaint management software for facility companies, communities, malls and clinics in Dubai, Abu Dhabi and Sharjah. Fixed price, no per-user fees.',
    h1: 'Maintenance management software for <em>UAE</em> facility teams',
    lead: 'MaxWorkManager routes every request and proves every fix, for facility management companies, residential communities, malls and clinics in Dubai, Abu Dhabi and Sharjah.',
    local: [
      ['Made for facility management companies', 'Track every client and building separately, with deadlines and monthly reports your clients will actually read. Technicians from many countries use the same three buttons from day one.'],
      ['AC season is every season', 'Chiller and AC complaints never stop in the UAE. Repeat-fault reports show which units keep failing, and photo proof shows each job was really done.'],
      ['No per-user fees', 'Large technician teams get expensive on per-seat software. Our fixed price doesn’t grow every time you hire.']
    ],
    faqs: [['Can tenants report in Arabic or English?', 'Reports come in through QR forms and WhatsApp; tell us which languages your tenants use and we scope them in the audit.'], ['Can it handle several client contracts?', 'Yes. Each client gets its own buildings, deadlines and monthly report.']] },
  { market: 'uae', service: 'restaurant-ordering-app',
    title: 'Restaurant Ordering & Delivery App in Dubai and the UAE | xuMax',
    desc: 'WhatsApp food ordering, kitchen screens and delivery updates for restaurants and cloud kitchens in Dubai, Abu Dhabi and Sharjah. Keep regulars commission-free.',
    h1: 'Your own ordering channel for restaurants in <em>the UAE</em>',
    lead: 'Built for restaurants and cloud kitchens in Dubai, Abu Dhabi and Sharjah: take orders on WhatsApp, send them to a kitchen screen and update customers automatically.',
    local: [
      ['Aggregators for discovery, WhatsApp for regulars', 'Talabat, Deliveroo, Careem and Noon bring new customers. Your own ordering channel lets regulars order straight from you without a commission per order.'],
      ['Cloud kitchens with many brands', 'Run several virtual brands from one kitchen with one order queue, so nothing gets cooked for the wrong brand.'],
      ['Multilingual customers', 'Customers order in English, Arabic, Urdu or Hindi. Tell us who your customers are and we scope the languages in the audit.']
    ],
    faqs: [['Can it handle several brands from one kitchen?', 'Yes. Orders for each virtual brand land in one queue with the brand clearly marked.'], ['Can customers pay online?', 'Yes, through a UAE payment provider if you want online payment; cash and card on delivery work too.']] },
  { market: 'saudi-arabia', service: 'maintenance-management-software',
    title: 'Maintenance Management Software in Saudi Arabia | Riyadh, Jeddah',
    desc: 'Maintenance and complaint software for hospitals, compounds, malls and facility companies in Riyadh, Jeddah and Dammam. Report by QR, fix in 3 taps.',
    h1: 'Maintenance management software for <em>Saudi Arabia</em>',
    lead: 'MaxWorkManager shows every request, every technician and every fix, for hospitals, residential compounds, malls and facility companies in Riyadh, Jeddah and Dammam.',
    local: [
      ['Compounds, towers and campuses', 'Residents and staff report by QR from any villa, room or lift. Supervisors see only their own area; management sees everything live.'],
      ['Teams that keep growing', 'New technicians start the same day with three buttons: Start, Photo, Done. No training sessions, no manuals.'],
      ['Reports for management and clients', 'Response times, repeat faults and technician workload by site, ready for monthly reviews.']
    ],
    faqs: [['Can it run in Arabic?', 'Tell us in the Problem Hunt and we’ll scope Arabic screens alongside English.'], ['Where is the data stored?', 'We agree hosting and data location during the audit with the PDPL in mind.']] },
  { market: 'saudi-arabia', service: 'restaurant-ordering-app',
    title: 'Restaurant Ordering & Delivery App in Saudi Arabia | xuMax',
    desc: 'Your own WhatsApp food ordering, kitchen screen and delivery updates for restaurants and cafés in Riyadh, Jeddah and Dammam. Keep regulars commission-free.',
    h1: 'Your own ordering channel for restaurants in <em>Saudi Arabia</em>',
    lead: 'Built for restaurants, cafés and cloud kitchens in Riyadh, Jeddah and Dammam: take orders on WhatsApp, send them to a kitchen screen and update customers automatically.',
    local: [
      ['Aggregators for discovery, WhatsApp for regulars', 'HungerStation, Jahez and Keeta bring new customers. Your own ordering channel lets regulars order straight from you without a commission per order.'],
      ['Ramadan and weekend peaks', 'Iftar and suhoor rushes and busy weekends are when orders get lost. The kitchen screen keeps every order in one queue with three buttons.'],
      ['Payments customers expect', 'If you want online payment, we plan it through a Saudi payment provider with mada and Apple Pay; cash on delivery works too.']
    ],
    faqs: [['Can it handle iftar rushes?', 'Yes. Every order lands in one queue with Accepted, Ready and Sent, so peak hours stay organised.'], ['Can customers order in Arabic?', 'Tell us in the Problem Hunt and we’ll scope Arabic ordering messages alongside English.']] },
  { market: 'usa', service: 'maintenance-management-software',
    title: 'Maintenance Request & Work Order Software in the USA | xuMax',
    desc: 'Simple maintenance request and work order software for US property managers, clinics, schools and multi-location businesses. Custom-built at a fixed price.',
    h1: 'Work order software your <em>US</em> maintenance team will actually use',
    lead: 'MaxWorkManager takes requests by QR and closes work orders with three buttons, for property managers, clinics, private schools and multi-location businesses across the US.',
    local: [
      ['Property managers and HOAs', 'Tenants and residents report by QR or text, technicians close jobs with a photo, and owners get monthly reports by property.'],
      ['Custom, without the per-seat bill', 'Most work order software charges per technician per month. We build yours at a fixed price around how your team already works.'],
      ['Overnight progress', 'We overlap with your morning for calls and build while you sleep, so prototypes arrive fast.']
    ],
    faqs: [['Can tenants submit requests by text?', 'Requests can come in by QR form and messaging; we scope the channels your tenants use in the audit.'], ['Can it integrate with our property software?', 'We review what you use in the audit and connect where the software allows it.']] },
  { market: 'usa', service: 'restaurant-ordering-app',
    title: 'Commission-Free Online Ordering for US Restaurants | xuMax',
    desc: 'Your own online and WhatsApp ordering, kitchen screen and delivery updates for US restaurants and cloud kitchens. Custom-built at a fixed price.',
    h1: 'Commission-free ordering for <em>US restaurants</em>',
    lead: 'Built for independent restaurants and small chains across the US: take orders through your own channel, send them to a kitchen screen and keep customers updated automatically.',
    local: [
      ['Keep the commission', 'DoorDash, Uber Eats and Grubhub bring new customers but take a cut of every order. Your own channel keeps your regulars’ orders commission-free.'],
      ['Text and WhatsApp ordering', 'Many diaspora and immigrant communities already order by WhatsApp. We meet your customers where they are, by text, WhatsApp or web.'],
      ['Fixed price, not a monthly fee forever', 'A custom ordering tool at a fixed price, plus an optional monthly care plan for hosting and small upgrades.']
    ],
    faqs: [['Do I need to leave DoorDash or Uber Eats?', 'No. Keep them for discovery and move regulars to your own channel.'], ['Can customers pay online?', 'Yes, through a US payment provider such as Stripe or Square, or pay at pickup.']] }
];

module.exports = { services, markets, combos };
