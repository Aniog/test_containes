# SSourcing China Visual Design System

## Brand personality
Clean, trustworthy, practical, international B2B. The website should feel like a professional sourcing partner for overseas buyers, not a consumer marketplace.

## Colors
Use named Tailwind theme colors only. Primary palette:
- `brand-navy` (`#0B1F3A`) for headers, hero surfaces, and strong text.
- `brand-blue` (`#1D4ED8`) for primary CTAs, active navigation, links, and important accents.
- `brand-cyan` (`#0E7490`) for operational highlights and secondary accents.
- `brand-amber` (`#F59E0B`) for selective trust markers and quote accents.
- `brand-slate` (`#334155`) for body copy.
- `brand-mist` (`#F1F5F9`) and `brand-ice` (`#F8FAFC`) for clean section backgrounds.
- `brand-line` (`#D8E1EC`) for borders and dividers.

## Typography
Use Inter from Google Fonts. Headings should be confident and compact with strong line height. Body text should be clear and practical.
- Main headline: `text-4xl md:text-6xl font-bold tracking-tight`.
- Section headings: `text-3xl md:text-4xl font-bold tracking-tight`.
- Body: `text-base md:text-lg leading-7`.
- Labels and badges: `text-xs font-semibold uppercase tracking-[0.18em]`.

## Layout and spacing
- Use broad, calm whitespace: `py-16 md:py-24`, `px-4 sm:px-6 lg:px-8`.
- Max content width: `max-w-7xl mx-auto`.
- Desktop layouts should use two or three columns where appropriate; mobile should stack cleanly.
- Cards: `rounded-2xl border border-brand-line bg-white shadow-sm` with generous padding.

## Visual style
- Use realistic stock visuals for factory floors, QC inspection, shipping containers, product categories, and supplier meetings through the Strikingly image system.
- Keep imagery framed in rounded cards with subtle shadows and overlays when text appears nearby.
- Use clean iconography from Lucide for service and trust points.
- Avoid overusing gradients; when used, keep them subtle and professional.

## Do
- Make all text explicit and readable against its background.
- Use strong contrast: navy/white, slate/white, white/navy.
- Keep CTAs clear and repeated at important decision points.
- Present inquiry forms as serious business forms with clear fields.

## Don't
- Do not use exaggerated claims like “guaranteed best price” or “100% risk-free.”
- Do not use low-contrast gray text on pale backgrounds.
- Do not use arbitrary hex colors in components; add named colors to Tailwind config if needed.
- Do not use hardcoded external image URLs.
