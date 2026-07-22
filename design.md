# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry brand for women 25–45.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base Colors (added to Tailwind config as named tokens)
- `ivory`: `#FAF7F2` — primary background, warm off-white
- `ivory-dark`: `#F2EDE4` — secondary background, section alternates
- `charcoal`: `#1C1917` — primary text, near-black warm
- `charcoal-mid`: `#3D3935` — secondary text
- `stone`: `#8A8178` — muted text, captions, labels
- `gold`: `#C9A96E` — primary accent, CTAs, highlights
- `gold-light`: `#E8D5A3` — hover states, soft accents
- `gold-dark`: `#A07840` — pressed states, deep accent
- `blush`: `#E8D5C4` — warm neutral for backgrounds
- `cream`: `#FDF9F3` — card backgrounds

### Usage
- Page background: `ivory`
- Section alternates: `ivory-dark` or `cream`
- Primary text: `charcoal`
- Secondary text: `charcoal-mid`
- Muted/captions: `stone`
- Accent/CTA: `gold`
- Hover accent: `gold-light`
- Dark hero/overlay: `charcoal`

## Typography

### Fonts
- Serif (headings, product names, logo): **Cormorant Garamond** — weights 300, 400, 500, 600, 700
- Sans-serif (body, UI, labels): **Manrope** — weights 300, 400, 500, 600, 700

### Scale
- Display: `text-6xl` to `text-8xl`, Cormorant Garamond, weight 300–400
- H1: `text-4xl md:text-5xl lg:text-6xl`, Cormorant Garamond, weight 400
- H2: `text-3xl md:text-4xl`, Cormorant Garamond, weight 400
- H3: `text-xl md:text-2xl`, Cormorant Garamond, weight 500
- Product name: `text-xl md:text-2xl`, Cormorant Garamond, UPPERCASE, `tracking-widest`
- Body: `text-sm md:text-base`, Manrope, weight 400
- Label/UI: `text-xs`, Manrope, weight 500–600, `tracking-wider uppercase`
- Price: `text-lg`, Manrope, weight 500

## Spacing & Layout
- Max content width: `max-w-7xl` (1280px)
- Section padding: `py-16 md:py-24`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace — never cramped

## Borders & Dividers
- Hairline dividers: `border-gold/20` or `border-stone/20`
- Card borders: `border border-gold/10`
- Radius: `rounded-none` for editorial feel, `rounded-sm` for pills/badges

## Shadows
- Card hover: `shadow-md shadow-charcoal/5`
- Drawer/modal: `shadow-2xl shadow-charcoal/20`

## Buttons
- Primary (CTA): `bg-gold text-ivory px-8 py-3 text-xs tracking-widest uppercase font-manrope font-semibold hover:bg-gold-dark transition-colors`
- Outlined: `border border-gold text-gold px-8 py-3 text-xs tracking-widest uppercase hover:bg-gold hover:text-ivory transition-colors`
- Ghost: `text-charcoal text-xs tracking-wider uppercase hover:text-gold transition-colors`

## Animations
- Transitions: `transition-all duration-300 ease-out`
- Hover image scale: `hover:scale-105 transition-transform duration-500`
- Fade in: subtle opacity transitions
- No jarring animations — everything is soft and refined

## Do's
- Use Cormorant Garamond for all headings and product names
- Use UPPERCASE + wide letter-spacing for product names and section labels
- Keep whitespace generous — let the jewelry breathe
- Use warm gold tones for accents, never cold blues or greens
- Hairline borders, not thick borders
- Soft shadows, not harsh drop shadows

## Don'ts
- No bright/neon colors
- No rounded-full on large elements (only pills/badges)
- No generic sans-serif headings
- No cluttered layouts
- No discount-looking red sale badges
- No hardcoded hex values in JSX — use Tailwind tokens only
