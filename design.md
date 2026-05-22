# Design System — NatureScope

## Brand Identity
A modern, editorial science & nature magazine. Clean, trustworthy, and inspiring.

## Color Palette
- **Forest** (primary green): `#1a4731` — used for nav background, headings, accents
- **Leaf** (mid green): `#2d6a4f` — used for buttons, highlights
- **Sage** (light green): `#52b788` — used for tags, hover states
- **Sky** (accent blue): `#0077b6` — used for links, category badges
- **Mist** (light blue-gray): `#e8f4f8` — used for section backgrounds
- **Earth** (warm brown): `#6b4226` — used for category Earth/Geology
- **Sand** (off-white): `#f8f5f0` — used for card backgrounds, alternating sections
- **Ink** (dark text): `#1a1a2e` — primary text color
- **Stone** (muted text): `#6b7280` — secondary/muted text

## Typography
- **Font**: Inter (Google Fonts)
- **Display headings**: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-forest`
- **Section headings**: `text-2xl md:text-3xl font-bold text-ink`
- **Card titles**: `text-lg font-semibold text-ink`
- **Body text**: `text-base text-stone leading-relaxed`
- **Labels/Tags**: `text-xs font-semibold uppercase tracking-wider`

## Spacing
- Section padding: `py-16 md:py-24`
- Card padding: `p-5 md:p-6`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`

## Borders & Shadows
- Cards: `rounded-2xl shadow-md hover:shadow-xl transition-shadow`
- Buttons: `rounded-full`
- Dividers: `border-t border-gray-100`

## Component Styles
- **Primary Button**: `bg-leaf text-white rounded-full px-6 py-3 font-semibold hover:bg-forest transition-colors`
- **Outline Button**: `border-2 border-leaf text-leaf rounded-full px-6 py-3 font-semibold hover:bg-leaf hover:text-white transition-colors`
- **Category Badge**: `text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full`
- **Article Card**: `bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all`

## Do's
- Use generous whitespace between sections
- Use stock images for all article cards and hero
- Keep text contrast high — dark text on light backgrounds
- Use rounded corners on all cards and buttons
- Animate hover states with smooth transitions

## Don'ts
- Don't use pure black (#000) — use `#1a1a2e` (ink) instead
- Don't stack single-column layouts on desktop
- Don't use more than 3 font weights
- Don't hardcode hex values in JSX — use Tailwind named colors from config
