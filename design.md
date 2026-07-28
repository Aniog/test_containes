# SSourcing China - Design System

## Brand Identity
- Professional B2B sourcing agent website
- Clean, trustworthy, international feel
- Target: overseas buyers looking for China sourcing support

## Colors
- **Primary**: `brand-navy` (#1B2B4B) - deep navy for trust and authority
- **Primary Accent**: `brand-blue` (#2563EB) - action blue for CTAs and links
- **Secondary**: `brand-orange` (#F97316) - warm orange for highlights and urgency
- **Neutral Dark**: `neutral-900` (#111827) - headings
- **Neutral Body**: `neutral-700` (#374151) - body text
- **Neutral Muted**: `neutral-500` (#6B7280) - secondary text
- **Neutral Light**: `neutral-100` (#F3F4F6) - section backgrounds
- **White**: `#FFFFFF` - cards, main backgrounds
- **Success**: `brand-green` (#059669) - trust indicators

## Typography
- Font: Inter (Google Fonts) - clean, professional, international
- Headings: font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - H4: text-lg md:text-xl
- Body: text-base (16px), text-neutral-700
- Small/Muted: text-sm, text-neutral-500

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components
- **Buttons Primary**: bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition
- **Buttons Secondary**: border-2 border-brand-blue text-brand-blue px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition
- **Cards**: bg-white rounded-xl shadow-sm border border-neutral-200 p-6 hover:shadow-md transition
- **Section Headers**: text-center mb-12 md:mb-16
- **Badges/Tags**: inline-flex px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-brand-blue

## Layout
- Desktop: multi-column grids (2-3-4 columns)
- Mobile: single column stacking
- Navigation: sticky top, white bg with shadow on scroll
- Footer: dark navy background with white/gray text

## Do's
- Use plenty of whitespace
- Keep text concise and scannable
- Use icons to support text (Lucide React)
- Use stock images for factory, QC, shipping contexts
- Maintain consistent card heights in grids

## Don'ts
- No exaggerated claims or hype language
- No dark mode (B2B audience prefers light)
- No overly decorative elements
- No text on busy image backgrounds without overlay
- No magic hex values outside the defined palette
