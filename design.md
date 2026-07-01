# Komodo Travel Site — Design Guide

## Visual Identity
A premium travel site evoking the raw beauty of Komodo: deep ocean blues, warm sandy tones, lush tropical greens, and earthy volcanic accents.

## Color Palette
Add these to tailwind.config.js as named colors:

| Name        | Hex       | Usage                              |
|-------------|-----------|-------------------------------------|
| ocean       | #0B4F6C   | Primary brand color, nav, headings  |
| ocean-light | #1A7FA8   | Hover states, accents               |
| sand        | #F5E6C8   | Light backgrounds, section fills    |
| sand-dark   | #D4B896   | Borders, dividers                   |
| coral       | #E8603C   | CTAs, highlights, badges            |
| coral-dark  | #C44A2A   | CTA hover                           |
| jungle      | #2D6A4F   | Secondary accents, nature elements  |
| stone       | #3D3530   | Body text on light backgrounds      |
| mist        | #F8F4EE   | Page background, card backgrounds   |

## Typography
- Font: **Playfair Display** (headings) + **Inter** (body) via Google Fonts
- H1: `text-5xl md:text-7xl font-bold font-serif tracking-tight text-white`
- H2: `text-3xl md:text-4xl font-bold font-serif text-ocean`
- H3: `text-xl font-semibold font-serif text-stone`
- Body: `text-base text-stone leading-relaxed`
- Caption: `text-sm text-stone/70`

## Spacing
- Section padding: `py-20 px-4 md:px-8`
- Container max-width: `max-w-6xl mx-auto`
- Card gap: `gap-6 md:gap-8`

## Components

### Navbar
- Fixed top, `bg-ocean/90 backdrop-blur-md`
- Logo: white serif text
- Links: `text-white/80 hover:text-white`
- CTA button: `bg-coral text-white rounded-full px-5 py-2`

### Hero
- Full-viewport height background image
- Dark overlay gradient from bottom
- Large serif headline, subtitle, CTA button

### Section Cards
- `bg-white rounded-2xl shadow-md overflow-hidden`
- Image top, content below with padding
- Hover: `hover:shadow-xl hover:-translate-y-1 transition-all duration-300`

### Badges / Tags
- `bg-coral/10 text-coral text-xs font-semibold px-3 py-1 rounded-full`

### CTA Buttons
- Primary: `bg-coral hover:bg-coral-dark text-white font-semibold rounded-full px-8 py-3 transition-colors`
- Secondary: `border-2 border-white text-white hover:bg-white hover:text-ocean rounded-full px-8 py-3 transition-colors`

## Do's
- Use full-bleed background images for hero and feature sections
- Use generous whitespace between sections
- Overlay text on images always with a dark gradient or semi-transparent backdrop
- Keep card text clearly readable: dark text on white/light cards

## Don'ts
- Never use light text on light backgrounds
- Never use dark text on dark/image backgrounds without an overlay
- Avoid cluttered layouts — keep sections focused
- No magic hex values in JSX — use named Tailwind colors only
