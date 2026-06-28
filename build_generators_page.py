from html import escape
from pathlib import Path
import json
import re

SITE_URL = "https://www.strikingly.com/generators"
OUTPUT_PATH = Path("/workspace/my-app/generators/index.html")

featured = [
    {
        "name": "AI Website Generator",
        "description": "Describe your business, get a full site",
        "category": "Website",
    },
    {
        "name": "Free Portfolio Generator",
        "description": "For creatives, in minutes, no fee",
        "category": "Portfolio",
    },
    {
        "name": "AI Landing Page Maker",
        "description": "One-page sites built to convert",
        "category": "Landing Page",
    },
    {
        "name": "Online Store Builder",
        "description": "Start selling without writing code",
        "category": "Store",
    },
    {
        "name": "Link-in-Bio Generator",
        "description": "One link for all your channels",
        "category": "Link-in-Bio",
    },
    {
        "name": "One-Page Website Builder",
        "description": "Simple sites, single scroll",
        "category": "Website",
    },
    {
        "name": "Wedding Website Generator",
        "description": "Share your day with guests",
        "category": "Website",
    },
    {
        "name": "Restaurant Website Builder",
        "description": "Menu, hours, reservations, done",
        "category": "Website",
    },
    {
        "name": "Blog Generator for Beginners",
        "description": "Publish-ready in minutes",
        "category": "Blog",
    },
]

browse_categories = [
    {
        "id": "websites",
        "name": "Websites",
        "description": "AI-built business and personal sites for any goal.",
        "variant": "websites",
    },
    {
        "id": "landing-pages",
        "name": "Landing Pages",
        "description": "Single-page sites built to convert visitors fast.",
        "variant": "landing-pages",
    },
    {
        "id": "portfolios",
        "name": "Portfolios",
        "description": "Showcase your work with a clean, focused site.",
        "variant": "portfolios",
    },
    {
        "id": "blogs",
        "name": "Blogs",
        "description": "Publish-ready blogs with built-in SEO basics.",
        "variant": "blogs",
    },
    {
        "id": "stores",
        "name": "Online Stores",
        "description": "Sell products online with payments built in.",
        "variant": "stores",
    },
    {
        "id": "link-in-bio",
        "name": "Link-in-Bio",
        "description": "One link, all your places. Made for creators.",
        "variant": "link-in-bio",
    },
]

directory = [
    {
        "id": "websites",
        "title": "Websites",
        "description": "AI-built sites for businesses, events, services, and personal brands.",
        "variant": "websites",
        "items": [
            ("AI Website Generator", "Describe your business, get a full site"),
            ("Free Website Builder for Photographers", "Image-first sites with polished galleries"),
            ("One-Page Website Builder", "Simple sites that keep everything on one scroll"),
            ("Wedding Website Generator", "Share schedules, maps, and RSVP details with guests"),
            ("Restaurant Website Builder", "Menu, hours, reservations, done"),
            ("Small Business Website Maker", "Fast pages for services, teams, and contact info"),
            ("No-Code Website Generator for Consultants", "Promote services and book discovery calls"),
            ("Personal Website Builder", "Make a simple home for your work and story"),
            ("AI Website Builder for Coaches", "Collect leads and present programs clearly"),
            ("Beautiful Website Generator for Nonprofits", "Share your mission and invite support"),
            ("Website Creator for Local Services", "Help nearby customers find and contact you"),
        ],
    },
    {
        "id": "landing-pages",
        "title": "Landing Pages",
        "description": "Focused one-page sites built to explain an offer and drive action.",
        "variant": "landing-pages",
        "items": [
            ("AI Landing Page Maker", "One-page sites built to convert"),
            ("Product Launch Landing Page Generator", "Go live fast for a new release"),
            ("Free Landing Page Builder for Events", "Promote dates, speakers, and signup"),
            ("Lead Capture Page Generator", "Turn traffic into qualified inquiries"),
            ("One-Page SaaS Landing Page Builder", "Explain features and drive trials"),
            ("AI Sales Page Generator", "Build persuasive long-form pages fast"),
            ("Landing Page Creator for Agencies", "Show offers and book discovery calls"),
            ("No-Code Webinar Landing Page Maker", "Register attendees in minutes"),
            ("Mobile App Landing Page Generator", "Highlight your app with clear CTAs"),
            ("Landing Page Builder for Real Estate", "Feature listings and collect leads"),
            ("Beautiful Landing Page Generator", "Polished layouts with minimal effort"),
        ],
    },
    {
        "id": "portfolios",
        "title": "Portfolios",
        "description": "Showcase work, projects, and experience with clean presentation-first layouts.",
        "variant": "portfolios",
        "items": [
            ("Free Portfolio Generator", "For creatives, in minutes, no fee"),
            ("Portfolio Generator for Designers", "Case-study pages for client work"),
            ("AI Photography Portfolio Builder", "Show shoots in clean, image-first galleries"),
            ("Portfolio Website Maker for Illustrators", "Present projects with room to breathe"),
            ("No-Code Portfolio Generator for Writers", "Clips, bio, and contact in one place"),
            ("Portfolio Builder for Architects", "Show plans, spaces, and process"),
            ("One-Page Portfolio Generator", "A focused portfolio on a single scroll"),
            ("Beautiful Portfolio Maker for Developers", "Projects, resume, and links together"),
            ("Portfolio Creator for Makeup Artists", "Feature looks and booking information"),
            ("AI Portfolio Builder for Students", "Launch a polished first portfolio quickly"),
            ("Portfolio Generator for Creators", "Put videos, links, and socials together"),
        ],
    },
    {
        "id": "blogs",
        "title": "Blogs",
        "description": "Start publishing with blog-ready layouts built for clarity and discoverability.",
        "variant": "blogs",
        "items": [
            ("Blog Generator for Beginners", "Publish-ready in minutes"),
            ("AI Blog Website Builder", "Start a content site from one prompt"),
            ("Personal Blog Generator", "Share updates, essays, and ideas"),
            ("Business Blog Creator", "Support SEO and build trust with fresh content"),
            ("Food Blog Website Maker", "Recipes, photos, and categories in one place"),
            ("Travel Blog Generator", "Publish stories and guides beautifully"),
            ("No-Code Blog Builder for Coaches", "Write once and stay visible online"),
            ("Fashion Blog Generator", "Editorial pages with room for visuals"),
            ("Tech Blog Maker", "Clean posts for tutorials and product news"),
            ("Newsletter Blog Generator", "Pair articles with email capture"),
            ("AI Blog Builder for Founders", "Publish insights without setup"),
        ],
    },
    {
        "id": "stores",
        "title": "Online Stores",
        "description": "Sell products, downloads, and collections with ecommerce-ready site structures.",
        "variant": "stores",
        "items": [
            ("Online Store Builder", "Start selling without writing code"),
            ("Online Store Builder for Restaurants", "Sell gift cards, merch, and special menus"),
            ("AI Ecommerce Website Generator", "Build a shop with product pages fast"),
            ("Free Store Builder for Makers", "Launch a small shop without upfront cost"),
            ("One-Page Store Creator", "Sell a focused product on a single page"),
            ("Store Builder for Beauty Brands", "Highlight products and routines clearly"),
            ("No-Code Online Shop for Artists", "Sell prints and originals online"),
            ("Digital Product Store Generator", "Offer downloads, courses, and files"),
            ("Store Builder for Apparel Brands", "Size charts, lookbooks, and checkout ready"),
            ("AI Store Creator for Home Goods", "Turn product ideas into a polished catalog"),
            ("Mobile Store Builder", "Shops that look sharp on every device"),
        ],
    },
    {
        "id": "link-in-bio",
        "title": "Link-in-Bio",
        "description": "Create compact link hubs for social traffic, creator brands, and mobile-first audiences.",
        "variant": "link-in-bio",
        "items": [
            ("Link-in-Bio Generator", "One link for all your channels"),
            ("AI Link-in-Bio Builder for Creators", "Pull everything into one branded page"),
            ("Free Link-in-Bio Maker for Musicians", "Add songs, shows, and merch"),
            ("Link Page Builder for Coaches", "Share offers, booking, and social proof"),
            ("Link-in-Bio Creator for Restaurants", "Menu, hours, and reservations in one place"),
            ("One-Page Bio Site Generator", "A simple personal hub with key links"),
            ("Link-in-Bio Builder for Podcasters", "Feature episodes, sponsors, and subscribe links"),
            ("Beautiful Bio Link Page for Artists", "Show work, events, and shop links"),
            ("Bio Page Generator for Small Businesses", "Send customers to the right next step"),
            ("No-Code Link-in-Bio Maker for Influencers", "Track campaigns and featured links"),
            ("Mobile-First Link Hub Builder", "Clean layouts built for social traffic"),
        ],
    },
]

