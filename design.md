# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `cream` → `#FAF7F2` — warm off-white page base
- **Foreground (charcoal):** `charcoal` → `#1A1A1A` — primary text
- **Accent (gold):** `gold` → `#B8860B` — CTA buttons, links, highlights
- **Gold light:** `gold-light` → `#D4A843` — hover states, secondary gold
- **Muted:** `muted` → `#6B6B6B` — secondary text, captions
- **Border:** `border` → `#E8E2D9` — hairline dividers, card borders
- **Surface:** `surface` → `#F5F0E8` — card backgrounds, subtle sections
- **Dark:** `dark` → `#0D0D0D` — nav solid state, footer

## Typography
- **Headings / Product names:** `Cormorant Garamond` (serif), weights 400/500/600
- **Body / UI:** `Inter` (sans-serif), weights 300/400/500/600
- Product names: UPPERCASE, letter-spacing: 0.15em (`tracking-widest`)
- Section headings: serif, normal case or uppercase depending on context

## Spacing & Layout
- Generous whitespace: sections use `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: `rounded-none` or very subtle `rounded-sm`, thin border
- Hairline dividers: `border-t border-border`

## Components
- **Buttons (primary):** `bg-gold text-white hover:bg-gold-light` with `px-8 py-3 text-sm tracking-wider uppercase font-sans font-medium transition-colors`
- **Buttons (outline):** `border border-gold text-gold hover:bg-gold hover:text-white`
- **Cards:** No heavy shadows. Thin border or borderless with subtle bg difference.
- **Hover transitions:** `transition-all duration-300 ease-in-out`
- **Images:** Object-cover, no rounded corners (editorial feel)

## Do's
- Use generous padding and margin
- Keep text hierarchy clear (serif headings, sans body)
- Use gold accent sparingly for CTAs and highlights
- Maintain warm, inviting tone through cream backgrounds
- Use thin hairline borders for separation

## Don'ts
- No heavy drop shadows
- No rounded corners on product images
- No bright/neon colors
- No cluttered layouts
- No generic e-commerce feel (no red sale badges, no busy grids)
