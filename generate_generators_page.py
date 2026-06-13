from pathlib import Path
import json
import re

OUT = Path('/workspace/my-app/index.html')


def slugify(text: str) -> str:
    text = text.lower().strip()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return re.sub(r'-+', '-', text).strip('-')


strings = {
    'en': {
        'seo': {
            'title': 'AI Website Generators - Build Any Site in Seconds | Strikingly',
            'description': "Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.",
            'canonical': 'https://www.strikingly.com/generators',
            'ogTitle': 'AI Website Generators - Build Any Site in Seconds | Strikingly',
            'ogDescription': "Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds.",
            'ogUrl': 'https://www.strikingly.com/generators',
        },
        'hero': {
            'line1': 'BUILD ANY KIND OF SITE',
            'line2': 'WITH AI, IN AN INSTANT',
            'subheadline': "Browse the right generator for what you're building, or jump straight into our AI site builder.",
            'primaryCta': "START BUILDING - IT'S FREE",
            'secondaryCta': 'BROWSE GENERATORS',
        },
        'featured': {'title': 'FEATURED GENERATORS', 'subtitle': 'A few common starting points.'},
        'browse': {'title': 'BROWSE BY CATEGORY'},
        'all': {
            'title': 'ALL GENERATORS',
            'subtitle': 'Sixty-plus generators, organized by what you\'re building.',
            'searchPlaceholder': 'Search generators...',
            'searchLabel': 'Search generators',
            'matchSingular': '1 generator match',
            'matchPlural': '{count} generators match',
            'emptyTitle': 'No generators found',
            'emptyBody': 'Try a different keyword or browse the categories below.',
            'emptyLink': "Can't find it? Start with our AI builder.",
            'clear': 'Clear search',
            'showAll': 'Show all {count} generators',
            'showLess': 'Show fewer generators',
        },
        'how': 'HOW IT WORKS',
        'why': 'WHY STRIKINGLY',
        'faq': 'FREQUENTLY ASKED QUESTIONS',
        'closing': {
            'title': 'READY TO BUILD?',
            'subtitle': 'Pick a generator above, or jump straight into our AI builder.',
            'cta': 'START WITH AI BUILDER',
        },
    }
}

featured = [
    ('AI Website Generator', 'Describe your business, get a full site', 'Website'),
    ('Free Portfolio Generator', 'For creatives, in minutes, no fee', 'Portfolio'),
    ('AI Landing Page Maker', 'One-page sites built to convert', 'Landing Page'),
    ('Online Store Builder', 'Start selling without writing code', 'Store'),
    ('Link-in-Bio Generator', 'One link for all your channels', 'Link-in-Bio'),
    ('One-Page Website Builder', 'Simple sites, single scroll', 'Website'),
    ('Wedding Website Generator', 'Share your day with guests', 'Website'),
    ('Restaurant Website Builder', 'Menu, hours, reservations, done', 'Website'),
    ('Blog Generator for Beginners', 'Publish-ready in minutes', 'Blog'),
]

browse_categories = [
    ('websites', 'Websites', 'AI-built business and personal sites for any goal.'),
    ('landing-pages', 'Landing Pages', 'Single-page sites built to convert visitors fast.'),
    ('portfolios', 'Portfolios', 'Showcase your work with a clean, focused site.'),
    ('blogs', 'Blogs', 'Publish-ready blogs with built-in SEO basics.'),
    ('stores', 'Online Stores', 'Sell products online with payments built in.'),
    ('link-in-bio', 'Link-in-Bio', 'One link, all your places. Made for creators.'),
]

