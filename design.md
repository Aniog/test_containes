# ARTITECT MACHINERY — Design Guide

Brand: ARTITECT MACHINERY — industrial sheet metal folding machinery.
Style: elegant but user-friendly. Clean, premium, trustworthy, engineered.

## Typography
- Headings: "Inter", weight 700-800, tight letter-spacing (-0.02em), large sizes.
- Body: "Inter", weight 400-500, line-height 1.6.
- Eyebrow / labels: uppercase, tracking-widest, weight 600, small size.

## Colors (Tailwind tokens)
- Primary (industrial steel blue): slate-900 / slate-800 for dark surfaces.
- Accent (machined amber/bronze): amber-500 (#f59e0b) for CTAs and highlights.
- Neutral surfaces: white, slate-50, slate-100.
- Text: slate-900 on light, slate-100 on dark.
- Muted text: slate-500 / slate-400.

Do NOT use light text on light backgrounds. Always pair foreground with its surface.

## Borders & Spacing
- Rounded corners: rounded-xl (cards), rounded-lg (buttons/inputs).
- Borders: border border-slate-200 on light cards.
- Shadows: shadow-sm default, shadow-lg on hover for cards.
- Section padding: py-20 md:py-28, container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8.

## Visual Style
- Generous whitespace, grid layouts, 3-column product grid on desktop.
- Dark hero with background image and amber accent CTA.
- Cards with subtle hover lift (hover:-translate-y-1 transition).
- Icons from lucide-react in amber or slate.
- Buttons: solid amber for primary, outline slate for secondary.

## Do's
- Use semantic token pairs (foreground/background).
- Keep contrast high for all text.
- Responsive: stack to single column on mobile, multi-column on desktop.

## Don'ts
- No arbitrary hex codes in class strings.
- No low-contrast text.
- No mobile-style single-column stacking on desktop.
