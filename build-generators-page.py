#!/usr/bin/env python3
"""Build the static /generators hub page at /workspace/my-app/index.html.

The page must be fully renderable from server HTML: every card, every link,
every heading must be present in view-source. JavaScript is a progressive
enhancement for the search filter, "Show all" toggles, and FAQ accordions.
"""
from __future__ import annotations
import os, re, json
from html import escape

# ---------------------------------------------------------------------------
# Data
# ---------------------------------------------------------------------------

# Featured grid (mixed categories -> tag IS required per spec)
FEATURED = [
    ("AI Website Generator",         "Describe your business, get a full site",      "Website",      "ai-website-generator"),
    ("Free Portfolio Generator",     "For creatives, in minutes, no fee",            "Portfolio",    "free-portfolio-generator"),
    ("AI Landing Page Maker",        "One-page sites built to convert",              "Landing Page", "ai-landing-page-maker"),
    ("Online Store Builder",         "Start selling without writing code",           "Store",        "online-store-builder"),
    ("Link-in-Bio Generator",        "One link for all your channels",               "Link-in-Bio",  "link-in-bio-generator"),
    ("One-Page Website Builder",     "Simple sites, single scroll",                  "Website",      "one-page-website-builder"),
    ("Wedding Website Generator",    "Share your day with guests",                   "Website",      "wedding-website-generator"),
    ("Restaurant Website Builder",   "Menu, hours, reservations, done",             "Website",      "restaurant-website-builder"),
    ("Blog Generator for Beginners", "Publish-ready in minutes",                     "Blog",         "blog-generator-for-beginners"),
]

# Browse by category jump cards
CATEGORIES = [
    {
        "id": "websites",
        "name": "Websites",
        "desc": "AI-built business and personal sites for any goal.",
        "icon": "website",
    },
    {
        "id": "landing-pages",
        "name": "Landing Pages",
        "desc": "Single-page sites built to convert visitors fast.",
        "icon": "landing",
    },
    {
        "id": "portfolios",
        "name": "Portfolios",
        "desc": "Showcase your work with a clean, focused site.",
        "icon": "portfolio",
    },
    {
        "id": "blogs",
        "name": "Blogs",
        "desc": "Publish-ready blogs with built-in SEO basics.",
        "icon": "blog",
    },
    {
        "id": "stores",
        "name": "Online Stores",
        "desc": "Sell products online with payments built in.",
        "icon": "store",
    },
    {
        "id": "link-in-bio",
        "name": "Link-in-Bio",
        "desc": "One link, all your places. Made for creators.",
        "icon": "link",
    },
]

# All Generators directory (8-12 per category)
GENERATORS = {
    "websites": {
        "name": "Websites",
        "desc": "Full multi-page sites for businesses, creators, and personal brands.",
        "items": [
            ("AI Website Generator",                   "Describe your business, get a full site"),
            ("Free Website Builder",                   "A real site without spending a dime"),
            ("One-Page Website Builder",               "Simple sites, single scroll"),
            ("Wedding Website Generator",              "Share your day with guests"),
            ("Restaurant Website Builder",             "Menu, hours, reservations, done"),
            ("Business Website Builder",               "Look professional from day one"),
            ("Personal Website Builder",               "A site that's unmistakably you"),
            ("No-Code Website Builder",                "Build a site without writing a line"),
            ("AI Website Builder for Photographers",   "A portfolio that shows your eye"),
            ("AI Website Builder for Consultants",     "Services, credentials, and a clear CTA"),
        ],
    },
    "landing-pages": {
        "name": "Landing Pages",
        "desc": "Single-page sites built to convert visitors into leads or customers.",
        "items": [
            ("AI Landing Page Maker",                  "One-page sites built to convert"),
            ("Free Landing Page Generator",            "Capture leads without paying for tools"),
            ("Landing Page Builder for SaaS",          "Sign-ups, demos, and trials in one page"),
            ("Landing Page Builder for Coaches",       "Book calls from a single page"),
            ("Coming Soon Page Generator",             "Build the waitlist before launch day"),
            ("Click-Through Landing Page Builder",    "Tell the story, then send the click"),
            ("Lead Magnet Landing Page Builder",       "Trade a freebie for an email"),
            ("Squeeze Page Generator",                 "One offer, one page, one action"),
            ("Event Landing Page Builder",             "Sell tickets, share details, fill seats"),
        ],
    },
    "portfolios": {
        "name": "Portfolios",
        "desc": "Clean, image-led sites that put your work front and center.",
        "items": [
            ("Free Portfolio Generator",               "For creatives, in minutes, no fee"),
            ("Portfolio Generator for Designers",      "A grid that does the work talk"),
            ("Photography Portfolio Builder",          "Big images, fast loads, clean layouts"),
            ("Writer Portfolio Builder",               "Long-form writing that reads well on any screen"),
            ("UX Portfolio Generator",                 "Case studies that land the interview"),
            ("Artist Portfolio Builder",               "A gallery that shows your range"),
            ("Freelancer Portfolio Builder",           "Past work, current offers, a way to book"),
            ("Modeling Portfolio Builder",             "Polished comp cards and lookbooks online"),
            ("Architecture Portfolio Builder",         "Projects presented with the right weight"),
            ("Music Portfolio Builder",                "Tracks, videos, and tour dates in one place"),
        ],
    },
    "blogs": {
        "name": "Blogs",
        "desc": "Publish-ready blogs with clean typography and built-in SEO basics.",
        "items": [
            ("Blog Generator for Beginners",           "Publish-ready in minutes"),
            ("AI Blog Generator",                      "First draft on the page, you polish the voice"),
            ("Personal Blog Builder",                  "Write on your own domain, on your own terms"),
            ("Free Blog Builder",                      "A real blog without paying for the host"),
            ("Travel Blog Builder",                    "Posts, photos, and maps that load anywhere"),
            ("Food Blog Builder",                      "Recipes, photos, and stories that hold attention"),
            ("Tech Blog Builder",                      "Code samples that render and don't get mangled"),
            ("Newsletter Blog Builder",                "Turn an email into a permanent URL"),
            ("Photo Blog Builder",                     "One image per post, in your grid"),
            ("Tutorial Blog Builder",                  "Step-by-step posts with built-in structure"),
        ],
    },
    "stores": {
        "name": "Online Stores",
        "desc": "Sell products, services, and downloads with payments built in.",
        "items": [
            ("Online Store Builder",                   "Start selling without writing code"),
            ("Free Online Store Builder",              "A storefront, a cart, no monthly fee"),
            ("AI Store Builder",                       "Products and copy, generated from a description"),
            ("Online Store Builder for Restaurants",   "A menu, an order link, a brand"),
            ("Boutique Store Builder",                 "Small catalog, big presence"),
            ("Handmade Store Builder",                 "One-of-one goods, simple checkout"),
            ("Dropshipping Store Builder",             "Inventory handled, you handle the brand"),
            ("Digital Product Store Builder",          "Sell downloads, courses, and templates"),
            ("Print-on-Demand Store Builder",          "Designs on merch, no warehouse"),
            ("Subscription Store Builder",             "Recurring revenue on a simple page"),
        ],
    },
    "link-in-bio": {
        "name": "Link-in-Bio",
        "desc": "One mobile-friendly page that holds every link you want to share.",
        "items": [
            ("Link-in-Bio Generator",                  "One link for all your channels"),
            ("Free Link-in-Bio Builder",               "A clean page for your social bio"),
            ("Link-in-Bio for Creators",               "Your latest, your links, your calendar"),
            ("Link-in-Bio for Musicians",              "Music, videos, shows, in one tab"),
            ("Link-in-Bio for Photographers",          "A current portfolio that lives in your bio"),
            ("Link-in-Bio for Small Businesses",       "Hours, menu, contact, in one tap"),
            ("Link-in-Bio for Coaches",                "A booking link, a reel, an FAQ"),
            ("Link-in-Bio for Podcasters",             "Latest episodes, guests, and subscribe links"),
            ("Link-in-Bio for YouTubers",              "Latest videos, playlists, and a tip jar"),
        ],
    },
}

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def slugify(name: str) -> str:
    s = name.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    s = s.strip("-")
    return s

