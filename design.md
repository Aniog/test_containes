# MicroCosmos Design System

## Concept
A dark, immersive, science-meets-wonder aesthetic inspired by microscopy and the hidden world of microorganisms. Deep space-like backgrounds with bioluminescent accent colors evoke the alien beauty of the microscopic world.

## Color Palette

### Base Colors (add to Tailwind config as named colors)
- `cosmos-black`: #050a0e — deepest background
- `cosmos-dark`: #0a1520 — card/section backgrounds
- `cosmos-navy`: #0d1f2d — secondary backgrounds
- `cosmos-teal`: #00c9b1 — primary accent (bioluminescent teal)
- `cosmos-cyan`: #00e5ff — highlight/glow accent
- `cosmos-violet`: #7c3aed — secondary accent
- `cosmos-purple`: #a855f7 — tertiary accent
- `cosmos-muted`: #4a6a7a — muted text on dark backgrounds
- `cosmos-light`: #c8dde8 — body text on dark backgrounds
- `cosmos-white`: #f0f8ff — headings and high-contrast text

### Usage
- Page backgrounds: `cosmos-black` or `cosmos-dark`
- Card backgrounds: `cosmos-navy` with subtle border
- Primary CTA buttons: `cosmos-teal` text/border on dark bg, or filled `cosmos-teal`
- Headings: `cosmos-white`
- Body text: `cosmos-light`
- Muted/secondary text: `cosmos-muted`
- Accent glows: `cosmos-cyan` and `cosmos-teal`

## Typography

### Fonts
- Headings: **Space Grotesk** (Google Fonts) — modern, geometric, scientific feel
- Body: **Inter** — clean, readable

### Scale
- Hero heading: `text-5xl md:text-7xl font-bold tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card heading: `text-xl font-semibold`
- Body: `text-base leading-relaxed`
- Caption/label: `text-sm text-cosmos-muted`

## Borders & Shadows
- Cards: `border border-cosmos-teal/20 rounded-2xl`
- Glow effect: `shadow-[0_0_30px_rgba(0,201,177,0.15)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(0,201,177,0.3)]`
- Dividers: `border-cosmos-teal/10`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- Primary: `bg-cosmos-teal text-cosmos-black font-semibold px-6 py-3 rounded-full hover:bg-cosmos-cyan transition-colors`
- Outline: `border border-cosmos-teal text-cosmos-teal px-6 py-3 rounded-full hover:bg-cosmos-teal/10 transition-colors`

### Cards
- `bg-cosmos-navy border border-cosmos-teal/20 rounded-2xl p-6 hover:border-cosmos-teal/50 hover:shadow-[0_0_30px_rgba(0,201,177,0.15)] transition-all`

### Navbar
- `bg-cosmos-black/80 backdrop-blur-md border-b border-cosmos-teal/10`
- Logo: Space Grotesk bold, teal accent
- Links: `text-cosmos-light hover:text-cosmos-teal transition-colors`

### Hero Section
- Full-viewport height, dark gradient background
- Large centered heading in `cosmos-white`
- Teal accent underline or highlight on key word
- Subtle animated particle/glow background (CSS only)

## Do's
- Use dark backgrounds throughout — this is a dark-mode-only site
- Use teal/cyan glows sparingly for emphasis
- Use `Space Grotesk` for all headings
- Keep text contrast high: white/light on dark backgrounds
- Use rounded corners (`rounded-2xl`, `rounded-full`) for a modern feel
- Add subtle hover transitions on interactive elements

## Don'ts
- Never use light backgrounds (white, gray-100, etc.)
- Never use dark text on dark backgrounds
- Don't overuse the glow effect — reserve it for key elements
- Don't use more than 3 accent colors in one section
- Avoid sharp corners on cards and buttons