all_generators = {
    'websites': {
        'title': 'WEBSITES',
        'description': 'Flexible AI site starters for businesses, services, events, and personal brands.',
        'cards': [
            ('AI Website Generator', 'Describe your idea and get a full website draft in seconds.'),
            ('Free Website Builder for Photographers', 'Turn galleries, services, and booking details into one polished site.'),
            ('One-Page Wedding Website Builder', 'Share the date, schedule, registry, and venue details in one scroll.'),
            ('Restaurant Website Builder', 'Launch a site with menu highlights, hours, and reservation details ready to edit.'),
            ('AI Website Maker for Consultants', 'Present services, credibility, and contact details with a professional layout.'),
            ('No-Code Website Builder for Coaches', 'Create a clear home for programs, testimonials, and discovery calls.'),
            ('Small Business Website Generator', 'Get a practical business website with the right sections from the start.'),
            ('Beautiful Website Builder for Musicians', 'Feature tracks, upcoming shows, and your story in one branded site.'),
            ('AI Personal Website Creator', 'Build a modern personal site for your bio, links, and featured work.'),
            ('Event Website Builder for Conferences', 'Publish schedules, speakers, and registration details without a custom build.'),
            ('Local Service Website Generator', 'Make it easy for nearby customers to learn, trust, and contact you.'),
        ],
    },
    'landing-pages': {
        'title': 'LANDING PAGES',
        'description': 'High-intent one-page site ideas for launches, campaigns, and lead capture.',
        'cards': [
            ('AI Landing Page Maker', 'Generate a conversion-focused page with a headline, proof, and CTA.'),
            ('SaaS Landing Page Generator', 'Explain your product, features, and pricing with a clean funnel-first layout.'),
            ('Product Launch Landing Page Builder', 'Build anticipation for a launch with waitlist and feature sections.'),
            ('One-Page Webinar Landing Page', 'Promote your event with agenda, speaker info, and registration details.'),
            ('Real Estate Landing Page Creator', 'Highlight listings, lead forms, and local trust points on a single page.'),
            ('Course Signup Landing Page Builder', 'Turn your course outline and offer into a page that drives signups.'),
            ('Beauty Salon Landing Page Generator', 'Feature services, promotions, and booking prompts for quick decisions.'),
            ('Free Landing Page Builder for Agencies', 'Spin up campaign pages fast for new offers or client acquisition.'),
            ('App Waitlist Landing Page Maker', 'Collect early interest with a focused page for your next product drop.'),
            ('Consultant Lead Capture Page Builder', 'Present your value clearly and encourage visitors to book a call.'),
            ('Restaurant Promo Landing Page Generator', 'Promote a seasonal menu, event, or limited-time offer without extra clutter.'),
        ],
    },
    'portfolios': {
        'title': 'PORTFOLIOS',
        'description': 'Focused portfolio generators for creative, technical, and freelance work.',
        'cards': [
            ('Free Portfolio Generator', 'Get a clean portfolio layout for projects, about text, and contact details.'),
            ('Portfolio Generator for Designers', 'Show brand, UI, and visual case studies in a gallery-led format.'),
            ('Photography Portfolio Builder', 'Lead with strong imagery and organize shoots into a tidy portfolio site.'),
            ('Writer Portfolio Website Maker', 'Collect clips, service details, and a concise personal introduction.'),
            ('Portfolio Generator for Architects', 'Present projects, process, and firm profile with structured sections.'),
            ('UI UX Portfolio Builder with AI', 'Turn your product work into a portfolio with room for case-study storytelling.'),
            ('Freelancer Portfolio Creator', 'Package services, featured work, and contact info for client outreach.'),
            ('Minimal Portfolio Builder for Developers', 'Create a sharp portfolio for apps, repositories, and technical experience.'),
            ('Illustrator Portfolio Generator', 'Highlight visual work with a simple site that keeps the artwork central.'),
            ('Model Portfolio Website Builder', 'Publish a polished model portfolio with lookbook images and booking details.'),
            ('Student Portfolio Maker', 'Build a starter portfolio for internships, school projects, and early work.'),
        ],
    },
    'blogs': {
        'title': 'BLOGS',
        'description': 'Blog-ready generators for creators, brands, and experts who publish regularly.',
        'cards': [
            ('Blog Generator for Beginners', 'Start publishing with a simple blog structure and built-in essentials.'),
            ('AI Blog Builder for Creators', 'Create a blog homepage, about page, and post-ready layout in minutes.'),
            ('Travel Blog Website Generator', 'Share destinations, stories, and guides in a visual editorial format.'),
            ('Food Blog Maker', 'Publish recipes, photography, and kitchen tips in a format readers can browse easily.'),
            ('Personal Blog Builder with AI', 'Set up a personal publishing site with room for stories and updates.'),
            ('Startup News Blog Generator', 'Launch a company blog to share product updates, launches, and announcements.'),
            ('Fashion Blog Website Maker', 'Build a stylish blog for looks, commentary, and curated collections.'),
            ('Free Blog Builder for Coaches', 'Combine articles, authority-building content, and service discovery in one site.'),
            ('Parenting Blog Generator', 'Create a warm, practical blog for stories, advice, and community resources.'),
            ('Professional Thought Leadership Blog', 'Publish expert perspectives in a clean layout designed for readability.'),
            ('Wellness Blog Builder', 'Share routines, insights, and recommendations in a calm editorial design.'),
        ],
    },
    'stores': {
        'title': 'ONLINE STORES',
        'description': 'Store generators for products, digital goods, and branded online selling.',
        'cards': [
            ('Online Store Builder', 'Start selling with a storefront, featured products, and checkout-ready structure.'),
            ('Online Store Builder for Restaurants', 'Sell meal kits, merch, or packaged goods from a simple restaurant store.'),
            ('AI Ecommerce Website Generator', 'Describe what you sell and get a polished store layout with key sections.'),
            ('Handmade Shop Builder', 'Build a warm storefront for custom goods, collections, and maker stories.'),
            ('Fashion Boutique Store Creator', 'Launch a sleek store for apparel, drops, and featured collections.'),
            ('Beauty Product Store Builder', 'Show products, benefits, and routines in a conversion-friendly store design.'),
            ('Digital Download Store Generator', 'Sell templates, guides, and digital files with a clean online shop.'),
            ('One-Page Online Shop Builder', 'Keep the path to purchase simple with a compact single-page storefront.'),
            ('Free Store Builder for Makers', 'Start a small online store without needing custom code or setup.'),
            ('AI Store Creator for Home Decor', 'Turn curated products into a store with a tasteful merchandising layout.'),
            ('Course Merch Store Builder', 'Pair branded merchandise with your educational brand in one shop.'),
        ],
    },
    'link-in-bio': {
        'title': 'LINK-IN-BIO',
        'description': 'Compact link pages for creators, campaigns, launches, and audience routing.',
        'cards': [
            ('Link-in-Bio Generator', 'Create one clean page that points followers to everything important.'),
            ('Creator Link Page Builder', 'Bundle your newest content, offers, and profiles into one quick destination.'),
            ('Musician Bio Link Website', 'Send fans to music, tickets, merch, and social channels from one page.'),
            ('Podcast Link-in-Bio Maker', 'Collect episodes, guest links, and listening platforms in one shareable page.'),
            ('Link Page Generator for Coaches', 'Guide visitors to offers, booking, resources, and content with clarity.'),
            ('Beauty Creator Bio Link Builder', 'Route followers to tutorials, brand links, booking, and recommendations.'),
            ('Author Link-in-Bio Generator', 'Promote books, events, newsletters, and media appearances from one link.'),
            ('Link-in-Bio for Online Stores', 'Point social traffic to products, promotions, and bestsellers fast.'),
            ('Minimal Bio Link Page Maker', 'Keep your most important links organized in a simple creator-first layout.'),
            ('Link Hub Builder for Events', 'Share schedules, tickets, maps, and updates from one easy event link.'),
            ('Free Link-in-Bio Creator', 'Launch a branded bio link page without paying upfront or writing code.'),
        ],
    },
}