# Shared category thumbnail (one SVG per category, reused across all cards in
# that subsection so the design language is consistent).
CATEGORY_THUMB = {
    "websites": (
        '<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
        '<rect x="8" y="10" width="104" height="60" rx="4" fill="#FFFFFF" stroke="#8159BB" stroke-width="1.5"/>'
        '<rect x="8" y="10" width="104" height="14" rx="4" fill="#F4F6F8" stroke="#8159BB" stroke-width="1.5"/>'
        '<circle cx="16" cy="17" r="1.6" fill="#8159BB"/><circle cx="22" cy="17" r="1.6" fill="#8159BB"/><circle cx="28" cy="17" r="1.6" fill="#8159BB"/>'
        '<rect x="16" y="32" width="40" height="6" rx="1" fill="#8159BB" opacity="0.5"/>'
        '<rect x="16" y="44" width="60" height="4" rx="1" fill="#C6C9CD"/>'
        '<rect x="16" y="52" width="48" height="4" rx="1" fill="#C6C9CD"/>'
        '<rect x="86" y="32" width="18" height="24" rx="2" fill="#8159BB" opacity="0.18" stroke="#8159BB" stroke-width="1"/>'
        '</svg>'
    ),
    "landing-pages": (
        '<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
        '<rect x="8" y="10" width="104" height="60" rx="4" fill="#FFFFFF" stroke="#8159BB" stroke-width="1.5"/>'
        '<rect x="40" y="18" width="40" height="8" rx="1" fill="#8159BB"/>'
        '<rect x="34" y="32" width="52" height="4" rx="1" fill="#C6C9CD"/>'
        '<rect x="34" y="40" width="40" height="4" rx="1" fill="#C6C9CD"/>'
        '<rect x="44" y="52" width="32" height="12" rx="2" fill="#8159BB"/>'
        '<path d="M52 58 L56 62 L68 50" stroke="#FFFFFF" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
        '</svg>'
    ),
    "portfolios": (
        '<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
        '<rect x="8" y="10" width="104" height="60" rx="4" fill="#FFFFFF" stroke="#8159BB" stroke-width="1.5"/>'
        '<rect x="16" y="18" width="26" height="20" rx="1" fill="#8159BB" opacity="0.25" stroke="#8159BB" stroke-width="1"/>'
        '<rect x="46" y="18" width="26" height="20" rx="1" fill="#8159BB" opacity="0.45" stroke="#8159BB" stroke-width="1"/>'
        '<rect x="76" y="18" width="26" height="20" rx="1" fill="#8159BB" opacity="0.7"  stroke="#8159BB" stroke-width="1"/>'
        '<rect x="16" y="44" width="40" height="4" rx="1" fill="#C6C9CD"/>'
        '<rect x="16" y="52" width="28" height="4" rx="1" fill="#C6C9CD"/>'
        '<rect x="86" y="48" width="20" height="8" rx="1" fill="#8159BB"/>'
        '</svg>'
    ),
    "blogs": (
        '<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
        '<rect x="8" y="10" width="104" height="60" rx="4" fill="#FFFFFF" stroke="#8159BB" stroke-width="1.5"/>'
        '<rect x="16" y="18" width="6" height="44" rx="1" fill="#8159BB"/>'
        '<rect x="28" y="22" width="68" height="4" rx="1" fill="#8159BB" opacity="0.7"/>'
        '<rect x="28" y="32" width="76" height="3" rx="1" fill="#C6C9CD"/>'
        '<rect x="28" y="40" width="76" height="3" rx="1" fill="#C6C9CD"/>'
        '<rect x="28" y="48" width="56" height="3" rx="1" fill="#C6C9CD"/>'
        '<rect x="28" y="56" width="44" height="3" rx="1" fill="#C6C9CD"/>'
        '</svg>'
    ),
    "stores": (
        '<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
        '<rect x="8" y="10" width="104" height="60" rx="4" fill="#FFFFFF" stroke="#8159BB" stroke-width="1.5"/>'
        '<path d="M30 22 L36 14 L84 14 L90 22 Z" fill="#8159BB" opacity="0.25" stroke="#8159BB" stroke-width="1.5"/>'
        '<rect x="36" y="22" width="48" height="40" rx="1" fill="#FFFFFF" stroke="#8159BB" stroke-width="1.5"/>'
        '<path d="M50 34 L50 50 M58 34 L58 50 M66 34 L66 50 M74 34 L74 50" stroke="#8159BB" stroke-width="1"/>'
        '<rect x="44" y="56" width="32" height="6" rx="1" fill="#8159BB"/>'
        '</svg>'
    ),
    "link-in-bio": (
        '<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
        '<rect x="8" y="10" width="104" height="60" rx="4" fill="#FFFFFF" stroke="#8159BB" stroke-width="1.5"/>'
        '<circle cx="60" cy="28" r="8" fill="#8159BB" opacity="0.25" stroke="#8159BB" stroke-width="1.5"/>'
        '<rect x="38" y="44" width="44" height="6" rx="3" fill="#8159BB" opacity="0.45" stroke="#8159BB" stroke-width="1"/>'
        '<rect x="42" y="54" width="36" height="6" rx="3" fill="#8159BB" opacity="0.25" stroke="#8159BB" stroke-width="1"/>'
        '<path d="M88 24 L96 24 M92 20 L96 24 L92 28" stroke="#8159BB" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
        '</svg>'
    ),
}

# Browse-by-category card icons (different from the per-card thumbnail)
CATEGORY_ICON = {
    "website": (
        '<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
        '<rect x="12" y="18" width="56" height="44" rx="3" fill="#FFFFFF" stroke="#8159BB" stroke-width="1.5"/>'
        '<rect x="12" y="18" width="56" height="10" rx="3" fill="#F4F6F8" stroke="#8159BB" stroke-width="1.5"/>'
        '<circle cx="18" cy="23" r="1.4" fill="#8159BB"/><circle cx="23" cy="23" r="1.4" fill="#8159BB"/><circle cx="28" cy="23" r="1.4" fill="#8159BB"/>'
        '<rect x="20" y="36" width="22" height="4" rx="1" fill="#8159BB" opacity="0.6"/>'
        '<rect x="20" y="44" width="34" height="3" rx="1" fill="#C6C9CD"/>'
        '<rect x="20" y="50" width="28" height="3" rx="1" fill="#C6C9CD"/>'
        '</svg>'
    ),
    "landing": (
        '<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
        '<rect x="12" y="18" width="56" height="44" rx="3" fill="#FFFFFF" stroke="#8159BB" stroke-width="1.5"/>'
        '<rect x="28" y="26" width="24" height="6" rx="1" fill="#8159BB"/>'
        '<rect x="22" y="38" width="36" height="3" rx="1" fill="#C6C9CD"/>'
        '<rect x="22" y="44" width="28" height="3" rx="1" fill="#C6C9CD"/>'
        '<rect x="30" y="50" width="20" height="8" rx="2" fill="#8159BB"/>'
        '</svg>'
    ),
    "portfolio": (
        '<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
        '<rect x="12" y="18" width="56" height="44" rx="3" fill="#FFFFFF" stroke="#8159BB" stroke-width="1.5"/>'
        '<rect x="18" y="24" width="14" height="14" rx="1" fill="#8159BB" opacity="0.25" stroke="#8159BB" stroke-width="1"/>'
        '<rect x="34" y="24" width="14" height="14" rx="1" fill="#8159BB" opacity="0.45" stroke="#8159BB" stroke-width="1"/>'
        '<rect x="50" y="24" width="14" height="14" rx="1" fill="#8159BB" opacity="0.7"  stroke="#8159BB" stroke-width="1"/>'
        '<rect x="18" y="44" width="44" height="3" rx="1" fill="#C6C9CD"/>'
        '<rect x="18" y="50" width="30" height="3" rx="1" fill="#C6C9CD"/>'
        '</svg>'
    ),
    "blog": (
        '<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
        '<rect x="12" y="18" width="56" height="44" rx="3" fill="#FFFFFF" stroke="#8159BB" stroke-width="1.5"/>'
        '<rect x="18" y="24" width="4" height="30" rx="1" fill="#8159BB"/>'
        '<rect x="26" y="26" width="36" height="3" rx="1" fill="#8159BB" opacity="0.7"/>'
        '<rect x="26" y="32" width="38" height="2" rx="1" fill="#C6C9CD"/>'
        '<rect x="26" y="38" width="38" height="2" rx="1" fill="#C6C9CD"/>'
        '<rect x="26" y="44" width="32" height="2" rx="1" fill="#C6C9CD"/>'
        '<rect x="26" y="50" width="24" height="2" rx="1" fill="#C6C9CD"/>'
        '</svg>'
    ),
    "store": (
        '<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
        '<path d="M20 26 L24 18 L56 18 L60 26 Z" fill="#8159BB" opacity="0.25" stroke="#8159BB" stroke-width="1.5"/>'
        '<rect x="24" y="26" width="32" height="30" rx="1" fill="#FFFFFF" stroke="#8159BB" stroke-width="1.5"/>'
        '<path d="M32 34 L32 48 M38 34 L38 48 M44 34 L44 48 M50 34 L50 48" stroke="#8159BB" stroke-width="1"/>'
        '<rect x="30" y="50" width="20" height="6" rx="1" fill="#8159BB"/>'
        '</svg>'
    ),
    "link": (
        '<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
        '<circle cx="40" cy="32" r="10" fill="#8159BB" opacity="0.2" stroke="#8159BB" stroke-width="1.5"/>'
        '<rect x="22" y="50" width="36" height="6" rx="3" fill="#8159BB" opacity="0.4" stroke="#8159BB" stroke-width="1"/>'
        '<rect x="26" y="60" width="28" height="6" rx="3" fill="#8159BB" opacity="0.25" stroke="#8159BB" stroke-width="1"/>'
        '</svg>'
    ),
}

