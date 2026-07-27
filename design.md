# SSourcing China - Design System

## Brand Identity
- Professional B2B sourcing agent website
- Clean, trustworthy, international feel
- Target: overseas buyers looking for China sourcing support

## Colors (Tailwind config names)
- **primary**: #1B4D7A (deep navy blue - trust, professionalism)
- **primary-dark**: #0F3355 (darker navy for hover states)
- **secondary**: #E8A838 (warm gold - CTA, accents, energy)
- **secondary-dark**: #C98B1F (darker gold for hover)
- **neutral-50**: #F8FAFB (lightest background)
- **neutral-100**: #F1F4F7 (section backgrounds)
- **neutral-200**: #E2E7ED (borders, dividers)
- **neutral-300**: #C8D1DB (muted borders)
- **neutral-600**: #5A6B7B (secondary text)
- **neutral-800**: #1F2D3D (primary text)
- **neutral-900**: #0F1A26 (headings)
- **white**: #FFFFFF
- **success**: #2E8B57 (green for trust badges)

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - H4: text-lg md:text-xl
- Body: text-base (16px), text-neutral-600
- Small: text-sm, text-neutral-600

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components
- Buttons primary: bg-secondary hover:bg-secondary-dark text-white font-semibold px-6 py-3 rounded-lg
- Buttons outline: border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg
- Cards: bg-white rounded-xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow
- Section headings: centered, with subtitle below in neutral-600

## Do's
- Use generous whitespace
- Keep text concise and scannable
- Use icons (Lucide) to support text
- Use stock images for factory/QC/shipping visuals
- Maintain consistent spacing between sections

## Don'ts
- No dark mode (B2B professional light theme only)
- No overly decorative elements
- No exaggerated marketing claims
- No cluttered layouts
- No magic hex values outside the defined palette
