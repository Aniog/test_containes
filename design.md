# Velmora Fine Jewelry Design System

## Direction
Quiet luxury with a warm editorial mood. The storefront should feel like a premium demi-fine jewelry atelier: spacious, restrained, tactile, and confident. Avoid discount language, loud color, heavy gradients, and generic marketplace styling.

## Color Palette
Use a deep espresso base with warm ivory surfaces and antique-gold accents.

- Espresso: `velmora-espresso` (`#211915`) for premium dark surfaces and primary text on light backgrounds.
- Cocoa: `velmora-cocoa` (`#3B2C25`) for secondary dark sections and text accents.
- Ivory: `velmora-ivory` (`#F8F1E8`) for the main page background.
- Porcelain: `velmora-porcelain` (`#FFFBF5`) for cards and elevated content.
- Sand: `velmora-sand` (`#E8D9C7`) for borders, dividers, and muted panels.
- Champagne: `velmora-champagne` (`#C79B5A`) for premium CTAs, icons, highlights, and hairline accents.
- Moss: `velmora-moss` (`#556044`) for subtle editorial contrast and newsletter block.
- Clay: `velmora-clay` (`#A7674E`) for rare warm emphasis states.

## Typography
- Headings and product names: `Cormorant Garamond`, elegant serif.
- Body and UI: `Inter`, clean sans-serif.
- Product names are uppercase with wide letter spacing.
- Use generous line-height and avoid cramped UI.

Example Tailwind classes:
- Large hero heading: `font-serif text-5xl md:text-7xl leading-none tracking-tight`
- Section eyebrow: `text-xs uppercase tracking-[0.32em] text-velmora-champagne`
- Product name: `font-serif uppercase tracking-[0.22em] text-base`

## Layout & Spacing
- Mobile-first, but desktop should use multi-column editorial layouts.
- Prefer wide max-width containers: `max-w-7xl mx-auto px-5 sm:px-8 lg:px-10`.
- Use large vertical spacing between premium sections: `py-16 md:py-24`.
- Use thin hairline dividers: `border-velmora-sand/70`.

## Components
- Buttons: premium, restrained, either solid champagne on espresso or outline champagne/espresso.
- Cards: soft ivory/porcelain backgrounds, subtle shadows, thin borders.
- Imagery: warm gold jewelry, model close-ups, neutral or dark editorial backgrounds.
- Hover states: subtle image scale, fade, or translate; never flashy.
- Navigation: transparent over hero, solid ivory/espresso text after scroll.

## Accessibility
- Always set explicit readable text colors for cards, overlays, forms, drawers, and badges.
- Dark surfaces use `text-velmora-ivory`; light surfaces use `text-velmora-espresso`.
- Muted text should use `text-velmora-cocoa/70` or `text-velmora-ivory/75`, not low-contrast grays.

## Do
- Use editorial whitespace, serif headlines, warm metallic accents.
- Use precise product details and polished gifting language.
- Keep animations soft and quick.

## Don’t
- Do not use bright sale colors, red discount badges, loud gradients, or chunky UI.
- Do not hardcode random hex values in JSX; use Tailwind theme colors.
- Do not make desktop look like a stretched mobile layout.