# ---------------------------------------------------------------------------
# Render
# ---------------------------------------------------------------------------

def featured_card(name: str, desc: str, tag: str, slug: str) -> str:
    return (
        f'<a class="gen-card gen-card--featured" href="/generators/{slug}" data-name="{escape(name)}" data-desc="{escape(desc)}" data-category="{escape(tag)}" data-section="featured">'
        f'  <div class="gen-card__body">'
        f'    <h3 class="gen-card__title">{escape(name)}</h3>'
        f'    <p class="gen-card__desc">{escape(desc)}</p>'
        f'    <span class="gen-card__tag">{escape(tag)}</span>'
        f'  </div>'
        f'</a>'
    )

def category_card(cat: dict) -> str:
    icon = CATEGORY_ICON[cat["icon"]]
    return (
        f'<a class="cat-card" href="/generators#{cat["id"]}">'
        f'  <div class="cat-card__icon" aria-hidden="true">{icon}</div>'
        f'  <h3 class="cat-card__name">{escape(cat["name"])}</h3>'
        f'  <p class="cat-card__desc">{escape(cat["desc"])}</p>'
        f'  <span class="cat-card__arrow" aria-hidden="true">'
        f'    <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">'
        f'      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
        f'    </svg>'
        f'  </span>'
        f'</a>'
    )

def generator_card(slug_id: str, name: str, desc: str, category_name: str, thumb: str) -> str:
    return (
        f'<a class="gen-card" href="/generators/{slug_id}" data-name="{escape(name)}" data-desc="{escape(desc)}" data-category="{escape(category_name)}" data-section="directory">'
        f'  <div class="gen-card__thumb" aria-hidden="true">{thumb}</div>'
        f'  <div class="gen-card__body">'
        f'    <h4 class="gen-card__title">{escape(name)}</h4>'
        f'    <p class="gen-card__desc">{escape(desc)}</p>'
        f'  </div>'
        f'</a>'
    )

def render_subsections() -> str:
    out = []
    for cid, cat in GENERATORS.items():
        cat_name = cat["name"]
        thumb = CATEGORY_THUMB[cid]
        cards = []
        for i, (name, desc) in enumerate(cat["items"]):
            slug = slugify(name)
            cards.append(generator_card(slug, name, desc, cat_name, thumb))
        # add a CSS class on the card if it's beyond the first 6
        n = len(cat["items"])
        if n > 6:
            cards_html = []
            for i, c in enumerate(cards):
                if i >= 6:
                    cards_html.append(c.replace('class="gen-card"', 'class="gen-card gen-card--overflow"'))
                else:
                    cards_html.append(c)
            cards_str = "".join(cards_html)
        else:
            cards_str = "".join(cards)
        # show-all toggle (only added if more than 6 items, and only revealed by JS)
        toggle_html = ""
        if n > 6:
            toggle_html = (
                f'<button type="button" class="show-all-btn" data-show-all-id="{cid}" '
                f'aria-expanded="false" aria-controls="grid-{cid}">'
                f'<span class="show-all-btn__label-show">Show all {n} generators</span>'
                f'<span class="show-all-btn__label-hide">Show fewer</span>'
                f'</button>'
            )
        out.append(
            f'<section class="subcategory" id="{cid}" aria-labelledby="heading-{cid}">'
            f'  <div class="subcategory__header">'
            f'    <h3 class="subcategory__title" id="heading-{cid}">{escape(cat_name)}</h3>'
            f'    <p class="subcategory__desc">{escape(cat["desc"])}</p>'
            f'  </div>'
            f'  <div class="gen-grid" id="grid-{cid}">{cards_str}</div>'
            f'  <div class="subcategory__footer">{toggle_html}</div>'
            f'</section>'
        )
    return "\n".join(out)

