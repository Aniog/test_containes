# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, clear, practical, trustworthy, international B2B

## Color Palette
- Primary Blue: `#1A3C6E` (deep navy — trust, authority) → Tailwind: `[#1A3C6E]`
- Accent Red: `#C0392B` (China red — identity, energy) → Tailwind: `[#C0392B]`
- Accent Gold: `#D4A017` (quality, premium) → Tailwind: `[#D4A017]`
- Light BG: `#F5F7FA` → Tailwind: `[#F5F7FA]`
- White: `#FFFFFF`
- Dark Text: `#1A1A2E` → Tailwind: `[#1A1A2E]`
- Body Text: `#4A5568` → Tailwind: `[#4A5568]`
- Border: `#E2E8F0` → Tailwind: `[#E2E8F0]`
- Muted: `#718096` → Tailwind: `[#718096]`

Add to tailwind.config.js:
```js
colors: {
  primary: '#1A3C6E',
  accent: '#C0392B',
  gold: '#D4A017',
  lightbg: '#F5F7FA',
  darktext: '#1A1A2E',
  bodytext: '#4A5568',
  border: '#E2E8F0',
  muted: '#718096',
}
```

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
- H1: text-4xl md:text-5xl lg:text-6xl
- H2: text-3xl md:text-4xl font-bold
- H3: text-xl font-semibold
- Body: text-base text-bodytext leading-relaxed
- Small/Caption: text-sm text-muted

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components

### Buttons
- Primary: bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a93226] transition
- Secondary: border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition
- Ghost: text-primary underline

### Cards
- bg-white rounded-xl shadow-sm border border-border p-6 hover:shadow-md transition

### Section Headers
- Centered, H2 in darktext, subtitle in bodytext, optional accent underline

### Navbar
- bg-white shadow-sm, sticky top-0 z-50
- Logo left, nav links center/right, CTA button right

### Footer
- bg-primary text-white, multi-column

## Do's
- Use clean whitespace and generous padding
- Use icons (Lucide) alongside text for scannability
- Use numbered steps for process sections
- Use real-looking data in case studies (no fake logos)
- Keep CTAs prominent and repeated throughout

## Don'ts
- No dark text on dark backgrounds
- No exaggerated claims ("best in the world")
- No cluttered layouts
- No tiny text on colored backgrounds
