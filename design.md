# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, clear, practical, trustworthy — no exaggerated claims

## Color Palette
- Primary Blue: `#1A3C6E` (deep navy — trust, authority) → Tailwind: `blue-navy`
- Accent Red: `#C0392B` (China red — identity, energy) → Tailwind: `red-china`
- Accent Gold: `#D4A017` (quality, premium) → Tailwind: `gold-accent`
- Background Light: `#F7F9FC` → Tailwind: `bg-light`
- Surface White: `#FFFFFF`
- Text Dark: `#1A1A2E` → Tailwind: `text-dark`
- Text Muted: `#6B7280` (gray-500)
- Border: `#E5E7EB` (gray-200)
- Success Green: `#16A34A` (green-600)

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - H4: text-lg font-semibold
- Body: text-base text-gray-600
- Small/Caption: text-sm text-gray-500

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components

### Buttons
- Primary: `bg-[#C0392B] hover:bg-[#a93226] text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- Secondary: `border-2 border-[#1A3C6E] text-[#1A3C6E] hover:bg-[#1A3C6E] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- Ghost: `text-[#1A3C6E] hover:underline font-medium`

### Cards
- `bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow`

### Section Headers
- Eyebrow label: `text-sm font-semibold uppercase tracking-widest text-[#C0392B]`
- Title: `text-3xl md:text-4xl font-bold text-[#1A3C6E]`
- Subtitle: `text-lg text-gray-600 max-w-2xl`

### Navbar
- Background: `bg-white border-b border-gray-200 shadow-sm`
- Logo text: `text-[#1A3C6E] font-bold text-xl`
- Nav links: `text-gray-700 hover:text-[#1A3C6E] font-medium`
- CTA button: Primary style

### Hero
- Background: dark overlay on factory/industrial image
- Headline: text-white font-bold
- Subheadline: text-gray-200

### Trust Badges
- Light gray background strip: `bg-gray-50 border-y border-gray-200`
- Stat numbers: `text-3xl font-bold text-[#1A3C6E]`

## Do's
- Use navy (#1A3C6E) for headings and primary UI elements
- Use red (#C0392B) for CTAs and accent highlights
- Use gold (#D4A017) sparingly for premium/quality signals
- Keep layouts clean with generous whitespace
- Use icons from lucide-react consistently
- Ensure all text is readable against its background

## Don'ts
- No dark text on dark backgrounds
- No light text on light backgrounds
- No exaggerated marketing claims
- No cluttered layouts
- No more than 2 accent colors per section
