# ARTITECT MACHINERY — Visual Design System

A refined, industrial-elegant style for a precision sheet metal folding machinery brand.
Tone: confident, premium, quietly technical. User-friendly, not flashy.

## Brand Palette

Defined as Tailwind named colors (added to `tailwind.config` via `@theme` in `index.css`).

- `ink` (deep graphite, primary text & dark surfaces): `#0E1116`
- `steel` (mid neutral, secondary text, borders): `#5B6470`
- `mist` (subtle background tint): `#F4F5F7`
- `paper` (default page background): `#FFFFFF`
- `bronze` (accent — buttons, hover, links): `#B08442`
- `bronze-dark` (hover state of accent): `#8E6A33`
- `line` (hairline borders): `#E5E7EB`

Do:
- Use `bg-paper` / `text-ink` as base.
- Use `bronze` sparingly: primary CTAs, key icons, underline accents.
- Use thin 1px `border-line` separators for editorial feel.

Don't:
- Don't use bright saturated colors (no neon, no pure blues/reds).
- Don't use gradients that look like consumer SaaS. A subtle dark gradient on hero only.
- Never put light text on light or dark text on dark surfaces.

## Typography

- Headings: `Playfair Display` (Google), `font-serif`, weight 500–700, tight tracking.
- Body / UI: `Inter` (Google), `font-sans`, weight 400–600.
- Eyebrow / labels: Inter uppercase, `tracking-[0.2em] text-xs font-medium`.

Scale (Tailwind):
- Hero: `text-5xl md:text-7xl` serif, `leading-[1.05]`.
- Section title: `text-3xl md:text-5xl` serif.
- Body: `text-base md:text-lg text-steel`.
- Eyebrow: `text-xs uppercase tracking-[0.2em] text-bronze`.

## Layout

- Max content width: `max-w-7xl mx-auto px-6 md:px-10`.
- Generous vertical spacing: `py-20 md:py-28` between major sections.
- Grid spacing: `gap-8 md:gap-12`.
- Hairline dividers: `border-t border-line`.

## Components

Buttons:
- Primary: `bg-ink text-paper hover:bg-bronze transition-colors px-6 py-3 text-sm font-medium tracking-wide`
- Outline: `border border-ink text-ink hover:bg-ink hover:text-paper transition-colors px-6 py-3 text-sm`
- Ghost link: `text-ink hover:text-bronze inline-flex items-center gap-2`

Cards (product):
- `bg-paper border border-line` with `hover:border-ink` and subtle lift `transition-all`.
- No heavy drop shadows. Optional: `shadow-[0_1px_0_0_rgba(14,17,22,0.04)]`.

Form inputs:
- `border-b border-line focus:border-ink bg-transparent py-3 outline-none text-ink placeholder:text-steel`.

## Imagery

- Editorial product photography style. Backgrounds: white or warm gray.
- Use stock image tags with strk-img system. Prefer 4x3 or 3x2 ratios for products,
  16x9 for hero, 3x4 for editorial portraits.

## Don'ts

- No emojis in UI.
- No rounded "pill" everything — prefer `rounded-none` or `rounded-sm` for editorial feel.
  Cards can use `rounded-md` (max).
- No invisible/low-contrast text.
