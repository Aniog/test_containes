# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background**: `#FDFBF7` (warm ivory) — `bg-ivory`
- **Surface/Card**: `#FAF7F2` — `bg-cream`
- **Text Primary**: `#1C1917` (stone-950) — near-black warm
- **Text Secondary**: `#57534E` (stone-600)
- **Text Muted**: `#A8A29E` (stone-400)
- **Accent (Gold)**: `#B8860B` — warm dark gold for CTAs, links, highlights
- **Accent Hover**: `#9A7209` — deeper gold
- **Accent Light**: `#F5E6C8` — soft gold tint for backgrounds
- **Border/Divider**: `#E7E5E4` (stone-200) — hairline dividers
- **Dark Section**: `#1C1917` — for contrast sections (newsletter, footer)

## Typography
- **Headings / Product Names**: `Cormorant Garamond`, serif — elegant, editorial
  - Product names: UPPERCASE, letter-spacing: 0.15em (`tracking-widest`)
  - Section headings: normal case or uppercase depending on context
- **Body / UI**: `Inter`, sans-serif — clean, modern, readable
- **Sizes** (Tailwind):
  - Hero headline: `text-5xl md:text-7xl`
  - Section title: `text-3xl md:text-4xl`
  - Product name: `text-sm md:text-base`
  - Body: `text-sm md:text-base`
  - Small/caption: `text-xs`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: minimal border, soft shadow `shadow-sm`, rounded-none or `rounded-sm`
- Hairline dividers: `border-t border-stone-200`

## Buttons
- Primary (accent): `bg-gold text-white hover:bg-gold-dark` — solid, no border-radius or very subtle
- Secondary (outlined): `border border-gold text-gold hover:bg-gold hover:text-white`
- Pill variant for selectors: `rounded-full px-4 py-1.5 border`

## Interactions
- Hover transitions: `transition-all duration-300 ease-in-out`
- Image hover: slight scale `hover:scale-105` with overflow-hidden container
- Links: underline on hover, gold color
- Buttons: subtle lift or color shift

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Maintain warm, inviting tone
- Use gold accent sparingly for maximum impact

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on cards (keep sharp/editorial)
- No cluttered layouts
- No generic e-commerce feel (no red sale badges, no busy grids)