faq_items = [
    {
        "question": "What is an AI site generator?",
        "answer": [
            "An AI site generator turns a short description of your business, project, or goal into a starting website. Instead of picking every section manually, you start with an AI-built draft that already has structure, copy, and layout.",
            "On Strikingly, the generator is a faster way to get to a real site. You can begin with a focused generator here, or go straight to the main AI builder and create from scratch in a few seconds.",
        ],
    },
    {
        "question": "How is a generator different from a template?",
        "answer": [
            "A template gives you a fixed starting design that you fill in yourself. A generator gives you a starting point shaped by what you want to build, so the first draft is already closer to your goal.",
            "You still get the flexibility of editing sections, text, images, and layout after generation. The difference is that AI helps create the first version instead of making you start from a blank page or generic template.",
        ],
    },
    {
        "question": "Are these generators free to use?",
        "answer": [
            "Yes. You can start generating and exploring site ideas without a credit card. That makes it easy to test different directions before you decide what to publish.",
            "If you want to publish with advanced features or connect a custom setup later, you can choose the plan that fits. But getting started does not require payment up front.",
        ],
    },
    {
        "question": "What kinds of sites can I build?",
        "answer": [
            "You can build business websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. The directory on this page is organized to help you find the right starting point quickly.",
            "That means you can begin with something broad like a website generator or something more specific like a store for makers, a wedding website, or a portfolio for designers.",
        ],
    },
    {
        "question": "Can I customize what the generator produces?",
        "answer": [
            "Yes. The generated site is a starting draft, not a locked result. You can edit sections, change copy, update images, add pages, and refine the layout to match your brand.",
            "That makes generators useful for speed without taking away control. You get a fast first version and still keep the ability to make it yours.",
        ],
    },
    {
        "question": "Do generated sites work on mobile?",
        "answer": [
            "Yes. Strikingly generators are built to produce responsive pages that adapt across phones, tablets, and desktops. Mobile readability and tap-friendly layouts are part of the default output.",
            "You can still preview and adjust the final result, but the generated starting point is made to work well on smaller screens from the beginning.",
        ],
    },
]

strings = {
    "en": {
        "meta": {
            "title": "AI Website Generators - Build Any Site in Seconds | Strikingly",
            "description": "Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.",
            "ogDescription": "Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds.",
            "canonical": "https://www.strikingly.com/generators",
        },
        "brand": {
            "name": "Strikingly",
            "ai": "AI",
        },
        "breadcrumb": ["Strikingly", "AI Generators"],
        "hero": {
            "line1": "BUILD ANY KIND OF SITE",
            "line2": "WITH AI, IN AN INSTANT",
            "subheadline": "Browse the right generator for what you're building, or jump straight into our AI site builder.",
            "primaryCta": "START BUILDING - IT'S FREE",
            "secondaryCta": "BROWSE GENERATORS",
        },
        "sectionTitles": {
            "featured": "FEATURED GENERATORS",
            "browse": "BROWSE BY CATEGORY",
            "all": "ALL GENERATORS",
            "how": "HOW IT WORKS",
            "why": "WHY STRIKINGLY",
            "faq": "FREQUENTLY ASKED QUESTIONS",
            "closing": "READY TO BUILD?",
        },
        "sectionSubtitles": {
            "featured": "A few common starting points.",
            "all": "Sixty-plus generators, organized by what you're building.",
            "closing": "Pick a generator above, or jump straight into our AI builder.",
        },
        "howItWorks": [
            ["PICK A GENERATOR", "Browse by category or search to find one that fits your goal."],
            ["DESCRIBE YOUR SITE", "Tell our AI builder about your business in a sentence or two."],
            ["GENERATE AND PUBLISH", "Get a fully built site in seconds. Customize anything, then go live."],
        ],
        "whyStrikingly": [
            ["LIVE IN SECONDS", "Describe your site, we build it. No setup, no learning curve."],
            ["MOBILE BY DEFAULT", "Every generator produces responsive sites that work on any device."],
            ["FREE TO START", "Generate, customize, and publish without a credit card."],
        ],
        "footer": {
            "description": "AI-powered website building for fast launches, polished pages, and easy publishing.",
            "columns": {
                "product": ["Pricing", "Templates"],
                "company": ["About", "Blog"],
                "resources": ["Support", "Guides"],
                "legal": ["Terms", "Privacy"],
            },
            "copyright": "© 2026 Strikingly. All rights reserved.",
        },
        "featured": featured,
        "browseCategories": browse_categories,
        "directory": directory,
        "faq": faq_items,
        "showAllPrefix": "Show all",
        "showAllSuffix": "generators",
        "showLess": "Show less",
        "searchPlaceholder": "Search generators...",
        "searchMatchSingular": "generator matches",
        "searchMatchPlural": "generators match",
        "clearSearch": "Clear search",
        "emptyLink": "Can't find it? Start with our AI builder.",
        "emptyMessage": "No generators match that search yet.",
        "faqExpand": "Expand answer",
        "faqCollapse": "Collapse answer",
    }
}