how_it_works = [
    ('PICK A GENERATOR', 'Browse by category or search to find one that fits your goal.'),
    ('DESCRIBE YOUR SITE', 'Tell our AI builder about your business in a sentence or two.'),
    ('GENERATE AND PUBLISH', 'Get a fully built site in seconds. Customize anything, then go live.'),
]

why_items = [
    ('LIVE IN SECONDS', 'Describe your site, we build it. No setup, no learning curve.'),
    ('MOBILE BY DEFAULT', 'Every generator produces responsive sites that work on any device.'),
    ('FREE TO START', 'Generate, customize, and publish without a credit card.'),
]

faqs = [
    (
        'What is an AI site generator?',
        [
            'An AI site generator helps you start a website by turning a short description of your business, project, or goal into a ready-made site structure. Instead of beginning from a blank page, you get a first draft with sections, copy, and design direction already in place.',
            'On Strikingly, each generator is a focused entry point into the same AI builder. It helps you begin with the right shape for what you want to make, then you can customize the result before publishing.',
        ],
    ),
    (
        'How is a generator different from a template?',
        [
            'A template is usually a fixed design you fill in manually. A generator uses AI to produce a site draft based on what you describe, so the starting content and structure can adapt to your specific use case.',
            'That means you still get a polished foundation, but you spend less time rearranging sections or rewriting placeholder copy before your site feels relevant.',
        ],
    ),
    (
        'Are these generators free to use?',
        [
            'Yes. You can start with Strikingly\'s AI builder for free and explore generators without entering payment details. That makes it easy to test ideas, compare directions, and decide which setup fits best.',
            'If you later need advanced publishing or business features, you can upgrade when you\'re ready. The first step does not require a credit card.',
        ],
    ),
    (
        'What kinds of sites can I build?',
        [
            'You can build business websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. The directory is organized around common goals so you can quickly find a starting point that feels close to what you need.',
            'If you do not see an exact match, you can still jump straight into the AI Site Builder and describe the site in your own words.',
        ],
    ),
    (
        'Can I customize what the generator produces?',
        [
            'Yes. The generator gives you a starting draft, not a locked result. You can edit text, swap sections, adjust images, change layouts, and refine the look until it fits your brand.',
            'The goal is to help you move faster at the beginning while keeping full control over the final site you publish.',
        ],
    ),
    (
        'Do generated sites work on mobile?',
        [
            'Yes. Strikingly-generated sites are designed to be responsive by default, so they adapt across phones, tablets, and desktop screens. That matters whether you are sharing a landing page, publishing a blog, or selling online.',
            'You can still fine-tune content and layout after generation, but the starting point is already built to work well on smaller screens.',
        ],
    ),
]

