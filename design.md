# SSourcing China Design System

## Brand direction
A clean, trustworthy, international B2B website for a China-based sourcing agency. The visual style should feel practical, competent, and reassuring rather than salesy.

## Typography
- Primary font: Inter
- Headlines: semibold to bold, tight tracking, confident but not aggressive
- Body text: neutral, readable, medium line height
- Example Tailwind classes:
  - H1: `text-4xl font-semibold tracking-tight md:text-6xl`
  - H2: `text-3xl font-semibold tracking-tight md:text-4xl`
  - Body: `text-base leading-7`
  - Small labels: `text-sm font-medium uppercase tracking-[0.16em]`

## Color system
Use semantic Tailwind-friendly named tokens rather than arbitrary one-off colors.
- Primary surfaces: white, slate-based neutrals
- Brand accent: deep blue for trust and action
- Support accent: teal for process/logistics highlights
- Status/trust accent: emerald for verification and quality cues
- Example usage:
  - Page background: `bg-slate-50`
  - Main text: `text-slate-900`
  - Secondary text: `text-slate-600`
  - Section panel: `bg-white`
  - Dark section: `bg-slate-950 text-slate-50`
  - Primary CTA: `bg-blue-700 text-white hover:bg-blue-800`
  - Secondary CTA: `border border-slate-300 text-slate-900 hover:bg-slate-100`
  - Trust badge: `bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200`
  - Soft highlight: `bg-blue-50 text-blue-700 ring-1 ring-blue-100`

## Layout
- Use spacious desktop layouts with clear horizontal rhythm
- Max content width: `max-w-7xl`
- Standard horizontal padding: `px-6 md:px-10`
- Section spacing: `py-16 md:py-24`
- Use cards with soft borders and restrained shadows
- Example classes:
  - Section container: `mx-auto max-w-7xl px-6 md:px-10`
  - Card: `rounded-3xl border border-slate-200 bg-white shadow-sm`

## Components
- Navigation: simple sticky header with clear CTA
- Hero: split or stacked layout with operational proof points and CTA
- Service cards: structured, icon-led, concise
- Process timeline: linear and easy to scan
- Case studies: factual results, no hype
- Forms: white card, clear labels, visible borders, high-contrast helper text
- Buttons: rounded-full, medium-large tap area

## Imagery
- Use realistic visuals of factory visits, supplier meetings, quality inspection, production follow-up, containers, and shipping logistics
- Avoid abstract illustrations, cartoon-style graphics, and over-staged corporate photos
- Images should support trust and operational capability

## Do
- Keep all important text explicitly readable on every surface
- Repeat trust-building proof points throughout the site
- Use restrained shadows and borders
- Keep copy practical and internationally understandable
- Maintain strong contrast for forms, cards, tables, and dark sections

## Don't
- Do not use exaggerated claims or flashy startup styling
- Do not use low-contrast gray-on-gray text for key information
- Do not overcrowd sections with too many competing highlights
- Do not use bright gradients or neon accents
- Do not stack everything into a single mobile-style column on desktop
