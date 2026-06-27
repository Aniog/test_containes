# Velmora Fine Jewelry — Design System

Quiet-luxury, editorial DTC jewelry storefront for women 25–45.

## Color Palette

Background Primary: `bg-cream` `#FDFBF8` — warm ivory, used for page canvas.
Background Secondary: `bg-taupe` `#F3EFE9` — soft sand, used for sections / cards.
Background Dark: `bg-espresso` `#1A1714` — near-black warm brown, used for nav overlay, footer, hero overlays.

Text Primary: `text-espresso` `#1A1714` — body, headings.
Text Secondary: `text-stone` `#6B6258` — muted captions, helper text.
Text Muted: `text-sand` `#A89F91` — placeholders, disabled.

Accent: `text-gold` / `bg-gold` `#B4862F` — antiqued warm gold. CTAs, links, hover states, stars.
Accent Hover: `#9A6F24` — slightly deeper gold.

Dividers: `border-warm` `#E5E0D8` — hairline rules.

### Usage rules
- Hero text on dark/image backgrounds uses `text-cream` for contrast.
- Buttons: solid gold (`bg-gold text-cream`) or outlined (`border-espresso text-espresso hover:bg-espresso hover:text-cream`).
- Cards sit on `bg-cream` or `bg-taupe`; text is always `text-espresso`.
- Strong contrast is required; never place muted text on muted backgrounds.

## Typography

Serif: `Playfair Display` (Google Fonts) — headings, product names, editorial quotes.
Sans: `Inter` — body, UI, navigation, price, buttons.

Product names: UPPERCASE, `tracking-[0.18em]`, `font-serif`, `text-sm` to `text-base`.
H1: `font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05]`.
H2: `font-serif text-3xl md:text-4xl lg:text-5xl font-medium`.
Body: `font-sans text-base leading-relaxed text-stone`.

## Spacing & Layout

- Generous whitespace; section vertical padding `py-16 md:py-24 lg:py-32`.
- Container max-width `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Hairline dividers `border-b border-warm`.
- Grid gaps `gap-4 md:gap-6 lg:gap-8`.

## Components

### Buttons
- Primary: `bg-gold text-cream px-8 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-gold-dark transition-colors duration-300`.
- Secondary / Outline: `border border-espresso text-espresso px-8 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-espresso hover:text-cream transition-colors duration-300`.

### Cards
- Product card: white/cream background, subtle shadow on hover, image swap on hover.
- Category tile: full image, dark gradient overlay on hover, centered uppercase label.

### Forms
- Inputs: `bg-transparent border-b border-warm focus:border-gold outline-none py-2 text-espresso placeholder:text-sand`.

## Animations
- Subtle hover transitions `duration-300` / `duration-500`.
- Cart drawer slides in from right `transform translate-x-full` to `translate-x-0`.
- Fade-ins optional with simple opacity transitions; avoid heavy motion.