css = """
:root {
  --brand-purple: #8159BB;
  --ai-blue: #7671FF;
  --ai-pink: #CB0C9F;
  --text-body: #636972;
  --text-heading: #4B5056;
  --text-hero: #2E2E2F;
  --border-card: #C6C9CD;
  --border-divider: #E2E4E7;
  --surface-light: #F4F6F8;
  --surface-white: #FFFFFF;
  --focus-ring: rgba(118, 113, 255, 0.34);
  --shadow-hover: 0 10px 24px rgba(75, 80, 86, 0.08);
  --heading-font: 'Josefin Sans', 'Poppins', sans-serif;
  --body-font: 'Open Sans', sans-serif;
  --gradient: linear-gradient(135deg, var(--ai-blue) 0%, var(--ai-pink) 100%);
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  min-inline-size: 320px;
  font-family: var(--body-font);
  font-size: 14px;
  line-height: 1.5;
  color: var(--text-body);
  background: var(--surface-white);
}
a { color: inherit; text-decoration: none; }
svg { display: block; max-inline-size: 100%; }
button, input { font: inherit; }
button { cursor: pointer; }
:focus-visible { outline: 3px solid var(--focus-ring); outline-offset: 3px; }
.container { inline-size: min(calc(100% - 40px), 1200px); margin-inline: auto; }
.topbar { border-block-end: 1px solid var(--border-divider); background: var(--surface-white); }
.topbar__inner { display: flex; align-items: center; min-block-size: 70px; }
.brand {
  display: inline-flex; align-items: center; gap: 10px; color: var(--text-heading);
  font-family: var(--heading-font); font-size: 22px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase;
}
.brand__mark {
  display: inline-flex; align-items: center; justify-content: center; inline-size: 34px; block-size: 34px;
  border: 1px solid var(--brand-purple); border-radius: 10px; color: var(--brand-purple);
  background: linear-gradient(135deg, rgba(118,113,255,.08), rgba(203,12,159,.08));
}
.breadcrumb { padding-block: 16px 10px; }
.breadcrumb ol { display: flex; flex-wrap: wrap; gap: 5px 14px; padding: 0; margin: 0; list-style: none; }
.breadcrumb li { position: relative; }
.breadcrumb li + li::before { content: '>'; position: absolute; inset-inline-start: -11px; color: var(--brand-purple); }
.breadcrumb a:hover { color: var(--brand-purple); }
.section { padding-block: 40px; }
.section-heading {
  margin: 0; color: var(--text-heading); font-family: var(--heading-font); font-size: clamp(26px, 3vw, 32px);
  font-weight: 700; letter-spacing: .06em; line-height: 1.2; text-transform: uppercase;
}
.section-subheading { margin: 10px 0 0; max-inline-size: 680px; }
.hero { position: relative; padding-block: 60px 80px; overflow: hidden; }
.hero::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(circle at 15% 20%, rgba(118,113,255,.08), transparent 36%), radial-gradient(circle at 85% 15%, rgba(203,12,159,.07), transparent 32%);
}
.hero__grid { position: relative; display: grid; grid-template-columns: minmax(0,1.15fr) minmax(300px,.85fr); gap: 40px; align-items: center; }
.hero__title {
  margin: 0; font-family: var(--heading-font); font-size: clamp(30px, 4.4vw, 44px);
  font-weight: 700; line-height: 1.2; letter-spacing: .04em; text-transform: uppercase;
}
.hero__title-line { display: block; white-space: nowrap; }
.hero__title-line--dark { color: var(--text-hero); }
.hero__title-line--gradient { background: var(--gradient); -webkit-background-clip: text; background-clip: text; color: transparent; }
.hero__subtitle { margin: 20px 0 0; max-inline-size: 540px; font-size: 16px; }
.hero__actions { display: flex; flex-wrap: wrap; gap: 10px; margin-block-start: 30px; }
.button {
  display: inline-flex; align-items: center; justify-content: center; min-block-size: 36px; padding: 9px 15px;
  border-radius: 4px; border: 1px solid transparent; font-family: var(--heading-font); font-size: 14px; font-weight: 700;
  letter-spacing: .05em; text-transform: uppercase; transition: box-shadow .2s ease, border-color .2s ease, color .2s ease;
}
.button--primary { min-block-size: 44px; background: var(--gradient); color: #FFFFFF; }
.button--ghost { min-block-size: 44px; background: transparent; border-color: var(--brand-purple); color: var(--brand-purple); }
.button:hover, .button:focus-visible { box-shadow: 0 8px 20px rgba(129,89,187,.16); }
.button--ghost:hover, .button--ghost:focus-visible { border-color: var(--ai-blue); color: var(--ai-blue); }
.hero__visual { display: flex; justify-content: center; }
.hero-illustration { inline-size: min(100%, 520px); block-size: auto; }
.card-grid, .generator-group__cards, .steps, .why-grid {
  display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 20px; margin-block-start: 30px;
}
.card, .step, .why-card, .faq {
  border: 1px solid var(--border-card); border-radius: 3px; background: var(--surface-white);
  transition: border-color .2s ease, box-shadow .2s ease;
}
.card:hover, .card:focus-within { border-color: var(--brand-purple); box-shadow: var(--shadow-hover); }
.card__link, .category-card__link, .generator-card__link {
  display: flex; flex-direction: column; gap: 12px; block-size: 100%; padding: 20px;
}
.card__title { margin: 0; color: var(--text-heading); font-size: 18px; font-weight: 700; line-height: 1.4; }
.card__description { margin: 0; }
.tag {
  display: inline-flex; align-items: center; align-self: flex-start; min-block-size: 18px; padding: 2px 6px;
  border: 1px solid var(--brand-purple); border-radius: 3px; color: var(--brand-purple);
  font-family: var(--heading-font); font-size: 11px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase;
}
.category-card__link { gap: 14px; }
.category-card__header { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
.category-card__title {
  margin: 0; color: var(--text-heading); font-family: var(--heading-font); font-size: 20px;
  font-weight: 700; letter-spacing: .05em; line-height: 1.2; text-transform: uppercase;
}
.category-card__arrow { color: var(--brand-purple); }
.directory { padding-block: 40px; border-block: 1px solid var(--border-divider); }
.search-bar { display: grid; gap: 14px; margin-block: 30px 10px; }
.search-bar__field { position: relative; inline-size: min(100%, 480px); }
.search-bar__icon { position: absolute; inset-inline-start: 16px; inset-block-start: 50%; transform: translateY(-50%); color: var(--brand-purple); pointer-events: none; }
.search-bar__input {
  inline-size: 100%; min-block-size: 48px; padding-inline: 46px 16px; border: 1px solid var(--border-card);
  border-radius: 4px; background: var(--surface-white); color: var(--text-heading);
}
.search-bar__count { margin: 0; color: var(--text-heading); font-weight: 600; }
.search-empty {
  display: none; margin-block-start: 20px; padding: 20px; border: 1px solid var(--border-divider);
  border-radius: 3px; background: var(--surface-light);
}
.search-empty.is-visible { display: block; }
.search-empty__title {
  margin: 0 0 8px; color: var(--text-heading); font-family: var(--heading-font); font-size: 18px;
  font-weight: 700; letter-spacing: .05em; text-transform: uppercase;
}
.search-empty__actions { display: flex; flex-wrap: wrap; gap: 10px; margin-block-start: 16px; }
.text-button {
  padding: 0; border: 0; background: transparent; color: var(--brand-purple);
  font-family: var(--heading-font); font-size: 13px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase;
}
.text-link { color: var(--brand-purple); font-weight: 600; }
.generator-group { padding-block: 20px 10px; border-block-start: 1px solid var(--border-divider); scroll-margin-block-start: 100px; }
.generator-group:first-of-type { border-block-start: 0; }
.generator-group[hidden] { display: none; }
.generator-group__heading {
  margin: 0; color: var(--text-heading); font-family: var(--heading-font); font-size: 22px;
  font-weight: 700; letter-spacing: .05em; line-height: 1.2; text-transform: uppercase;
}
.generator-group__description { margin: 10px 0 0; max-inline-size: 760px; }
.js .generator-group__cards { overflow: clip; transition: max-height .28s ease; }
.generator-card[hidden] { display: none; }
.show-toggle {
  display: none; align-items: center; justify-content: center; margin-block-start: 20px; padding: 0; border: 0;
  background: transparent; color: var(--brand-purple); font-family: var(--heading-font); font-size: 13px; font-weight: 700;
  letter-spacing: .05em; text-transform: uppercase;
}
.js .show-toggle.is-visible { display: inline-flex; }
.step, .why-card { padding: 20px; }
.step-number {
  display: inline-flex; align-items: center; justify-content: center; inline-size: 34px; block-size: 34px;
  border-radius: 999px; background: var(--brand-purple); color: #FFFFFF; font-family: var(--heading-font); font-weight: 700;
}
.step__title, .why-card__title, .faq__question {
  margin: 18px 0 0; color: var(--text-heading); font-family: var(--heading-font); font-size: 18px;
  font-weight: 700; letter-spacing: .05em; line-height: 1.3; text-transform: uppercase;
}
.step__description, .why-card__description { margin: 12px 0 0; }
.why-card__icon {
  inline-size: 40px; block-size: 40px; display: inline-flex; align-items: center; justify-content: center;
  border-radius: 10px; background: rgba(129,89,187,.08);
}
.faq-list { display: grid; gap: 10px; margin-block-start: 30px; }
.faq__button {
  display: flex; align-items: center; justify-content: space-between; gap: 20px; inline-size: 100%;
  padding: 20px; border: 0; background: transparent; color: inherit; text-align: start;
}
.faq__question { margin: 0; font-size: 17px; }
.faq__chevron { color: var(--brand-purple); transition: transform .2s ease; }
.faq__button[aria-expanded='true'] .faq__chevron { transform: rotate(180deg); }
.faq__answer { padding: 0 20px 20px; }
.faq__answer p { margin: 0; }
.faq__answer p + p { margin-block-start: 12px; }
.closing-cta { text-align: center; }
.closing-cta__subtitle { margin: 10px auto 0; max-inline-size: 520px; }
.closing-cta__button { margin-block-start: 30px; }
.footer { border-block-start: 1px solid var(--border-divider); background: var(--surface-light); }
.footer__inner { display: grid; gap: 30px; padding-block: 40px 30px; }
.footer__top { display: grid; grid-template-columns: minmax(0,1.1fr) repeat(4,minmax(0,1fr)); gap: 20px; }
.footer__brand-copy { margin: 14px 0 0; max-inline-size: 280px; }
.footer__column-title {
  margin: 0 0 12px; color: var(--text-heading); font-family: var(--heading-font); font-size: 16px;
  font-weight: 700; letter-spacing: .05em; line-height: 1.2; text-transform: uppercase;
}
.footer__links { display: grid; gap: 8px; }
.footer__links a:hover { color: var(--brand-purple); }
.footer__bottom { border-block-start: 1px solid var(--border-divider); padding-block-start: 20px; color: #7a8088; }
@media (max-width: 1080px) {
  .card-grid, .generator-group__cards, .steps, .why-grid, .footer__top { grid-template-columns: repeat(2, minmax(0,1fr)); }
  .footer__top > :first-child { grid-column: 1 / -1; }
}
@media (max-width: 860px) {
  .hero { padding-block: 50px 60px; }
  .hero__grid { grid-template-columns: 1fr; }
}
@media (max-width: 680px) {
  .container { inline-size: min(calc(100% - 30px), 1200px); }
  .section { padding-block: 30px; }
  .card-grid, .generator-group__cards, .steps, .why-grid, .footer__top { grid-template-columns: 1fr; }
  .topbar__inner { min-block-size: 60px; }
  .brand { font-size: 18px; }
  .hero__actions { flex-direction: column; align-items: stretch; }
  .button { inline-size: 100%; }
  .search-bar__field { inline-size: 100%; }
  .hero__title-line { white-space: normal; }
}
"""


