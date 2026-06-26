# SSourcing China — Visual Design System

A clean, trustworthy, international B2B aesthetic. Inspired by global trade and logistics brands. Calm, professional, image-led, with strong typographic hierarchy.

## Brand Voice
- Professional, clear, practical
- Avoids buzzwords and exaggerated claims
- B2B-focused, oriented toward overseas buyers

## Color Palette
Use Tailwind utility classes that map to this palette. All colors below are referenced by Tailwind classes — do not hardcode hex codes outside this file.

- Primary navy: `slate-900` (#0f172a) — headings, header text, primary buttons
- Deep brand blue: `blue-700` (#1d4ed8) — accent, primary CTAs
- Accent red (brand China-touch, sparingly): `red-600` (#dc2626) — small highlights, badge accents only
- Background light: `slate-50` (#f8fafc) — section alternates
- Surface white: `white` — cards, content surfaces
- Subtle border: `slate-200` (#e2e8f0)
- Body text: `slate-700` (#334155)
- Muted text: `slate-500` (#64748b)

Do not use bright greens, purples, or neon colors.

## Typography
- Font family: Inter (already loaded). Headings can also use `font-semibold` or `font-bold`.
- Hero headline: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900`
- Section heading: `text-3xl md:text-4xl font-bold tracking-tight text-slate-900`
- Subsection heading: `text-xl md:text-2xl font-semibold text-slate-900`
- Body: `text-base md:text-lg text-slate-700 leading-relaxed`
- Small / meta: `text-sm text-slate-500`

## Spacing & Layout
- Page max width container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`

## Components

### Buttons
- Primary CTA: `inline-flex items-center justify-center gap-2 rounded-md bg-blue-700 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-800 transition`
- Secondary: `inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition`
- Link-style: `inline-flex items-center gap-1 text-blue-700 font-semibold hover:text-blue-800`

### Cards
- Surface: `rounded-xl border border-slate-200 bg-white shadow-sm`
- Image card: include image at top with `aspect-[4/3]` or `aspect-video` cover.

### Forms
- Input: `w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600`
- Label: `block text-sm font-semibold text-slate-900 mb-2`
- Required mark: red asterisk `text-red-600`

### Header
- Sticky top, white background, subtle border-b: `bg-white border-b border-slate-200`
- Logo: brand mark + "SSourcing China" wordmark in `text-slate-900 font-bold`
- Nav links: `text-slate-700 hover:text-blue-700 font-medium`

### Footer
- `bg-slate-900 text-slate-300`
- Headings inside footer: `text-white font-semibold`

## Imagery
- Use realistic factory, QC inspection, shipping container, port, and warehouse photos.
- Use Strikingly stock image system (`data-strk-img` / `data-strk-bg`) — do not hardcode external image URLs.
- Image ratios: hero `16x9`, product/case cards `4x3` or `3x2`, portraits `1x1`.

## Do's and Don'ts
- DO use plenty of whitespace and clear visual hierarchy.
- DO keep contrast high; never light-grey-on-white for body text.
- DO use consistent rounded corners (`rounded-md` / `rounded-xl`).
- DON'T use gradients except very subtle (e.g., `from-slate-50 to-white`).
- DON'T use emojis in the UI.
- DON'T use exaggerated marketing language ("best in the world", "unbeatable").
- DON'T mix more than 2 accent colors per section.