def slugify(text: str) -> str:
    value = re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")
    return value


def generator_card(name: str, description: str, category: str, variant: str) -> str:
    slug = slugify(name)
    search_blob = escape(f"{name} {description} {category}").lower()
    return f"""
          <article class=\"generator-card\" data-generator-card data-search=\"{search_blob}\">
            <a class=\"card-link\" href=\"/generators/{slug}\">
              <span class=\"section-thumb {variant}-thumb\" aria-hidden=\"true\">{thumbnail_svg(variant)}</span>
              <p class=\"card-title\">{escape(name)}</p>
              <p class=\"card-description\">{escape(description)}</p>
            </a>
          </article>"""


def featured_card(item: dict) -> str:
    slug = slugify(item["name"])
    return f"""
          <article class=\"feature-card\">
            <a class=\"card-link\" href=\"/generators/{slug}\">
              <p class=\"card-title\">{escape(item['name'])}</p>
              <p class=\"card-description\">{escape(item['description'])}</p>
              <span class=\"tag\">{escape(item['category'])}</span>
            </a>
          </article>"""


def browse_card(item: dict) -> str:
    return f"""
          <article class=\"browse-card\">
            <a class=\"card-link browse-link\" href=\"/generators#{item['id']}\">
              <span class=\"browse-illustration {item['variant']}-thumb\" aria-hidden=\"true\">{category_icon_svg(item['variant'])}</span>
              <div class=\"browse-card-body\">
                <p class=\"browse-card-title\">{escape(item['name']).upper()}</p>
                <p class=\"card-description\">{escape(item['description'])}</p>
              </div>
              <span class=\"browse-arrow\" aria-hidden=\"true\">{arrow_svg()}</span>
            </a>
          </article>"""


def faq_block(index: int, item: dict) -> str:
    panel_id = f"faq-panel-{index + 1}"
    button_id = f"faq-button-{index + 1}"
    paras = "".join(f"<p>{escape(paragraph)}</p>" for paragraph in item["answer"])
    return f"""
          <article class=\"faq-item\" data-expanded=\"{'true' if index == 0 else 'false'}\">
            <div class=\"faq-question\">
              <button class=\"faq-button\" id=\"{button_id}\" type=\"button\" aria-expanded=\"{'true' if index == 0 else 'false'}\" aria-controls=\"{panel_id}\">
                <span>{escape(item['question'])}</span>
                <span class=\"faq-icon\" aria-hidden=\"true\">+</span>
              </button>
            </div>
            <div class=\"faq-answer\" id=\"{panel_id}\" role=\"region\" aria-labelledby=\"{button_id}\">
              {paras}
            </div>
          </article>"""


def arrow_svg() -> str:
    return """
<svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">
  <path d=\"M5 12H19M19 12L13 6M19 12L13 18\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>
</svg>"""


def hero_svg() -> str:
    return """
<svg viewBox=\"0 0 520 360\" width=\"520\" height=\"360\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">
  <defs>
    <linearGradient id=\"heroStroke\" x1=\"65\" y1=\"50\" x2=\"460\" y2=\"305\" gradientUnits=\"userSpaceOnUse\">
      <stop stop-color=\"#7671FF\"/>
      <stop offset=\"1\" stop-color=\"#CB0C9F\"/>
    </linearGradient>
  </defs>
  <rect x=\"70\" y=\"42\" width=\"380\" height=\"270\" rx=\"20\" stroke=\"url(#heroStroke)\" stroke-width=\"3\"/>
  <rect x=\"100\" y=\"80\" width=\"320\" height=\"34\" rx=\"10\" stroke=\"#C9B7E6\" stroke-width=\"2\"/>
  <rect x=\"100\" y=\"132\" width=\"132\" height=\"132\" rx=\"14\" stroke=\"#C9B7E6\" stroke-width=\"2\"/>
  <rect x=\"252\" y=\"132\" width=\"168\" height=\"18\" rx=\"9\" fill=\"#EDE5F7\"/>
  <rect x=\"252\" y=\"164\" width=\"146\" height=\"12\" rx=\"6\" fill=\"#F4EDF9\"/>
  <rect x=\"252\" y=\"188\" width=\"160\" height=\"12\" rx=\"6\" fill=\"#F4EDF9\"/>
  <rect x=\"252\" y=\"222\" width=\"116\" height=\"34\" rx=\"8\" fill=\"#8159BB\" fill-opacity=\"0.12\" stroke=\"#8159BB\" stroke-width=\"1.5\"/>
  <path d=\"M126 224C148 192 184 176 206 158C218 148 222 136 220 122C244 138 258 160 258 184C258 220 229 248 190 248C165 248 143 239 126 224Z\" stroke=\"#8159BB\" stroke-width=\"2\"/>
  <circle cx=\"412\" cy=\"66\" r=\"18\" fill=\"#F5EEFB\" stroke=\"#D4C3EC\" stroke-width=\"2\"/>
  <path d=\"M406 66H418M412 60V72\" stroke=\"#8159BB\" stroke-width=\"2\" stroke-linecap=\"round\"/>
  <path d=\"M58 286C110 244 160 320 224 278C259 255 271 212 314 204C355 196 388 223 446 188\" stroke=\"#D4C3EC\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-dasharray=\"8 10\"/>
</svg>"""