def hero_svg():
    return """
<svg aria-hidden="true" class="hero-illustration" width="520" height="360" viewBox="0 0 520 360" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="heroGlow" x1="84" y1="54" x2="423" y2="296" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7671FF" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#CB0C9F" stop-opacity="0.16"/>
    </linearGradient>
  </defs>
  <rect x="48" y="26" width="424" height="308" rx="24" fill="url(#heroGlow)"/>
  <rect x="74" y="54" width="372" height="252" rx="18" fill="#FFFFFF" stroke="#C6C9CD" stroke-width="2"/>
  <rect x="104" y="86" width="126" height="18" rx="9" fill="#E9DEF7"/>
  <rect x="250" y="86" width="56" height="18" rx="9" fill="#F4F6F8"/>
  <rect x="324" y="86" width="84" height="18" rx="9" fill="#F4F6F8"/>
  <rect x="104" y="126" width="200" height="112" rx="18" fill="#F4F6F8" stroke="#D7C7EC" stroke-width="2"/>
  <path d="M136 213L176 169L206 194L246 150L272 178" stroke="#8159BB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="176" cy="169" r="8" fill="#CB0C9F" opacity="0.7"/>
  <rect x="326" y="130" width="82" height="12" rx="6" fill="#D7C7EC"/>
  <rect x="326" y="154" width="62" height="10" rx="5" fill="#ECE8F6"/>
  <rect x="326" y="178" width="84" height="10" rx="5" fill="#ECE8F6"/>
  <rect x="326" y="202" width="72" height="10" rx="5" fill="#ECE8F6"/>
  <rect x="104" y="258" width="304" height="18" rx="9" fill="#F4F6F8"/>
</svg>
"""


