# Fanta Site — Design System

## Brand Identity
Fanta is a vibrant, playful, fruit-flavored soda brand. The visual style is bold, energetic, and fun — targeting a young, enthusiastic audience.

## Typography
- **Font Family:** Poppins (Google Fonts) — rounded, modern, friendly
- **Headings:** `font-poppins font-extrabold` — large, punchy, uppercase where impactful
- **Body:** `font-poppins font-normal` — clean and readable
- **Accent text:** `font-poppins font-semibold italic` — for taglines and callouts

## Colors
All hex values are registered as named Tailwind colors.

| Name            | Hex       | Usage                          |
|-----------------|-----------|--------------------------------|
| `fanta-orange`  | `#FF6B00` | Primary brand color, CTAs      |
| `fanta-yellow`  | `#FFD700` | Highlights, accents            |
| `fanta-purple`  | `#8B2FC9` | Grape flavor, secondary accent |
| `fanta-red`     | `#E8003D` | Strawberry flavor, alerts      |
| `fanta-green`   | `#00A651` | Lime/apple flavor              |
| `fanta-blue`    | `#0099CC` | Blueberry flavor               |
| `fanta-dark`    | `#1A1A2E` | Dark backgrounds, footer       |
| `fanta-light`   | `#FFF8F0` | Warm off-white background      |

## Spacing & Layout
- Section padding: `py-20 px-6` on desktop, `py-12 px-4` on mobile
- Max content width: `max-w-6xl mx-auto`
- Card gap: `gap-6` or `gap-8`
- Border radius: `rounded-2xl` for cards, `rounded-full` for pills/badges

## Borders & Shadows
- Cards: `rounded-2xl shadow-lg`
- Buttons: `rounded-full` with bold background
- Hover effects: `hover:scale-105 transition-transform duration-300`

## Buttons
- Primary: `bg-fanta-orange text-white font-bold rounded-full px-8 py-3 hover:bg-orange-600`
- Secondary: `border-2 border-fanta-orange text-fanta-orange font-bold rounded-full px-8 py-3 hover:bg-fanta-orange hover:text-white`

## Do's
- Use bold, saturated colors generously
- Use large, expressive headings
- Use rounded shapes and bubbly elements
- Pair complementary flavor colors with their respective sections
- Use stock images for product/lifestyle shots

## Don'ts
- Don't use muted or desaturated palettes
- Don't use serif fonts
- Don't use sharp corners on interactive elements
- Don't use small, timid typography
