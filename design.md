# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Formed.
- **Tone:** Professional, trustworthy, industrial yet refined

## Color Palette
- **Primary (Deep Navy):** `#0D1B2A` — main backgrounds, navbar, footer
- **Accent (Steel Blue):** `#1E6FA5` — CTAs, highlights, links
- **Accent Light (Sky):** `#4DA6D9` — hover states, secondary accents
- **Gold (Premium):** `#C9A84C` — premium highlights, badges, borders
- **Surface (Off-White):** `#F5F7FA` — page background, card backgrounds
- **Surface Dark:** `#1A2B3C` — dark section backgrounds
- **Text Primary:** `#0D1B2A` — headings on light backgrounds
- **Text Secondary:** `#4A5568` — body text, descriptions
- **Text Light:** `#F5F7FA` — text on dark backgrounds
- **Border:** `#E2E8F0` — subtle dividers

Tailwind config custom colors:
- `navy`: `#0D1B2A`
- `steel`: `#1E6FA5`
- `sky-accent`: `#4DA6D9`
- `gold`: `#C9A84C`
- `surface`: `#F5F7FA`
- `surface-dark`: `#1A2B3C`

## Typography
- **Font Family:** "Inter" (Google Fonts) — clean, modern, industrial
- **Display / Hero:** `text-5xl md:text-7xl font-bold tracking-tight`
- **Section Headings:** `text-3xl md:text-4xl font-bold`
- **Sub-headings:** `text-xl md:text-2xl font-semibold`
- **Body:** `text-base font-normal leading-relaxed`
- **Caption / Label:** `text-sm font-medium tracking-wide uppercase`

## Spacing
- Section padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-6 md:px-12`
- Card padding: `p-8`
- Gap between grid items: `gap-8`

## Components

### Buttons
- **Primary CTA:** `bg-steel text-white px-8 py-3 rounded-sm font-semibold tracking-wide hover:bg-sky-accent transition-colors`
- **Secondary CTA:** `border-2 border-gold text-gold px-8 py-3 rounded-sm font-semibold tracking-wide hover:bg-gold hover:text-navy transition-colors`
- **Ghost:** `text-steel underline-offset-4 hover:underline`

### Cards
- `bg-white rounded-sm shadow-md border border-gray-100 p-8 hover:shadow-xl transition-shadow`
- Product cards: image top, title, short description, CTA link

### Navigation
- Sticky top navbar: `bg-navy text-white`
- Logo: brand name in gold + tagline in small text
- Nav links: `text-gray-300 hover:text-gold transition-colors`
- Mobile: hamburger menu

### Sections
- Alternate between `bg-surface` and `bg-navy` for visual rhythm
- Use thin gold horizontal rules (`border-t border-gold`) as section dividers
- Section labels: small uppercase gold text above main heading

## Do's
- Use generous whitespace to convey premium quality
- Use sharp corners (`rounded-sm`) for an industrial, precise feel
- Use gold accents sparingly for premium emphasis
- Ensure all text has strong contrast against its background
- Use subtle grid/line patterns on dark sections for texture

## Don'ts
- Don't use rounded-full on large elements (too casual)
- Don't use bright/neon colors
- Don't crowd elements — let the design breathe
- Don't use light text on light backgrounds
- Don't use dark text on dark backgrounds
