# SSourcing China — Design System

## Brand Identity
- **Company:** SSourcing China
- **Tagline:** China Sourcing Agent for Global Buyers
- **Tone:** Professional, clear, practical, trustworthy, international B2B

## Color Palette
- **Primary Blue:** `#1A4B8C` (deep navy-blue — trust, reliability) → Tailwind: `blue-900` or custom `brand-blue`
- **Accent Orange:** `#E8600A` (action, energy, CTA) → custom `brand-orange`
- **Light Blue:** `#EBF2FB` (section backgrounds) → custom `brand-blue-light`
- **Dark Text:** `#1A2332` (headings) → custom `brand-dark`
- **Body Text:** `#4A5568` → `gray-600`
- **Muted Text:** `#718096` → `gray-500`
- **White:** `#FFFFFF`
- **Border:** `#E2E8F0` → `gray-200`
- **Success Green:** `#2D7D46`

## Typography
- **Font:** Inter (Google Fonts)
- **Headings:** `font-bold`, `tracking-tight`, `text-brand-dark`
  - H1: `text-4xl md:text-5xl lg:text-6xl`
  - H2: `text-3xl md:text-4xl`
  - H3: `text-xl md:text-2xl`
- **Body:** `text-base text-gray-600 leading-relaxed`
- **Small/Caption:** `text-sm text-gray-500`
- **CTA Button Text:** `text-base font-semibold`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary CTA:** `bg-brand-orange hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Secondary:** `border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Ghost/Link:** `text-brand-blue hover:underline font-medium`

### Cards
- `bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow`

### Section Backgrounds
- White: `bg-white`
- Light blue: `bg-brand-blue-light`
- Dark (hero/CTA): `bg-brand-blue text-white`
- Gray: `bg-gray-50`

### Navigation
- Sticky top nav, white background, shadow on scroll
- Logo left, links center/right, CTA button far right
- Mobile: hamburger menu

### Badges
- `bg-brand-orange/10 text-brand-orange text-xs font-semibold px-3 py-1 rounded-full`
- `bg-brand-blue/10 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full`

## Do's
- Use `text-brand-dark` for all headings
- Use `text-gray-600` for body text
- Use `text-white` on dark/colored backgrounds
- Keep section headings centered with a short colored underline accent
- Use icons (Lucide) alongside feature descriptions
- Use numbered steps for process sections
- Keep CTAs prominent with brand-orange

## Don'ts
- No dark text on dark backgrounds
- No light gray text on white (use at least `text-gray-500`)
- No exaggerated claims in copy
- No decorative fonts — Inter only
- No more than 2 accent colors per section
