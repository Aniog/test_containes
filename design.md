# ARTITECT MACHINERY — Design System

## Brand Identity
Industrial precision meets refined elegance. The visual language communicates trust, quality, and technical mastery while remaining approachable and easy to navigate.

## Color Palette

### Primary Colors
- **Steel Navy** `#0D1B2A` — Primary dark background, headers, footer
- **Iron Blue** `#1B3A5C` — Secondary dark, card backgrounds
- **Precision Blue** `#1E6FBF` — Primary brand accent, CTAs, links
- **Sky Accent** `#3B9EE8` — Hover states, highlights

### Neutral Colors
- **Warm White** `#F8F9FA` — Page background, light sections
- **Light Gray** `#E9ECEF` — Borders, dividers, subtle backgrounds
- **Mid Gray** `#6C757D` — Secondary text, captions
- **Dark Gray** `#343A40` — Body text on light backgrounds

### Accent Colors
- **Copper Gold** `#C8922A` — Premium accent, badges, highlights
- **Light Gold** `#F0C060` — Hover on gold elements

## Typography

### Font Family
- **Headings**: `Rajdhani` (Google Fonts) — geometric, industrial, strong
- **Body**: `Inter` (Google Fonts) — clean, readable, modern

### Scale
- Display: `text-5xl` to `text-7xl`, `font-bold`, `tracking-tight`
- H1: `text-4xl md:text-5xl`, `font-bold`
- H2: `text-3xl md:text-4xl`, `font-semibold`
- H3: `text-xl md:text-2xl`, `font-semibold`
- Body: `text-base`, `font-normal`, leading-relaxed
- Small/Caption: `text-sm`, `text-mid-gray`

## Spacing
- Section padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-6 md:px-12`
- Card padding: `p-6 md:p-8`
- Gap between grid items: `gap-6 md:gap-8`

## Borders & Shadows
- Card border: `border border-light-gray` or `border border-iron-blue/30`
- Card shadow: `shadow-lg` on light, `shadow-xl` on dark
- Rounded corners: `rounded-xl` for cards, `rounded-lg` for buttons, `rounded-full` for badges
- Divider: `border-t border-light-gray`

## Buttons
- **Primary CTA**: `bg-precision-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-accent transition-colors`
- **Secondary**: `border-2 border-precision-blue text-precision-blue px-8 py-3 rounded-lg font-semibold hover:bg-precision-blue hover:text-white transition-colors`
- **Gold CTA**: `bg-copper-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-light-gold transition-colors`

## Navigation
- Sticky top nav with `bg-steel-navy/95 backdrop-blur`
- Logo: brand name in Rajdhani, bold, white
- Nav links: `text-sm font-medium text-gray-300 hover:text-white`
- Active/CTA button in nav: precision-blue

## Cards
- Light section cards: white background, subtle border, shadow-md
- Dark section cards: iron-blue background, border-iron-blue/40
- Hover: slight lift with `hover:-translate-y-1 transition-transform`

## Do's
- Use generous whitespace between sections
- Use the copper-gold accent sparingly for premium feel
- Maintain high contrast: white text on dark, dark text on light
- Use subtle gradients on hero sections (steel-navy to iron-blue)
- Use icons from lucide-react for feature lists

## Don'ts
- Don't use more than 2 accent colors per section
- Don't use light gray text on white backgrounds (too low contrast)
- Don't use centered text for long body paragraphs
- Don't stack more than 3 columns on mobile