def thumbnail_svg(variant: str) -> str:
    accents = {
        "websites": ("#F4EDF9", "#8159BB"),
        "landing-pages": ("#F2F0FF", "#7671FF"),
        "portfolios": ("#FBEEF7", "#CB0C9F"),
        "blogs": ("#F4F6F8", "#8159BB"),
        "stores": ("#F7F1FB", "#8159BB"),
        "link-in-bio": ("#F8EEF8", "#CB0C9F"),
    }
    fill, stroke = accents[variant]
    return f"""
<svg viewBox=\"0 0 160 96\" width=\"160\" height=\"96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">
  <rect x=\"1\" y=\"1\" width=\"158\" height=\"94\" rx=\"16\" fill=\"{fill}\" stroke=\"#E2E4E7\"/>
  <rect x=\"18\" y=\"20\" width=\"124\" height=\"14\" rx=\"7\" fill=\"#FFFFFF\" stroke=\"{stroke}\" stroke-width=\"1.6\"/>
  <rect x=\"18\" y=\"44\" width=\"48\" height=\"34\" rx=\"8\" fill=\"#FFFFFF\" stroke=\"{stroke}\" stroke-width=\"1.6\"/>
  <rect x=\"74\" y=\"46\" width=\"52\" height=\"8\" rx=\"4\" fill=\"#FFFFFF\" stroke=\"#D6D9DD\"/>
  <rect x=\"74\" y=\"60\" width=\"42\" height=\"8\" rx=\"4\" fill=\"#FFFFFF\" stroke=\"#D6D9DD\"/>
</svg>"""


def category_icon_svg(variant: str) -> str:
    return thumbnail_svg(variant)


def section_markup(section: dict) -> str:
    cards = "\n".join(generator_card(name, description, section["title"], section["variant"]) for name, description in section["items"])
    count = len(section["items"])
    toggle_id = f"{section['id']}-grid"
    return f"""
        <section class=\"directory-subsection\" id=\"{section['id']}\" data-generator-section data-total=\"{count}\">
          <div class=\"subsection-header\">
            <div>
              <h3>{escape(section['title']).upper()}</h3>
              <p>{escape(section['description'])}</p>
            </div>
            <button class=\"show-all-button button button-ghost\" type=\"button\" hidden data-show-all aria-expanded=\"false\" aria-controls=\"{toggle_id}\">Show all {count} generators</button>
          </div>
          <div class=\"generator-grid\" id=\"{toggle_id}\" data-collapsible-grid>
{cards}
          </div>
        </section>"""


featured_markup = "\n".join(featured_card(item) for item in featured)
browse_markup = "\n".join(browse_card(item) for item in browse_categories)
directory_markup = "\n".join(section_markup(section) for section in directory)
faq_markup = "\n".join(faq_block(index, item) for index, item in enumerate(faq_items))

total_generators = sum(len(section["items"]) for section in directory)
strings_json = json.dumps(strings, ensure_ascii=False)
copy = strings["en"]

