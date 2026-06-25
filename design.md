# Coffee Website Design System

## Brand Identity
Warm, artisanal, and inviting. The site evokes the feeling of a cozy specialty coffee shop — rich browns, creamy off-whites, and deep espresso tones.

## Color Palette
All colors are defined as Tailwind CSS custom theme tokens in `src/index.css`.

| Token | Hex | Usage |
|---|---|---|
| `espresso` | `#1C0A00` | Primary dark background, headings |
| `roast` | `#3B1A08` | Section backgrounds, card backgrounds |
| `caramel` | `#C47A2B` | Primary accent, CTAs, highlights |
| `latte` | `#D4A96A` | Secondary accent, hover states |
| `cream` | `#F5ECD7` | Light backgrounds, card surfaces |
| `milk` | `#FAF6EF` | Page background, light sections |
| `steam` | `#E8DCC8` | Borders, dividers |

## Typography
- **Font**: Playfair Display (headings) + Inter (body) — loaded via Google Fonts in `index.html`
- **Headings**: `font-playfair` — serif, bold, warm
- **Body**: `font-inter` — clean, readable
- **Hero heading**: `text-5xl md:text-7xl font-playfair font-bold`
- **Section heading**: `text-3xl md:text-4xl font-playfair font-bold`
- **Body text**: `text-base font-inter leading-relaxed`

## Spacing
- Section padding: `py-20 px-6 md:px-12 lg:px-24`
- Card padding: `p-6 md:p-8`
- Gap between grid items: `gap-6 md:gap-8`

## Borders & Shadows
- Cards: `rounded-2xl shadow-md`
- Buttons: `rounded-full`
- Dividers: `border-steam`

## Component Styles

### Primary Button
`bg-caramel text-milk font-semibold px-8 py-3 rounded-full hover:bg-latte transition-colors`

### Secondary Button (outline)
`border-2 border-caramel text-caramel font-semibold px-8 py-3 rounded-full hover:bg-caramel hover:text-milk transition-colors`

### Card
`bg-cream rounded-2xl shadow-md p-6 md:p-8`

### Section (dark)
`bg-roast text-cream`

### Section (light)
`bg-milk text-espresso`

## Do's
- Use warm, earthy tones throughout
- Pair Playfair Display headings with Inter body text
- Use `caramel` as the primary accent for interactive elements
- Maintain generous whitespace between sections
- Use full-bleed hero images with dark overlays for readability

## Don'ts
- Don't use cool blues or grays as primary colors
- Don't use white (#ffffff) — use `milk` or `cream` instead
- Don't use pure black — use `espresso` instead
- Don't use small font sizes for body text (minimum `text-base`)
- Don't use sharp corners on cards — always `rounded-2xl` or `rounded-xl`
