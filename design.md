# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, trustworthy, international, B2B, practical

## Color Palette
- Primary Blue: `#1A3C6E` (deep navy — trust, authority)
- Accent Red: `#C0392B` (China red — identity, energy)
- Accent Gold: `#D4A017` (quality, premium)
- Light Blue: `#EBF2FA` (backgrounds, cards)
- White: `#FFFFFF`
- Dark Text: `#1A1A2E`
- Muted Text: `#5A6A7A`
- Border: `#D8E4F0`
- Success Green: `#27AE60`

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
- Body: font-normal, leading-relaxed
- H1: text-4xl md:text-5xl lg:text-6xl
- H2: text-3xl md:text-4xl
- H3: text-xl md:text-2xl
- Body: text-base md:text-lg

## Tailwind Config Extensions
- `primary`: `#1A3C6E`
- `accent`: `#C0392B`
- `gold`: `#D4A017`
- `lightblue`: `#EBF2FA`
- `darktext`: `#1A1A2E`
- `mutedtext`: `#5A6A7A`
- `border-color`: `#D8E4F0`

## Spacing & Layout
- Max content width: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Section padding: py-16 md:py-24
- Card padding: p-6 md:p-8
- Border radius: rounded-xl for cards, rounded-lg for buttons

## Components
- Primary Button: bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition
- Secondary Button: border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition
- Card: bg-white rounded-xl shadow-md border border-border p-6 hover:shadow-lg transition
- Section Header: centered, H2 in darktext, subtitle in mutedtext, with a gold underline accent

## Do's
- Use navy for headers and trust elements
- Use red sparingly for CTAs and highlights
- Use gold for quality/premium indicators
- Keep layouts clean with generous whitespace
- Use icons from Lucide React consistently

## Don'ts
- No dark text on dark backgrounds
- No light text on light backgrounds
- No cluttered layouts
- No exaggerated marketing claims
- No small text on colored backgrounds without sufficient contrast
