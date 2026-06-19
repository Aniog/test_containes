# Velmora Fine Jewelry — Design System

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.
- **Target**: Women 25–45, gifting and self-purchase, premium-but-accessible ($30–$120).

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `charcoal` | `#1A1714` | Primary background (dark sections), nav solid, footer |
| `cream` | `#F5F0EB` | Light backgrounds, page body |
| `gold` | `#C9A96E` | Primary accent — buttons, links, highlights, CTAs |
| `gold-light` | `#D4BA8A` | Hover state for gold |
| `gold-dark` | `#A8894E` | Active/pressed state for gold |
| `brown` | `#3D3229` | Secondary dark — card backgrounds on dark sections |
| `taupe` | `#8B7E74` | Muted text, secondary labels |
| `warm-gray` | `#E8E2DB` | Borders, dividers, subtle backgrounds |
| `white` | `#FFFFFF` | Card backgrounds, text on dark |
| `off-white` | `#FAF8F5` | Alternate light background |

## Typography

- **Headings**: `Cormorant Garamond`, serif — elegant, editorial
  - Product names: UPPERCASE, letter-spacing 0.15em
  - Section headings: Normal case, letter-spacing 0.05em
- **Body / UI**: `Inter`, sans-serif — clean, modern
  - Buttons: UPPERCASE, letter-spacing 0.1em, font-weight 500
  - Body text: font-weight 400, line-height 1.6

### Type Scale
- Hero headline: 4rem–5rem (64–80px)
- Section heading: 2rem–2.5rem (32–40px)
- Product name: 0.875rem (14px) uppercase tracked
- Body: 0.9375rem (15px)
- Small / caption: 0.75rem (12px)

## Spacing & Layout
- Generous whitespace — minimum 80px between sections
- Max content width: 1280px
- Page padding: 24px mobile, 40px desktop
- Card padding: 24px
- Section padding: 80px vertical (mobile 48px)

## Borders & Dividers
- Hairline dividers: 1px solid warm-gray (#E8E2DB)
- Card borders: none (use subtle shadow instead)
- Button borders: 1px solid gold (outlined style)

## Shadows
- Cards: `0 2px 8px rgba(26, 23, 20, 0.06)`
- Hover: `0 4px 16px rgba(26, 23, 20, 0.1)`
- Nav: `0 1px 0 rgba(26, 23, 20, 0.08)`

## Buttons
- **Primary (accent)**: bg-gold text-white, hover bg-gold-light, uppercase, tracked, rounded-none, px-8 py-3
- **Secondary (outlined)**: border-gold text-gold, hover bg-gold text-white, uppercase, tracked, rounded-none
- **Ghost**: text-charcoal underline, hover text-gold

## Transitions
- All hover transitions: 300ms ease
- Image reveals: 500ms ease
- Nav background: 300ms ease

## Do's
- Use warm, soft lighting in imagery
- Keep layouts spacious and editorial
- Use gold sparingly as accent
- Ensure strong contrast (WCAG AA minimum)
- Use serif for emotional/editorial moments, sans for functional UI

## Don'ts
- Don't use bright/saturated colors
- Don't crowd layouts — whitespace is luxury
- Don't use rounded buttons (sharp corners = editorial)
- Don't use heavy shadows or gradients
- Don't mix warm and cool tones
