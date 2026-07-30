# SSourcing China — Design System

## Brand Identity
Professional, trustworthy, international B2B sourcing company based in China.
Clean, modern, data-driven aesthetic. No flashy animations or exaggerated claims.

## Color Palette

### Primary (Blue)
- `blue-950` (#172554) — darkest navy, hero backgrounds
- `blue-900` (#1e3a8a) — dark navy, section backgrounds, trust bar
- `blue-800` (#1e40af) — primary buttons, headings on light bg
- `blue-700` (#1d4ed8) — links, interactive elements
- `blue-500` (#3b82f6) — highlights, icons
- `blue-100` (#dbeafe) — light tinted backgrounds
- `blue-50`  (#eff6ff) — very light tinted backgrounds

### Accent (Amber)
- `amber-600` (#d97706) — CTA buttons, badges, highlights
- `amber-500` (#f59e0b) — hover states for CTA

### Neutral
- `neutral-900` — body text
- `neutral-800` — headings
- `neutral-700` — subheadings
- `neutral-600` — secondary text
- `neutral-500` — muted text, captions
- `neutral-200` — borders, dividers
- `neutral-100` — light section backgrounds
- `neutral-50`  — page background

## Typography

### Font Family
Inter (Google Fonts) — clean, professional, highly legible

### Scale
- Display / Hero: `text-4xl md:text-5xl lg:text-6xl font-bold` — brand-900 or white
- H1: `text-3xl md:text-4xl font-bold` — neutral-800
- H2: `text-2xl md:text-3xl font-bold` — neutral-800
- H3: `text-xl font-semibold` — neutral-800
- Body Large: `text-lg` — neutral-700
- Body: `text-base` — neutral-600
- Small / Caption: `text-sm` — neutral-500

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Primary CTA Button
`bg-accent-500 hover:bg-accent-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors`
DO: Use for main CTAs like "Get a Free Sourcing Quote"
DON'T: Use more than once per section

### Secondary Button
`bg-white text-brand-700 border border-brand-700 hover:bg-brand-50 font-semibold px-6 py-3 rounded-lg transition-colors`

### Ghost Button (on dark bg)
`border border-white text-white hover:bg-white hover:text-brand-900 font-semibold px-6 py-3 rounded-lg transition-colors`

### Cards
`bg-white rounded-xl shadow-sm border border-neutral-200 p-6 hover:shadow-md transition-shadow`

### Section Backgrounds
- White: default
- Light gray: `bg-neutral-50`
- Light blue tint: `bg-brand-50`
- Dark navy: `bg-brand-900 text-white`
- Medium navy: `bg-brand-800 text-white`

## Navbar
- Sticky, white background with subtle shadow on scroll
- Logo: "SSourcing China" in brand-700, bold
- Nav links: neutral-700, hover brand-600
- CTA button: accent-500

## Footer
- Dark navy background (brand-900)
- White text
- 4-column layout on desktop

## Do's
- Use consistent section padding
- Keep text readable — always check contrast
- Use Inter font weights 400, 500, 600, 700
- Use icons from lucide-react
- Keep CTAs clear and action-oriented

## Don'ts
- No exaggerated claims ("best in the world", "guaranteed")
- No low-contrast text
- No inline styles
- No magic pixel values — use Tailwind scale
