# SSourcing China — Visual Style Guide

Single source of truth for all visual style decisions. Translate to Tailwind classes when writing JSX.

## Brand Personality
- Professional B2B, trustworthy, international, clean, practical.
- No exaggerated claims, no flashy gradients, no neon.
- Inspired by serious sourcing/logistics brands (Maersk, DHL, Flexport, Alibaba B2B).

## Colors
Defined as Tailwind named colors in `index.css` via `@theme`.
- `brand-navy` `#0B2545` — primary deep navy, used for headers, hero, footer, primary buttons.
- `brand-blue` `#13315C` — secondary blue.
- `brand-accent` `#1D7AF2` — accent CTA blue, links, highlights.
- `brand-gold` `#C9A227` — sparingly used for trust seals / numbers / underline accent.
- `brand-bg` `#F5F7FA` — subtle page background sections.
- `brand-line` `#E2E8F0` — borders, dividers.
- `brand-ink` `#0F172A` — body headings.
- `brand-muted` `#475569` — secondary body text.

Do:
- Navy `#0B2545` background with white text.
- White cards on `brand-bg` background with `brand-ink` headings and `brand-muted` body.
- Use `brand-accent` for primary CTAs.

Don't:
- Don't use pure black (#000) or pure white text on saturated mid-blue without contrast checks.
- Don't combine gold and accent blue on the same small element.
- Don't use gradients except very subtle navy overlays on hero photos.

## Typography
- Headings: `Inter`, weights 600/700/800. Tracking slightly tight (`tracking-tight`).
- Body: `Inter`, weight 400/500.
- Sizes:
  - H1 hero: `text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight`
  - H2 section: `text-3xl md:text-4xl font-bold tracking-tight`
  - H3 card: `text-lg md:text-xl font-semibold`
  - Eyebrow: `text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent`
  - Body: `text-base text-brand-muted leading-relaxed`
  - Small: `text-sm text-brand-muted`

## Layout & Spacing
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`
- Rounded radii: cards `rounded-2xl`, buttons `rounded-lg`, pills `rounded-full`
- Shadows: cards `shadow-sm hover:shadow-md transition-shadow`, hero stat boxes `shadow-lg`

## Borders
- `border border-brand-line` for cards.
- Section dividers `border-t border-brand-line`.

## Buttons
- Primary: `bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold rounded-lg px-6 py-3 shadow-sm`
- Primary on dark: same, retains contrast.
- Secondary: `bg-white text-brand-navy border border-brand-line hover:border-brand-accent rounded-lg px-6 py-3 font-semibold`
- Ghost on dark: `text-white border border-white/30 hover:bg-white/10 rounded-lg px-6 py-3`

## Imagery Guidelines
- Use realistic factory floors, QC inspectors with checklists, shipping containers, warehouse pallets, port cranes.
- Hero: dark navy overlay on photo for contrast.
- Cards: 4x3 or 3x2 ratio photos with `rounded-xl`.

## Icons
- Use Lucide React, stroke 1.75. Use `text-brand-accent` for feature icons.
- Icon container: `inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent`.

## Forms
- Inputs: `w-full rounded-lg border border-brand-line bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none`.
- Labels: `text-sm font-medium text-brand-ink mb-1.5 block`.
- Helper/error: `text-xs text-red-600 mt-1`.

## Do/Don't Summary
Do:
- Keep navy + white as the dominant ratio.
- Use generous whitespace.
- Maintain consistent radii and shadows.
- Use real data shapes for stats — round numbers, no fake testimonials with photo IDs.

Don't:
- Don't write text in pale gray on pale gray backgrounds.
- Don't add emoji as visual decoration.
- Don't use uppercase paragraphs.
- Don't add multi-color gradients.
