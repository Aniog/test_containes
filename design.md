# SSourcing China Design System

## Brand Direction
A professional B2B sourcing website for overseas buyers evaluating a China-based sourcing partner. The site should feel credible, calm, and globally oriented rather than flashy or salesy.

## Visual Style
- Clean corporate layout with generous white space.
- Light neutral backgrounds with deep navy and slate text.
- Accents should use a restrained blue for trust and a warm amber for operational highlights.
- Cards should feel structured and practical, with soft borders and subtle shadows.
- Visual hierarchy should be driven by spacing, typography, and section dividers rather than decorative effects.

## Typography
- Primary font: Inter from Google Fonts.
- Headings: strong but not oversized; use balanced tracking and tight line-height.
- Body copy: clear, readable, practical.
- Suggested Tailwind classes:
  - H1: `text-4xl md:text-5xl font-semibold tracking-tight`
  - H2: `text-3xl md:text-4xl font-semibold tracking-tight`
  - H3: `text-xl md:text-2xl font-semibold`
  - Body: `text-base leading-7 text-slate-600`
  - Small label: `text-sm font-medium uppercase tracking-[0.18em] text-slate-500`

## Color Tokens
Use named semantic colors in Tailwind config instead of inline hex values.
- `brand.navy`: primary text and dark sections
- `brand.blue`: primary CTA and links
- `brand.sky`: soft highlight backgrounds
- `brand.amber`: process and shipping accent
- `surface.canvas`: overall page background
- `surface.card`: card background
- `surface.border`: border color
- `surface.muted`: muted section background

## Borders and Shadows
- Use rounded corners with `rounded-2xl` or `rounded-3xl` on major cards and panels.
- Standard card border: `border border-surface-border`.
- Standard card shadow: `shadow-[0_20px_60px_rgba(15,23,42,0.08)]`.
- Avoid heavy glows or strong blur effects.

## Spacing
- Main sections: `py-16 md:py-24`
- Section containers: `max-w-7xl mx-auto px-6 md:px-8`
- Card padding: `p-6 md:p-8`
- Content gaps: prefer `gap-6`, `gap-8`, `gap-10`, `gap-12`

## Buttons
- Primary button: solid brand blue with white text.
  - Example: `bg-brand-blue text-white hover:bg-brand-navy`
- Secondary button: white or transparent with border.
  - Example: `border border-surface-border bg-white text-brand-navy hover:border-brand-blue hover:text-brand-blue`

## Do
- Keep text contrast strong on every surface.
- Use structured grids for services, trust points, and products.
- Use realistic sourcing visuals for hero, inspection, factory, and shipping contexts.
- Keep copy practical and internationally understandable.

## Don't
- Do not use neon colors, gradients as the main visual language, or exaggerated startup visuals.
- Do not center everything on desktop; use clear left-aligned content blocks.
- Do not use low-contrast gray text for key business information.
- Do not make claims that imply guaranteed outcomes or unrealistic scale.
