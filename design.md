# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Formed.
- **Tone:** Authoritative, precise, trustworthy, modern industrial

## Color Palette
All hex values are registered in Tailwind config as named tokens.

| Token | Hex | Usage |
|---|---|---|
| `navy` | #0D1B2A | Primary dark background, nav |
| `steel` | #1C3A5E | Secondary dark, section backgrounds |
| `gold` | #C9A84C | Accent, CTAs, highlights |
| `gold-light` | #E8C97A | Hover states, subtle accents |
| `silver` | #8FA3B1 | Muted text, borders |
| `offwhite` | #F4F6F8 | Light section backgrounds |
| `white` | #FFFFFF | Text on dark, card backgrounds |

## Typography
- **Font:** Montserrat (headings) + Inter (body) — loaded via Google Fonts in index.html
- **Heading scale:** text-5xl / text-4xl / text-3xl / text-2xl / text-xl
- **Body:** text-base (16px), leading-relaxed
- **Tracking:** tracking-widest for labels/badges, tracking-tight for large headings

## Spacing & Layout
- Max content width: max-w-7xl mx-auto px-6 lg:px-12
- Section vertical padding: py-20 lg:py-28
- Card padding: p-8
- Border radius: rounded-2xl for cards, rounded-full for pills/badges

## Component Styles

### Buttons
- **Primary:** bg-gold text-navy font-semibold px-8 py-3 rounded-full hover:bg-gold-light transition
- **Outline:** border-2 border-gold text-gold px-8 py-3 rounded-full hover:bg-gold hover:text-navy transition
- **Ghost:** text-silver hover:text-white transition

### Cards
- bg-white rounded-2xl shadow-lg p-8 border border-gray-100
- Dark variant: bg-steel rounded-2xl p-8 border border-white/10

### Navigation
- bg-navy/95 backdrop-blur sticky top-0 z-50
- Logo: text-white font-bold tracking-widest uppercase
- Links: text-silver hover:text-gold transition text-sm tracking-wide uppercase

### Section Headers
- Eyebrow label: text-gold text-xs font-semibold tracking-widest uppercase mb-3
- Heading: text-navy (light bg) or text-white (dark bg), font-bold
- Subtext: text-silver or text-gray-600

## Do's
- Use generous whitespace between sections
- Use gold accents sparingly for maximum impact
- Maintain strong contrast: white text on dark, dark text on light
- Use subtle gradients on hero and dark sections
- Use border-white/10 for dividers on dark backgrounds

## Don'ts
- Don't use gold as a background for large areas
- Don't use low-contrast text (e.g. silver on white)
- Don't use rounded corners smaller than rounded-xl on cards
- Don't stack more than 2 font weights in one section
