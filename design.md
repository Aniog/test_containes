# Serengeti Pulse — Design System

## Visual Identity: Warm Earth

A cinematic, editorial aesthetic inspired by the East African savanna. Every design decision should evoke the heat, scale, and raw beauty of the Serengeti.

---

## Color Palette

| Name            | Hex       | Tailwind Class          | Usage                              |
|-----------------|-----------|-------------------------|------------------------------------|
| Burnt Orange    | `#C4501A` | `bg-burnt-orange`       | Primary accent, CTAs, active states|
| Burnt Orange Lt | `#D96B35` | `bg-burnt-orange-light` | Hover states, highlights           |
| Deep Ochre      | `#B8860B` | `bg-deep-ochre`         | Secondary accent, borders          |
| Ochre Light     | `#D4A017` | `bg-ochre-light`        | Warm highlights                    |
| Ochre Pale      | `#E8C96A` | `bg-ochre-pale`         | Subtle backgrounds, dividers       |
| Acacia Green    | `#4A5E2F` | `bg-acacia-green`       | Tertiary accent, nature elements   |
| Acacia Light    | `#6B7F45` | `bg-acacia-light`       | Hover on green elements            |
| Savanna Cream   | `#F5EDD6` | `bg-savanna-cream`      | Primary text on dark backgrounds   |
| Savanna Warm    | `#EDD9A3` | `bg-savanna-warm`       | Secondary text, captions           |
| Earth Brown     | `#6B4226` | `bg-earth-brown`        | Mid-tone backgrounds               |
| Earth Dark      | `#3D2010` | `bg-earth-dark`         | Primary background (page base)     |
| Sky Amber       | `#E8A020` | `bg-sky-amber`          | Sunset accents, glow effects       |

**Do:** Use warm, earthy tones exclusively. Pair light text (`savanna-cream`) on dark backgrounds (`earth-dark`).
**Don't:** Use cool blues, grays, or whites. Avoid pure black or pure white.

---

## Typography

### Display / Headlines
- **Font:** Playfair Display (Google Fonts)
- **Class:** `font-serif`
- **Weights:** 400, 500, 700, 900
- **Style:** Tall, elegant, high-contrast serif. Use italic variants for emphasis.
- **Sizes:** `text-5xl` to `text-8xl` for hero headlines

### Body / Subheadings
- **Font:** Cormorant Garamond (Google Fonts)
- **Class:** `font-serif-display`
- **Weights:** 300, 400, 500
- **Style:** Refined, literary. Use for subheadings, captions, pull quotes.
- **Sizes:** `text-lg` to `text-2xl`

### UI / Labels
- **Font:** Inter (Google Fonts)
- **Class:** `font-sans`
- **Weights:** 300, 400, 500
- **Style:** Clean, minimal. Use only for navigation, labels, metadata.
- **Sizes:** `text-xs` to `text-sm`

**Do:** Use serif fonts for all content headings. Keep letter-spacing wide (`tracking-widest`) on uppercase labels.
**Don't:** Use sans-serif for headlines. Avoid tight letter-spacing on display text.

---

## Spacing & Layout

- **Page padding:** `px-6 md:px-12 lg:px-20`
- **Section vertical spacing:** `py-16 md:py-24`
- **Card gap:** `gap-6 md:gap-8`
- **Max content width:** `max-w-7xl mx-auto`

---

## Borders & Shadows

- **Dividers:** `border-ochre-pale/30` (subtle warm dividers)
- **Card borders:** `border border-burnt-orange/20`
- **Glow effect:** `shadow-[0_0_40px_rgba(196,80,26,0.15)]`
- **Image overlay gradient:** `bg-gradient-earth` (dark bottom fade)

---

## Motion & Animation

- **Parallax:** Slow 20s drift on hero images (`animation: parallaxDrift`)
- **Heat haze:** Subtle blur pulse on overlays (`animation: heatHaze`)
- **Dissolve:** Blur-to-clear transition on panel changes (`animation: fadeDissolve`)
- **Slide-up:** Entrance animation for content blocks (`animation: slideUp`)
- **Hover transitions:** `transition-all duration-500 ease-in-out`

**Do:** Keep animations slow and organic — the savanna breathes, it doesn't snap.
**Don't:** Use fast, mechanical transitions. Avoid bounce or spring effects.

---

## Image Treatment

- All images use the stock image system (`data-strk-img`, `data-strk-bg`)
- Hero images: `16x9` or `3x2` ratio, `1600px` width
- Portrait cards: `3x4` ratio, `600px` width
- Texture gallery: `1x1` or `4x3` ratio, `800px` width
- Apply `object-cover` and `object-center` to all images
- Use `filter: saturate(1.1) contrast(1.05)` for warmth