# ---------------------------------------------------------------------------
# i18n strings object (single source of truth; future locales go beside .en)
# ---------------------------------------------------------------------------
STRINGS = {
    "en": {
        # 0. Top bar
        "brand_name": "Strikingly",
        "brand_suffix": "AI",
        # 1. Breadcrumb
        "breadcrumb_home": "Strikingly",
        "breadcrumb_current": "AI Generators",
        # 2. Hero
        "hero_h1_line1": "BUILD ANY KIND OF SITE",
        "hero_h1_line2": "WITH AI, IN AN INSTANT",
        "hero_sub": "Browse the right generator for what you're building, or jump straight into our AI site builder.",
        "hero_cta_primary": "START BUILDING - IT'S FREE",
        "hero_cta_secondary": "BROWSE GENERATORS",
        # 3. Featured
        "featured_heading": "FEATURED GENERATORS",
        "featured_sub": "A few common starting points.",
        # 4. Browse by Category
        "browse_heading": "BROWSE BY CATEGORY",
        # 5. All Generators
        "all_heading": "ALL GENERATORS",
        "all_sub": "Sixty-plus generators, organized by what you're building.",
        "search_label": "Search generators",
        "search_placeholder": "Search generators...",
        "search_count_zero": "0 generators match",
        "search_count_one": "1 generator matches",
        "search_count_many": "{n} generators match",
        "search_empty_title": "No generators match your search.",
        "search_empty_clear": "Clear search",
        "search_empty_link": "Can't find it? Start with our AI builder.",
        # 6. How it works
        "how_heading": "HOW IT WORKS",
        "how_step1_title": "PICK A GENERATOR",
        "how_step1_desc": "Browse by category or search to find one that fits your goal.",
        "how_step2_title": "DESCRIBE YOUR SITE",
        "how_step2_desc": "Tell our AI builder about your business in a sentence or two.",
        "how_step3_title": "GENERATE AND PUBLISH",
        "how_step3_desc": "Get a fully built site in seconds. Customize anything, then go live.",
        # 7. Why strikingly
        "why_heading": "WHY STRIKINGLY",
        "why_1_title": "LIVE IN SECONDS",
        "why_1_desc": "Describe your site, we build it. No setup, no learning curve.",
        "why_2_title": "MOBILE BY DEFAULT",
        "why_2_desc": "Every generator produces responsive sites that work on any device.",
        "why_3_title": "FREE TO START",
        "why_3_desc": "Generate, customize, and publish without a credit card.",
        # 8. FAQ
        "faq_heading": "FREQUENTLY ASKED QUESTIONS",
        "faq_q1": "What is an AI site generator?",
        "faq_a1": "An AI site generator is a tool that turns a short description of your business, project, or goal into a complete, ready-to-publish website. Instead of choosing a template and filling in sections one at a time, you describe what you need and the generator builds the pages, layout, and copy for you.",
        "faq_q2": "How is a generator different from a template?",
        "faq_a2": "A template is a fixed starting point: a layout you adapt by hand. A generator builds the site from your description, so the structure, copy, and sections are tailored to what you told it. You can still swap pieces, change colors, or rewrite any section afterwards.",
        "faq_q3": "Are these generators free to use?",
        "faq_a3": "Yes. You can generate, customize, and publish a site with a Strikingly generator without entering a credit card. Paid plans are available if you want a custom domain, advanced commerce features, or more storage, but the core build and publish flow stays free.",
        "faq_q4": "What kinds of sites can I build?",
        "faq_a4": "You can build the categories listed on this page: full websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Each generator is tuned to a specific goal, so a portfolio generator is set up for image-led layouts and a store generator is set up for products and checkout.",
        "faq_q5": "Can I customize what the generator produces?",
        "faq_a5": "Yes. The generated site is a starting point, not a finished product you can't change. You can edit text, swap images, add or remove sections, change colors and fonts, and rearrange pages. Nothing the generator does is locked in.",
        "faq_q6": "Do generated sites work on mobile?",
        "faq_a6": "Every generator produces a responsive site that adapts to phone, tablet, and desktop screens. The layout, type sizes, and images are tuned to read well on small screens, and the editor previews the mobile view as you work.",
        # 9. Closing CTA
        "cta_heading": "READY TO BUILD?",
        "cta_sub": "Pick a generator above, or jump straight into our AI builder.",
        "cta_button": "START WITH AI BUILDER",
        # 10. Footer
        "footer_about": "About",
        "footer_pricing": "Pricing",
        "footer_templates": "Templates",
        "footer_support": "Support",
        "footer_blog": "Blog",
        "footer_terms": "Terms",
        "footer_privacy": "Privacy",
        "footer_col1_heading": "Product",
        "footer_col2_heading": "Company",
        "footer_col3_heading": "Resources",
        "footer_col4_heading": "Legal",
        "footer_copyright": "© Strikingly. All rights reserved.",
        # Show all
        "show_all_show": "Show all {n} generators",
        "show_all_hide": "Show fewer",
        # Aria
        "skip_to_main": "Skip to main content",
    }
}

# Inline SVG illustrations
HERO_ILLUSTRATION = (
    '<svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg" width="480" height="360" '
    'role="img" aria-label="A simple website mockup built by AI">'
    # background wash
    '<defs>'
    '  <linearGradient id="hero-grad" x1="0%" y1="0%" x2="100%" y2="100%">'
    '    <stop offset="0%" stop-color="#7671FF" stop-opacity="0.18"/>'
    '    <stop offset="100%" stop-color="#CB0C9F" stop-opacity="0.10"/>'
    '  </linearGradient>'
    '</defs>'
    '<rect x="20" y="20" width="440" height="320" rx="14" fill="url(#hero-grad)" stroke="#8159BB" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.6"/>'
    # monitor
    '<rect x="80" y="60" width="320" height="200" rx="8" fill="#FFFFFF" stroke="#8159BB" stroke-width="2"/>'
    '<rect x="80" y="60" width="320" height="28" rx="8" fill="#F4F6F8" stroke="#8159BB" stroke-width="2"/>'
    '<circle cx="96" cy="74" r="3" fill="#8159BB"/><circle cx="106" cy="74" r="3" fill="#8159BB"/><circle cx="116" cy="74" r="3" fill="#8159BB"/>'
    # browser URL bar
    '<rect x="200" y="68" width="180" height="12" rx="6" fill="#FFFFFF" stroke="#C6C9CD" stroke-width="1"/>'
    # content blocks
    '<rect x="100" y="106" width="120" height="12" rx="2" fill="#2E2E2F"/>'
    '<rect x="100" y="124" width="200" height="6" rx="1" fill="#636972"/>'
    '<rect x="100" y="134" width="160" height="6" rx="1" fill="#636972"/>'
    '<rect x="100" y="158" width="80" height="62" rx="4" fill="#8159BB" opacity="0.25" stroke="#8159BB" stroke-width="1"/>'
    '<rect x="190" y="158" width="80" height="62" rx="4" fill="#8159BB" opacity="0.45" stroke="#8159BB" stroke-width="1"/>'
    '<rect x="280" y="158" width="80" height="62" rx="4" fill="#8159BB" opacity="0.7"  stroke="#8159BB" stroke-width="1"/>'
    '<rect x="100" y="232" width="180" height="6" rx="1" fill="#C6C9CD"/>'
    '<rect x="100" y="244" width="120" height="6" rx="1" fill="#C6C9CD"/>'
    # stand
    '<rect x="220" y="260" width="40" height="14" fill="#8159BB" opacity="0.6"/>'
    '<rect x="180" y="274" width="120" height="6" rx="3" fill="#8159BB" opacity="0.6"/>'
    # sparkles
    '<path d="M380 100 L384 90 L388 100 L398 104 L388 108 L384 118 L380 108 L370 104 Z" fill="#CB0C9F" opacity="0.7"/>'
    '<path d="M60 220 L62 214 L64 220 L70 222 L64 224 L62 230 L60 224 L54 222 Z" fill="#7671FF" opacity="0.7"/>'
    '<circle cx="420" cy="260" r="4" fill="#8159BB" opacity="0.6"/>'
    '</svg>'
)

# Why Strikingly line icons
WHY_ICONS = {
    "bolt": (
        '<svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
        '<path d="M27 6 L13 26 L22 26 L19 42 L35 20 L26 20 Z" fill="none" stroke="#8159BB" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>'
        '</svg>'
    ),
    "phone": (
        '<svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
        '<rect x="14" y="6" width="20" height="36" rx="3" fill="none" stroke="#8159BB" stroke-width="2"/>'
        '<line x1="22" y1="36" x2="26" y2="36" stroke="#8159BB" stroke-width="2" stroke-linecap="round"/>'
        '</svg>'
    ),
    "ticket": (
        '<svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
        '<path d="M8 16 a4 4 0 0 1 4 -4 h24 a4 4 0 0 1 4 4 v4 a4 4 0 0 0 0 8 v4 a4 4 0 0 1 -4 4 h-24 a4 4 0 0 1 -4 -4 v-4 a4 4 0 0 0 0 -8 z" fill="none" stroke="#8159BB" stroke-width="2" stroke-linejoin="round"/>'
        '<line x1="24" y1="12" x2="24" y2="36" stroke="#8159BB" stroke-width="2" stroke-dasharray="2 3"/>'
        '</svg>'
    ),
}

# Numbered circle for how-it-works
def how_circle(n: int) -> str:
    return (
        f'<div class="how-step__circle" aria-hidden="true">{n}</div>'
    )

# ---------------------------------------------------------------------------
# CSS
# ---------------------------------------------------------------------------