def category_icon(kind: str, small: bool = False) -> str:
    width = 72 if small else 84
    height = 52 if small else 60
    base = f'aria-hidden="true" width="{width}" height="{height}" viewBox="0 0 84 60" fill="none" xmlns="http://www.w3.org/2000/svg"'
    if kind == 'websites':
        return f'<svg {base}><rect x="6" y="8" width="72" height="44" rx="8" fill="#F4F6F8" stroke="#8159BB" stroke-width="2"/><rect x="14" y="16" width="56" height="6" rx="3" fill="#E6DCF4"/><rect x="14" y="28" width="24" height="14" rx="4" fill="#FFFFFF" stroke="#C6C9CD"/><rect x="44" y="28" width="26" height="5" rx="2.5" fill="#D7C7EC"/><rect x="44" y="37" width="20" height="5" rx="2.5" fill="#ECE8F6"/></svg>'
    if kind == 'landing-pages':
        return f'<svg {base}><rect x="10" y="6" width="64" height="48" rx="8" fill="#FFFFFF" stroke="#8159BB" stroke-width="2"/><rect x="18" y="14" width="48" height="14" rx="7" fill="#F0E8FB"/><rect x="18" y="34" width="38" height="6" rx="3" fill="#D7C7EC"/><rect x="18" y="44" width="28" height="4" rx="2" fill="#ECE8F6"/></svg>'
    if kind == 'portfolios':
        return f'<svg {base}><rect x="8" y="10" width="68" height="40" rx="8" fill="#FFFFFF" stroke="#8159BB" stroke-width="2"/><rect x="16" y="18" width="20" height="24" rx="4" fill="#F4F6F8" stroke="#D7C7EC"/><rect x="42" y="18" width="26" height="6" rx="3" fill="#D7C7EC"/><rect x="42" y="30" width="20" height="4" rx="2" fill="#ECE8F6"/><rect x="42" y="38" width="24" height="4" rx="2" fill="#ECE8F6"/></svg>'
    if kind == 'blogs':
        return f'<svg {base}><rect x="14" y="8" width="56" height="44" rx="8" fill="#FFFFFF" stroke="#8159BB" stroke-width="2"/><line x1="26" y1="20" x2="58" y2="20" stroke="#D7C7EC" stroke-width="4" stroke-linecap="round"/><line x1="26" y1="30" x2="58" y2="30" stroke="#ECE8F6" stroke-width="4" stroke-linecap="round"/><line x1="26" y1="40" x2="50" y2="40" stroke="#ECE8F6" stroke-width="4" stroke-linecap="round"/></svg>'
    if kind == 'stores':
        return f'<svg {base}><path d="M18 22H66L62 50H22L18 22Z" fill="#FFFFFF" stroke="#8159BB" stroke-width="2"/><path d="M24 22C24 16.477 28.477 12 34 12C39.523 12 44 16.477 44 22" stroke="#D7C7EC" stroke-width="3" stroke-linecap="round"/><path d="M40 22C40 16.477 44.477 12 50 12C55.523 12 60 16.477 60 22" stroke="#D7C7EC" stroke-width="3" stroke-linecap="round"/></svg>'
    return f'<svg {base}><rect x="12" y="10" width="60" height="40" rx="18" fill="#FFFFFF" stroke="#8159BB" stroke-width="2"/><path d="M24 28H60" stroke="#D7C7EC" stroke-width="4" stroke-linecap="round"/><circle cx="28" cy="28" r="4" fill="#8159BB"/><path d="M24 38H48" stroke="#ECE8F6" stroke-width="4" stroke-linecap="round"/></svg>'


def arrow_icon() -> str:
    return '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 9H14" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M9.5 4.5L14 9L9.5 13.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>'


def search_icon() -> str:
    return '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="5.75" stroke="currentColor" stroke-width="1.5"/><path d="M12.5 12.5L16 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'


def chevron_icon() -> str:
    return '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>'


