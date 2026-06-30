# Velmora Fine Jewelry — Design System

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.
- **Direction**: Deep refined base + warm metallic accents. A dark, rich palette that makes gold jewelry glow.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `charcoal` | `#1C1917` | Primary background, nav, hero overlays |
| `warm-black` | `#292524` | Card backgrounds, secondary surfaces |
| `cream` | `#FAF7F2` | Light sections, newsletter block, body text on dark |
| `ivory` | `#F5F0E8` | Alternate light backgrounds |
| `gold` | `#C9A96E` | Primary accent, CTAs, highlights, hover states |
| `gold-light` | `#D4B87A` | Hover state for gold buttons |
| `gold-dark` | `#A88B52` | Active/pressed state for gold |
| `warm-gray` | `#A8A29E` | Muted text, secondary labels |
| `stone` | `#78716C` | Body text on light backgrounds |
| `pearl` | `#E7E5E4` | Hairline dividers, borders |
| `white` | `#FFFFFF` | Pure white for contrast |

## Typography

- **Headings**: Cormorant Garamond (serif) — elegant, editorial
  - Product names: UPPERCASE, `tracking-[0.2em]`, `font-light` or `font-normal`
  - Section headings: `font-light`, large sizes
- **Body / UI**: Inter (sans-serif) — clean, modern
  - Navigation, buttons, labels, descriptions
  - `font-light` for body, `font-medium` for labels/buttons

### Font Sizes
- Hero headline: `text-4xl md:text-6xl lg:text-7xl`
- Section headings: `text-2xl md:text-4xl`
- Product names: `text-sm md:text-base tracking-[0.2em]`
- Body: `text-sm md:text-base`
- Labels/captions: `text-xs tracking-wider`

## Spacing & Layout
- Generous whitespace — sections have `py-20 md:py-32`
- Max content width: `max-w-7xl mx-auto`
- Product grid gap: `gap-6 md:gap-8`
- Hairline dividers: `border-t border-pearl/30`

## Buttons
- **Primary (accent)**: `bg-gold text-charcoal hover:bg-gold-light`, uppercase, `tracking-[0.15em]`, `text-xs md:text-sm`, `px-8 py-3`, `transition-all duration-300`
- **Secondary (outlined)**: `border border-gold text-gold hover:bg-gold hover:text-charcoal`, same sizing
- **Subtle**: `text-cream/70 hover:text-gold underline-offset-4 hover:underline`

## Cards
- Product cards: no visible border, subtle `hover:shadow-lg`, image-first
- Hover reveals second image with `opacity` transition
- Quick-add button appears on hover

## Animations
- Subtle, smooth transitions: `transition-all duration-300` or `duration-500`
- No bouncy or playful animations
- Fade-in on scroll (optional, via CSS)
- Hover lifts: `hover:-translate-y-1`

## Images
- Warm-lit, editorial style
- Dark/neutral backgrounds for product shots
- Use `data-strk-img` for stock imagery
- Aspect ratios: product cards 3x4, hero 16x9, category tiles 4x5

## Do's
- Use generous whitespace
- Keep typography elegant and restrained
- Use gold as the single accent color
- Ensure strong contrast (cream/white text on dark, stone text on light)
- Use hairline dividers instead of heavy borders

## Don'ts
- Don't use bright or saturated colors
- Don't use heavy shadows or thick borders
- Don't use playful/bouncy animations
- Don't mix too many font styles
- Don't use generic e-commerce patterns (badges, countdown timers, etc.)
