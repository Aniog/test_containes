from pathlib import Path
from html import escape
import json
import re

strings = {
    "en": {
        "meta": {
            "title": "AI Website Generators - Build Any Site in Seconds | Strikingly",
            "description": "Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.",
            "og_description": "Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds.",
            "canonical": "https://www.strikingly.com/generators",
            "og_url": "https://www.strikingly.com/generators",
        },
        "brand": {
            "logo_word": "strikingly",
            "logo_suffix": "AI",
        },
        "breadcrumb": {
            "label": "Breadcrumb",
            "home": "Strikingly",
            "current": "AI Generators",
        },
        "hero": {
            "line1": "BUILD ANY KIND OF SITE",
            "line2": "WITH AI, IN AN INSTANT",
            "subheadline": "Browse the right generator for what you're building, or jump straight into our AI site builder.",
            "primary_cta": "START BUILDING - IT'S FREE",
            "secondary_cta": "BROWSE GENERATORS",
        },
        "sections": {
            "featured_title": "FEATURED GENERATORS",
            "featured_subtitle": "A few common starting points.",
            "browse_title": "BROWSE BY CATEGORY",
            "all_title": "ALL GENERATORS",
            "all_subtitle": "Sixty-plus generators, organized by what you're building.",
            "search_placeholder": "Search generators...",
            "search_label": "Search generators",
            "clear_search": "Clear search",
            "empty_title": "No generators match your search.",
            "empty_body": "Try a broader term, or start with the full AI builder instead.",
            "empty_link": "Can't find it? Start with our AI builder.",
            "show_less": "Show fewer generators",
            "result_singular": "generator match",
            "result_plural": "generators match",
            "how_title": "HOW IT WORKS",
            "why_title": "WHY STRIKINGLY",
            "faq_title": "FREQUENTLY ASKED QUESTIONS",
            "closing_title": "READY TO BUILD?",
            "closing_subtitle": "Pick a generator above, or jump straight into our AI builder.",
            "closing_cta": "START WITH AI BUILDER",
        },
        "featured": [
            ["AI Website Generator", "Describe your business, get a full site", "Website"],
            ["Free Portfolio Generator", "For creatives, in minutes, no fee", "Portfolio"],
            ["AI Landing Page Maker", "One-page sites built to convert", "Landing Page"],
            ["Online Store Builder", "Start selling without writing code", "Store"],
            ["Link-in-Bio Generator", "One link for all your channels", "Link-in-Bio"],
            ["One-Page Website Builder", "Simple sites, single scroll", "Website"],
            ["Wedding Website Generator", "Share your day with guests", "Website"],
            ["Restaurant Website Builder", "Menu, hours, reservations, done", "Website"],
            ["Blog Generator for Beginners", "Publish-ready in minutes", "Blog"],
        ],
        "category_cards": [
            ["websites", "Websites", "AI-built business and personal sites for any goal.", "website"],
            ["landing-pages", "Landing Pages", "Single-page sites built to convert visitors fast.", "landing"],
            ["portfolios", "Portfolios", "Showcase your work with a clean, focused site.", "portfolio"],
            ["blogs", "Blogs", "Publish-ready blogs with built-in SEO basics.", "blog"],
            ["stores", "Online Stores", "Sell products online with payments built in.", "store"],
            ["link-in-bio", "Link-in-Bio", "One link, all your places. Made for creators.", "linkbio"],
        ],
        "directory": [
            {
                "slug": "websites",
                "name": "Websites",
                "description": "Full websites for businesses, events, organizations, and personal brands.",
                "icon": "website",
                "items": [
                    ["AI Website Generator", "Describe your business, get a full site"],
                    ["Free Website Builder for Photographers", "Turn galleries and bookings into a polished site"],
                    ["One-Page Wedding Website Builder", "Share your day, details, and RSVP info"],
                    ["Restaurant Website Builder", "Menu, hours, reservations, done"],
                    ["No-Code Small Business Website Maker", "Launch a professional business site fast"],
                    ["Beautiful Website Generator for Consultants", "Present services with a polished online presence"],
                    ["Church Website Generator", "Post events, updates, and community info"],
                    ["Personal Website Builder for Coaches", "Create a site for offers, scheduling, and trust"],
                    ["School Club Website Generator", "Publish updates, events, and member info simply"],
                    ["Event Website Builder for Conferences", "Share the agenda, speakers, and registration in one place"],
                ],
            },
            {
                "slug": "landing-pages",
                "name": "Landing Pages",
                "description": "One-page generators designed for campaigns, launches, and conversion-first goals.",
                "icon": "landing",
                "items": [
                    ["AI Landing Page Maker", "One-page sites built to convert"],
                    ["Free Landing Page Generator for Startups", "Launch a campaign page in minutes"],
                    ["Product Launch Landing Page Builder", "Explain your offer and collect interest fast"],
                    ["Coming Soon Page Generator", "Share a simple prelaunch page with an email CTA"],
                    ["Lead Capture Page Builder for Realtors", "Highlight listings and collect inquiries"],
                    ["Webinar Landing Page Generator", "Promote speakers, topics, and signups"],
                    ["App Waitlist Page Builder", "Turn early interest into a clean signup page"],
                    ["Course Sales Page Generator", "Present modules, outcomes, and enrollment details"],
                    ["Fundraising Landing Page Builder", "Tell your story and guide donations clearly"],
                    ["One-Page Promo Website Generator", "Run short campaigns with a focused message"],
                ],
            },
            {
                "slug": "portfolios",
                "name": "Portfolios",
                "description": "Focused portfolio sites for creators, students, freelancers, and studios.",
                "icon": "portfolio",
                "items": [
                    ["Free Portfolio Generator", "For creatives, in minutes, no fee"],
                    ["Portfolio Generator for Designers", "Show brand, web, and UI work clearly"],
                    ["Photography Portfolio Builder", "Present galleries with room to breathe"],
                    ["Architecture Portfolio Generator", "Highlight projects, process, and contact details"],
                    ["Writer Portfolio Website Maker", "Share clips, bio, and services on one page"],
                    ["Portfolio Builder for Developers", "Showcase projects, skills, and links"],
                    ["Model Portfolio Generator", "Create a simple site for photos and stats"],
                    ["Illustrator Portfolio Builder", "Arrange collections into a clean online book"],
                    ["Portfolio Generator for Makeup Artists", "Display looks, services, and booking info"],
                    ["Student Portfolio Website Builder", "Create a polished portfolio for applications"],
                ],
            },
            {
                "slug": "blogs",
                "name": "Blogs",
                "description": "Publishing-first blog generators for writers, founders, and niche experts.",
                "icon": "blog",
                "items": [
                    ["Blog Generator for Beginners", "Publish-ready in minutes"],
                    ["AI Blog Website Builder", "Start publishing with a clean structure"],
                    ["Personal Blog Generator", "Share ideas, updates, and stories simply"],
                    ["Travel Blog Website Maker", "Publish trips, guides, and photo essays"],
                    ["Food Blog Builder", "Organize recipes, posts, and categories neatly"],
                    ["Tech Blog Generator for Founders", "Write updates, launches, and insights"],
                    ["Fashion Blog Website Builder", "Publish lookbooks, stories, and trend posts"],
                    ["Parenting Blog Generator", "Share advice, routines, and resources"],
                    ["News Blog Maker for Communities", "Post timely updates and announcements"],
                    ["Author Blog Website Generator", "Combine articles, books, and email capture"],
                ],
            },
            {
                "slug": "stores",
                "name": "Online Stores",
                "description": "Storefronts for physical products, digital goods, specialty menus, and small catalogs.",
                "icon": "store",
                "items": [
                    ["Online Store Builder", "Start selling without writing code"],
                    ["Online Store Builder for Restaurants", "Sell pickup items, merch, or meal kits"],
                    ["Free Store Generator for Artists", "Sell prints and originals from one site"],
                    ["Boutique Store Builder", "Launch a small catalog with product highlights"],
                    ["Jewelry Store Website Generator", "Present collections with a polished feel"],
                    ["Digital Product Store Maker", "Sell downloads, guides, and templates"],
                    ["Skincare Store Builder", "Feature routines, bundles, and product highlights"],
                    ["Bakery Online Store Generator", "Take orders for cakes, boxes, and treats"],
                    ["Clothing Store Website Builder", "Show collections and start selling fast"],
                    ["Handmade Shop Generator", "Create a store for custom products and crafts"],
                ],
            },
            {
                "slug": "link-in-bio",
                "name": "Link-in-Bio",
                "description": "Compact pages for creators, social profiles, and multi-link sharing from a single URL.",
                "icon": "linkbio",
                "items": [
                    ["Link-in-Bio Generator", "One link for all your channels"],
                    ["Creator Link-in-Bio Builder", "Put videos, shop links, and socials in one place"],
                    ["Musician Link-in-Bio Generator", "Share tracks, tour dates, and merch quickly"],
                    ["Podcast Link-in-Bio Page Maker", "Point listeners to episodes and platforms"],
                    ["TikTok Bio Link Builder", "Route followers to your latest offers and content"],
                    ["Instagram Link Page Generator", "Add launches, shop links, and lead magnets"],
                    ["Author Link-in-Bio Builder", "Share books, events, and newsletter signup"],
                    ["Coach Link-in-Bio Generator", "Gather booking, content, and contact links"],
                    ["Artist Link Page Maker", "Connect galleries, prints, and commission details"],
                    ["Streamer Link-in-Bio Builder", "Send viewers to streams, clips, and sponsors"],
                ],
            },
        ],
        "how_it_works": [
            ["1", "PICK A GENERATOR", "Browse by category or search to find one that fits your goal."],
            ["2", "DESCRIBE YOUR SITE", "Tell our AI builder about your business in a sentence or two."],
            ["3", "GENERATE AND PUBLISH", "Get a fully built site in seconds. Customize anything, then go live."],
        ],
        "why": [
            ["spark", "LIVE IN SECONDS", "Describe your site, we build it. No setup, no learning curve."],
            ["phone", "MOBILE BY DEFAULT", "Every generator produces responsive sites that work on any device."],
            ["rocket", "FREE TO START", "Generate, customize, and publish without a credit card."],
        ],
        "faq": [
            [
                "What is an AI site generator?",
                [
                    "An AI site generator is a tool that turns a short description of your business, project, or goal into a finished website draft. Instead of starting from a blank page, you begin with a structure, copy, and design that are already in place.",
                    "Strikingly generators help you pick a starting point that matches what you want to build, then hand you off to our AI builder to generate the actual site in seconds.",
                ],
            ],
            [
                "How is a generator different from a template?",
                [
                    "A template gives you a fixed layout to edit manually. A generator gives you a more tailored starting point by combining a site type with AI-generated sections, copy direction, and structure.",
                    "You still get a polished design foundation, but the result is shaped around your use case rather than being a generic example that you have to rewrite from scratch.",
                ],
            ],
            [
                "Are these generators free to use?",
                [
                    "Yes. You can start with Strikingly for free and generate your site without entering a credit card. That makes it easy to explore ideas before you decide how far you want to take the project.",
                    "If you need advanced features or a custom domain later, you can upgrade when you are ready. The first step is simply getting your site live fast.",
                ],
            ],
            [
                "What kinds of sites can I build?",
                [
                    "You can build business websites, landing pages, portfolios, blogs, online stores, link-in-bio pages, and plenty of niche variations within each category. The hub is organized to help you find the closest fit quickly.",
                    "If you do not see an exact match, you can always jump straight into the AI builder and describe what you need in your own words.",
                ],
            ],
            [
                "Can I customize what the generator produces?",
                [
                    "Absolutely. The generated site is a starting point, not a locked result. You can update text, images, sections, layout choices, and styling after the first draft is created.",
                    "That means you get the speed of AI without giving up control over the final look and content of your site.",
                ],
            ],
            [
                "Do generated sites work on mobile?",
                [
                    "Yes. Strikingly-generated sites are built to be responsive from the start, so they adapt across phones, tablets, and desktop screens.",
                    "You can publish with confidence knowing your pages are designed to stay readable, usable, and polished on smaller screens too.",
                ],
            ],
        ],
        "footer": {
            "columns": [
                ["Product", [["AI Builder", "/s/ai_site_builder"], ["Pricing", "/pricing"], ["Templates", "/templates"]]],
                ["Company", [["About", "/about"], ["Blog", "/blog"], ["Support", "/support"]]],
                ["Legal", [["Terms", "/terms"], ["Privacy", "/privacy"], ["Copyright", None]]],
                ["Explore", [["AI Generators", "/generators"], ["AI Website Generator", "/generators/ai-website-generator"], ["Free Portfolio Generator", "/generators/free-portfolio-generator"]]],
            ],
            "copyright": "© 2026 Strikingly. All rights reserved.",
        },
    }
}

