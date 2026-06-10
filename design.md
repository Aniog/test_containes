# ARTITECT MACHINERY — Visual Style Guide

## Brand Essence
Premium, precision-engineered industrial sheet-metal folding machines.
The site should feel like a luxury watchmaker's catalog applied to heavy
manufacturing equipment: confident, calm, refined, and trustworthy.

## Color Palette
- **Ink (primary surface / dark sections)**: `#0f1722` (deep navy-charcoal)
- **Ink Soft**: `#1c2a3a` (slightly lighter charcoal for layering)
- **Brass (accent / brand)**: `#c9a96a` (warm, premium gold-bronze)
- **Brass Light**: `#e2c896` (hover / highlight)
- **Bone (light surface)**: `#f6f2ea` (warm off-white)
- **Paper**: `#ffffff` (cards, modal surfaces)
- **Slate-700 / 600 / 500**: body and supporting text on light surfaces
- **Slate-300 / 400**: secondary text on dark surfaces

Tokens (extend Tailwind):
- `ink` => `#0f1722`
- `ink-soft` => `#1c2a3a`
- `brass` => `#c9a96a`
- `brass-light` => `#e2c896`
- `bone` => `#f6f2ea`

## Typography
- **Display / Headings**: Cormorant Garamond (serif, elegant, premium feel) — load via Google Fonts in `index.html`.
- **Body / UI**: Inter (clean, user-friendly readability) — already loaded.
- **Numerics / Specs**: Inter with `tabular-nums` and slightly looser tracking.

Hierarchy:
- H1: 4xl–6xl, font-weight 500, tight leading, serif
- H2: 3xl–4xl, font-weight 500, serif
- H3: xl–2xl, font-weight 600, sans
- Body: base/lg, 1.6 line-height, slate-700
- Eyebrow: uppercase, tracking-[0.3em], text-xs, brass

## Layout & Spacing
- Container max width: 1280px, generous horizontal padding.
- Section vertical padding: `py-20 md:py-28` for hero/key sections, `py-16` for supporting sections.
- Use a 12-col grid; most content sits in 8-col to keep generous side margins.
- Use `rounded-none` for buttons and cards (industrial precision, not playful).
- Card borders: 1px hairline `border-slate-200` on light, `border-white/10` on dark.
- Subtle dividers: 1px brass at low opacity for premium accents.

## Components
- **Buttons**
  - Primary: `bg-ink text-bone hover:bg-ink-soft` with `tracking-wide uppercase text-xs`
  - Accent: `bg-brass text-ink hover:bg-brass-light`
  - Outline (on dark): `border border-brass/60 text-brass hover:bg-brass hover:text-ink`
  - All buttons: `rounded-none px-7 py-3.5`, transition 200ms
- **Nav**: Sticky, transparent on hero, becomes `bg-ink/95 backdrop-blur` after scroll.
- **Cards (product/spec)**: white paper, hairline border, generous padding (p-8), subtle hover lift.
- **Section eyebrow + line**: small brass line + uppercase eyebrow text above headings.

## Imagery
- Use stock-image tagging (`data-strk-img`) for hero, product hero shots, factory, and operator imagery.
- Imagery should be moody, well-lit industrial photography — clean factory floors, metallic surfaces, close-ups of precision parts.
- Always overlay `bg-ink/40–60` on hero backgrounds for legibility.

## Iconography
- Lucide React. Stroke width 1.5 for a refined feel. Brass or slate color, never bright primary.

## Motion
- Subtle: `transition-all duration-300` on hover.
- Reveal-on-scroll using `IntersectionObserver` for headings and product cards (fade + 8px translate).
- No parallax, no flashy animation — this is industrial, not consumer.

## Do's
- Generous whitespace
- Hairline borders, not thick borders
- Serif headlines, sans body
- Brass used sparingly as a highlight, not as a flood
- Show technical specs as a key feature, not buried
- Clear, single primary CTA per section

## Don'ts
- No gradients on large surfaces (use solid ink/ink-soft)
- No emoji or playful illustrations
- No more than two typefaces
- No drop-shadows on cards (use hairline borders)
- No bright primary colors (red, blue, green as fills)
