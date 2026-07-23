# Velmora Fine Jewelry Design System

## Brand direction
Velmora should feel like quiet luxury: warm, editorial, refined, and premium-but-accessible. The experience should feel closer to a fashion editorial than a discount marketplace.

## Color palette
Use one consistent direction across the entire site:
- Base background: warm editorial neutrals such as `bg-stone-50`, `bg-stone-100`
- Primary text: deep refined ink such as `text-neutral-950`
- Elevated dark surfaces: `bg-stone-900`, `bg-stone-950`
- Warm metallic accent: restrained gold-inspired tones such as `text-amber-700`, `border-amber-700`, `bg-amber-600`
- Supporting muted text: `text-stone-500`, `text-stone-600`
- Hairline dividers: `border-stone-200`, `border-stone-300`

Do:
- Keep contrast high and all text clearly readable
- Use amber/gold accents sparingly for emphasis, stars, and detail lines
- Let imagery and whitespace carry the premium feel

Do not:
- Use loud sale colors, bright gradients, or discount-style UI
- Mix multiple accent colors
- Use low-contrast beige-on-beige text

## Typography
- Headings and product names: elegant serif using Cormorant Garamond
- Body copy and interface: clean sans-serif using Inter
- Product names: uppercase with generous letter spacing
- Navigation and labels: small uppercase or refined sentence case, never heavy bold everywhere

Suggested classes:
- Display headings: `font-display`
- Product names: `font-display uppercase tracking-product`
- UI/body: `font-sans`

## Layout and spacing
- Use generous whitespace and roomy section spacing
- Prefer clean editorial grids with strong alignment
- Desktop should feel expansive, not stacked like mobile
- Mobile should remain airy and readable with comfortable tap targets

Suggested spacing:
- Section wrappers: `py-16 md:py-24`
- Content max width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-5 md:p-6`

## Borders, surfaces, and shadows
- Use thin hairline borders such as `border border-stone-200`
- Surfaces should feel soft and premium, with restrained shadows like `shadow-sm` and `shadow-xl/soft equivalents`
- Buttons should feel tailored: either deep solid or refined outline
- Corners should be soft but not playful; use medium or large radii, not exaggerated bubbly shapes everywhere

## Imagery
- Prefer warm-lit gold jewelry photography on stone, cream, or dark editorial backgrounds
- Use model close-ups for hero and UGC moments
- Use still-life product imagery for product cards and gallery
- Keep imagery elegant, intimate, and premium

## Interaction
- Use subtle hover transitions, opacity shifts, and gentle movement
- Avoid bouncy or flashy animation
- Sticky header should turn from transparent over hero to solid after scroll
- Cart drawer should feel polished and minimal
