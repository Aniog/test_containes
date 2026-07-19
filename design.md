# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry. No loud colors, no discount vibes, no generic e-commerce feel.

## Color Palette
- **Base / Background**: `#FAF8F5` — warm off-white, editorial paper tone
- **Surface / Cards**: `#FFFFFF` — pure white for product cards
- **Primary Text**: `#1A1A1A` — near-black, strong and elegant
- **Secondary Text**: `#6B6560` — warm gray for body, captions
- **Muted / Dividers**: `#E8E4DF` — warm hairline gray
- **Accent**: `#B88A5E` — warm muted gold / bronze
- **Accent Dark**: `#8C6A45` — deeper bronze for hover states
- **Accent Light**: `#F5EDE3` — soft cream for accent backgrounds
- **Dark Section**: `#1C1917` — warm charcoal for dark sections (newsletter, footer)

## Typography
- **Headings / Product names**: Cormorant Garamond, serif. Weight 400–600. Product names in UPPERCASE with wide letter-spacing (`tracking-[0.2em]`).
- **Body / UI**: Inter, sans-serif. Weight 300–500.
- **Hero headline**: `text-5xl md:text-7xl`, Cormorant Garamond, weight 400.
- **Section titles**: `text-3xl md:text-4xl`, Cormorant Garamond, weight 500, uppercase, tracking-wide.
- **Body**: `text-sm md:text-base`, Inter, weight 400, leading-relaxed, color secondary.
- **Buttons / Labels**: Inter, weight 500, `text-xs` uppercase, tracking-widest.

## Spacing
- Generous whitespace. Sections separated by `py-20 md:py-28`.
- Cards have `p-6` or `p-8` padding.
- Thin hairline dividers: `border-b border-[#E8E4DF]`.

## Components

### Buttons
- **Primary (solid accent)**: `bg-[#B88A5E] text-white hover:bg-[#8C6A45]` — rounded-sm, px-8 py-3, uppercase, tracking-widest, text-xs.
- **Secondary (outlined)**: `border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white` — same sizing.

### Cards
- Product cards: white background, no border, subtle shadow on hover (`shadow-lg transition-shadow duration-300`).
- Image hover: reveal second image with opacity transition.

### Inputs
- `border-b border-[#E8E4DF] bg-transparent focus:border-[#B88A5E] focus:outline-none` — minimal underline style.

## Shadows
- `shadow-sm`: `0 1px 2px rgba(0,0,0,0.04)`
- `shadow-lg`: `0 10px 40px rgba(0,0,0,0.08)`

## Transitions
- All hover states: `transition-all duration-300 ease-out`
- Image swaps: `transition-opacity duration-500`

## Do's and Don'ts
- DO use generous whitespace and large imagery
- DO keep typography elegant and restrained
- DO use the warm gold accent sparingly for CTAs
- DON'T use bright saturated colors
- DON'T use heavy borders or boxes
- DON'T use generic e-commerce badge styles
