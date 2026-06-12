# ARTITECT MACHINERY — Visual Style Guide

A refined, industrial-elegant identity for a precision sheet-metal folding machinery brand.
Tone: confident, engineered, premium, but warm and approachable.

## Brand Personality
- Elegant, architectural, precise
- Trustworthy, German-engineering feel
- Clean, modern, generous whitespace
- Subtle warmth from a brass/copper accent

## Color Palette
Use these named Tailwind colors (configured in tailwind.config.js):

- `ink` (#0F1419) — primary deep ink, used for nav, footer, hero overlays, headings
- `graphite` (#2A2F36) — secondary dark
- `steel` (#5B6471) — muted body text on light surfaces
- `mist` (#E6E8EC) — soft borders, dividers
- `bone` (#F5F2EC) — primary off-white surface (page background)
- `ivory` (#FAF8F4) — card surfaces
- `brass` (#B08A4A) — primary accent (premium gold-brass)
- `brass-deep` (#8E6E36) — accent hover / contrast
- `brass-soft` (#E8DEC8) — tinted accent backgrounds

Do's:
- Deep ink + bone background combinations for elegance
- Brass used sparingly as accent (buttons, underlines, key icons)
- Use `text-steel` for body copy on light backgrounds

Don'ts:
- No saturated reds, blues, or neons
- Never use brass as a large background (it overwhelms)
- Avoid pure black `#000` and pure white `#FFF`

## Typography
- Headings: `font-serif` → Cormorant Garamond (elegant editorial serif)
- Body & UI: `font-sans` → Inter (clean, modern)
- Micro/eyebrow labels: uppercase, tracked wide (`tracking-[0.25em]`), `text-xs`

Sizes:
- Display: `text-5xl md:text-7xl font-light` (light weight gives elegance)
- H2: `text-3xl md:text-5xl font-light`
- H3: `text-xl md:text-2xl font-medium`
- Body: `text-base leading-relaxed text-steel`
- Eyebrow: `text-xs tracking-[0.25em] uppercase text-brass`

## Layout & Spacing
- Container: `max-w-7xl mx-auto px-6 md:px-10`
- Section vertical padding: `py-20 md:py-28`
- Generous gaps between elements: `gap-10 md:gap-16`
- Grid with hairline dividers (1px `border-mist`) is preferred over heavy boxes

## Borders, Shadows, Radii
- Borders: hairline `border border-mist`
- Radii: small and intentional — `rounded-none` for editorial sections, `rounded-md` for cards/buttons
- Shadows: extremely subtle — `shadow-[0_1px_2px_rgba(15,20,25,0.04)]`. Avoid heavy drop shadows.

## Buttons
- Primary: `bg-ink text-bone hover:bg-graphite px-7 py-3 rounded-md text-sm tracking-wide`
- Accent: `bg-brass text-ink hover:bg-brass-deep hover:text-bone px-7 py-3 rounded-md`
- Ghost: `border border-ink text-ink hover:bg-ink hover:text-bone px-7 py-3 rounded-md`
- Always include a hover state and a small icon when relevant (Lucide).

## Imagery
- Use stock images via the `data-strk-img` / `data-strk-bg` system
- Prefer high-key industrial photography: workshop lighting, machined steel, brushed metal textures
- Use 16x9 for hero, 4x3 for product cards, 3x2 for editorial

## Decorative Details
- Thin brass underline below eyebrow labels: `h-px w-10 bg-brass`
- Numbered section markers: `01 — Engineering`, `02 — Heritage`...
- Subtle uppercase tracking for nav and CTAs

## Accessibility & Contrast
- All body text must be on `bone`/`ivory`/white surfaces
- Never light-on-light or dark-on-dark
- Minimum text contrast follows WCAG AA
