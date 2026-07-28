# SSourcing China - Design System

## Brand Identity
- Professional B2B sourcing agent website
- Clean, trustworthy, international feel
- Target: overseas buyers looking for China sourcing support

## Colors
- **Primary**: `navy` (#1e3a5f) - trust, professionalism
- **Primary Light**: `navy-light` (#2d5a8e) - hover states
- **Accent**: `orange` (#e86c2e) - CTAs, highlights
- **Accent Hover**: `orange-dark` (#d45a1e) - button hover
- **Background**: `slate-50` - page background
- **Surface**: `white` - cards, sections
- **Text Primary**: `slate-900` - headings
- **Text Secondary**: `slate-600` - body text
- **Text Muted**: `slate-400` - captions
- **Border**: `slate-200` - dividers, card borders

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - H4: text-lg font-semibold
- Body: text-base text-slate-600 leading-relaxed
- Small: text-sm text-slate-500

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components
- **Buttons Primary**: bg-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-dark transition-colors
- **Buttons Secondary**: border-2 border-navy text-navy px-6 py-3 rounded-lg font-semibold hover:bg-navy hover:text-white transition-colors
- **Cards**: bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow
- **Badges**: bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full

## Do's
- Use generous whitespace between sections
- Use subtle shadows on cards (shadow-sm)
- Keep CTAs prominent with orange accent
- Use navy for trust-building elements
- Maintain consistent border-radius (rounded-lg for buttons, rounded-xl for cards)
- Use icons from Lucide React for visual clarity

## Don'ts
- No gradients or flashy effects
- No dark mode (B2B audience prefers light)
- No rounded-full on large elements
- No text smaller than text-sm
- No arbitrary hex codes outside the defined palette
