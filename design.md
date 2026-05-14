# Design System — Tea Cup Shop

## Brand Identity
Warm, artisanal, and inviting. The aesthetic draws from natural earth tones and the calm ritual of tea drinking.

## Color Palette
- **Primary (Warm Amber):** `#b45309` → Tailwind: `amber-700`
- **Primary Light:** `#d97706` → Tailwind: `amber-600`
- **Primary Dark:** `#92400e` → Tailwind: `amber-800`
- **Background (Cream):** `#fdf8f0` → custom: `cream` (add to Tailwind config)
- **Surface (Light Warm):** `#fef3c7` → Tailwind: `amber-100`
- **Text Primary:** `#1c1917` → Tailwind: `stone-900`
- **Text Secondary:** `#57534e` → Tailwind: `stone-600`
- **Text Muted:** `#a8a29e` → Tailwind: `stone-400`
- **Border:** `#e7e5e4` → Tailwind: `stone-200`
- **White:** `#ffffff`

## Typography
- **Font Family:** Playfair Display (headings), Inter (body) — loaded via Google Fonts
- **Heading XL:** `text-5xl font-bold` (Playfair Display)
- **Heading L:** `text-3xl font-bold` (Playfair Display)
- **Heading M:** `text-xl font-semibold` (Inter)
- **Body:** `text-base font-normal` (Inter)
- **Small/Caption:** `text-sm text-stone-500`

## Spacing
- Section padding: `py-20 px-6` on desktop, `py-12 px-4` on mobile
- Card padding: `p-6`
- Gap between grid items: `gap-8`

## Borders & Radius
- Cards: `rounded-2xl`
- Buttons: `rounded-full`
- Inputs: `rounded-lg`
- Border color: `border-stone-200`

## Shadows
- Card: `shadow-md hover:shadow-xl transition-shadow`
- Button: `shadow-sm`

## Buttons
- **Primary:** `bg-amber-700 text-white hover:bg-amber-800 rounded-full px-6 py-3 font-semibold`
- **Secondary/Outline:** `border border-amber-700 text-amber-700 hover:bg-amber-50 rounded-full px-6 py-3 font-semibold`

## Do's
- Use warm amber and stone tones throughout
- Use Playfair Display for all headings to convey elegance
- Keep layouts spacious with generous padding
- Use soft cream backgrounds for sections to avoid harsh white
- Use rounded-full for all CTA buttons

## Don'ts
- Don't use cold blues or grays as primary colors
- Don't use sharp corners on cards or buttons
- Don't use dark backgrounds except for the footer
- Don't use more than 2 font families
