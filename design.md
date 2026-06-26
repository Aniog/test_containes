# SSourcing China — Design System

## Brand Identity
- **Company:** SSourcing China
- **Tagline:** China Sourcing Agent for Global Buyers
- **Tone:** Professional, clear, practical, trustworthy, international B2B

## Color Palette

### Primary Colors
- **Navy Blue** (primary brand): `#1a2e4a` — Tailwind: `[#1a2e4a]`
- **China Red** (accent): `#c0392b` — Tailwind: `[#c0392b]`
- **Sky Blue** (secondary accent): `#2980b9` — Tailwind: `[#2980b9]`

### Neutral Colors
- **White**: `#ffffff`
- **Light Gray** (backgrounds): `#f4f6f9` — Tailwind: `[#f4f6f9]`
- **Mid Gray** (borders, dividers): `#e2e8f0` — Tailwind: `[#e2e8f0]`
- **Text Dark**: `#1a2e4a` — same as primary
- **Text Medium**: `#4a5568` — Tailwind: `[#4a5568]`
- **Text Light**: `#718096` — Tailwind: `[#718096]`

### Semantic Colors
- **Success Green**: `#27ae60`
- **Warning Amber**: `#f39c12`

## Typography

### Font Family
- **Primary**: Inter (Google Fonts) — clean, international, professional
- **Fallback**: system-ui, sans-serif

### Scale
- **Hero Headline**: `text-4xl md:text-5xl lg:text-6xl font-bold`
- **Section Title**: `text-3xl md:text-4xl font-bold`
- **Card Title**: `text-xl font-semibold`
- **Body**: `text-base` (16px)
- **Small/Caption**: `text-sm`
- **Label/Tag**: `text-xs font-medium uppercase tracking-wide`

## Spacing
- **Section padding**: `py-16 md:py-24`
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Card padding**: `p-6 md:p-8`
- **Gap between cards**: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary CTA**: `bg-[#c0392b] hover:bg-[#a93226] text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Secondary**: `border-2 border-[#1a2e4a] text-[#1a2e4a] hover:bg-[#1a2e4a] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Ghost/Link**: `text-[#2980b9] hover:text-[#1a2e4a] font-medium`

### Cards
- `bg-white rounded-xl shadow-sm border border-[#e2e8f0] p-6 hover:shadow-md transition-shadow`

### Section Backgrounds
- **White sections**: `bg-white`
- **Light gray sections**: `bg-[#f4f6f9]`
- **Dark navy sections**: `bg-[#1a2e4a] text-white`
- **Accent red sections**: `bg-[#c0392b] text-white`

### Navbar
- Sticky, white background, `shadow-sm`
- Logo: bold navy text with red accent
- Nav links: `text-[#4a5568] hover:text-[#1a2e4a]`
- CTA button in nav: primary red

### Hero Section
- Dark navy background with subtle pattern overlay
- White headline text
- Red CTA button + secondary outline button
- Trust badges below CTA

## Do's
- Use generous whitespace between sections
- Keep card layouts in 3-column grids on desktop, 1-column on mobile
- Use icons from lucide-react for service/feature icons
- Use numbered steps for process sections
- Use real-looking data in trust stats (e.g., "500+ Verified Suppliers")
- Maintain consistent section padding

## Don'ts
- No gradients that look cheap or consumer-app-like
- No dark text on dark backgrounds
- No light gray text on white (use at least `[#718096]`)
- No exaggerated claims ("best in the world", "guaranteed")
- No decorative fonts — keep everything Inter
- No inline styles unless absolutely necessary
