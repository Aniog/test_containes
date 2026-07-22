# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Background (cream):** `cream` → `#FAF7F2` — warm off-white page base
- **Foreground (charcoal):** `charcoal` → `#1A1A1A` — primary text
- **Accent (gold):** `gold` → `#B8860B` — CTA buttons, highlights, metallic accents
- **Gold light:** `gold-light` → `#D4A843` — hover states, secondary gold
- **Muted:** `muted` → `#F5F0E8` — card backgrounds, subtle sections
- **Muted foreground:** `muted-fg` → `#6B6358` — secondary text, captions
- **Border:** `border` → `#E8E2D9` — hairline dividers, card borders

## Typography
- **Headings / Product names:** `font-serif` → Cormorant Garamond (Google Fonts), weights 400/500/600
- **Body / UI:** `font-sans` → Inter (Google Fonts), weights 300/400/500/600
- **Product names:** UPPERCASE, letter-spacing `0.15em` (`tracking-widest`)
- **Section headings:** Serif, normal case or uppercase depending on context

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: `rounded-none` or very subtle `rounded-sm`, thin border `border-border`
- Hairline dividers: `border-t border-border`

## Components
- **Buttons (primary):** `bg-gold text-white px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium hover:bg-gold-light transition-colors`
- **Buttons (outlined):** `border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium hover:bg-gold hover:text-white transition-colors`
- **Cards:** No border-radius, subtle shadow on hover `hover:shadow-lg transition-shadow`
- **Nav links:** `text-sm tracking-wide uppercase font-sans font-medium`

## Do's
- Use generous whitespace between sections
- Use serif for emotional/brand text, sans for functional UI
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Subtle hover transitions (opacity, shadow, translate)

## Don'ts
- No rounded corners on product cards
- No bright/neon colors
- No heavy drop shadows
- No cluttered layouts
- No discount/sale badges styling
- No generic stock photo feel
