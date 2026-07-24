# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `#FAF7F2` — warm off-white for page backgrounds
- **Foreground (charcoal):** `#1A1A1A` — near-black for body text
- **Accent (warm gold):** `#B8860B` — dark goldenrod for CTAs, links, highlights
- **Accent light:** `#D4A853` — lighter gold for hover states
- **Muted:** `#6B6B6B` — secondary text, captions
- **Muted light:** `#F5F0E8` — subtle section backgrounds, cards
- **Border:** `#E8E2D9` — hairline dividers, card borders
- **Dark surface:** `#1A1A1A` — footer, dark sections
- **Dark surface text:** `#FAF7F2` — text on dark surfaces

## Typography
- **Headings / Product names:** `Cormorant Garamond`, serif. Weight 300–600.
- **Body / UI:** `Inter`, sans-serif. Weight 300–500.
- **Product names:** UPPERCASE, letter-spacing `0.15em`
- **Section headings:** Normal case or uppercase depending on context, letter-spacing `0.05em`

### Tailwind Font Classes
- `font-serif` → Cormorant Garamond
- `font-sans` → Inter

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card padding: `p-4 md:p-6`
- Grid gaps: `gap-4 md:gap-6 lg:gap-8`

## Components
- **Buttons (primary):** `bg-accent text-white px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium hover:bg-accent-light transition-colors`
- **Buttons (outlined):** `border border-accent text-accent px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium hover:bg-accent hover:text-white transition-colors`
- **Cards:** No heavy shadows. Use `border border-border` or no border with subtle hover lift `hover:-translate-y-1 transition-transform`
- **Dividers:** `border-t border-border` — thin hairline

## Do's
- Use generous whitespace
- Large editorial imagery
- Thin hairline dividers between sections
- Subtle hover transitions (opacity, translate, color)
- Soft shadows only where needed (`shadow-sm`)
- Keep text hierarchy clear: serif headings, sans body

## Don'ts
- No heavy drop shadows
- No bright/neon colors
- No rounded-full buttons (use slight rounding: `rounded-sm` or `rounded-none`)
- No cluttered layouts
- No generic e-commerce feel
- No discount badges or sale stickers
