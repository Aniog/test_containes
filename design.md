# Velmora Fine Jewelry — Design System

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `cream` | `#FAF7F2` | Primary background |
| `charcoal` | `#1C1C1C` | Primary text, headings |
| `warm-gold` | `#C5A059` | Accent CTA, highlights, hover states |
| `stone` | `#8C8279` | Secondary text, muted labels |
| `sand` | `#EDE8E0` | Cards, subtle backgrounds, dividers |
| `white` | `#FFFFFF` | Overlays, nav solid state |
| `error` | `#B5423F` | Form errors |

## Typography

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Headings | Cormorant Garamond | 400, 500 | Elegant serif |
| Body / UI | Inter | 400, 500, 600 | Clean sans-serif |
| Product names | Cormorant Garamond | 500 | UPPERCASE, letter-spacing: 0.12em |

## Spacing & Layout

- Generous whitespace: section padding 80–120px desktop, 48–64px mobile
- Container max-width: 1280px, centered
- Thin hairline dividers: 1px solid `#EDE8E0`
- Border radius: 0px (sharp, editorial) or 2px for subtle softness

## Buttons

- Primary: solid `warm-gold` bg, white text, no border-radius, padding 14px 32px
- Secondary / outline: transparent bg, 1px `charcoal` border, charcoal text
- Hover: subtle opacity shift (0.9), gentle translateY(-1px)

## Shadows

- Card hover: `0 8px 30px rgba(28, 28, 28, 0.08)`
- Nav solid: `0 1px 0 rgba(28, 28, 28, 0.06)`

## Animation

- Transitions: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- Image hover zoom: `scale(1.03)` over 0.5s
- Fade in on load: opacity 0 → 1, 0.6s ease-out
