# Velmora Fine Jewelry — Design System

## Visual Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.
Think: warm candlelight on gold, editorial fashion photography, Parisian boutique.

## Color Palette

| Name           | Hex       | Tailwind Class         | Usage                          |
|----------------|-----------|------------------------|--------------------------------|
| Obsidian       | #1C1A18   | `bg-obsidian`          | Primary dark bg, text          |
| Obsidian Light | #2A2724   | `bg-obsidian-light`    | Dark card bg, nav solid        |
| Ivory          | #F7F3EE   | `bg-ivory`             | Primary light bg               |
| Ivory Dark     | #EDE8E0   | `bg-ivory-dark`        | Section alternates, borders    |
| Gold           | #C9A96E   | `text-gold`, `bg-gold` | Primary accent, CTAs, stars    |
| Gold Light     | #DFC08A   | `text-gold-light`      | Hover states, highlights       |
| Gold Dark      | #A8854A   | `text-gold-dark`       | Active states                  |
| Taupe          | #8C7B6B   | `text-taupe`           | Secondary text, muted          |
| Taupe Light    | #B5A898   | `text-taupe-light`     | Placeholder, dividers          |

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `font-serif text-5xl md:text-7xl font-light tracking-wide`
- Section H2: `font-serif text-3xl md:text-4xl font-light`
- Product Name: `font-serif text-xl md:text-2xl uppercase tracking-widest font-medium`
- Subheadings: `font-serif text-lg italic font-light`

### Body — Manrope (sans-serif)
- Body: `font-sans text-sm md:text-base font-normal`
- Nav links: `font-sans text-xs uppercase tracking-widest font-medium`
- Labels/badges: `font-sans text-xs uppercase tracking-widest`
- Prices: `font-sans text-base font-semibold`

## Spacing
- Section padding: `py-16 md:py-24 px-4 md:px-8 lg:px-16`
- Card padding: `p-4 md:p-6`
- Generous whitespace between elements

## Borders & Dividers
- Hairline: `border-ivory-dark` (1px)
- Card borders: none (use shadow instead)
- Subtle shadow: `shadow-sm` with warm tint

## Buttons

### Primary (Accent)
`bg-gold text-obsidian font-sans text-xs uppercase tracking-widest px-8 py-3 hover:bg-gold-light transition-colors duration-300`

### Outlined
`border border-gold text-gold font-sans text-xs uppercase tracking-widest px-8 py-3 hover:bg-gold hover:text-obsidian transition-all duration-300`

### Ghost / Text
`text-gold font-sans text-xs uppercase tracking-widest hover:text-gold-light`

## Do's
- Use generous whitespace
- Large editorial imagery
- Thin hairline dividers between sections
- Subtle hover transitions (0.3–0.6s ease)
- Soft warm shadows
- Uppercase product names with wide letter-spacing
- Italic serif for subheadings and captions

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners > 2px on buttons (keep sharp/minimal)
- No generic stock-photo vibes
- No cluttered layouts
- No default browser button styles
