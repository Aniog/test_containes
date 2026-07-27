# Design System — Blue Theme

## Color Palette

### Primary Blues
- `blue-950` (#172554) — Darkest navy, used for footer background
- `blue-900` (#1e3a8a) — Deep navy, used for dark sections and navbar
- `blue-800` (#1e40af) — Primary brand blue, used for main CTAs
- `blue-700` (#1d4ed8) — Hover state for primary buttons
- `blue-600` (#2563eb) — Accent blue, used for links and highlights
- `blue-500` (#3b82f6) — Medium blue, used for icons and badges
- `blue-400` (#60a5fa) — Light blue, used for subtle accents
- `blue-100` (#dbeafe) — Very light blue, used for card backgrounds
- `blue-50`  (#eff6ff) — Near-white blue, used for section backgrounds

### Neutrals
- `white` — Primary text on dark backgrounds, card backgrounds
- `slate-100` (#f1f5f9) — Light section backgrounds
- `slate-600` (#475569) — Body text on light backgrounds
- `slate-800` (#1e293b) — Headings on light backgrounds

## Typography

### Font Family
- Primary: `Inter` (Google Fonts)
- Fallback: `system-ui, sans-serif`

### Scale
- Hero heading: `text-5xl md:text-7xl font-extrabold`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card heading: `text-xl font-semibold`
- Body: `text-base font-normal`
- Small/caption: `text-sm`

## Spacing
- Section vertical padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Borders & Radius
- Cards: `rounded-2xl`
- Buttons: `rounded-full`
- Badges: `rounded-full`
- Inputs: `rounded-xl`

## Shadows
- Cards: `shadow-lg hover:shadow-xl`
- Navbar: `shadow-md`
- Buttons: `shadow-md hover:shadow-lg`

## Gradients
- Hero background: `from-blue-950 via-blue-900 to-blue-800`
- CTA section: `from-blue-800 to-blue-600`
- Accent gradient: `from-blue-500 to-cyan-400`

## Buttons

### Primary
```
bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition
```

### Secondary (outline)
```
border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 rounded-full transition
```

### Ghost (on light bg)
```
text-blue-600 hover:text-blue-800 font-semibold underline-offset-4 hover:underline transition
```

## Do's
- Always use white or `blue-50` text on dark blue backgrounds
- Use `blue-600` or `blue-800` text on white/light backgrounds
- Maintain consistent section padding (`py-20`)
- Use `rounded-2xl` for all cards
- Use gradient backgrounds for hero and CTA sections

## Don'ts
- Never use dark text on dark blue backgrounds
- Never use light blue text on white backgrounds (low contrast)
- Avoid mixing too many blue shades in one section
- Don't use `rounded-none` for interactive elements
