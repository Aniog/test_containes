# ARTITECT MACHINERY Design Guide

## Brand direction
ARTITECT MACHINERY should feel elegant, precise, industrial, and approachable. The visual language combines premium engineering confidence with clear, user-friendly product communication.

## Color system
- Primary surface: deep slate / near navy for hero and footer areas. Example Tailwind classes: `bg-slate-950`, `text-white`.
- Page background: warm light gray for comfortable reading. Example: `bg-slate-50`.
- Card surfaces: white or very light slate with clear dark text. Example: `bg-white text-slate-950`.
- Accent: amber / brass for premium machinery highlights and calls to action. Example: `bg-amber-500`, `text-amber-500`, `border-amber-400`.
- Supporting colors: slate blue and steel gray. Example: `text-slate-600`, `border-slate-200`, `bg-slate-900`.

## Typography
- Use Inter as the global font.
- Headlines should be bold, spacious, and confident. Example: `text-4xl md:text-6xl font-bold tracking-tight`.
- Body copy should be easy to scan. Example: `text-base md:text-lg leading-7 text-slate-600`.
- Section labels can use uppercase tracking for an engineered feel. Example: `text-xs font-semibold uppercase tracking-[0.25em] text-amber-600`.

## Layout and spacing
- Use generous vertical spacing for an elegant B2B feel. Example: `py-20 md:py-28`.
- Keep desktop layouts balanced with two-column hero/product sections, then stack on mobile. Example: `grid gap-10 lg:grid-cols-2`.
- Cards should have comfortable padding and soft elevation. Example: `rounded-3xl border border-slate-200 bg-white p-6 shadow-sm`.
- Buttons should be clear, large enough, and consistent. Example: `rounded-full px-6 py-3 font-semibold`.

## Visual style
- Use subtle gradients and overlays rather than loud color blocks.
- Use stock image tags for product and workshop visuals; do not use hardcoded stock image URLs.
- Prefer crisp borders, rounded corners, and restrained shadows.
- Keep every text element high contrast and readable.

## Do's
- Highlight product names clearly: double folding machine, double folder, sheet metal folder, sheet metal folding machine, metal folder, metal folder machine, metal folding machine.
- Use benefit-focused language: precision, durability, consistent bends, easy operation, dependable support.
- Make calls to action obvious and user-friendly.
- Maintain responsive design for mobile and desktop.

## Don'ts
- Do not use low-contrast text over machinery images.
- Do not overcrowd sections with too much technical detail.
- Do not use arbitrary hex colors in JSX class names; use Tailwind semantic palette classes.
- Do not make desktop sections look like mobile-only stacked layouts.
