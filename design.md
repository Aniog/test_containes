# SSourcing China — Design System

A professional B2B sourcing-agent website. Clean, trustworthy, international, practical.

## Brand
- Name: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: professional, clear, practical, no exaggerated claims.

## Typography
- Font family: Inter (Google Fonts), weights 300–800.
- Headings: Inter, semibold/bold, tight tracking.
- Body: Inter 400, line-height 1.6.
- Example classes: `font-sans`, `tracking-tight`, `leading-relaxed`.

## Color Palette (semantic tokens)
- Primary (deep navy/indigo — trust): `#1e3a5f` → use as `primary`.
- Primary accent (steel blue): `#2f6db5`.
- Accent (warm amber for CTAs/highlights): `#d97706` → `accent`.
- Background: `#f8fafc` (slate-50) light page bg; white cards.
- Foreground text: `#0f172a` (slate-900) for headings, `#334155` (slate-700) for body.
- Muted: `#64748b` (slate-500) for secondary text.
- Border: `#e2e8f0` (slate-200).
- Success: `#15803d`.

Map these into tailwind.config.js as named colors so no magic hex values appear in JSX.

## Layout & Spacing
- Max content width: `max-w-7xl` (1280px), centered with `mx-auto px-4 sm:px-6 lg:px-8`.
- Section vertical padding: `py-16 md:py-24`.
- Card radius: `rounded-xl` / `rounded-2xl`.
- Card border: `border border-slate-200`, subtle shadow `shadow-sm`.
- Consistent gaps: `gap-6` / `gap-8` in grids.

## Visual Style
- Clean, lots of whitespace, professional B2B.
- Use realistic factory / QC / shipping / warehouse stock imagery via the strk image system.
- Icons from lucide-react, line style, `w-6 h-6` or `w-5 h-5`.
- Buttons: solid primary (navy) for main CTA, amber accent for the "Get a Free Sourcing Quote" CTA, outline/ghost for secondary.
- Trust signals: stats counters, certification-style badges, client logos placeholder row.

## Do's
- Use semantic token pairs (foreground/background, primary/primary-foreground).
- Keep every text readable against its background (high contrast).
- Responsive: mobile-first, use `md:` and `lg:` breakpoints; multi-column on desktop, stacked on mobile.
- Use Tailwind utility classes only; no inline styles.

## Don'ts
- No magic hex codes in JSX — use named colors from tailwind.config.js.
- No low-contrast text (e.g. light gray on white for important data).
- No exaggerated marketing claims ("#1", "best in world").
- No mobile-style single-column stacking forced on desktop.
