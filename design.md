# ARTITECT MACHINERY — Visual Style Guide

Elegant, industrial-modern, and user-friendly. The site speaks to engineers, workshop owners, and procurement managers, so the design must feel precise, trustworthy, and refined — never noisy.

## Brand Personality
- Precision engineering meets architectural elegance.
- Confident, calm, premium. Think "Bauhaus meets modern industrial".
- Minimal ornamentation, strong typography, generous whitespace.

## Color Palette
Use these as named Tailwind colors (configured in `index.css` via `@theme`):

| Token            | Hex       | Usage                                              |
|------------------|-----------|----------------------------------------------------|
| `ink`            | `#0E1116` | Primary text, dark sections, navbar on dark hero   |
| `ink-soft`       | `#1F242B` | Cards on dark sections, dark surfaces              |
| `steel`          | `#3A4654` | Secondary text on light, subtle UI elements        |
| `steel-soft`     | `#6B7785` | Muted text, captions                               |
| `bone`           | `#F5F2EC` | Page background (warm off-white)                   |
| `bone-soft`      | `#EAE5DC` | Section background variation, borders             |
| `paper`          | `#FFFFFF` | Card surfaces, contrast surfaces                   |
| `accent`         | `#C2410C` | Primary accent — burnt-copper, used sparingly      |
| `accent-soft`    | `#E8A87C` | Subtle highlights, hover states                    |

**Don't:** use blue/teal "tech" colors, neon, or playful gradients. Don't put light text on `bone` background.
**Do:** keep accent usage to ~5% of the screen — button, underline, small icon highlight.

## Typography
- Headings: **Playfair Display** (serif) — elegant, editorial feel.
- Body & UI: **Inter** (sans-serif) — clean, neutral.
- Loaded via Google Fonts in `index.html`.

Scale (Tailwind):
- Hero H1: `text-5xl md:text-7xl font-light tracking-tight` (Playfair)
- Section H2: `text-3xl md:text-5xl font-light tracking-tight` (Playfair)
- Eyebrow label: `text-xs uppercase tracking-[0.25em] text-steel`
- Body: `text-base md:text-lg leading-relaxed text-steel`
- Small: `text-sm text-steel-soft`

## Layout & Spacing
- Max content width: `max-w-7xl mx-auto px-6 lg:px-10`.
- Section vertical rhythm: `py-20 md:py-28`.
- Grid gutters: `gap-8 md:gap-12`.
- Generous whitespace — never crowd cards.

## Components
- Buttons:
  - Primary: `bg-ink text-bone hover:bg-accent transition rounded-none px-7 py-3.5 text-sm uppercase tracking-[0.2em]`
  - Secondary: `border border-ink text-ink hover:bg-ink hover:text-bone transition rounded-none px-7 py-3.5 text-sm uppercase tracking-[0.2em]`
  - No rounded pill buttons — sharp/rectangular corners reinforce industrial precision.
- Cards: `bg-paper border border-bone-soft` — no shadows, or very subtle (`shadow-[0_1px_0_0_rgba(0,0,0,0.04)]`). Hover: thin accent underline on title.
- Dividers: 1px `border-bone-soft` or 1px `border-ink/10`.
- Icons: Lucide, `strokeWidth={1.25}`, sized `w-6 h-6`. Thin strokes match the elegant feel.

## Do / Don't
- Do use uppercase eyebrows above section titles for editorial feel.
- Do use thin hairlines, never thick borders.
- Do let images breathe — large, high-quality machinery photography.
- Don't use drop shadows, blurs, or 3D effects.
- Don't use rounded-full or rounded-lg on buttons — keep corners square or `rounded-sm`.
- Don't use more than 2 font weights per section.
- Don't ever have low-contrast text — always check legibility on the actual surface.

## Imagery
Use the `data-strk-*` stock image system. Subjects: precision sheet metal folding machines, workshop close-ups, folded metal panels, architectural metal facades, engineer hands on controls. Prefer wide cinematic ratios for heroes (16x9) and 4x3/3x2 for product cards.
