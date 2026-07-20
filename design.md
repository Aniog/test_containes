# Velmora Fine Jewelry — Design System

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.
- **Direction**: Deep warm base + warm metallic gold accents. Soft neutral/editorial scheme.

## Color Palette

### Primary Colors
- **Deep Charcoal** (base): `#1C1917` — backgrounds, nav, footer
- **Warm Cream** (surface): `#FAF7F2` — page backgrounds, cards
- **Gold Accent**: `#B8860B` — CTAs, highlights, accents (DarkGoldenRod)
- **Gold Light**: `#D4A843` — hover states, secondary accents

### Neutral Colors
- **Stone 800**: `#292524` — text on light backgrounds
- **Stone 600**: `#57534E` — secondary text
- **Stone 400**: `#A8A29E` — muted text, dividers
- **Stone 200**: `#E7E5E4` — borders, hairline dividers
- **White**: `#FFFFFF` — card backgrounds, text on dark

### Semantic
- **Success**: `#4A7C59` — confirmation messages
- **Error**: `#9B3333` — error states

## Typography

### Headings & Product Names
- **Font**: Cormorant Garamond (Google Fonts, weights 400/500/600/700)
- **Style**: Uppercase with wide letter-spacing for product names
- **Sizes**: 
  - H1: `text-5xl md:text-6xl lg:text-7xl` tracking-wide
  - H2: `text-3xl md:text-4xl` tracking-wide
  - H3: `text-2xl md:text-3xl` tracking-wide
  - Product name: `text-lg md:text-xl uppercase tracking-[0.2em]`

### Body & UI
- **Font**: Inter (Google Fonts, weights 300/400/500/600)
- **Style**: Clean, minimal
- **Sizes**:
  - Body: `text-sm md:text-base`
  - Small: `text-xs`
  - Button: `text-sm uppercase tracking-[0.15em]`

## Spacing
- Section padding: `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-6 lg:px-8`
- Card gaps: `gap-6 md:gap-8`
- Generous whitespace throughout

## Components

### Buttons
- **Primary (Accent)**: `bg-[#B8860B] text-white uppercase tracking-[0.15em] text-sm font-medium px-8 py-3 hover:bg-[#D4A843] transition-all duration-300`
- **Secondary (Outlined)**: `border border-[#B8860B] text-[#B8860B] uppercase tracking-[0.15em] text-sm font-medium px-8 py-3 hover:bg-[#B8860B] hover:text-white transition-all duration-300`
- **Dark**: `bg-[#1C1917] text-white uppercase tracking-[0.15em] text-sm font-medium px-8 py-3 hover:bg-[#292524] transition-all duration-300`

### Cards
- Product cards: `bg-white rounded-none overflow-hidden group cursor-pointer`
- Hover: second image fade-in, subtle shadow
- No border radius (sharp corners for editorial feel)

### Dividers
- Hairline: `border-t border-[#E7E5E4]` or `border-t border-stone-200`

### Shadows
- Subtle: `shadow-sm`
- Hover: `shadow-md`
- No heavy shadows

## Animations
- Hover transitions: `transition-all duration-300` or `duration-500`
- Image crossfade on hover
- Smooth scroll
- Cart drawer slide-in from right

## Do's
- Use generous whitespace
- Use serif for all headings and product names
- Use uppercase + wide tracking for product names
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Ensure strong contrast for accessibility

## Don'ts
- Don't use rounded corners on product cards or buttons (keep editorial/sharp)
- Don't use bright or saturated colors
- Don't use heavy shadows
- Don't use generic e-commerce patterns (no starburst badges, no aggressive sale banners)
- Don't use more than 2 font families
- Don't use low-contrast text
