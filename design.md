# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `#FAF8F5` — warm off-white for page backgrounds
- **Surface (ivory):** `#F5F0EB` — slightly deeper warm tone for cards/sections
- **Text primary:** `#1A1A1A` — near-black for headings and body
- **Text secondary:** `#6B5E54` — warm taupe for secondary text
- **Accent (gold):** `#9E7A47` — refined antique gold for CTAs, links, accents
- **Accent hover:** `#7D5F35` — darker gold for hover states
- **Border:** `#E8E0D8` — warm hairline dividers
- **Muted:** `#D4C9BE` — for disabled states, subtle elements

All colors defined in `tailwind.config.js` as named tokens.

## Typography
- **Headings / Product names:** `Cormorant Garamond` (serif), weights 300–700
- **Body / UI:** `Inter` (sans-serif), weights 300–600
- Product names: UPPERCASE, `tracking-[0.2em]`
- Section headings: serif, normal case or uppercase depending on context
- Body: 16px base, line-height 1.6

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: no heavy borders, subtle `shadow-sm` or `border border-border`
- Hairline dividers: `border-t border-border`

## Components
- **Buttons:** Solid accent background with cream text, or outlined with accent border. Rounded `rounded-none` (sharp) or `rounded-sm`. Uppercase tracking.
- **Cards:** Clean, minimal. Hover reveals overlay or second image.
- **Inputs:** Border-bottom style or thin border, warm tones.
- **Accordions:** Thin top border, serif title, smooth expand.

## Transitions
- All hover transitions: `transition-all duration-300 ease-in-out`
- Opacity fades, subtle scale on product images (`hover:scale-105`)
- Cart drawer slides from right

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use serif for emotional/brand text
- Use thin hairline dividers
- Keep UI restrained and elegant

## Don'ts
- No heavy drop shadows
- No bright/neon colors
- No rounded-full buttons (too casual)
- No cluttered layouts
- No generic e-commerce feel
