# SSourcing China Design System

## Brand direction
- Clean, trustworthy, international B2B website for overseas buyers sourcing from China.
- The visual tone should feel professional, practical, and calm rather than sales-heavy.
- Use realistic factory, supplier audit, quality inspection, packaging, and shipping visuals.

## Typography
- Primary font: Inter
- Headings: strong, compact, confident
- Body text: clear and readable with comfortable line-height
- Example Tailwind classes:
  - Headings: `font-semibold tracking-tight text-brand-navy`
  - Body: `text-base leading-7 text-brand-steel`
  - Labels/meta: `text-sm font-medium text-brand-blue`

## Color palette
- `brand-navy`: primary text and dark surfaces
- `brand-blue`: links, highlights, and key accents
- `brand-ice`: soft page background
- `brand-line`: subtle borders and dividers
- `brand-steel`: secondary body text
- `brand-gold`: restrained accent for trust markers
- `white`: cards and clean surfaces

## Surfaces and borders
- Use white cards on pale blue-gray backgrounds.
- Use subtle borders and soft shadows.
- Prefer rounded corners that feel modern but serious.
- Example Tailwind classes:
  - Section background: `bg-brand-ice`
  - Card: `rounded-3xl border border-brand-line bg-white shadow-panel`
  - Dark band: `bg-brand-navy text-white`

## Layout and spacing
- Use roomy section spacing.
- Desktop layouts should feel structured and balanced, not stacked like mobile.
- Typical wrapper: `mx-auto max-w-7xl px-6 lg:px-8`
- Section padding: `py-16 lg:py-24`
- Card spacing: `p-6 lg:p-8`

## Components
- Buttons:
  - Primary: `bg-brand-blue text-white hover:bg-brand-navy`
  - Secondary: `border border-brand-line bg-white text-brand-navy hover:border-brand-blue hover:text-brand-blue`
- Pills/badges: light backgrounds with clear readable text
- Forms: large readable inputs, explicit borders, strong focus states

## Imagery
- Use realistic sourcing-related visuals only where helpful.
- Prioritize supplier meetings, audits, quality checks, packaging, loading, and freight scenes.
- Hero image should suggest factory floor + product review + export operations.

## Do
- Keep contrast high and all text clearly readable.
- Use concise business copy.
- Reinforce trust with process clarity and proof points.
- Maintain consistent spacing and alignment.

## Don’t
- Don’t use flashy gradients or startup-style neon colors.
- Don’t make claims that sound exaggerated or unverifiable.
- Don’t overload pages with too many decorative elements.
- Don’t place muted text on muted backgrounds if readability suffers.
