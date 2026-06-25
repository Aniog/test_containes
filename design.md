# SSourcing China - Design System

## Brand Identity
- Professional B2B sourcing agent website
- Clean, trustworthy, international feel
- Target: overseas buyers looking for China sourcing support

## Colors
- Primary: `#1e40af` (blue-800) — trust, professionalism
- Primary hover: `#1d4ed8` (blue-700)
- Secondary: `#f97316` (orange-500) — CTA, energy
- Secondary hover: `#ea580c` (orange-600)
- Dark: `#0f172a` (slate-900) — headings, footer
- Body text: `#334155` (slate-700)
- Muted text: `#64748b` (slate-500)
- Light background: `#f8fafc` (slate-50)
- White: `#ffffff`
- Border: `#e2e8f0` (slate-200)
- Success: `#16a34a` (green-600)

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - H4: text-lg md:text-xl
- Body: text-base (16px), text-slate-700
- Small/muted: text-sm, text-slate-500

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components
- Buttons:
  - Primary: bg-blue-800 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg
  - CTA: bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-lg
  - Outline: border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white px-6 py-3 rounded-lg
- Cards: bg-white rounded-xl shadow-sm border border-slate-200 p-6
- Sections: alternate between bg-white and bg-slate-50
- Navigation: bg-white shadow-sm sticky top-0 z-50

## Do's
- Use consistent spacing with Tailwind utilities
- Keep text readable with proper contrast
- Use icons from Lucide React for visual interest
- Use stock images for factory/QC/shipping visuals
- Keep CTAs prominent and above the fold

## Don'ts
- No dark mode (B2B sites are typically light)
- No magic hex values outside the defined palette
- No overly decorative elements
- No exaggerated marketing claims
- No text on dark backgrounds without sufficient contrast
