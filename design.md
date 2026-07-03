# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Not loud, not discount-looking, not generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color.

## Color Palette
- `ivory` #FAF7F2 — primary page background, soft warm white
- `cream` #F2EBE0 — secondary surface, cards, sections
- `sand` #E5DCCB — borders, dividers, muted surfaces
- `taupe` #A89B86 — muted text, secondary labels
- `cocoa` #6B5D4F — body text
- `espresso` #2B2420 — headings, primary dark text
- `espresso-bg` #1F1A16 — dark sections (newsletter, footer)
- `gold` #B8956A — primary accent, buttons, highlights
- `gold-deep` #9A7A52 — hover state for gold

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400-600
- Body & UI: **Inter** (sans-serif), weights 300-600
- Product names: UPPERCASE with wide letter-spacing (tracking-[0.12em] to 0.2em)
- Section eyebrows: text-xs tracking-[0.3em] uppercase, gold color

## Components
- Buttons: solid gold (bg-gold text-cream) or outlined (border-espresso text-espresso). Uppercase, tracking-[0.25em], text-xs. No rounded corners (sharp/editorial) or very subtle.
- Cards: bg-cream or bg-ivory, border-sand, subtle shadow on hover
- Dividers: 1px hairline, border-sand
- Inputs: transparent bg, bottom border only, focus border-gold

## Motion
- Hover transitions: 300-500ms, color/transform/opacity
- Image hover: scale-105 over 700ms
- Subtle, never bouncy. Easing: ease-out default.

## Do's
- Use generous whitespace (py-20 md:py-28 for sections)
- Use serif for all headings and product names
- Keep accent (gold) restrained — buttons, eyebrows, small highlights only
- Ensure strong contrast: espresso on ivory, cream on espresso-bg

## Don'ts
- Don't use rounded-full on buttons (editorial = sharp edges)
- Don't use bright/saturated colors
- Don't use heavy shadows — keep them soft and subtle
- Don't use generic e-commerce patterns (no sale badges in red, no loud CTAs)
