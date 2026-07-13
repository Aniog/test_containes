# SSourcing China - Design System

## Brand Identity
- Professional B2B sourcing agent website
- Clean, trustworthy, international feel
- Target: overseas buyers looking for China sourcing support

## Colors
- Primary: `navy` (#1e3a5f) - trust, professionalism
- Primary Light: `navy-light` (#2d5a8e)
- Accent: `orange` (#e86c2e) - CTA, energy
- Accent Hover: `orange-dark` (#d45a1e)
- Background: `slate-50` for page bg
- Surface: `white` for cards
- Text Primary: `slate-900`
- Text Secondary: `slate-600`
- Text Muted: `slate-400`
- Border: `slate-200`
- Success: `emerald-600`

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
- H1: text-4xl md:text-5xl lg:text-6xl
- H2: text-3xl md:text-4xl
- H3: text-xl md:text-2xl
- Body: text-base text-slate-600
- Small: text-sm text-slate-500

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components
- Buttons: rounded-lg px-6 py-3 font-semibold transition-all duration-200
- Cards: bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow
- Badges: inline-flex px-3 py-1 rounded-full text-sm font-medium
- Inputs: rounded-lg border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-navy/20

## Do's
- Use generous whitespace
- Use subtle shadows for depth
- Use icons from Lucide React
- Use stock images for factory/QC/shipping visuals
- Keep text concise and scannable
- Use grid layouts for service/feature cards

## Don'ts
- No dark mode (B2B audience prefers light)
- No excessive animations
- No hardcoded hex in JSX (use Tailwind config names)
- No exaggerated marketing claims
- No cluttered layouts
