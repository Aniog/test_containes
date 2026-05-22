# Pizza Site Design System

## Brand Identity
Warm, rustic Italian pizzeria with a modern twist. Feels authentic, appetizing, and welcoming.

## Color Palette
- **Primary Red**: `#DC2626` (red-600) — CTAs, nav accents, highlights
- **Deep Red**: `#991B1B` (red-800) — hover states, footer
- **Warm Amber**: `#F59E0B` (amber-500) — secondary accents, badges, prices
- **Cream/Off-white**: `#FAFAF9` (stone-50) — page background
- **Stone Dark**: `#1C1917` (stone-900) — headings, primary text
- **Stone Mid**: `#78716C` (stone-500) — body text, descriptions
- **Stone Light**: `#E7E5E4` (stone-200) — borders, dividers
- **White**: `#FFFFFF` — cards, form backgrounds

## Typography
- **Font**: Inter (Google Fonts)
- **Hero heading**: `text-5xl md:text-7xl font-extrabold text-stone-900`
- **Section heading**: `text-3xl md:text-4xl font-bold text-stone-900`
- **Card title**: `text-xl font-bold text-stone-900`
- **Body**: `text-base text-stone-600`
- **Small/caption**: `text-sm text-stone-500`
- **Price**: `text-2xl font-bold text-amber-500`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`
- Form field gap: `space-y-4`

## Borders & Shadows
- Cards: `rounded-2xl border border-stone-200 shadow-sm`
- Buttons: `rounded-lg`
- Inputs: `rounded-lg border border-stone-300`
- Hover shadow: `hover:shadow-md transition-shadow`

## Components

### Navigation
- Sticky top nav with white background and subtle bottom border
- Logo in red, nav links in stone-700, active in red-600
- Mobile: hamburger menu

### Hero Section
- Full-width with dark overlay on background image
- White text on dark overlay
- Large CTA button in red-600

### Product Cards (Store)
- White card with image on top (aspect-video)
- Badge for category in amber
- Price in amber-500
- "Add to Cart" button in red-600

### Booking Form
- White card, centered, max-w-2xl
- Section heading above form
- All inputs with stone-300 border, red focus ring
- Submit button full-width in red-600

## Do's
- Use `text-stone-900` for all headings on light backgrounds
- Use `text-stone-600` for body text
- Use `bg-stone-50` for page backgrounds
- Use `bg-red-600 text-white` for primary buttons
- Use `text-amber-500` for prices and highlights
- Maintain consistent 8px grid spacing

## Don'ts
- Never use white text on light backgrounds
- Never use red text on red backgrounds
- Avoid more than 3 font sizes per section
- Don't use pure black (#000) — use stone-900 instead
