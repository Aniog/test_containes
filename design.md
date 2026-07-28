# SSourcing China - Design System

## Brand Identity
- Professional B2B sourcing agent website
- Clean, trustworthy, international feel
- Target: overseas buyers looking for China sourcing support

## Colors (Tailwind config names)
- `primary`: #1B4D7A (deep navy blue - trust, professionalism)
- `primary-dark`: #0F3355 (darker navy for hover states)
- `primary-light`: #E8F0F8 (light blue tint for backgrounds)
- `accent`: #E8740C (warm orange - CTA, energy)
- `accent-dark`: #C5620A (darker orange for hover)
- `neutral-900`: #1A1A2E (near-black for headings)
- `neutral-700`: #374151 (dark gray for body text)
- `neutral-500`: #6B7280 (medium gray for secondary text)
- `neutral-200`: #E5E7EB (light gray for borders)
- `neutral-100`: #F3F4F6 (very light gray for section backgrounds)
- `neutral-50`: #F9FAFB (off-white for cards)
- `white`: #FFFFFF

## Typography
- Font: Inter (Google Fonts) - clean, modern, highly readable
- Headings: font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - H4: text-lg md:text-xl
- Body: text-base (16px), text-neutral-700, leading-relaxed
- Small/caption: text-sm, text-neutral-500

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Component gaps: gap-6 md:gap-8

## Components
- Buttons primary: bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent-dark transition-colors
- Buttons secondary: border-2 border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors
- Cards: bg-white rounded-xl shadow-sm border border-neutral-200 p-6 hover:shadow-md transition-shadow
- Section headings: centered, with small accent bar or subtitle above

## Do's
- Use plenty of white space
- Keep text concise and scannable
- Use icons (Lucide) to support text
- Use stock images of factories, QC inspections, shipping containers
- Maintain consistent section rhythm

## Don'ts
- No flashy animations or gradients
- No exaggerated marketing claims
- No dark mode (B2B audience prefers light, professional look)
- No rounded-full buttons (use rounded-lg)
- No text smaller than 14px for body content
