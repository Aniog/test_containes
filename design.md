# ARTITECT MACHINERY — Design System

## Brand Identity
Industrial precision meets refined elegance. The brand communicates trust, quality, and expertise in sheet metal folding machinery.

## Color Palette
- **Primary (Deep Navy):** `#1a2332` — main backgrounds, headings, navbar
- **Accent (Gold):** `#c9a84c` — CTAs, highlights, decorative elements
- **Accent Hover (Dark Gold):** `#a8893a` — hover states for gold elements
- **Steel Gray:** `#4a5568` — secondary text, borders
- **Light Steel:** `#8a9ab0` — muted text, placeholders
- **Surface Light:** `#f8f7f4` — page background, card backgrounds
- **Surface White:** `#ffffff` — card surfaces, modals
- **Border:** `#e2e0db` — subtle dividers

Tailwind config names: `navy`, `gold`, `gold-dark`, `steel`, `steel-light`, `surface`, `border-subtle`

## Typography
- **Headings:** Playfair Display (serif) — elegant, authoritative
- **Body / UI:** Inter (sans-serif) — clean, readable, user-friendly
- **Heading sizes:** h1 `text-5xl lg:text-7xl`, h2 `text-3xl lg:text-4xl`, h3 `text-xl lg:text-2xl`
- **Body:** `text-base` (16px), line-height `leading-relaxed`
- **Labels/Caps:** `text-xs tracking-widest uppercase font-semibold`

## Spacing
- Section padding: `py-20 lg:py-28`
- Container: `max-w-7xl mx-auto px-6 lg:px-12`
- Card padding: `p-8`
- Gap between grid items: `gap-8`

## Components

### Navbar
- Background: `bg-navy` with subtle bottom border in gold
- Logo: Playfair Display, white, with gold accent on "ARTITECT"
- Links: white, hover gold, `tracking-wide`
- Mobile: hamburger menu, slide-down drawer

### Buttons
- Primary: `bg-gold text-navy font-semibold px-8 py-3 hover:bg-gold-dark transition`
- Secondary/Outline: `border-2 border-gold text-gold px-8 py-3 hover:bg-gold hover:text-navy transition`
- No border-radius on buttons (sharp, industrial feel): `rounded-none`

### Cards
- Background: `bg-white`
- Border: `border border-border-subtle`
- Shadow: `shadow-md hover:shadow-xl transition`
- No border-radius: `rounded-none` (industrial precision)

### Section Headings
- Eyebrow label: gold, uppercase, tracked
- Main heading: Playfair Display, navy
- Underline accent: 3px gold line, 60px wide

## Do's
- Use Playfair Display for all section headings
- Use gold accents sparingly for maximum impact
- Keep layouts clean with generous whitespace
- Use sharp corners (rounded-none) for industrial feel
- Use subtle grid/line patterns for backgrounds

## Don'ts
- Don't use rounded corners on primary UI elements
- Don't use bright/saturated colors other than gold
- Don't crowd elements — whitespace is key to elegance
- Don't use more than 2 font families
