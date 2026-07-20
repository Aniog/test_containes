# Velmora Fine Jewelry — Design System

## Visual Direction
**Mood:** Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
| Token | Hex | Usage |
|---|---|---|
| `warm-black` | `#1C1917` | Primary text, nav solid bg, hero overlay |
| `warm-white` | `#FAF9F6` | Page background |
| `gold` | `#C9A96E` | Accent — buttons, links, highlights, stars |
| `gold-dark` | `#A88B4A` | Hover state for gold |
| `cream` | `#F5F0E8` | Alternate section backgrounds, card hover |
| `stone` | `#8C8279` | Muted text, secondary labels |
| `sand` | `#E8E2DA` | Borders, hairline dividers |
| `white` | `#FFFFFF` | Card backgrounds |

## Typography
- **Headings:** Cormorant Garamond, serif. Uppercase with wide letter-spacing for product names.
  - H1: `text-4xl md:text-5xl lg:text-6xl font-light tracking-wide`
  - H2: `text-3xl md:text-4xl font-light tracking-wide`
  - Product name: `text-lg font-medium uppercase tracking-[0.2em]`
- **Body:** Inter, sans-serif. Clean and legible.
  - Body: `text-sm md:text-base font-normal`
  - Small/label: `text-xs uppercase tracking-[0.15em]`
  - Price: `text-base font-medium`

## Spacing & Layout
- Generous whitespace: `py-20 md:py-28` for sections, `py-12 md:py-16` for compact sections
- Max content width: `max-w-7xl mx-auto px-4 md:px-6 lg:px-8`
- Grid gaps: `gap-6 md:gap-8`
- Hairline dividers: `border-t border-sand`

## Buttons
- **Primary (accent):** `bg-gold text-warm-black hover:bg-gold-dark px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300`
- **Secondary (outlined):** `border border-warm-black text-warm-black hover:bg-warm-black hover:text-warm-white px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300`
- Rounded: `rounded-none` (sharp corners for editorial feel)

## Cards
- Product cards: white bg, subtle shadow on hover, image zoom on hover
- `transition-all duration-500 ease-out`

## Images
- Editorial, warm-lit, close-up jewelry photography
- Placeholder ratio: 3x4 for products, 16x9 for hero, 9x16 for UGC

## Animations
- Subtle, smooth transitions (300-500ms)
- Hover: image scale(1.05), opacity shifts
- No bouncy or playful animations

## Do's
- Use generous whitespace
- Use serif for all headings and product names
- Use uppercase + wide tracking for product names
- Keep accent color (gold) restrained — buttons, links, small highlights only
- Ensure strong text contrast on all backgrounds

## Don'ts
- Don't use bright/saturated colors
- Don't use rounded buttons or cards (keep editorial/sharp)
- Don't use playful or bouncy animations
- Don't mix too many font styles
- Don't use low-contrast text (stone on cream is borderline — always test)
