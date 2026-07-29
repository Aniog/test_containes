# SSourcing China - Design System

## Brand Identity
- Professional B2B sourcing agent website
- Clean, trustworthy, international feel
- Target: overseas buyers looking for China sourcing support

## Colors (Tailwind config names)
- **primary**: `#1B4D8E` — deep professional blue (trust, reliability)
- **primary-dark**: `#0F3460` — darker blue for hover states
- **secondary**: `#F59E0B` — amber/gold accent (CTA, highlights)
- **secondary-dark**: `#D97706` — darker amber for hover
- **neutral-900**: `#111827` — near-black for headings
- **neutral-700**: `#374151` — dark gray for body text
- **neutral-500**: `#6B7280` — medium gray for secondary text
- **neutral-200**: `#E5E7EB` — light gray for borders
- **neutral-100**: `#F3F4F6` — very light gray for section backgrounds
- **neutral-50**: `#F9FAFB` — off-white for alternate sections
- **white**: `#FFFFFF` — cards, main backgrounds

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, text-neutral-900
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
- **Buttons**:
  - Primary: bg-secondary hover:bg-secondary-dark text-white font-semibold px-6 py-3 rounded-lg
  - Secondary: border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg
- **Cards**: bg-white rounded-xl shadow-sm border border-neutral-200 p-6
- **Section headings**: centered, with subtitle below in text-neutral-500
- **Navigation**: bg-white shadow-sm, sticky top-0

## Do's
- Use generous whitespace between sections
- Use stock images for factory, QC inspection, shipping visuals
- Keep text concise and scannable
- Use icons (Lucide) to support text
- Maintain consistent card heights in grids

## Don'ts
- No dark mode (B2B audience prefers light professional look)
- No overly decorative elements
- No exaggerated marketing claims
- No low-contrast text
- No magic hex values outside the defined palette
