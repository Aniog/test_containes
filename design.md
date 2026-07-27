# SSourcing China — Design System

## Brand Identity
- **Company:** SSourcing China
- **Tagline:** China Sourcing Agent for Global Buyers
- **Tone:** Professional, clear, practical, trustworthy — no exaggerated claims
- **Audience:** International B2B buyers (importers, brands, retailers, distributors)

## Color Palette
- **Primary Blue:** `#1B4F8A` — trust, reliability, corporate (Tailwind: `[#1B4F8A]`)
- **Accent Red:** `#C0392B` — China identity, urgency, CTA highlights (Tailwind: `[#C0392B]`)
- **Light Blue:** `#EBF3FB` — section backgrounds, cards
- **Dark Navy:** `#0D2B4E` — headings, footer background
- **Neutral Gray:** `#6B7280` — body text, secondary labels
- **Light Gray:** `#F3F4F6` — alternating section backgrounds
- **White:** `#FFFFFF` — card backgrounds, clean surfaces
- **Border:** `#E5E7EB` — subtle dividers

Add to tailwind config as named colors:
- `primary: '#1B4F8A'`
- `accent: '#C0392B'`
- `navy: '#0D2B4E'`
- `lightblue: '#EBF3FB'`

## Typography
- **Font:** Inter (Google Fonts)
- **Headings:** font-bold, tracking-tight, text-navy
- **H1:** text-4xl md:text-5xl lg:text-6xl
- **H2:** text-3xl md:text-4xl font-bold
- **H3:** text-xl font-semibold
- **Body:** text-base text-gray-600 leading-relaxed
- **Small/Label:** text-sm text-gray-500 uppercase tracking-wide

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary CTA:** `bg-[#C0392B] hover:bg-[#a93226] text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Secondary:** `bg-[#1B4F8A] hover:bg-[#154070] text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Outline:** `border-2 border-[#1B4F8A] text-[#1B4F8A] hover:bg-[#1B4F8A] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`

### Cards
- `bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow`

### Section Backgrounds
- White: `bg-white`
- Light gray: `bg-gray-50`
- Light blue: `bg-[#EBF3FB]`
- Navy (footer/hero): `bg-[#0D2B4E]`

### Navigation
- Sticky top nav, white background, shadow on scroll
- Logo: text-based with brand colors
- Links: text-gray-700 hover:text-[#1B4F8A] font-medium
- CTA button in nav: accent red

## Do's
- Use clean grid layouts (2-3-4 columns on desktop, 1 on mobile)
- Use icons from lucide-react for service/feature lists
- Use subtle shadows and borders for depth
- Keep hero sections with strong headline + subtext + CTA
- Use trust badges / stats in a horizontal strip
- Alternate section backgrounds for visual rhythm

## Don'ts
- No dark mode (light-only B2B site)
- No gradients on text
- No exaggerated claims ("best in the world", "guaranteed")
- No cluttered layouts
- No tiny unreadable text on colored backgrounds
- No magic hex values — use named Tailwind config colors