CSS = r"""
:root {
  --brand-purple: #8159BB;
  --brand-purple-700: #6A47A1;
  --ai-blue: #7671FF;
  --ai-pink: #CB0C9F;
  --ai-gradient: linear-gradient(95deg, var(--ai-blue) 0%, var(--ai-pink) 100%);
  --text-body: #636972;
  --text-heading: #4B5056;
  --text-h1-dark: #2E2E2F;
  --border-card: #C6C9CD;
  --divider: #E2E4E7;
  --bg-light: #F4F6F8;
  --white: #FFFFFF;
  --font-heading: 'Josefin Sans', 'Brandon Grotesque', Poppins, system-ui, sans-serif;
  --font-body: 'Open Sans', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  --content-width: 1200px;
  --radius: 3px;
  --radius-card: 3px;
  --shadow-hover: 0 4px 14px rgba(129, 89, 187, 0.12);
}

* { box-sizing: border-box; }

html, body {
  margin: 0;
  padding: 0;
  background-color: var(--white);
  color: var(--text-body);
  font-family: var(--font-body);
  font-size: 14px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

img, svg { display: block; max-width: 100%; }

a { color: var(--brand-purple); text-decoration: none; }
a:hover { color: var(--brand-purple-700); }

a:focus-visible,
button:focus-visible,
input:focus-visible {
  outline: 2px solid var(--brand-purple);
  outline-offset: 2px;
  border-radius: var(--radius);
}

h1, h2, h3, h4 {
  font-family: var(--font-heading);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-heading);
  margin: 0;
  line-height: 1.2;
  letter-spacing: 0.01em;
}

p { margin: 0; }
ul, ol { margin: 0; padding: 0; list-style: none; }

button {
  font-family: var(--font-heading);
  cursor: pointer;
  border: 0;
  background: transparent;
}

.skip-link {
  position: absolute;
  inset-inline-start: -9999px;
  top: 0;
  background: var(--brand-purple);
  color: #fff;
  padding: 10px 20px;
  z-index: 1000;
}
.skip-link:focus { inset-inline-start: 0; }

.container {
  max-width: var(--content-width);
  margin-inline: auto;
  padding-inline: 20px;
}

/* ------- Top bar ------- */
.topbar {
  background: var(--white);
  border-bottom: 1px solid var(--divider);
  padding: 14px 0;
}
.topbar__inner {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: var(--content-width);
  margin-inline: auto;
  padding-inline: 20px;
}
.topbar__logo {
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 20px;
  text-transform: lowercase;
  color: var(--text-h1-dark);
  letter-spacing: -0.01em;
}
.topbar__logo:hover { color: var(--text-h1-dark); }
.topbar__logo .topbar__logo-suffix {
  background: var(--ai-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-inline-start: 2px;
}

/* ------- Breadcrumb ------- */
.breadcrumb {
  padding: 14px 0 0;
  font-size: 13px;
  color: var(--text-body);
}
.breadcrumb ol {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 8px;
  align-items: center;
}
.breadcrumb li {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.breadcrumb li + li::before {
  content: ">";
  color: var(--brand-purple);
  margin-inline-end: 4px;
  font-weight: 700;
}
.breadcrumb a { color: var(--text-body); }
.breadcrumb a:hover { color: var(--brand-purple); }
.breadcrumb__current { color: var(--text-heading); font-weight: 600; }

/* ------- Hero ------- */
.hero {
  position: relative;
  padding: 60px 0 70px;
  background:
    radial-gradient(circle at 0% 0%, rgba(118, 113, 255, 0.10) 0%, transparent 45%),
    radial-gradient(circle at 100% 100%, rgba(203, 12, 159, 0.08) 0%, transparent 50%),
    var(--white);
  overflow: hidden;
}
.hero__inner {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  align-items: center;
  max-width: var(--content-width);
  margin-inline: auto;
  padding-inline: 20px;
}
.hero__heading {
  font-size: 46px;
  line-height: 1.1;
  margin: 0 0 18px;
}
.hero__heading-line1 {
  color: var(--text-h1-dark);
  display: block;
}
.hero__heading-line2 {
  display: block;
  background: var(--ai-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.hero__sub {
  font-size: 16px;
  color: var(--text-body);
  max-width: 520px;
  margin: 0 0 30px;
}
.hero__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.hero__art {
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero__art svg { max-width: 100%; height: auto; }

/* ------- Buttons ------- */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 30px;
  border-radius: 4px;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
  transition: box-shadow 150ms ease, transform 150ms ease, background 150ms ease, color 150ms ease, border-color 150ms ease;
}
.btn--primary {
  background: var(--ai-gradient);
  color: var(--white);
}
.btn--primary:hover { box-shadow: 0 6px 20px rgba(118, 113, 255, 0.30); color: var(--white); }
.btn--ghost {
  background: transparent;
  color: var(--brand-purple);
  border: 1px solid var(--brand-purple);
}
.btn--ghost:hover { background: rgba(129, 89, 187, 0.08); color: var(--brand-purple-700); }
.btn--sm { height: 36px; padding: 0 15px; font-size: 13px; }

/* ------- Section header ------- */
.section { padding: 50px 0; }
.section--tight { padding: 30px 0; }
.section__header { text-align: center; margin: 0 auto 40px; max-width: 720px; }
.section__heading {
  font-size: 28px;
  color: var(--text-heading);
  margin: 0 0 10px;
}
.section__sub {
  font-size: 15px;
  color: var(--text-body);
  text-transform: none;
  font-family: var(--font-body);
  font-weight: 400;
  margin: 0;
}

/* ------- Featured grid ------- */
.gen-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* ------- Generic card ------- */
.gen-card {
  display: flex;
  flex-direction: column;
  background: var(--white);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-card);
  padding: 20px;
  color: var(--text-heading);
  transition: box-shadow 150ms ease, border-color 150ms ease;
  height: 100%;
}
.gen-card:hover { border-color: var(--brand-purple); box-shadow: var(--shadow-hover); color: var(--text-heading); }
.gen-card__title {
  font-size: 16px;
  margin: 0 0 6px;
  color: var(--text-h1-dark);
  text-transform: none;
  font-family: var(--font-heading);
  font-weight: 700;
  line-height: 1.25;
}
.gen-card__desc {
  font-size: 14px;
  color: var(--text-body);
  margin: 0 0 10px;
  flex: 1;
}
.gen-card__tag {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  font-family: var(--font-heading);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--brand-purple);
  background: transparent;
  border: 1px solid var(--brand-purple);
  border-radius: 3px;
  padding: 2px 6px;
  font-weight: 700;
}
.gen-card__body { display: flex; flex-direction: column; flex: 1; }
.gen-card__thumb {
  background: var(--bg-light);
  border: 1px solid var(--divider);
  border-radius: 3px;
  margin: -20px -20px 14px;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 96px;
  overflow: hidden;
}
.gen-card__thumb svg { max-width: 100%; max-height: 100%; height: auto; width: auto; }

/* ------- Browse-by-category cards ------- */
.cat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.cat-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--white);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-card);
  padding: 20px;
  color: var(--text-heading);
  transition: box-shadow 150ms ease, border-color 150ms ease;
}
.cat-card:hover { border-color: var(--brand-purple); box-shadow: var(--shadow-hover); color: var(--text-heading); }
.cat-card__icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 14px;
}
.cat-card__name {
  font-size: 18px;
  color: var(--text-heading);
  text-transform: uppercase;
  margin: 0 0 6px;
  font-family: var(--font-heading);
  font-weight: 700;
}
.cat-card__desc {
  color: var(--text-body);
  font-size: 14px;
  margin: 0 0 14px;
}
.cat-card__arrow {
  position: absolute;
  inset-inline-end: 16px;
  top: 16px;
  color: var(--brand-purple);
  display: inline-flex;
}

/* ------- All Generators ------- */
.all-generators__search {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  margin: 0 0 30px;
  max-width: 720px;
  margin-inline: auto;
}
.search-input-wrap {
  position: relative;
  flex: 1;
  min-width: 280px;
  max-width: 480px;
  margin-inline: auto;
}
.search-input-wrap__icon {
  position: absolute;
  inset-inline-start: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-body);
  pointer-events: none;
}
.search-input {
  width: 100%;
  height: 44px;
  border: 1px solid var(--border-card);
  border-radius: 4px;
  padding: 0 14px 0 42px;
  font-family: var(--font-body);
  font-size: 14px;
  background: var(--white);
  color: var(--text-h1-dark);
}
.search-input:focus {
  outline: 2px solid var(--brand-purple);
  outline-offset: 1px;
  border-color: var(--brand-purple);
}
.search-count {
  font-size: 13px;
  color: var(--text-body);
  margin-inline-start: 8px;
  white-space: nowrap;
}
.search-count[hidden] { display: none; }

.search-empty {
  display: none;
  text-align: center;
  padding: 30px 20px;
  border: 1px dashed var(--border-card);
  border-radius: 4px;
  margin: 0 0 30px;
  color: var(--text-body);
}
.search-empty__title { font-weight: 600; color: var(--text-h1-dark); margin: 0 0 10px; }
.search-empty__actions { display: inline-flex; flex-wrap: wrap; gap: 10px; align-items: center; justify-content: center; }

/* ------- Subcategory ------- */
.subcategory {
  padding: 30px 0;
  border-top: 1px solid var(--divider);
  scroll-margin-top: 80px;
}
.subcategory:first-of-type { border-top: 0; }
.subcategory__header { margin: 0 0 18px; }
.subcategory__title {
  font-size: 20px;
  color: var(--text-heading);
  margin: 0 0 6px;
}
.subcategory__desc {
  font-size: 14px;
  color: var(--text-body);
  text-transform: none;
  font-family: var(--font-body);
  font-weight: 400;
  margin: 0;
}
.subcategory__footer { margin-top: 20px; text-align: center; }

/* ------- Show all (progressive enhancement) -------
   Cards beyond the first 6 are always in the DOM. When JS is enabled and
   the toggle is collapsed, we collapse them via a CSS class. The transition
   animates max-height so layout shift stays low. Cards that are search-
   filtered out get `is-search-hidden` which uses display:none. */
.gen-card--overflow { max-height: 600px; overflow: hidden; transition: max-height 300ms ease, opacity 250ms ease, margin 250ms ease, padding 250ms ease, border-width 250ms ease; }
.is-overflow-collapsed .gen-card--overflow { max-height: 0; opacity: 0; margin: 0; padding-top: 0; padding-bottom: 0; border-width: 0; pointer-events: none; }
.is-search-hidden { display: none !important; }
.is-subcategory-hidden { display: none !important; }

.show-all-btn {
  display: none; /* revealed by JS only */
  align-items: center;
  gap: 8px;
  font-family: var(--font-heading);
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--brand-purple);
  background: transparent;
  border: 1px solid var(--brand-purple);
  border-radius: 4px;
  padding: 0 18px;
  height: 36px;
  margin-inline: auto;
}
.show-all-btn__label-hide { display: none; }
.show-all-btn[aria-expanded="true"] .show-all-btn__label-show { display: none; }
.show-all-btn[aria-expanded="true"] .show-all-btn__label-hide { display: inline; }
.js-enhanced .show-all-btn { display: inline-flex; }
.js-enhanced .is-overflow-collapsed .gen-card--overflow { max-height: 0; }

/* ------- How it works ------- */
.how-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  text-align: center;
}
.how-step__circle {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--brand-purple);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 22px;
  margin: 0 auto 14px;
}
.how-step__title { font-size: 15px; color: var(--text-heading); margin: 0 0 8px; }
.how-step__desc { color: var(--text-body); font-size: 14px; margin: 0; }

/* ------- Why strikingly ------- */
.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.why-cell {
  background: var(--white);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-card);
  padding: 24px 20px;
  text-align: center;
}
.why-cell__icon { display: flex; justify-content: center; margin: 0 0 10px; }
.why-cell__title { font-size: 15px; color: var(--text-heading); margin: 0 0 6px; }
.why-cell__desc { color: var(--text-body); font-size: 14px; margin: 0; }

/* ------- FAQ ------- */
.faq-list { max-width: 820px; margin-inline: auto; }
.faq-item {
  border-bottom: 1px solid var(--divider);
  padding: 0;
}
.faq-item:first-child { border-top: 1px solid var(--divider); }
.faq-item__btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 0;
  text-align: start;
  font-family: var(--font-heading);
  font-size: 15px;
  color: var(--text-heading);
  text-transform: none;
  background: transparent;
  border: 0;
  cursor: pointer;
}
.faq-item__btn:hover { color: var(--brand-purple); }
.faq-item__icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--brand-purple);
  transition: transform 200ms ease;
}
.faq-item__btn[aria-expanded="true"] .faq-item__icon { transform: rotate(45deg); }
.faq-item__panel {
  max-height: 0;
  overflow: hidden;
  transition: max-height 280ms ease;
}
.faq-item__panel-inner {
  padding: 0 0 20px;
  color: var(--text-body);
  font-size: 14px;
  max-width: 720px;
}
.faq-item__panel-inner p + p { margin-top: 10px; }
.faq-item__btn[aria-expanded="true"] + .faq-item__panel { max-height: 600px; }

/* ------- Closing CTA ------- */
.closing-cta { padding: 70px 0; text-align: center; background: var(--white); }
.closing-cta__heading {
  font-size: 32px;
  color: var(--text-heading);
  margin: 0 0 10px;
}
.closing-cta__sub {
  font-size: 16px;
  color: var(--text-body);
  text-transform: none;
  font-family: var(--font-body);
  font-weight: 400;
  margin: 0 0 26px;
  max-width: 560px;
  margin-inline: auto;
  margin-block-end: 26px;
}

/* ------- Footer ------- */
.footer {
  background: var(--bg-light);
  padding: 50px 0 30px;
  border-top: 1px solid var(--divider);
}
.footer__grid {
  display: grid;
  grid-template-columns: 1.2fr repeat(4, 1fr);
  gap: 30px;
}
.footer__brand-block { color: var(--text-body); }
.footer__brand {
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 20px;
  text-transform: lowercase;
  color: var(--text-h1-dark);
  margin-block-end: 8px;
}
.footer__brand .footer__brand-suffix {
  background: var(--ai-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.footer__col-heading {
  font-size: 13px;
  text-transform: uppercase;
  color: var(--text-heading);
  margin: 0 0 10px;
  font-family: var(--font-heading);
}
.footer__col-list li { margin-block-end: 6px; }
.footer__col-list a { color: var(--text-body); }
.footer__col-list a:hover { color: var(--brand-purple); }
.footer__copyright {
  border-top: 1px solid var(--divider);
  margin-block-start: 30px;
  padding-block-start: 16px;
  text-align: center;
  color: var(--text-body);
  font-size: 13px;
}

/* ------- Responsive ------- */
@media (max-width: 960px) {
  .hero { padding: 50px 0 50px; }
  .hero__inner { grid-template-columns: 1fr; gap: 30px; }
  .hero__heading { font-size: 36px; }
  .hero__art { order: 2; }
  .gen-grid, .cat-grid, .how-grid, .why-grid { grid-template-columns: repeat(2, 1fr); }
  .footer__grid { grid-template-columns: repeat(2, 1fr); }
  .section { padding: 40px 0; }
  .section__heading { font-size: 24px; }
}
@media (max-width: 600px) {
  .container, .topbar__inner { padding-inline: 16px; }
  .hero { padding: 40px 0 40px; }
  .hero__heading { font-size: 30px; }
  .hero__sub { font-size: 15px; }
  .gen-grid, .cat-grid, .how-grid, .why-grid { grid-template-columns: 1fr; }
  .hero__ctas { flex-direction: column; align-items: stretch; }
  .btn { width: 100%; }
  .show-all-btn { width: 100%; justify-content: center; }
  .all-generators__search { flex-direction: column; align-items: stretch; }
  .search-count { text-align: center; }
  .closing-cta { padding: 50px 0; }
  .closing-cta__heading { font-size: 26px; }
  .section__heading { font-size: 22px; }
  .section__header { margin-block-end: 30px; }
  .footer__grid { grid-template-columns: 1fr 1fr; }
}
"""

