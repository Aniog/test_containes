# Velmora Fine Jewelry — Visual Design System

Direction: **Warm Editorial Quiet-Luxury**. Light, warm ivory surfaces flatter gold
jewelry; a deep espresso ink provides contrast; a single restrained antique-brass
metallic is the accent. Nothing loud, nothing discount-like. Generous whitespace,
thin hairline dividers, editorial serif headlines.

## Color Palette (Tailwind tokens — no raw hex in components)

| Token | Value | Use |
|-------|-------|-----|
| `cream` | `#FAF6F0` | Primary page background (warm ivory) |
| `sand` | `#F1E9DE` | Alternate section background / subtle panels |
| `ink` | `#221B12` | Primary text / footer background (deep espresso) |
| `inkSoft` | `#6E6353` | Secondary text (muted, still high-contrast) |
| `gold` | `#A9803E` | Accent — CTAs, stars, highlights, hover (antique brass) |
| `goldDark` | `#8F6A2F` | Accent hover state |
| `goldSoft` | `#E7D6B8` | Soft metallic tint / hairline on dark, badges |
| `line` | `#E4DACB` | Hairline dividers & borders on light |

- Text on `cream`/`sand` → `ink` or `inkSoft` (never gold body text).
- Text on `ink` (footer / dark panels) → `cream` / `goldSoft`.
- CTA button: `bg-gold text-cream`, hover `bg-goldDark`. Outlined variant: `border-gold text-gold`.
- Stars: `fill-gold text-gold`.

## Typography

- Display / headings / product names: **Cormorant Garamond** (`font-display`), serif.
- Body / UI / buttons / labels: **Manrope** (`font-sans`), sans-serif.
- Product names: UPPERCASE + wide letter-spacing (`tracking-[0.18em]`+), weight 500–600.
- Eyebrow / overline labels: sans, uppercase, `tracking-[0.3em]`, `text-xs`, `text-gold`.
- Headlines are large & tight: `leading-[1.05]`, sizes `text-4xl md:text-6xl`.

## Spacing & Layout

- Section vertical rhythm: `py-16 md:py-24 lg:py-28`.
- Container: `mx-auto max-w-7xl px-5 sm:px-8 lg:px-12`.
- Generous whitespace; avoid crowding. Mobile-first, single column → multi-column on md/lg.

## Surfaces, Borders, Shadows, Motion

- Dividers: `border-line` hairlines (`border-t`, `divide-y`).
- Cards: minimal, often borderless with `bg-cream`; images with soft shadow `shadow-[0_20px_50px_-20px_rgba(34,27,18,0.25)]`.
- Radii: small (`rounded-sm`) or none — refined, not bubbly.
- Transitions: `transition-all duration-300 ease-out`. Image hover: `scale-105 duration-700`.
- Reveal-on-scroll: fade + translate-y, staggered.

## Do / Don't

- DO keep the palette to ink + cream/sand + one gold accent.
- DO use hairline dividers and generous margins.
- DO keep buttons premium (solid gold or thin outline).
- DON'T use bright/saturated colors, gradients, or heavy drop shadows.
- DON'T use pill/circle-heavy playful UI or loud badges.
- DON'T put gold text on light backgrounds for body copy.
