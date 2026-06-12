# SSourcing China - Design System

## Brand Identity
- **Industry**: B2B China Sourcing Agent
- **Tone**: Professional, trustworthy, international, practical
- **Target**: Overseas buyers seeking reliable China sourcing

## Colors (Tailwind config names)
- `navy`: #1B2A4A — primary brand, headers, nav
- `navy-light`: #2D4A7A — hover states, secondary elements
- `sky`: #3B82F6 — CTAs, links, accents
- `sky-light`: #60A5FA — hover on CTAs
- `gold`: #F59E0B — trust badges, highlights
- `slate-50`: #F8FAFC — page backgrounds
- `slate-100`: #F1F5F9 — section alternating backgrounds
- `slate-600`: #475569 — body text
- `slate-800`: #1E293B — headings
- `white`: #FFFFFF — cards, nav background

## Typography
- **Font**: Inter (Google Fonts), system-ui fallback
- **Headings**: font-bold, text-slate-800
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
- **Body**: text-base text-slate-600, leading-relaxed
- **Small/Caption**: text-sm text-slate-500

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components
- **Buttons (Primary)**: bg-sky text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-light transition-colors
- **Buttons (Secondary)**: border-2 border-sky text-sky px-6 py-3 rounded-lg font-semibold hover:bg-sky hover:text-white transition-colors
- **Cards**: bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow
- **Nav**: bg-white shadow-sm sticky top-0 z-50
- **Footer**: bg-navy text-white

## Do's
- Use consistent spacing with Tailwind scale
- Keep sections alternating between white and slate-50/slate-100 backgrounds
- Use icons from Lucide React for visual clarity
- Maintain clear visual hierarchy with headings
- Use stock images for factory, QC, shipping contexts

## Don'ts
- No dark mode (B2B site, light only)
- No arbitrary hex codes outside the defined palette
- No excessive animations or flashy effects
- No exaggerated marketing claims
- No text smaller than text-sm for readability