en = strings["en"]
total_generators = sum(len(section["items"]) for section in en["directory"])
preview_count = 6


def slugify(text: str) -> str:
    return re.sub(r"(^-|-$)", "", re.sub(r"[^a-z0-9]+", "-", text.lower()))


def h(text: str) -> str:
    return escape(text, quote=True)


def icon_svg(name: str, class_name: str = "") -> str:
    extra = f' class="{class_name}"' if class_name else ""
    return f'<svg{extra} viewBox="0 0 64 64" width="64" height="64" aria-hidden="true" focusable="false"><use href="#icon-{h(name)}"></use></svg>'


symbols = """
<svg aria-hidden="true" focusable="false" style="position:absolute;width:0;height:0;overflow:hidden">
  <symbol id="icon-website" viewBox="0 0 64 64" fill="none">
    <rect x="8" y="12" width="48" height="40" rx="8" stroke="#8159BB" stroke-width="2" />
    <path d="M8 22H56" stroke="#8159BB" stroke-width="2" />
    <circle cx="16" cy="17" r="2" fill="#8159BB" />
    <circle cx="22" cy="17" r="2" fill="#CBAFE6" />
    <path d="M18 32H30" stroke="#8159BB" stroke-width="2" stroke-linecap="round" />
    <path d="M18 40H42" stroke="#D1C2E9" stroke-width="2" stroke-linecap="round" />
    <rect x="36" y="30" width="12" height="12" rx="3" fill="#EEE7F8" stroke="#8159BB" stroke-width="2" />
  </symbol>
  <symbol id="icon-landing" viewBox="0 0 64 64" fill="none">
    <rect x="10" y="10" width="44" height="44" rx="10" stroke="#8159BB" stroke-width="2" />
    <path d="M18 22H46" stroke="#8159BB" stroke-width="2" stroke-linecap="round" />
    <path d="M18 30H40" stroke="#D1C2E9" stroke-width="2" stroke-linecap="round" />
    <rect x="18" y="36" width="28" height="10" rx="5" fill="#EEE7F8" stroke="#8159BB" stroke-width="2" />
  </symbol>
  <symbol id="icon-portfolio" viewBox="0 0 64 64" fill="none">
    <rect x="10" y="14" width="44" height="34" rx="8" stroke="#8159BB" stroke-width="2" />
    <path d="M24 14V10C24 8.89543 24.8954 8 26 8H38C39.1046 8 40 8.89543 40 10V14" stroke="#8159BB" stroke-width="2" />
    <rect x="18" y="24" width="12" height="12" rx="3" fill="#EEE7F8" stroke="#8159BB" stroke-width="2" />
    <path d="M36 26H46" stroke="#8159BB" stroke-width="2" stroke-linecap="round" />
    <path d="M36 34H42" stroke="#D1C2E9" stroke-width="2" stroke-linecap="round" />
  </symbol>
  <symbol id="icon-blog" viewBox="0 0 64 64" fill="none">
    <rect x="14" y="8" width="36" height="48" rx="8" stroke="#8159BB" stroke-width="2" />
    <path d="M22 20H42" stroke="#8159BB" stroke-width="2" stroke-linecap="round" />
    <path d="M22 28H42" stroke="#D1C2E9" stroke-width="2" stroke-linecap="round" />
    <path d="M22 36H42" stroke="#D1C2E9" stroke-width="2" stroke-linecap="round" />
    <path d="M22 44H34" stroke="#8159BB" stroke-width="2" stroke-linecap="round" />
  </symbol>
  <symbol id="icon-store" viewBox="0 0 64 64" fill="none">
    <path d="M16 22H48L46 52H18L16 22Z" stroke="#8159BB" stroke-width="2" />
    <path d="M22 22V18C22 12.4772 26.4772 8 32 8C37.5228 8 42 12.4772 42 18V22" stroke="#8159BB" stroke-width="2" />
    <path d="M24 32H40" stroke="#D1C2E9" stroke-width="2" stroke-linecap="round" />
    <rect x="26" y="36" width="12" height="8" rx="4" fill="#EEE7F8" stroke="#8159BB" stroke-width="2" />
  </symbol>
  <symbol id="icon-linkbio" viewBox="0 0 64 64" fill="none">
    <path d="M24 24L18 30C14.6863 33.3137 14.6863 38.6863 18 42C21.3137 45.3137 26.6863 45.3137 30 42L36 36" stroke="#8159BB" stroke-width="2" stroke-linecap="round" />
    <path d="M40 40L46 34C49.3137 30.6863 49.3137 25.3137 46 22C42.6863 18.6863 37.3137 18.6863 34 22L28 28" stroke="#8159BB" stroke-width="2" stroke-linecap="round" />
    <circle cx="32" cy="32" r="18" stroke="#D1C2E9" stroke-width="2" />
  </symbol>
  <symbol id="icon-spark" viewBox="0 0 64 64" fill="none">
    <path d="M32 8L36.5 24.5L53 29L36.5 33.5L32 50L27.5 33.5L11 29L27.5 24.5L32 8Z" stroke="#8159BB" stroke-width="2" />
    <path d="M48 12L49.8 18.2L56 20L49.8 21.8L48 28L46.2 21.8L40 20L46.2 18.2L48 12Z" fill="#EEE7F8" stroke="#8159BB" stroke-width="2" />
  </symbol>
  <symbol id="icon-phone" viewBox="0 0 64 64" fill="none">
    <rect x="22" y="8" width="20" height="48" rx="6" stroke="#8159BB" stroke-width="2" />
    <path d="M28 16H36" stroke="#8159BB" stroke-width="2" stroke-linecap="round" />
    <path d="M27 26H37" stroke="#D1C2E9" stroke-width="2" stroke-linecap="round" />
    <path d="M27 32H37" stroke="#D1C2E9" stroke-width="2" stroke-linecap="round" />
    <circle cx="32" cy="48" r="2" fill="#8159BB" />
  </symbol>
  <symbol id="icon-rocket" viewBox="0 0 64 64" fill="none">
    <path d="M40 12C31 13 23 21 22 30L18 34V42H26L30 38C39 37 47 29 48 20L40 12Z" stroke="#8159BB" stroke-width="2" />
    <circle cx="36" cy="24" r="4" fill="#EEE7F8" stroke="#8159BB" stroke-width="2" />
    <path d="M22 42L16 48" stroke="#8159BB" stroke-width="2" stroke-linecap="round" />
    <path d="M28 48L24 52" stroke="#D1C2E9" stroke-width="2" stroke-linecap="round" />
  </symbol>
</svg>
"""


