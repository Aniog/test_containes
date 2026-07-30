# SSourcing China - Design System

## Brand Identity
Professional B2B sourcing agent website. Clean, trustworthy, international feel.

## Colors
- **Primary (Navy):** `navy-900` (#0f2a4a) - Main headings, header bg
- **Primary Light:** `navy-700` (#1a3d6b) - Hover states
- **Accent (Orange):** `accent-500` (#e86a2e) - CTAs, highlights
- **Accent Hover:** `accent-600` (#d05a20) - Button hover
- **Neutral 50:** (#f8fafc) - Light backgrounds
- **Neutral 100:** (#f1f5f9) - Section alternating bg
- **Neutral 200:** (#e2e8f0) - Borders
- **Neutral 700:** (#334155) - Body text
- **Neutral 900:** (#0f172a) - Headings
- **White:** (#ffffff) - Cards, content bg

## Typography
- **Font Family:** Inter (Google Fonts)
- **Headings:** font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - H4: text-lg font-semibold
- **Body:** text-base text-neutral-700 leading-relaxed
- **Small/Caption:** text-sm text-neutral-500

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components

### Buttons
- Primary: bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors
- Secondary: border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors
- Ghost: text-navy-900 hover:text-accent-500 font-medium

### Cards
- bg-white rounded-xl shadow-sm border border-neutral-200 p-6 hover:shadow-md transition-shadow

### Badges
- bg-accent-500/10 text-accent-500 text-sm font-medium px-3 py-1 rounded-full

## Layout
- Desktop: multi-column grids (2-3-4 cols)
- Mobile: single column stacking
- Max content width: max-w-7xl (1280px)

## Do's
- Use plenty of whitespace
- Keep text concise and scannable
- Use icons from Lucide React for visual clarity
- Use stock images of factories, QC inspections, shipping containers
- Maintain consistent section rhythm

## Don'ts
- No exaggerated claims or superlatives
- No dark mode (B2B audience prefers light)
- No magic hex values in components - use Tailwind config names
- No cluttered layouts
- No text on dark backgrounds without sufficient contrast
