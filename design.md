# Animal World – Design System

## Brand Identity
Nature-inspired, warm, and educational. The site celebrates wildlife with rich imagery and clean typography.

## Color Palette
- **Primary Green**: `#2d6a4f` (deep forest green) → Tailwind: `bg-[#2d6a4f]`, `text-[#2d6a4f]`
- **Light Green**: `#52b788` → Tailwind: `bg-[#52b788]`
- **Accent Amber**: `#e9c46a` → Tailwind: `bg-[#e9c46a]`, `text-[#e9c46a]`
- **Warm Brown**: `#6b4226` → Tailwind: `text-[#6b4226]`
- **Off-White / Background**: `#f8f5f0` → Tailwind: `bg-[#f8f5f0]`
- **Dark Text**: `#1a1a1a` → Tailwind: `text-[#1a1a1a]`
- **Muted Text**: `#6b7280` → Tailwind: `text-gray-500`
- **Card Background**: `#ffffff` → Tailwind: `bg-white`
- **Nav Background**: `#1b4332` (dark forest) → Tailwind: `bg-[#1b4332]`

## Typography
- **Font Family**: "Playfair Display" (headings) + "Inter" (body) from Google Fonts
- **H1**: `text-4xl md:text-6xl font-bold font-serif tracking-tight`
- **H2**: `text-3xl md:text-4xl font-bold font-serif`
- **H3**: `text-xl md:text-2xl font-semibold font-serif`
- **Body**: `text-base text-gray-700 leading-relaxed`
- **Caption / Label**: `text-sm text-gray-500 uppercase tracking-wide`

## Spacing
- Section padding: `py-16 px-4 md:px-8`
- Card padding: `p-6`
- Gap between grid items: `gap-6 md:gap-8`

## Borders & Shadows
- Cards: `rounded-2xl shadow-md hover:shadow-xl transition-shadow`
- Images: `rounded-xl object-cover`
- Buttons: `rounded-full`

## Buttons
- **Primary**: `bg-[#2d6a4f] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1b4332] transition-colors`
- **Secondary**: `border-2 border-[#2d6a4f] text-[#2d6a4f] px-6 py-3 rounded-full font-semibold hover:bg-[#2d6a4f] hover:text-white transition-colors`
- **Accent**: `bg-[#e9c46a] text-[#1a1a1a] px-6 py-3 rounded-full font-semibold hover:bg-amber-400 transition-colors`

## Navigation
- Dark forest background `bg-[#1b4332]`
- White text links with hover underline
- Logo in accent amber
- Sticky top nav with subtle shadow

## Cards
- White background, rounded-2xl, shadow-md
- Image on top (aspect-ratio 4:3 or 3:2), text below
- Category badge in top-left corner of image

## Do's
- Use large, full-bleed hero images with overlay text
- Use grid layouts (2-3 columns on desktop, 1 on mobile)
- Use nature-inspired color accents (greens, ambers, browns)
- Keep text high-contrast against backgrounds

## Don'ts
- Don't use pure black backgrounds
- Don't use small, hard-to-read fonts
- Don't use more than 3 colors per section
- Don't use light text on light backgrounds
