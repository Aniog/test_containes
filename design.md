# Design System — Pink Beauty & Lifestyle

## Brand Identity
Elegant, feminine, modern. A warm pink palette with clean white space and soft accents.

## Color Palette

| Name | Tailwind Class | Hex |
|------|---------------|-----|
| Primary Pink | `bg-pink-500` | #ec4899 |
| Light Pink | `bg-pink-100` | #fce7f3 |
| Pale Pink | `bg-pink-50` | #fdf2f8 |
| Deep Pink | `bg-pink-700` | #be185d |
| Rose Accent | `bg-rose-400` | #fb7185 |
| White | `bg-white` | #ffffff |
| Text Dark | `text-gray-800` | #1f2937 |
| Text Muted | `text-gray-500` | #6b7280 |

## Typography

- **Font**: Inter (Google Fonts)
- **Headings**: `font-bold` or `font-extrabold`, `tracking-tight`
- **Body**: `font-normal`, `leading-relaxed`
- **Hero H1**: `text-5xl md:text-7xl font-extrabold`
- **Section H2**: `text-3xl md:text-4xl font-bold`
- **Card H3**: `text-xl font-semibold`
- **Body text**: `text-base text-gray-600`

## Spacing

- Section padding: `py-20 px-6`
- Container max width: `max-w-6xl mx-auto`
- Card padding: `p-8`
- Gap between cards: `gap-8`

## Borders & Shadows

- Card border: `border border-pink-100 rounded-2xl`
- Soft shadow: `shadow-md`
- Pink shadow: `shadow-pink-200`
- Button radius: `rounded-full`

## Buttons

- **Primary**: `bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-full transition`
- **Secondary**: `border-2 border-pink-500 text-pink-500 hover:bg-pink-50 font-semibold px-8 py-3 rounded-full transition`
- **Ghost**: `text-pink-500 hover:text-pink-700 font-medium`

## Components

### Navbar
- White background with subtle bottom border `border-b border-pink-100`
- Logo in `text-pink-600 font-bold`
- Nav links in `text-gray-600 hover:text-pink-500`

### Cards
- White background, `rounded-2xl`, `border border-pink-100`, `shadow-sm hover:shadow-md`
- Icon in pink circle: `bg-pink-100 text-pink-500 rounded-full p-3`

### Hero
- Background: gradient `from-pink-50 to-white` or `from-pink-100 to-rose-50`
- Headline: `text-gray-800` with pink accent words in `text-pink-500`

### Badges / Tags
- `bg-pink-100 text-pink-600 text-sm font-medium px-3 py-1 rounded-full`

## Do's
- Use pink-50 or white as page backgrounds
- Use pink-500 as the primary action color
- Keep text on pink backgrounds dark (gray-800) for readability
- Use rounded-full for buttons and badges
- Use rounded-2xl for cards

## Don'ts
- Don't use dark backgrounds (no dark mode)
- Don't use pink text on pink backgrounds
- Don't use very small font sizes for body text (min text-sm)
- Don't use sharp corners (prefer rounded)
