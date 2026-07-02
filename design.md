# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm editorial, premium demi-fine jewelry. Confidently minimal with generous whitespace, thin hairlines, and warm gold accents. No loud sale messaging, no discount aesthetics.

## Color Palette

### Primary
- **Base / Background**: `#FAF7F2` (warm off-white, used for page backgrounds)
- **Surface**: `#FFFFFF` (pure white cards and panels)
- **Foreground / Text**: `#1C1A17` (deep warm black)

### Accents
- **Gold**: `#BFA15A` (muted antique gold — primary accent for CTAs, links, hover states)
- **Gold Dark**: `#9A7E3F` (hover/active gold)
- **Gold Light**: `#F2E8D5` (subtle gold tint backgrounds)

### Neutrals
- **Muted**: `#8C8276` (warm gray for secondary text, captions, disabled)
- **Border**: `#E8E0D5` (warm hairline dividers)
- **Overlay**: `rgba(28, 26, 23, 0.45)` (image overlays for text legibility)

## Typography

### Font Families
- **Headings / Serif**: `Cormorant Garamond` (Google Fonts) — weights 400, 500, 600, 700
- **Body / UI**: `Inter` (Google Fonts) — weights 300, 400, 500, 600

### Type Scale
- Display hero: `text-5xl md:text-7xl lg:text-8xl`, Cormorant Garamond, font-weight 500, tracking-tight, leading-[0.95]
- H2 section: `text-3xl md:text-4xl lg:text-5xl`, Cormorant Garamond, font-weight 500, tracking-tight
- H3 card: `text-lg md:text-xl`, Cormorant Garamond, uppercase, tracking-[0.2em]
- Body: `text-sm md:text-base`, Inter, font-weight 400, leading-relaxed
- UI / Buttons: `text-xs md:text-sm`, Inter, uppercase, tracking-[0.12em], font-weight 500
- Caption: `text-xs`, Inter, font-weight 400, text-muted

## Spacing & Layout
- Page max-width: `max-w-[1440px]` centered
- Section padding: `py-16 md:py-24 lg:py-32`
- Container horizontal padding: `px-6 md:px-10 lg:px-16`
- Grid gaps: `gap-4 md:gap-6 lg:gap-8`
- Hairline dividers: `border-b border-[#E8E0D5]`

## Components

### Buttons
- **Primary (solid gold)**: `bg-[#BFA15A] text-white uppercase tracking-[0.12em] text-xs md:text-sm px-8 py-3.5 hover:bg-[#9A7E3F] transition-colors duration-300`
- **Secondary (outline)**: `border border-[#1C1A17] text-[#1C1A17] uppercase tracking-[0.12em] text-xs md:text-sm px-8 py-3.5 hover:bg-[#1C1A17] hover:text-white transition-colors duration-300`
- **Ghost**: `text-[#1C1A17] hover:text-[#BFA15A] transition-colors duration-300`

### Cards
- Product card: white or transparent background, subtle hover lift, second image reveal on hover
- Image tiles: full-bleed images with soft gradient overlay and centered uppercase label

### Form Elements
- Inputs: `bg-transparent border-b border-[#E8E0D5] focus:border-[#BFA15A] outline-none py-3 text-[#1C1A17] placeholder:text-[#8C8276]`
- Variant pills: `border border-[#E8E0D5] rounded-full px-5 py-2 text-xs uppercase tracking-wider hover:border-[#BFA15A] data-[selected=true]:border-[#BFA15A] data-[selected=true]:bg-[#F2E8D5]`

## Effects & Motion
- Transitions: `transition-all duration-300 ease-out` or `duration-500`
- Hover: opacity changes, subtle scale `hover:scale-[1.02]`, image cross-fade
- Shadows: `shadow-sm` only, very restrained
- Backdrop blur for overlays: `backdrop-blur-md`

## Do's and Don'ts
- DO use warm off-white backgrounds, not cold gray.
- DO use uppercase serif product names with wide letter-spacing.
- DO keep imagery large and editorial with warm tones.
- DO maintain strong contrast; never place light text on light surfaces.
- DON'T use bright primary colors, neon, or discount red.
- DON'T use heavy shadows or aggressive borders.
- DON'T use generic e-commerce clutter; keep layouts breathable.
