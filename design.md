# SSourcing China Design System

## Brand feeling
Clean, trustworthy, international B2B sourcing advisory. The design should feel practical and grounded, using factory, inspection, logistics, and supplier-verification imagery.

## Typography
- Primary font: Inter from Google Fonts.
- Headings: strong, compact, and professional. Example classes: `text-4xl md:text-6xl font-bold tracking-tight`.
- Body text: clear and readable. Example classes: `text-base md:text-lg leading-7`.
- Labels and navigation: medium weight, restrained letter spacing.

## Colors
Use named Tailwind colors only, defined in `tailwind.config.js`:
- `sourcing-navy`: primary text, dark sections, header accents.
- `sourcing-blue`: primary CTA and trust accents.
- `sourcing-sky`: light CTA and process backgrounds.
- `sourcing-ink`: main readable text on light surfaces.
- `sourcing-muted`: secondary text on light surfaces.
- `sourcing-line`: borders and dividers.
- `sourcing-soft`: page background.
- `sourcing-card`: card background.
- `sourcing-amber`: practical highlight for quality control and risk alerts.
- `sourcing-green`: positive verification/check signals.

## Layout and spacing
- Use generous whitespace and a max content width around `max-w-7xl`.
- Desktop layouts should use multi-column grids where helpful; mobile should stack cleanly.
- Sections use `py-16 md:py-24` with consistent container padding `px-4 sm:px-6 lg:px-8`.
- Cards use rounded corners, subtle borders, and soft shadows: `rounded-2xl border border-sourcing-line shadow-sm`.

## Visual style
- Prefer flat, modern surfaces with a few subtle gradients.
- Use realistic factory/QC/shipping stock visuals through Strikingly image attributes.
- Use icons sparingly to reinforce services, verification, QC, timelines, and shipping.
- CTA buttons should be clear, high contrast, and action-focused.

## Do's
- Keep all important text explicitly readable with `text-sourcing-ink`, `text-white`, or `text-sourcing-muted`.
- Pair dark backgrounds with white or light text.
- Use practical, specific B2B copy focused on qualified sourcing inquiries.
- Keep forms simple and professional.

## Don'ts
- Do not use exaggerated claims like guaranteed lowest prices or risk-free sourcing.
- Do not use arbitrary hex values or inline pixel styles in components.
- Do not use low-contrast muted text on dark or image backgrounds.
- Do not overuse decorative images where a clean B2B layout is stronger.
