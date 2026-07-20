# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
| Token       | Hex       | Usage                          |
|-------------|-----------|--------------------------------|
| cream       | #FAF8F5   | Page background                |
| charcoal    | #1A1A1A   | Primary text, headings         |
| gold        | #C4A265   | Accent, CTAs, highlights       |
| gold-dark   | #A8894F   | Hover states for gold          |
| taupe       | #8B7E74   | Secondary/muted text           |
| sand        | #F0EBE3   | Alternate section backgrounds  |
| stone       | #D4CCC4   | Borders, hairline dividers     |

## Typography
- **Headings / Product names**: `Cormorant Garamond`, serif. Product names in UPPERCASE with `tracking-[0.2em]`.
- **Body / UI**: `Inter`, sans-serif. Weight 300–500.
- Scale: text-sm (14px), text-base (16px), text-lg (18px), text-xl–text-5xl for headings.

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`.
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`.
- Thin hairline dividers: `border-stone` with `border-t`.

## Components
- **Buttons**: Solid gold bg with cream text (primary), or outlined with gold border (secondary). Rounded `rounded-none` (sharp) or `rounded-sm`. Uppercase tracking-wider text-sm font-medium.
- **Cards**: No visible border, subtle `shadow-sm` on hover. Transition `transition-all duration-300`.
- **Hover effects**: Scale 1.02 on product images, opacity transitions on overlays.

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use serif for emotional/brand text
- Maintain warm, golden tone throughout
- Thin dividers between sections

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded-full buttons (too casual)
- No dense/cluttered layouts
- No generic e-commerce blue/green CTAs
