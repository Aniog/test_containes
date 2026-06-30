# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry — never loud, never discount-looking, never generic e-commerce.

## Color palette
- Background: `#121212` (ink black)
- Surface: `#1a1a1a` (elevated cards / nav solid)
- Surface highlight: `#242424` (hover states, input backgrounds)
- Text primary: `#f6f1eb` (warm cream)
- Text secondary: `#b8b0a6` (warm gray)
- Accent: `#c9a86c` (champagne gold)
- Accent hover: `#b8975b` (deeper gold)
- Divider: `rgba(246, 241, 235, 0.12)`
- Success / CTA: `#c9a86c`

## Typography
- Headings / product names: **Cormorant Garamond**, Georgia, serif
- Body / UI: **Inter**, system-ui, sans-serif
- Product names are uppercase with wide letter-spacing (`tracking-[0.2em]`).

## Spacing & layout
- Mobile-first, generous whitespace.
- Section vertical padding: `py-16 md:py-24 lg:py-32`.
- Container max width: `max-w-7xl` centered.
- Hairline dividers: `border-b border-cream/10`.

## Components
- Buttons: premium solid accent or transparent outline. Pill-shaped (`rounded-none` or subtle `rounded-sm`). Smooth transitions.
- Cards: subtle background, no heavy shadows. Hover reveals second image.
- Inputs: dark surface background, cream text, gold focus ring.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Use `data-strk-img` with nearby text IDs for contextual stock imagery.

## Accessibility
- Strong contrast between cream text and ink backgrounds.
- Focus outlines visible. Interactive elements have large touch targets.
