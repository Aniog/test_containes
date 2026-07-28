# SSourcing China Visual Design System

## Brand Position
A clean, trustworthy international B2B website for a China sourcing agent. The design should feel practical, transparent, and competent, with realistic industrial, quality-control, and logistics visuals.

## Typography
- Primary font: Inter, loaded from Google Fonts.
- Headings: strong, compact, professional, using `font-bold` or `font-semibold` with tight tracking.
- Body text: clear and readable, using `text-slate-600` or `text-slate-700` on light backgrounds.
- Avoid decorative or playful typography.

## Color Palette
Use named Tailwind colors configured in `tailwind.config.js`:
- `brand-navy`: deep navy for headers, primary text, and dark sections. Example: `bg-brand-navy`, `text-brand-navy`.
- `brand-blue`: clear business blue for CTAs and active navigation. Example: `bg-brand-blue`, `text-brand-blue`.
- `brand-sky`: soft blue background tint for panels and highlights. Example: `bg-brand-sky`.
- `brand-amber`: restrained amber accent for trust badges and small highlights. Example: `text-brand-amber`.
- `brand-slate`: balanced slate body text.
- `brand-line`: subtle border color.

## Layout and Spacing
- Use generous white space, clear section hierarchy, and max-width containers (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`).
- Desktop layouts should use multi-column grids where appropriate; mobile layouts should stack cleanly.
- Cards should use rounded corners (`rounded-2xl` or `rounded-3xl`), subtle borders, and soft shadows.

## Components
- Primary CTA: solid `brand-blue` button with white text, rounded full, strong hover state.
- Secondary CTA: white or transparent button with navy/blue text and visible border.
- Cards: white background, explicit `text-slate-900`, `border-brand-line`, and readable muted text.
- Dark sections: `bg-brand-navy` with explicit white and light-blue text.
- Forms: white fields with slate text, visible labels, and clear focus rings.

## Images
- Use Strikingly stock image attributes for realistic factory, QC inspection, supplier meeting, production, warehouse, and shipping visuals.
- Do not use hardcoded external image URLs.
- Every image query should reference nearby text IDs.

## Do's
- Keep content practical, clear, and buyer-focused.
- Emphasize supplier verification, QC, production follow-up, shipping coordination, and inquiry conversion.
- Maintain high contrast for all text and UI elements.

## Don'ts
- Do not use exaggerated claims such as “guaranteed best price” or “risk-free sourcing”.
- Do not use low-contrast text, decorative clutter, or consumer-style visuals.
- Do not hardcode arbitrary hex colors in JSX class strings; use Tailwind theme names.
