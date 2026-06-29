# Velmora Fine Jewelry — Design System

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.
- **Target**: Women 25–45, gifting and self-purchase, premium-but-accessible ($30–$120).

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `warm-black` | `#1A1714` | Primary background for dark sections, nav solid state |
| `cream` | `#FAF7F2` | Primary light background, page body |
| `ivory` | `#F5F0E8` | Card backgrounds, subtle sections |
| `gold` | `#C9A96E` | Primary accent — buttons, links, highlights |
| `gold-dark` | `#A88B52` | Hover state for gold elements |
| `gold-light` | `#E8D5A8` | Light gold for borders, dividers |
| `charcoal` | `#2C2825` | Body text on light backgrounds |
| `warm-gray` | `#8A8279` | Secondary/muted text |
| `warm-gray-light` | `#B5AFA7` | Placeholder text, disabled states |
| `white` | `#FFFFFF` | Text on dark backgrounds |

## Typography

- **Headings**: Cormorant Garamond (serif) — elegant, editorial
  - Product names: UPPERCASE, letter-spacing 0.15em
  - Section headings: normal case, letter-spacing 0.05em
- **Body / UI**: Inter (sans-serif) — clean, modern
  - Buttons: uppercase, letter-spacing 0.1em, font-weight 500
  - Navigation: uppercase, letter-spacing 0.12em, font-weight 500

### Font Sizes
- Hero headline: text-5xl md:text-7xl
- Section heading: text-3xl md:text-4xl
- Product name: text-base md:text-lg
- Body: text-sm md:text-base
- Caption/label: text-xs md:text-sm

## Spacing & Layout
- Generous whitespace — sections separated by py-20 md:py-28
- Content max-width: max-w-7xl (1280px)
- Product grid gap: gap-6 md:gap-8
- Card padding: p-4 md:p-6
- Hairline dividers: border-t border-gold-light/30

## Buttons
- **Primary (accent)**: bg-gold text-warm-black, hover:bg-gold-dark, uppercase, tracking-widest, px-8 py-3, text-sm
- **Secondary (outlined)**: border border-gold text-gold, hover:bg-gold hover:text-warm-black, same sizing
- **Ghost**: text-gold underline-offset-4 hover:underline

## Cards
- Product cards: bg-white, subtle shadow on hover, rounded-none (sharp corners for editorial feel)
- Image aspect ratio: 4:5 for product shots
- Hover: second image fade-in, subtle scale(1.02)

## Animations
- Transitions: duration-300, ease-in-out
- Hover lifts: subtle translateY(-2px)
- Nav scroll: transparent → solid bg-warm-black with backdrop-blur
- Cart drawer: slide-in from right

## Do's
- Use warm, golden tones throughout
- Keep layouts clean with generous whitespace
- Use serif for emotional/editorial moments
- Ensure strong contrast (charcoal on cream, white on warm-black)
- Use thin hairline dividers between sections

## Don'ts
- Don't use bright/saturated colors
- Don't use rounded buttons or cards (keep editorial/sharp)
- Don't crowd layouts — whitespace is luxury
- Don't use generic e-commerce patterns (no starburst badges, no aggressive red sale tags)
- Don't use light text on light backgrounds
