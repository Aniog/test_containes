# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name**: ARTITECT MACHINERY
- **Tagline**: Precision Engineered. Perfectly Formed.
- **Tone**: Authoritative, precise, trustworthy, modern industrial

## Color Palette
All hex values are registered in tailwind.config.js as named tokens.

| Token         | Hex       | Usage                                      |
|---------------|-----------|--------------------------------------------|
| `brand-navy`  | #0D1B2A   | Primary dark background, headings          |
| `brand-steel` | #1C3A5E   | Secondary dark, nav background             |
| `brand-gold`  | #C9A84C   | Accent, CTA buttons, highlights            |
| `brand-gold-light` | #E8C96A | Hover state for gold                  |
| `brand-silver`| #8A9BB0   | Muted text, borders, dividers              |
| `brand-light` | #F4F6F9   | Light section backgrounds                  |
| `brand-white` | #FFFFFF   | Card backgrounds, text on dark             |

## Typography
- **Font**: Montserrat (headings) + Inter (body) — loaded via Google Fonts
- **Heading scale**: text-4xl / text-5xl / text-6xl with font-bold or font-extrabold
- **Body**: text-base / text-lg, font-normal, leading-relaxed
- **Labels/Caps**: text-xs tracking-widest uppercase font-semibold

## Spacing
- Section padding: `py-20 px-6` or `py-24 px-8`
- Card padding: `p-8`
- Gap between grid items: `gap-8`

## Borders & Shadows
- Cards: `rounded-2xl shadow-lg border border-brand-silver/20`
- Buttons: `rounded-full` for primary CTAs, `rounded-lg` for secondary
- Dividers: `border-brand-silver/30`

## Buttons
- **Primary**: `bg-brand-gold text-brand-navy font-semibold rounded-full px-8 py-3 hover:bg-brand-gold-light transition`
- **Secondary/Outline**: `border border-brand-gold text-brand-gold rounded-full px-8 py-3 hover:bg-brand-gold hover:text-brand-navy transition`
- **Ghost**: `text-brand-silver hover:text-brand-white transition`

## Do's
- Use dark navy/steel backgrounds for hero and feature sections
- Use light (`brand-light`) backgrounds for product cards and alternating sections
- Always pair gold accents with navy/dark backgrounds for contrast
- Use generous whitespace between sections
- Use uppercase tracking-widest for section labels/eyebrows

## Don'ts
- Never use gold text on white/light backgrounds (low contrast)
- Never use small font sizes for product names
- Avoid cluttered layouts — keep each section focused
- Do not use more than 2 accent colors per section
