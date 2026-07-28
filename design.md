# SSourcing China — Design System

A professional B2B sourcing-agent website. Clean, trustworthy, international, practical. No exaggerated claims.

## Brand
- Name: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: professional, clear, practical.

## Typography
- Font family: Inter (Google Fonts), weights 300–800.
- Headings: Inter, semibold/bold, tight tracking.
- Body: Inter 400, 16px base, line-height 1.6.
- Example classes: `font-sans`, `tracking-tight`, `leading-relaxed`.

## Color Palette (semantic tokens)
- Primary (deep navy/indigo — trust): `#0F2A4A` → `primary`
- Primary foreground: `#FFFFFF`
- Accent (warm amber — CTA / energy): `#E08A1E` → `accent`
- Accent foreground: `#1A1206`
- Background: `#F7F8FA` (page), `#FFFFFF` (cards)
- Foreground: `#0F1B2D` (near-black navy text)
- Muted: `#EEF1F6` / muted-foreground `#5A6678`
- Border: `#E2E7EF`
- Success: `#1F8A4C`, Warning: `#C77700`, Danger: `#C0392B`

Use these as named Tailwind colors (see tailwind.config.js). Do NOT hardcode hex values in components.

## Layout & Spacing
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card radius: `rounded-xl` / `rounded-2xl`
- Borders: `border border-border`
- Shadows: subtle, `shadow-sm` default, `shadow-lg` on hover for cards.

## Visual Style
- Clean white surfaces on a light gray page background.
- Generous whitespace, aligned grids.
- Realistic factory / QC / shipping / warehouse visuals via the stock image system.
- Icons from lucide-react, line style, consistent stroke width.
- Buttons: solid primary (navy) for main CTAs, accent (amber) for the primary "Get a Free Sourcing Quote" CTA, outline for secondary.

## Do's
- Use semantic color tokens (primary, accent, foreground, muted, border).
- Keep contrast high: dark navy text on white/light backgrounds.
- Use responsive grids (1 col mobile, 2–3 col desktop).
- Keep CTAs visible and consistent ("Get a Free Sourcing Quote").

## Don'ts
- No magic hex values in JSX class strings.
- No low-contrast text (e.g. light gray on white for important data).
- No exaggerated marketing claims ("#1", "guaranteed", "cheapest").
- No mobile-stacked single-column layouts on desktop.
