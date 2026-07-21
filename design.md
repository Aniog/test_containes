# Velmora Fine Jewelry — Design System

## Visual Direction
**Mood:** Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `warm-black` | `#1A1714` | Primary text, nav solid bg, footer bg |
| `charcoal` | `#2C2824` | Secondary dark surfaces |
| `warm-gray` | `#6B6460` | Muted text, secondary labels |
| `stone` | `#9C9590` | Disabled states, subtle borders |
| `sand` | `#D4CBC3` | Hairline dividers, light borders |
| `cream` | `#FAF7F2` | Page background, card backgrounds |
| `ivory` | `#FFFDF9` | Lightest surface, hero overlay |
| `gold` | `#C9A96E` | Primary accent, CTA buttons, links |
| `gold-dark` | `#A8894F` | Hover state for gold |
| `gold-light` | `#E2D1A8` | Light gold accents, highlights |

## Typography

- **Headings:** Cormorant Garamond (serif), weights 400/500/600
- **Body / UI:** Inter (sans-serif), weights 300/400/500/600
- **Product names:** UPPERCASE, letter-spacing 0.15em, Cormorant Garamond 500
- **Section headings:** Cormorant Garamond 400/500, normal case or small-caps

## Spacing & Layout
- Generous whitespace: sections use `py-20 md:py-28`
- Max content width: `max-w-7xl` (1280px)
- Hairline dividers: `border-t border-sand`
- Card padding: `p-6`
- Grid gaps: `gap-6 md:gap-8`

## Buttons
- **Primary (accent):** `bg-gold text-warm-black hover:bg-gold-dark`, uppercase, letter-spacing 0.1em, font-semibold, `px-8 py-3`
- **Secondary (outlined):** `border border-gold text-gold hover:bg-gold hover:text-warm-black`
- **Subtle:** `text-warm-gray hover:text-gold underline-offset-4 hover:underline`

## Cards & Surfaces
- Product cards: `bg-ivory` with subtle shadow on hover
- No heavy borders; use shadow and background contrast
- Hover: second image fade-in, subtle scale or shadow lift

## Animations
- Transitions: `transition-all duration-300 ease-out`
- Hover lifts: `hover:-translate-y-1`
- Image crossfade on product hover
- Nav: transparent → solid on scroll with smooth bg transition

## Do's
- Use warm, golden tones throughout
- Keep whitespace generous
- Use serif for emotional/editorial moments
- Ensure strong contrast on all text
- Use thin hairline dividers between sections

## Don'ts
- Don't use cool blues or grays
- Don't use heavy shadows or thick borders
- Don't crowd content — let it breathe
- Don't use sans-serif for product names or hero headlines
- Don't use bright/saturated accent colors
