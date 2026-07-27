# SSourcing China — Design System

A professional B2B website for a China-based sourcing agent. The visual style
must feel clean, trustworthy, international, and practical — the kind of site
an overseas buyer (procurement manager, founder, e-commerce seller) trusts with
a six-figure purchase order.

## Brand personality
- Trustworthy, calm, competent — never flashy or salesy.
- International B2B: clear English, generous whitespace, restrained color.
- Industrial but modern: factory / QC / shipping context, not consumer retail.

## Color palette (semantic tokens)
Use Tailwind CSS variable tokens. Primary = deep navy blue (trust, corporate).
Accent = a single warm amber used sparingly for CTAs and highlights.

- `--background`: `#ffffff` (white) — page background
- `--foreground`: `#0f172a` (slate-900) — primary text
- `--muted`: `#f1f5f9` (slate-100) — subtle section backgrounds
- `--muted-foreground`: `#475569` (slate-600) — secondary text
- `--border`: `#e2e8f0` (slate-200) — hairline borders
- `--primary`: `#0f2a4a` (deep navy) — brand / headings / nav
- `--primary-foreground`: `#ffffff`
- `--accent`: `#c8902a` (amber) — CTA buttons, key highlights (use sparingly)
- `--accent-foreground`: `#ffffff`
- `--card`: `#ffffff`
- `--card-foreground`: `#0f172a`

Do NOT use bright blue (`#646cff`), purple, or any consumer-retail gradients.
Do NOT use dark mode for this site — it is a light, professional B2B site.

## Typography
- Font family: Inter (loaded via Google Fonts in index.html), weights 400/500/600/700/800.
- Headings (h1-h3): font-weight 700-800, tight tracking, slate-900 / navy.
- Body: 400, slate-600/700, line-height relaxed.
- Eyebrow / overline labels: uppercase, tracking-widest, text-xs, amber or slate-500.
- Example Tailwind: `text-4xl font-extrabold tracking-tight text-slate-900`

## Spacing & layout
- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Consistent rounded corners: `rounded-xl` for cards, `rounded-lg` for buttons/inputs.
- Borders: `border border-slate-200`, subtle shadows `shadow-sm`.

## Visual style rules
- Generous whitespace; avoid cluttered grids.
- Use real factory / QC / shipping / warehouse imagery via the strk-img system.
- Icons: lucide-react, line style, slate-600 or amber, `w-5 h-5` / `w-6 h-6`.
- Buttons: solid navy or amber, `rounded-lg`, `font-semibold`, clear hover state.
- Cards: white bg, hairline border, subtle shadow on hover.
- Numbered process steps and checklists are encouraged (practical B2B feel).

## Do's
- Keep contrast high: dark text on white/light backgrounds.
- Use navy for primary actions and headings.
- Use amber only for the main CTA and small highlights.
- Make layouts responsive: single column on mobile, multi-column on desktop.

## Don'ts
- No dark mode. No neon colors. No purple/blue gradients.
- No exaggerated marketing language ("#1", "world's best", "guaranteed").
- No low-contrast gray text on white.
- No hardcoded arbitrary hex codes in JSX — use the tokens above.
