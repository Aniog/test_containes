# SSourcing China Design Guide

## Brand direction
A clean, trustworthy B2B sourcing website for overseas buyers who need practical help in China. The visual tone should feel international, efficient, and credible rather than flashy or salesy.

## Overall style
- Use a light neutral background with white content surfaces.
- Use a deep navy for primary actions and important headings.
- Use slate and muted gray tones for supporting text.
- Add restrained warm accent colors only for highlights and process markers.
- Keep sections spacious and structured.

## Typography
- Primary font: Inter
- Headings: strong, compact, professional
- Body copy: clear and practical with comfortable line height
- Recommended Tailwind patterns:
  - H1: `text-4xl font-semibold tracking-tight md:text-5xl`
  - H2: `text-3xl font-semibold tracking-tight md:text-4xl`
  - H3: `text-xl font-semibold`
  - Body: `text-base leading-7 text-slate-600`
  - Small meta text: `text-sm text-slate-500`

## Color system
Use Tailwind semantic color families instead of raw hex values in JSX.
- Primary brand tone: navy-style classes such as `bg-slate-900`, `text-slate-900`
- Surface backgrounds: `bg-white`, `bg-slate-50`, `bg-slate-100`
- Supporting text: `text-slate-600`, `text-slate-500`
- Borders: `border-slate-200`
- CTA contrast: `bg-slate-900 text-white hover:bg-slate-800`
- Soft highlight: `bg-amber-50 text-amber-700`
- Success/trust accents: `bg-emerald-50 text-emerald-700`

## Layout
- Use a centered container with generous horizontal padding: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
- Use two-column layouts on desktop where content benefits from comparison or scanning.
- Use cards with subtle borders and shadows: `rounded-2xl border border-slate-200 bg-white shadow-sm`
- Keep sections visually separated with alternating soft backgrounds.

## Components
- Buttons should be rounded, strong, and readable.
- Navigation should be simple and corporate.
- Use stats, trust badges, process steps, and case-study cards to support credibility.
- Inquiry forms should look structured and serious, with explicit labels and visible helper text.

## Imagery
- Use realistic visuals related to factory visits, supplier verification, product inspection, packaging, warehouse handling, and container shipping.
- Prefer wide hero imagery and supporting rectangular content images.
- Images should reinforce operations, quality control, and logistics, not generic office scenes.

## Do
- Keep text highly readable against every surface.
- Emphasize clarity, process, and buyer risk reduction.
- Write concise, practical B2B copy.
- Make CTAs visible in the header, hero, and contact areas.

## Do not
- Do not use exaggerated claims, hype language, or luxury aesthetics.
- Do not use weak-contrast text on tinted cards.
- Do not overcrowd sections with too many colors or decorative effects.
- Do not make the desktop layout look like a mobile-only single column page.
