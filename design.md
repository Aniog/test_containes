# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury. Warm, editorial, understated. Premium demi-fine jewelry for women 25–45. Nothing loud, nothing discount-like. Generous whitespace, thin hairline dividers, large warm imagery, restrained gold accents.

## Color Palette (light editorial + warm gold accent)
Commit to ONE direction: a soft ivory/cream editorial base with deep espresso text and a single refined gold accent. Dark sections (newsletter, footer) use espresso with cream text.

Named Tailwind colors (added to tailwind.config.js):

| Token | Hex | Usage |
|---|---|---|
| `cream` | #FAF7F1 | Page background, light surfaces |
| `ivory` | #F3EDE2 | Alt section background, card fills |
| `sand` | #E8DFCF | Subtle borders on cream, hover fills |
| `espresso` | #2B2118 | Primary text, dark surfaces, solid buttons |
| `cocoa` | #4A3B2C | Secondary emphasis text |
| `taupe` | #8C7A63 | Muted text, captions, metadata |
| `gold` | #B08D57 | Accent: CTAs, links on hover, prices, stars, dividers |
| `gold-deep` | #96754A | Accent hover state |
| `blush` | #E9DCC8 | Soft highlight washes behind imagery |

### Rules
- Body text: `text-espresso` on `bg-cream`. Never pure black (#000) or pure white (#fff).
- Muted/meta text: `text-taupe`. Must remain readable — minimum font size 12px, never below contrast 4.5:1 on its background.
- Dark surfaces (`bg-espresso`): text `text-cream`, muted text `text-cream/70`.
- Accent `gold` is used sparingly: buttons, star ratings, small labels, hover states, newsletter block. Never large gold backgrounds behind body text.
- Hairline dividers: `border-espresso/10` on light, `border-cream/15` on dark.

## Typography
Fonts loaded in index.html via Google Fonts:
- Headings / product names / logo: **Cormorant Garamond** (serif), weights 400–600. Tailwind: `font-serif`.
- Body / UI / buttons / nav: **Inter** (sans), weights 300–600. Tailwind: `font-sans`.

### Type rules
- Hero headline: `font-serif`, light weight, `tracking-tight`, sizes `text-5xl md:text-7xl`.
- Section titles: `font-serif`, `text-3xl md:text-5xl`, normal case, often italic accent word.
- Product names: `font-sans`, UPPERCASE, `tracking-[0.18em]`, `text-xs md:text-sm`, `font-medium`.
- Eyebrow labels (above section titles): `font-sans`, UPPERCASE, `tracking-[0.3em]`, `text-[11px]`, `text-gold`, `font-medium`.
- Body copy: `text-taupe`, `leading-relaxed`, `text-sm md:text-base`.
- Buttons: `font-sans`, UPPERCASE, `tracking-[0.2em]`, `text-xs`, `font-medium`.

## Spacing & Layout
- Section padding: `py-16 md:py-28`. Generous whitespace everywhere.
- Page container: `max-w-7xl mx-auto px-5 md:px-8`.
- Editorial container (story text): `max-w-xl`.
- Grids: products `grid-cols-2 lg:grid-cols-4` (mobile-first, 2-up on phones), gap `gap-4 md:gap-8`.

## Components
### Buttons
- Primary (accent): `bg-gold text-cream hover:bg-gold-deep`, uppercase tracking, `px-8 py-4`, no rounded corners (`rounded-none`) for editorial sharpness, subtle `transition-colors duration-300`.
- Secondary (outline): `border border-espresso/30 text-espresso hover:bg-espresso hover:text-cream`.
- On dark: `bg-cream text-espresso hover:bg-sand` or `border-cream/40`.

### Cards
- Product cards: no visible card chrome — image on `bg-ivory`, text below left-aligned. Hover: second image cross-fade + "Add to Cart" bar slides up from image bottom.
- No heavy shadows. Soft shadow only on drawers/overlays: `shadow-[0_20px_60px_rgba(43,33,24,0.15)]`.

### Dividers & details
- Hairlines: `<hr className="border-espresso/10" />`.
- Stars: filled gold, `w-3.5 h-3.5`.
- Icons: Lucide, `w-5 h-5`, `strokeWidth={1.5}` for refined thin strokes.

## Motion
- Subtle only: `transition-all duration-300 md:duration-500`, `ease-out`.
- Image hover: gentle `scale-105` over 700ms.
- Reveal on scroll: fade + translate-y-6, 700ms.
- Cart drawer: slide-in from right, backdrop fade.

## Do / Don't
- DO use hairline dividers, generous padding, uppercase micro-labels, serif italics for accent words.
- DO keep contrast strong: espresso on cream, cream on espresso, gold only for small accents or large headlines.
- DON'T use bright/saturated colors, pill-shaped rainbow badges, drop shadows on every card, or dense layouts.
- DON'T use rounded-full everywhere; buttons are square/rectangular for editorial feel.
- DON'T use gray-500-style low-contrast text; muted text is `taupe` (#8C7A63) on cream minimum.
