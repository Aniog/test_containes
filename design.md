# SSourcing China — Design System

A professional, trustworthy, international B2B website for a China-based sourcing agent. The visual language communicates reliability, scale, and operational precision. No exaggerated claims, no gimmicks.

## Brand Personality
- Clean, corporate, international B2B
- Trustworthy and practical
- Operational and precise (factory, QC, shipping)
- Confident but understated

## Typography
- Font family: **Inter** (loaded via Google Fonts in index.html), weights 300–800
- Headings: Inter, semibold/bold, tight tracking
- Body: Inter, regular 400, line-height 1.6
- Eyebrow / labels: Inter, uppercase, tracking-widest, semibold, small size
- Example classes: `font-bold tracking-tight`, `text-sm font-semibold uppercase tracking-widest`

## Color Palette
A deep navy primary conveys trust and corporate stability. A single warm accent (amber) is reserved for primary CTAs to draw the eye without being loud. Neutral slate grays structure the layout.

- `brand-navy` `#0B2545` — primary dark (headers, footer, hero overlays)
- `brand-navy-700` `#13315C` — secondary dark
- `brand-blue` `#1B6CA8` — links, accents, icons
- `brand-blue-600` `#155C8F` — hover
- `brand-amber` `#F59E0B` — primary CTA accent
- `brand-amber-600` `#D97706` — CTA hover
- `brand-slate` `#F1F5F9` — section background tint
- `brand-slate-200` `#E2E8F0` — borders, dividers
- `brand-ink` `#0F172A` — primary text
- `brand-muted` `#475569` — secondary text
- `brand-white` `#FFFFFF` — surfaces

All colors are added to `tailwind.config.js` under `theme.extend.colors` as `brand.*` tokens. Do not hardcode hex values in components.

## Layout & Spacing
- Max content width: `max-w-7xl` (1280px), centered with `px-4 sm:px-6 lg:px-8`
- Section vertical rhythm: `py-16 md:py-24`
- Cards: `rounded-xl border border-slate-200 bg-white p-6 md:p-8` with subtle `shadow-sm`
- Consistent 8px spacing scale via Tailwind

## Visual Style
- Generous whitespace, clear hierarchy
- Section eyebrows (uppercase label) above headings
- Two-column layouts on desktop (text + image), single column on mobile
- Icon + text feature grids (3 or 4 columns desktop, 1–2 mobile)
- Realistic factory / QC / shipping / warehouse imagery via the stock image system
- Subtle borders and shadows, no heavy gradients
- Hero uses a background image with a navy overlay for legibility

## Buttons
- Primary CTA: `bg-brand-amber text-white hover:bg-brand-amber-600 px-6 py-3 rounded-lg font-semibold`
- Secondary: `bg-brand-navy text-white hover:bg-brand-navy-700 px-6 py-3 rounded-lg font-semibold`
- Ghost / outline: `border border-slate-300 text-brand-ink hover:bg-slate-50 px-6 py-3 rounded-lg font-semibold`

## Do's
- Use semantic color tokens (`text-brand-ink`, `bg-brand-navy`, etc.)
- Keep contrast high: dark text on light surfaces, white text on navy
- Use realistic B2B imagery (factories, inspection, containers, warehouses)
- Keep copy professional, clear, and practical

## Don'ts
- No neon colors, no purple/pink gradients
- No exaggerated marketing claims ("#1 in the world", "guaranteed lowest price")
- No low-contrast text (e.g. light gray on white for important content)
- No hardcoded hex codes in component class strings
- No mobile-stacked single-column layouts on desktop
