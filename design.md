# Velmora Fine Jewelry - Design System

## Visual Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry — never loud, never discount-looking. A confident, cohesive palette built around a deep refined base with warm gold accents.

## Color Palette

### Primary Colors
- **Base/Background**: `#1a1612` — deep warm charcoal, almost espresso. Used for hero backgrounds and dark sections.
- **Surface**: `#f7f3ee` — warm cream/ivory. Primary light background.
- **Card**: `#ffffff` — pure white for product cards on light backgrounds.

### Accent Colors
- **Gold**: `#c9a96e` — warm muted gold. Primary accent for CTAs, highlights, stars.
- **Gold Dark**: `#a88b52` — hover state for gold elements.
- **Rose Gold**: `#d4a5a5` — subtle secondary accent for variant states.

### Text Colors
- **Text Primary**: `#1a1612` — deep warm charcoal on light backgrounds.
- **Text Secondary**: `#6b6560` — warm gray for body text, descriptions.
- **Text Muted**: `#9a948e` — lighter gray for captions, placeholders.
- **Text Inverse**: `#f7f3ee` — cream text on dark backgrounds.

### Border & Divider
- **Hairline**: `#e5e0d8` — subtle warm gray for dividers and borders.
- **Hairline Dark**: `#2d2823` — subtle divider on dark backgrounds.

## Typography

### Font Families
- **Serif (Headings)**: Cormorant Garamond, Georgia, serif. Elegant, high-contrast, editorial.
- **Sans-serif (Body/UI)**: Inter, system-ui, sans-serif. Clean, modern, readable.

### Type Scale
- **H1 (Hero)**: 48px / 56px line-height, weight 400, serif
- **H2 (Section titles)**: 36px / 44px line-height, weight 400, serif
- **H3 (Product names)**: 14px / 20px line-height, weight 500, sans-serif, uppercase, letter-spacing 0.15em
- **Body**: 15px / 24px line-height, weight 400, sans-serif
- **Caption**: 12px / 18px line-height, weight 400, sans-serif, letter-spacing 0.05em
- **Nav links**: 13px / 20px line-height, weight 500, sans-serif, uppercase, letter-spacing 0.08em
- **Button**: 13px / 20px line-height, weight 500, sans-serif, uppercase, letter-spacing 0.1em

## Spacing
- Section padding: 80px vertical (desktop), 48px (mobile)
- Container max-width: 1280px, centered
- Grid gap: 24px (desktop), 16px (mobile)
- Card padding: 16px

## Components

### Buttons
- **Primary (Solid Gold)**: bg `#c9a96e`, text `#1a1612`, padding 14px 32px, no border-radius (sharp corners), uppercase, letter-spacing 0.1em. Hover: bg `#a88b52`.
- **Secondary (Outlined)**: border 1px `#c9a96e`, text `#c9a96e`, transparent bg. Hover: bg `#c9a96e`, text `#1a1612`.
- **Ghost (Dark)**: text `#f7f3ee`, no border. Hover: opacity 0.8.

### Cards
- **Product Card**: bg white, no border-radius, subtle shadow `0 2px 12px rgba(26,22,18,0.06)`. Hover: shadow deepens, image swaps.
- **UGC Card**: no border-radius, image fills card, caption overlay at bottom with gradient.

### Inputs
- **Text input**: border-bottom only, 1px `#e5e0d8`, bg transparent, padding 12px 0. Focus: border-bottom `#c9a96e`.

## Effects & Animation
- Hover transitions: 300ms ease-out
- Image swap fade: 200ms ease
- Sticky nav transition: background 300ms ease
- Subtle shadows only — never heavy drop shadows
- No gradients except for UGC caption overlays

## Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
