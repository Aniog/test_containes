# SSourcing China — Visual Style Guide

A clean, trustworthy, international B2B website for a China-based sourcing agent.
The visual goal is to feel professional and credible to overseas buyers (US/EU),
with realistic factory, QC, and shipping visuals. No exaggerated claims, no hype.

## Brand personality
- Professional, calm, dependable, practical.
- International B2B (English-first), not flashy.
- Conveys scale and reliability without being loud.

## Color palette (Tailwind tokens)
Use a deep navy as the primary brand color, with a single warm accent (amber)
reserved for primary CTAs only. Neutrals are cool slate.

- Primary (brand / navy): `#0f2a4a`  → use as `primary` token
- Primary dark: `#0a1f38`
- Accent (CTA only): `#f59e0b` (amber-500) → `accent` token
- Accent dark (hover): `#d97706` (amber-600)
- Background: `#ffffff` (page) and `#f8fafc` (slate-50, section alt)
- Surface / card: `#ffffff`
- Border: `#e2e8f0` (slate-200)
- Text primary: `#0f172a` (slate-900)
- Text muted: `#475569` (slate-600)
- Text subtle: `#64748b` (slate-500)
- Success: `#16a34a` (green-600)

Do NOT use the accent amber for large fills or body text — only for primary
CTA buttons, key CTA links, and small highlight marks. Everything else stays
navy + slate neutrals.

## Typography
- Font family: Inter (loaded via Google Fonts in index.html), weights 400/500/600/700/800.
- Headings: Inter, weight 700–800, tight tracking, slate-900.
- Body: Inter 400, slate-600, line-height relaxed.
- Eyebrow / labels: Inter 600, uppercase, tracking-wider, small size, navy or amber.
- H1 (hero): text-4xl md:text-6xl, font-extrabold, leading-tight.
- H2 (section): text-3xl md:text-4xl, font-bold.
- H3 (card): text-xl, font-semibold.

## Spacing & layout
- Max content width: `max-w-7xl` (1280px) for most sections; `max-w-3xl` for prose/FAQ.
- Section vertical padding: `py-20 md:py-28`.
- Card padding: `p-6 md:p-8`.
- Consistent rounded corners: `rounded-xl` for cards, `rounded-lg` for buttons/inputs.
- Generous whitespace; avoid cramped grids.

## Borders, shadows, depth
- Cards: `border border-slate-200`, `rounded-xl`, subtle shadow `shadow-sm` on hover `shadow-md`.
- Buttons: solid navy or amber, `rounded-lg`, no heavy shadows.
- Section dividers: thin slate-200 borders or alternating bg (white / slate-50).

## Buttons
- Primary CTA: amber bg `bg-amber-500 hover:bg-amber-600`, white text, `px-6 py-3`, `font-semibold`, `rounded-lg`.
- Secondary CTA: navy bg `bg-[#0f2a4a] hover:bg-[#0a1f38]`, white text.
- Ghost / outline: `border border-slate-300 text-slate-700 hover:border-[#0f2a4a] hover:text-[#0f2a4a]`, bg transparent.

## Imagery
- Use the strk stock image system (`data-strk-img` / `data-strk-bg`).
- Realistic, documentary-style visuals: factory floors, QC inspection, container
  shipping, warehouse, supplier meetings, product samples.
- Avoid generic stock-photo clichés of handshakes on white backgrounds.
- Hero uses a background image (factory / shipping) with a navy overlay for contrast.

## Do's
- Keep contrast high: dark navy text on white, white text on navy/amber.
- Use icons (lucide-react) sparingly to label services and steps.
- Keep copy practical and specific (numbers, steps, deliverables).
- Mobile-first responsive grids (1 col mobile → 2–3 col desktop).

## Don'ts
- No gradient text. No neon colors. No purple/blue gradients.
- No light text on light backgrounds.
- No exaggerated claims ("#1", "guaranteed cheapest", "100% risk-free").
- Do not use amber for body text or large background fills.
- Do not hardcode arbitrary hex values in JSX; use the tokens above.