breadcrumb_json_ld = json.dumps(
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": en["breadcrumb"]["home"],
                "item": "https://www.strikingly.com/",
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": en["breadcrumb"]["current"],
                "item": en["meta"]["canonical"],
            },
        ],
    },
    ensure_ascii=False,
)


def render_featured() -> str:
    cards = []
    for name, description, category in en["featured"]:
        cards.append(
            f"""
            <article class=\"card\">
              <a class=\"card__link\" href=\"/generators/{slugify(name)}\">
                <div class=\"card__body\">
                  <h3 class=\"card__title\">{h(name)}</h3>
                  <p class=\"card__description\">{h(description)}</p>
                  <span class=\"tag\">{h(category.upper())}</span>
                </div>
              </a>
            </article>
            """
        )
    return "".join(cards)


def render_category_cards() -> str:
    cards = []
    for slug, name, description, icon in en["category_cards"]:
        cards.append(
            f"""
            <article class=\"card card--category\">
              <a class=\"card__link card__link--category\" href=\"/generators#{h(slug)}\">
                <div class=\"category-link__icon-wrap\">{icon_svg(icon, 'category-link__icon')}</div>
                <div class=\"category-link__content\">
                  <h3 class=\"category-link__title heading-font\">{h(name)}</h3>
                  <p class=\"category-link__description\">{h(description)}</p>
                </div>
                <span class=\"category-link__arrow\" aria-hidden=\"true\">→</span>
              </a>
            </article>
            """
        )
    return "".join(cards)


