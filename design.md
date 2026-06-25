# SSourcing China Visual Design

Professional B2B sourcing website with a clean international look.

## Brand feel
- Trustworthy, practical, factory-floor informed, and export-ready.
- Use white and soft slate surfaces with deep navy text, structured borders, and measured spacing.
- Visuals should feel realistic: factories, quality inspection, shipping containers, warehouses, and product sourcing.

## Colors
- Page background: `bg-slate-50`
- Main text: `text-slate-950`
- Body text: `text-slate-700`
- Muted text: `text-slate-600`
- Primary brand: deep navy using Tailwind `bg-slate-950 text-white`
- Secondary brand accent: blue using Tailwind `text-blue-700`, `bg-blue-700`, `border-blue-200`
- Support accent: amber for practical highlights using `text-amber-700`, `bg-amber-50`
- Cards: `bg-white`, `border border-slate-200`, `shadow-sm`

## Typography
- Use Inter as the global font.
- Headlines: strong, compact, practical. Use `font-semibold` or `font-bold` with `tracking-tight`.
- Body copy: clear and concise, no exaggerated marketing claims.

## Layout and spacing
- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Sections: `py-16 sm:py-20 lg:py-24`.
- Cards: rounded corners (`rounded-2xl`), meaningful padding (`p-6` or `p-8`), subtle borders.
- Desktop layouts should use two or three columns where helpful. Mobile should stack cleanly.

## Components
- Buttons should be clear and high contrast with strong hover states.
- Forms should use labeled inputs, visible focus rings, explicit success/error states, and readable text.
- Badges and status labels should have explicit foreground colors.
- Navigation should be simple, sticky, and readable.

## Do
- Use semantic sections and clear CTAs.
- Keep text concise and business-focused.
- Use stock image tags for factory, QC, products, and shipping visuals.

## Don't
- Do not use low-contrast text.
- Do not make exaggerated claims like guaranteed lowest price or risk-free sourcing.
- Do not use random hardcoded hex values in JSX classes.
