# ARTITECT MACHINERY Visual Style Guide

## Brand personality
Elegant, precise, robust, and user friendly. The visual language should feel premium and engineered, with generous spacing and clear hierarchy.

## Color palette
- Deep graphite surface: `bg-slate-950`, `text-slate-950`
- Steel panels: `bg-slate-900`, `bg-slate-800`, `border-slate-700`
- Warm metal accent: `text-amber-400`, `bg-amber-400`, `border-amber-300`
- Clean page surfaces: `bg-slate-50`, `bg-white`, `text-slate-900`
- Supporting muted text: `text-slate-600` on light backgrounds, `text-slate-300` on dark backgrounds

## Typography
- Use Inter as the primary font.
- Hero headings should be bold, tightly tracked, and large: `text-5xl md:text-7xl font-semibold tracking-tight`.
- Section headings should be confident and readable: `text-3xl md:text-5xl font-semibold tracking-tight`.
- Body copy should be clear and spacious: `text-base md:text-lg leading-7`.

## Layout and spacing
- Use wide containers with `max-w-7xl mx-auto px-6 lg:px-8`.
- Prefer spacious vertical rhythm: `py-20 md:py-28` for major sections.
- Desktop layouts should use multi-column grids; mobile layouts should stack cleanly.
- Cards should use rounded corners, subtle borders, and soft shadows.

## Components
- Buttons: rounded-full, strong contrast, clear hover states.
- Cards: `rounded-3xl border bg-white shadow-sm` on light sections; `rounded-3xl border border-white/10 bg-white/5` on dark sections.
- Badges: compact uppercase labels with generous letter spacing.

## Do
- Keep all text readable with explicit foreground colors.
- Use warm amber accents sparingly for CTAs, highlights, and key numbers.
- Combine clean light sections with premium dark industrial sections.

## Don't
- Do not use low-contrast gray text on dark backgrounds.
- Do not overcrowd desktop layouts with mobile-only stacking.
- Do not use arbitrary hardcoded hex colors in component classes.
