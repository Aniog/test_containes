# Velmora Fine Jewelry - Design Identity

## Mood: Quiet Luxury, Warm, Editorial
Premium demi-fine jewelry brand targeting women 25-45. 
Visual focus: Large editorial imagery, generous whitespace, thin hairline dividers.

## Color Palette
Base: Soft Off-White (#FBFAF8)
Secondary: Warm Stone Grey (#E5E1DB)
Accent/Primary: Deep Slate Ebony (#1A1A1A) for text and premium elements
Metallic Accent: Muted Gold (#C5A059) for highlights and subtle UI accents
Text: Midnight Black (#1A1A1A) and Soft Grey (#666666)

## Typography
- **Headings & Product Names**: Serif - Cormorant Garamond 
  - *Tailwind classes*: `font-serif tracking-[0.15em] uppercase`
- **Body & UI**: Sans-Serif - Inter or Manrope
  - *Tailwind classes*: `font-sans font-light tracking-wide`

## UI Elements
- **Buttons**:
  - Solid: `bg-[#1A1A1A] text-white hover:bg-[#333333] transition-colors duration-300`
  - Outlined: `border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300`
- **Dividers**: `h-[1px] bg-[#E5E1DB]`
- **Shadows**: Very soft, minimal (`shadow-sm`)
- **Transitions**: Subtle ease-in-out for hovers and state changes.

## Global Styles (index.css)
- Background: `#FBFAF8`
- Text: `#1A1A1A`
- Selection: `bg-[#C5A059] text-white`
