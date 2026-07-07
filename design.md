# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm editorial. Premium demi-fine gold jewelry. Deep refined base with warm metallic accents. Strong contrast, accessible, never loud or discount-looking.

## Color Palette
- Background primary: `#0F1115` — deep charcoal/near-black (Velvet)
- Background secondary: `#181A20` — soft dark card surfaces
- Background tertiary: `#F5F0E8` — warm ivory (accents / newsletter block)
- Text primary: `#F7F5F0` — warm off-white
- Text secondary: `#A9A59B` — muted warm gray
- Accent: `#C7A266` — warm antique gold
- Accent hover: `#D4AF78`
- Border: `rgba(247, 245, 240, 0.12)`
- Hairline: `rgba(247, 245, 240, 0.08)`
- Error: `#E57373`
- Success: `#A5D6A7`

## Typography
- Headings / product names: `Cormorant Garamond`, serif
- Body / UI: `Inter`, sans-serif
- Product names: uppercase, `tracking-[0.18em]`, font-weight 500
- H1: 48–64px / 1.05 line-height, weight 500
- H2: 32–40px, weight 500
- Body: 15–16px / 1.65, weight 400
- Small/label: 11–12px, uppercase, tracking-wide

## Spacing
- Section vertical padding: 80–120px desktop, 56–72px mobile
- Container max-width: 1280px, horizontal padding 16px mobile, 24px tablet, 40px desktop
- Grid gaps: 16px mobile, 24px desktop
- Component spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96

## Components
- Buttons:
  - Primary: solid `bg-accent text-velvet hover:bg-accent-hover` rounded-sm
  - Secondary/ghost: transparent with `border border-text-primary/30 text-text-primary hover:border-accent hover:text-accent`
- Inputs: transparent dark bg, 1px hairline border, rounded-sm, focus:border-accent
- Cards: no border-radius or very subtle (2px), soft shadow on hover, image aspect-ratio 4x5
- Dividers: 1px hairline `border-text-primary/8`

## Effects
- Subtle hover transitions: 300ms ease
- Image hover: slight scale 1.03
- Shadows: `0 12px 40px rgba(0,0,0,0.25)` on cards
- Nav: transparent over hero, solid `bg-velvet/95 backdrop-blur` on scroll

## Do's
- Use warm ivory blocks sparingly for contrast
- Keep product names uppercase and widely tracked
- Maintain generous whitespace
- Use elegant serif for display type

## Don'ts
- No bright saturated colors
- No discount-style badges or loud sale tags
- No generic sans-serif headings
- No heavy borders or hard shadows
