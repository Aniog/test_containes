# Animal World — Design System

## Color Palette

| Name | Hex | Tailwind Class |
|------|-----|----------------|
| Forest Green (Primary) | #1a5c38 | `bg-[#1a5c38]` / `text-[#1a5c38]` |
| Deep Jungle | #0f3d25 | `bg-[#0f3d25]` |
| Amber (Accent) | #d97706 | `bg-amber-600` / `text-amber-600` |
| Golden Yellow | #f59e0b | `text-amber-400` |
| Cream Background | #faf9f5 | `bg-[#faf9f5]` |
| Off-White Card | #ffffff | `bg-white` |
| Dark Text | #1c2b1e | `text-[#1c2b1e]` |
| Muted Text | #4b6b52 | `text-[#4b6b52]` |
| Light Green Tint | #e8f5ec | `bg-[#e8f5ec]` |
| Dark Section BG | #0f3d25 | `bg-[#0f3d25]` |

## Typography

- **Font**: Inter (Google Fonts)
- **Hero Title**: `text-5xl md:text-7xl font-extrabold tracking-tight`
- **Section Title**: `text-3xl md:text-4xl font-bold`
- **Card Title**: `text-xl font-semibold`
- **Body**: `text-base font-normal leading-relaxed`
- **Caption / Label**: `text-sm font-medium uppercase tracking-widest`

## Spacing

- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6`
- Grid gap: `gap-6` or `gap-8`
- Max content width: `max-w-7xl mx-auto`

## Borders & Shadows

- Card border radius: `rounded-2xl`
- Card shadow: `shadow-md hover:shadow-xl transition-shadow`
- Image border radius: `rounded-xl` or `rounded-2xl`
- Subtle border: `border border-[#e8f5ec]`

## Buttons

- Primary: `bg-[#1a5c38] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0f3d25] transition-colors`
- Accent: `bg-amber-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition-colors`
- Outline: `border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#1a5c38] transition-colors`

## Do's

- Use nature-inspired greens and earth tones throughout
- Use large, full-bleed hero images with dark overlay for text legibility
- Use card grids with consistent spacing and rounded corners
- Use amber/golden accents for highlights, badges, and CTAs
- Ensure all text on dark backgrounds is white or near-white
- Ensure all text on light backgrounds is dark green or charcoal

## Don'ts

- Don't use pure black (#000) — use deep forest tones instead
- Don't use low-contrast text (e.g., light green on white)
- Don't use more than 3 font weights per section
- Don't use arbitrary pixel values — stick to Tailwind scale
