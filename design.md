# SSourcing China — Design System

## Brand Identity
- **Company:** SSourcing China
- **Tagline:** China Sourcing Agent for Global Buyers
- **Tone:** Professional, trustworthy, practical, international B2B

## Color Palette
- **Primary Blue:** `#1A4B8C` (deep navy-blue — trust, reliability) → Tailwind: `blue-900` or custom `brand-blue`
- **Accent Red:** `#C0392B` (China red — subtle accent only) → custom `brand-red`
- **Accent Gold:** `#D4A017` (quality, premium) → custom `brand-gold`
- **Neutral Dark:** `#1E2A3A` (headings, body text) → custom `brand-dark`
- **Neutral Mid:** `#4A5568` (secondary text) → `gray-600`
- **Neutral Light:** `#F7F9FC` (section backgrounds) → custom `brand-light`
- **White:** `#FFFFFF`
- **Border:** `#E2E8F0` → `gray-200`

## Typography
- **Font Family:** Inter (Google Fonts)
- **Headings:** font-bold, tracking-tight
  - H1: `text-4xl md:text-5xl lg:text-6xl`
  - H2: `text-3xl md:text-4xl`
  - H3: `text-xl md:text-2xl`
- **Body:** `text-base` (16px), `text-gray-600`
- **Small/Caption:** `text-sm text-gray-500`
- **Labels/Tags:** `text-xs font-semibold uppercase tracking-wider`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Borders & Shadows
- Card border: `border border-gray-200 rounded-xl`
- Card shadow: `shadow-sm hover:shadow-md transition-shadow`
- Button radius: `rounded-lg`
- Input radius: `rounded-lg`

## Buttons
- **Primary CTA:** `bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors`
- **Secondary:** `border-2 border-brand-blue text-brand-blue px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition-colors`
- **Accent CTA:** `bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors`

## Navigation
- Sticky top nav, white background, `shadow-sm`
- Logo: brand name in `text-brand-blue font-bold text-xl`
- Nav links: `text-gray-700 hover:text-brand-blue font-medium`
- Active: `text-brand-blue`

## Cards
- White background, `rounded-xl border border-gray-200 shadow-sm`
- Icon: `text-brand-blue` with colored background circle
- Hover: subtle shadow lift

## Section Backgrounds
- Alternating: white → `bg-brand-light` → white
- Hero: dark overlay on image, or deep blue gradient
- CTA sections: `bg-brand-blue text-white`

## Do's
- Use Inter font throughout
- Keep layouts clean with generous whitespace
- Use icons from lucide-react consistently
- Use `brand-blue` as the dominant brand color
- Use `brand-red` sparingly as accent only
- Ensure all text has strong contrast against its background

## Don'ts
- No dark text on dark backgrounds
- No light text on light backgrounds
- No exaggerated marketing claims
- No cluttered layouts
- No more than 3 font weights per section
