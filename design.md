# SSourcing China - Design System

## Brand Identity
- Professional B2B sourcing agent website
- Clean, trustworthy, international feel
- Target: overseas buyers looking for China sourcing support

## Colors (Tailwind config names)
- **primary**: `#1B4D7A` — deep navy blue (trust, professionalism)
- **primary-light**: `#2A6FAF` — lighter blue for hover states
- **primary-dark**: `#0F3355` — darker blue for emphasis
- **accent**: `#E8A838` — warm gold/amber (CTA buttons, highlights)
- **accent-dark**: `#C78B20` — darker gold for hover
- **neutral-50**: `#F8FAFB` — lightest background
- **neutral-100**: `#F1F4F7` — section alternate background
- **neutral-200**: `#E2E7ED` — borders, dividers
- **neutral-300**: `#C8D1DB` — muted elements
- **neutral-600**: `#4A5568` — body text
- **neutral-800**: `#1A2332` — headings
- **neutral-900**: `#0D1520` — darkest text
- **success**: `#16A34A` — positive indicators
- **white**: `#FFFFFF`

## Typography
- Font family: Inter (Google Fonts)
- Headings: font-weight 700 (bold), tracking tight
- Body: font-weight 400, text-neutral-600
- Small/labels: font-weight 500 (medium)

### Scale
- Hero headline: `text-4xl md:text-5xl lg:text-6xl font-bold`
- Section title: `text-3xl md:text-4xl font-bold`
- Subsection title: `text-xl md:text-2xl font-semibold`
- Body large: `text-lg`
- Body: `text-base`
- Small: `text-sm`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- Primary CTA: `bg-accent hover:bg-accent-dark text-neutral-900 font-semibold px-6 py-3 rounded-lg transition-colors`
- Secondary: `bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- Outline: `border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`

### Cards
- Background: `bg-white`
- Border: `border border-neutral-200`
- Shadow: `shadow-sm hover:shadow-md`
- Radius: `rounded-xl`
- Padding: `p-6 md:p-8`

### Navigation
- Background: `bg-white/95 backdrop-blur-sm`
- Sticky top with shadow on scroll
- Links: `text-neutral-600 hover:text-primary font-medium`

## Do's
- Use generous whitespace between sections
- Use stock images of factories, QC inspections, shipping containers
- Keep text concise and scannable
- Use icons (Lucide) to support text
- Use trust indicators (numbers, certifications, client logos)

## Don'ts
- No dark mode (B2B audience prefers light)
- No overly colorful gradients
- No exaggerated marketing claims
- No tiny text or low-contrast combinations
- No single-column mobile layout on desktop
