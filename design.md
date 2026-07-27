# SSourcing China Visual Design System

## Brand Direction
SSourcing China should feel clean, trustworthy, practical, and international. The website is for overseas B2B buyers who need a China-based sourcing agent for supplier search, factory verification, quality inspection, production follow-up, and shipping coordination.

## Colors
- Primary: deep navy for credibility and headings. Example Tailwind classes: `bg-brand-navy`, `text-brand-navy`.
- Accent: professional trade blue for CTAs, links, active navigation, and highlights. Example: `bg-brand-blue`, `text-brand-blue`.
- Secondary accent: controlled amber for small status highlights only. Example: `bg-brand-amber`, `text-brand-amber`.
- Surfaces: white cards over soft slate backgrounds. Example: `bg-white`, `bg-brand-surface`, `border-brand-border`.
- Text: use explicit dark slate text on light backgrounds. Example: `text-brand-ink`, `text-brand-muted`.

## Typography
- Use Inter from Google Fonts for a modern international B2B look.
- Headings should be confident and concise with strong weight: `font-bold` or `font-semibold`.
- Body copy should be practical, clear, and readable: `text-base`, `leading-7`.
- Avoid oversized decorative type or marketing-heavy wording.

## Layout and Spacing
- Use generous white space and clear section separation.
- Desktop layouts should use multi-column grids where appropriate; mobile should stack cleanly.
- Standard section padding: `py-16 md:py-24`.
- Main container: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`.
- Cards: `rounded-2xl border border-brand-border bg-white shadow-sm`.

## Visual Style
- Use realistic factory, inspection, product, and shipping visuals through the Strikingly stock image attributes.
- Use subtle borders, soft shadows, and structured grids rather than flashy gradients.
- Buttons should be clear and high contrast with readable foreground text.
- Trust indicators should be restrained and practical.

## Do
- Keep all visible text readable with explicit foreground colors.
- Use concise professional copy and practical buyer-focused benefits.
- Use realistic B2B terminology: RFQ, factory audit, pre-shipment inspection, production follow-up, shipment coordination.
- Make CTAs easy to find throughout the page.

## Don't
- Do not make exaggerated claims such as guaranteed lowest price or perfect suppliers.
- Do not use low-contrast text or decorative backgrounds behind important information.
- Do not hardcode arbitrary hex colors in JSX class names; define named colors in Tailwind config.
- Do not use stock images where they do not add context.
