# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm editorial, premium-but-accessible demi-fine jewelry. Gold jewelry is the hero; design stays out of the way and flatters the metal.

## Color palette
- **Base / ink:** `#1c1917` (stone-900) — primary text, borders, buttons, footer.
- **Canvas / paper:** `#fbfaf9` (warm off-white) — page background.
- **Warm neutral:** `#e7e5e4` (stone-200) — dividers, subtle backgrounds, hover states.
- **Accent / gold:** `#b45309` (amber-700) — CTA buttons, focus rings, links, newsletter block.
- **Accent hover:** `#92400e` (amber-800).
- **Muted text:** `#78716c` (stone-500) — secondary text, captions.
- **Star / highlight:** `#d97706` (amber-600).

Do not use loud neon colors, discount reds, or generic blue links.

## Typography
- **Headings / product names:** Cormorant Garamond, serif, 300–600.
  - Product names: uppercase, `tracking-[0.22em]`, font-weight 500.
- **Body / UI:** Inter, sans-serif, 300–500.
- Keep line-height tight for headings (1.0–1.1) and comfortable for body (1.6).

## Spacing & layout
- Generous whitespace; section padding `py-16 md:py-24 lg:py-32`.
- Container max `max-w-7xl mx-auto px-5 md:px-8`.
- Thin hairline dividers: `border-stone-200`, `border-t`/`border-b`.

## Components
- Buttons: solid accent (`bg-amber-700 text-white hover:bg-amber-800`) or outlined (`border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white`).
- Cards: no border-radius, subtle hover shadow, image-first.
- Inputs: minimal underline or soft outlined style with focus ring `focus:ring-amber-700/30`.

## Imagery
Warm gold jewelry on dark or neutral backgrounds. Use stock-image tags with relevant text IDs. Placeholder SVG fallback.

## Motion
- Subtle transitions: `transition-all duration-300 ease-out`.
- Hover lifts: `-translate-y-0.5` or image scale `scale-105`.
- Sticky nav fade/solid transition on scroll.
