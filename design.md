# SSourcing China — Visual Design Guide

## Brand Colors
- Primary: `#1a56db` (bold blue — trust, reliability)
- Primary Dark: `#1243af`
- Primary Light: `#e8effd`
- Accent: `#059669` (green — positive action)
- Accent Dark: `#047857`
- Neutral 900: `#111827` (headings)
- Neutral 700: `#374151` (body text)
- Neutral 500: `#6b7280` (secondary text)
- Neutral 100: `#f3f4f6` (light backgrounds)
- Neutral 50: `#f9fafb` (page background)
- White: `#ffffff` (cards, sections)
- Border: `#e5e7eb`

## Typography
- Font: Inter (Google Font), system fallback
- Headings: font-bold (700), tracking-tight
- Body: font-normal (400), leading-relaxed
- Size scale: text-xs (captions), text-sm (meta), text-base (body), text-lg (lead), text-xl / text-2xl / text-3xl (section headers), text-4xl / text-5xl (hero)

## Spacing
- Section padding: py-16 md:py-24
- Container max-width: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8
- Stack spacing: space-y-4 (content), space-y-6 (form), space-y-12 (sections)

## Borders & Shadows
- Cards: rounded-xl, border border-gray-100, shadow-sm hover:shadow-md transition-shadow
- Inputs: rounded-lg, border border-gray-300, focus:ring-2 focus:ring-primary focus:border-primary
- Buttons: rounded-lg, font-semibold, px-6 py-3

## Layout
- Fixed header with white background, shadow-sm
- Footer: bg-gray-900 text-white, with 3-4 column grid
- Page wrapper: bg-neutral-50
- Sections alternate between bg-white and bg-neutral-50

## Components
### Buttons
- Primary CTA: bg-primary text-white hover:bg-primary-dark
- Secondary: bg-white text-primary border border-primary hover:bg-primary-light
- Accent: bg-accent text-white hover:bg-accent-dark

### Cards
- Service cards: Icon on top, title, short description, subtle border
- Case study cards: Image placeholder, category badge, title, excerpt, link

### Navigation
- Sticky header with logo left, nav links center/right, CTA button right
- Active link: text-primary font-semibold
- Hover: text-primary transition-colors

## Do's
- Use generous white space
- Keep layouts clean and aligned
- Use consistent iconography (Lucide icons)
- Show trust signals prominently

## Don'ts
- No exaggerated claims or superlatives
- No dark patterns or deceptive CTAs
- No cluttered layouts
- No bright/garish colors