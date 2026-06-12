# SSourcing China Design System

## Brand direction
SSourcing China should feel clean, trustworthy, international, and practical. The website is for overseas B2B buyers evaluating a China-based sourcing partner, so the visual language should communicate process control, factory access, quality checks, and reliable communication without exaggerated claims.

## Color palette
- Primary navy: use Tailwind `slate-950`, `slate-900`, and `slate-800` for headings, navigation, and professional dark sections.
- Trust blue: use `blue-700`, `blue-600`, and `blue-50` for calls to action, links, and light section backgrounds.
- Supply chain amber: use `amber-500`, `amber-100`, and `amber-50` sparingly for highlights, status chips, and small accents.
- Neutral surfaces: use `white`, `slate-50`, `slate-100`, and `slate-200` for page backgrounds, cards, and borders.
- Text: use `slate-950` for key headings, `slate-700` for body text, and `slate-500` for secondary labels. Always set readable foreground colors on custom backgrounds.

## Typography
- Use Inter from Google Fonts for a modern international B2B feel.
- Large page headlines should be bold and clear, typically `text-4xl md:text-6xl font-bold tracking-tight`.
- Section headings should use `text-3xl md:text-4xl font-bold`.
- Body copy should be practical and concise with `text-base md:text-lg leading-7`.

## Layout and spacing
- Use generous whitespace: `py-16 md:py-24` for major sections and `gap-6 md:gap-8` for grids.
- Keep content width controlled with `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Use responsive grids: one column on mobile, two or three columns on desktop.
- Cards should use `rounded-2xl border border-slate-200 bg-white shadow-sm` with clear padding.

## Visual style
- Use realistic factory, inspection, product, and shipping visuals through the stock image attribute system.
- Prefer subtle gradients such as `bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950` for hero and high-trust sections.
- Use icons only as support, not decoration overload.
- Use badges and process numbers to make services and workflow scannable.

## Buttons and CTAs
- Primary CTA: blue background with white text, e.g. `bg-blue-600 text-white hover:bg-blue-700`.
- Secondary CTA: white or transparent with a visible border, e.g. `border border-slate-300 text-slate-900 hover:bg-slate-50`.
- CTA text should be practical, led by “Get a Free Sourcing Quote”.

## Do's
- Keep claims realistic and specific.
- Make inquiry paths obvious and repeated across the page.
- Make all form labels, values, and status text highly readable.
- Use clear process language for supplier search, verification, inspection, production follow-up, and shipping coordination.

## Don'ts
- Do not use exaggerated claims like guaranteed lowest price or risk-free sourcing.
- Do not use low-contrast text on images or colored backgrounds.
- Do not overcrowd mobile layouts.
- Do not use hardcoded image URLs; use the stock image attributes with nearby text references.
