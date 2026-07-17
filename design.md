# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Formed.
- **Tone:** Professional, trustworthy, industrial yet refined

## Color Palette
All hex values are registered in tailwind.config.js as named tokens.

| Token | Hex | Usage |
|---|---|---|
| `brand-navy` | #0D1B2A | Primary dark background, headers |
| `brand-steel` | #1C3A5E | Secondary dark, nav bg |
| `brand-gold` | #C9A84C | Accent, CTAs, highlights |
| `brand-gold-light` | #E8C97A | Hover states for gold |
| `brand-silver` | #8FA3B1 | Muted text, borders |
| `brand-light` | #F4F6F8 | Page background |
| `brand-white` | #FFFFFF | Card backgrounds, text on dark |

## Typography
- **Heading font:** Playfair Display (serif) — elegant, authoritative
- **Body font:** Inter (sans-serif) — clean, readable
- Import both from Google Fonts in index.html

### Scale
- `text-xs` — captions, labels
- `text-sm` — body secondary
- `text-base` — body primary
- `text-lg` — lead text
- `text-xl` / `text-2xl` — section subheadings
- `text-3xl` / `text-4xl` — section headings
- `text-5xl` / `text-6xl` — hero headings

## Spacing
- Section padding: `py-20 px-6` (desktop), `py-12 px-4` (mobile)
- Card padding: `p-8`
- Gap between cards: `gap-8`

## Borders & Shadows
- Cards: `rounded-2xl shadow-lg border border-brand-silver/20`
- Buttons: `rounded-full` for primary, `rounded-lg` for secondary
- Dividers: `border-brand-silver/30`

## Component Styles

### Primary Button
`bg-brand-gold text-brand-navy font-semibold px-8 py-3 rounded-full hover:bg-brand-gold-light transition-all duration-300`

### Secondary Button (outline)
`border-2 border-brand-gold text-brand-gold px-8 py-3 rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all duration-300`

### Section Heading
`font-playfair text-3xl md:text-4xl font-bold text-brand-navy`

### Card
`bg-white rounded-2xl shadow-lg border border-brand-silver/20 p-8 hover:shadow-xl transition-shadow duration-300`

## Do's
- Use Playfair Display for all headings
- Use gold accents sparingly for maximum impact
- Maintain generous whitespace
- Use dark navy sections to break up light content
- Keep imagery industrial but clean

## Don'ts
- Don't use pure black (#000) — use brand-navy instead
- Don't mix too many accent colors
- Don't crowd elements — spacing is key to elegance
- Don't use small font sizes for body text (min text-base)
