# SSourcing China — Design System

Professional B2B website for a China sourcing agent. The design must feel clean, trustworthy, international and practical — like a reliable operations partner, not a flashy marketing agency.

## Brand Personality
- Reliable, precise, factory-floor credible
- International business tone: clear English, no hype, no exaggerated claims
- Visual language of logistics, quality control and manufacturing: structured grids, documentation-style cards, subtle industrial accents

## Colors
Defined as named Tailwind colors in `tailwind.config.js`. Never use raw hex values in components.

- `ink` (#0F2A43) — primary deep navy. Headings, footer background, dark sections. Always pair with `white` or `sky-100` text.
- `brand` (#1D6FB8) — primary blue for links, icons, key UI accents. Pair with white text.
- `brand-dark` (#155A94) — hover state for brand buttons.
- `accent` (#E88B1D) — amber/orange reserved for primary CTAs and small highlight details (trust badges, underlines). Pair with `ink` text.
- `accent-dark` (#C97712) — hover state for accent buttons.
- `paper` (#F6F8FB) — light page-section background (alternate with white).
- `line` (#E2E8F0) — borders, dividers, card outlines.
- `slate` scale (Tailwind default) — body text `slate-600`, secondary text `slate-500`, headings on light `ink`.

Contrast rules:
- Body text on white/paper: `slate-600` or darker.
- Text on `ink` backgrounds: `white` for headings, `slate-300` for body — never `slate-500` or darker.
- Buttons: white text on `brand`/`ink`; `ink` text on `accent`.
- Never light text on light backgrounds or dark text on dark backgrounds.

## Typography
- Font: Inter (loaded in index.html), fallback system-ui.
- H1: `text-4xl md:text-5xl font-bold tracking-tight` (hero), color `ink` or white.
- H2 section titles: `text-3xl md:text-4xl font-bold tracking-tight text-ink`.
- H3 card titles: `text-lg font-semibold text-ink`.
- Eyebrow / kicker labels: `text-sm font-semibold uppercase tracking-wider text-brand`.
- Body: `text-base text-slate-600 leading-relaxed`.
- Small meta text: `text-sm text-slate-500`.

## Spacing & Layout
- Page container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Section vertical padding: `py-16 md:py-24`.
- Section header block: eyebrow + H2 + supporting paragraph, `max-w-3xl`, often centered.
- Grids: `grid gap-6 md:grid-cols-2 lg:grid-cols-3` (cards), `lg:grid-cols-4` (dense feature lists).
- Desktop must use multi-column layouts — never stack everything in one column on desktop.
- Mobile-first responsive: collapse grids to single column under `md`.

## Surfaces & Components
- Cards: `bg-white border border-line rounded-xl shadow-sm` with `p-6` or `p-8`. Hover: `hover:shadow-md transition-shadow`.
- Stat / trust numbers: large `text-3xl font-bold text-ink` + small `text-sm text-slate-500` label.
- Process steps: numbered with a circular badge (`bg-brand text-white rounded-full`), connected with subtle top border or line on desktop.
- Checklist items: Lucide `CheckCircle2` in `text-brand` + `text-slate-600` text.
- Images: `rounded-xl` with optional `border border-line`; use realistic factory / QC / shipping imagery.
- Dark CTA band: `bg-ink` section with white heading, `slate-300` body, accent button.

## Buttons
- Primary CTA (accent): `bg-accent text-ink font-semibold rounded-lg px-6 py-3 hover:bg-accent-dark hover:text-white transition-colors` — used for "Get a Free Sourcing Quote".
- Secondary (outline on light): `border border-ink/20 text-ink hover:border-ink rounded-lg px-6 py-3`.
- On dark backgrounds: outline variant uses `border-white/30 text-white hover:bg-white/10`.

## Header & Footer
- Header: sticky, `bg-white/95 backdrop-blur border-b border-line`, logo left, nav center/right, accent CTA button right. Mobile: hamburger menu panel.
- Footer: `bg-ink text-slate-300`, 4-column link grid on desktop, bottom bar with copyright. Headings in white.

## Imagery Style
- Realistic photos only: factory floors, production lines, QC inspectors measuring goods, warehouse pallets, container ports, freight.
- No cartoonish illustrations, no generic handshake stock clichés as heroes.
- Hero uses a dark navy overlay (`bg-ink/70`) over a factory/port photo so white headline text stays readable.

## Do's and Don'ts
- Do keep claims factual and verifiable-sounding ("on-site inspections with photo/video reports").
- Don't use exaggerated marketing ("#1 agent", "guaranteed lowest price").
- Don't use gradients, neon colors, playful rounded blobs.
- Don't leave any text without explicit readable color on its background.
- Do keep consistent `rounded-xl` corners, `border-line` hairlines, and section rhythm across all pages.
