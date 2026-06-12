# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Folded.
- **Tone:** Elegant, professional, trustworthy, industrial yet refined

## Color Palette
All hex values are registered in Tailwind config as named tokens.

| Token | Hex | Usage |
|---|---|---|
| `brand-navy` | #0D1B2A | Primary dark background, navbar |
| `brand-steel` | #1C3A5E | Secondary dark, section backgrounds |
| `brand-gold` | #C9A84C | Accent, CTAs, highlights |
| `brand-gold-light` | #E8C97A | Hover states, subtle accents |
| `brand-silver` | #8FA3B1 | Muted text, borders |
| `brand-light` | #F4F6F8 | Light section backgrounds |
| `brand-white` | #FFFFFF | Card backgrounds, text on dark |

## Typography
- **Primary Font:** Playfair Display (headings) — elegant serif
- **Secondary Font:** Inter (body, UI) — clean sans-serif
- **Heading sizes:** text-5xl (hero), text-4xl (section), text-2xl (card), text-xl (sub)
- **Body:** text-base (16px), leading-relaxed
- **Uppercase tracking:** tracking-widest for labels and nav items

## Spacing & Layout
- Max content width: max-w-7xl mx-auto
- Section padding: py-20 px-6 (desktop), py-12 px-4 (mobile)
- Card padding: p-8
- Grid gaps: gap-8 (cards), gap-12 (sections)

## Component Styles

### Navbar
- Background: bg-brand-navy
- Text: text-white, uppercase tracking-widest text-sm
- Logo: text-brand-gold font-playfair font-bold text-xl
- Sticky with subtle shadow on scroll

### Buttons
- Primary: bg-brand-gold text-brand-navy font-semibold px-8 py-3 hover:bg-brand-gold-light transition
- Secondary: border border-brand-gold text-brand-gold px-8 py-3 hover:bg-brand-gold hover:text-brand-navy transition
- No border-radius extremes — use rounded-sm or rounded

### Cards
- Background: bg-white
- Shadow: shadow-lg hover:shadow-xl transition
- Border: border border-gray-100
- Image top, content below with generous padding

### Section Dividers
- Alternating: bg-brand-navy (dark) and bg-brand-light (light)
- Thin gold accent line: border-t-2 border-brand-gold

## Do's
- Use Playfair Display for all headings
- Use gold accents sparingly for maximum impact
- Maintain generous whitespace
- Use subtle hover transitions (duration-300)
- Keep text on dark backgrounds white or brand-silver
- Use uppercase + letter-spacing for labels and nav

## Don'ts
- Don't use bright/neon colors
- Don't crowd elements — whitespace is key
- Don't use rounded-full on rectangular elements
- Don't use low-contrast text (e.g. gray on white for body)
- Don't mix too many font weights
