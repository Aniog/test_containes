# SSourcing China Visual Design Guide

Visual style: clean, trustworthy, international B2B, practical, and professional. The site should feel like a capable sourcing operations partner rather than a flashy agency.

## Color system
- Primary: deep navy for authority and trust, use Tailwind `brand-navy` / `#0f2a43`.
- Secondary: steel blue for links, cards, and soft accents, use `brand-blue` / `#2f6f9f`.
- Accent: amber for primary CTAs and highlights, use `brand-amber` / `#d9902f`.
- Light surfaces: warm white and cool slate, use `brand-cream` / `#f7f4ef`, `brand-mist` / `#edf2f6`.
- Text: dark slate, use `brand-ink` / `#13202b`; secondary text use `brand-muted` / `#5d6b78`.

## Typography
- Use Inter for all text.
- Headings should be bold, compact, and clear. Example: `text-4xl md:text-6xl font-bold tracking-tight`.
- Body copy should be readable and concise. Example: `text-base md:text-lg leading-7 text-brand-muted`.

## Layout and spacing
- Use generous section spacing: `py-16 md:py-24`.
- Use a centered max-width container: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`.
- Use desktop multi-column grids and mobile single-column stacking with Tailwind responsive classes.
- Cards should use clear padding: `p-6 md:p-8`.

## Components
- Buttons: primary amber background with navy text; secondary white/transparent with visible border.
- Cards: white background, subtle border, soft shadow, rounded corners.
- Forms: white cards, strong labels, visible borders, clear focus rings.
- Badges: muted blue or amber backgrounds with explicit readable text.

## Imagery
- Use realistic factory, inspection, manufacturing, logistics, and shipping visuals through the Strikingly stock image attributes.
- Avoid overusing images. Use them for hero, trust/process, case studies, and product categories.

## Do's
- Keep copy specific, practical, and transparent.
- Make CTAs easy to find.
- Use explicit readable text colors on every card and dark section.

## Don'ts
- Do not use exaggerated claims like “guaranteed best price”.
- Do not use low contrast text.
- Do not use arbitrary colors or magic pixel values in JSX class strings.