html = f"""<!doctype html>
<html lang=\"en\">
  <head>
    <meta charset=\"UTF-8\" />
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />
    <title>AI Website Generators - Build Any Site in Seconds | Strikingly</title>
    <meta name=\"description\" content=\"Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.\" />
    <link rel=\"canonical\" href=\"https://www.strikingly.com/generators\" />
    <meta property=\"og:title\" content=\"AI Website Generators - Build Any Site in Seconds | Strikingly\" />
    <meta property=\"og:description\" content=\"Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds.\" />
    <meta property=\"og:url\" content=\"https://www.strikingly.com/generators\" />
    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />
    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />
    <link href=\"https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Open+Sans:wght@400;600;700&display=swap\" rel=\"stylesheet\" />
    <script type=\"application/ld+json\">{{
      \"@context\": \"https://schema.org\",
      \"@type\": \"BreadcrumbList\",
      \"itemListElement\": [
        {{
          \"@type\": \"ListItem\",
          \"position\": 1,
          \"name\": \"Strikingly\",
          \"item\": \"https://www.strikingly.com/\"
        }},
        {{
          \"@type\": \"ListItem\",
          \"position\": 2,
          \"name\": \"AI Generators\",
          \"item\": \"https://www.strikingly.com/generators\"
        }}
      ]
    }}</script>
    <script>document.documentElement.classList.add('has-js');</script>
    <style>
      :root {{
        --brand-purple: #8159BB;
        --ai-blue: #7671FF;
        --ai-pink: #CB0C9F;
        --body-text: #636972;
        --heading-text: #4B5056;
        --hero-dark: #2E2E2F;
        --card-border: #C6C9CD;
        --divider: #E2E4E7;
        --light-bg: #F4F6F8;
        --white: #FFFFFF;
        --container: 1200px;
        --radius-card: 3px;
        --radius-button: 4px;
        --shadow-hover: 0 12px 28px rgba(46, 46, 47, 0.08);
        --heading-font: \"Brandon Grotesque\", \"Josefin Sans\", \"Poppins\", sans-serif;
        --body-font: \"Open Sans\", Arial, sans-serif;
      }}

      * {{
        box-sizing: border-box;
      }}

      html {{
        scroll-behavior: smooth;
      }}

      body {{
        margin: 0;
        min-inline-size: 320px;
        font-family: var(--body-font);
        font-size: 14px;
        line-height: 1.5;
        color: var(--body-text);
        background: var(--white);
      }}

      a {{
        color: inherit;
        text-decoration: none;
      }}

      img,
      svg {{
        display: block;
        max-inline-size: 100%;
      }}

      button,
      input {{
        font: inherit;
      }}

      .container {{
        max-inline-size: var(--container);
        margin-inline: auto;
        padding-inline: 20px;
      }}

      .top-bar {{
        background: var(--white);
        border-block-end: 1px solid var(--divider);
      }}

      .top-bar .container {{
        display: flex;
        align-items: center;
        min-block-size: 60px;
      }}

      .brand-mark {{
        display: inline-flex;
        align-items: center;
        gap: 10px;
        color: var(--heading-text);
        font-family: var(--heading-font);
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }}

      .brand-mark small {{
        padding-block: 3px;
        padding-inline: 8px;
        border: 1px solid var(--brand-purple);
        border-radius: 999px;
        color: var(--brand-purple);
        font-size: 11px;
        letter-spacing: 0.08em;
      }}

      .breadcrumb-nav {{
        padding-block: 20px 10px;
      }}

      .breadcrumb-list {{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 10px;
        margin: 0;
        padding: 0;
        list-style: none;
        color: var(--body-text);
      }}

      .breadcrumb-list li {{
        display: inline-flex;
        align-items: center;
        gap: 10px;
      }}

      .breadcrumb-list li:not(:last-child)::after {{
        content: \">\";
        color: var(--brand-purple);
      }}

      .breadcrumb-link {{
        color: var(--body-text);
      }}

      .breadcrumb-link:hover {{
        color: var(--brand-purple);
      }}

      .hero {{
        position: relative;
        overflow: hidden;
        padding-block: 60px 80px;
      }}

      .hero::before {{
        content: \"\";
        position: absolute;
        inset: 10px 0 auto;
        block-size: 100%;
        background: radial-gradient(circle at 80% 20%, rgba(203, 12, 159, 0.08), transparent 45%), radial-gradient(circle at 20% 10%, rgba(118, 113, 255, 0.08), transparent 42%);
        pointer-events: none;
      }}

      .hero-grid {{
        position: relative;
        display: grid;
        grid-template-columns: 1.1fr 0.9fr;
        gap: 40px;
        align-items: center;
      }}

      .hero-copy {{
        max-inline-size: 620px;
      }}

      h1,
      h2,
      h3,
      .button,
      .tag,
      .step-number,
      .claim-title,
      .browse-card-title {{
        font-family: var(--heading-font);
      }}

      h1 {{
        margin: 0;
        font-size: clamp(30px, 5vw, 48px);
        line-height: 1.2;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }}

      .hero-line-dark {{
        display: block;
        color: var(--hero-dark);
      }}

      .hero-line-gradient {{
        display: block;
        background: linear-gradient(90deg, var(--ai-blue), var(--ai-pink));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }}

      .hero-subheadline {{
        max-inline-size: 560px;
        margin: 20px 0 0;
        font-size: 18px;
        color: var(--body-text);
      }}

      .button-row {{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-block-start: 30px;
      }}

      .button {{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-block-size: 36px;
        padding-block: 9px;
        padding-inline: 15px;
        border-radius: var(--radius-button);
        border: 1px solid transparent;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        cursor: pointer;
        transition: border-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease, background 0.2s ease;
      }}

      .button-large {{
        min-block-size: 44px;
        padding-inline: 20px;
      }}

      .button-primary {{
        background: linear-gradient(90deg, var(--ai-blue), var(--ai-pink));
        color: var(--white);
      }}

      .button-ghost {{
        background: transparent;
        border-color: var(--brand-purple);
        color: var(--brand-purple);
      }}

      .button-primary:hover,
      .button-primary:focus-visible {{
        box-shadow: 0 10px 24px rgba(118, 113, 255, 0.24);
      }}

      .button-ghost:hover,
      .button-ghost:focus-visible {{
        box-shadow: 0 8px 18px rgba(129, 89, 187, 0.12);
      }}

      a:focus-visible,
      button:focus-visible,
      input:focus-visible {{
        outline: 3px solid rgba(118, 113, 255, 0.35);
        outline-offset: 3px;
      }}

      .hero-visual {{
        justify-self: end;
        inline-size: min(100%, 520px);
        padding: 20px;
      }}

      .section {{
        padding-block: 40px;
        border-block-start: 1px solid var(--divider);
      }}

      .section-header {{
        margin-block-end: 20px;
      }}

      h2 {{
        margin: 0;
        color: var(--heading-text);
        font-size: clamp(26px, 3vw, 32px);
        line-height: 1.2;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }}

      .section-subtitle {{
        margin: 10px 0 0;
        max-inline-size: 640px;
      }}

      .card-grid {{
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }}

      .feature-card,
      .browse-card,
      .generator-card,
      .step-card,
      .why-card,
      .faq-item {{
        border: 1px solid var(--card-border);
        border-radius: var(--radius-card);
        background: var(--white);
      }}

      .card-link {{
        display: block;
        block-size: 100%;
        padding: 20px;
      }}

      .feature-card,
      .browse-card,
      .generator-card {{
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
      }}

      .feature-card:hover,
      .feature-card:focus-within,
      .browse-card:hover,
      .browse-card:focus-within,
      .generator-card:hover,
      .generator-card:focus-within {{
        border-color: var(--brand-purple);
        box-shadow: var(--shadow-hover);
      }}

      .card-title {{
        margin: 0;
        color: var(--heading-text);
        font-size: 20px;
        font-weight: 700;
        line-height: 1.35;
      }}

      .card-description {{
        margin: 10px 0 0;
        color: var(--body-text);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }}

      .tag {{
        display: inline-flex;
        align-items: center;
        margin-block-start: 20px;
        padding-block: 2px;
        padding-inline: 6px;
        border: 1px solid var(--brand-purple);
        border-radius: 3px;
        color: var(--brand-purple);
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }}

      .browse-link {{
        display: grid;
        grid-template-columns: 1fr auto;
        grid-template-areas:
          "illustration illustration"
          "body arrow";
        gap: 20px;
        align-items: end;
      }}

      .browse-illustration,
      .section-thumb {{
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }}

      .browse-illustration {{
        grid-area: illustration;
      }}

      .browse-card-body {{
        grid-area: body;
      }}

      .browse-illustration svg {{
        inline-size: 110px;
        block-size: auto;
      }}

      .browse-arrow {{
        grid-area: arrow;
        color: var(--brand-purple);
      }}

      .browse-card-title {{
        margin: 0;
        color: var(--heading-text);
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }}

      .directory-toolbar {{
        display: flex;
        flex-wrap: wrap;
        align-items: end;
        justify-content: space-between;
        gap: 20px;
        margin-block-end: 30px;
      }}

      .search-wrap {{
        position: relative;
        inline-size: min(100%, 480px);
      }}

      .search-icon {{
        position: absolute;
        inset-inline-start: 15px;
        inset-block-start: 50%;
        transform: translateY(-50%);
        color: var(--body-text);
        pointer-events: none;
      }}

      .search-input {{
        inline-size: 100%;
        min-block-size: 44px;
        padding-inline: 44px 15px;
        border: 1px solid var(--card-border);
        border-radius: 4px;
        color: var(--heading-text);
        background: var(--white);
      }}

      .search-meta {{
        display: flex;
        align-items: center;
        gap: 10px 20px;
        flex-wrap: wrap;
      }}

      .directory-count {{
        margin: 0;
        color: var(--heading-text);
        font-weight: 600;
      }}

      .empty-state {{
        display: none;
        margin-block-end: 30px;
        padding: 20px;
        border: 1px solid var(--card-border);
        border-radius: var(--radius-card);
      }}

      .empty-state.is-visible {{
        display: block;
      }}

      .empty-state p {{
        margin: 0 0 10px;
      }}

      .empty-state-link {{
        color: var(--brand-purple);
        font-weight: 600;
      }}

      .directory-stack {{
        display: grid;
        gap: 30px;
      }}

      .directory-subsection {{
        scroll-margin-block-start: 20px;
      }}

      .subsection-header {{
        display: flex;
        align-items: end;
        justify-content: space-between;
        gap: 20px;
        margin-block-end: 20px;
      }}

      .subsection-header h3 {{
        margin: 0;
        color: var(--heading-text);
        font-size: 22px;
        line-height: 1.2;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }}

      .subsection-header p {{
        margin: 10px 0 0;
      }}

      .generator-grid {{
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }}

      .generator-grid.is-collapsible {{
        overflow: hidden;
        transition: max-height 0.35s ease;
      }}

      .generator-card .card-link {{
        padding-block-end: 22px;
      }}

      .generator-card .section-thumb {{
        display: block;
        margin-block-end: 20px;
      }}

      .generator-card .section-thumb svg {{
        inline-size: 100%;
        max-inline-size: 160px;
        block-size: auto;
      }}

      .generator-card.is-filtered-out {{
        display: none;
      }}

      .how-grid {{
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }}

      .step-card {{
        padding: 20px;
      }}

      .step-number {{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        inline-size: 44px;
        block-size: 44px;
        border-radius: 999px;
        background: rgba(129, 89, 187, 0.14);
        color: var(--brand-purple);
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 0.05em;
      }}

      .step-title,
      .claim-title {{
        margin: 20px 0 10px;
        color: var(--heading-text);
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }}

      .why-grid {{
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }}

      .why-card {{
        padding: 20px;
      }}

      .icon-wrap {{
        inline-size: 48px;
        block-size: 48px;
        border-radius: 999px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: rgba(129, 89, 187, 0.1);
        color: var(--brand-purple);
      }}

      .faq-list {{
        display: grid;
        gap: 20px;
      }}

      .faq-button {{
        inline-size: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding: 20px;
        border: 0;
        background: transparent;
        color: var(--heading-text);
        cursor: pointer;
        font-family: var(--heading-font);
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0.03em;
        line-height: 1.3;
        text-align: start;
      }}

      .faq-icon {{
        color: var(--brand-purple);
        font-size: 28px;
        line-height: 1;
        transition: transform 0.2s ease;
      }}

      .faq-answer {{
        padding: 0 20px 20px;
      }}

      .faq-answer p {{
        margin: 0;
      }}

      .faq-answer p + p {{
        margin-block-start: 15px;
      }}

      .has-js .faq-item[data-expanded=\"false\"] .faq-answer {{
        display: none;
      }}

      .has-js .faq-item[data-expanded=\"false\"] .faq-icon {{
        transform: rotate(0deg);
      }}

      .has-js .faq-item[data-expanded=\"true\"] .faq-icon {{
        transform: rotate(45deg);
      }}

      .closing-cta {{
        text-align: center;
      }}

      .closing-cta .section-subtitle {{
        margin-inline: auto;
      }}

      .footer {{
        border-block-start: 1px solid var(--divider);
        padding-block: 40px;
      }}

      .footer-grid {{
        display: grid;
        gap: 20px;
        grid-template-columns: 1.2fr repeat(4, minmax(0, 1fr));
      }}

      .footer-title {{
        margin: 0 0 10px;
        color: var(--heading-text);
        font-family: var(--heading-font);
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }}

      .footer-list {{
        margin: 0;
        padding: 0;
        list-style: none;
        display: grid;
        gap: 10px;
      }}

      .footer-link:hover {{
        color: var(--brand-purple);
      }}

      .footer-copy {{
        margin: 30px 0 0;
        padding-block-start: 20px;
        border-block-start: 1px solid var(--divider);
      }}

      @media (max-width: 1023px) {{
        .hero-grid,
        .card-grid,
        .generator-grid,
        .how-grid {{
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }}

        .footer-grid {{
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }}
      }}

      @media (max-width: 767px) {{
        .hero {{
          padding-block: 50px 60px;
        }}

        .hero-grid,
        .card-grid,
        .generator-grid,
        .how-grid,
        .why-grid,
        .footer-grid {{
          grid-template-columns: minmax(0, 1fr);
        }}

        .hero-visual {{
          order: 2;
          justify-self: stretch;
          padding: 0;
        }}

        .hero-copy {{
          order: 1;
        }}

        .button-row {{
          flex-direction: column;
        }}

        .button-row .button {{
          inline-size: 100%;
        }}

        .browse-link {{
          grid-template-columns: 1fr;
          align-items: start;
        }}

        .browse-arrow {{
          justify-self: start;
        }}

        .directory-toolbar,
        .subsection-header {{
          flex-direction: column;
          align-items: stretch;
        }}

        .search-wrap {{
          inline-size: 100%;
        }}

        .faq-button {{
          font-size: 18px;
        }}
      }}
    </style>
  </head>
  <body>
    <header class=\"top-bar\">
      <div class=\"container\">
        <a class=\"brand-mark\" href=\"/\" aria-label=\"Strikingly home\">Strikingly <small>AI</small></a>
      </div>
    </header>

    <nav class=\"breadcrumb-nav\" aria-label=\"Breadcrumb\">
      <div class=\"container\">
        <ol class=\"breadcrumb-list\">
          <li><a class=\"breadcrumb-link\" href=\"/\">Strikingly</a></li>
          <li aria-current=\"page\">AI Generators</li>
        </ol>
      </div>
    </nav>

    <main>
      <section class=\"hero\">
        <div class=\"container hero-grid\">
          <div class=\"hero-copy\">
            <h1>
              <span class=\"hero-line-dark\">Build Any Kind Of Site</span>
              <span class=\"hero-line-gradient\">With AI, In An Instant</span>
            </h1>
            <p class=\"hero-subheadline\">Browse the right generator for what you're building, or jump straight into our AI site builder.</p>
            <div class=\"button-row\">
              <a class=\"button button-large button-primary\" href=\"/s/ai_site_builder\">Start Building - It's Free</a>
              <a class=\"button button-large button-ghost\" href=\"#all-generators\">Browse Generators</a>
            </div>
          </div>
          <div class=\"hero-visual\">{hero_svg()}</div>
        </div>
      </section>

      <section class=\"section\" aria-labelledby=\"featured-generators-heading\">
        <div class=\"container\">
          <div class=\"section-header\">
            <h2 id=\"featured-generators-heading\">Featured Generators</h2>
            <p class=\"section-subtitle\">A few common starting points.</p>
          </div>
          <div class=\"card-grid\">
{featured_markup}
          </div>
        </div>
      </section>

      <section class=\"section\" aria-labelledby=\"browse-category-heading\">
        <div class=\"container\">
          <div class=\"section-header\">
            <h2 id=\"browse-category-heading\">Browse By Category</h2>
          </div>
          <div class=\"card-grid\">
{browse_markup}
          </div>
        </div>
      </section>

      <section class=\"section\" id=\"all-generators\" aria-labelledby=\"all-generators-heading\">
        <div class=\"container\">
          <div class=\"section-header\">
            <h2 id=\"all-generators-heading\">All Generators</h2>
            <p class=\"section-subtitle\">Sixty-plus generators, organized by what you're building.</p>
          </div>
          <div class=\"directory-toolbar\">
            <label class=\"search-wrap\">
              <span class=\"search-icon\" aria-hidden=\"true\">
                <svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">
                  <path d=\"M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z\" stroke=\"currentColor\" stroke-width=\"1.8\"/>
                  <path d=\"M20.9999 21L16.6499 16.65\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>
                </svg>
              </span>
              <input class=\"search-input\" type=\"search\" aria-label=\"Search generators\" placeholder=\"Search generators...\" data-generator-search />
            </label>
            <div class=\"search-meta\">
              <p class=\"directory-count\" aria-live=\"polite\"><span data-search-count>{total_generators}</span> <span data-search-label>generators match</span></p>
              <button class=\"button button-ghost\" type=\"button\" data-clear-search-toolbar hidden>Clear search</button>
            </div>
          </div>
          <div class=\"empty-state\" data-empty-state aria-live=\"polite\">
            <p>No generators match that search yet.</p>
            <button class=\"button button-ghost\" type=\"button\" data-clear-search>Clear search</button>
            <p><a class=\"empty-state-link\" href=\"/s/ai_site_builder\">Can't find it? Start with our AI builder.</a></p>
          </div>
          <div class=\"directory-stack\">
{directory_markup}
          </div>
        </div>
      </section>

      <section class=\"section\" aria-labelledby=\"how-it-works-heading\">
        <div class=\"container\">
          <div class=\"section-header\">
            <h2 id=\"how-it-works-heading\">How It Works</h2>
          </div>
          <div class=\"how-grid\">
            <article class=\"step-card\">
              <span class=\"step-number\">1</span>
              <p class=\"step-title\">Pick A Generator</p>
              <p>Browse by category or search to find one that fits your goal.</p>
            </article>
            <article class=\"step-card\">
              <span class=\"step-number\">2</span>
              <p class=\"step-title\">Describe Your Site</p>
              <p>Tell our AI builder about your business in a sentence or two.</p>
            </article>
            <article class=\"step-card\">
              <span class=\"step-number\">3</span>
              <p class=\"step-title\">Generate And Publish</p>
              <p>Get a fully built site in seconds. Customize anything, then go live.</p>
            </article>
          </div>
        </div>
      </section>

      <section class=\"section\" aria-labelledby=\"why-strikingly-heading\">
        <div class=\"container\">
          <div class=\"section-header\">
            <h2 id=\"why-strikingly-heading\">Why Strikingly</h2>
          </div>
          <div class=\"why-grid\">
            <article class=\"why-card\">
              <span class=\"icon-wrap\" aria-hidden=\"true\">
                <svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">
                  <path d=\"M12 3L4 14H11L10 21L20 9H13L14 3H12Z\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linejoin=\"round\"/>
                </svg>
              </span>
              <p class=\"claim-title\">Live In Seconds</p>
              <p>Describe your site, we build it. No setup, no learning curve.</p>
            </article>
            <article class=\"why-card\">
              <span class=\"icon-wrap\" aria-hidden=\"true\">
                <svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">
                  <rect x=\"4\" y=\"3\" width=\"16\" height=\"18\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"1.8\"/>
                  <path d=\"M9 18H15\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>
                </svg>
              </span>
              <p class=\"claim-title\">Mobile By Default</p>
              <p>Every generator produces responsive sites that work on any device.</p>
            </article>
            <article class=\"why-card\">
              <span class=\"icon-wrap\" aria-hidden=\"true\">
                <svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">
                  <path d=\"M12 2V22\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>
                  <path d=\"M17 6H9.5C8.11929 6 7 7.11929 7 8.5C7 9.88071 8.11929 11 9.5 11H14.5C15.8807 11 17 12.1193 17 13.5C17 14.8807 15.8807 16 14.5 16H7\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>
                </svg>
              </span>
              <p class=\"claim-title\">Free To Start</p>
              <p>Generate, customize, and publish without a credit card.</p>
            </article>
          </div>
        </div>
      </section>

      <section class=\"section\" aria-labelledby=\"faq-heading\">
        <div class=\"container\">
          <div class=\"section-header\">
            <h2 id=\"faq-heading\">Frequently Asked Questions</h2>
          </div>
          <div class=\"faq-list\">
{faq_markup}
          </div>
        </div>
      </section>

      <section class=\"section closing-cta\" aria-labelledby=\"closing-cta-heading\">
        <div class=\"container\">
          <div class=\"section-header\">
            <h2 id=\"closing-cta-heading\">Ready To Build?</h2>
            <p class=\"section-subtitle\">Pick a generator above, or jump straight into our AI builder.</p>
          </div>
          <a class=\"button button-large button-primary\" href=\"/s/ai_site_builder\">Start With AI Builder</a>
        </div>
      </section>
    </main>

    <footer class=\"footer\">
      <div class=\"container\">
        <div class=\"footer-grid\">
          <div>
            <a class=\"brand-mark\" href=\"/\" aria-label=\"Strikingly home\">Strikingly <small>AI</small></a>
            <p style=\"margin: 20px 0 0; max-inline-size: 220px;\">AI-powered website building for fast launches, polished pages, and easy publishing.</p>
          </div>
          <div>
            <p class=\"footer-title\">Product</p>
            <ul class=\"footer-list\">
              <li><a class=\"footer-link\" href=\"/pricing\">Pricing</a></li>
              <li><a class=\"footer-link\" href=\"/templates\">Templates</a></li>
            </ul>
          </div>
          <div>
            <p class=\"footer-title\">Company</p>
            <ul class=\"footer-list\">
              <li><a class=\"footer-link\" href=\"/about\">About</a></li>
              <li><a class=\"footer-link\" href=\"/blog\">Blog</a></li>
            </ul>
          </div>
          <div>
            <p class=\"footer-title\">Resources</p>
            <ul class=\"footer-list\">
              <li><a class=\"footer-link\" href=\"/support\">Support</a></li>
              <li><span>Guides</span></li>
            </ul>
          </div>
          <div>
            <p class=\"footer-title\">Legal</p>
            <ul class=\"footer-list\">
              <li><a class=\"footer-link\" href=\"/terms\">Terms</a></li>
              <li><a class=\"footer-link\" href=\"/privacy\">Privacy</a></li>
            </ul>
          </div>
        </div>
        <p class=\"footer-copy\">© 2026 Strikingly. All rights reserved.</p>
      </div>
    </footer>

    <script>
      const strings = {strings_json};

      (function () {{
        const copy = strings.en;
        const initialVisibleCards = 6;
        const searchInput = document.querySelector('[data-generator-search]');
        const countNode = document.querySelector('[data-search-count]');
        const countLabel = document.querySelector('[data-search-label]');
        const emptyState = document.querySelector('[data-empty-state]');
        const toolbarClearButton = document.querySelector('[data-clear-search-toolbar]');
        const clearButtons = Array.from(document.querySelectorAll('[data-clear-search]'));
        const sections = Array.from(document.querySelectorAll('[data-generator-section]'));
        const faqItems = Array.from(document.querySelectorAll('.faq-item'));
        const collapsibles = [];

        function updateCount(value) {{
          countNode.textContent = String(value);
          countLabel.textContent = value === 1 ? copy.searchMatchSingular : copy.searchMatchPlural;
        }}

        function getVisibleCards(cards) {{
          return cards.filter(function (card) {{
            return !card.classList.contains('is-filtered-out');
          }});
        }}

        function computeCollapsedHeight(grid, visibleCards) {{
          const limit = Math.min(initialVisibleCards, visibleCards.length);
          if (!limit) return 0;
          const target = visibleCards[limit - 1];
          return target.offsetTop + target.offsetHeight;
        }}

        function applyCollapseState(item, forceExpanded) {{
          const visibleCards = getVisibleCards(item.cards);
          const needsCollapse = visibleCards.length > initialVisibleCards;
          const shouldExpand = forceExpanded || item.expanded || !needsCollapse;

          if (visibleCards.length === 0) {{
            item.grid.style.maxHeight = '0px';
            item.button.hidden = true;
            item.button.setAttribute('aria-expanded', 'false');
            return;
          }}

          if (needsCollapse && !item.grid.classList.contains('is-collapsible')) {{
            item.grid.classList.add('is-collapsible');
          }}

          const collapsedHeight = computeCollapsedHeight(item.grid, visibleCards);
          const fullHeight = item.grid.scrollHeight;
          item.grid.style.maxHeight = (shouldExpand ? fullHeight : collapsedHeight) + 'px';
          item.button.hidden = !needsCollapse || Boolean(searchInput.value.trim());
          item.button.setAttribute('aria-expanded', shouldExpand ? 'true' : 'false');
          item.button.textContent = shouldExpand ? copy.showLess : copy.showAllPrefix + ' ' + visibleCards.length + ' ' + copy.showAllSuffix;
        }}

        sections.forEach(function (section) {{
          const grid = section.querySelector('[data-collapsible-grid]');
          const button = section.querySelector('[data-show-all]');
          const cards = Array.from(section.querySelectorAll('[data-generator-card]'));
          if (!grid || !button) return;
          const item = {{ section: section, grid: grid, button: button, cards: cards, expanded: false }};
          collapsibles.push(item);
          applyCollapseState(item, false);
          button.hidden = cards.length <= initialVisibleCards;
          button.addEventListener('click', function () {{
            item.expanded = !item.expanded;
            applyCollapseState(item, false);
          }});
        }});

        function runSearch() {{
          const query = searchInput.value.trim().toLowerCase();
          let matches = 0;

          sections.forEach(function (section) {{
            const cards = Array.from(section.querySelectorAll('[data-generator-card]'));
            let sectionMatches = 0;
            cards.forEach(function (card) {{
              const isMatch = !query || card.dataset.search.indexOf(query) !== -1;
              card.classList.toggle('is-filtered-out', !isMatch);
              if (isMatch) sectionMatches += 1;
            }});
            section.hidden = Boolean(query) && sectionMatches === 0;
            matches += sectionMatches;
          }});

          updateCount(matches);
          emptyState.classList.toggle('is-visible', Boolean(query) && matches === 0);
          if (toolbarClearButton) {{
            toolbarClearButton.hidden = !query;
          }}
          collapsibles.forEach(function (item) {{
            applyCollapseState(item, Boolean(query));
          }});
        }}

        if (searchInput) {{
          searchInput.setAttribute('placeholder', copy.searchPlaceholder);
          searchInput.addEventListener('input', runSearch);
        }}

        if (toolbarClearButton) {{
          toolbarClearButton.textContent = copy.clearSearch;
          toolbarClearButton.addEventListener('click', function () {{
            searchInput.value = '';
            runSearch();
            searchInput.focus();
          }});
        }}

        clearButtons.forEach(function (button) {{
          button.textContent = copy.clearSearch;
          button.addEventListener('click', function () {{
            searchInput.value = '';
            runSearch();
            searchInput.focus();
          }});
        }});

        faqItems.forEach(function (item, index) {{
          const button = item.querySelector('.faq-button');
          const icon = item.querySelector('.faq-icon');
          const expanded = index === 0;
          item.dataset.expanded = expanded ? 'true' : 'false';
          button.setAttribute('aria-expanded', expanded ? 'true' : 'false');
          button.setAttribute('aria-label', expanded ? copy.faqCollapse : copy.faqExpand);
          icon.textContent = '+';
          button.addEventListener('click', function () {{
            const next = item.dataset.expanded !== 'true';
            item.dataset.expanded = next ? 'true' : 'false';
            button.setAttribute('aria-expanded', next ? 'true' : 'false');
            button.setAttribute('aria-label', next ? copy.faqCollapse : copy.faqExpand);
          }});
        }});

        updateCount({total_generators});
        window.addEventListener('resize', function () {{
          collapsibles.forEach(function (item) {{
            applyCollapseState(item, Boolean(searchInput.value.trim()));
          }});
        }});
      }})();
    </script>
  </body>
</html>
"""

OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
OUTPUT_PATH.write_text(html, encoding="utf-8")
print(f"Wrote {OUTPUT_PATH}")
