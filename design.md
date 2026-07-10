# Velmora Fine Jewelry — Design System

## Brand Essence
"Quiet luxury" — warm, editorial, premium demi-fine jewelry. Not loud, not discount-looking, not generic e-commerce.

## Color Palette

### Primary (Warm Cream)
- `--cream`: #FAF7F2 — page background, cards
- `--cream-dark`: #F0EBE3 — section alternates, input backgrounds

### Secondary (Warm Stone)
- `--stone`: #C8B99A — muted text, hairlines, dividers
- `--stone-dark`: #9C8A70 — secondary text, icons

### Accent (Rich Gold)
- `--gold`: #B8924A — CTAs, active states, highlights
- `--gold-light`: #D4AF6A — hover states, accents
- `--gold-dark`: #8B6F37 — pressed states

### Base (Deep Espresso)
- `--espresso`: #1C1510 — primary text, logo
- `--espresso-mid`: #3D3028 — headings, strong text
- `--espresso-light`: #5C4A3A — body text

### Surface
- `--white`: #FFFFFF — card backgrounds on light sections
- `--off-white`: #FDFCFA — nav on scroll, footer
- `--overlay`: rgba(28, 21, 16, 0.5) — modal overlays

## Typography

### Headings / Display
- Font: Cormorant Garamond (Google Fonts)
- Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold)
- Use for: brand logo, hero headlines, product names, section headings
- Product names: UPPERCASE with letter-spacing: 0.12em

### Body / UI
- Font: Inter (Google Fonts)
- Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold)
- Use for: body copy, nav links, buttons, labels, prices

### Scale
- Hero headline: 4rem–6rem, weight 300, italic
- Section heading: 2rem–3rem, weight 400
- Product name: 1rem, weight 500, uppercase, tracking 0.12em
- Body: 1rem / 1.125rem, weight 400
- Small/caption: 0.875rem, weight 400

## Spacing & Layout
- Base unit: 4px
- Section padding: 80px–120px vertical
- Container max-width: 1280px, padding 24px
- Card gap: 24px–32px
- Generous whitespace is a feature, not waste

## Motion & Transitions
- Hover transitions: 200ms ease, 300ms ease
- Fade-in on scroll: opacity 0→1, translateY 16px→0, 400ms
- Image scale on hover: scale(1.03), 400ms ease
- Button hover: background shift, subtle shadow
- No jarring or fast animations — everything is slow and intentional

## Shadows
- Card shadow (resting): 0 2px 8px rgba(28, 21, 16, 0.06)
- Card shadow (hover): 0 8px 32px rgba(28, 21, 16, 0.12)
- Modal shadow: 0 24px 64px rgba(28, 21, 16, 0.2)

## Borders & Dividers
- Hairline: 1px solid var(--stone) at 30% opacity
- Card border: 1px solid rgba(200, 185, 154, 0.2)
- Radius: 2px for buttons, 4px for cards, 0 for inputs

## Imagery
- Warm, editorial photography style
- Gold jewelry on dark espresso or warm cream backgrounds
- Generous image aspect ratios (3:2, 4:3, 16:9)
- UGC cards: 9:16 vertical, with soft caption overlay

## Component Patterns

### Buttons
- Primary: bg-gold, text-white, 2px radius, px-8 py-3, hover bg-gold-dark
- Secondary: border-gold, text-gold, transparent bg, hover bg-gold/5
- Ghost: text-stone-dark, hover text-espresso

### Cards
- White background, subtle border, hover shadow lift
- Product image with secondary image crossfade on hover
- Price in gold-dark, name in espresso-mid

### Inputs
- No border radius, 1px stone border, cream-dark background
- Focus: gold border, subtle gold shadow

### Accordions
- Minimal: no background, hairline top border
- Chevron rotates 180° on open

## Do's & Don'ts
✅ Warm, editorial, premium feel
✅ Generous whitespace
✅ Thin hairlines and restrained accents
✅ Subtle hover transitions
✅ UPPERCASE product names with letter-spacing
❌ No bright/neon colors
❌ No bold generic sans-serif headings
❌ No heavy drop shadows
❌ No discount/flash sale aesthetics
❌ No cluttered layouts
