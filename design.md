# ARTITECT MACHINERY — Visual Design System

A precision-engineered, elegant industrial brand. The design balances refined editorial typography with strong, confident industrial accents. It should feel premium and trustworthy, like a fine European manufacturer, while remaining approachable and easy to navigate.

## Brand mood
- Elegant, refined, precise
- Industrial but not heavy or grungy
- Calm, spacious, confident
- Inspired by precision machinery: clean steel, quiet power, sharp lines

## Color palette
Use these named colors. They are added as Tailwind named colors in `tailwind.config.js`.

- `ink` (#0E1116) — primary deep ink, used for headings, dark sections, primary buttons
- `graphite` (#1F242C) — secondary dark surface (footer, dark cards)
- `steel` (#5A6472) — secondary text, muted labels
- `mist` (#E5E7EB) — subtle borders, dividers
- `bone` (#F5F2EC) — warm off-white background for elegant sections
- `paper` (#FFFFFF) — clean white surfaces
- `accent` (#B8893E) — warm brass/bronze accent for refined highlights, links, underlines
- `accent-dark` (#8C6628) — hover/darker brass

Do NOT use loud blues, neon, or saturated reds. Stick to ink/bone/brass palette.

## Typography
- Headings: `font-serif` → Cormorant Garamond (elegant editorial serif)
- Body / UI: `font-sans` → Inter (clean, neutral)
- Eyebrow / labels: `font-sans`, uppercase, tracking-[0.25em], text-xs, often in brass `text-accent`

Examples:
- `text-5xl md:text-7xl font-serif font-light tracking-tight text-ink`
- `text-base md:text-lg font-sans text-steel leading-relaxed`
- `text-xs font-sans uppercase tracking-[0.25em] text-accent`

## Layout & spacing
- Generous whitespace. Section vertical padding: `py-20 md:py-28 lg:py-32`
- Container: `max-w-7xl mx-auto px-6 md:px-10`
- Grid gutters: `gap-8 md:gap-12`
- Use thin hairline dividers `border-mist` rather than heavy borders

## Surfaces & borders
- Cards: white background `bg-paper` or `bg-bone`, `border border-mist`, `rounded-none` or `rounded-sm` (sharp, architectural)
- Hover: subtle lift, `hover:border-ink/40 transition`
- Avoid heavy shadows. If used, only `shadow-[0_1px_2px_rgba(14,17,22,0.04)]`

## Buttons
- Primary: `bg-ink text-paper px-7 py-3 text-sm uppercase tracking-[0.2em] hover:bg-graphite transition`
- Secondary / outline: `border border-ink text-ink px-7 py-3 text-sm uppercase tracking-[0.2em] hover:bg-ink hover:text-paper transition`
- Accent link: `text-accent border-b border-accent hover:text-accent-dark hover:border-accent-dark`
- All buttons: sharp corners (`rounded-none`), generous tracking, small caps style

## Imagery
- Use stock images via `data-strk-img` / `data-strk-bg` system
- Prefer clean machinery shots, factory close-ups, sheet metal textures, blueprints
- Apply `object-cover` and slightly desaturated treatment when paired with text
- Use overlays `bg-ink/40` over hero images for legibility

## Do's
- Plenty of whitespace
- Mix serif headings + sans-serif body
- Sharp corners and hairline borders
- Brass accent used sparingly (1-2 elements per section)
- Strong vertical rhythm

## Don'ts
- No rounded-full pills for primary CTAs (use sharp rectangles)
- No gradient buttons
- No drop shadows on cards
- No emojis in copy
- No bright, saturated colors
- Don't crowd sections — never put more than 3-4 content blocks side by side
