# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `cream` → `#FAF7F2` — warm off-white page base
- **Foreground (charcoal):** `charcoal` → `#1C1917` — primary text
- **Accent (gold):** `gold` → `#B8860B` — CTA buttons, links, highlights
- **Gold light:** `gold-light` → `#D4A843` — hover states, secondary gold
- **Muted:** `muted` → `#F5F0E8` — card backgrounds, subtle sections
- **Muted foreground:** `muted-fg` → `#78716C` — secondary text, captions
- **Border:** `border` → `#E7E0D5` — hairline dividers

## Typography
- **Headings / Product names:** `font-serif` → Cormorant Garamond (Google Fonts), weights 400/500/600
- **Body / UI:** `font-sans` → Inter (Google Fonts), weights 300/400/500/600
- **Product names:** UPPERCASE, `tracking-[0.15em]`
- **Section headings:** Serif, normal case or uppercase depending on context

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: `rounded-sm` or no rounding, subtle `shadow-sm` on hover
- Hairline dividers: `border-t border-border`

## Buttons
- Primary: `bg-gold text-white px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium hover:bg-gold-light transition-colors`
- Secondary/outlined: `border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-colors`

## Do's
- Use generous whitespace
- Large editorial imagery
- Thin hairline dividers between sections
- Subtle hover transitions (opacity, translate-y)
- Soft shadows on product cards on hover
- Serif for elegance, sans for clarity

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded-full buttons (use rounded-sm or rounded-none)
- No cluttered layouts
- No discount/sale-style badges
- No generic stock photo feel
