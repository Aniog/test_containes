# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Folded.
- **Tone:** Elegant, professional, trustworthy, industrial precision

## Color Palette
All hex values are registered in Tailwind config as named tokens.

| Token | Hex | Usage |
|---|---|---|
| `brand-navy` | #0D1B2A | Primary dark background, headers |
| `brand-steel` | #1C3A5E | Secondary dark, nav bg |
| `brand-gold` | #C9A84C | Accent, CTA buttons, highlights |
| `brand-gold-light` | #E8C97A | Hover states for gold |
| `brand-silver` | #8FA3B1 | Muted text, borders |
| `brand-light` | #F4F6F8 | Light section backgrounds |
| `brand-white` | #FFFFFF | Card backgrounds, text on dark |

## Typography
- **Font Family:** Inter (Google Fonts)
- **Headings:** font-bold or font-extrabold, tracking-tight
- **Body:** font-normal, leading-relaxed
- **Labels/Caps:** font-semibold, tracking-widest, uppercase, text-sm

### Scale
- Hero H1: `text-5xl md:text-7xl font-extrabold`
- Section H2: `text-3xl md:text-4xl font-bold`
- Card H3: `text-xl font-semibold`
- Body: `text-base leading-relaxed`
- Small/Label: `text-sm font-semibold tracking-widest uppercase`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-6 md:px-12`
- Card padding: `p-8`
- Gap between cards: `gap-8`

## Borders & Shadows
- Cards: `rounded-2xl shadow-lg`
- Buttons: `rounded-full`
- Dividers: `border-brand-silver/30`
- Subtle card border: `border border-brand-silver/20`

## Buttons
- **Primary CTA:** `bg-brand-gold text-brand-navy font-bold rounded-full px-8 py-3 hover:bg-brand-gold-light transition`
- **Secondary/Outline:** `border-2 border-brand-gold text-brand-gold rounded-full px-8 py-3 hover:bg-brand-gold hover:text-brand-navy transition`
- **Ghost/Nav:** `text-brand-silver hover:text-brand-white transition`

## Component Patterns
- Navigation: sticky top, dark navy bg, gold logo accent
- Hero: full-height, dark overlay on background image, centered content
- Section headers: small uppercase label above main heading
- Product cards: image top, content below, gold accent on hover
- Feature icons: gold icon on dark card
- Contact form: clean white card on light bg

## Do's
- Use generous whitespace between sections
- Use gold sparingly as a true accent color
- Keep text on dark backgrounds white or brand-silver
- Use uppercase tracking-widest labels for section identifiers
- Animate hover states with `transition-all duration-300`

## Don'ts
- Don't use gold as a background for large areas
- Don't use dark text on dark backgrounds
- Don't crowd elements — maintain breathing room
- Don't use more than 2 font weights per section
