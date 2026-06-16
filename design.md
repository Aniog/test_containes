# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Formed.
- **Tone:** Elegant, authoritative, trustworthy, user-friendly

## Color Palette
All hex values are registered in Tailwind config as named tokens.

| Token | Hex | Usage |
|---|---|---|
| `brand-navy` | #0D1B2A | Primary dark background, nav, footer |
| `brand-steel` | #1C3A5E | Secondary dark, section backgrounds |
| `brand-gold` | #C9A84C | Accent, CTAs, highlights |
| `brand-gold-light` | #E8C97A | Hover states, subtle accents |
| `brand-silver` | #8FA3B1 | Muted text, borders |
| `brand-light` | #F4F6F8 | Light section backgrounds |
| `brand-white` | #FFFFFF | Card backgrounds, text on dark |

## Typography
- **Primary Font:** Playfair Display (headings) — elegant serif
- **Secondary Font:** Inter (body, UI) — clean sans-serif
- **Heading sizes:** text-5xl / text-4xl / text-3xl / text-2xl
- **Body:** text-base (16px), leading-relaxed
- **Labels/Caps:** text-xs tracking-widest uppercase font-semibold

## Spacing & Layout
- Max content width: max-w-7xl mx-auto
- Section padding: py-20 px-6 md:px-12
- Card padding: p-8
- Gap between grid items: gap-8

## Components

### Buttons
- **Primary:** bg-brand-gold text-brand-navy font-semibold px-8 py-3 rounded-none hover:bg-brand-gold-light transition — sharp corners for industrial feel
- **Outline:** border-2 border-brand-gold text-brand-gold px-8 py-3 rounded-none hover:bg-brand-gold hover:text-brand-navy transition

### Cards
- bg-white shadow-lg border-t-4 border-brand-gold p-8
- Hover: shadow-xl translate-y-[-4px] transition

### Navigation
- bg-brand-navy text-white
- Logo: Playfair Display font-bold text-xl text-brand-gold
- Links: text-sm tracking-wide uppercase hover:text-brand-gold transition

### Section Headings
- Eyebrow label: text-brand-gold text-xs tracking-widest uppercase mb-3
- Main heading: Playfair Display text-4xl text-brand-navy (on light) or text-white (on dark)
- Divider: w-16 h-1 bg-brand-gold mt-4 mb-6

## Do's
- Use sharp (rounded-none) corners for buttons and cards to reinforce industrial precision
- Use generous whitespace to feel premium
- Use gold accents sparingly for maximum impact
- Pair dark navy sections with light sections for visual rhythm
- Use uppercase tracking-widest for labels and nav items

## Don'ts
- Don't use rounded-full or pill shapes on primary CTAs
- Don't use more than 2 accent colors per section
- Don't use light gray text on white backgrounds (low contrast)
- Don't crowd sections — maintain breathing room
