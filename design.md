# Sailing Sport Website — Design System

## Brand Identity
A premium sailing/nautical sports website with a clean, ocean-inspired aesthetic.
Conveys adventure, freedom, and the spirit of the sea.

## Color Palette
- **Primary Navy**: `#0a1628` — deep ocean navy, used for headers and dark sections
- **Ocean Blue**: `#1a4a7a` — mid-tone blue for accents and buttons
- **Sky Blue**: `#2d8bba` — lighter blue for highlights and links
- **Seafoam**: `#4ecdc4` — teal accent for CTAs and highlights
- **Sand**: `#f5e6c8` — warm off-white for light section backgrounds
- **White**: `#ffffff` — pure white for text on dark backgrounds
- **Light Gray**: `#f0f4f8` — subtle background for alternating sections

In Tailwind config, these are added as named colors:
- `navy`: #0a1628
- `ocean`: #1a4a7a
- `sky`: #2d8bba
- `seafoam`: #4ecdc4
- `sand`: #f5e6c8

## Typography
- **Font Family**: "Playfair Display" for headings (serif, elegant), "Inter" for body text
- **Heading 1**: `text-5xl md:text-7xl font-bold font-serif tracking-tight`
- **Heading 2**: `text-3xl md:text-4xl font-bold font-serif`
- **Heading 3**: `text-xl md:text-2xl font-semibold`
- **Body**: `text-base leading-relaxed`
- **Caption**: `text-sm text-gray-500`

## Spacing
- Section padding: `py-20 px-6 md:px-12 lg:px-24`
- Card padding: `p-6 md:p-8`
- Gap between grid items: `gap-6 md:gap-8`

## Borders & Shadows
- Cards: `rounded-2xl shadow-lg`
- Buttons: `rounded-full`
- Dividers: `border-ocean/20`
- Hover shadows: `hover:shadow-xl transition-shadow duration-300`

## Buttons
- Primary: `bg-seafoam text-navy font-semibold px-8 py-3 rounded-full hover:bg-sky hover:text-white transition-colors`
- Secondary (outline): `border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-navy transition-colors`

## Navigation
- Sticky top nav with transparent-to-dark scroll behavior
- Logo on left, links on right
- Mobile: hamburger menu

## Sections Order
1. Hero — full-screen with background image, headline, CTA
2. About — what is sailing, brief intro
3. Events — upcoming races and regattas
4. Equipment — gear guide cards
5. Gallery — photo grid
6. Footer — links and contact

## Do's
- Use large, immersive imagery for hero and gallery sections
- Use generous whitespace between sections
- Maintain high contrast: white text on dark backgrounds, dark text on light backgrounds
- Use subtle animations (fade-in, slide-up) for section entries

## Don'ts
- Don't use low-contrast text (e.g., gray on white for important content)
- Don't crowd elements — sailing is about freedom and open space
- Don't use more than 3 font weights per section
- Don't use harsh red/green colors that clash with the ocean palette
