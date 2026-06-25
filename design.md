# ARTITECT MACHINERY Design Guide

## Brand direction
ARTITECT MACHINERY should feel elegant, precise, industrial, and approachable. The visual language should communicate premium engineering without feeling cold or overly technical.

## Typography
- Primary font: Inter
- Headings: strong, compact, confident
- Body text: clean, readable, generous line-height
- Tailwind examples: `font-sans`, `text-4xl md:text-6xl`, `text-base md:text-lg`, `tracking-[normal]` should be avoided in JSX if possible; prefer built-in tracking utilities like `tracking-tight`

## Color system
Define named colors in `src/index.css` using Tailwind v4 `@theme` tokens, then use those tokens in JSX.

Recommended palette:
- `brand-ink`: deep navy for primary backgrounds
- `brand-steel`: cool slate for secondary panels
- `brand-champagne`: warm metallic accent for premium details and CTA emphasis
- `brand-mist`: soft light surface for content sections
- `brand-line`: subtle border tone
- `brand-copy`: primary readable text on light surfaces
- `brand-soft`: secondary readable text on light surfaces

Use semantic combinations:
- Dark hero: `bg-brand-ink text-white`
- Light sections: `bg-brand-mist text-brand-copy`
- Elevated cards: `bg-white text-brand-copy border border-brand-line`
- Accent details: `text-brand-champagne`, `bg-brand-champagne text-brand-ink`

## Layout and spacing
- Use wide, balanced desktop layouts with clear section rhythm
- Prefer 2-column hero/grid layouts on desktop and stacked layouts on mobile
- Use generous spacing: `px-6 md:px-10 lg:px-16`, `py-16 md:py-24`
- Keep content in a centered container such as `mx-auto max-w-7xl`

## Components
- Cards should have soft borders, subtle shadows, and strong text contrast
- Buttons should feel premium and easy to tap
- KPI/stat blocks should be compact and structured
- Product/category items should be clearly scannable

## Imagery
- Use industrial photography sparingly and purposefully
- Prefer machine, fabrication, precision engineering, and sheet metal production imagery
- Use Strikingly image tags instead of hardcoded image URLs

## Do
- Keep all visible text high-contrast and explicit
- Use metallic accent color sparingly for emphasis
- Keep copy concise and business-oriented
- Make mobile layouts breathable and easy to scan

## Do not
- Do not use neon colors
- Do not use low-contrast gray text on gray backgrounds
- Do not overcrowd sections with too many decorative elements
- Do not make desktop layouts look like narrow mobile stacks
