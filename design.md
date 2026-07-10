# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Formed.
- **Industry:** Sheet Metal Fabrication Machinery
- **Tone:** Elegant, authoritative, trustworthy, user-friendly

## Color Palette

### Primary Colors
- `brand-navy`: #0D1B2A — Deep navy, primary brand color (backgrounds, headers)
- `brand-steel`: #1C3A5E — Steel blue, secondary brand color (sections, cards)
- `brand-gold`: #C9A84C — Warm gold, accent/highlight color (CTAs, borders, icons)
- `brand-gold-light`: #E8C97A — Light gold for hover states

### Neutral Colors
- `brand-white`: #F8F9FA — Off-white for text on dark backgrounds
- `brand-light`: #EEF1F5 — Light gray for light section backgrounds
- `brand-muted`: #8A9BB0 — Muted blue-gray for secondary text
- `brand-dark`: #060E18 — Near-black for deep backgrounds

## Typography

### Fonts
- **Headings:** Playfair Display (serif) — elegant, authoritative
- **Body:** Inter (sans-serif) — clean, readable, user-friendly
- **Accent/Labels:** Inter 600 uppercase tracking-widest

### Scale
- Hero heading: `text-5xl md:text-7xl font-bold` (Playfair Display)
- Section heading: `text-3xl md:text-4xl font-bold` (Playfair Display)
- Card heading: `text-xl font-semibold` (Inter)
- Body: `text-base` (Inter)
- Label/Caption: `text-sm uppercase tracking-widest font-semibold`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-6 lg:px-8`
- Section padding: `py-20 md:py-28`
- Card padding: `p-8`
- Border radius: `rounded-2xl` for cards, `rounded-full` for pills/badges

## Component Styles

### Buttons
- **Primary CTA:** `bg-brand-gold text-brand-navy font-semibold px-8 py-3 rounded-full hover:bg-brand-gold-light transition-all`
- **Secondary/Outline:** `border-2 border-brand-gold text-brand-gold px-8 py-3 rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all`
- **Ghost (dark bg):** `text-brand-white border border-brand-white/30 px-6 py-2 rounded-full hover:border-brand-gold hover:text-brand-gold`

### Cards
- Dark variant: `bg-brand-steel rounded-2xl p-8 border border-brand-gold/20 hover:border-brand-gold/50 transition-all`
- Light variant: `bg-white rounded-2xl p-8 shadow-lg border border-brand-light hover:shadow-xl transition-all`

### Navigation
- Background: `bg-brand-navy/95 backdrop-blur-md`
- Links: `text-brand-white/80 hover:text-brand-gold transition-colors`
- Active: `text-brand-gold`

### Dividers / Accents
- Gold line: `border-t border-brand-gold/30`
- Gold dot accent: `w-2 h-2 rounded-full bg-brand-gold`

## Do's
- Use Playfair Display for all headings to maintain elegance
- Use gold accents sparingly for maximum impact
- Maintain generous whitespace for a premium feel
- Use dark navy backgrounds for hero/feature sections
- Use light backgrounds for product/content sections to alternate rhythm

## Don'ts
- Don't use bright/neon colors — keep palette disciplined
- Don't crowd elements — spacing is key to elegance
- Don't use more than 2 font families
- Don't use low-contrast text (always check gold on navy, white on steel)
