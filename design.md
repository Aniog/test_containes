# SSourcing China — Design System

## Brand Positioning
Professional English B2B website for a China-based sourcing agent.
Tone: trustworthy, international, practical. No exaggerated claims.

## Color Palette (Tailwind tokens)
Use only these tokens. Never use raw hex in JSX.

| Token              | Value     | Usage                                  |
|--------------------|-----------|----------------------------------------|
| `navy-950`         | `#0B1F3A` | Primary brand, header, hero backgrounds |
| `navy-900`         | `#0E2A47` | Primary buttons, dark sections          |
| `navy-700`         | `#1F3F6B` | Hover states, secondary headings        |
| `navy-500`         | `#3A5A8C` | Subtle accents, links                   |
| `amber-500`        | `#E08A1E` | Accent CTA, highlights                  |
| `amber-600`        | `#C77815` | Accent hover                            |
| `amber-100`        | `#FDF1DC` | Accent surfaces, badges                 |
| `slate-50`         | `#F8FAFC` | Page background                         |
| `slate-100`        | `#F1F5F9` | Section background (alt)                |
| `slate-200`        | `#E2E8F0` | Borders, dividers                       |
| `slate-500`        | `#64748B` | Muted text, captions                    |
| `slate-700`        | `#334155` | Body text                               |
| `slate-900`        | `#0F172A` | Headings                                |
| `white`            | `#FFFFFF` | Card surface                            |
| `success`          | `#15803D` | Success messages                        |
| `danger`           | `#B91C1C` | Error messages                          |

Use semantic Tailwind utility pairs (e.g., `bg-white text-slate-900`, `bg-navy-900 text-white`).
Never put white/near-white text on light backgrounds.

## Typography
- Font family: Inter (loaded via Google Fonts in `index.html`).
- Headings: tight tracking, semibold/bold.
- Body: regular, 16px base.
- Use a clear hierarchy:
  - `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight` — page hero h1
  - `text-3xl md:text-4xl font-bold` — section h2
  - `text-xl md:text-2xl font-semibold` — subsection h3
  - `text-base` — body
  - `text-sm` — captions
  - `text-xs uppercase tracking-wider font-semibold` — eyebrow labels

## Spacing & Layout
- Page max width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Section vertical padding: `py-16 md:py-24`.
- Component internal padding: `p-6` for cards, `p-8` for larger surfaces.
- Use a 12-column grid with `gap-6 md:gap-8` for grids.
- Don't stack everything on desktop. Use 2–3 columns at `md:` and `lg:`.

## Visual Style
- Rounded corners: `rounded-xl` for cards, `rounded-lg` for inputs/buttons.
- Shadows: `shadow-sm` on cards, `shadow-lg` for elevated CTAs / hover.
- Borders: 1px `border-slate-200` for subtle dividers.
- Iconography: Lucide React, stroke 1.75, size 20–24 in content, 28–40 in hero icons.
- Photography: realistic factory / QC / shipping / global-trade visuals via the
  `data-strk-img` system. Never use illustrative placeholders.

## Buttons
- Primary: `bg-navy-900 text-white hover:bg-navy-700`, `rounded-lg`, `px-6 py-3`, `font-semibold`.
- Accent (CTA): `bg-amber-500 text-white hover:bg-amber-600`.
- Secondary: `bg-white text-navy-900 border border-slate-200 hover:bg-slate-50`.
- Ghost: `text-navy-900 hover:bg-slate-100`.
- All buttons include focus-visible ring: `focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2`.

## Forms
- Inputs: `border border-slate-200 bg-white text-slate-900 placeholder:text-slate-500`,
  `rounded-lg`, `px-4 py-2.5`, focus `ring-2 ring-navy-900/20 border-navy-500`.
- Labels: `text-sm font-medium text-slate-700`.
- Helper: `text-sm text-slate-500`.
- Error: `text-sm text-danger`.
- Always set explicit readable text colors for any custom background.

## Do
- Use 2–3 column grids on desktop; 1 column on mobile.
- Use semantic HTML (`<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`).
- Provide `alt` text for every image.
- Keep line length readable: max `prose` width ~70ch for long-form blog text.
- Show testimonials and stats in clean cards, not as hero banners.

## Don't
- Don't use exaggerated claims ("#1", "best in the world", "guaranteed").
- Don't use emoji as icons.
- Don't put low-contrast text (e.g. white text on light backgrounds).
- Don't inline raw hex colors in JSX — always use the token names above.
- Don't use mobile-style stacked layout for desktop hero.