# SSourcing China — Visual Design System

## Brand Positioning
Professional B2B sourcing agent. Trustworthy, international, practical. The visual language signals "established global trade partner" — not flashy marketplace, not cheap discount site. Comparable tone to McKinsey meets Alibaba Gold Supplier meets FlexPort.

## Color Palette

### Primary (Brand Navy — trust, authority)
- `navy-900` `#0A2540` — headings, dark sections
- `navy-800` `#0F3057` — hover states
- `navy-700` `#163C6B` — secondary text on light

### Accent (Action Blue — CTAs, links)
- `brand-600` `#1E5BFF` — primary CTA
- `brand-700` `#1747CC` — primary CTA hover
- `brand-50`  `#EEF3FF` — light tint backgrounds

### Accent (China Heritage — restrained, single-purpose)
- `crimson-600` `#C8102E` — used ONLY for the China map accent / small "China-based" badges. Never for CTAs.

### Neutrals
- `ink-900` `#0F172A` — body text
- `ink-700` `#334155` — secondary text
- `ink-500` `#64748B` — tertiary / metadata
- `ink-400` `#94A3B8` — disabled, placeholders
- `ink-300` `#CBD5E1` — borders
- `ink-200` `#E2E8F0` — dividers
- `ink-100` `#F1F5F9` — subtle bg
- `ink-50`  `#F8FAFC` — page bg
- `white`   `#FFFFFF` — cards

### Status
- `success-600` `#16A34A`
- `warning-600` `#D97706`
- `danger-600`  `#DC2626`

## Typography

- Font family: **Inter** (loaded from Google Fonts in `index.html`).
- Headings: 600–700 weight, tight tracking (`-0.01em`).
- Body: 400 weight, 1.6 line-height.
- Type scale (Tailwind defaults, used selectively):
  - `text-xs` (12px) — meta / eyebrow labels, uppercase, letter-spacing 0.08em
  - `text-sm` (14px) — small body, table cells
  - `text-base` (16px) — default body
  - `text-lg` (18px) — lead paragraph
  - `text-xl` (20px) — small headings, card titles
  - `text-2xl` (24px) — section sub-headings
  - `text-3xl`/`4xl` (30/36px) — section headings
  - `text-5xl`/`6xl` (48/60px) — hero headline

## Layout & Spacing

- Max content width: `max-w-7xl` (1280px). Inner reading width `max-w-3xl`.
- Section vertical padding: `py-20 md:py-28` for primary sections, `py-12 md:py-16` for inner blocks.
- Container horizontal padding: `px-6 md:px-8`.
- 12-column grid for major sections; cards in `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` (or 4) with `gap-6`.
- Radii: `rounded-lg` (8px) for cards & inputs, `rounded-md` (6px) for buttons, `rounded-xl` (12px) for feature tiles, `rounded-2xl` (16px) for hero image cards.

## Visual Style

- **No heavy gradients.** Use flat color blocks for authority. Subtle `bg-gradient-to-b from-white to-ink-50` is OK.
- **Cards:** white background, `border border-ink-200`, `shadow-sm`, `rounded-lg`. On hover: `shadow-md`, `border-ink-300`.
- **Buttons (primary):** `bg-brand-600 text-white rounded-md px-5 py-2.5 font-semibold hover:bg-brand-700`.
- **Buttons (secondary):** `border border-ink-300 text-ink-900 hover:border-ink-400 bg-white`.
- **Section eyebrows:** uppercase, `text-xs font-semibold tracking-widest text-brand-600`.
- **Hairline dividers:** `border-t border-ink-200`.
- **Icons:** Lucide React, `strokeWidth={1.75}` (slightly thinner for elegance).

## Trust & Credibility Cues

- Always use real-feeling numbers ("12+ years", "1,200+ supplier audits", "60+ countries").
- Show badges row near hero (Alibaba / Made-in-China / ISO mention — text only, not fake logos).
- "Based in Ningbo & Yiwu" callouts — concrete cities, not "China".
- Quote cards use ink-900 background with white text.

## Photography Style (via stock images)

Use the `data-strk-img` system for:
- Hero: wide shot of a Chinese industrial port / container yard at golden hour (16x9, 1600w)
- Services: factory floor with QC inspector (3x2, 800w)
- Shipping: aerial container port (3x2, 800w)
- Case studies: small product or warehouse shots (3x2, 600w)
- Blog: editorial / abstract (3x2, 600w)
No people in stock photos unless clearly "factory worker" with PPE — avoid stock-photo smiles.

## Do's

- Use semantic, restrained UI. Whitespace is premium.
- Keep copy concrete: numbers, cities, certifications, real product categories.
- Use ink-900 for body text on light; white for body text on navy-900.
- Section transitions: alternate `bg-white` and `bg-ink-50`.

## Don'ts

- No emoji in headings or body copy.
- No crimson red outside of single "China-based" badge accents.
- No animated carousels, no parallax, no aggressive gradients.
- No stock-photo people shaking hands.
- No "10,000+ verified suppliers" type unverifiable claims.
