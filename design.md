# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `cream` → `#FAF7F2` — warm off-white page base
- **Foreground (charcoal):** `charcoal` → `#1C1917` — primary text
- **Accent (gold):** `gold` → `#B8860B` — CTA buttons, links, highlights
- **Gold light:** `gold-light` → `#D4A853` — hover states, secondary gold
- **Muted:** `muted` → `#F5F0E8` — card backgrounds, subtle sections
- **Muted foreground:** `muted-fg` → `#78716C` — secondary text, captions
- **Border:** `border` → `#E7E0D5` — hairline dividers

## Typography
- **Headings / Product names:** `font-serif` → Cormorant Garamond (weights 400, 500, 600, 700)
- **Body / UI:** `font-sans` → Inter (weights 300, 400, 500, 600)
- Product names: UPPERCASE, `tracking-[0.15em]`
- Section headings: serif, normal case or uppercase depending on context
- Body: `text-base` (16px), `leading-relaxed`

## Spacing & Layout
- Generous whitespace: sections use `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: no heavy borders, use subtle `shadow-sm` or `border border-border`
- Hairline dividers: `border-t border-border`

## Components
- **Buttons (primary):** `bg-gold text-cream px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium hover:bg-gold-light transition-colors`
- **Buttons (outlined):** `border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium hover:bg-gold hover:text-cream transition-colors`
- **Cards:** minimal, image-first, generous padding, subtle hover scale
- **Hover transitions:** `transition-all duration-300 ease-in-out`

## Do's
- Use large editorial imagery
- Maintain generous whitespace
- Keep UI restrained and elegant
- Use thin hairline dividers
- Subtle hover transitions (opacity, scale 1.02)
- Soft shadows only where needed

## Don'ts
- No heavy drop shadows
- No bright/neon colors
- No rounded-full buttons (use slight rounding: rounded-sm or rounded-none)
- No cluttered layouts
- No generic e-commerce feel
- No discount badges or sale stickers