# ---------------------------------------------------------------------------
# Build the page
# ---------------------------------------------------------------------------

def build():
    s = STRINGS["en"]
    featured_html = "\n".join(featured_card(n, d, t, slugify(n)) for n, d, t, slug in [(f[0], f[1], f[2], f[3]) for f in FEATURED])
    categories_html = "\n".join(category_card(c) for c in CATEGORIES)
    sub_html = render_subsections()
    body_str = s

    # JSON-LD BreadcrumbList (only schema on the page, per spec)
    breadcrumb_ld = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Strikingly",
                "item": "https://www.strikingly.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "AI Generators",
                "item": "https://www.strikingly.com/generators"
            }
        ]
    }
    breadcrumb_json = json.dumps(breadcrumb_ld, indent=2)

    # Featured (need slug to construct link)
    featured_html = "\n".join(featured_card(f[0], f[1], f[2], f[3]) for f in FEATURED)

    # Helper to get category names for tags
    cat_names = {c["id"]: c["name"] for c in CATEGORIES}

    # Stringify strings for inline script (so the inline script can pick them up)
    strings_json = json.dumps(STRINGS, ensure_ascii=False)

    # Build the page
    page = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>AI Website Generators - Build Any Site in Seconds | Strikingly</title>
<meta name="description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required." />
<link rel="canonical" href="https://www.strikingly.com/generators" />
<meta property="og:title" content="AI Website Generators - Build Any Site in Seconds | Strikingly" />
<meta property="og:description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds." />
<meta property="og:url" content="https://www.strikingly.com/generators" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
<script type="application/ld+json">
{breadcrumb_json}
</script>
<style>
{CSS}
</style>
</head>
<body>
<a class="skip-link" href="#main">{s["skip_to_main"]}</a>

