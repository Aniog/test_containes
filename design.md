# Velmora Fine Jewelry — Design System

## Brand Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking.
- **Audience**: Women 25–45, gifting and self-purchase, $30–$120 price point.

## Color Palette
All custom colors are defined in `tailwind.config.js` under `theme.extend.colors`.

| Token | Hex | Usage |
|---|---|---|
| `gold` | #C9A96E | Primary accent — buttons, links, highlights |
| `gold-light` | #E8D5B0 | Hover states, subtle accents |
| `gold-dark` | #A68B52 | Pressed states, borders |
| `cream` | #FAF7F2 | Page background, cards |
| `cream-dark` | #F0EBE1 | Section alternating backgrounds |
| `charcoal` | #1A1A1A | Primary text, headings |
| `charcoal-light` | #3D3D3D | Secondary text |
| `warm-gray` | #8C8377 | Muted text, captions |
| `warm-gray-light` | #B8B0A6 | Disabled text, placeholders |
| `white` | #FFFFFF | Cards, modals, nav background |

## Typography
- **Headings**: Cormorant Garamond (Google Fonts), weight 300–600
- **Body**: Inter (Google Fonts), weight 300–600
- **Product names**: Uppercase, wide letter-spacing (tracking-[0.2em])
- **Nav links**: Inter, uppercase, tracking-[0.15em], text-[11px]–[13px]

### Type Scale
- Hero headline: text-5xl md:text-7xl
- Section headings: text-3xl md:text-4xl
- Card titles: text-lg
- Body: text-sm md:text-base
- Caption/meta: text-xs

## Spacing & Layout
- **Max content width**: max-w-7xl (1280px)
- **Section padding**: py-16 md:py-24
- **Card gap**: gap-4 md:gap-6
- **Border radius**: rounded-none for buttons/inputs (sharp, editorial), rounded-sm for cards

## Dividers
- Hairline: border-b border-charcoal/10 or border-gold/20
- Section separators: thin horizontal rule, max-w-xs mx-auto

## Buttons
- **Primary (Accent)**: bg-gold text-white, hover:bg-gold-dark, uppercase tracking-widest text-xs py-3 px-8
- **Secondary (Outlined)**: border-gold text-gold, hover:bg-gold hover:text-white
- **Text link**: text-gold underline underline-offset-4
- Buttons have no border-radius (sharp, editorial look) — use `rounded-none`

## Shadows & Effects
- Cards: shadow-sm hover:shadow-md transition
- Image hovers: subtle scale(1.03) transform
- Background overlays: gradient from black/40 to transparent

## Animation
- Hover transitions: transition-all duration-300 ease-in-out
- Fade-in on scroll: opacity-0 translate-y-4 → opacity-100 translate-y-0
- Cart drawer: slide from right

## Do's
- Use generous whitespace between sections
- Keep imagery large and editorial
- Use warm, muted tones for backgrounds
- Ensure all text has strong contrast against backgrounds
- Use hairline dividers for visual rhythm

## Don'ts
- No bright neon colors
- No rounded-lg on buttons
- No generic e-commerce look — maintain editorial feel
- No text that blends into backgrounds
- No heavy shadows or 3D effects
