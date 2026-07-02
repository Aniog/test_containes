# Velmora Fine Jewelry — Design System

## Visual Identity
Mood: Quiet luxury, warm, editorial. Premium demi-fine jewelry.

## Color Palette
- **Background (cream):** `cream` → `#FAF7F2` — primary page background
- **Foreground (charcoal):** `charcoal` → `#1A1A1A` — primary text
- **Accent (gold):** `gold` → `#B8860B` — CTAs, highlights, hover states
- **Gold light:** `gold-light` → `#D4A843` — lighter gold for borders/accents
- **Muted:** `muted` → `#F5F0E8` — card backgrounds, subtle sections
- **Muted foreground:** `muted-fg` → `#6B6358` — secondary text, captions
- **Border:** `border` → `#E8E0D4` — hairline dividers

## Typography
- **Headings / Product names:** `Cormorant Garamond` (serif), weights 400–700
- **Body / UI:** `Inter` (sans-serif), weights 300–600
- Product names: UPPERCASE, letter-spacing `0.15em`
- Section headings: serif, normal case or uppercase depending on context

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: no heavy borders, subtle shadow `shadow-sm`, rounded `rounded-sm`
- Hairline dividers: `border-t border-border`

## Buttons
- Primary: `bg-gold text-white` with `hover:bg-gold-light` transition
- Outlined: `border border-gold text-gold hover:bg-gold hover:text-white`
- Pill variants for selectors: `rounded-full px-4 py-1.5`
- All buttons: `transition-all duration-300`

## Interactions
- Hover transitions: `duration-300 ease-in-out`
- Image hover: subtle scale `hover:scale-105` with overflow hidden
- Links: underline on hover with gold color

## Do's
- Use generous whitespace between sections
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Maintain warm, inviting tone
- Use Tailwind named colors from config

## Don'ts
- No heavy drop shadows
- No bright/neon colors
- No rounded-lg or rounded-xl on cards (keep angular/refined)
- No hardcoded hex values in JSX — use Tailwind config names
- No cluttered layouts — less is more