def render_directory() -> str:
    sections = []
    for section in en["directory"]:
        cards = []
        for name, description in section["items"]:
            cards.append(
                f"""
                <article class=\"card generator-card\" data-generator-card data-name=\"{h(name.lower())}\" data-description=\"{h(description.lower())}\" data-category=\"{h(section['name'].lower())}\">
                  <a class=\"card__link generator-card__link\" href=\"/generators/{slugify(name)}\">
                    <div class=\"generator-card__thumb\">{icon_svg(section['icon'], 'generator-card__thumb-icon')}</div>
                    <div class=\"card__body\">
                      <h4 class=\"card__title\">{h(name)}</h4>
                      <p class=\"card__description\">{h(description)}</p>
                    </div>
                  </a>
                </article>
                """
            )
        sections.append(
            f"""
            <section class=\"directory-subsection\" id=\"{h(section['slug'])}\" data-directory-section>
              <header class=\"directory-subsection__header\">
                <h3 class=\"directory-subsection__title heading-font\">{h(section['name'])}</h3>
                <p class=\"directory-subsection__description\">{h(section['description'])}</p>
              </header>
              <div class=\"directory-grid-wrap\">
                <div class=\"grid grid--three directory-grid\" id=\"grid-{h(section['slug'])}\" data-collapsible-grid data-preview-count=\"{preview_count}\">
                  {''.join(cards)}
                </div>
              </div>
              <div class=\"directory-toggle-row\">
                <button class=\"button button--ghost directory-toggle\" type=\"button\" hidden data-show-all aria-expanded=\"false\" aria-controls=\"grid-{h(section['slug'])}\">Show all {len(section['items'])} generators</button>
              </div>
            </section>
            """
        )
    return "".join(sections)


def render_steps() -> str:
    items = []
    for number, title, body in en["how_it_works"]:
        items.append(
            f"""
            <article class=\"step-card\">
              <div class=\"step-card__number heading-font\">{h(number)}</div>
              <h3 class=\"step-card__title heading-font\">{h(title)}</h3>
              <p class=\"step-card__body\">{h(body)}</p>
            </article>
            """
        )
    return "".join(items)


def render_why() -> str:
    items = []
    for icon, title, body in en["why"]:
        items.append(
            f"""
            <article class=\"why-card\">
              <div class=\"why-card__icon-wrap\">{icon_svg(icon, 'why-card__icon')}</div>
              <h3 class=\"why-card__title heading-font\">{h(title)}</h3>
              <p class=\"why-card__body\">{h(body)}</p>
            </article>
            """
        )
    return "".join(items)


def render_faq() -> str:
    items = []
    for index, (question, answers) in enumerate(en["faq"]):
        is_open = index == 0
        paragraphs = "".join(f"<p>{h(answer)}</p>" for answer in answers)
        items.append(
            f"""
            <article class=\"faq-item{' is-open' if is_open else ''}\">
              <h3 class=\"faq-item__heading\">
                <button class=\"faq-item__trigger heading-font\" type=\"button\" aria-expanded=\"{'true' if is_open else 'false'}\" aria-controls=\"faq-panel-{index}\" id=\"faq-trigger-{index}\">
                  <span>{h(question)}</span>
                  <span class=\"faq-item__symbol\" aria-hidden=\"true\">+</span>
                </button>
              </h3>
              <div class=\"faq-item__panel\" id=\"faq-panel-{index}\" role=\"region\" aria-labelledby=\"faq-trigger-{index}\"{' hidden' if not is_open else ''}>{paragraphs}</div>
            </article>
            """
        )
    return "".join(items)


def render_footer() -> str:
    columns = []
    for title, links in en["footer"]["columns"]:
        items = []
        for label, href in links:
            if href:
                items.append(f'<li><a href="{h(href)}">{h(label)}</a></li>')
            else:
                items.append(f'<li><span>{h(label)}</span></li>')
        columns.append(
            f"""
            <div class=\"footer__column\">
              <h3 class=\"footer__title heading-font\">{h(title)}</h3>
              <ul class=\"footer__list\">{''.join(items)}</ul>
            </div>
            """
        )
    return "".join(columns)


