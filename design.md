# ARTITECT MACHINERY — Visual Design System

A refined, elegant style for a precision sheet metal folding machinery brand.
Serious and industrial, but warm and user friendly — never cold or clinical.

## Color Palette

Use these as named Tailwind colors (defined in `tailwind.config.js`).

- `ink` — Deep graphite (#0F1418) — primary text, headlines, dark backgrounds
- `graphite` — (#1F2A33) — secondary surfaces, navbar dark sections
- `steel` — (#5B6B78) — body subdued text, dividers
- `mist` — (#E7ECEF) — soft section backgrounds
- `paper` — (#F7F5F0) — primary page background, warm off-white
- `bone` — (#FFFFFF) — cards
- `ember` — (#B8744A) — primary accent, copper/bronze, used sparingly
- `ember-soft` — (#E2C4AC) — accent tint
- `gold` — (#C9A24A) — secondary accent for highlights

Do:
- Pair `text-ink` on `bg-paper` or `bg-bone`
- Use `bg-graphite text-paper` for navbar/footer/dark sections
- Use `text-ember` and `bg-ember text-paper` for primary CTA accents only
- Use `border-mist` or `border-steel/20` for hairline dividers

Don't:
- Don't put `text-paper` on `bg-paper` or `text-ink` on `bg-graphite`
- Don't use saturated reds, greens, blues — stay neutral-warm
- Don't overuse `ember`; one strong accent per section is enough

## Typography

- Display / Headlines: `Cormorant Garamond` serif — `font-display`
- Body / UI: `Inter` sans-serif — `font-sans`
- Eyebrow / labels: Inter, `tracking-[0.2em] uppercase text-xs`

Sizes:
- H1 hero: `text-5xl md:text-7xl font-display font-light`
- H2 section: `text-3xl md:text-5xl font-display font-light`
- H3 card: `text-xl md:text-2xl font-display`
- Body: `text-base md:text-lg leading-relaxed text-steel`
- Small: `text-sm text-steel`

## Layout & Spacing

- Container: `max-w-7xl mx-auto px-6 md:px-10`
- Section vertical rhythm: `py-20 md:py-28`
- Card padding: `p-6 md:p-8`
- Generous whitespace; never crowd elements
- Use 12-col grids on desktop, single column stacks only on mobile

## Borders, Radii, Shadows

- Radius: `rounded-none` for industrial feel on big blocks; `rounded-lg` for cards/buttons
- Borders: `border border-ink/10` or `border-mist`
- Shadows: subtle only — `shadow-sm` for cards on hover `hover:shadow-xl transition-shadow duration-500`
- No glow effects, no neon, no heavy drop shadows

## Buttons

- Primary: `bg-ink text-paper hover:bg-ember rounded-md px-6 py-3 tracking-wide`
- Secondary: `border border-ink text-ink hover:bg-ink hover:text-paper rounded-md px-6 py-3`
- Ghost on dark: `text-paper border border-paper/30 hover:bg-paper hover:text-ink`

## Imagery

- Use stock images via the `data-strk-img` / `data-strk-bg` system
- Prefer industrial / workshop / precision-metal / architectural photography
- Apply a subtle dark overlay on hero backgrounds for legibility:
  `after:absolute after:inset-0 after:bg-ink/50`

## Motion

- Subtle, slow transitions only: `transition-all duration-500 ease-out`
- Hover lifts: `hover:-translate-y-1`
- No bouncing, no spinning decorative animations

## Visual Tone Cues

- Thin hairline rules, copper/bronze accents, generous serif headlines
- "Architect's drawing meets a finely engineered machine"
- Clear hierarchy; every page should feel breathable and composed
