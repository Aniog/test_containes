# Design System — England Football Website

## Brand Identity
England football website inspired by the Three Lions and the FA's official visual identity.

## Color Palette
- **Primary Red**: `#CF0A2C` (St George's Cross red) → Tailwind: `red-england`
- **FA Navy**: `#1C3F6E` (FA deep blue) → Tailwind: `navy-fa`
- **White**: `#FFFFFF` → `white`
- **Off-white / Light Gray**: `#F5F5F5` → `gray-50`
- **Dark Text**: `#111827` → `gray-900`
- **Muted Text**: `#6B7280` → `gray-500`
- **Gold Accent**: `#C9A84C` (trophy gold) → `gold-accent`

## Typography
- **Font**: "Inter" (body), "Oswald" (headings/display) — loaded via Google Fonts
- **Display headings**: Oswald, font-bold, uppercase, tracking-wide
- **Section headings**: text-3xl md:text-5xl font-bold uppercase tracking-wider
- **Body text**: text-base md:text-lg font-normal leading-relaxed
- **Labels/Badges**: text-xs font-semibold uppercase tracking-widest

## Spacing
- Section padding: `py-20 px-4 md:px-8 lg:px-16`
- Card padding: `p-6`
- Gap between grid items: `gap-6 md:gap-8`

## Borders & Shadows
- Cards: `rounded-xl shadow-lg`
- Hero overlay: `bg-gradient-to-b from-black/60 to-black/30`
- Dividers: `border-t border-gray-200`

## Component Styles

### Navigation
- Sticky top, dark navy background `bg-navy-fa`
- White text, red hover accent
- Logo: Three Lions badge + "ENGLAND" text

### Hero Section
- Full-screen height `min-h-screen`
- Background image with dark overlay
- Large white headline, red accent underline
- CTA button: red background, white text

### Section Cards
- White background, rounded corners, subtle shadow
- Hover: slight scale transform `hover:scale-105 transition-transform`
- Image top, content below

### Player Cards
- Square image, name overlay at bottom
- Red accent bar on hover

### Stats Bar
- Dark navy background
- Large white numbers, red labels

### Footer
- Dark navy `bg-navy-fa`
- White text, red accent links

## Do's
- Use bold uppercase headings for impact
- Use red sparingly as an accent color
- Maintain high contrast: white text on dark backgrounds, dark text on white
- Use full-width sections alternating white and light gray backgrounds

## Don'ts
- Don't use red as a large background area (only accents/buttons)
- Don't use low-contrast text (e.g., gray on white for important content)
- Don't crowd elements — use generous whitespace
