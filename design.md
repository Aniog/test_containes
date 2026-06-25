# ARTITECT MACHINERY — Visual Style Guide

A refined industrial brand identity for a manufacturer of sheet metal folding machines. The aesthetic is elegant, precise, and confident — high contrast typography, generous white space, technical accents, and clean photography.

## Brand Voice
- Precision-engineered, premium, trustworthy
- Industrial but never dated — modern, restrained, architectural
- Words feel measured: "engineered", "calibrated", "crafted"

## Color Palette
Defined as Tailwind utility classes in `src/index.css` under `@theme`.

| Token            | Hex       | Tailwind class             | Use                                  |
|------------------|-----------|----------------------------|--------------------------------------|
| Ink (primary)    | `#0B1220` | `bg-ink` / `text-ink`      | Headlines, dark sections, footer     |
| Steel            | `#1F2A3A` | `bg-steel` / `text-steel`  | Secondary dark, cards on dark        |
| Graphite         | `#5A6779` | `text-graphite`            | Body text on light                   |
| Mist             | `#E7EBF1` | `bg-mist`                  | Section dividers, soft fills         |
| Bone (page bg)   | `#F7F8FA` | `bg-bone`                  | Default page background              |
| Paper            | `#FFFFFF` | `bg-paper`                 | Cards, surfaces                      |
| Brass (accent)   | `#B8894B` | `bg-brass` / `text-brass`  | Single accent, highlights, dividers  |

Rule: Only one accent color (Brass). Never use multiple accents on the same screen.

## Typography
- Display / Headings: **Playfair Display** (serif) — `font-display`
- UI / Body: **Inter** (sans-serif) — default
- Both loaded via Google Fonts in `index.html`

Sizing scale:
- Hero H1: `text-5xl md:text-7xl font-display tracking-tight`
- Section H2: `text-3xl md:text-5xl font-display tracking-tight`
- Card H3: `text-xl font-display`
- Eyebrow label: `text-xs uppercase tracking-[0.2em] text-brass font-medium`
- Body: `text-base text-graphite leading-relaxed`

## Layout & Spacing
- Max content width: `max-w-7xl mx-auto px-6 lg:px-10`
- Section vertical padding: `py-20 md:py-28`
- Card padding: `p-8`
- Grid gaps: `gap-8` standard, `gap-12` for spacious sections

## Borders, Radius, Shadows
- Radius: `rounded-none` for hero/sections, `rounded-sm` (2px) for cards and buttons — keep it architectural, not pillowy
- Hairline borders: `border border-mist` on light, `border border-white/10` on dark
- Shadows: very subtle, `shadow-[0_1px_2px_rgba(11,18,32,0.04)]` for cards. Never large drop shadows.

## Buttons
- Primary: `bg-ink text-paper hover:bg-steel rounded-sm px-7 py-3.5 text-sm tracking-wide`
- Outline: `border border-ink text-ink hover:bg-ink hover:text-paper rounded-sm px-7 py-3.5`
- Accent (rare): `bg-brass text-paper hover:bg-brass/90`

## Imagery
- Use stock images via `data-strk-img` / `data-strk-bg` tags
- Prefer industrial, precision, metalwork, factory floor, CNC, machinery, architecture references
- Aspect ratios: hero `16x9`, product cards `4x3`, portraits `3x4`

## Do's
- Use generous whitespace
- Keep one accent (Brass) per view
- Use thin horizontal rules to separate ideas (`h-px bg-mist`)
- Use uppercase eyebrow labels above headings

## Don'ts
- No gradients except subtle ink overlays on hero images
- No rounded-full pill buttons (architectural feel)
- No multi-color accent palette
- No low-contrast text (always check `text-graphite` on white — pass, but never on `bg-mist`)
- No emojis in product copy
