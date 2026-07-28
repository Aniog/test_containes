# SSourcing China Design System

## Brand Direction
A clean, trustworthy, international B2B website for overseas buyers who need a sourcing partner in China. The design should feel professional, practical, and calm rather than flashy or promotional.

## Visual Style
- Overall tone: corporate, reliable, global trade, operations-focused
- Layout: spacious sections, strong content hierarchy, clear scanning for decision-makers
- Surfaces: soft off-white backgrounds, white cards, dark navy text, restrained blue accents
- Imagery: realistic factory, supplier audit, quality inspection, logistics, packaging, and export visuals
- Shape language: rounded-xl to rounded-2xl, light borders, soft shadows

## Color System
Use named Tailwind config colors instead of hardcoded hex values.
- brand-navy: deep trust color for headings, nav, footer, dark sections
- brand-blue: primary CTA and highlights
- brand-sky: light accent background
- brand-gold: restrained accent for trust metrics and small highlights
- surface: page background
- panel: card background
- line: borders
- success-soft: soft green support color for trust/process indicators

## Tailwind Usage Examples
- Page background: `bg-surface text-brand-navy`
- Primary button: `bg-brand-blue text-white hover:bg-brand-blue/90`
- Secondary button: `border border-line bg-white text-brand-navy hover:bg-brand-sky`
- Section card: `rounded-2xl border border-line bg-panel shadow-sm`
- Muted copy: `text-slate-600`
- Dark section: `bg-brand-navy text-white`

## Typography
- Font: Inter
- Headings: semibold to bold, tight tracking, dark navy
- Body: medium line-height, neutral slate color
- Eyebrows and labels: uppercase, wide tracking, smaller size, brand-blue or brand-gold

## Spacing
- Standard section padding: `py-16 md:py-24`
- Container width: `max-w-7xl`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`

## Components
- Navigation: sticky top bar with white translucent background and subtle border
- Hero: two-column desktop layout, text + inquiry/trust panel, logistics/factory visual
- Metrics: compact trust stats in bordered cards
- Service cards: icon + short benefit + practical description
- Process steps: numbered horizontal or stacked timeline
- Case studies: structured challenge / solution / result cards
- FAQ: accessible expandable or static cards with clear answers
- Inquiry form: prominent, simple, business-focused, high-contrast inputs
- Footer: dark navy with clear contact and page links

## Do
- Keep text highly readable on every surface
- Use realistic business copy and operational language
- Make CTAs visible without feeling aggressive
- Design for desktop first but ensure strong mobile responsiveness
- Use clear proof points such as response speed, inspection coverage, supplier checks, and process visibility

## Don't
- Do not use flashy gradients, neon colors, or startup-style hype
- Do not use exaggerated claims or unverifiable promises
- Do not create cramped mobile-like layouts on desktop
- Do not use low-contrast text on cards, forms, badges, or dark sections
- Do not hardcode arbitrary hex colors in JSX class strings
