# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury. Warm, editorial, premium-but-accessible. Demi-fine gold jewelry.
Anti-loud, anti-discount, anti-generic-e-commerce.

## Color Palette (commit to this — use everywhere)

### Base
- `cream`     `#F6F1EA`  — page background (warm ivory)
- `ivory`     `#FAF6F0`  — elevated surfaces (cards, drawers, modals)
- `sand`      `#EFE6D8`  — soft alt sections, divider tints
- `line`      `#E3D9CC`  — hairlines, borders on cream

### Deep (text & dark sections)
- `espresso`  `#1F1A17`  — primary text on cream, deep sections
- `cocoa`     `#2B2520`  — secondary deep, soft cards
- `smoke`     `#3D352E`  — muted deep text
- `ash`       `#6B6259`  — captions, helper text on cream

### Accent (warm metallic)
- `gold`      `#B8893A`  — primary accent, CTA fill, links, icons
- `gold-deep` `#8C6428`  — hover state for gold
- `gold-soft` `#E8D7B5`  — tint backgrounds, badge fills

### Contrast rules
- Body text on cream: espresso (≥ 12.8:1)
- Muted text on cream: ash (≥ 4.8:1) — use only for non-critical copy
- Text on gold: ivory or espresso (NEVER gold-on-gold)
- Text on espresso: ivory (NEVER cream-on-cream)
- Buttons: solid gold fill + espresso text, or outlined on cream with espresso text

## Typography

### Headings / display / product names
- Family: **Cormorant Garamond** (Google Fonts)
- Weights: 300, 400, 500
- Product names: UPPERCASE, letter-spacing 0.18em–0.22em, weight 400–500
- Headlines (h1 hero): 64–96px desktop, 40–56px mobile
- Section h2: 36–48px desktop, 28–32px mobile
- Product card title: 13–15px, uppercase, tracked

### Body / UI
- Family: **Inter** (Google Fonts)
- Weights: 300, 400, 500, 600
- Body: 15–16px, line-height 1.65
- Small/caption: 12–13px, letter-spacing 0.04em

## Spacing & Layout
- Container max width: 1280px (homepage editorial), 1100px (shop), 1180px (product)
- Section vertical rhythm: 96px desktop, 64px mobile
- Generous whitespace. No crowded sections.

## Buttons
- **Primary (gold solid)**: bg-gold text-espresso, hover bg-gold-deep, no border, subtle shadow
- **Secondary (outlined on cream)**: border-espresso/20 text-espresso, hover bg-espresso hover:text-ivory
- **Ghost / nav link**: text-espresso, hover gold underline 1px
- Radius: 2px (sharp, premium) — avoid pill-shaped for primary CTAs. Quantity steppers may be pill.
- Padding: 14px 28px desktop, 12px 22px mobile
- Letter-spacing 0.12em on labels, UPPERCASE for primary CTAs

## Cards / Surfaces
- 0–2px subtle shadow, no hard borders on cream-on-cream cards
- Hairline border `1px line` only where structural (forms, accordions, filter sidebar)
- Product cards: ivory bg, image on cream/line bg, no border, hover shows second image + small dark overlay with quick "Add to Cart"

## Hairlines
- `1px` on `line` color, used as section dividers, navbar bottom, footer top, accordion borders
- Never use thicker rules — quiet luxury = thin.

## Imagery Direction
- Warm-lit close-ups of gold jewelry on deep neutral or warm skin-tone backgrounds
- Generous crop, no busy scenes. Editorial / magazine feel.
- Product images: 4:5 portrait, jewelry centered on warm dark gradient
- Hero: 16:9 editorial, model wearing gold in warm light
- Reels: 9:16 vertical, ear/neck close-up

## Iconography
- Lucide React, 1.5 stroke width, 20–24px nav, 16–18px inline
- Icon color: espresso (on cream) or ivory (on espresso)

## Motion
- Subtle, slow. 300–500ms ease-out for hovers & reveals.
- Navbar: transparent at top, fade to ivory on scroll past 80px.
- Product card hover: image cross-fade + small dark "Add to Cart" overlay slide-up.
- Drawer: slide-in 320ms cubic-bezier.
- No bouncy springs. Restrained.

## Do's and Don'ts
- DO use serif for product names, headlines, and editorial copy
- DO use thin gold accents — never big gold blocks or loud gradients
- DO use hairline dividers between sections
- DO test mobile first; most traffic is mobile
- DON'T use bright primary colors, neon, or busy patterns
- DON'T use multiple typefaces; stick to Cormorant + Inter
- DON'T use heavy drop shadows or saturated filters
- DON'T use emoji or playful icons
- DON'T use rounded-pill primary CTAs
- DON'T use gold text on gold backgrounds

## File usage rules
- All hex values are tokenized in `tailwind.config.js` under the `velmora` color namespace
- Reference by class (e.g. `bg-cream`, `text-espresso`, `border-line`)
- Never hardcode hex in component class strings
