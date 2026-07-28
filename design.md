# SSourcing China Visual Style Guide

## Brand direction
SSourcing China should look clean, trustworthy, practical, and international. The design should feel like a professional B2B advisory and operations partner rather than a flashy marketplace. Use confident structure, clear proof points, and realistic factory, quality control, and logistics visuals.

## Typography
- Primary font: Inter, loaded from Google Fonts in `index.html`.
- Headings: tight leading, strong weight, dark navy color. Example classes: `text-4xl md:text-6xl font-semibold tracking-tight text-slate-950`.
- Body copy: readable neutral slate. Example classes: `text-base md:text-lg leading-7 text-slate-600`.
- Labels and badges: small uppercase or semibold text with strong contrast. Example classes: `text-xs font-semibold uppercase tracking-[0.18em]`.

## Color palette
Use named Tailwind colors configured in `tailwind.config.js`:
- `ink`: deep navy for headers, main text, and premium dark surfaces.
- `steel`: calm blue-gray for secondary surfaces and borders.
- `trust`: professional blue for links, CTAs, and process markers.
- `harbor`: teal accent for inspection, verification, and success states.
- `amberline`: restrained amber accent for highlights, shipping, and warnings.

## Layout and spacing
- Page width: centered max-width containers with `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Sections: generous vertical rhythm, normally `py-16 md:py-24`.
- Cards: use soft borders, subtle shadows, white backgrounds, and clear padding. Example: `rounded-3xl border border-slate-200 bg-white p-6 shadow-card`.
- Desktop layouts should use 2 to 4 columns where appropriate. Mobile layouts should stack cleanly.

## Visual elements
- Use realistic sourcing-related stock imagery through the Strikingly image system: factories, QC inspection, production lines, warehouse packing, container shipping, business meetings.
- Avoid decorative or unrelated lifestyle imagery.
- Use iconography sparingly for scannability.
- Add subtle background gradients and grid-like structure, but keep the website businesslike.

## Do
- Keep all important text explicitly readable with strong foreground colors.
- Make the inquiry CTA visible above the fold and repeated near the bottom.
- Use concise, practical copy that supports qualified sourcing inquiries.
- Clearly explain services, process, product categories, risks solved, trust points, case studies, FAQ, and contact form.

## Don't
- Do not use exaggerated claims such as guaranteed lowest prices or risk-free sourcing.
- Do not use low-contrast gray text on colored backgrounds.
- Do not use random hex values in JSX class strings; add named colors to Tailwind if needed.
- Do not overcrowd mobile layouts.
