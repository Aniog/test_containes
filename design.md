# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `cream` → `#FAF7F2` — warm off-white page background
- **Surface (ivory):** `ivory` → `#F5F0E8` — card/section backgrounds
- **Foreground (charcoal):** `charcoal` → `#1A1A1A` — primary text
- **Muted text:** `muted` → `#6B6358` — secondary/body text
- **Accent (gold):** `gold` → `#B8860B` — CTA buttons, links, highlights
- **Accent hover:** `gold-dark` → `#8B6508` — button hover states
- **Accent light:** `gold-light` → `#D4A843` — subtle gold tints
- **Border:** `border` → `#E8E2D9` — hairline dividers

## Typography
- **Headings / Product names:** `Cormorant Garamond` (serif), weights 400/500/600
- **Body / UI:** `Inter` (sans-serif), weights 300/400/500/600
- **Product names:** UPPERCASE, letter-spacing: 0.15em
- **Section headings:** Normal case or uppercase depending on context

## Tailwind Usage
- Spacing: generous — `py-16 md:py-24`, `px-6 md:px-12 lg:px-20`
- Max content width: `max-w-7xl mx-auto`
- Borders: `border-border` with `border-[0.5px]` for hairline effect
- Shadows: `shadow-sm` only, very subtle
- Transitions: `transition-all duration-300 ease-in-out`
- Buttons: `bg-gold text-cream` (solid) or `border border-gold text-gold` (outlined)
- Hover: scale slightly `hover:scale-[1.02]`, opacity shifts

## Do's
- Use generous whitespace between sections
- Large editorial imagery
- Thin hairline dividers between sections
- Subtle hover transitions (opacity, translateY)
- Soft shadows on cards
- Serif for elegance, sans for clarity

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded-full buttons (use rounded-sm or rounded-none)
- No cluttered layouts
- No discount/sale badges
- No generic stock photo feel
