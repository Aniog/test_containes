# SSourcing China — Design System

## Brand Voice
Professional, clear, practical, trustworthy. International B2B. No exaggerated claims.
Realistic factory / QC / shipping visuals.

## Typography
- Font family: Inter (Google Fonts), weights 300–800.
- Headings: Inter 700/800, tight tracking, large sizes.
- Body: Inter 400/500, 1.6 line-height for readability.
- Eyebrow / labels: Inter 600, uppercase, wide tracking, small size.

## Color Palette (Tailwind tokens)
- Primary (deep navy / trust): `#0B2A4A`  → `navy`
- Primary accent (steel blue): `#1E5F8E`  → `steel`
- Accent (signal amber for CTA): `#E08A1E` → `amber`
- Success / verified green: `#1F8A57` → `verified`
- Neutral background: `#F5F7FA` → `canvas`
- Surface white: `#FFFFFF`
- Border / divider: `#E2E8F0`
- Text primary: `#0F1B2D` → `ink`
- Text muted: `#5A6B7E` → `muted`

Use light theme only (B2B, trustworthy). Dark backgrounds only for hero / footer (navy).

## Spacing & Layout
- Max content width: `max-w-7xl` (1280px), centered with `px-6 lg:px-8`.
- Section vertical rhythm: `py-20 lg:py-28`.
- Card radius: `rounded-xl` (12px) or `rounded-2xl` (16px) for hero cards.
- Borders: `1px solid #E2E8F0`.
- Shadows: subtle, `shadow-sm` default, `shadow-lg` on hover for cards.

## Components
- Buttons: primary = amber bg, navy text, `rounded-lg`, `px-6 py-3`, font 600.
  Secondary = navy bg, white text. Ghost = transparent, navy border.
- Cards: white bg, `rounded-xl`, `border border-slate-200`, `p-6`, hover lift.
- Badges: small pill, `rounded-full`, `px-3 py-1`, `text-xs font-semibold`.
- Section eyebrow: amber text, uppercase, tracking-widest, `text-sm`.

## Imagery
- Use `data-strk-img` / `data-strk-bg` stock image system.
- Realistic photos: factories, production lines, QC inspection, container shipping, warehouses.
- Hero uses background image (16x9, wide).
- Cards use 4x3 or 3x2 content images.

## Do's
- Keep generous whitespace.
- Use navy for authority, amber sparingly for CTAs.
- Ensure high contrast text on all surfaces.
- Mobile-first responsive with `md:` and `lg:` breakpoints.

## Don'ts
- No gradient text. No neon colors. No emoji in headings.
- No low-contrast gray text on white below 4.5:1.
- No hardcoded hex outside the palette tokens defined in tailwind.config.js.
