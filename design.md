# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, trustworthy, international, B2B

## Color Palette
- Primary Blue: `#1A3C6E` (deep navy — trust, authority) → Tailwind: `[#1A3C6E]`
- Accent Red: `#C0392B` (China red — identity, energy) → Tailwind: `[#C0392B]`
- Accent Gold: `#D4A017` (premium, quality) → Tailwind: `[#D4A017]`
- Light BG: `#F4F7FB` (clean page background)
- White: `#FFFFFF`
- Dark Text: `#1A1A2E`
- Muted Text: `#5A6A7E`
- Border: `#DDE3EC`

Add to tailwind.config.js:
```js
colors: {
  primary: '#1A3C6E',
  accent: '#C0392B',
  gold: '#D4A017',
  lightbg: '#F4F7FB',
  darktext: '#1A1A2E',
  muted: '#5A6A7E',
  border: '#DDE3EC',
}
```

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
- Body: font-normal, leading-relaxed
- H1: text-4xl md:text-5xl lg:text-6xl font-bold text-primary
- H2: text-3xl md:text-4xl font-bold text-primary
- H3: text-xl font-semibold text-darktext
- Body: text-base text-muted leading-relaxed
- Small: text-sm text-muted

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components

### Buttons
- Primary CTA: bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#a93226] transition-colors shadow-md
- Secondary: border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors
- Small: px-5 py-2 text-sm

### Cards
- bg-white rounded-xl shadow-sm border border-border p-6 hover:shadow-md transition-shadow

### Section Headers
- Centered, with a short colored underline accent below the H2
- Subtitle in muted text below

### Navbar
- bg-white shadow-sm sticky top-0 z-50
- Logo left, nav links center/right
- CTA button in accent color

### Footer
- bg-primary text-white
- 4-column grid on desktop

## Do's
- Use clean whitespace generously
- Use icons from lucide-react for service/feature items
- Use subtle shadows, not heavy drop shadows
- Keep CTAs prominent and repeated throughout
- Use numbered steps for process sections

## Don'ts
- No dark backgrounds on body text sections
- No neon or overly bright colors
- No exaggerated claims in copy
- No cluttered layouts
