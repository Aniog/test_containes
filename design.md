# SSourcing China — Visual Design System

## Brand Personality
Clean, trustworthy, international B2B. Practical and professional. No exaggerated claims, no flashy gimmicks. The site should feel like a reliable operations partner: calm navy, structured layouts, generous whitespace, and realistic industrial photography (factories, QC inspections, container shipping).

## Color Palette (Tailwind named colors — configured in tailwind.config.js)

| Token | Hex | Usage |
|---|---|---|
| `navy` (950-50 scale) | #0A2540 base | Primary brand color. Headings, footer background, dark sections, buttons. |
| `brand` (blue scale) | #1B5FE0 base | Primary CTA buttons, links, accents, active states. |
| `accent` (amber) | #F59E0B | Sparingly: small highlights, star ratings, key stat accents. Never large fills. |
| Neutral surfaces | white, slate-50, slate-100 | Section backgrounds alternate white / slate-50. |
| Text | slate-900 headings, slate-600 body, slate-500 muted | Always explicit. Never rely on inheritance on colored surfaces. |
| Borders | slate-200 | Cards, tables, dividers. |

## Typography
- Font: Inter (Google Fonts, loaded in index.html). Weights 400/500/600/700/800.
- Page H1: `text-4xl md:text-5xl font-bold tracking-tight text-slate-900` (on light) / `text-white` (on navy).
- Section eyebrow: `text-sm font-semibold uppercase tracking-wider text-brand-600`.
- Section H2: `text-3xl md:text-4xl font-bold tracking-tight text-slate-900`.
- Body: `text-base md:text-lg leading-relaxed text-slate-600`.
- Small/muted: `text-sm text-slate-500`.

## Layout & Spacing
- Max width container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Section padding: `py-16 md:py-24`.
- Cards: `rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm`.
- Grids: services/products `md:grid-cols-2 lg:grid-cols-3`, case studies `lg:grid-cols-3`, steps `md:grid-cols-2 lg:grid-cols-4`.

## Components
- Primary button: `bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg px-6 py-3`.
- Secondary button: `border border-slate-300 bg-white text-slate-700 hover:bg-slate-50`.
- On navy surfaces: primary button stays `bg-brand-500 hover:bg-brand-400 text-white`; body text `text-slate-300`; headings `text-white`.
- Badges/tags: `bg-brand-50 text-brand-700 border border-brand-100 rounded-full text-xs font-medium px-3 py-1`.
- Icons: lucide-react, `w-5 h-5`/`w-6 h-6`, in `bg-brand-50 text-brand-600 rounded-lg p-3` tiles on light cards; `text-brand-300` on navy.
- Forms: labels `text-sm font-medium text-slate-700`; inputs `rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:ring-brand-500`.

## Imagery
- Use stock image tagging system (data-strk-img / data-strk-bg) with queries referencing nearby headings/descriptions.
- Subjects: factory floors, production lines, QC inspectors measuring goods, warehouse pallets, container ports, container ships, business meetings. Realistic, industrial, professional.
- Hero: background image with navy overlay (`bg-navy-950/70`) so white text stays readable.

## Do's and Don'ts
- DO alternate white and slate-50 sections for rhythm.
- DO keep text readable: explicit `text-white`/`text-slate-300` on navy; explicit `text-slate-900`/`text-slate-600` on light.
- DO use real-feeling numbers in trust stats (e.g. "200+ verified suppliers", "12 product categories").
- DON'T use exaggerated claims ("#1", "best in China") — keep tone factual.
- DON'T use gradients everywhere, neon colors, or decorative emoji.
- DON'T use magic hex values in class strings — use the named tokens above.