css = """
:root {
  --brand-purple: #8159BB;
  --ai-gradient-start: #7671FF;
  --ai-gradient-end: #CB0C9F;
  --body-text: #636972;
  --heading-text: #4B5056;
  --hero-text: #2E2E2F;
  --card-border: #C6C9CD;
  --divider: #E2E4E7;
  --light-bg: #F4F6F8;
  --white: #FFFFFF;
  --radius-card: 3px;
  --radius-button: 4px;
  --shadow-card: 0 10px 30px rgba(46, 46, 47, 0.08);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-block-size: 100vh;
  overflow-x: hidden;
  background: var(--white);
  color: var(--body-text);
  font-family: 'Open Sans', Arial, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: inherit;
  text-decoration: none;
}

svg {
  display: block;
  max-inline-size: 100%;
}

button,
input {
  font: inherit;
}

:focus-visible {
  outline: 3px solid var(--brand-purple);
  outline-offset: 3px;
}

.heading-font {
  font-family: 'Josefin Sans', 'Poppins', Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.shell {
  width: min(calc(100% - 40px), 1200px);
  margin-inline: auto;
}

.shell--narrow {
  width: min(calc(100% - 40px), 900px);
}

.topbar {
  background: var(--white);
  border-block-end: 1px solid var(--divider);
}

.topbar__inner {
  display: flex;
  align-items: center;
  min-block-size: 60px;
}

.topbar__logo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--hero-text);
  font-size: 20px;
  line-height: 1;
}

.topbar__logo-ai {
  color: var(--brand-purple);
}

.breadcrumb {
  padding-block: 16px;
}

.breadcrumb__list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.breadcrumb__item {
  color: var(--body-text);
}

.breadcrumb__item--current {
  color: var(--heading-text);
}

.hero {
  position: relative;
  padding-block: 60px;
  background:
    radial-gradient(circle at top right, rgba(203, 12, 159, 0.08), transparent 35%),
    radial-gradient(circle at top left, rgba(118, 113, 255, 0.08), transparent 40%),
    var(--white);
}

.hero__grid {
  display: grid;
  gap: 30px;
  align-items: center;
}

.hero__copy {
  max-inline-size: 560px;
}

.hero__title {
  margin: 0;
  font-size: clamp(30px, 5vw, 48px);
  line-height: 1.2;
}

.hero__line {
  display: block;
}

.hero__line--plain {
  color: var(--hero-text);
}

.hero__line--gradient {
  margin-block-start: 10px;
  background: linear-gradient(90deg, var(--ai-gradient-start), var(--ai-gradient-end));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero__subheadline {
  max-inline-size: 540px;
  margin: 20px 0 0;
  color: var(--body-text);
  font-size: 16px;
}

.hero__actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-block-start: 30px;
}

.hero__visual {
  display: flex;
  justify-content: center;
}

.hero__illustration {
  width: min(100%, 520px);
  height: auto;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-inline-size: fit-content;
  min-block-size: 36px;
  border: 1px solid transparent;
  border-radius: var(--radius-button);
  padding-block: 9px;
  padding-inline: 15px;
  font-family: 'Josefin Sans', 'Poppins', Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1;
  text-transform: uppercase;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.button:hover {
  box-shadow: var(--shadow-card);
}

.button--large {
  min-block-size: 44px;
  padding-inline: 20px;
}

.button--primary {
  background: linear-gradient(90deg, var(--ai-gradient-start), var(--ai-gradient-end));
  color: var(--white);
}

.button--ghost {
  background: transparent;
  border-color: var(--brand-purple);
  color: var(--brand-purple);
}

.section {
  padding-block: 40px;
}

.section--closing {
  padding-block-start: 50px;
  padding-block-end: 60px;
}

.section-heading {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-block-end: 30px;
}

.section-heading--directory {
  gap: 20px;
}

.section-title {
  margin: 0;
  color: var(--heading-text);
  font-size: clamp(26px, 4vw, 32px);
  line-height: 1.2;
}

.section-subtitle {
  margin: 0;
  color: var(--body-text);
}

.section-subtitle--center {
  text-align: center;
}

.grid {
  display: grid;
  gap: 20px;
}

.card {
  background: var(--white);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-card);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.card:hover,
.card:focus-within {
  border-color: var(--brand-purple);
  box-shadow: var(--shadow-card);
}

.card__link {
  display: block;
  block-size: 100%;
  padding: 20px;
}

.card__body {
  display: grid;
  gap: 12px;
}

.card__title {
  margin: 0;
  color: var(--hero-text);
  font-size: 18px;
  line-height: 1.35;
  font-weight: 600;
}

.card__description,
.category-link__description,
.directory-subsection__description,
.step-card__body,
.why-card__body,
.directory-results,
.directory-empty-state__body,
.footer__copyright,
.footer__list {
  margin: 0;
  color: var(--body-text);
}

.tag {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  border: 1px solid var(--brand-purple);
  border-radius: 3px;
  padding-block: 2px;
  padding-inline: 6px;
  color: var(--brand-purple);
  font-family: 'Josefin Sans', 'Poppins', Arial, sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.2;
  text-transform: uppercase;
}

.card__link--category {
  display: flex;
  align-items: center;
  gap: 20px;
}

.category-link__icon-wrap,
.why-card__icon-wrap,
.generator-card__thumb {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  inline-size: 64px;
  block-size: 64px;
  border-radius: 16px;
  background: var(--light-bg);
  flex-shrink: 0;
}

.category-link__content {
  display: grid;
  gap: 10px;
}

.category-link__title,
.directory-subsection__title,
.step-card__title,
.why-card__title,
.footer__title {
  margin: 0;
  color: var(--heading-text);
  font-size: 18px;
  line-height: 1.2;
}

.category-link__arrow {
  margin-inline-start: auto;
  color: var(--brand-purple);
  font-size: 24px;
  line-height: 1;
}

#all-generators {
  scroll-margin-top: 90px;
}

.directory-toolbar {
  display: grid;
  gap: 15px;
}

.search-field {
  position: relative;
  display: block;
  inline-size: min(100%, 480px);
}

.search-field__icon {
  position: absolute;
  inset-inline-start: 14px;
  inset-block-start: 50%;
  transform: translateY(-50%);
  color: var(--brand-purple);
  font-size: 18px;
  pointer-events: none;
}

.search-field input {
  inline-size: 100%;
  min-block-size: 44px;
  border: 1px solid var(--card-border);
  border-radius: var(--radius-button);
  padding-block: 10px;
  padding-inline: 42px 15px;
  color: var(--hero-text);
  background: var(--white);
}

.search-field input::placeholder {
  color: var(--body-text);
}

.directory-toolbar__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}

.directory-clear {
  border: 0;
  padding: 0;
  background: transparent;
  color: var(--brand-purple);
  cursor: pointer;
}

.directory-empty-state {
  margin-block-end: 30px;
  border: 1px solid var(--divider);
  border-radius: var(--radius-card);
  background: var(--light-bg);
  padding: 20px;
}

.directory-empty-state__title {
  margin: 0 0 10px;
  color: var(--heading-text);
  font-size: 18px;
  font-weight: 600;
}

.directory-empty-state__actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-block-start: 20px;
}

.directory-empty-state__link {
  color: var(--brand-purple);
}

.directory-sections {
  display: grid;
  gap: 40px;
}

.directory-subsection {
  scroll-margin-top: 120px;
}

.directory-subsection__header {
  display: grid;
  gap: 10px;
  margin-block-end: 20px;
}

.directory-grid-wrap {
  overflow: visible;
}

.directory-grid.is-collapsible {
  overflow: hidden;
  transition: height 0.24s ease;
}

.directory-toggle-row {
  display: none;
  margin-block-start: 20px;
}

.js .directory-toggle-row {
  display: flex;
}

.generator-card__link {
  display: grid;
  gap: 15px;
}

.generator-card__thumb-icon,
.category-link__icon,
.why-card__icon {
  inline-size: 40px;
  block-size: 40px;
}

.step-card,
.why-card,
.closing-cta {
  display: grid;
  gap: 15px;
}

.step-card__number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  inline-size: 48px;
  block-size: 48px;
  border-radius: 999px;
  background: var(--brand-purple);
  color: var(--white);
  font-size: 20px;
  line-height: 1;
}

.faq-list {
  display: grid;
  gap: 15px;
}

.faq-item {
  border: 1px solid var(--card-border);
  border-radius: var(--radius-card);
  background: var(--white);
  overflow: hidden;
}

.faq-item__heading {
  margin: 0;
}

.faq-item__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  inline-size: 100%;
  border: 0;
  background: transparent;
  padding: 20px;
  color: var(--heading-text);
  text-align: start;
  cursor: pointer;
}

.faq-item__symbol {
  color: var(--brand-purple);
  font-size: 22px;
  line-height: 1;
  transition: transform 0.2s ease;
}

.faq-item.is-open .faq-item__symbol {
  transform: rotate(45deg);
}

.faq-item__panel {
  display: grid;
  gap: 15px;
  padding-inline: 20px;
  padding-block-end: 20px;
}

.faq-item__panel p {
  margin: 0;
}

.closing-cta {
  justify-items: center;
  text-align: center;
}

.footer {
  background: var(--light-bg);
  border-block-start: 1px solid var(--divider);
  padding-block: 40px;
}

.footer__inner {
  display: grid;
  gap: 30px;
}

.footer__grid {
  display: grid;
  gap: 20px;
}

.footer__list {
  display: grid;
  gap: 10px;
  padding: 0;
  list-style: none;
}

.footer__list a {
  color: var(--heading-text);
}

.is-hidden {
  display: none !important;
}

@media (min-width: 720px) {
  .hero__actions,
  .directory-empty-state__actions {
    flex-direction: row;
    align-items: center;
  }

  .grid--three {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .grid--steps,
  .grid--why {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .footer__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 960px) {
  .hero {
    padding-block: 80px;
  }

  .hero__grid {
    grid-template-columns: minmax(0, 1.05fr) minmax(340px, 0.95fr);
    gap: 40px;
  }

  .hero__actions {
    flex-direction: row;
    align-items: center;
  }

  .grid--three,
  .footer__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .section-heading--directory {
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
  }
}

@media (min-width: 1180px) {
  .footer__grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 719px) {
  .card__link--category {
    flex-direction: column;
    align-items: flex-start;
  }

  .category-link__arrow {
    margin-inline-start: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
"""


