# Velmora Fine Jewelry — Design System

## Brand Concept
Quiet luxury, warm editorial. Premium demi-fine jewelry — restrained, confident, never loud.

## Color Palette
All hex values are registered in tailwind.config.js as named tokens.

| Token         | Hex       | Usage                                      |
|---------------|-----------|--------------------------------------------|
| `ivory`       | #FAF7F2   | Page background, light surfaces            |
| `cream`       | #F2EDE4   | Section alternates, card backgrounds       |
| `charcoal`    | #1C1917   | Primary text, nav, footer background       |
| `warm-gray`   | #6B6560   | Secondary text, captions, labels           |
| `gold`        | #C9A96E   | Primary accent — CTAs, borders, highlights |
| `gold-light`  | #E8D5B0   | Hover states, subtle tints                 |
| `gold-dark`   | #A07840   | Active states, pressed buttons             |
| `stone`       | #D6CFC4   | Hairline dividers, borders                 |

## Typography
- **Headings / Product names**: Cormorant Garamond (serif) — loaded via Google Fonts
- **Body / UI**: Inter (sans-serif)
- Product names: UPPERCASE, `tracking-widest` (letter-spacing: 0.15em+)
- Section headings: `font-cormorant`, `font-light` or `font-normal`, large scale
- Body copy: `font-inter`, `text-sm` or `text-base`, `text-warm-gray` or `text-charcoal`

## Spacing & Layout
- Generous whitespace: section padding `py-20` to `py-28` on desktop, `py-12` on mobile
- Max content width: `max-w-7xl mx-auto px-6 lg:px-12`
- Hairline dividers: `border-stone` at `border-t` or `border-b`
- Grid gaps: `gap-6` to `gap-8`

## Buttons
- **Primary (filled)**: `bg-gold text-ivory px-8 py-3 tracking-widest text-xs uppercase font-inter hover:bg-gold-dark transition-colors`
- **Outlined**: `border border-gold text-gold px-8 py-3 tracking-widest text-xs uppercase hover:bg-gold hover:text-ivory transition-colors`
- **Ghost/text**: `text-charcoal underline-offset-4 hover:underline text-xs tracking-widest uppercase`

## Cards & Surfaces
- Product cards: white/cream bg, no border, soft shadow on hover (`shadow-md`)
- Hover: image scale `scale-105`, transition `duration-500 ease-out`
- Rounded corners: `rounded-none` (sharp, editorial) or `rounded-sm` (subtle)

## Animations
- All transitions: `transition-all duration-300 ease-out` or `duration-500`
- Nav scroll: transparent → solid `bg-ivory/95 backdrop-blur-sm`
- Cart drawer: slide in from right
- Image hover: `group-hover:scale-105`

## Do's
- Use `font-cormorant` for all display text, product names, section titles
- Use `tracking-widest` on uppercase labels and product names
- Keep layouts airy — resist filling every pixel
- Use `text-warm-gray` for secondary/supporting text
- Hairline `border-stone` dividers between sections

## Don'ts
- No bright colors, no neon, no heavy drop shadows
- No rounded pill buttons (use sharp or very subtle radius)
- No generic stock-photo blue/white palettes
- No tight letter-spacing on serif headings
- Never use `text-white` on `bg-ivory` — use `text-charcoal`
