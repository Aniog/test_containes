# Velmora Fine Jewelry — Design System

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-base` | `#1C1917` | Primary text, headings, dark backgrounds |
| `--color-cream` | `#FAF7F2` | Page background, light surfaces |
| `--color-gold` | `#C5A059` | Primary accent, CTAs, hover states, stars |
| `--color-gold-hover` | `#B08D48` | Button hover, darker gold accent |
| `--color-muted` | `#78716C` | Secondary text, captions, labels |
| `--color-border` | `#E7E5E4` | Hairline dividers, card borders |
| `--color-white` | `#FFFFFF` | Cards, nav solid bg, overlays |
| `--color-error` | `#B91C1C` | Error states |
| `--color-success` | `#15803D` | Success states |

## Typography

| Role | Font | Weight | Styling |
|---|---|---|---|
| Headings / Display | Cormorant Garamond | 400–600 | Elegant serif, generous line-height |
| Product names | Cormorant Garamond | 500 | UPPERCASE, letter-spacing `0.15em` |
| Body / UI | Inter | 400–500 | Clean sans-serif, `letter-spacing: 0.01em` |
| Labels / captions | Inter | 400–500 | Small, muted color, uppercase optional |

## Spacing & Layout

- Page max-width: `1440px`
- Horizontal padding: `16px` mobile, `24px` tablet, `48px` desktop, `80px` wide
- Section vertical spacing: `80px` mobile, `120px` desktop
- Hairline dividers: `1px solid #E7E5E4`
- Card border-radius: `0px` (editorial, sharp) or `4px` for subtle softness
- Button border-radius: `0px` (editorial luxury feel)

## Component Primitives

### Buttons
- **Primary**: solid `bg-gold text-white`, hover `bg-gold-hover`, no radius, uppercase tracking-wide
- **Secondary / Outline**: `border border-base text-base`, hover `bg-base text-white`, no radius
- **Ghost**: text only, underline on hover

### Cards
- Background: `white` or `cream`
- Shadow: `shadow-sm` or none (flat editorial)
- Hover: subtle lift with `shadow-md` and image swap

### Inputs
- Border: `1px solid border`
- Focus: `border-gold`, no ring
- Background: `white`

## Animation
- Hover transitions: `duration-300 ease-out`
- Page sections: fade-up on scroll (optional)
- Cart drawer: slide from right `300ms`

## Do's and Don'ts
- DO use generous whitespace
- DO keep imagery warm-lit, gold-on-neutral
- DON'T use loud colors or discount styling
- DON'T use rounded-full buttons (too generic)
- DON'T crowd elements — let jewelry breathe
