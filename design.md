# SSourcing China — Visual Style Guide

A clean, trustworthy, international B2B website for a China-based sourcing agency. Visuals should feel modern, factual, and corporate — never flashy.

## Brand Tone
- Professional, practical, transparent.
- Avoid superlatives and hype. Use concrete numbers and verbs.
- International English audience.

## Color Palette
Defined in `tailwind.config.js` as named colors:

- `brand` (deep navy / trust): `#0B2545` — primary headlines, headers, dark surfaces
- `brand-2` (steel blue / accent): `#13315C` — secondary dark accents
- `accent` (signal teal): `#0E7C86` — primary CTA, links, highlight stats
- `accent-2` (warm amber): `#E0A82E` — sparingly for trust badges, callouts
- `ink` (body text): `#1F2937`
- `ink-soft` (secondary text): `#475569`
- `line` (borders): `#E2E8F0`
- `surface` (page background): `#F7F9FC`
- `surface-2` (card alt background): `#EEF2F7`
- `white`: `#FFFFFF`

## Typography
- Family: Inter (loaded via Google Fonts in `index.html`).
- Headings: tight, semibold to bold, navy `text-brand`.
- Body: 15–16px, `text-ink`, line-height ~1.6.
- Use `font-semibold` and `font-bold` rather than custom weights.

## Layout
- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Section vertical rhythm: `py-16 lg:py-24`.
- Grid gaps: `gap-6` or `gap-8`.
- Cards: white background, `rounded-2xl`, `border border-line`, soft shadow `shadow-sm`, hover `shadow-md`.
- Borders are subtle. Avoid heavy shadows.

## Buttons
- Primary: `bg-accent text-white hover:bg-accent/90 px-5 py-3 rounded-lg font-semibold`.
- Secondary: `bg-white text-brand border border-line hover:border-brand px-5 py-3 rounded-lg font-semibold`.
- Ghost on dark: `text-white border border-white/30 hover:bg-white/10`.

## Imagery
- Use realistic factory/QC/shipping/container/showroom photography via the stock image system.
- Always `data-strk-img` with relevant queries; never hardcode external URLs.
- Aspect ratios: heroes `16x9`, cards `3x2` or `4x3`, portraits `1x1`.

## Do's
- Keep generous whitespace.
- Use small badges with iconography from lucide-react.
- Use clear section headings with a short eyebrow label.

## Don'ts
- No gradient-heavy or neon UI.
- No low-contrast text. Always pair `text-ink` on light surfaces and `text-white` on `bg-brand`.
- No emoji in marketing copy.
- No unverifiable boasts ("#1 in China"). Use concrete process language.
