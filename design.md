# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, trustworthy, practical, international B2B

## Color Palette
- Primary Blue: `#1A4B8C` (deep navy — trust, authority)
- Accent Red: `#C0392B` (China red — identity, energy)
- Accent Gold: `#D4A017` (quality, premium)
- Background Light: `#F8F9FB`
- Background White: `#FFFFFF`
- Surface Gray: `#F1F4F8`
- Border: `#E2E8F0`
- Text Primary: `#1A202C`
- Text Secondary: `#4A5568`
- Text Muted: `#718096`
- Success Green: `#2D7D46`

## Typography
- Font Family: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - H4: text-lg md:text-xl
- Body: text-base (16px), leading-relaxed
- Small/Caption: text-sm, text-muted

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components

### Buttons
- Primary: bg-[#1A4B8C] text-white hover:bg-[#153d73] px-6 py-3 rounded-lg font-semibold
- Secondary: border-2 border-[#1A4B8C] text-[#1A4B8C] hover:bg-[#1A4B8C] hover:text-white px-6 py-3 rounded-lg font-semibold
- CTA Red: bg-[#C0392B] text-white hover:bg-[#a93226] px-8 py-4 rounded-lg font-bold text-lg

### Cards
- bg-white rounded-xl shadow-sm border border-[#E2E8F0] p-6 hover:shadow-md transition-shadow

### Section Headers
- Centered, with a colored underline accent (w-16 h-1 bg-[#C0392B] mx-auto mt-3 mb-6)

### Badges
- bg-[#EBF4FF] text-[#1A4B8C] text-xs font-semibold px-3 py-1 rounded-full

### Trust Indicators
- Large numbers in primary blue, labels in muted gray

## Layout
- Navbar: sticky top, white bg, shadow on scroll
- Footer: dark bg-[#1A202C] text-white
- Hero: full-width with overlay, min-h-[600px]
- Sections alternate: white and bg-[#F8F9FB]

## Do's
- Use Inter font throughout
- Keep generous whitespace
- Use icons from lucide-react
- Maintain consistent card styles
- Use real-looking data (years, percentages, countries)

## Don'ts
- No neon colors
- No exaggerated claims ("best in the world")
- No dark text on dark backgrounds
- No crowded mobile layouts
- No hardcoded hex in JSX — use Tailwind config colors
