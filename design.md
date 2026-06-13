# ARTITECT MACHINERY Visual Design Guide

## Brand direction
ARTITECT MACHINERY should feel elegant, engineered, reliable, and easy to understand. The look combines premium industrial machinery cues with clean editorial spacing.

## Color system
- Primary surface: deep graphite and slate backgrounds for a premium machinery feel. Example Tailwind classes: `bg-slate-950`, `bg-slate-900`, `text-white`.
- Secondary surface: warm off-white and pale slate for readable product/content areas. Example classes: `bg-slate-50`, `bg-white`, `text-slate-950`.
- Accent: refined amber/gold for highlights, calls to action, and small dividers. Example classes: `bg-amber-500`, `text-amber-400`, `border-amber-300`.
- Supporting metal tones: slate, zinc, and neutral grays. Example classes: `text-slate-600`, `border-slate-200`, `bg-slate-100`.

## Typography
- Use Inter as the global font.
- Headlines should be confident, compact, and slightly tracked. Example classes: `font-semibold tracking-tight`.
- Body text should remain readable and practical. Example classes: `text-base leading-7 text-slate-600`.
- Use uppercase micro-labels sparingly for industrial elegance. Example classes: `text-xs font-semibold uppercase tracking-[0.2em]`.

## Layout and spacing
- Use generous vertical spacing and clear sections. Example classes: `py-20`, `lg:py-28`, `px-6`.
- Desktop layouts should use balanced two-column or three-column grids, not mobile-style stacking.
- Mobile layouts should stack cleanly with enough gaps. Example classes: `grid gap-8 lg:grid-cols-2`.
- Keep content width controlled. Example classes: `mx-auto max-w-7xl`.

## Components
- Cards: white or translucent dark surfaces with subtle borders and soft shadows. Example classes: `rounded-3xl border border-slate-200 bg-white shadow-sm`.
- Buttons: large, readable, rounded, with strong contrast. Primary: `bg-amber-500 text-slate-950 hover:bg-amber-400`. Secondary: `border border-white/20 text-white hover:bg-white/10`.
- Badges: clear foreground/background pairing. Example classes: `bg-amber-100 text-amber-900`.

## Do's
- Use strong contrast for every text element.
- Pair dark backgrounds with explicit white or slate-100 text.
- Pair light cards with explicit slate-950 or slate-600 text.
- Use line-art icons and subtle geometric accents to suggest precision engineering.

## Don'ts
- Do not use low-contrast gray on dark backgrounds.
- Do not hardcode arbitrary hex colors in class names.
- Do not overcrowd the page with too many products; group related folding-machine terms into clear product families.
