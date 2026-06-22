# SSourcing China — Design System

## Brand Identity
- **Company:** SSourcing China
- **Tagline:** China Sourcing Agent for Global Buyers
- **Tone:** Professional, clear, practical, trustworthy, international B2B

## Color Palette
- **Primary Blue:** `#1A4B8C` — trust, reliability, corporate (Tailwind: `[#1A4B8C]`)
- **Accent Red:** `#C0392B` — China identity, urgency for CTAs (Tailwind: `[#C0392B]`)
- **Light Blue:** `#EBF2FB` — section backgrounds, cards
- **Dark Navy:** `#0D2B5E` — headings, footer
- **Neutral Gray:** `#6B7280` — body text, secondary
- **Light Gray:** `#F8FAFC` — alternate section backgrounds
- **White:** `#FFFFFF` — cards, nav background
- **Border:** `#E2E8F0` — card borders, dividers

Named in tailwind.config.js:
- `primary`: `#1A4B8C`
- `primary-dark`: `#0D2B5E`
- `accent`: `#C0392B`
- `light-blue`: `#EBF2FB`

## Typography
- **Font:** Inter (Google Fonts)
- **H1:** `text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D2B5E]`
- **H2:** `text-3xl md:text-4xl font-bold text-[#0D2B5E]`
- **H3:** `text-xl font-semibold text-[#0D2B5E]`
- **Body:** `text-base text-gray-600 leading-relaxed`
- **Small/Caption:** `text-sm text-gray-500`
- **Nav links:** `text-sm font-medium text-gray-700 hover:text-[#1A4B8C]`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Primary Button (CTA)
`bg-[#C0392B] hover:bg-[#a93226] text-white font-semibold px-6 py-3 rounded-lg transition-colors`

### Secondary Button
`border-2 border-[#1A4B8C] text-[#1A4B8C] hover:bg-[#1A4B8C] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`

### Card
`bg-white rounded-xl shadow-sm border border-[#E2E8F0] p-6 hover:shadow-md transition-shadow`

### Section Badge
`inline-block bg-[#EBF2FB] text-[#1A4B8C] text-sm font-semibold px-3 py-1 rounded-full mb-4`

### Nav
- Background: `bg-white shadow-sm`
- Logo: bold, `text-[#1A4B8C]`
- Links: `text-gray-700 hover:text-[#1A4B8C]`
- CTA button in nav: accent red

### Footer
- Background: `bg-[#0D2B5E]`
- Text: `text-gray-300`
- Headings: `text-white`

## Do's
- Use clean grid layouts (2-3-4 columns on desktop)
- Use icons from lucide-react for service/feature lists
- Use subtle shadows and borders for cards
- Keep section backgrounds alternating: white / light-blue / white
- Use stock images for hero, factory, QC, shipping contexts
- Keep CTAs prominent with accent red

## Don'ts
- No dark mode toggle (light-only site)
- No neon or overly bright colors
- No exaggerated marketing claims
- No text that blends into background
- No mobile-only single-column layouts on desktop
