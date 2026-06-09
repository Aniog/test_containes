# SSourcing China Design System

## Brand direction
- Clean, trustworthy, international B2B presentation.
- Visual tone should feel practical and credible rather than promotional.
- Emphasize sourcing, factory verification, inspection, production follow-up, and shipping coordination.

## Color system
- Primary surfaces: white and soft slate backgrounds.
- Primary text: dark slate for strong readability.
- Accent: deep blue for CTA and key highlights.
- Supporting neutrals: muted slate borders and secondary text.
- Example Tailwind classes:
  - Page background: `bg-slate-50`
  - Main surface: `bg-white`
  - Primary text: `text-slate-950`
  - Secondary text: `text-slate-600`
  - Borders: `border-slate-200`
  - CTA background: `bg-blue-700`
  - CTA hover: `hover:bg-blue-800`
  - CTA text: `text-white`
  - Soft accent surface: `bg-blue-50`

## Typography
- Use Inter for the full site.
- Headlines should be confident and compact with strong contrast.
- Body copy should be concise, readable, and professional.
- Example classes:
  - Hero title: `text-4xl font-semibold tracking-tight md:text-6xl`
  - Section title: `text-3xl font-semibold tracking-tight md:text-4xl`
  - Body text: `text-base leading-7 text-slate-600`
  - Eyebrow: `text-sm font-semibold uppercase tracking-[0.2em] text-blue-700`

## Layout and spacing
- Use wide but controlled content widths.
- Prefer `max-w-7xl` for full sections and `max-w-3xl` to `max-w-4xl` for reading-heavy content.
- Use generous vertical spacing with `py-16`, `py-20`, and `py-24`.
- Use card padding around `p-6` to `p-8`.

## Components
- Cards: `rounded-3xl border border-slate-200 bg-white shadow-sm`
- Large feature panels: `rounded-[2rem] border border-slate-200 bg-white shadow-sm`
- Buttons:
  - Primary: `inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800`
  - Secondary: `inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100`
- Section wrappers should explicitly set readable text colors.

## Imagery
- Use realistic visuals related to factories, supplier meetings, quality inspection, production lines, warehousing, packaging, and container shipping.
- Images should support trust and competence, not look like generic lifestyle photography.
- Prefer a mix of hero image panels, service illustrations, and case-study visuals.

## Do
- Keep text highly legible on every surface.
- Use restrained accent color usage.
- Keep layouts balanced on desktop and well stacked on mobile.
- Present information in a structured, decision-friendly B2B format.

## Don’t
- Don’t use exaggerated claims, loud gradients, or flashy marketing visuals.
- Don’t rely on low-contrast gray text on white backgrounds.
- Don’t crowd desktop sections into narrow mobile-style single-column layouts when wider layouts are appropriate.
- Don’t use arbitrary hex values in JSX class strings.