script = """
(function () {
  document.documentElement.classList.add('js');
  const strings = window.strings && window.strings.en;
  if (!strings) return;

  const searchInput = document.getElementById('generator-search');
  const cards = Array.from(document.querySelectorAll('[data-generator-card]'));
  const sections = Array.from(document.querySelectorAll('[data-directory-section]'));
  const resultsCount = document.querySelector('[data-results-count]');
  const emptyState = document.querySelector('[data-empty-state]');
  const clearButtons = Array.from(document.querySelectorAll('[data-clear-search]'));

  const labelForCount = (count) => {
    const label = count === 1 ? strings.sections.result_singular : strings.sections.result_plural;
    return count + ' ' + label;
  };

  const sectionStates = sections.map((section) => {
    const grid = section.querySelector('[data-collapsible-grid]');
    const button = section.querySelector('[data-show-all]');
    const sectionCards = Array.from(section.querySelectorAll('[data-generator-card]'));
    const previewCount = Number(grid ? grid.dataset.previewCount : 6);
    const state = {
      section,
      grid,
      button,
      cards: sectionCards,
      previewCount,
      expanded: false,
      enabled: Boolean(grid && button && sectionCards.length > previewCount),
      collapsedHeight: 0,
    };

    if (!state.enabled) {
      return state;
    }

    button.hidden = false;

    state.computeCollapsedHeight = function () {
      const lastVisible = state.cards[Math.min(state.previewCount, state.cards.length) - 1];
      return lastVisible ? lastVisible.offsetTop + lastVisible.offsetHeight : 0;
    };

    state.syncLabel = function () {
      button.textContent = state.expanded
        ? strings.sections.show_less
        : 'Show all ' + state.cards.length + ' generators';
      button.setAttribute('aria-expanded', state.expanded ? 'true' : 'false');
    };

    state.apply = function () {
      state.collapsedHeight = state.computeCollapsedHeight();
      grid.classList.add('is-collapsible');
      if (state.expanded) {
        grid.style.height = grid.scrollHeight + 'px';
        window.setTimeout(function () {
          if (state.expanded) {
            grid.style.height = 'auto';
          }
        }, 260);
      } else {
        grid.style.height = state.collapsedHeight + 'px';
      }
      state.syncLabel();
    };

    button.addEventListener('click', function () {
      if (!state.enabled) return;
      if (!state.expanded) {
        grid.style.height = state.collapsedHeight + 'px';
        requestAnimationFrame(function () {
          state.expanded = true;
          grid.style.height = grid.scrollHeight + 'px';
          state.syncLabel();
        });
      } else {
        grid.style.height = grid.scrollHeight + 'px';
        requestAnimationFrame(function () {
          state.expanded = false;
          grid.style.height = state.collapsedHeight + 'px';
          state.syncLabel();
        });
      }
    });

    state.apply();
    return state;
  });

  const applySearch = function () {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    let matches = 0;

    clearButtons.forEach(function (button) {
      button.hidden = query.length === 0;
    });

    cards.forEach(function (card) {
      const haystack = [card.dataset.name, card.dataset.description, card.dataset.category].join(' ');
      const visible = !query || haystack.indexOf(query) !== -1;
      card.classList.toggle('is-hidden', !visible);
      if (visible) {
        matches += 1;
      }
    });

    sections.forEach(function (section) {
      const visibleCards = section.querySelectorAll('[data-generator-card]:not(.is-hidden)');
      section.classList.toggle('is-hidden', visibleCards.length === 0);
    });

    if (resultsCount) {
      resultsCount.textContent = labelForCount(matches);
    }

    if (emptyState) {
      emptyState.hidden = matches !== 0;
    }

    sectionStates.forEach(function (state) {
      if (!state.enabled) return;
      if (query) {
        state.button.hidden = true;
        state.grid.style.height = 'auto';
      } else {
        state.button.hidden = false;
        state.apply();
      }
    });
  };

  if (searchInput) {
    searchInput.addEventListener('input', applySearch);
  }

  clearButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      if (!searchInput) return;
      searchInput.value = '';
      searchInput.focus();
      applySearch();
    });
  });

  let resizeFrame = null;
  window.addEventListener('resize', function () {
    if (resizeFrame) {
      cancelAnimationFrame(resizeFrame);
    }
    resizeFrame = requestAnimationFrame(function () {
      if (searchInput && searchInput.value.trim()) return;
      sectionStates.forEach(function (state) {
        if (state.enabled) {
          state.apply();
        }
      });
    });
  });

  const faqButtons = Array.from(document.querySelectorAll('.faq-item__trigger'));
  faqButtons.forEach(function (button, index) {
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    const open = index === 0;
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (panel) {
      panel.hidden = !open;
    }
    const parent = button.closest('.faq-item');
    if (parent) {
      parent.classList.toggle('is-open', open);
    }
    button.addEventListener('click', function () {
      const nextOpen = button.getAttribute('aria-expanded') !== 'true';
      faqButtons.forEach(function (otherButton) {
        const otherPanel = document.getElementById(otherButton.getAttribute('aria-controls'));
        const shouldOpen = otherButton === button ? nextOpen : false;
        otherButton.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
        if (otherPanel) {
          otherPanel.hidden = !shouldOpen;
        }
        const item = otherButton.closest('.faq-item');
        if (item) {
          item.classList.toggle('is-open', shouldOpen);
        }
      });
    });
  });

  applySearch();
})();
"""


