# ARTITECT MACHINERY Design System

## Brand Direction
ARTITECT MACHINERY should feel elegant, precise, and industrial without becoming cold or difficult to use. The visual language should balance premium engineering credibility with clear, approachable content.

## Typography
- Primary font: Inter
- Headings: strong, compact, and confident
- Body text: clean and readable with generous line height
- Suggested Tailwind usage:
  - Display heading: `text-4xl md:text-6xl font-semibold tracking-tight`
  - Section heading: `text-3xl md:text-4xl font-semibold tracking-tight`
  - Body copy: `text-base md:text-lg leading-7`
  - Small labels: `text-xs md:text-sm uppercase tracking-[0.24em]`

## Color System
Use named brand colors only.
- `ink`: deep graphite for primary backgrounds and headings
- `steel`: medium slate for supporting UI surfaces
- `mist`: soft light gray for large page backgrounds
- `ivory`: warm near-white for cards and readable contrast
- `copper`: muted metallic accent for highlights and CTAs
- `line`: subtle border color for separation

Suggested Tailwind examples after config mapping:
- Page background: `bg-mist`
- Dark section: `bg-ink text-ivory`
- Card surface: `bg-ivory text-ink`
- Accent text or button: `bg-copper text-ink`
- Border: `border-line`

## Layout and Spacing
- Use wide but controlled layouts: `max-w-7xl mx-auto`
- Section padding: `px-6 md:px-10 lg:px-12 py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Maintain generous whitespace and clear rhythm between sections
- Desktop layouts should use multi-column arrangements where appropriate

## Components and Surfaces
- Cards should feel refined and structured with soft borders and restrained shadows
- Use rounded corners consistently: `rounded-2xl` for sections/cards and `rounded-full` for pills
- Keep buttons prominent but not flashy
- Important content surfaces must explicitly set readable foreground colors

## Imagery
- Use industrial stock imagery selectively
- Favor precise machinery, sheet metal fabrication, factory detail, and engineered components
- Hero imagery should feel premium and technical, not generic

## Do
- Keep the experience clean, premium, and trustworthy
- Use concise copy with clear headings and scannable lists
- Make CTAs obvious and easy to understand
- Preserve high text contrast on all surfaces

## Don't
- Do not use neon colors or playful visuals
- Do not overcrowd layouts with too many competing accents
- Do not use low-contrast text on metallic or gray backgrounds
- Do not make desktop sections feel like stacked mobile cards unless necessary
