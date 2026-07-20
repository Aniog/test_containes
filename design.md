# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `#FAF8F5` — warm off-white page base
- **Surface (ivory):** `#F5F0EB` — card/section backgrounds
- **Foreground (charcoal):** `#1A1A1A` — primary text
- **Muted text:** `#6B6560` — secondary/body text
- **Accent (gold):** `#B8860B` — CTAs, highlights, hover states
- **Accent hover:** `#9A7209` — darker gold for hover
- **Border:** `#E8E2DB` — hairline dividers
- **Dark section:** `#1A1A1A` — footer, dark blocks

### Tailwind config names
`cream`, `ivory`, `charcoal`, `muted`, `gold`, `gold-hover`, `border-warm`, `dark`

## Typography
- **Headings / Product names:** `Cormorant Garamond` (serif), weights 400/500/600
- **Body / UI:** `Inter` (sans-serif), weights 300/400/500/600
- Product names: UPPERCASE, letter-spacing `0.15em`
- Section headings: serif, normal case or uppercase depending on context

### Tailwind classes
- Headings: `font-serif text-charcoal`
- Body: `font-sans text-muted`
- Product name: `font-serif uppercase tracking-[0.15em]`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: no heavy shadows, use `border border-border-warm` or subtle `shadow-sm`
- Hairline dividers: `border-t border-border-warm`

## Buttons
- Primary: `bg-gold text-white hover:bg-gold-hover` — rounded-none or very slight rounding
- Outlined: `border border-gold text-gold hover:bg-gold hover:text-white`
- Pill variant selectors: `border border-border-warm rounded-full px-4 py-1.5`

## Interactions
- Hover transitions: `transition-all duration-300 ease-in-out`
- Image hover: slight scale `hover:scale-105` with overflow-hidden container
- Links: underline on hover with gold color

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Maintain warm, golden tone throughout
- Use serif for elegance, sans for clarity

## Don'ts
- No heavy drop shadows
- No bright/neon colors
- No rounded-lg buttons (keep angular/minimal)
- No cluttered layouts
- No generic stock photo feel — keep editorial
