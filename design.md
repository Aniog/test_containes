# Design System — SSourcing China

A clean, trustworthy, international B2B visual style. Conservative palette, generous spacing, factual tone.

## Colors

Add these as named Tailwind colors in `tailwind.config.js`:

- `brand.navy` `#0B2545` — primary deep navy, for headers, headlines, primary buttons
- `brand.blue` `#1D4ED8` — accent blue for links, secondary CTAs
- `brand.accent` `#F59E0B` — amber accent (sparingly: highlights, key CTAs)
- `brand.ink` `#0F172A` — body text on light bg
- `brand.muted` `#475569` — secondary text
- `brand.border` `#E2E8F0` — borders, dividers
- `brand.surface` `#F8FAFC` — section background tint
- `brand.bg` `#FFFFFF` — base background

Use `slate` semantic pairings as fallback. Do not introduce new hex codes inline — extend the theme instead.

## Typography

- Font: `Inter` from Google Fonts (loaded in index.html).
- Headings: `font-semibold` or `font-bold`, color `text-brand-navy`. Track tight on h1/h2 (`tracking-tight`).
- Body: `text-slate-700` or `text-brand-muted`, base `text-base leading-relaxed`.
- Sizes:
  - Hero h1: `text-4xl md:text-5xl lg:text-6xl font-bold`
  - Section h2: `text-3xl md:text-4xl font-bold`
  - Card h3: `text-lg md:text-xl font-semibold`
  - Eyebrow: `text-xs uppercase tracking-[0.18em] font-semibold text-brand-blue`

## Layout & Spacing

- Section vertical padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Grid gaps: `gap-6 md:gap-8`
- Cards: `rounded-xl border border-brand-border bg-white p-6 md:p-8 shadow-sm`
- Hover: subtle — `hover:shadow-md hover:-translate-y-0.5 transition`

## Buttons

- Primary: `bg-brand-navy text-white hover:bg-brand-blue rounded-md px-6 py-3 font-semibold`
- Accent: `bg-brand-accent text-brand-navy hover:brightness-95 rounded-md px-6 py-3 font-semibold`
- Outline: `border border-brand-border text-brand-navy hover:bg-brand-surface rounded-md px-6 py-3 font-semibold`

## Visual style

- Imagery: realistic factory floors, QC inspectors, shipping/containers, meeting rooms. Use stock image tags.
- Iconography: `lucide-react`, stroke 1.75, color `text-brand-blue` inside soft `bg-brand-surface` square `rounded-lg p-3`.
- No glassmorphism, no gradients beyond very subtle navy→blue in hero only.
- Borders preferred over heavy shadows. Keep UI calm.

## Do / Don't

- Do: keep claims factual, present numbers as ranges, label all CTAs.
- Do: ensure every text has explicit color class against its background.
- Don't: use neon, oversaturated, or playful colors.
- Don't: stack everything in a single column on desktop — use multi-column layouts on `md:` and `lg:`.
- Don't: hardcode hex codes in components — use the named tokens.
