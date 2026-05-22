# Design System — Bikes & Races

## Visual Identity
Bold, high-energy aesthetic inspired by professional cycling and motorsport. Dark backgrounds with vivid red/orange accents convey speed, power, and competition.

## Color Palette
- **Background (dark):** `#0a0a0a` — near-black page background
- **Surface:** `#141414` — card and section backgrounds
- **Surface elevated:** `#1e1e1e` — hover states, elevated cards
- **Accent red:** `#e63329` — primary CTA, highlights (`text-red-600`, `bg-red-600`)
- **Accent orange:** `#f97316` — secondary accent (`text-orange-500`)
- **Text primary:** `#f5f5f5` — headings and body on dark (`text-neutral-100`)
- **Text secondary:** `#a3a3a3` — supporting text (`text-neutral-400`)
- **Border:** `#2a2a2a` — subtle dividers (`border-neutral-800`)

Add to tailwind config:
```js
colors: {
  brand: {
    red: '#e63329',
    orange: '#f97316',
    dark: '#0a0a0a',
    surface: '#141414',
    elevated: '#1e1e1e',
  }
}
```

## Typography
- **Display / Hero headings:** "Barlow Condensed", bold/extrabold, uppercase, wide letter-spacing
  - `font-['Barlow_Condensed'] font-extrabold uppercase tracking-wide`
- **Section headings:** "Barlow Condensed", bold, uppercase
  - `text-3xl md:text-4xl font-bold uppercase tracking-wider`
- **Body text:** Inter, regular/medium
  - `font-sans text-base text-neutral-400`
- **Labels / badges:** Inter, semibold, uppercase, small
  - `text-xs font-semibold uppercase tracking-widest`

## Spacing
- Section vertical padding: `py-20 md:py-28`
- Card padding: `p-6`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`

## Borders & Radius
- Cards: `rounded-xl` with `border border-neutral-800`
- Buttons: `rounded-full` for pill style, `rounded-lg` for standard
- Image containers: `rounded-xl overflow-hidden`

## Shadows
- Cards: `shadow-lg shadow-black/40`
- Hero overlay: `bg-gradient-to-b from-black/60 via-black/30 to-black/80`

## Buttons
- Primary: `bg-red-600 hover:bg-red-500 text-white font-semibold rounded-full px-6 py-3 transition-colors`
- Secondary/outline: `border border-neutral-600 hover:border-red-600 text-neutral-100 rounded-full px-6 py-3 transition-colors`

## Do's
- Use uppercase headings with wide tracking for impact
- Use red accents sparingly for CTAs and highlights
- Keep cards dark with subtle borders
- Use full-bleed hero images with dark overlays
- Use grid layouts for race cards (2-3 columns on desktop)

## Don'ts
- Don't use light backgrounds for main sections
- Don't use low-contrast text (e.g. gray on gray)
- Don't use rounded-full on large image containers
- Don't overuse the red accent — reserve it for key actions
