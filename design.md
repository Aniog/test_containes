# ARTITECT MACHINERY Design System

## Visual direction
Elegant industrial design with a premium machinery showroom feel. The interface should be user friendly, calm, and trustworthy, balancing dark graphite surfaces with warm metal accents.

## Colors
- Primary surface: deep graphite and slate backgrounds using Tailwind classes like `bg-slate-950`, `bg-slate-900`, and `bg-slate-800`.
- Light content surfaces: warm off-white and slate-tinted panels using `bg-stone-50`, `bg-white`, and `bg-slate-100`.
- Accent: refined amber/gold for calls to action and highlights using `bg-amber-500`, `text-amber-500`, `border-amber-400`, and hover states like `hover:bg-amber-400`.
- Text: use `text-white`, `text-slate-100`, `text-slate-300`, `text-slate-700`, and `text-slate-950` to keep contrast high.

## Typography
- Use Inter as the base font.
- Headlines should be bold, spacious, and refined with tracking adjustments like `tracking-tight` or `tracking-[0.2em]` for small labels.
- Body copy should be readable with `leading-relaxed` and comfortable widths.

## Spacing and layout
- Use generous section padding: `py-16`, `py-20`, and `lg:py-28`.
- Use max-width containers: `max-w-7xl mx-auto px-6 lg:px-8`.
- Desktop layouts should use multi-column grids; mobile should stack cleanly with Tailwind breakpoints.

## Components
- Cards: rounded corners with subtle borders and shadows, e.g. `rounded-3xl border border-slate-200 shadow-sm`.
- Dark cards: use explicit foreground colors, e.g. `bg-slate-900 text-white border-white/10`.
- Buttons: pill-shaped with clear hover states, e.g. `rounded-full bg-amber-500 text-slate-950 hover:bg-amber-400`.
- Badges: small uppercase labels with letter spacing and clear contrast.

## Do
- Keep all text readable with explicit foreground colors.
- Use industrial imagery only where it strengthens the machinery brand.
- Keep navigation simple and friendly.

## Don't
- Do not use low contrast gray text on dark backgrounds.
- Do not overcrowd sections with too many competing elements.
- Do not use playful colors that weaken the premium industrial style.
