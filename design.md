# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `cream` → `#FAF7F2` — warm off-white page base
- **Foreground (charcoal):** `charcoal` → `#1A1A1A` — primary text
- **Accent (gold):** `gold` → `#B8860B` — warm dark gold for CTAs, links, accents
- **Gold light:** `gold-light` → `#D4A853` — hover states, lighter gold
- **Muted:** `muted` → `#F5F0E8` — card backgrounds, subtle sections
- **Muted foreground:** `muted-fg` → `#6B6358` — secondary text, captions
- **Border:** `border` → `#E8E2D9` — hairline dividers, card borders
- **Dark:** `dark` → `#2C2420` — dark sections (footer, newsletter)

## Typography
- **Headings / Product names:** `Cormorant Garamond` (serif), weights 400/500/600
- **Body / UI:** `Inter` (sans-serif), weights 300/400/500/600
- **Product names:** UPPERCASE, letter-spacing `0.15em`
- **Section headings:** Serif, normal case or uppercase depending on context

## Tailwind Usage
- Spacing: generous — `py-16 md:py-24`, `px-6 md:px-12 lg:px-20`
- Max content width: `max-w-7xl mx-auto`
- Borders: `border-border` with `border` or `divide-border`
- Buttons: `bg-gold text-cream` (primary), `border border-gold text-gold` (outline)
- Hover transitions: `transition-all duration-300`
- Shadows: `shadow-sm` only, very subtle
- Border radius: minimal — `rounded-none` or `rounded-sm` for premium feel

## Do's
- Use generous whitespace between sections
- Use thin hairline dividers (`border-t border-border`)
- Use serif for all headings and product names
- Keep imagery large and editorial
- Use subtle hover transitions (opacity, translate)
- Buttons: solid gold or outlined gold, no rounded corners

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded buttons (use square or very slight rounding)
- No cluttered layouts
- No generic e-commerce feel
- No dark mode toggle (single light theme)
