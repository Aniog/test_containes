# SSourcing China - Design System

## Brand Identity
- Professional B2B sourcing agent website
- Clean, trustworthy, international feel
- Target: overseas buyers looking for China sourcing support

## Colors (Tailwind config names)
- **primary**: #1B4D7A (deep navy blue - trust, professionalism)
- **primary-dark**: #0F3355 (darker navy for hover states)
- **accent**: #E8A838 (warm gold - CTA, highlights)
- **accent-dark**: #C98B1F (darker gold for hover)
- **neutral-900**: #1A1A2E (near-black for headings)
- **neutral-700**: #374151 (dark gray for body text)
- **neutral-500**: #6B7280 (medium gray for secondary text)
- **neutral-200**: #E5E7EB (light gray for borders)
- **neutral-100**: #F3F4F6 (very light gray for backgrounds)
- **neutral-50**: #F9FAFB (off-white sections)
- **white**: #FFFFFF (cards, main background)
- **success**: #059669 (green for trust badges)

## Typography
- Font: Inter (Google Fonts), system-ui fallback
- Headings: font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - H4: text-lg font-semibold
- Body: text-base text-neutral-700, leading-relaxed
- Small/caption: text-sm text-neutral-500

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components
- Buttons primary: bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors
- Buttons secondary: border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg transition-colors
- Cards: bg-white rounded-xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow
- Badges: inline-flex items-center px-3 py-1 rounded-full text-sm font-medium

## Do's
- Use generous whitespace between sections
- Keep text readable with max-w-3xl on paragraphs
- Use icons (Lucide) to support text, not replace it
- Maintain consistent card heights in grids
- Use subtle shadows and borders for depth

## Don'ts
- No dark backgrounds for main content (light theme only)
- No overly saturated colors
- No text smaller than 14px for body content
- No more than 3 font weights per page
- No rounded-full on large containers
