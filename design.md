# SSourcing China Visual Design System

## Brand direction
- Professional English B2B website for an international China sourcing agent.
- Visual tone: clean, trustworthy, practical, global, procurement-focused.
- Avoid exaggerated claims, flashy gradients, consumer-style colors, or overly decorative layouts.

## Color system
Use named Tailwind colors defined in `tailwind.config.js`.
- `brand-navy`: primary headings, navigation, footer backgrounds.
- `brand-blue`: primary CTA buttons, active navigation, icon accents.
- `brand-slate`: body text and secondary interface text.
- `brand-mist`: page backgrounds and quiet section backgrounds.
- `brand-line`: borders and dividers.
- `brand-gold`: restrained highlight for trust badges and process markers.
- `brand-white`: card and content surfaces.

Do:
- Pair dark navy text with white or mist backgrounds.
- Use blue sparingly for conversion CTAs and important links.
- Keep badges and cards high-contrast with explicit foreground colors.

Don't:
- Use low-contrast gray text on pale backgrounds.
- Use arbitrary hex values in JSX classes.
- Use bright neon or playful colors.

## Typography
- Use Inter from Google Fonts for all text.
- Headings: strong, clear, compact line height, `font-semibold` or `font-bold`.
- Body text: practical B2B tone, `text-base` or `text-lg`, readable line height.
- Buttons and labels: `font-semibold`, concise wording.

## Layout and spacing
- Max width: centered `max-w-7xl` containers.
- Desktop: multi-column layouts for service cards, process steps, product categories, and case studies.
- Mobile: stack cleanly with `md:` and `lg:` breakpoints.
- Sections should use generous vertical spacing, usually `py-16` or `py-20`.
- Cards should use rounded corners, visible borders, subtle shadows, and clear internal padding.

## Components
- Header: sticky, white surface, clear nav, primary CTA.
- Hero: strong procurement headline, practical supporting text, inquiry CTA, trust indicators, realistic factory/QC/shipping visuals.
- Forms: white card surface, clear labels, readable placeholders, no backend submission in frontend preview.
- Footer: navy background with white text and muted but readable secondary text.

## Imagery
- Use Strikingly stock image tags for factory floors, quality inspection, container loading, supplier meetings, products, and logistics.
- Queries should reference nearby text IDs rather than hardcoded image prompts.
- Do not use external image URLs.
