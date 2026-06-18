# Design System — Apple Watch Landing Page

## Visual Style
Clean, minimal, premium. Inspired by Apple's product marketing aesthetic.
High contrast, generous whitespace, bold typography, and cinematic imagery.

## Color Palette
- Background (dark hero): `bg-black` or `bg-zinc-950`
- Background (light sections): `bg-white` or `bg-zinc-50`
- Background (mid sections): `bg-zinc-100`
- Primary text (on dark): `text-white`
- Primary text (on light): `text-zinc-900`
- Secondary text: `text-zinc-500`
- Accent / CTA: `bg-blue-600` hover `bg-blue-700`, text `text-white`
- Subtle borders: `border-zinc-200` on light, `border-zinc-800` on dark
- Gradient overlays: `from-black/80 to-transparent`

## Typography
- Font: Inter (loaded via Google Fonts in index.html)
- Hero headline: `text-5xl md:text-7xl font-bold tracking-tight`
- Section headline: `text-3xl md:text-5xl font-bold tracking-tight`
- Subheading: `text-xl md:text-2xl font-semibold`
- Body: `text-base md:text-lg text-zinc-500`
- Label / caption: `text-sm font-medium uppercase tracking-widest`

## Spacing
- Section padding: `py-20 md:py-32`
- Container: `max-w-6xl mx-auto px-6`
- Card gap: `gap-6 md:gap-8`

## Components
- Buttons: `rounded-full px-8 py-3 font-semibold text-sm transition-all`
  - Primary: `bg-blue-600 text-white hover:bg-blue-700`
  - Ghost: `border border-zinc-300 text-zinc-900 hover:bg-zinc-100`
- Feature cards: `rounded-2xl bg-zinc-100 p-8`
- Spec rows: `border-b border-zinc-200 py-4 flex justify-between`

## Do's
- Use large, full-bleed hero images with dark overlays
- Use generous whitespace between sections
- Keep text concise and impactful
- Use rounded corners (`rounded-2xl`, `rounded-full`) for modern feel
- Animate subtle hover states

## Don'ts
- No cluttered layouts
- No low-contrast text (always check text vs background)
- No decorative borders that add noise
- No more than 2 font weights per section
