# SSourcing China - Design System

## Brand Identity
- Professional B2B sourcing agent website
- Clean, trustworthy, international feel
- Target audience: overseas buyers looking for China sourcing support

## Colors
- Primary: `navy` (#1e3a5f) - trust, professionalism
- Primary Light: `navy-light` (#2d5a8e)
- Accent: `orange` (#e86c2e) - CTAs, energy
- Accent Hover: `orange-dark` (#d45a1e)
- Background: `slate-50` for page backgrounds
- Surface: `white` for cards and sections
- Text Primary: `slate-900`
- Text Secondary: `slate-600`
- Text Muted: `slate-500`
- Border: `slate-200`
- Success: `emerald-600`

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
- Buttons Primary: bg-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-dark transition
- Buttons Secondary: border-2 border-navy text-navy px-6 py-3 rounded-lg font-semibold hover:bg-navy hover:text-white transition
- Cards: bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition
- Badges: bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full

## Layout
- Desktop: multi-column grids (2-3-4 columns)
- Mobile: single column stacking with proper spacing
- Max content width: 1280px (max-w-7xl)
- Navbar: sticky top-0, white bg, shadow-sm

## Do's
- Use consistent spacing scale
- Use navy for trust elements, orange for CTAs
- Keep text readable with proper contrast
- Use icons from Lucide React for visual clarity
- Use stock images for factory/QC/shipping visuals

## Don'ts
- No hardcoded hex in JSX (use Tailwind config names)
- No exaggerated claims or flashy animations
- No dark mode (B2B audience prefers light professional look)
- No single-column layouts on desktop
