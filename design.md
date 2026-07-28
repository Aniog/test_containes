# SSourcing China Design System

## Brand direction
Professional, trustworthy, international B2B website for overseas buyers sourcing from China. The experience should feel operationally competent, calm, and practical rather than salesy.

## Visual style
- Clean enterprise layout with strong spacing and restrained use of color
- Soft industrial / logistics feel with navy, slate, white, and muted steel tones
- Rounded cards, subtle borders, low-noise shadows
- Clear visual hierarchy and readable data-like content blocks
- Realistic sourcing visuals: factory audit, quality inspection, cargo/shipping, supplier meetings, products

## Typography
- Use Inter from Google Fonts
- Headings: semibold to bold, compact tracking
- Body: neutral, readable, comfortable line length
- Preferred Tailwind examples:
  - H1: `text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight`
  - H2: `text-3xl md:text-4xl font-semibold tracking-tight`
  - H3: `text-xl md:text-2xl font-semibold`
  - Body: `text-base md:text-lg leading-7`
  - Small text: `text-sm leading-6`

## Colors
Use named Tailwind theme extensions rather than magic values in component classes.

Suggested tokens:
- `brand.navy`: primary headers, footer, dark surfaces
- `brand.blue`: CTA and highlights
- `brand.sky`: subtle accents
- `brand.steel`: muted informational surfaces
- `brand.sand`: warm light section backgrounds
- `brand.ink`: default dark text

Foreground/background pairs must remain explicit and readable.

## Layout and spacing
- Max width container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section spacing: `py-16 md:py-24`
- Card spacing: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`

## Components
- Primary button: solid blue with white text, medium-large padding, visible hover state
- Secondary button: white background with navy text and border
- Cards: `rounded-3xl border shadow-sm`
- Labels/badges: small uppercase or sentence case with muted contrast but still readable
- Navigation: simple, enterprise, sticky with strong contrast

## Imagery
- Use realistic stock visuals related to sourcing, factories, inspection, containers, and export products
- Avoid abstract illustrations or startup-style gradients dominating the page
- Use images to support trust, not distract from conversion

## Do
- Keep all business text practical and specific
- Emphasize process clarity, supplier verification, QC, and communication support
- Present trust points in a measurable, grounded tone
- Keep desktop layouts multi-column where appropriate

## Don’t
- Don’t use exaggerated claims or flashy marketing language
- Don’t use low-contrast text on colored cards
- Don’t overfill the page with decorative elements
- Don’t make the site feel consumer retail or e-commerce oriented
