# SSourcing China - Design System

## Brand Identity
- Professional B2B sourcing agent based in China
- Trustworthy, clean, international feel
- Target audience: overseas buyers (US, EU, AU, etc.)

## Colors (Tailwind config named colors)
- **primary**: `#1B4D7A` — deep navy blue, trust and professionalism
- **primary-dark**: `#0F3356` — darker navy for hover states
- **primary-light**: `#2A6BAD` — lighter blue for accents
- **accent**: `#E8A838` — warm gold/amber for CTAs and highlights
- **accent-dark**: `#C98A1F` — darker gold for hover
- **surface**: `#F8FAFB` — very light gray-blue background
- **surface-alt**: `#EDF2F7` — slightly darker surface for alternating sections
- **text-primary**: `#1A202C` — near-black for headings
- **text-body**: `#4A5568` — dark gray for body text
- **text-muted**: `#718096` — muted gray for secondary text
- **white**: `#FFFFFF`
- **border**: `#E2E8F0` — light border color
- **success**: `#38A169` — green for trust badges

## Typography
- Font: Inter (Google Fonts), fallback system-ui
- Headings: font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - H4: text-lg md:text-xl
- Body: text-base (16px), leading-relaxed
- Small: text-sm, text-text-muted

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components
- Buttons:
  - Primary: bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors
  - Secondary: border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors
  - Ghost: text-primary hover:text-primary-light font-medium
- Cards: bg-white rounded-xl shadow-sm border border-border p-6 hover:shadow-md transition-shadow
- Badges: inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-surface text-primary
- Section headings: centered, with a small accent underline (w-16 h-1 bg-accent mx-auto mt-4)

## Layout
- Desktop: multi-column grids (2-col, 3-col, 4-col)
- Mobile: single column stacking
- Max content width: 1280px (max-w-7xl)
- Navigation: sticky top, white bg, shadow-sm on scroll

## Do's
- Use consistent spacing and alignment
- Use the accent color sparingly for CTAs and key highlights
- Keep text readable with proper contrast
- Use stock images for factory, QC, shipping contexts
- Use icons from Lucide React for service/feature icons

## Don'ts
- Don't use bright/neon colors
- Don't use more than 2 font weights per element
- Don't use overly rounded corners (max rounded-xl)
- Don't use dark backgrounds for main content sections
- Don't use decorative fonts