hero_visual = """
<svg class="hero__illustration" width="520" height="400" viewBox="0 0 520 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <defs>
    <linearGradient id="heroStroke" x1="60" y1="20" x2="420" y2="320" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7671FF" stop-opacity="0.8" />
      <stop offset="1" stop-color="#CB0C9F" stop-opacity="0.75" />
    </linearGradient>
  </defs>
  <rect x="56" y="48" width="408" height="284" rx="22" fill="#FFFFFF" stroke="#E2E4E7" stroke-width="2" />
  <rect x="86" y="84" width="160" height="14" rx="7" fill="#EDE8F7" />
  <rect x="86" y="112" width="240" height="12" rx="6" fill="#F1F3F5" />
  <rect x="86" y="136" width="198" height="12" rx="6" fill="#F1F3F5" />
  <rect x="86" y="174" width="152" height="108" rx="18" fill="#F8F7FC" stroke="url(#heroStroke)" stroke-width="2" />
  <rect x="264" y="174" width="170" height="18" rx="9" fill="#EEEAF8" />
  <rect x="264" y="206" width="126" height="12" rx="6" fill="#F1F3F5" />
  <rect x="264" y="230" width="152" height="12" rx="6" fill="#F1F3F5" />
  <rect x="264" y="262" width="120" height="38" rx="8" fill="url(#heroStroke)" />
  <path d="M118 222H214" stroke="url(#heroStroke)" stroke-width="3" stroke-linecap="round" />
  <path d="M118 244H182" stroke="#C7B8E5" stroke-width="3" stroke-linecap="round" />
  <path d="M118 264H194" stroke="#D6DCE2" stroke-width="3" stroke-linecap="round" />
  <rect x="140" y="324" width="240" height="22" rx="11" fill="#FFFFFF" stroke="#E2E4E7" stroke-width="2" />
  <path d="M82 54C82 42.9543 90.9543 34 102 34H418C429.046 34 438 42.9543 438 54V58H82V54Z" fill="#F7F4FB" stroke="#E2E4E7" stroke-width="2" />
  <circle cx="110" cy="46" r="5" fill="#D9CDEC" />
  <circle cx="128" cy="46" r="5" fill="#E5DCF4" />
  <circle cx="146" cy="46" r="5" fill="#F0EAF8" />
</svg>
"""


