# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Formed.
- **Tone:** Elegant, authoritative, trustworthy, industrial-premium

## Color Palette
All hex values are registered in tailwind.config.js as named tokens.

| Token | Hex | Usage |
|---|---|---|
| `brand-navy` | #0D1B2A | Primary dark background, navbar |
| `brand-steel` | #1C3A5E | Secondary dark, section backgrounds |
| `brand-gold` | #C9A84C | Accent, CTAs, highlights |
| `brand-gold-light` | #E8C97A | Hover states, subtle accents |
| `brand-silver` | #8FA3B1 | Muted text, borders |
| `brand-light` | #F4F6F8 | Light section backgrounds |
| `brand-white` | #FFFFFF | Text on dark, card backgrounds |

## Typography
- **Font:** Montserrat (headings) + Inter (body) — loaded via Google Fonts in index.html
- **Heading scale:**
  - H1: `text-5xl md:text-7xl font-bold tracking-tight`
  - H2: `text-3xl md:text-4xl font-bold tracking-tight`
  - H3: `text-xl md:text-2xl font-semibold`
- **Body:** `text-base leading-relaxed`
- **Label/Caption:** `text-sm font-medium tracking-widest uppercase`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-6 md:px-12`
- Card gap: `gap-6 md:gap-8`

## Borders & Shadows
- Cards: `rounded-2xl shadow-lg`
- Accent border: `border border-brand-gold/30`
- Divider: `border-t border-brand-silver/20`

## Buttons
- Primary: `bg-brand-gold text-brand-navy font-semibold px-8 py-3 rounded-full hover:bg-brand-gold-light transition-all`
- Secondary (outline): `border-2 border-brand-gold text-brand-gold px-8 py-3 rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all`
- Ghost: `text-brand-silver hover:text-brand-white transition-colors`

## Do's
- Use generous whitespace to convey premium quality
- Use gold accents sparingly for maximum impact
- Pair dark navy backgrounds with white/silver text
- Use subtle gradients on hero sections
- Use uppercase tracking-widest for section labels

## Don'ts
- Don't use bright/neon colors
- Don't crowd elements — maintain breathing room
- Don't use more than 2 font weights per section
- Don't use low-contrast text on any background
