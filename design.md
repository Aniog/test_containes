# SSourcing China — Design System

A clean, trustworthy, international B2B website for a China-based sourcing agent.
The visual goal is to feel professional and credible to overseas buyers (US/EU/AU),
with realistic factory / QC / shipping visuals and a calm, confident tone.

## Brand
- Name: SSourcing China
- Logo wordmark: "SSourcing" (bold) + "China" (regular), small red dot accent.
- Tagline: "China Sourcing Agent for Global Buyers"

## Typography
- Font family: Inter (Google Fonts), weights 300–800.
- Headings: font-weight 700–800, tight tracking, dark slate.
- Body: font-weight 400, 16px base, relaxed line-height.
- Eyebrow / labels: uppercase, tracking-widest, small, muted.

## Color Palette (Tailwind tokens)
- Primary (brand blue): `#1d4ed8` (blue-700) for CTAs and links; hover `#1e3a8a` (blue-800).
- Accent (trust red): `#dc2626` (red-600) used sparingly for the logo dot and key highlights.
- Ink (text): `#0f172a` (slate-900) for headings; `#334155` (slate-700) for body.
- Muted: `#64748b` (slate-500) for secondary text; `#94a3b8` (slate-400) for captions.
- Surface: white `#ffffff` cards; `#f8fafc` (slate-50) page background; `#f1f5f9` (slate-100) subtle bands.
- Border: `#e2e8f0` (slate-200).
- Success: `#16a34a` (green-600).

Do NOT use light text on light backgrounds. Every text element must have explicit
readable foreground color against its surface.

## Layout & Spacing
- Max content width: `max-w-7xl` (1280px) for sections; `max-w-3xl` for prose/blog.
- Section vertical padding: `py-20 md:py-28`.
- Card padding: `p-6 md:p-8`.
- Rounded corners: `rounded-xl` for cards, `rounded-lg` for buttons/inputs.
- Shadows: `shadow-sm` default, `shadow-lg` on hover for cards.

## Components
- Buttons: primary = blue-700 bg, white text, hover blue-800; secondary = white bg, slate-900 text, slate-200 border.
- Cards: white bg, slate-200 border 1px, rounded-xl, shadow-sm, hover lift.
- Badges: small pill, slate-100 bg, slate-700 text.
- Section headers: eyebrow + h2 + supporting paragraph, centered or left-aligned.

## Imagery
- Use `data-strk-img` / `data-strk-bg` stock image system for factory, QC, shipping, warehouse, product visuals.
- Realistic, documentary-style photos (not glossy stock). Aspect ratios: hero 16x9, cards 4x3 or 3x2.

## Do's
- Keep generous whitespace.
- Use a consistent 12-column grid feel.
- Make CTAs prominent and repeated.
- Ensure full mobile responsiveness with md:/lg: breakpoints.

## Don'ts
- No exaggerated claims ("#1 in China", "guaranteed lowest price").
- No light-on-light or dark-on-dark text.
- No hardcoded hex codes outside the palette above.
- No single-column mobile-style stacking on desktop.
