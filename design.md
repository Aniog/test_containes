# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Background (cream):** `cream` → `#FAF7F2` — warm off-white page base
- **Foreground (charcoal):** `charcoal` → `#1C1917` — primary text
- **Accent (gold):** `gold` → `#B8860B` — warm dark gold for CTAs, highlights
- **Gold light:** `gold-light` → `#D4A853` — hover states, secondary gold
- **Muted:** `muted` → `#F5F0E8` — card backgrounds, subtle sections
- **Muted foreground:** `muted-fg` → `#78716C` — secondary text, captions
- **Border:** `border` → `#E7E0D5` — hairline dividers, card borders

## Typography
- **Headings / Product names:** `Cormorant Garamond` (serif), weights 400/500/600
- **Body / UI:** `Inter` (sans-serif), weights 300/400/500/600
- Product names: UPPERCASE, letter-spacing `0.15em`
- Section headings: serif, normal case or uppercase depending on context

### Tailwind text sizes
- Hero headline: `text-4xl md:text-6xl lg:text-7xl`
- Section title: `text-3xl md:text-4xl`
- Product name: `text-sm md:text-base` uppercase tracking-widest
- Body: `text-base`
- Caption/small: `text-sm` or `text-xs`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: minimal border or no border, subtle shadow on hover
- Hairline dividers: `border-t border-border`

## Components
- **Buttons:** Solid accent (`bg-gold text-white`) or outlined (`border border-gold text-gold`). Rounded: `rounded-none` or `rounded-sm` for premium feel. Padding: `px-8 py-3`. Uppercase tracking-wide text-sm font-medium.
- **Cards:** `bg-white` or `bg-muted`, no heavy shadows. Hover: subtle scale or shadow transition.
- **Inputs:** `border border-border bg-white` with `focus:border-gold focus:ring-1 focus:ring-gold`

## Transitions
- Hover: `transition-all duration-300 ease-in-out`
- Subtle scale on product cards: `hover:scale-[1.02]`
- Opacity reveals: `opacity-0 group-hover:opacity-100`

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Maintain warm, inviting tone
- Use serif for elegance, sans-serif for clarity

## Don'ts
- No heavy drop shadows
- No bright/neon colors
- No rounded-full buttons (too casual)
- No cluttered layouts
- No generic stock photo feel — keep editorial warmth
