# SSourcing China — Design System

## Brand Identity
- **Company:** SSourcing China
- **Tagline:** China Sourcing Agent for Global Buyers
- **Tone:** Professional, clear, practical, trustworthy — no exaggerated claims

## Color Palette
- **Primary Blue:** `#1a4f8a` — trust, reliability (Tailwind: `[#1a4f8a]`)
- **Accent Orange:** `#e8621a` — action, energy (Tailwind: `[#e8621a]`)
- **Dark Navy:** `#0d2b4e` — headings, deep backgrounds (Tailwind: `[#0d2b4e]`)
- **Light Gray:** `#f4f6f9` — section backgrounds (Tailwind: `[#f4f6f9]`)
- **Mid Gray:** `#6b7280` — body text secondary (Tailwind: `gray-500`)
- **White:** `#ffffff`
- **Border:** `#e2e8f0` (Tailwind: `slate-200`)

## Typography
- **Font:** Inter (Google Fonts)
- **Headings:** `font-bold`, `text-[#0d2b4e]`
  - H1: `text-4xl md:text-5xl lg:text-6xl`
  - H2: `text-3xl md:text-4xl`
  - H3: `text-xl md:text-2xl`
- **Body:** `text-gray-600`, `text-base` or `text-lg`
- **Small/Caption:** `text-sm text-gray-500`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary CTA:** `bg-[#e8621a] hover:bg-[#c9521a] text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Secondary:** `border-2 border-[#1a4f8a] text-[#1a4f8a] hover:bg-[#1a4f8a] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Ghost/Link:** `text-[#1a4f8a] hover:underline font-medium`

### Cards
- `bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow`

### Section Headers
- Centered, with a small colored label above the main heading
- Label: `text-[#e8621a] text-sm font-semibold uppercase tracking-wider`
- Heading: `text-3xl md:text-4xl font-bold text-[#0d2b4e] mt-2`
- Subtext: `text-gray-600 text-lg mt-4 max-w-2xl mx-auto`

### Navbar
- White background, `shadow-sm`, sticky top
- Logo: bold, `text-[#1a4f8a]`
- Nav links: `text-gray-700 hover:text-[#1a4f8a]`
- CTA button in nav: primary orange

### Footer
- Dark navy background `bg-[#0d2b4e]`
- Text: white and `text-slate-300`

## Do's
- Use clean whitespace and generous padding
- Use blue for trust elements (badges, icons, borders)
- Use orange only for CTAs and key highlights
- Use real-looking section dividers (light gray backgrounds alternating with white)
- Keep text contrast high — never light text on light background

## Don'ts
- No gradients on text
- No neon or overly saturated colors
- No exaggerated claims ("best in the world", "guaranteed")
- No dark text on dark backgrounds
- No mobile-only single-column layouts on desktop
