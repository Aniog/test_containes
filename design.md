# Design System

## Color Palette
- **Primary Red**: `#E63946` (brand-red) — used for CTAs, highlights, accents
- **Deep Red**: `#C1121F` (brand-red-dark) — hover states, borders
- **Light Red**: `#FF6B6B` (brand-red-light) — backgrounds, soft accents
- **Primary Blue**: `#1D3557` (brand-blue) — headings, nav background, footer
- **Accent Blue**: `#457B9D` (brand-blue-mid) — secondary text, icons, cards
- **Light Blue**: `#A8DADC` (brand-blue-light) — section backgrounds, badges
- **Off White**: `#F1FAEE` (brand-white) — page background, card surfaces
- **Dark Text**: `#1D3557` — body text on light backgrounds
- **Light Text**: `#F1FAEE` — text on dark/colored backgrounds

## Typography
- **Font**: Inter (Google Fonts)
- **Headings**: `font-bold`, sizes from `text-3xl` to `text-6xl`
- **Body**: `font-normal`, `text-base` or `text-lg`
- **Labels/Badges**: `text-sm font-semibold uppercase tracking-wide`

## Spacing
- Section padding: `py-16 px-6` or `py-24 px-8`
- Card padding: `p-6` or `p-8`
- Gap between grid items: `gap-6` or `gap-8`

## Borders & Shadows
- Cards: `rounded-2xl shadow-lg`
- Buttons: `rounded-full` or `rounded-lg`
- Dividers: `border-brand-blue-light`

## Component Styles

### Buttons
- Primary: `bg-brand-red text-brand-white rounded-full px-8 py-3 font-semibold hover:bg-brand-red-dark transition`
- Secondary: `border-2 border-brand-blue text-brand-blue rounded-full px-8 py-3 font-semibold hover:bg-brand-blue hover:text-brand-white transition`

### Cards
- `bg-white rounded-2xl shadow-lg p-6 border border-brand-blue-light`

### Navigation
- Background: `bg-brand-blue`
- Links: `text-brand-white hover:text-brand-blue-light`

### Hero Section
- Background: gradient from `brand-blue` to `brand-blue-mid`
- Text: `text-brand-white`
- Accent: `text-brand-red-light`

## Do's
- Always pair dark backgrounds with `text-brand-white`
- Always pair light backgrounds with `text-brand-blue` or dark text
- Use red for calls-to-action and important highlights
- Use blue for structure, navigation, and trust elements

## Don'ts
- Don't use red text on blue backgrounds (low contrast)
- Don't use light text on light backgrounds
- Don't mix too many shades — stick to the palette
