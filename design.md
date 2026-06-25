# ARTITECT MACHINERY — Visual Design System

A refined industrial brand. The look is elegant, premium, and confident, but the
UX must stay simple and approachable. Think: precision engineering meets
European boutique manufacturer.

## Brand Personality
- Elegant, precise, trustworthy
- Industrial but never harsh
- Clear typography, plenty of white space
- Subtle metallic accents, no neon, no playful gradients

## Color Palette
Named Tailwind-compatible tones (use as-is via class names like `bg-graphite-900`):

- **graphite-950** `#0B0F14` — deepest charcoal, footer / hero overlays
- **graphite-900** `#111418` — primary dark surface
- **graphite-800** `#1B1F26` — dark cards, header on dark
- **graphite-700** `#2A2F38` — borders on dark
- **steel-500**   `#5B6472` — muted text on light, secondary icon
- **steel-300**   `#A8B0BB` — dividers, soft text on dark
- **bone-50**     `#F6F4EF` — primary light background (warm off-white)
- **bone-100**    `#EFECE4` — section alt background
- **bone-200**    `#E4DFD3` — soft borders on light
- **brass-500**   `#B08A47` — primary accent (signature elegant gold)
- **brass-600**   `#8E6E33` — accent hover / deep brass
- **brass-300**   `#D6BB85` — subtle brass tint

Foreground rules:
- On `bone-50` / white → text `graphite-900`, muted text `steel-500`
- On `graphite-900` / `graphite-950` → text `bone-50`, muted text `steel-300`
- On `brass-500` accent → text `graphite-950`

Avoid pure black on pure white. Always pair dark text with warm bone, and light
text with deep graphite.

## Typography
- Headings: **"Cormorant Garamond"** (serif, light/medium) — elegant editorial feel
- Body / UI: **"Inter"** (sans-serif, 400/500/600)
- Tagline / labels / eyebrow: **Inter, uppercase, tracking-[0.25em], text-xs**

Scale (Tailwind):
- Hero H1: `text-5xl md:text-7xl font-light` serif
- Section H2: `text-3xl md:text-5xl font-light` serif
- Card title: `text-xl md:text-2xl font-medium` serif
- Body: `text-base leading-relaxed` Inter
- Small / meta: `text-sm text-steel-500`

Do:
- Mix a light serif headline with a sturdy sans body
- Use `tracking-wide` or `tracking-widest` for eyebrows and labels
- Keep line-height generous (`leading-relaxed`, `leading-loose`)

Don't:
- Don't bold serif headlines heavily — keep `font-light` or `font-normal`
- Don't use more than two font families

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-6 lg:px-10`
- Card padding: `p-8 md:p-10`
- Generous gaps: `gap-10 md:gap-14` for product grids

## Borders & Surfaces
- Borders: hairline `border border-bone-200` on light, `border-graphite-700` on dark
- Cards on light: `bg-white border border-bone-200`
- Cards on dark: `bg-graphite-800 border border-graphite-700`
- Radius: `rounded-none` for industrial blocks, `rounded-sm` for buttons,
  `rounded-2xl` only for soft media frames. Default to small radii.

## Buttons
- Primary: `bg-brass-500 text-graphite-950 hover:bg-brass-600 hover:text-bone-50
  px-7 py-3 text-sm uppercase tracking-[0.2em] font-medium transition`
- Secondary: `border border-graphite-900 text-graphite-900 hover:bg-graphite-900
  hover:text-bone-50 px-7 py-3 text-sm uppercase tracking-[0.2em]`
- Ghost on dark: `border border-bone-50/40 text-bone-50 hover:bg-bone-50
  hover:text-graphite-900`

## Imagery
- Use real industrial photography of sheet metal machines, workshop floors,
  craftsmen, brushed steel close-ups.
- Prefer 16x9 or 3x2 for hero/product, 4x3 for cards.
- Always pair imagery with a thin brass underline or label to keep an editorial
  feel.

## Iconography
- Lucide icons, stroke width 1.5
- Color: `text-brass-500` on light surfaces, `text-brass-300` on dark
- Always pair with a short uppercase label

## Do's
- Plenty of whitespace, slow rhythm, clear hierarchy
- One signature accent (brass) per section, used sparingly
- Thin horizontal divider lines `h-px bg-bone-200` or `bg-brass-500/60`

## Don'ts
- No drop shadows heavier than `shadow-sm`
- No neon, no rainbow gradients, no playful illustrations
- No more than one CTA color per page section
- Never invisible or low-contrast text on photos — always add a dark overlay
