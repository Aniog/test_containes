# Velmora Fine Jewelry — Design System

## Visual Direction
**Mood:** Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `warm-black` | `#1A1714` | Primary background (deep warm black) |
| `warm-charcoal` | `#2A2520` | Card backgrounds, elevated surfaces |
| `warm-brown` | `#3D352E` | Borders, subtle dividers |
| `warm-tan` | `#8B7E74` | Muted text, secondary elements |
| `warm-sand` | `#C4B5A5` | Placeholder text, disabled states |
| `cream` | `#F5F0EB` | Light backgrounds, alternate sections |
| `ivory` | `#FAF8F5` | Page background (light mode) |
| `gold` | `#C9A96E` | Primary accent, CTAs, highlights |
| `gold-light` | `#D4BA8A` | Hover state for gold |
| `gold-dark` | `#A88B52` | Active/pressed state for gold |
| `white` | `#FFFFFF` | Text on dark, clean surfaces |
| `off-white` | `#F0ECE6` | Subtle light backgrounds |

## Typography

- **Headings:** Cormorant Garamond (serif) — elegant, editorial
- **Body / UI:** Inter (sans-serif) — clean, readable
- **Product names:** UPPERCASE with `tracking-[0.2em]` letter-spacing

### Scale
- Hero headline: `text-5xl md:text-7xl` (Cormorant Garamond, light weight)
- Section headings: `text-3xl md:text-4xl` (Cormorant Garamond)
- Product names: `text-sm md:text-base uppercase tracking-[0.2em]` (Cormorant Garamond)
- Body: `text-sm md:text-base` (Inter)
- Small / caption: `text-xs` (Inter)

## Spacing & Layout
- Generous whitespace: `py-20 md:py-32` for sections
- Max content width: `max-w-7xl mx-auto`
- Grid gaps: `gap-6 md:gap-8`
- Hairline dividers: `border-t border-warm-brown/30`

## Buttons
- **Primary (accent):** `bg-gold text-warm-black hover:bg-gold-light` — solid, premium feel
- **Secondary:** `border border-gold text-gold hover:bg-gold hover:text-warm-black` — outlined
- **Pill buttons:** Rounded-full for variant selectors
- Transitions: `transition-all duration-300`

## Cards
- Minimal: no visible border, subtle shadow on hover
- Product cards: image dominant, name + price below
- Hover: second image fade-in, subtle scale

## Shadows
- `shadow-sm` for cards
- `shadow-lg` for modals/drawers
- Soft, warm-toned shadows

## Animations
- Subtle and smooth: `transition-all duration-300 ease-out`
- Hover lifts: `hover:-translate-y-1`
- Image crossfade on product hover
- Nav background transition on scroll

## Do's
- Use generous whitespace
- Use serif for all headings and product names
- Use warm, gold-toned accents sparingly
- Ensure strong contrast (light text on dark, dark text on light)
- Use thin hairline dividers

## Don'ts
- Don't use bright/saturated colors
- Don't use heavy borders or box shadows
- Don't use sans-serif for headings
- Don't crowd elements — let them breathe
- Don't use generic blue/purple accent colors
