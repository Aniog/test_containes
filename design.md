# Velmora Fine Jewelry — Visual Design System

## Brand Mood
Quiet luxury. Warm, editorial, premium-but-accessible demi-fine jewelry. The visual language is closer to a magazine spread than an e-commerce store. Restrained, never loud, never discount-looking.

## Color Direction — "Warm Cream + Champagne Gold"
A single confident palette: warm cream paper background with a refined champagne-gold accent. The gold is muted, never yellow-cartoon. The deep espresso ink is warmer than pure black. This is a quiet palette that flatters real gold jewelry.

### Core tokens
| Token | Hex | Tailwind class | Use |
|---|---|---|---|
| `bg` | `#FBF7F2` | `bg-cream` | Page background, base layer |
| `surface` | `#FFFFFF` | `bg-surface` | Cards, cart drawer, modals |
| `surface-warm` | `#F5EFE6` | `bg-surface-warm` | Alt panels, newsletter, testimonials |
| `ink` | `#1F1A14` | `text-ink` | Primary text, headings |
| `ink-muted` | `#7A6F62` | `text-ink-muted` | Secondary text, captions, helper |
| `gold` | `#B68B4A` | `bg-gold`, `text-gold` | Accent — CTAs, links, hover, prices |
| `gold-deep` | `#8B6630` | `bg-gold-deep` | CTA hover state |
| `gold-soft` | `#E8D9BC` | `bg-gold-soft` | Tags, soft borders, divider emphasis |
| `line` | `#E8DFD2` | `border-line` | Hairlines, dividers, card borders |
| `line-soft` | `#F0E9DD` | `border-line-soft` | Subtle separators |
| `overlay` | `#1A140A` | `bg-overlay` | Hero, dark panels, image overlays |
| `success` | `#4A7C59` | `text-success` | Form success |

### Text contrast
- Body text on `bg`: `ink` (#1F1A14) on `#FBF7F2` — AAA contrast.
- Body text on `surface`: `ink` on `#FFFFFF` — AAA.
- Muted text on `bg`: `ink-muted` (#7A6F62) on `#FBF7F2` — AA.
- Gold accent on `bg`: `#B68B4A` on `#FBF7F2` — AA for large text; use only for headings, buttons, and decorative accents, never for body copy.
- White text on `gold`: white on `#B68B4A` — AA.

## Typography

### Font families
- **Headings / Serif**: Cormorant Garamond (300, 400, 500, 600) — `font-serif`. Elegant, editorial, slightly fashion-magazine. Use for h1, h2, h3, product names, brand logo, hero text, section titles.
- **Body / Sans**: Inter (300, 400, 500, 600, 700) — `font-sans`. Use for body, UI, navigation, buttons, captions, prices.

### Scale (mobile → desktop)
| Element | Mobile | Desktop | Class pattern |
|---|---|---|---|
| Display (hero) | 48 / 56 | 72 / 80 | `font-serif text-5xl md:text-7xl font-light` |
| H1 | 36 / 44 | 56 / 64 | `font-serif text-4xl md:text-6xl font-light` |
| H2 | 28 / 36 | 40 / 48 | `font-serif text-3xl md:text-5xl font-light` |
| H3 | 22 / 28 | 28 / 36 | `font-serif text-2xl md:text-4xl font-light` |
| Product name | 14 | 14 | `font-sans text-sm font-medium tracking-[0.18em] uppercase` |
| Body | 16 / 24 | 16 / 26 | `font-sans text-base` |
| Small / caption | 13 / 20 | 14 / 20 | `font-sans text-sm` |
| Eyebrow / label | 11 | 12 | `font-sans text-xs tracking-[0.24em] uppercase text-ink-muted` |

### Treatment rules
- Product names: ALWAYS UPPERCASE, wide letter-spacing (0.18em). Inter medium weight.
- Eyebrows / labels: UPPERCASE, 0.24em tracking, muted color.
- Body: never UPPERCASE, sentence case.
- Headings: sentence case. Italic allowed for editorial pull-quotes.

## Layout & Spacing

### Grid
- Container max width: `max-w-7xl` (1280px) for most content.
- Editorial sections: `max-w-6xl` for tighter reading width.
- Generous outer padding: `px-5 md:px-10 lg:px-16`.
- Section vertical padding: `py-20 md:py-28 lg:py-32` for major sections, `py-12 md:py-16` for tight.

### Whitespace
- White space is the design. Don't fill space with ornaments. Default to breathing room.
- Cards on hover: lift slightly (translate-y-[-2px]), soft shadow `shadow-[0_20px_50px_-20px_rgba(31,26,20,0.15)]`.

### Imagery
- Editorial ratios: 3:2 (hero split), 4:3 (product), 16:9 (story), 9:16 (UGC reels), 1:1 (category tile).
- Use warm-lit gold jewelry on dark / neutral / warm backgrounds.
- Image treatments: no harsh overlays. Soft `bg-overlay/30` gradient if text is overlaid.

## Components

### Buttons
Three variants, all `rounded-none` (sharp corners for premium feel) with thin gold or ink underline accents on hover. Padding `px-8 py-4` desktop, `px-6 py-3` mobile. Font Inter medium, uppercase, `tracking-[0.18em]`, `text-xs` to `text-sm`.

- **Primary (gold)**: `bg-gold text-white hover:bg-gold-deep transition-colors duration-300`. Used for main CTAs ("Add to Cart", "Shop the Collection").
- **Secondary (outline)**: `border border-ink text-ink hover:bg-ink hover:text-cream transition-colors duration-300`. Used for "View all", "Subscribe".
- **Ghost (link)**: `text-ink hover:text-gold transition-colors`. Optional underline via `border-b border-current`. Used for "Our Story", "View product".

### Form inputs
- `border-b border-line bg-transparent px-1 py-3` for newsletter (no boxes, only underline). Focus state: `border-gold`.
- Filter selects: `border border-line px-4 py-2 text-sm` with chevron.

### Hairlines
- `h-px bg-line w-full` for full-width dividers.
- `border-line` (1px) for card borders, grid separators.

### Cards
- Product card: white surface, image, name, price. Border `border-line` 1px on hover only. No box shadow by default.

### Product card hover
- Image swap: second image fades in on hover with `opacity-0 group-hover:opacity-100 transition-opacity duration-700`.
- Quick add button slides up from below the image on hover.

## Iconography
Lucide React, stroke-width 1.5 (thin, editorial feel). 20px default, 16px in nav. Color: `text-ink` default, `text-gold` for accent.

## Motion
- All transitions: 300ms default, 700ms for image swaps.
- Easing: `ease-out` for entrances, `ease-in-out` for hovers.
- No bouncy or playful easing. Restrained.
- Fade + small translate-y on scroll (8-12px) for editorial feel. Implemented via CSS only where possible.

## Do
- Use ample whitespace
- Use the warm cream + champagne gold palette consistently
- Use Cormorant Garamond for ALL editorial / hero / product name headings
- Use Inter for ALL UI / body / button text
- Use hairline (1px) dividers in `line` color
- Use the gold accent only for emphasis (CTAs, hover, prices, eyebrows)
- Keep product names UPPERCASE with wide tracking
- Make editorial imagery large and warm

## Don't
- Don't use red, neon, or saturated colors
- Don't use bright yellow gold (cartoon gold)
- Don't use drop shadows on everything — soft shadows only on hover
- Don't use rounded-full buttons or pill shapes for primary actions
- Don't use lowercase or sentence-case product names
- Don't use busy gradients
- Don't use emojis as UI icons
- Don't use bright discount badges or countdown timers — the brand is quiet, not loud
