# SSourcing China — Design System

## Brand
SSourcing China is a B2B sourcing agent based in China helping overseas buyers
find reliable suppliers, verify factories, inspect quality, follow production,
and coordinate shipping. The visual style must feel clean, trustworthy,
international, and professional — not flashy or salesy.

## Typography
- Font family: Inter (Google Fonts), weights 300–800.
- Headings: bold, tight tracking, large sizes.
- Body: 400/500 weight, relaxed line-height.
- Example Tailwind: `font-sans`, `text-4xl font-bold tracking-tight`.

## Color Palette (Tailwind tokens)
- Primary (deep navy / trust): `#0B2A4A`  -> `primary`
- Primary foreground: `#FFFFFF`
- Accent (industrial blue): `#1E5F9E` -> `accent`
- Accent foreground: `#FFFFFF`
- CTA / action (amber, used sparingly for buttons): `#F59E0B` -> `cta`
- CTA foreground: `#1A1A1A`
- Background: `#F7F9FC` (page), `#FFFFFF` (cards)
- Foreground / text: `#0F1B2D`
- Muted: `#E8EDF3` (muted bg), `#5A6B7E` (muted foreground)
- Border: `#D7DEE8`
- Success: `#15803D`, Warning: `#B45309`, Danger: `#B91C1C`

## Spacing & Layout
- Max content width: `max-w-7xl` (1280px), centered with `px-4 sm:px-6 lg:px-8`.
- Section vertical padding: `py-16 md:py-24`.
- Card radius: `rounded-xl` (12px). Buttons: `rounded-lg`.
- Consistent gaps: `gap-6` / `gap-8` for grids.

## Visual Style
- Clean white cards with subtle borders and soft shadows (`shadow-sm`, `border`).
- Generous whitespace. No heavy gradients on content areas.
- Use navy as the dominant brand color in headers/footers.
- Amber only for primary CTA buttons.
- Realistic factory / QC / shipping / warehouse imagery via the stock image system.
- Icons from lucide-react, line style, `w-5 h-5` or `w-6 h-6`.

## Do's
- Use semantic token pairs (foreground/background, card-foreground/card).
- Keep contrast high; all text must be clearly readable.
- Use responsive grids: 1 col mobile, 2-3 col desktop.
- Keep tone professional, clear, practical — no exaggerated claims.

## Don'ts
- No neon colors, no purple/pink gradients.
- No hardcoded arbitrary hex codes in JSX (use config tokens).
- No low-contrast text on images or colored backgrounds.
- No emoji in headings or buttons.
