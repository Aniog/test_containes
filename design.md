# Velmora Fine Jewelry — Visual Design System

## Brand Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry for women 25–45. Never loud, never discount-looking. Confident minimalism with generous whitespace and soft gold accents.

## Color Palette
- **Cream** (`#f6f3ef`) — primary background. Warm, editorial, lets gold jewelry glow.
- **Ink** (`#1f1b18`) — primary text, footer, high-contrast UI. Deep brown-black.
- **Gold** (`#c9a66b`) — accent CTA, highlights, stars, hover states. Warm metallic.
- **Gold Dark** (`#a8834b`) — pressed/hover gold buttons.
- **Warm Gray** (`#8c8178`) — secondary text, captions, muted UI.
- **Taupe** (`#d6cfc6`) — hairline dividers, subtle borders, input borders.
- **Blush** (`#e8d9cf`) — soft secondary background for newsletter/testimonials.

## Typography
- **Headings / product names**: Cormorant Garamond, serif. Elegant, high contrast.
- **Body / UI**: Inter, sans-serif. Clean, readable.
- Product names are **uppercase** with wide `tracking-[0.18em]` letter-spacing.
- Headings are medium-weight (`font-medium`) to retain delicacy.

## Spacing & Layout
- Generous vertical padding: `py-20` to `py-28` on desktop sections.
- Container max-width `max-w-7xl` centered with `px-4 sm:px-6 lg:px-8`.
- Hairline dividers: `border-t border-taupe/60`.
- Soft shadows: `shadow-sm`, `shadow-md` on cards and drawer.

## Components
- **Buttons**: solid gold (`bg-gold text-ink`) or outlined (`border-ink text-ink hover:bg-ink hover:text-cream`). Premium, rounded-none or subtle `rounded-sm`. Transitions `transition-all duration-300`.
- **Cards**: cream background, no border or 1px taupe border, subtle hover lift `hover:-translate-y-1`.
- **Inputs**: minimal underline or 1px taupe border, focus ring gold.
- **Drawer**: slides from right, cream background, ink text.

## Imagery
- Warm gold jewelry on dark or neutral backgrounds.
- Editorial close-ups, soft natural lighting.
- Use `data-strk-img` / `data-strk-bg` tags with descriptive, contextual queries.

## Accessibility
- Strong contrast: ink on cream, cream on ink, gold on ink.
- Focus outlines visible.
- Interactive elements have clear hover/focus states.