def why_icon(index: int) -> str:
    icons = [
        '<svg aria-hidden="true" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 4L5 9V15C5 20.1 8.6 24.9 14 26C19.4 24.9 23 20.1 23 15V9L14 4Z" stroke="#8159BB" stroke-width="1.8"/><path d="M10 14L12.8 16.8L18 11.6" stroke="#8159BB" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        '<svg aria-hidden="true" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="6" width="20" height="16" rx="4" stroke="#8159BB" stroke-width="1.8"/><path d="M9 23.5H19" stroke="#8159BB" stroke-width="1.8" stroke-linecap="round"/></svg>',
        '<svg aria-hidden="true" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="9" stroke="#8159BB" stroke-width="1.8"/><path d="M14 9V14L17 16" stroke="#8159BB" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    ]
    return icons[index]


parts = []
parts.append('<!doctype html>')
parts.append('<html lang="en">')
parts.append('<head>')
parts.append('  <meta charset="UTF-8" />')
parts.append('  <meta name="viewport" content="width=device-width, initial-scale=1" />')
parts.append('  <title>%s</title>' % strings['en']['seo']['title'])
parts.append('  <meta name="description" content="%s" />' % strings['en']['seo']['description'].replace('"', '&quot;'))
parts.append('  <link rel="canonical" href="%s" />' % strings['en']['seo']['canonical'])
parts.append('  <meta property="og:title" content="%s" />' % strings['en']['seo']['ogTitle'])
parts.append('  <meta property="og:description" content="%s" />' % strings['en']['seo']['ogDescription'].replace('"', '&quot;'))
parts.append('  <meta property="og:url" content="%s" />' % strings['en']['seo']['ogUrl'])
parts.append('  <link rel="preconnect" href="https://fonts.googleapis.com" />')
parts.append('  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />')
parts.append('  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />')
parts.append('  <script type="application/ld+json">%s</script>' % json.dumps({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
        {'@type': 'ListItem', 'position': 1, 'name': 'Strikingly', 'item': 'https://www.strikingly.com/'},
        {'@type': 'ListItem', 'position': 2, 'name': 'AI Generators', 'item': 'https://www.strikingly.com/generators'},
    ],
}))
parts.append('  <style>%s</style>' % css)
parts.append('</head>')
parts.append('<body>')
parts.append('  <header class="topbar"><div class="container topbar__inner"><a class="brand" href="/" aria-label="Strikingly home"><span class="brand__mark">S</span><span>strikingly AI</span></a></div></header>')
parts.append('  <div class="container"><nav class="breadcrumb" aria-label="Breadcrumb"><ol><li><a href="/">Strikingly</a></li><li aria-current="page">AI Generators</li></ol></nav></div>')
parts.append('  <main>')
parts.append('    <section class="hero"><div class="container hero__grid"><div><h1 class="hero__title"><span class="hero__title-line hero__title-line--dark">%s</span><span class="hero__title-line hero__title-line--gradient">%s</span></h1><p class="hero__subtitle">%s</p><div class="hero__actions"><a class="button button--primary" href="/s/ai_site_builder">%s</a><a class="button button--ghost" href="#all-generators">%s</a></div></div><div class="hero__visual">%s</div></div></section>' % (strings['en']['hero']['line1'], strings['en']['hero']['line2'], strings['en']['hero']['subheadline'], strings['en']['hero']['primaryCta'], strings['en']['hero']['secondaryCta'], hero_svg()))
parts.append('    <section class="section"><div class="container"><h2 class="section-heading">FEATURED GENERATORS</h2><p class="section-subheading">A few common starting points.</p><div class="card-grid">')
for name, desc, cat in featured:
    parts.append('      <article class="card"><a class="card__link" href="/generators/%s"><h3 class="card__title">%s</h3><p class="card__description">%s</p><span class="tag">%s</span></a></article>' % (slugify(name), name, desc, cat))
parts.append('    </div></div></section>')
parts.append('    <section class="section"><div class="container"><h2 class="section-heading">BROWSE BY CATEGORY</h2><div class="card-grid">')
for slug, name, desc in browse_categories:
    parts.append('      <article class="card"><a class="category-card__link" href="/generators#%s">%s<div class="category-card__header"><h3 class="category-card__title">%s</h3><span class="category-card__arrow">%s</span></div><p class="card__description">%s</p></a></article>' % (slug, category_icon(slug, False), name, arrow_icon(), desc))
parts.append('    </div></div></section>')
parts.append('    <section class="section directory" id="all-generators"><div class="container"><h2 class="section-heading">ALL GENERATORS</h2><p class="section-subheading">Sixty-plus generators, organized by what you\'re building.</p><div class="search-bar"><div class="search-bar__field"><span class="search-bar__icon" aria-hidden="true">%s</span><input id="generator-search" class="search-bar__input" type="search" aria-label="Search generators" placeholder="Search generators..." /></div><p class="search-bar__count" id="generator-count">66 generators match</p></div><div class="search-empty" id="search-empty" aria-live="polite"><p class="search-empty__title">No generators found</p><p>Try a different keyword or browse the categories below.</p><div class="search-empty__actions"><button class="text-button" id="clear-search" type="button">Clear search</button><a class="text-link" href="/s/ai_site_builder">Can\'t find it? Start with our AI builder.</a></div></div>' % search_icon())
for key in ['websites', 'landing-pages', 'portfolios', 'blogs', 'stores', 'link-in-bio']:
    block = all_generators[key]
    parts.append('      <section class="generator-group" id="%s" data-group><h3 class="generator-group__heading">%s</h3><p class="generator-group__description">%s</p><div class="generator-group__cards" id="panel-%s" data-card-container data-limit="6">' % (key, block['title'], block['description'], key))
    for name, desc in block['cards']:
        category_text = key.replace('-', ' ')
        parts.append('        <article class="card generator-card" data-name="%s" data-description="%s" data-category="%s"><a class="generator-card__link" href="/generators/%s">%s<h4 class="card__title">%s</h4><p class="card__description">%s</p></a></article>' % (name.lower(), desc.lower(), category_text, slugify(name), category_icon(key, True), name, desc))
    parts.append('      </div><button class="show-toggle" type="button" data-toggle="%s" aria-expanded="false" aria-controls="panel-%s">Show all %s generators</button></section>' % (key, key, len(block['cards'])))
parts.append('    </div></section>')
parts.append('    <section class="section"><div class="container"><h2 class="section-heading">HOW IT WORKS</h2><div class="steps">')
for index, (title, desc) in enumerate(how_it_works, start=1):
    parts.append('      <article class="step"><div class="step-number" aria-hidden="true">%s</div><h3 class="step__title">%s</h3><p class="step__description">%s</p></article>' % (index, title, desc))
parts.append('    </div></div></section>')
parts.append('    <section class="section"><div class="container"><h2 class="section-heading">WHY STRIKINGLY</h2><div class="why-grid">')
for index, (title, desc) in enumerate(why_items):
    parts.append('      <article class="why-card"><span class="why-card__icon">%s</span><h3 class="why-card__title">%s</h3><p class="why-card__description">%s</p></article>' % (why_icon(index), title, desc))
