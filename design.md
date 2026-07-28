# SSourcing China — Design System

## Brand
- Identity: Professional China-based B2B sourcing agent for overseas buyers.
- Tone: practical, clear, trustworthy, international. No exaggerated claims.
- Visual feel: industrial / corporate / clean. Not a marketplace template, not a playful startup.

## Color Palette

Use semantic tokens; do not hardcode raw hex in components. Add these to `tailwind.config.js` as named colors.

### Brand
- `brand-900` `#0B1F36` — deepest navy, used for headings on light bg and footer bg
- `brand-800` `#0E2A47` — primary navy, top bar, primary buttons, headings
- `brand-700` `#143A60` — hover for brand-800
- `brand-100` `#E6EDF5` — soft navy tint, used for section accents and info chips
- `brand-50`  `#F4F7FB` — very soft navy tint, used for alternating section background

### Accent (warm copper / orange — reads as "logistics / trade")
- `accent-700` `#B25A14` — hover for accent
- `accent-600` `#D9711B` — primary accent (CTAs, highlights, key numbers)
- `accent-500` `#E68A3D` — secondary accent, lighter
- `accent-100` `#FBE7D4` — soft tint for accent backgrounds

### Neutral
- `ink-900` `#0F172A` — body text on light surfaces
- `ink-700` `#334155` — secondary body text
- `ink-500` `#64748B` — muted text, captions
- `ink-300` `#CBD5E1` — borders
- `ink-200` `#E2E8F0` — light dividers
- `ink-100` `#F1F5F9` — subtle background
- `canvas`   `#FAF8F4` — page background (warm off-white, gives a "paper" feel)
- `card`     `#FFFFFF` — card surfaces
- `success-600` `#15803D` — used very sparingly for "verified" style tags

## Typography
- Font family: `Inter` (already loaded). Use 400/500/600/700.
- Display / H1: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink-900`
- H2: `text-3xl md:text-4xl font-bold tracking-tight text-ink-900`
- H3: `text-xl md:text-2xl font-semibold text-ink-900`
- Body: `text-base text-ink-700 leading-relaxed`
- Lead: `text-lg text-ink-700 leading-relaxed`
- Eyebrow / label: `text-xs font-semibold tracking-[0.18em] uppercase text-accent-600`
- Small / caption: `text-sm text-ink-500`

## Spacing & Layout
- Container width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical rhythm: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Generous whitespace between sections; do not stack too many dense elements.

## Components

### Buttons
- Primary: `bg-brand-800 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-md transition shadow-sm`
- Accent: `bg-accent-600 hover:bg-accent-700 text-white font-semibold px-6 py-3 rounded-md transition shadow-sm`
- Outline on dark: `border border-white/30 text-white hover:bg-white hover:text-brand-800`
- Ghost: `text-brand-800 hover:text-brand-700 font-semibold`
- All buttons: focus-visible ring using `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-600`

### Cards
- Surface: `bg-card border border-ink-200 rounded-lg shadow-sm`
- Hoverable: add `hover:shadow-md hover:-translate-y-0.5 transition`
- Always set readable text color explicitly; never rely on inherited color.

### Sections
- Alternating section backgrounds: `bg-canvas` and `bg-white` (or `bg-brand-50` for one accent section).
- Each section starts with an eyebrow + h2 + optional lead paragraph, centered or left-aligned consistently.

### Tags / Chips
- Default: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-ink-100 text-ink-700`
- Brand: `bg-brand-100 text-brand-800`
- Accent: `bg-accent-100 text-accent-700`

### Icons
- Use `lucide-react`. Default size `w-5 h-5`. For section icon plates, use `w-6 h-6` inside `w-12 h-12 rounded-md bg-brand-100 text-brand-800`.

## Imagery
- Use `data-strk-img` and `data-strk-bg` for factory floor, QC inspection, shipping container, port, handshake, paperwork, etc.
- Always use a containerRef on the section that wraps the tagged images and call `ImageHelper.loadImages` from a `useEffect`.
- Aspect ratio hints: 16x9 for hero/banners, 4x3 for cards, 1x1 for small thumbnails.

## Do / Don't

### Do
- Use real, specific, modest numbers (e.g. "12+ years", "500+ supplier audits", "DDP shipping to 40+ countries").
- Use concrete product categories (electronics, home goods, hardware, textiles, packaging, etc.) — not vague "products".
- Show process steps in a numbered sequence, not icons + vague words.
- Use realistic factory / shipping / container / paperwork photography in the stock image system.
- Keep CTAs to 1–2 per viewport maximum.

### Don't
- Don't use hype words: "best", "#1", "guaranteed lowest price", "100% safe".
- Don't use stock phrases like "we are the world leading" or "amazing team".
- Don't use emoji in production copy.
- Don't use red as a primary brand color (avoid clashing with China-red cliche + trade-war imagery); accent is copper, not red.
- Don't use low-contrast text — every visible string must pass AA contrast on its background.
- Don't crowd the desktop view into a single column. Use 2–3 column grids for cards/lists at md+.