html = f"""<!doctype html>
<html lang=\"en\">
  <head>
    <meta charset=\"UTF-8\" />
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />
    <title>{h(en['meta']['title'])}</title>
    <meta name=\"description\" content=\"{h(en['meta']['description'])}\" />
    <link rel=\"canonical\" href=\"{h(en['meta']['canonical'])}\" />
    <meta property=\"og:title\" content=\"{h(en['meta']['title'])}\" />
    <meta property=\"og:description\" content=\"{h(en['meta']['og_description'])}\" />
    <meta property=\"og:url\" content=\"{h(en['meta']['og_url'])}\" />
    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />
    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />
    <link href=\"https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Open+Sans:wght@400;600&display=swap\" rel=\"stylesheet\" />
    <style>{css}</style>
    <script type=\"application/ld+json\">{breadcrumb_json_ld}</script>
  </head>
  <body>
    {symbols}
    <header class=\"topbar\">
      <div class=\"shell topbar__inner\">
        <a class=\"topbar__logo heading-font\" href=\"/\" aria-label=\"Strikingly home\">
          <span>{h(en['brand']['logo_word'])}</span>
          <span class=\"topbar__logo-ai\">{h(en['brand']['logo_suffix'])}</span>
        </a>
      </div>
    </header>

    <nav class=\"breadcrumb shell\" aria-label=\"{h(en['breadcrumb']['label'])}\">
      <ol class=\"breadcrumb__list\">
        <li class=\"breadcrumb__item\"><a href=\"/\">{h(en['breadcrumb']['home'])}</a></li>
        <li aria-hidden=\"true\">&gt;</li>
        <li class=\"breadcrumb__item breadcrumb__item--current\" aria-current=\"page\">{h(en['breadcrumb']['current'])}</li>
      </ol>
    </nav>

    <main>
      <section class=\"hero\">
        <div class=\"shell hero__grid\">
          <div class=\"hero__copy\">
            <h1 class=\"hero__title heading-font\">
              <span class=\"hero__line hero__line--plain\">{h(en['hero']['line1'])}</span>
              <span class=\"hero__line hero__line--gradient\">{h(en['hero']['line2'])}</span>
            </h1>
            <p class=\"hero__subheadline\">{h(en['hero']['subheadline'])}</p>
            <div class=\"hero__actions\">
              <a class=\"button button--primary button--large\" href=\"/s/ai_site_builder\">{h(en['hero']['primary_cta'])}</a>
              <a class=\"button button--ghost button--large\" href=\"#all-generators\">{h(en['hero']['secondary_cta'])}</a>
            </div>
          </div>
          <div class=\"hero__visual\" aria-hidden=\"true\">{hero_visual}</div>
        </div>
      </section>

      <section class=\"section\">
        <div class=\"shell\">
          <header class=\"section-heading\">
            <h2 class=\"section-title heading-font\">{h(en['sections']['featured_title'])}</h2>
            <p class=\"section-subtitle\">{h(en['sections']['featured_subtitle'])}</p>
          </header>
          <div class=\"grid grid--three\">{render_featured()}</div>
        </div>
      </section>

      <section class=\"section\">
        <div class=\"shell\">
          <header class=\"section-heading\">
            <h2 class=\"section-title heading-font\">{h(en['sections']['browse_title'])}</h2>
          </header>
          <div class=\"grid grid--three\">{render_category_cards()}</div>
        </div>
      </section>

      <section class=\"section\" id=\"all-generators\">
        <div class=\"shell\">
          <header class=\"section-heading section-heading--directory\">
            <div>
              <h2 class=\"section-title heading-font\">{h(en['sections']['all_title'])}</h2>
              <p class=\"section-subtitle\">{h(en['sections']['all_subtitle'])}</p>
            </div>
            <div class=\"directory-toolbar\">
              <label class=\"search-field\">
                <span class=\"search-field__icon\" aria-hidden=\"true\">⌕</span>
                <input id=\"generator-search\" type=\"search\" aria-label=\"{h(en['sections']['search_label'])}\" placeholder=\"{h(en['sections']['search_placeholder'])}\" autocomplete=\"off\" />
              </label>
              <div class=\"directory-toolbar__meta\">
                <p class=\"directory-results\" data-results-count>{total_generators} {h(en['sections']['result_plural'])}</p>
                <button class=\"directory-clear\" type=\"button\" hidden data-clear-search>{h(en['sections']['clear_search'])}</button>
              </div>
            </div>
          </header>

          <div class=\"directory-empty-state\" data-empty-state hidden>
            <p class=\"directory-empty-state__title\">{h(en['sections']['empty_title'])}</p>
            <p class=\"directory-empty-state__body\">{h(en['sections']['empty_body'])}</p>
            <div class=\"directory-empty-state__actions\">
              <button class=\"button button--ghost\" type=\"button\" data-clear-search>{h(en['sections']['clear_search'])}</button>
              <a class=\"directory-empty-state__link\" href=\"/s/ai_site_builder\">{h(en['sections']['empty_link'])}</a>
            </div>
          </div>

          <div class=\"directory-sections\">{render_directory()}</div>
        </div>
      </section>

      <section class=\"section\">
        <div class=\"shell\">
          <header class=\"section-heading\">
            <h2 class=\"section-title heading-font\">{h(en['sections']['how_title'])}</h2>
          </header>
          <div class=\"grid grid--steps\">{render_steps()}</div>
        </div>
      </section>

      <section class=\"section\">
        <div class=\"shell\">
          <header class=\"section-heading\">
            <h2 class=\"section-title heading-font\">{h(en['sections']['why_title'])}</h2>
          </header>
          <div class=\"grid grid--why\">{render_why()}</div>
        </div>
      </section>

      <section class=\"section\">
        <div class=\"shell shell--narrow\">
          <header class=\"section-heading\">
            <h2 class=\"section-title heading-font\">{h(en['sections']['faq_title'])}</h2>
          </header>
          <div class=\"faq-list\">{render_faq()}</div>
        </div>
      </section>

      <section class=\"section section--closing\">
        <div class=\"shell shell--narrow closing-cta\">
          <h2 class=\"section-title heading-font\">{h(en['sections']['closing_title'])}</h2>
          <p class=\"section-subtitle section-subtitle--center\">{h(en['sections']['closing_subtitle'])}</p>
          <a class=\"button button--primary button--large\" href=\"/s/ai_site_builder\">{h(en['sections']['closing_cta'])}</a>
        </div>
      </section>
    </main>

    <footer class=\"footer\">
      <div class=\"shell footer__inner\">
        <a class=\"topbar__logo heading-font\" href=\"/\" aria-label=\"Strikingly home\">
          <span>{h(en['brand']['logo_word'])}</span>
          <span class=\"topbar__logo-ai\">{h(en['brand']['logo_suffix'])}</span>
        </a>
        <div class=\"footer__grid\">{render_footer()}</div>
        <p class=\"footer__copyright\">{h(en['footer']['copyright'])}</p>
      </div>
    </footer>

    <script>window.strings = {json.dumps(strings, ensure_ascii=False)};</script>
    <script>{script}</script>
  </body>
</html>
"""

Path("/workspace/my-app/index.html").write_text(html, encoding="utf-8")
print("wrote index.html")