parts.append('    </div></div></section>')
parts.append('    <section class="section"><div class="container"><h2 class="section-heading">FREQUENTLY ASKED QUESTIONS</h2><div class="faq-list">')
for index, (question, paragraphs) in enumerate(faqs, start=1):
    parts.append('      <article class="faq"><button class="faq__button" id="faq-button-%s" type="button" aria-expanded="true" aria-controls="faq-panel-%s"><span class="faq__question">%s</span><span class="faq__chevron">%s</span></button><div class="faq__answer" id="faq-panel-%s" role="region" aria-labelledby="faq-button-%s">' % (index, index, question, chevron_icon(), index, index))
    for p in paragraphs:
        parts.append('        <p>%s</p>' % p)
    parts.append('      </div></article>')
parts.append('    </div></div></section>')
parts.append('    <section class="section closing-cta"><div class="container"><h2 class="section-heading">READY TO BUILD?</h2><p class="closing-cta__subtitle">Pick a generator above, or jump straight into our AI builder.</p><a class="button button--primary closing-cta__button" href="/s/ai_site_builder">START WITH AI BUILDER</a></div></section>')
parts.append('  </main>')
parts.append('  <footer class="footer"><div class="container footer__inner"><div class="footer__top"><div><a class="brand" href="/" aria-label="Strikingly home"><span class="brand__mark">S</span><span>strikingly AI</span></a><p class="footer__brand-copy">Create polished websites, stores, blogs, portfolios, and more with Strikingly\'s AI-powered builder.</p></div><div><p class="footer__column-title">Product</p><div class="footer__links"><a href="/pricing">Pricing</a><a href="/templates">Templates</a><a href="/s/ai_site_builder">AI Site Builder</a></div></div><div><p class="footer__column-title">Company</p><div class="footer__links"><a href="/about">About</a><a href="/blog">Blog</a><a href="/support">Support</a></div></div><div><p class="footer__column-title">Resources</p><div class="footer__links"><span>AI Generators</span><a href="/templates">Website Templates</a><a href="/blog">Guides</a></div></div><div><p class="footer__column-title">Legal</p><div class="footer__links"><a href="/terms">Terms</a><a href="/privacy">Privacy</a></div></div></div><div class="footer__bottom">© 2026 Strikingly. All rights reserved.</div></div></footer>')
parts.append('  <script>const strings = %s; (() => { const locale = strings.en; document.documentElement.classList.add("js"); const searchInput = document.getElementById("generator-search"); const countEl = document.getElementById("generator-count"); const emptyEl = document.getElementById("search-empty"); const clearButton = document.getElementById("clear-search"); const groups = Array.from(document.querySelectorAll("[data-group]")); const toggles = Array.from(document.querySelectorAll("[data-toggle]")); const formatCount = (count) => count === 1 ? locale.all.matchSingular : locale.all.matchPlural.replace("{count}", count); const getVisibleCards = (container) => Array.from(container.querySelectorAll(".generator-card")).filter((card) => !card.hidden); const collapsedHeight = (container, limit) => { const cards = getVisibleCards(container); if (cards.length <= limit) return container.scrollHeight; const target = cards[Math.min(limit, cards.length) - 1]; return target.offsetTop + target.offsetHeight; }; const setToggleState = (group, forceExpanded = null) => { const container = group.querySelector("[data-card-container]"); const toggle = group.querySelector("[data-toggle]"); const cards = getVisibleCards(container); const limit = Number(container.dataset.limit || 6); const searching = searchInput.value.trim().length > 0; const showToggle = !searching && cards.length > limit; toggle.classList.toggle("is-visible", showToggle); toggle.hidden = !showToggle; if (!showToggle) { container.style.maxHeight = `${container.scrollHeight}px`; toggle.setAttribute("aria-expanded", "true"); return; } const expanded = forceExpanded !== null ? forceExpanded : toggle.getAttribute("aria-expanded") === "true"; container.style.maxHeight = `${expanded ? container.scrollHeight : collapsedHeight(container, limit)}px`; toggle.setAttribute("aria-expanded", String(expanded)); toggle.textContent = expanded ? locale.all.showLess : locale.all.showAll.replace("{count}", cards.length); }; const applySearch = () => { const query = searchInput.value.trim().toLowerCase(); let total = 0; groups.forEach((group) => { const cards = Array.from(group.querySelectorAll(".generator-card")); let matches = 0; cards.forEach((card) => { const haystack = [card.dataset.name, card.dataset.description, card.dataset.category].join(" ").toLowerCase(); const matched = !query || haystack.includes(query); card.hidden = !matched; if (matched) matches += 1; }); group.hidden = matches === 0; total += matches; setToggleState(group, query ? true : null); }); countEl.textContent = formatCount(total); emptyEl.classList.toggle("is-visible", total === 0); }; toggles.forEach((toggle) => toggle.addEventListener("click", () => { const group = toggle.closest("[data-group]"); const expanded = toggle.getAttribute("aria-expanded") === "true"; setToggleState(group, !expanded); })); window.addEventListener("resize", () => groups.forEach((group) => setToggleState(group))); searchInput.addEventListener("input", applySearch); clearButton.addEventListener("click", () => { searchInput.value = ""; searchInput.focus(); applySearch(); }); const faqButtons = Array.from(document.querySelectorAll(".faq__button")); faqButtons.forEach((button, index) => { const panel = document.getElementById(button.getAttribute("aria-controls")); const expanded = index === 0; button.setAttribute("aria-expanded", String(expanded)); panel.hidden = !expanded; button.addEventListener("click", () => { const isExpanded = button.getAttribute("aria-expanded") === "true"; button.setAttribute("aria-expanded", String(!isExpanded)); panel.hidden = isExpanded; }); }); applySearch(); })();</script>' % json.dumps(strings, ensure_ascii=False))
parts.append('</body>')
parts.append('</html>')

OUT.write_text('\n'.join(parts), encoding='utf-8')
print('Wrote', OUT)
