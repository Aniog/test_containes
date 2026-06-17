# ARTITECT MACHINERY — Visual Design System

Elegant industrial brand for precision sheet metal folding machinery. The design balances refined sophistication with engineering credibility — clean, confident, and easy to navigate.

## Brand Personality
- Precision-engineered, premium, trustworthy.
- Architectural, minimal, restrained. Avoid loud "construction site" clichés.
- Industrial materiality (steel, graphite, ink) softened by generous whitespace and refined typography.

## Color Palette

Tailwind-named tokens (configured in `tailwind.config.js`):

- `ink` (#0E1116) — primary deep ink, headings & footer
- `graphite` (#1F242C) — dark surface
- `steel` (#5A6573) — secondary text
- `mist` (#E6E8EC) — light dividers / subtle backgrounds
- `bone` (#F6F5F1) — warm neutral background
- `paper` (#FFFFFF) — primary surface
- `brass` (#B68A4E) — accent / CTA (brass/copper hint = craftsmanship)
- `brass-dark` (#8E6A38) — accent hover

### Use
- Backgrounds: `bg-paper`, `bg-bone`, `bg-ink` (dark sections).
- Body text on light: `text-graphite` or `text-steel`.
- Body text on dark: `text-mist` or `text-white/80`.
- Primary CTA: `bg-brass text-white hover:bg-brass-dark`.
- Outlined CTA: `border border-ink text-ink hover:bg-ink hover:text-paper`.
- DO NOT use bright blues/greens/red. DO NOT mix more than two accents.

## Typography
- Display / headings: `font-serif` → Cormorant Garamond (elegant, editorial).
- Body / UI: `font-sans` → Inter (clean, readable).
- Tracking: headings `tracking-tight`; small caps eyebrows `tracking-[0.25em] uppercase text-xs`.
- Sizes:
  - Hero h1: `text-5xl md:text-7xl font-serif font-light`
  - Section h2: `text-3xl md:text-5xl font-serif font-light`
  - Card title: `text-xl font-serif`
  - Body: `text-base md:text-lg text-steel leading-relaxed`

## Layout & Spacing
- Container: `max-w-7xl mx-auto px-6 lg:px-10`.
- Section vertical rhythm: `py-20 md:py-28`.
- Grid gaps: `gap-8 md:gap-12`.
- Generous whitespace; never cramped. Always responsive (`md:` + `lg:` breakpoints).

## Components

### Buttons
- Primary: `inline-flex items-center gap-2 bg-brass text-white px-7 py-3 text-sm tracking-wide uppercase hover:bg-brass-dark transition`
- Secondary: `inline-flex items-center gap-2 border border-ink text-ink px-7 py-3 text-sm tracking-wide uppercase hover:bg-ink hover:text-paper transition`
- Ghost on dark: `inline-flex items-center gap-2 border border-white/40 text-white px-7 py-3 text-sm tracking-wide uppercase hover:bg-white hover:text-ink transition`

### Cards (Products)
- `bg-paper border border-mist hover:border-ink/40 transition group`
- No rounded corners or `rounded-sm` only — keep the architectural look.
- Image area `aspect-[4/3]` with subtle zoom on hover (`group-hover:scale-105 transition duration-700`).

### Section Eyebrow
`<span class="block text-xs tracking-[0.3em] uppercase text-brass mb-4">Eyebrow</span>`

### Divider
Hairline rule: `<div class="h-px w-12 bg-ink"></div>` or `bg-brass` for accent.

## Imagery
- Use `data-strk-img` / `data-strk-bg` system (no hardcoded URLs).
- Tone: industrial workshop, polished steel, machinery details — keep it editorial, not cluttered.

## Do's and Don'ts

DO:
- Use lots of whitespace.
- Keep palette restrained: ink + bone + brass accent.
- Mix serif headlines with sans body for the elegant-industrial contrast.
- Use thin hairline borders (`border-mist`, `border-ink/20`) instead of heavy shadows.

DON'T:
- Don't use bright/saturated colors.
- Don't use heavy drop shadows or rounded-3xl bubbles.
- Don't use emojis in UI.
- Don't crowd content; never use single-column stacking on desktop.
- Don't use low-contrast text (e.g. light gray on white below `text-steel`).
