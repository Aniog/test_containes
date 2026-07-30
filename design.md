# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, clear, practical, trustworthy, international B2B

## Color Palette
- Primary Blue: `#1A3C6E` (deep navy — trust, authority)
- Accent Red: `#C0392B` (China red — identity, energy)
- Accent Gold: `#D4A017` (quality, premium)
- Light Blue: `#EBF2FA` (backgrounds, cards)
- White: `#FFFFFF`
- Text Dark: `#1A1A2E`
- Text Muted: `#6B7280`
- Border: `#E5E7EB`
- Success Green: `#16A34A`

## Tailwind Config Tokens
- `primary`: #1A3C6E
- `accent`: #C0392B
- `gold`: #D4A017
- `lightblue`: #EBF2FA
- `textdark`: #1A1A2E
- `muted`: #6B7280

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
- Body: font-normal, leading-relaxed
- H1: text-4xl md:text-5xl lg:text-6xl
- H2: text-3xl md:text-4xl
- H3: text-xl md:text-2xl
- Body: text-base md:text-lg

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components
- Primary Button: bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition
- Secondary Button: border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition
- Card: bg-white rounded-xl shadow-md p-6 border border-border
- Section Header: centered, H2 in textdark, subtitle in muted, with accent underline

## Do's
- Use navy for headers and trust elements
- Use red sparingly for CTAs and highlights
- Use gold for quality/premium badges
- Use lightblue for alternating section backgrounds
- Keep layouts clean with generous whitespace
- Use icons from Lucide React consistently

## Don'ts
- No dark text on dark backgrounds
- No light text on light backgrounds
- No exaggerated claims in copy
- No cluttered layouts
- No more than 2 accent colors per section
