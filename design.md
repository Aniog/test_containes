# SSourcing China - Design System

## Brand Identity
Professional B2B sourcing agent website. Clean, trustworthy, international feel.

## Colors
- Primary: `navy` (#1e3a5f) - Trust, professionalism
- Primary Light: `navy-light` (#2a4f7f)
- Accent: `orange` (#e86c2e) - CTAs, highlights
- Accent Hover: `orange-dark` (#d45a1e)
- Background: `slate-50` for page backgrounds
- Surface: `white` for cards and sections
- Text Primary: `slate-900`
- Text Secondary: `slate-600`
- Text Muted: `slate-500`
- Border: `slate-200`

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
- Buttons Primary: bg-orange text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-dark transition
- Buttons Secondary: border-2 border-navy text-navy font-semibold px-6 py-3 rounded-lg hover:bg-navy hover:text-white transition
- Cards: bg-white rounded-xl shadow-sm border border-slate-200 p-6
- Badges: bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full

## Layout
- Desktop: multi-column grids (2-col, 3-col, 4-col)
- Mobile: single column stacking
- Max content width: max-w-7xl
- Hero sections: full-width with background imagery

## Do's
- Use consistent spacing scale
- Keep text readable with proper contrast
- Use stock images for factory, QC, shipping visuals
- Maintain professional B2B tone in all copy

## Don'ts
- No magic hex values in JSX (use Tailwind config colors)
- No overly decorative elements
- No single-column layouts on desktop
- No low-contrast text combinations
