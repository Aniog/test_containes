# ARTITECT MACHINERY — Visual Style Guide

## Brand Personality
Industrial premium. Refined engineering. The site should feel like a
precision-machined chassis: heavy, balanced, quietly confident. No loud
neon, no playful illustrations. Generous whitespace, careful typography,
restrained color.

## Color Palette
Use the `brand-*` Tailwind tokens (see tailwind.config.js).

| Token            | Hex      | Usage                                         |
| ---------------- | -------- | --------------------------------------------- |
| `brand-ink`      | #0E1A2B  | Headings on light, full dark sections         |
| `brand-steel`    | #1F2A3A  | Sub-dark surface (footer, hero overlay)       |
| `brand-graphite` | #2C3543  | Borders, dividers, secondary text             |
| `brand-mist`     | #F5F6F8  | Page background, soft section                 |
| `brand-cloud`    | #FFFFFF  | Card surfaces, light sections                 |
| `brand-brass`    | #C8A45D  | Primary accent (CTAs, links, hairlines)      |
| `brand-brass-soft` | #E2C998 | Accent gradients, hover backgrounds         |
| `brand-ember`    | #B8763E  | Hover/active for brass                        |
| `brand-muted`    | #6B7280  | Body copy secondary                           |
| `brand-line`     | #E5E7EB  | Hairlines, table rules                        |

Contrast rules:
- `brand-ink` on `brand-cloud` / `brand-mist` for body — 13:1.
- `brand-brass` only for accents, never for body text on white.
- `brand-muted` for caption text only, never for primary content.

## Typography
- **Display / Headings**: `Manrope` (200–800). Use 600/700 for hero and
  section headings, 500 for eyebrow text.
- **Body / UI**: `Inter` (300–700). Use 400 body, 500 nav/buttons.
- Tracking: tight on large display (`-0.02em`), normal elsewhere.
- Line-height: 1.1 for hero, 1.3 for h2, 1.6 for body.

## Spacing & Layout
- Container: `max-w-7xl mx-auto px-6 lg:px-10`.
- Section vertical padding: `py-24 lg:py-32`.
- Cards: rounded `2xl`, hairline border `border-brand-line`, soft shadow
  `shadow-[0_1px_2px_rgba(14,26,43,0.04),0_8px_24px_rgba(14,26,43,0.06)]`.

## Components
- **Buttons**:
  - Primary: `bg-brand-ink text-white hover:bg-brand-steel` rounded-full
    with `px-7 py-3`, font-medium, inline-flex items-center gap-2.
  - Accent: `bg-brand-brass text-brand-ink hover:bg-brand-ember hover:text-white`.
  - Ghost: `text-brand-ink border border-brand-line hover:border-brand-ink`.
- **Eyebrow label**: uppercase, tracking-[0.18em], text-xs,
  text-brand-brass, often paired with a short horizontal hairline
  `<span class="block w-10 h-px bg-brand-brass" />`.
- **Section heading pattern**:
  - Eyebrow
  - H2 (Manrope 600, text-3xl md:text-5xl, text-brand-ink, max-w-3xl)
  - Subhead (text-brand-muted, max-w-2xl, mt-4)

## Imagery
- Use the stock image system. Always reference real text IDs.
- Hero: dark, moody sheet-metal or factory floor, overlay 60–70% ink
  gradient.
- Product cards: a clean, slightly warm-toned industrial image per
  product. Aspect ratio `4x3`, width `800`.
- About: workshop / operator at a folder, `16x9` `width=1400`.

## Motion & Micro-interactions
- Subtle only. No bouncy springs. Use `transition-colors duration-200`
  on links/buttons. Section reveals via small `translate-y-2 → 0` fade.

## Do / Don't
- Do use brass as an accent only.
- Do keep one hairline between sections; never stack two thick rules.
- Do use real product copy — never placeholder lorem.
- Don't use emoji as icons — use Lucide React.
- Don't use more than 2 typefaces.
- Don't put brass text on white for long passages.
- Don't use gradients on body copy.
