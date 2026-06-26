# SSourcing China — Design System

## Brand Identity
- **Company:** SSourcing China
- **Tagline:** China Sourcing Agent for Global Buyers
- **Tone:** Professional, clear, practical, trustworthy, international B2B

## Color Palette
- **Primary Blue:** `#1a4f8a` — trust, reliability (Tailwind: `[#1a4f8a]`)
- **Accent Orange:** `#e8621a` — action, energy (Tailwind: `[#e8621a]`)
- **Dark Navy:** `#0d2340` — headings, deep backgrounds (Tailwind: `[#0d2340]`)
- **Light Gray:** `#f4f6f9` — section backgrounds (Tailwind: `[#f4f6f9]`)
- **Mid Gray:** `#6b7280` — body text secondary (Tailwind: `gray-500`)
- **White:** `#ffffff` — cards, clean surfaces
- **Border:** `#e2e8f0` — subtle dividers (Tailwind: `slate-200`)

## Typography
- **Font:** Inter (Google Fonts)
- **Headings:** font-bold, tracking-tight, text-[#0d2340]
- **Body:** font-normal, text-gray-600, leading-relaxed
- **H1:** text-4xl md:text-5xl lg:text-6xl font-bold
- **H2:** text-3xl md:text-4xl font-bold
- **H3:** text-xl md:text-2xl font-semibold
- **Small/Caption:** text-sm text-gray-500

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between grid items: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary CTA:** `bg-[#e8621a] hover:bg-[#c9521a] text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Secondary:** `border-2 border-[#1a4f8a] text-[#1a4f8a] hover:bg-[#1a4f8a] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Ghost/Link:** `text-[#1a4f8a] hover:underline font-medium`

### Cards
- `bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow`

### Section Backgrounds
- White: default
- Light gray: `bg-[#f4f6f9]`
- Dark navy: `bg-[#0d2340] text-white`
- Primary blue: `bg-[#1a4f8a] text-white`

### Navigation
- Sticky top nav, white background, shadow on scroll
- Logo: bold text with accent color
- Links: text-gray-700 hover:text-[#1a4f8a]
- CTA button in nav: primary orange

## Do's
- Use generous whitespace between sections
- Use icons (Lucide) alongside text for scannability
- Use numbered steps for process sections
- Use trust badges and statistics prominently
- Keep CTAs orange and prominent

## Don'ts
- No dark text on dark backgrounds
- No light gray text on white (use gray-600 minimum)
- No exaggerated claims ("best in the world")
- No cluttered layouts — max 3 columns on desktop
- No decorative fonts — stick to Inter
