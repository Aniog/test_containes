# Velmora Fine Jewelry — Visual Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Not loud, not
discount-looking, not generic e-commerce. Generous whitespace, large editorial
imagery, thin hairline dividers, restrained accent color, subtle hover
transitions, soft shadows.

## Color Palette
A deep, refined warm base with a soft champagne/cream surface and a warm
metallic gold accent. Strong contrast for accessibility.

| Token              | Hex       | Usage                                            |
|--------------------|-----------|--------------------------------------------------|
| `ink` (base)       | `#1A1714` | Deep warm near-black background / dark sections  |
| `cream`            | `#F7F2EA` | Primary light surface / page background          |
| `sand`             | `#EDE4D6` | Secondary surface, cards, dividers               |
| `champagne`        | `#E8D9BE` | Soft accent fills, hover surfaces                |
| `gold` (accent)    | `#B08D57` | Primary accent — buttons, links, highlights      |
| `gold-dark`        | `#8A6A3B` | Accent hover / pressed state                     |
| `espresso`         | `#3A2E22` | Dark text on light surfaces, dark section text   |
| `taupe`            | `#7A6F60` | Muted/secondary text                             |
| `stone`            | `#A99C8A` | Disabled / placeholder text                      |

Text contrast rules:
- On `cream`/`sand`: use `espresso` for body, `taupe` for secondary. Never use
  `stone` for important content.
- On `ink`: use `cream`/`champagne` for text. Never use `taupe` directly on
  `ink` without checking contrast.
- Accent `gold` is used for buttons and links on light backgrounds; on dark
  backgrounds use `champagne` for text and `gold` for accents.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Nav links: UPPERCASE, `text-xs`, `tracking-[0.2em]`.
- Eyebrow / labels: UPPERCASE, `text-xs`, `tracking-[0.25em]`, `taupe`.

Font sizes (desktop):
- Hero headline: `text-5xl md:text-7xl`, serif, leading tight.
- Section title: `text-3xl md:text-4xl`, serif.
- Product name: `text-sm`, uppercase, tracking wide.
- Body: `text-sm md:text-base`, leading relaxed.

## Spacing & Layout
- Page max width: `max-w-7xl` with `px-6 md:px-10`.
- Section vertical rhythm: `py-20 md:py-28`.
- Generous whitespace between elements; avoid cramped layouts.
- Hairline dividers: `border-t border-espresso/10`.

## Components
- **Buttons**: solid `gold` with `cream` text, or outlined `espresso` with
  transparent bg. Rounded-none (sharp) or `rounded-sm`. Subtle hover: darken /
  fill transition `duration-300`. Min height `h-12`, `px-8`, uppercase label,
  `tracking-[0.2em]`, `text-xs`.
- **Cards**: `bg-cream`, hairline border or soft shadow `shadow-sm`, image
  aspect ratio `4x5` or `1x1`. Hover: image swap + subtle lift.
- **Inputs**: underline style or thin border, `bg-transparent`, focus ring
  `gold`.
- **Pills (variant selector)**: `rounded-full`, `border`, active = `bg-espresso
  text-cream`.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Large editorial hero, full-bleed.
- Product cards: 4x5 portrait, warm tones.
- Reels: 9x16 vertical.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, links, small highlights only.
- Use generous whitespace and hairline dividers.
- Ensure strong text contrast everywhere.

## Don'ts
- No loud/discount colors (no pure red, no neon).
- No generic e-commerce blue.
- No low-contrast text (no taupe on sand for important content).
- No heavy shadows or thick borders.
- No rounded-full buttons (except pills).
