# ARTITECT MACHINERY — Design System

## Brand
- Name: ARTITECT MACHINERY
- Industry: Industrial sheet metal folding machines
- Tone: Elegant, precise, trustworthy, engineering excellence

## Colors
- Primary: `#1a1a2e` — Deep navy / almost black (headings, nav, footer)
- Secondary: `#c9a227` — Gold / brass accent (CTAs, highlights, borders)
- Background: `#f5f5f0` — Warm off-white (page background)
- Surface: `#ffffff` — Pure white (cards, sections)
- Text Primary: `#1a1a2e` — Deep navy (body text, headings)
- Text Secondary: `#6b6b6b` — Warm gray (captions, meta text)
- Border: `#e0e0d8` — Subtle warm gray
- Dark Section: `#1a1a2e` — Deep navy for dark sections (hero, footer)
- Dark Section Text: `#f5f5f0` — Off-white text on dark backgrounds

## Typography
- Headings: `font-family: 'Inter', sans-serif; font-weight: 700; letter-spacing: -0.02em;`
  - H1: `text-5xl md:text-6xl`
  - H2: `text-3xl md:text-4xl`
  - H3: `text-xl md:text-2xl`
- Body: `font-family: 'Inter', sans-serif; font-weight: 400; line-height: 1.7;`
  - Body: `text-base md:text-lg`
  - Small: `text-sm`
- Nav/Labels: `font-weight: 500; text-sm; letter-spacing: 0.05em; uppercase;`

## Spacing
- Section padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card gap: `gap-6 md:gap-8`
- Component spacing: `space-y-6`

## Components
### Buttons
- Primary: `bg-[#c9a227] text-[#1a1a2e] font-semibold px-8 py-3 rounded-sm hover:bg-[#b08d1e] transition-colors`
- Secondary (outline): `border-2 border-[#c9a227] text-[#c9a227] px-8 py-3 rounded-sm hover:bg-[#c9a227] hover:text-[#1a1a2e] transition-colors`
- Dark: `bg-[#1a1a2e] text-white font-semibold px-8 py-3 rounded-sm hover:bg-[#2a2a4e] transition-colors`

### Cards
- Background: `bg-white`
- Border: `border border-[#e0e0d8]`
- Shadow: `shadow-sm hover:shadow-md transition-shadow`
- Padding: `p-6 md:p-8`
- Border-radius: `rounded-sm` (sharp, industrial feel)

### Navigation
- Fixed top, transparent initially, white with shadow on scroll
- Height: `h-20`
- Logo left, links right
- Mobile: hamburger menu with slide-in drawer

## Layout Patterns
- Hero: full-width dark background, large heading, subtext, CTA button, right-aligned image
- Section headings: centered with small gold accent line above
- Product grid: 2-3 columns, equal height cards with image, title, description
- Feature rows: alternating image/text layout
- Footer: dark background, 4-column layout (brand, products, links, contact)

## Do's and Don'ts
- DO use the gold accent sparingly for maximum impact (buttons, lines, small highlights)
- DO use sharp corners (`rounded-sm`) to reflect industrial precision
- DO use generous whitespace between sections
- DON'T use bright colors outside the defined palette
- DON'T use rounded-full buttons — keep edges sharp
- DON'T use gradients — keep flat, solid colors
- DON'T clutter the layout — one message per section
