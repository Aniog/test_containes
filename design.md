# Velmora Fine Jewelry — Design System

## Visual Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry aesthetic.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| `obsidian` | `#1C1917` | Primary dark background, text, buttons |
| `obsidian-light` | `#292524` | Hover states on dark surfaces |
| `ivory` | `#FAF7F2` | Primary page background |
| `ivory-dark` | `#F0EBE3` | Section alternates, card backgrounds |
| `parchment` | `#E8E0D5` | Borders, dividers, hairlines |
| `gold` | `#C9A96E` | Primary accent — CTAs, highlights, icons |
| `gold-light` | `#DFC08A` | Hover state for gold |
| `gold-dark` | `#A8854A` | Active/pressed gold |
| `warm-gray` | `#8C8279` | Muted text on dark backgrounds |
| `warm-gray-light` | `#B5AFA8` | Secondary text on dark backgrounds |
| `text-primary` | `#1C1917` | Body text on light backgrounds |
| `text-secondary` | `#6B6460` | Secondary body text |
| `text-muted` | `#9C9490` | Captions, metadata |

## Typography

### Headings & Product Names
- Font: `Cormorant Garamond` (serif)
- Weights: 300 (light), 400 (regular), 500 (medium), italic variants
- Product names: UPPERCASE, `tracking-widest` (0.25em) or `tracking-ultra-wide` (0.35em)
- Hero headlines: 5xl–7xl, font-light
- Section headings: 3xl–5xl, font-light

### Body & UI
- Font: `Inter` (sans-serif)
- Weights: 300, 400, 500, 600
- Labels/nav: `text-xs tracking-widest uppercase`
- Body copy: `text-sm` or `text-base`, `leading-relaxed`

## Spacing
- Generous whitespace: sections use `py-20 md:py-28`
- Max content width: `max-w-7xl`
- Consistent horizontal padding: `px-4 sm:px-6 lg:px-8`

## Borders & Dividers
- Hairline dividers: `border border-parchment` or `h-px bg-parchment`
- Gold accent line: `w-12 h-px bg-gold` (used under section headings)
- No heavy borders — everything is thin and refined

## Buttons

### Primary (solid dark)
```
bg-obsidian text-ivory font-sans text-xs tracking-widest uppercase px-8 py-4
hover:bg-obsidian-light transition-colors duration-200
```

### Accent (gold fill)
```
bg-gold text-obsidian font-sans text-xs tracking-widest uppercase px-8 py-4
hover:bg-gold-light transition-colors duration-300
```

### Outlined
```
border border-obsidian text-obsidian font-sans text-xs tracking-widest uppercase px-8 py-3.5
hover:bg-obsidian hover:text-ivory transition-colors duration-300
```

### Text link
```
text-xs tracking-widest uppercase font-sans text-gold border-b border-gold pb-0.5
hover:text-gold-dark transition-colors
```

## Shadows
- Subtle: `shadow-sm` on sticky nav
- Drawer: `shadow-2xl`
- No heavy drop shadows on cards — use hover scale instead

## Animations
- Hover image swap: `transition-opacity duration-500`
- Hover scale: `group-hover:scale-105 transition-transform duration-500`
- Page sections: `animate-fade-in`, `animate-slide-up`
- Cart drawer: `transition-transform duration-400`
- All transitions: `ease-out`

## Do's
- Use `font-serif` for all headings, product names, prices
- Use `font-sans` for all UI labels, buttons, body copy
- Always pair a dark background with light text (ivory/warm-gray-light)
- Always pair a light background with dark text (obsidian/text-secondary)
- Use gold sparingly as an accent — not as a background for large areas
- Maintain generous whitespace between sections
- Use thin hairline borders, never thick borders

## Don'ts
- Don't use bright/saturated colors
- Don't use heavy drop shadows on product cards
- Don't use rounded corners on buttons (sharp edges = premium)
- Don't use bold font weights for headings (light/regular = luxury)
- Don't crowd elements — whitespace is a design element
- Don't use generic blue links