<header class="topbar" role="banner">
  <div class="topbar__inner">
    <a class="topbar__logo" href="/" aria-label="{s["brand_name"]} home">
      {s["brand_name"]}<span class="topbar__logo-suffix">{s["brand_suffix"]}</span>
    </a>
  </div>
</header>

<nav class="breadcrumb container" aria-label="Breadcrumb">
  <ol>
    <li><a href="/">{s["breadcrumb_home"]}</a></li>
    <li><span class="breadcrumb__current" aria-current="page">{s["breadcrumb_current"]}</span></li>
  </ol>
</nav>

<main id="main">

  <section class="hero" aria-labelledby="hero-heading">
    <div class="hero__inner">
      <div class="hero__copy">
        <h1 id="hero-heading" class="hero__heading">
          <span class="hero__heading-line1">{s["hero_h1_line1"]}</span>
          <span class="hero__heading-line2">{s["hero_h1_line2"]}</span>
        </h1>
        <p class="hero__sub">{s["hero_sub"]}</p>
        <div class="hero__ctas">
          <a class="btn btn--primary" href="/s/ai_site_builder">{s["hero_cta_primary"]}</a>
          <a class="btn btn--ghost" href="#all-generators">{s["hero_cta_secondary"]}</a>
        </div>
      </div>
      <div class="hero__art" aria-hidden="true">
        {HERO_ILLUSTRATION}
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="featured-heading">
    <div class="container">
      <header class="section__header">
        <h2 class="section__heading" id="featured-heading">{s["featured_heading"]}</h2>
        <p class="section__sub">{s["featured_sub"]}</p>
      </header>
      <div class="gen-grid" id="featured-grid">
{featured_html}
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="browse-heading">
    <div class="container">
      <header class="section__header">
        <h2 class="section__heading" id="browse-heading">{s["browse_heading"]}</h2>
      </header>
      <div class="cat-grid">
{categories_html}
      </div>
    </div>
  </section>

  <section class="section" id="all-generators" aria-labelledby="all-heading">
    <div class="container">
      <header class="section__header">
        <h2 class="section__heading" id="all-heading">{s["all_heading"]}</h2>
        <p class="section__sub">{s["all_sub"]}</p>
      </header>

      <div class="all-generators__search">
        <div class="search-input-wrap">
          <span class="search-input-wrap__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/>
              <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </span>
          <input type="search" id="generator-search" class="search-input"
            placeholder="{s["search_placeholder"]}"
            aria-label="{s["search_label"]}"
            autocomplete="off" />
        </div>
        <div class="search-count" id="search-count" aria-live="polite" hidden></div>
      </div>

      <div class="search-empty" id="search-empty" role="status">
        <p class="search-empty__title">{s["search_empty_title"]}</p>
        <div class="search-empty__actions">
          <button type="button" class="btn btn--ghost btn--sm" id="search-clear-btn">{s["search_empty_clear"]}</button>
          <a class="btn btn--primary btn--sm" href="/s/ai_site_builder">{s["search_empty_link"]}</a>
        </div>
      </div>

      <div class="subcategories" id="subcategories">
{sub_html}
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="how-heading">
    <div class="container">
      <header class="section__header">
        <h2 class="section__heading" id="how-heading">{s["how_heading"]}</h2>
      </header>
      <ol class="how-grid" role="list">
        <li class="how-step">
          {how_circle(1)}
          <h3 class="how-step__title">{s["how_step1_title"]}</h3>
          <p class="how-step__desc">{s["how_step1_desc"]}</p>
        </li>
        <li class="how-step">
          {how_circle(2)}
          <h3 class="how-step__title">{s["how_step2_title"]}</h3>
          <p class="how-step__desc">{s["how_step2_desc"]}</p>
        </li>
        <li class="how-step">
          {how_circle(3)}
          <h3 class="how-step__title">{s["how_step3_title"]}</h3>
          <p class="how-step__desc">{s["how_step3_desc"]}</p>
        </li>
      </ol>
    </div>
  </section>

  <section class="section" aria-labelledby="why-heading">
    <div class="container">
      <header class="section__header">
        <h2 class="section__heading" id="why-heading">{s["why_heading"]}</h2>
      </header>
      <div class="why-grid">
        <article class="why-cell">
          <div class="why-cell__icon">{WHY_ICONS["bolt"]}</div>
          <h3 class="why-cell__title">{s["why_1_title"]}</h3>
          <p class="why-cell__desc">{s["why_1_desc"]}</p>
        </article>
        <article class="why-cell">
          <div class="why-cell__icon">{WHY_ICONS["phone"]}</div>
          <h3 class="why-cell__title">{s["why_2_title"]}</h3>
          <p class="why-cell__desc">{s["why_2_desc"]}</p>
        </article>
        <article class="why-cell">
          <div class="why-cell__icon">{WHY_ICONS["ticket"]}</div>
          <h3 class="why-cell__title">{s["why_3_title"]}</h3>
          <p class="why-cell__desc">{s["why_3_desc"]}</p>
        </article>
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="faq-heading">
    <div class="container">
      <header class="section__header">
        <h2 class="section__heading" id="faq-heading">{s["faq_heading"]}</h2>
      </header>
      <div class="faq-list" id="faq-list">
        <div class="faq-item">
          <button type="button" class="faq-item__btn" aria-expanded="true" aria-controls="faq-1-panel" id="faq-1-btn">
            <span>{s["faq_q1"]}</span>
            <span class="faq-item__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </span>
          </button>
          <div class="faq-item__panel" id="faq-1-panel" role="region" aria-labelledby="faq-1-btn">
            <div class="faq-item__panel-inner"><p>{s["faq_a1"]}</p></div>
          </div>
        </div>
        <div class="faq-item">
          <button type="button" class="faq-item__btn" aria-expanded="false" aria-controls="faq-2-panel" id="faq-2-btn">
            <span>{s["faq_q2"]}</span>
            <span class="faq-item__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </span>
          </button>
          <div class="faq-item__panel" id="faq-2-panel" role="region" aria-labelledby="faq-2-btn">
            <div class="faq-item__panel-inner"><p>{s["faq_a2"]}</p></div>
          </div>
        </div>
        <div class="faq-item">
          <button type="button" class="faq-item__btn" aria-expanded="false" aria-controls="faq-3-panel" id="faq-3-btn">
            <span>{s["faq_q3"]}</span>
            <span class="faq-item__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </span>
          </button>
          <div class="faq-item__panel" id="faq-3-panel" role="region" aria-labelledby="faq-3-btn">
            <div class="faq-item__panel-inner"><p>{s["faq_a3"]}</p></div>
          </div>
        </div>
        <div class="faq-item">
          <button type="button" class="faq-item__btn" aria-expanded="false" aria-controls="faq-4-panel" id="faq-4-btn">
            <span>{s["faq_q4"]}</span>
            <span class="faq-item__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </span>
          </button>
          <div class="faq-item__panel" id="faq-4-panel" role="region" aria-labelledby="faq-4-btn">
            <div class="faq-item__panel-inner"><p>{s["faq_a4"]}</p></div>
          </div>
        </div>
        <div class="faq-item">
          <button type="button" class="faq-item__btn" aria-expanded="false" aria-controls="faq-5-panel" id="faq-5-btn">
            <span>{s["faq_q5"]}</span>
            <span class="faq-item__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </span>
          </button>
          <div class="faq-item__panel" id="faq-5-panel" role="region" aria-labelledby="faq-5-btn">
            <div class="faq-item__panel-inner"><p>{s["faq_a5"]}</p></div>
          </div>
        </div>
        <div class="faq-item">
          <button type="button" class="faq-item__btn" aria-expanded="false" aria-controls="faq-6-panel" id="faq-6-btn">
            <span>{s["faq_q6"]}</span>
            <span class="faq-item__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </span>
          </button>
          <div class="faq-item__panel" id="faq-6-panel" role="region" aria-labelledby="faq-6-btn">
            <div class="faq-item__panel-inner"><p>{s["faq_a6"]}</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="closing-cta" aria-labelledby="closing-cta-heading">
    <div class="container">
      <h2 class="closing-cta__heading" id="closing-cta-heading">{s["cta_heading"]}</h2>
      <p class="closing-cta__sub">{s["cta_sub"]}</p>
      <a class="btn btn--primary" href="/s/ai_site_builder">{s["cta_button"]}</a>
    </div>
  </section>

