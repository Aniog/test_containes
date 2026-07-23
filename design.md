# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `cream` → `#FAF7F2` — warm off-white page base
- **Foreground (charcoal):** `charcoal` → `#1A1A1A` — primary text
- **Accent (gold):** `gold` → `#B8860B` — CTA buttons, links, highlights
- **Gold light:** `gold-light` → `#D4A843` — hover states, secondary gold
- **Muted:** `muted` → `#F5F0E8` — card backgrounds, subtle sections
- **Muted foreground:** `muted-fg` → `#6B6358` — secondary text, captions
- **Border:** `border` → `#E8E2D9` — hairline dividers, card borders
- **Dark:** `dark` → `#2C2420` — dark sections (footer, newsletter)

## Typography
- **Headings / Product names:** `Cormorant Garamond` (serif), weights 400–700
- **Body / UI:** `Inter` (sans-serif), weights 300–600
- Product names: UPPERCASE, letter-spacing `0.15em`
- Section headings: serif, normal case or uppercase depending on context

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: `rounded-none` or very subtle `rounded-sm`, thin border `border-border`
- Hairline dividers: `border-t border-border`

## Components
- **Buttons (primary):** `bg-gold text-white hover:bg-gold-light` — no rounded corners or very subtle `rounded-sm`
- **Buttons (outline):** `border border-gold text-gold hover:bg-gold hover:text-white`
- **Cards:** minimal, no heavy shadows. Thin border or no border. Hover: subtle scale or overlay.
- **Inputs:** `border-border bg-transparent` with focus ring in gold

## Do's
- Use large editorial imagery with warm tones
- Maintain generous whitespace
- Use thin hairline dividers between sections
- Keep animations subtle (opacity, translateY, scale 1.02)
- Use Tailwind classes exclusively

## Don'ts
- No heavy drop shadows
- No rounded-lg or pill shapes (except variant selectors)
- No bright/neon colors
- No cluttered layouts
- No generic e-commerce feel
