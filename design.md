# SSourcing China — Design System

A professional, trustworthy, international B2B sourcing agency website.
Visual style: clean, corporate, confident, practical. No exaggerated claims.

## Typography
- Font family: Inter (Google Fonts), weights 300–800.
- Headings: Inter 700/800, tight tracking, dark slate.
- Body: Inter 400/500, relaxed line-height.
- Eyebrow / labels: Inter 600, uppercase, wide tracking, small size, brand color.

## Color Palette (semantic tokens)
- Brand primary (deep blue): `#0B3D91`  -> `primary`
- Brand primary hover: `#082E6E`
- Accent (signal orange, used sparingly for CTAs/highlights): `#E87722` -> `accent`
- Accent hover: `#C9641A`
- Ink / heading text: `#0F172A` (slate-900)
- Body text: `#334155` (slate-700)
- Muted text: `#64748B` (slate-500)
- Surface / page background: `#F8FAFC` (slate-50)
- Card background: `#FFFFFF`
- Border: `#E2E8F0` (slate-200)
- Success green: `#16A34A`
- Dark footer: `#0B1220`

## Spacing & Layout
- Max content width: `max-w-7xl` (1280px), centered with `px-6 lg:px-8`.
- Section vertical padding: `py-20 lg:py-28`.
- Card radius: `rounded-xl` (12px) / `rounded-2xl` for hero cards.
- Card border: `border border-slate-200`, subtle shadow `shadow-sm`.

## Visual Style
- Clean white cards on light slate background.
- Generous whitespace, strong typographic hierarchy.
- Use brand blue for primary buttons and key accents.
- Use accent orange ONLY for the main CTA buttons and small highlights.
- Icons from lucide-react, consistent stroke width.
- Realistic factory / QC / shipping / warehouse imagery via the strk image system.

## Do's
- Use semantic color tokens (primary, accent, foreground, muted, etc.).
- Keep contrast high: dark text on light surfaces, white text on brand blue.
- Use rounded-xl cards with subtle borders and shadows.
- Keep CTAs prominent and consistent ("Get a Free Sourcing Quote").

## Don'ts
- No garish gradients or neon colors.
- No low-contrast gray text on white for important content.
- No hardcoded arbitrary hex codes in JSX class strings (use config tokens).
- No exaggerated marketing claims; keep tone practical and factual.
