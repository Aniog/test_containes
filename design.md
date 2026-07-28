# Design System — Law Firm Website

## Brand Identity
Professional, trustworthy, authoritative. Deep navy and gold convey prestige and reliability.

## Color Palette
- Primary (Navy): `#0F2044` — `bg-navy` / `text-navy`
- Secondary (Gold): `#C9A84C` — `bg-gold` / `text-gold`
- Accent Light Gold: `#E8C97A` — hover states
- Background Light: `#F8F7F4` — `bg-cream`
- Background White: `#FFFFFF`
- Text Dark: `#1A1A2E` — `text-dark`
- Text Muted: `#6B7280` — `text-gray-500`
- Border: `#E5E0D8`

Add to tailwind.config.js:
```js
colors: {
  navy: '#0F2044',
  gold: '#C9A84C',
  'gold-light': '#E8C97A',
  cream: '#F8F7F4',
  dark: '#1A1A2E',
}
```

## Typography
- Font: "Playfair Display" (headings) + "Inter" (body) from Google Fonts
- H1: `text-5xl font-bold font-serif text-navy` (desktop), `text-3xl` (mobile)
- H2: `text-3xl font-bold font-serif text-navy`
- H3: `text-xl font-semibold text-navy`
- Body: `text-base text-gray-700 leading-relaxed`
- Caption/Label: `text-sm text-gray-500 uppercase tracking-widest`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-6 lg:px-8`
- Section padding: `py-20 lg:py-28`
- Card padding: `p-8`
- Gap between cards: `gap-8`

## Components

### Navigation
- Fixed top, white background with subtle shadow on scroll
- Logo left, nav links center/right
- Active link: gold underline
- CTA button: gold filled

### Buttons
- Primary: `bg-gold text-white px-8 py-3 font-semibold hover:bg-gold-light transition`
- Secondary (outline): `border-2 border-gold text-gold px-8 py-3 hover:bg-gold hover:text-white transition`
- Do NOT use rounded-full; use `rounded` for a professional look

### Cards
- `bg-white rounded-lg shadow-md p-8 border border-gray-100`
- Hover: `hover:shadow-xl transition-shadow`

### Hero Section
- Full-height with dark overlay on background image
- White headline text on dark overlay
- Gold accent line under headline

## Do's
- Use serif font for all headings
- Maintain generous whitespace
- Use gold sparingly as accent only
- Keep text high-contrast (white on navy, dark on cream)

## Don'ts
- No bright/neon colors
- No rounded-full buttons
- No cluttered layouts
- No low-contrast text combinations
