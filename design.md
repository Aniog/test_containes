# Design System — Horses Website

## Visual Identity
Warm, earthy, and elegant. Inspired by the natural world of horses: open fields, rich leather, golden hay, and deep forest greens.

## Typography
- **Headings**: Playfair Display (serif) — `font-['Playfair_Display']`
- **Body**: Inter (sans-serif) — `font-sans`
- **Heading sizes**: `text-5xl` / `text-4xl` / `text-3xl` / `text-2xl`
- **Body sizes**: `text-base` / `text-lg` / `text-sm`
- **Heading weight**: `font-bold` or `font-semibold`
- **Body weight**: `font-normal` or `font-medium`

## Color Palette
All hex values are registered in Tailwind config as named colors.

| Name        | Hex       | Tailwind Class         | Usage                        |
|-------------|-----------|------------------------|------------------------------|
| `saddle`    | `#8B4513` | `bg-saddle`            | Primary accent, CTAs         |
| `chestnut`  | `#954535` | `bg-chestnut`          | Hover states, highlights     |
| `cream`     | `#FDF6E3` | `bg-cream`             | Page background, cards       |
| `hay`       | `#D4A853` | `bg-hay`               | Decorative accents           |
| `forest`    | `#2D4A2D` | `bg-forest`            | Footer, dark sections        |
| `bark`      | `#5C3D1E` | `bg-bark`              | Text on light backgrounds    |
| `mist`      | `#F0EAD6` | `bg-mist`              | Alternate section background |
| `stone`     | `#8C7B6B` | `text-stone-custom`    | Muted text, captions         |

## Backgrounds
- Page: `bg-cream`
- Alternate sections: `bg-mist`
- Dark sections (footer): `bg-forest`
- Hero overlay: `bg-black/40`

## Text Colors
- Primary text on light: `text-bark`
- Headings on light: `text-bark`
- Muted/secondary: `text-stone-custom`
- Text on dark: `text-cream`
- Headings on dark: `text-hay`

## Borders & Shadows
- Card border: `border border-hay/30`
- Card shadow: `shadow-md`
- Hover shadow: `shadow-lg`
- Rounded corners: `rounded-2xl` for cards, `rounded-full` for pills/badges

## Spacing
- Section padding: `py-20 px-6` or `py-24 px-6`
- Container max width: `max-w-6xl mx-auto`
- Card gap: `gap-8`
- Inner card padding: `p-6` or `p-8`

## Buttons
- Primary: `bg-saddle text-cream px-6 py-3 rounded-full font-semibold hover:bg-chestnut transition-colors`
- Outline: `border-2 border-cream text-cream px-6 py-3 rounded-full font-semibold hover:bg-cream hover:text-bark transition-colors`

## Do's
- Use Playfair Display for all section headings
- Use warm earthy tones consistently
- Keep generous whitespace between sections
- Use stock images with descriptive data-strk-* attributes
- Ensure all text is clearly readable against its background

## Don'ts
- Don't use cool blues or grays as primary colors
- Don't use dark text on dark backgrounds
- Don't use light text on light backgrounds
- Don't use arbitrary hex codes in JSX — use named Tailwind classes only
