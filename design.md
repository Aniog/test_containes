# Intertwined — Design System

## Visual Identity
**Aesthetic:** Humanistic Minimalist — raw, organic, and quietly powerful.

## Color Palette
| Name | Hex | Tailwind Token | Usage |
|---|---|---|---|
| Parchment | #F5EFE6 | `bg-parchment` | Page backgrounds |
| Skin Warm | #D4A574 | `text-skin-warm` | Accent, human element |
| Skin Light | #E8C9A0 | `bg-skin-light` | Soft panels |
| Forest Deep | #2D4A3E | `text-forest-deep` | Primary text, nav |
| Forest Mid | #4A7C59 | `text-forest-mid` | Headings, accents |
| Forest Light | #8FBC8F | `bg-forest-light` | Subtle backgrounds |
| Sky Deep | #2C5F7A | `text-sky-deep` | Links, highlights |
| Sky Mid | #5B9EC9 | `text-sky-mid` | Secondary accents |
| Sky Light | #B8D4E8 | `bg-sky-light` | Tints |
| Charcoal | #1C2B2B | `text-charcoal` | Body text |
| Mist | #F0EDE8 | `bg-mist` | Card backgrounds |

## Typography
- **Display / Quotes:** `Playfair Display` (serif, italic for quotes) — emotional, editorial
- **Handwriting Accent:** `Dancing Script` (cursive) — for pull quotes and labels
- **Body / UI:** `Inter` (sans-serif) — clean, readable

### Scale
- Hero title: `text-6xl lg:text-8xl font-playfair`
- Section heading: `text-4xl lg:text-5xl font-playfair`
- Pull quote: `text-2xl font-dancing italic`
- Body: `text-base font-inter leading-relaxed`
- Caption: `text-sm font-inter text-forest-mid`

## Spacing
- Section padding: `py-20 lg:py-32`
- Container max-width: `max-w-7xl mx-auto px-6 lg:px-12`
- Card gap: `gap-6 lg:gap-10`

## Borders & Shadows
- Subtle card: `rounded-2xl shadow-sm`
- Image frame: `rounded-xl overflow-hidden`
- No harsh borders — use spacing and color to separate sections

## Motion (Framer Motion)
- Page transitions: fade + slight Y translate (0→0, opacity 0→1)
- Morphing images: crossfade with scale (0.95→1)
- Scroll reveals: `initial={{ opacity: 0, y: 40 }}` → `animate={{ opacity: 1, y: 0 }}`
- Duration: 0.7s ease-out for reveals, 1.2s for morphs

## Do's
- Use generous whitespace — let images breathe
- Pair human textures (skin, hands) with natural textures (bark, leaves, water)
- Use italic Playfair for emotional weight
- Keep nav minimal and transparent over hero images

## Don'ts
- No harsh drop shadows or heavy borders
- No bright/saturated colors — stay within the earthy palette
- No crowded layouts — max 2 columns on desktop for editorial content
- No generic stock-photo feel — images should feel intimate and documentary
