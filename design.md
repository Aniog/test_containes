# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, trustworthy, international, B2B, practical

## Color Palette
- Primary Blue: `#1A3C6E` (deep navy — trust, authority) → Tailwind: `blue-900` or custom `brand-navy`
- Accent Red: `#C0392B` (China red — identity, energy) → Tailwind: custom `brand-red`
- Accent Gold: `#D4A017` (quality, premium) → Tailwind: custom `brand-gold`
- Background Light: `#F7F9FC` → Tailwind: custom `brand-bg`
- Surface White: `#FFFFFF`
- Text Dark: `#1A2332`
- Text Muted: `#5A6A7E`
- Border: `#E2E8F0`
- Success Green: `#27AE60`

## Typography
- Font Family: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - H4: text-lg md:text-xl
- Body: text-base (16px), leading-relaxed
- Small/Caption: text-sm, text-muted

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components

### Buttons
- Primary: `bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors`
- Secondary: `border-2 border-brand-navy text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-brand-navy hover:text-white transition-colors`
- Ghost: `text-brand-navy underline-offset-4 hover:underline`

### Cards
- `bg-white rounded-xl shadow-sm border border-border p-6 hover:shadow-md transition-shadow`

### Section Headers
- Eyebrow label: `text-brand-red text-sm font-semibold uppercase tracking-widest`
- Title: `text-brand-navy font-bold`
- Subtitle: `text-muted max-w-2xl`

### Navigation
- Background: white with bottom border
- Logo: brand-navy text, bold
- Links: text-gray-700 hover:text-brand-navy
- CTA button: brand-red

## Do's
- Use generous whitespace between sections
- Use icons from lucide-react consistently
- Use stock images for factory/QC/shipping visuals
- Keep CTAs prominent and action-oriented
- Use numbered steps for process sections
- Use trust badges and statistics prominently

## Don'ts
- No dark mode (light-only B2B site)
- No exaggerated claims or superlatives
- No cluttered layouts
- No low-contrast text
- No decorative fonts
