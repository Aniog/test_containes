# ARTITECT MACHINERY Visual Style Guide

## Brand mood
Elegant, precise, industrial, and user friendly. The site should feel like a premium machinery manufacturer: engineered surfaces, calm spacing, confident typography, and clear calls to action.

## Color system
- Deep graphite for primary surfaces and text: `graphite` (`#101820`) with Tailwind examples `bg-graphite`, `text-graphite`.
- Steel blue for brand emphasis and buttons: `steel` (`#2F5F7C`) with `bg-steel`, `text-steel`, `border-steel`.
- Warm brass for elegant highlights: `brass` (`#C49A4A`) with `bg-brass`, `text-brass`, `border-brass`.
- Soft ivory page background: `ivory` (`#F7F4ED`) with `bg-ivory`.
- Mist panels and cards: `mist` (`#E8EDF0`) with `bg-mist`.
- Use white text on graphite/steel. Use graphite text on ivory/mist/white.

## Typography
- Use Inter from Google Fonts for clean technical readability.
- Headings should be strong and spacious: `font-bold tracking-tight`.
- Body copy should stay readable with `text-base leading-7` or `text-lg leading-8`.
- Small labels should use uppercase tracking: `text-xs font-bold uppercase tracking-[0.28em]`.

## Layout and spacing
- Use generous section spacing: `py-16 md:py-24`.
- Keep content centered with `mx-auto max-w-7xl px-5 sm:px-6 lg:px-8`.
- Cards use rounded corners, subtle borders, and soft shadows: `rounded-3xl border border-graphite/10 bg-white shadow-sm`.
- Desktop should use multi-column layouts where useful; mobile should stack cleanly.

## Components
- Primary buttons: steel or brass backgrounds, white/graphite readable text, rounded-full, clear hover states.
- Secondary buttons: transparent or white surface with visible border and readable text.
- Machinery cards: image/visual header, concise feature list, clear product title.
- Trust sections: use understated icons, numbers, and badges.

## Do's
- Keep all text contrast high and explicit.
- Use elegant metallic accents sparingly.
- Make technical product information easy to scan.
- Use responsive grids and avoid crowded mobile layouts.

## Don'ts
- Do not use neon colors or overly playful styling.
- Do not place dark text on dark industrial surfaces or light text on pale panels.
- Do not hardcode one-off color values in JSX; use the Tailwind named colors.
