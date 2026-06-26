# SSourcing China — Design System

A clean, trustworthy, international B2B website for a China-based sourcing agent.
The visual goal is to feel professional and reliable (like a logistics / manufacturing
partner), not flashy. Realistic factory, QC, and shipping visuals.

## Brand colors
- Primary (deep navy / steel blue): `#0f2c4c` — used for headers, footer, primary buttons.
  Tailwind token: `brand` -> `#0f2c4c`.
- Primary accent (bright blue): `#1d6fd6` — links, hover, secondary CTAs.
  Tailwind token: `accent` -> `#1d6fd6`.
- Amber (trust / highlight): `#e8a13a` — small accents, badges, stat numbers.
  Tailwind token: `amber` -> `#e8a13a`.
- Neutral surface: `#f6f8fb` (page background), white cards.
- Ink text: `#0f1b2d` (headings), `#3c4a5e` (body).

## Typography
- Font: Inter (loaded in index.html), weights 400 / 500 / 600 / 700 / 800.
- Headings: tight tracking, weight 700-800, dark ink color.
- Body: 400, relaxed line-height, muted ink.
- Eyebrow / labels: uppercase, tracking-wider, small, accent color.

## Layout & spacing
- Max content width: `max-w-7xl` (1280px), centered, `px-4 sm:px-6 lg:px-8`.
- Section vertical padding: `py-16 md:py-24`.
- Cards: white bg, `rounded-2xl`, `border border-slate-200`, subtle shadow `shadow-sm`.
- Generous whitespace; avoid crowded layouts.

## Components
- Buttons: primary = `bg-brand text-white hover:bg-[#0b2240]`, rounded-lg, px-6 py-3, font-semibold.
- Secondary/ghost = `border border-slate-300 text-brand hover:border-brand`.
- Badges: `bg-amber/10 text-amber` rounded-full px-3 py-1 text-xs font-semibold.
- Section eyebrow: `text-accent font-semibold uppercase tracking-wider text-sm`.

## Visuals
- Use `data-strk-img` / `data-strk-bg` stock image system for factory, QC, shipping, warehouse photos.
- Hero uses a background image (factory / port).
- Cards use 4:3 or 3:2 content images.

## Do's
- Keep contrast high: dark text on light surfaces, white text on brand navy.
- Use realistic industrial photography (factories, inspection, containers, warehouses).
- Mobile-first responsive with `md:` and `lg:` breakpoints; multi-column on desktop.

## Don'ts
- No neon / gradient-heavy flashy effects.
- No low-contrast gray-on-gray text for important content.
- No exaggerated marketing claims — tone is practical and clear.
- Don't hardcode hex values inline; use the brand tokens defined in index.css `@theme`.
