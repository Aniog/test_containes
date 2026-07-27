# SSourcing China — Design System

A clean, trustworthy, international B2B website for a China-based sourcing agent.
The visual goal is to feel professional, calm, and credible — the opposite of a
flashy consumer site. Buyers should feel they are dealing with a serious partner.

## Brand personality
- Professional, clear, practical. No exaggerated claims.
- International B2B. English-first. Calm and confident.
- Trustworthy: lots of structure, generous whitespace, restrained color.

## Typography
- Font family: Inter (loaded via Google Fonts in index.html).
- Headings: Inter, weights 600–800, tight tracking, large sizes.
- Body: Inter, weight 400–500, line-height 1.6–1.7 for readability.
- Eyebrow / label text: uppercase, tracking-wider, small, muted color.
- Example classes: `font-bold tracking-tight`, `text-sm font-medium`, `text-xs uppercase tracking-wider`.

## Color palette (Tailwind tokens)
Use a deep navy as the primary brand color, with a single warm accent (amber)
reserved for CTAs and key highlights. Neutrals are slate-based.

- `primary` (navy): `#0f2a4a` — primary brand, headers, dark sections
- `primary-foreground`: `#ffffff`
- `accent` (amber): `#f59e0b` — CTA buttons, key highlights only
- `accent-foreground`: `#1a1303`
- `bg` (page background): `#f8fafc` (slate-50)
- `surface` (cards): `#ffffff`
- `border`: `#e2e8f0` (slate-200)
- `muted` (subtle backgrounds): `#f1f5f9` (slate-100)
- `muted-foreground`: `#475569` (slate-600) — secondary text, must stay readable
- `foreground`: `#0f172a` (slate-900) — primary text
- `success`: `#16a34a` (green-600)

Do NOT use light text on light backgrounds. All body text on light surfaces
uses `text-slate-900` or `text-slate-600`/`text-slate-700`. On dark navy
sections, text uses `text-white` or `text-slate-300`.

## Spacing & layout
- Max content width: `max-w-7xl` (1280px) for most sections; `max-w-3xl` for prose/blog.
- Section vertical padding: `py-16 md:py-24`.
- Card padding: `p-6 md:p-8`.
- Consistent rounded corners: `rounded-xl` for cards, `rounded-lg` for buttons/inputs.
- Borders: `border border-slate-200`. Subtle shadows: `shadow-sm`.

## Components
- Buttons: solid navy `bg-[#0f2a4a] text-white` for primary; amber `bg-[#f59e0b] text-[#1a1303]`
  for the main CTA "Get a Free Sourcing Quote". Secondary = outline `border border-slate-300`.
- Cards: white surface, border, rounded-xl, shadow-sm, hover lift `hover:shadow-md transition`.
- Section headers: eyebrow label + h2 + supporting paragraph, centered or left-aligned.
- Numbered process steps with connecting line on desktop.
- Stats band on dark navy background with large numbers.

## Imagery
- Realistic factory / QC inspection / shipping / warehouse visuals via the strk image system.
- Use `data-strk-img` for content images and `data-strk-bg` for hero/section backgrounds.
- Always pair images with descriptive nearby text and reference those text IDs in the query.

## Do's
- Use generous whitespace and clear hierarchy.
- Keep CTAs consistent and always point to the inquiry form / Contact page.
- Use icons (lucide-react) sparingly to support meaning, not decorate.
- Ensure every value, label, and status text is clearly readable.

## Don'ts
- No gradient text, no neon colors, no drop shadows on text.
- No exaggerated marketing claims ("#1", "best in the world").
- No low-contrast text. No light-on-light or dark-on-dark text.
- Do not hardcode arbitrary hex values outside the palette above in components.
