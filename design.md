# ARTITECT MACHINERY — Design Guidelines

## Brand Identity
- **Brand Name**: ARTITECT MACHINERY
- **Industry**: Industrial machinery — sheet metal folding machines
- **Tone**: Elegant, professional, trustworthy, precision-engineered
- **Style**: Clean industrial elegance — sophisticated but approachable

## Typography
- **Primary Font**: Inter (Google Fonts)
- **Headings**: Inter 700–800, tracking tight, uppercase for brand name
- **Body**: Inter 400–500, regular tracking
- **Accent/Label**: Inter 600, uppercase, letter-spacing wide

## Color Palette
- **Primary Dark (Backgrounds, Headers)**: `#1B1F2A` — deep navy-charcoal
- **Primary Accent**: `#C8A96E` — warm gold/brass (industrial elegance)
- **Secondary Accent**: `#3D6B99` — steel blue
- **Light Background**: `#F5F3EF` — warm off-white
- **White**: `#FFFFFF`
- **Text on Dark**: `#F5F3EF`
- **Text on Light**: `#1B1F2A`
- **Muted Text**: `#6B7280`
- **Border/Divider**: `#E5E1D8`

## Tailwind Custom Colors
Map these in index.css `@theme`:
- `brand-dark`: #1B1F2A
- `brand-gold`: #C8A96E
- `brand-steel`: #3D6B99
- `brand-cream`: #F5F3EF
- `brand-border`: #E5E1D8

## Spacing & Layout
- Section padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`

## Visual Elements
- **Borders**: Subtle, 1px, using brand-border color
- **Shadows**: Soft, elegant — `shadow-lg` with slight warm tint
- **Border Radius**: `rounded-lg` for cards, `rounded-full` for buttons/pills
- **Dividers**: Thin gold accent lines for section breaks
- **Icons**: Lucide React, stroke-width 1.5–2, gold or steel blue

## Component Styles
- **Navigation**: Fixed top, dark background, gold accent on hover/active
- **Hero**: Full-width, dark background with subtle gradient, large heading, gold CTA
- **Product Cards**: White/cream background, subtle border, hover lift effect, gold accent line at top
- **Feature Items**: Icon + heading + description, clean grid layout
- **Buttons**: 
  - Primary: Gold background, dark text, hover darken
  - Secondary: Dark background, gold border/text, hover fill gold
- **Section Headings**: Large, dark text, gold underline accent

## Do's
- Use generous whitespace for elegance
- Use gold accents sparingly for sophistication
- Keep layouts clean and structured
- Use high-contrast text (dark on light, light on dark)
- Maintain consistent spacing rhythm

## Don'ts
- Don't use bright/saturated colors
- Don't overcrowd sections with too many elements
- Don't use thin/light text on light backgrounds
- Don't mix too many font weights in one section
- Don't use harsh shadows or heavy borders