</main>

<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand-block">
        <div class="footer__brand">{s["brand_name"]}<span class="footer__brand-suffix">{s["brand_suffix"]}</span></div>
        <p>{s["hero_sub"]}</p>
      </div>
      <div>
        <h3 class="footer__col-heading">{s["footer_col1_heading"]}</h3>
        <ul class="footer__col-list">
          <li><a href="/s/ai_site_builder">Start Building</a></li>
          <li><a href="/templates">{s["footer_templates"]}</a></li>
          <li><a href="/pricing">{s["footer_pricing"]}</a></li>
        </ul>
      </div>
      <div>
        <h3 class="footer__col-heading">{s["footer_col2_heading"]}</h3>
        <ul class="footer__col-list">
          <li><a href="/about">{s["footer_about"]}</a></li>
          <li><a href="/blog">{s["footer_blog"]}</a></li>
        </ul>
      </div>
      <div>
        <h3 class="footer__col-heading">{s["footer_col3_heading"]}</h3>
        <ul class="footer__col-list">
          <li><a href="/support">{s["footer_support"]}</a></li>
          <li><a href="/blog">{s["footer_blog"]}</a></li>
        </ul>
      </div>
      <div>
        <h3 class="footer__col-heading">{s["footer_col4_heading"]}</h3>
        <ul class="footer__col-list">
          <li><a href="/terms">{s["footer_terms"]}</a></li>
          <li><a href="/privacy">{s["footer_privacy"]}</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__copyright">{s["footer_copyright"]}</div>
  </div>
</footer>

<script>
window.__STRINGS__ = {strings_json};
(function () {{
  "use strict";
  var strings = (window.__STRINGS__ && window.__STRINGS__.en) || {{}};
  var $ = function (sel, root) {{ return (root || document).querySelector(sel); }};
  var $$ = function (sel, root) {{ return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }};
  document.documentElement.classList.add("js-enhanced");

  // ---------------------------------------------------------------------
  // FAQ accordion
  // ---------------------------------------------------------------------
  $$(".faq-item__btn").forEach(function (btn) {{
    btn.addEventListener("click", function () {{
      var expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", expanded ? "false" : "true");
    }});
  }});

  // ---------------------------------------------------------------------
  // Show all / show fewer (progressive enhancement)
  // ---------------------------------------------------------------------
  $$(".show-all-btn").forEach(function (btn) {{
    var id = btn.getAttribute("data-show-all-id");
    var sub = document.getElementById(id);
    if (!sub) return;
    sub.classList.add("is-overflow-collapsed");
    btn.addEventListener("click", function () {{
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", open ? "false" : "true");
      sub.classList.toggle("is-overflow-collapsed", open);
    }});
  }});

  // ---------------------------------------------------------------------
  // Search filter
  // ---------------------------------------------------------------------
  var search = $("#generator-search");
  var count = $("#search-count");
  var empty = $("#search-empty");
  var clearBtn = $("#search-clear-btn");
  var cards = $$('[data-section="directory"]');
  var subs = $$(".subcategory");
  var subsById = {{}};
  subs.forEach(function (sub) {{ subsById[sub.id] = sub; }});

  function applyFilter(q) {{
    q = (q || "").trim().toLowerCase();
    var visibleTotal = 0;
    if (!q) {{
      cards.forEach(function (c) {{ c.classList.remove("is-search-hidden"); }});
      subs.forEach(function (sub) {{ sub.classList.remove("is-subcategory-hidden"); }});
      count.hidden = true;
      empty.style.display = "none";
      return;
    }}
    cards.forEach(function (c) {{
      var name = (c.getAttribute("data-name") || "").toLowerCase();
      var desc = (c.getAttribute("data-desc") || "").toLowerCase();
      var cat = (c.getAttribute("data-category") || "").toLowerCase();
      var match = name.indexOf(q) !== -1 || desc.indexOf(q) !== -1 || cat.indexOf(q) !== -1;
      c.classList.toggle("is-search-hidden", !match);
      if (match) visibleTotal++;
    }});
    // Hide subcategories with zero matches
    subs.forEach(function (sub) {{
      var anyVisible = sub.querySelector('[data-section="directory"]:not(.is-search-hidden)');
      sub.classList.toggle("is-subcategory-hidden", !anyVisible);
    }});
    // Count
    if (visibleTotal === 0) {{
      count.hidden = true;
      empty.style.display = "block";
    }} else {{
      count.hidden = false;
      var template;
      if (visibleTotal === 1) template = strings.search_count_one || "1 generator matches";
      else template = (strings.search_count_many || "{{n}} generators match").replace("{{n}}", visibleTotal);
      count.textContent = template;
      empty.style.display = "none";
    }}
  }}

  if (search) {{
    search.addEventListener("input", function (e) {{ applyFilter(e.target.value); }});
  }}
  if (clearBtn) {{
    clearBtn.addEventListener("click", function () {{
      search.value = "";
      applyFilter("");
      search.focus();
    }});
  }}

  // ---------------------------------------------------------------------
  // Smooth-scroll for in-page hash links, but only on user click.
  // Browsers handle this natively, but we make it tolerant of
  // subcategory[id] not being unique.
  // ---------------------------------------------------------------------
  $$('a[href^="#"]').forEach(function (a) {{
    a.addEventListener("click", function (e) {{
      var href = a.getAttribute("href");
      if (!href || href === "#" || href.length < 2) return;
      var target = document.getElementById(href.slice(1));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({{ behavior: "smooth", block: "start" }});
      if (history.replaceState) history.replaceState(null, "", href);
    }});
  }});
}})();
</script>
</body>
</html>
"""
    return page

if __name__ == "__main__":
    out = os.path.join(os.path.dirname(os.path.abspath(__file__)), "index.html")
    with open(out, "w", encoding="utf-8") as f:
        f.write(build())
    print("wrote", out)
