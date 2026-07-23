# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Inspired by high-end jewelry editorial photography — deep warm neutrals, gold accents, generous whitespace.

## Color Palette

### Base Colors (added to Tailwind config as named tokens)
- `ivory`: #FAF7F2 — primary background, warm off-white
- `parchment`: #F2EDE4 — secondary background, section alternates
- `stone`: #E8E0D4 — borders, hairline dividers
- `dusk`: #2C2420 — primary text, near-black warm brown
- `umber`: #5C4A3A — secondary text, muted body copy
- `gold`: #C9A96E — primary accent, CTA buttons, highlights
- `gold-light`: #E8D5A3 — hover states, soft gold tints
- `gold-dark`: #A07840 — pressed states, deep gold
- `charcoal`: #1A1614 — footer background, deep contrast sections

### Usage Rules
- Background: `ivory` default, `parchment` for alternating sections
- Primary text: `dusk` on light backgrounds — always high contrast
- Accent/CTA: `gold` — used sparingly for maximum impact
- Dividers: `stone` — 1px hairline only
- Footer: `charcoal` with `ivory` text
- NEVER use gold text on ivory without sufficient contrast check

## Typography

### Fonts
- Serif: Cormorant Garamond (headings, product names, editorial text)
- Sans: Manrope (body, UI, labels, nav links)

### Scale
- Display: Cormorant Garamond 56–72px, weight 300–400, tracking normal
- H1: Cormorant Garamond 40–48px, weight 400
- H2: Cormorant Garamond 32–36px, weight 400
- H3: Cormorant Garamond 24–28px, weight 500
- Product Name: Cormorant Garamond 20–24px, UPPERCASE, tracking-widest
- Body: Manrope 14–16px, weight 400, line-height 1.7
- Label/UI: Manrope 11–13px, weight 500–600, tracking-wide, UPPERCASE
- Price: Manrope 16–18px, weight 600

### Tailwind Classes
- `font-serif` → Cormorant Garamond
- `font-sans` → Manrope
- Product names: `font-serif uppercase tracking-widest`
- Section labels: `font-sans uppercase tracking-widest text-xs`

## Spacing
- Section padding: `py-20 md:py-28` (generous vertical rhythm)
- Container: `max-w-7xl mx-auto px-6 md:px-12`
- Card gap: `gap-6 md:gap-8`
- Hairline divider: `border-t border-stone`

## Borders & Shadows
- Dividers: `border border-stone` (1px, warm gray)
- Card hover shadow: `shadow-md` with warm tint
- Buttons: no border-radius on primary (sharp, editorial) or `rounded-none`
- Pill buttons (variant selectors): `rounded-full`

## Buttons
- Primary CTA: `bg-gold text-ivory px-8 py-3 font-sans uppercase tracking-widest text-xs font-semibold hover:bg-gold-dark transition-colors`
- Outlined: `border border-dusk text-dusk px-8 py-3 font-sans uppercase tracking-widest text-xs font-semibold hover:bg-dusk hover:text-ivory transition-colors`
- Ghost/text: `text-dusk underline-offset-4 hover:underline font-sans text-sm`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Cart drawer: slide in from right, `transition-transform duration-300`
- Nav: `transition-colors duration-200`

## Do's
- Use generous whitespace between sections
- Large editorial images (full-bleed or 2/3 width)
- Thin 1px dividers, never thick borders
- Serif for all emotional/brand copy
- Sans for all functional/UI copy
- Gold accent used sparingly — only for primary CTAs and key highlights

## Don'ts
- No rounded corners on primary buttons (use sharp/square)
- No bright whites — use ivory/parchment instead
- No generic blue links
- No drop shadows on text
- No more than 2 accent colors visible at once
- No busy patterns or textures
