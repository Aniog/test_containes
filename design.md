# Velmora Fine Jewelry — Design System

## Visual Direction
**Quiet luxury, warm, editorial.** Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Primary
- **Deep Charcoal** `#1C1917` — main background for hero/dark sections, nav solid state
- **Warm Cream** `#FAF7F2` — page background, light sections
- **Rich Gold** `#B8860B` — accent color, CTAs, highlights, links
- **Soft Gold** `#D4A843` — hover states, secondary gold

### Neutrals
- **Stone-900** `#1C1917` — text on light backgrounds
- **Stone-700** `#44403C` — secondary text
- **Stone-500** `#78716C` — muted text, placeholders
- **Stone-300** `#D6D3D1` — borders, dividers
- **Stone-100** `#F5F5F4` — card backgrounds on light
- **Cream-50** `#FAF7F2` — warm off-white page bg

### Semantic
- **Success** `#166534` — confirmation messages
- **Error** `#991B1B` — error states

## Typography

### Headings & Product Names
- **Font**: Cormorant Garamond (Google Fonts, weights 400/500/600/700)
- **Style**: Uppercase with wide letter-spacing for product names
- **Sizes**: 
  - H1: `text-5xl md:text-6xl lg:text-7xl` tracking-wide
  - H2: `text-3xl md:text-4xl` tracking-wide
  - H3: `text-2xl md:text-3xl` tracking-wide
  - Product name: `text-lg md:text-xl` uppercase tracking-[0.2em]

### Body & UI
- **Font**: Inter (Google Fonts, weights 300/400/500/600)
- **Style**: Clean, minimal
- **Sizes**:
  - Body: `text-sm md:text-base`
  - Small: `text-xs`
  - Button: `text-sm tracking-widest uppercase`

## Spacing & Layout
- Generous whitespace throughout
- Section padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl`
- Grid gaps: `gap-6 md:gap-8`
- Hairline dividers: `border-t border-stone-300/50`

## Buttons
- **Primary (Accent)**: bg-rich-gold text-white, uppercase, tracking-widest, text-sm, px-8 py-3, hover:bg-soft-gold, transition-all duration-300
- **Secondary (Outlined)**: border border-rich-gold text-rich-gold, uppercase, tracking-widest, text-sm, px-8 py-3, hover:bg-rich-gold hover:text-white, transition-all duration-300
- **Subtle**: text-stone-700 underline-offset-4 hover:underline, tracking-wide

## Cards
- Product cards: no visible border, subtle shadow on hover, rounded-none (sharp corners for editorial feel)
- Image aspect ratio: 4x5 for product shots
- Hover: second image fade-in, slight scale

## Animations
- Subtle, smooth transitions (300ms ease)
- Hover scale: `hover:scale-[1.02]`
- Fade transitions for image swaps
- No bouncy or playful animations

## Do's
- Use generous whitespace
- Use serif for all headings and product names
- Use uppercase + wide tracking for product names
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Ensure strong contrast (dark text on light, light text on dark)

## Don'ts
- Don't use bright/saturated colors
- Don't use rounded buttons or cards (keep sharp/editorial)
- Don't use playful or bouncy animations
- Don't crowd elements — let them breathe
- Don't use generic e-commerce patterns (badges, countdown timers, etc.)
- Don't use light text on light backgrounds
