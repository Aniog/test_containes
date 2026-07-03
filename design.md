# Velmora Fine Jewelry — Design System

## Visual Direction
**Mood:** Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Primary
- **Deep Charcoal** `#1C1917` — main background for dark sections, nav solid state
- **Warm Cream** `#FAF7F2` — main page background, light sections
- **Rich Gold** `#B8860B` — primary accent, CTAs, highlights
- **Soft Gold** `#D4A843` — hover states, secondary accents

### Neutrals
- **Stone-900** `#1C1917` — text on light backgrounds
- **Stone-700** `#44403C` — secondary text
- **Stone-500** `#78716C` — muted text, placeholders
- **Stone-300** `#D6D3D1` — borders, dividers
- **Stone-100** `#F5F5F4` — card backgrounds
- **Stone-50** `#FAFAF9` — subtle backgrounds

### Semantic
- **Success** `#166534` — confirmation messages
- **Error** `#991B1B` — error states

## Typography

### Headings & Product Names
- **Font:** Cormorant Garamond (Google Fonts, weights 400/500/600/700)
- **Style:** Uppercase with wide letter-spacing for product names
- **Sizes:** 
  - H1: `text-5xl md:text-6xl lg:text-7xl` tracking-wide
  - H2: `text-3xl md:text-4xl` tracking-wide
  - H3: `text-xl md:text-2xl` tracking-wider (product names)

### Body & UI
- **Font:** Inter (Google Fonts, weights 300/400/500/600)
- **Style:** Clean, minimal
- **Sizes:**
  - Body: `text-sm md:text-base`
  - Small: `text-xs`
  - Button: `text-sm tracking-widest uppercase`

## Spacing & Layout
- Generous whitespace — sections have `py-20 md:py-28`
- Container max-width: `max-w-7xl`
- Grid gaps: `gap-6 md:gap-8`
- Hairline dividers: `border-t border-stone-300/50`

## Buttons
- **Primary (accent):** bg-rich-gold text-warm-cream, uppercase, tracking-widest, px-8 py-3, hover:bg-soft-gold
- **Secondary (outlined):** border-rich-gold text-rich-gold, uppercase, tracking-widest, px-8 py-3, hover:bg-rich-gold hover:text-warm-cream
- **Subtle:** text-stone-700 underline-offset-4 hover:underline

## Cards
- Minimal, no visible border by default
- Subtle shadow on hover: `shadow-sm`
- Image-first, generous padding below image
- Product name in serif uppercase with tracking

## Animations
- Subtle, smooth transitions: `transition-all duration-300`
- Hover image swap on product cards
- Nav background transition on scroll
- Cart drawer slide-in from right

## Do's
- Use generous whitespace
- Use serif for headings and product names
- Use warm, gold-toned accents sparingly
- Ensure high contrast for readability
- Use thin hairline dividers

## Don'ts
- Don't use bright/saturated colors
- Don't use heavy shadows or thick borders
- Don't mix too many font styles
- Don't use generic e-commerce patterns (badges, loud sales banners)
- Don't use low-contrast text
