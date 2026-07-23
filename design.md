# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `cream` → `#FAF7F2` — warm off-white page base
- **Foreground (charcoal):** `charcoal` → `#1A1A1A` — primary text
- **Accent (gold):** `gold` → `#B8860B` — warm dark gold for CTAs, highlights
- **Gold light:** `gold-light` → `#D4A853` — hover states, secondary gold
- **Muted:** `muted` → `#F5F0E8` — card backgrounds, subtle sections
- **Muted foreground:** `muted-fg` → `#6B6358` — secondary text, captions
- **Border:** `border` → `#E8E2D9` — hairline dividers

## Typography
- **Headings / Product names:** `font-serif` → Cormorant Garamond (weights 300, 400, 500, 600, 700)
- **Body / UI:** `font-sans` → Inter (weights 300, 400, 500, 600)
- Product names: UPPERCASE, `tracking-[0.15em]`
- Section headings: Normal case or uppercase depending on context, `text-3xl md:text-5xl font-serif font-light`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: `rounded-none` or very subtle `rounded-sm`
- Hairline dividers: `border-t border-border`

## Components
- **Buttons (primary):** `bg-gold text-cream px-8 py-3 text-sm tracking-[0.1em] uppercase font-sans font-medium hover:bg-gold-light transition-colors`
- **Buttons (outlined):** `border border-gold text-gold px-8 py-3 text-sm tracking-[0.1em] uppercase font-sans font-medium hover:bg-gold hover:text-cream transition-colors`
- **Cards:** No border-radius, subtle shadow on hover `hover:shadow-lg transition-shadow`
- **Links:** `text-charcoal hover:text-gold transition-colors`

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Subtle hover transitions (200-300ms)
- Soft shadows only on hover

## Don'ts
- No rounded corners on product cards
- No bright/neon colors
- No heavy drop shadows
- No cluttered layouts
- No discount/sale-style badges
