# SSourcing China — Visual Design System

Single source of truth for visual style. Translate every rule below into Tailwind v4 classes.

## Brand Personality
Professional, trustworthy, international B2B. Clean typography, generous whitespace, no over-promising. Inspired by global sourcing and logistics brands (Maersk-like blue, Stripe-like clarity, Alibaba-like density only where needed).

## Color Palette (defined as Tailwind theme tokens in index.css)
- Primary / Brand Navy: `#0B2545` (deep, trustworthy) → token `brand`
- Primary Hover: `#13315C` → token `brand-700`
- Accent Steel Blue: `#1E6091` → token `accent`
- Accent Highlight: `#2A9D8F` (teal, used sparingly for "verified" highlights) → token `verified`
- Background Page: `#F6F8FB` → token `bg`
- Surface (cards): `#FFFFFF` → token `surface`
- Border / Hairline: `#E5EAF1` → token `line`
- Body Text: `#1B2A41` → token `ink`
- Muted Text: `#5B6B82` → token `muted`
- Subtle: `#8A97A8` → token `subtle`
- Success: `#15803D`
- Warning: `#B45309`
- Danger: `#B91C1C`

DO NOT hardcode any of these hex values in JSX. Always use the named tokens, e.g. `bg-brand`, `text-ink`, `border-line`.

## Typography
- Font family: Inter, system fallback. Loaded from Google Fonts in index.html.
- Display (H1 hero): `text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-ink`
- H2 section: `text-3xl md:text-4xl font-semibold tracking-tight text-ink`
- H3 card: `text-lg md:text-xl font-semibold text-ink`
- Eyebrow / kicker: `text-xs font-semibold uppercase tracking-[0.18em] text-accent`
- Body: `text-base leading-relaxed text-ink`
- Muted body: `text-base leading-relaxed text-muted`
- Small / caption: `text-sm text-muted`

## Spacing & Layout
- Container: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Gap between grid cards: `gap-6 md:gap-8`

## Surfaces & Borders
- Cards: `bg-surface border border-line rounded-2xl shadow-sm`
- Hover lift on interactive cards: `transition hover:-translate-y-0.5 hover:shadow-md`
- Hairlines (between sections, in tables): `border-line`
- Hero subtle pattern allowed but never busy.

## Buttons
- Primary: `inline-flex items-center gap-2 rounded-lg bg-brand text-white px-5 py-3 text-sm font-semibold hover:bg-brand-700 transition shadow-sm`
- Secondary: `inline-flex items-center gap-2 rounded-lg bg-white text-brand border border-line px-5 py-3 text-sm font-semibold hover:border-brand hover:text-brand-700 transition`
- Ghost: `inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-700`
- Link with arrow icon from lucide-react (`ArrowRight`).

## Form Inputs
- Input: `w-full rounded-lg border border-line bg-white px-4 py-3 text-ink placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent`
- Label: `block text-sm font-medium text-ink mb-1.5`
- Help text: `mt-1 text-xs text-muted`
- Error text: `mt-1 text-xs text-[color:var(--color-danger)]` — but prefer `text-red-700`.

## Navigation
- Sticky top nav, white surface, hairline bottom border on scroll.
- Active link: `text-brand font-semibold`, inactive: `text-ink/80 hover:text-brand`
- Mobile: hamburger drawer.

## Iconography
- Use lucide-react only. Stroke width default. Color `text-accent` inside light circles `bg-accent/10` with rounded-xl backgrounds, e.g. `inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent`.

## Do's
- Use whitespace generously.
- Use the brand navy for primary trust signals (numbers, headlines, primary CTAs).
- Use stock photography only for factories, QC inspection, shipping containers, ports — realistic, neutral.
- Show concrete numbers (years, factories, QC checkpoints, lead times) rather than vague adjectives.

## Don'ts
- No gradients other than subtle brand→accent hero overlays.
- No emoji.
- No neon, no dark mode in this build.
- No hardcoded hex values in components — always use Tailwind tokens.
- No exaggerated marketing claims ("world's #1", "guaranteed lowest price").
- No light gray text on light backgrounds — minimum body color is `text-muted` (#5B6B82) on white.
