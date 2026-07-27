# SSourcing China - Design System

## Brand Identity
- Professional B2B sourcing agent website
- Clean, trustworthy, international feel
- Target: overseas buyers looking for China sourcing support

## Colors (Tailwind config names)
- **primary**: `#1B4D7A` — deep navy blue, trust and professionalism
- **primary-dark**: `#0F3356` — darker navy for hover states
- **accent**: `#E8792F` — warm orange for CTAs and highlights
- **accent-dark**: `#D06520` — darker orange for hover
- **neutral-50**: `#F8FAFB` — lightest background
- **neutral-100**: `#F1F4F7` — section alternate background
- **neutral-200**: `#E2E7ED` — borders, dividers
- **neutral-300**: `#C8D1DA` — muted borders
- **neutral-600**: `#5A6B7B` — secondary text
- **neutral-700**: `#3D4F5F` — body text
- **neutral-900**: `#1A2B3B` — headings

## Typography
- Font: Inter (Google Fonts), weights 400, 500, 600, 700
- Headings: font-bold or font-semibold, text-neutral-900
- Body: font-normal, text-neutral-700
- Small/muted: text-neutral-600
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
- Buttons: rounded-lg px-6 py-3 font-semibold transition-colors
  - Primary CTA: bg-accent text-white hover:bg-accent-dark
  - Secondary: bg-primary text-white hover:bg-primary-dark
  - Outline: border-2 border-primary text-primary hover:bg-primary hover:text-white
- Cards: bg-white rounded-xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow
- Badges: inline-flex px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary

## Do's
- Use generous whitespace between sections
- Use subtle shadows on cards (shadow-sm, shadow-md)
- Keep text readable with proper contrast
- Use icons (Lucide) to support text, not replace it
- Use stock images for factory, QC, shipping visuals

## Don'ts
- No dark mode (B2B audience prefers light)
- No gradients on text
- No overly rounded corners (max rounded-xl)
- No neon or flashy colors
- No exaggerated marketing claims
