# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Formed.
- **Tone:** Elegant, professional, trustworthy, industrial yet refined

## Color Palette
All hex values are registered in Tailwind config as named tokens.

| Token | Hex | Usage |
|---|---|---|
| `brand-navy` | #0D1B2A | Primary dark background, headers |
| `brand-steel` | #1C3A5E | Secondary dark, nav bg |
| `brand-gold` | #C9A84C | Accent, CTAs, highlights |
| `brand-gold-light` | #E8C97A | Hover states for gold |
| `brand-silver` | #8FA3B1 | Muted text, borders |
| `brand-light` | #F4F6F9 | Light section backgrounds |
| `brand-white` | #FFFFFF | Card backgrounds, text on dark |

## Typography
- **Primary Font:** Montserrat (headings) — loaded via Google Fonts
- **Secondary Font:** Inter (body text)
- **Heading sizes:** text-5xl (hero), text-4xl (section), text-2xl (card), text-xl (sub)
- **Body:** text-base (16px), leading-relaxed
- **Uppercase tracking:** tracking-widest for labels and nav items

## Spacing & Layout
- Max content width: max-w-7xl mx-auto
- Section padding: py-20 px-6 (desktop), py-12 px-4 (mobile)
- Card padding: p-8
- Grid gaps: gap-8 (cards), gap-12 (sections)

## Component Styles

### Buttons
- **Primary CTA:** bg-brand-gold text-brand-navy font-semibold px-8 py-3 rounded-none uppercase tracking-widest hover:bg-brand-gold-light transition
- **Secondary/Outline:** border-2 border-brand-gold text-brand-gold px-8 py-3 rounded-none uppercase tracking-widest hover:bg-brand-gold hover:text-brand-navy transition

### Navigation
- bg-brand-navy/95 backdrop-blur sticky top-0 z-50
- Logo: text-brand-white font-bold text-xl tracking-widest
- Nav links: text-brand-silver hover:text-brand-gold uppercase tracking-widest text-sm

### Cards (Product Cards)
- bg-brand-white rounded-none border border-gray-200 shadow-lg
- Image top, content below with p-6
- Title: text-brand-navy font-bold text-xl
- Description: text-gray-600 text-sm

### Section Headers
- Eyebrow label: text-brand-gold uppercase tracking-widest text-sm font-semibold
- Main heading: text-brand-navy font-bold (light sections) / text-brand-white (dark sections)
- Divider: w-16 h-1 bg-brand-gold mx-auto mt-4

## Do's
- Use generous whitespace to convey premium quality
- Use brand-gold sparingly as a true accent color
- Use sharp corners (rounded-none) for an industrial, precise feel
- Use uppercase + wide tracking for labels and CTAs
- Maintain strong contrast: white text on dark, dark text on light

## Don'ts
- Don't use rounded-full or pill shapes on buttons
- Don't use more than 2 accent colors per section
- Don't use light gray text on white backgrounds (low contrast)
- Don't crowd sections — always use generous padding
