# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, trustworthy, international, B2B, practical

## Color Palette
- Primary Blue: `#1A3C6E` (deep navy — trust, authority)
- Accent Red: `#C0392B` (China red — identity, energy)
- Accent Gold: `#D4A017` (premium, quality)
- Light Blue: `#EBF2FA` (backgrounds, cards)
- White: `#FFFFFF`
- Text Dark: `#1A1A2E`
- Text Muted: `#6B7280`
- Border: `#E5E7EB`
- Success Green: `#16A34A`

## Tailwind Config Additions
Add to tailwind.config.js:
```js
colors: {
  primary: '#1A3C6E',
  'primary-light': '#2A5298',
  accent: '#C0392B',
  gold: '#D4A017',
  'light-blue': '#EBF2FA',
  'text-dark': '#1A1A2E',
  'text-muted': '#6B7280',
}
```

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, text-primary
- Body: text-text-dark, leading-relaxed
- Muted: text-text-muted

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components
- Primary Button: `bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition`
- Secondary Button: `border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition`
- Card: `bg-white rounded-xl shadow-sm border border-border p-6 hover:shadow-md transition`
- Section Title: `text-3xl md:text-4xl font-bold text-primary mb-4`
- Section Subtitle: `text-lg text-text-muted max-w-2xl mx-auto`

## Do's
- Use navy + white for main sections
- Use light-blue (#EBF2FA) for alternating section backgrounds
- Use accent red sparingly for CTAs and highlights
- Keep layouts clean with generous whitespace
- Use icons from lucide-react consistently

## Don'ts
- No dark backgrounds except hero
- No neon or overly bright colors
- No exaggerated marketing claims
- No cluttered layouts
