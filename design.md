# Design System — Savory Food Site

## Brand Identity
Warm, inviting, and appetizing. The site evokes the feeling of a cozy kitchen with fresh ingredients and bold flavors.

## Color Palette
All colors are defined as Tailwind custom tokens in `tailwind.config.js`.

| Token | Hex | Usage |
|---|---|---|
| `brand-50` | `#fff7ed` | Light backgrounds, section fills |
| `brand-100` | `#ffedd5` | Subtle tints, hover states |
| `brand-400` | `#fb923c` | Accents, icons |
| `brand-500` | `#f97316` | Primary CTA buttons, highlights |
| `brand-600` | `#ea580c` | Button hover, active states |
| `brand-700` | `#c2410c` | Dark accents |
| `brand-900` | `#7c2d12` | Deep text on light backgrounds |
| `neutral-50` | `#fafafa` | Page background |
| `neutral-900` | `#171717` | Primary body text |
| `neutral-600` | `#525252` | Secondary/muted text |
| `neutral-200` | `#e5e5e5` | Borders, dividers |

## Typography
- **Font**: Playfair Display (headings) + Inter (body) via Google Fonts
- **Heading 1**: `text-5xl md:text-7xl font-bold font-serif tracking-tight text-neutral-900`
- **Heading 2**: `text-3xl md:text-4xl font-bold font-serif text-neutral-900`
- **Heading 3**: `text-xl font-semibold font-serif text-neutral-900`
- **Body**: `text-base text-neutral-600 leading-relaxed`
- **Caption/Label**: `text-sm font-medium text-neutral-500 uppercase tracking-wider`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Shadows
- Card: `rounded-2xl shadow-md hover:shadow-xl transition-shadow`
- Button: `rounded-full`
- Image: `rounded-2xl object-cover`

## Buttons
- Primary: `bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full px-6 py-3 transition-colors`
- Secondary/Outline: `border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white font-semibold rounded-full px-6 py-3 transition-colors`
- Ghost: `text-neutral-600 hover:text-brand-500 font-medium transition-colors`

## Do's
- Use warm orange/amber tones as primary accent
- Use large, appetizing food imagery
- Keep layouts spacious with generous padding
- Use serif fonts for headings to feel premium and editorial
- Use rounded corners on cards and buttons

## Don'ts
- Don't use cold blue or grey as primary colors
- Don't use tight, cramped layouts
- Don't use all-caps for body text
- Don't use sharp corners on interactive elements
