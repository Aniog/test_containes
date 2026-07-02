# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm editorial, premium-but-accessible demi-fine gold jewelry. No loud discount cues, no generic e-commerce clutter. Generous whitespace, large imagery, thin hairline dividers, restrained warm-gold accents.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `cream` | `#F8F6F2` | Primary background |
| `espresso` | `#2A211E` | Primary text, dark sections |
| `gold` | `#B89B6C` | Accent CTA, hover states, highlights |
| `gold-hover` | `#A68A5D` | Gold hover/darken |
| `taupe` | `#6F6560` | Secondary text, muted captions |
| `linen` | `#FFFFFF` | Cards, elevated surfaces |
| `hairline` | `#E4E0DA` | Borders, dividers |
| `sand` | `#F1EDE6` | Subtle section fills |

## Typography
- **Headings / Display / Product names:** Cormorant Garamond, serif. Elegant, high contrast.
- **Body / UI / Buttons:** Manrope, sans-serif. Clean, modern, readable.
- Product names are rendered in **uppercase** with wide letter-spacing (`tracking-[0.25em]`).
- Heading scale uses `text-4xl` to `text-7xl` depending on breakpoint.

## Spacing & Layout
- Mobile-first; generous vertical rhythm (`py-16` to `py-28`).
- Container max-width `max-w-7xl` centered with `px-4 sm:px-6 lg:px-8`.
- Hairline dividers: `border-hairline`, `border-b`.
- Section gaps via whitespace rather than heavy borders.

## Components

### Buttons
- **Primary (solid gold):** `bg-gold text-white hover:bg-gold-hover`.
- **Secondary (outline):** `border border-espresso text-espresso hover:bg-espresso hover:text-cream`.
- **Ghost:** transparent with underline or icon hover.
- Rounded: `rounded-none` for editorial sharpness, or subtle `rounded-sm`.
- Transitions: `transition-colors duration-300 ease-out`.

### Cards
- Background `linen`, no border or `border-hairline`.
- Soft shadow on hover: `hover:shadow-lg`.
- Image aspect ratios: `4/5` for product cards, `3/4` for category tiles, `9/16` for UGC.

### Forms
- Inputs: `bg-transparent border-b border-hairline focus:border-gold outline-none`.
- Focus ring: `focus-visible:ring-2 focus-visible:ring-gold`.

## Imagery
- Warm gold jewelry on dark or neutral backgrounds.
- Use `data-strk-img` / `data-strk-bg` tags with relevant text queries.
- Prefer editorial close-ups and lifestyle shots.

## Motion
- Subtle hover lifts (`-translate-y-0.5`), opacity cross-fades (0.6s), color transitions (0.3s).
- Cart drawer slides in from right (`translate-x-full` to `translate-x-0`).
- Accordion expand/collapse with max-height transition.

## Accessibility
- Strong contrast ratios; espresso on cream, gold on dark.
- All interactive elements keyboard focusable.
- Alt text for every image.
