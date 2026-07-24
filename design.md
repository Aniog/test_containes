# Velmora Fine Jewelry — Design System

## Visual Direction
Quiet luxury. Warm editorial. Deep obsidian base with champagne gold accents. Premium demi-fine jewelry aesthetic — not loud, not discount-looking.

## Color Palette

| Name | Hex | Usage |
|---|---|---|
| `obsidian` | `#1A1714` | Primary background (dark sections, footer, nav solid) |
| `obsidian-light` | `#2C2825` | Hover state on dark backgrounds |
| `obsidian-mid` | `#3D3830` | Borders on dark backgrounds |
| `parchment` | `#F5F0E8` | Secondary background, product image backgrounds |
| `parchment-dark` | `#EDE6D6` | Hairline dividers, card borders |
| `champagne` | `#C9A96E` | Primary accent — CTAs, star ratings, labels, links |
| `champagne-light` | `#DFC08A` | Hover state on champagne elements |
| `champagne-pale` | `#F0E0C0` | Very subtle champagne tint |
| `ivory` | `#FAF7F2` | Primary page background, text on dark |
| `warm-gray` | `#8C8278` | Body text, secondary text |
| `warm-gray-light` | `#B5AFA8` | Placeholder text, footer links |
| `blush` | `#E8D5C4` | Gift badge background |

## Typography

### Headings — Cormorant Garamond (serif)
- Page titles: `font-serif text-5xl md:text-6xl font-light`
- Section headings: `font-serif text-4xl md:text-5xl font-light`
- Product names: `font-serif text-sm tracking-wider uppercase` (ALWAYS uppercase with wide tracking)
- Italic accents: `font-serif italic` for editorial emphasis

### Body — Manrope (sans-serif)
- Body text: `font-sans text-sm text-warm-gray leading-relaxed`
- Labels/caps: `font-sans text-xs tracking-widest uppercase`
- Micro labels: `font-sans text-[10px] tracking-widest uppercase`

### Letter Spacing
- `tracking-widest` = `0.25em` — product names, nav links, section labels
- `tracking-ultra-wide` = `0.35em` — accent category labels above headings

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card gaps: `gap-4 md:gap-6`
- Generous whitespace is intentional — do not crowd elements

## Buttons

### Primary (solid dark)
```
bg-obsidian text-ivory font-sans text-xs tracking-widest uppercase px-8 py-4
hover:bg-obsidian-light transition-colors duration-300
```

### Accent (champagne)
```
bg-champagne text-obsidian font-sans text-xs tracking-widest uppercase px-8 py-4
hover:bg-champagne-light transition-colors duration-300
```

### Outlined
```
border border-champagne text-champagne font-sans text-xs tracking-widest uppercase px-6 py-3
hover:bg-champagne hover:text-ivory transition-all
```

### Text link
```
font-sans text-xs tracking-widest uppercase text-obsidian border-b border-obsidian pb-0.5
hover:text-champagne hover:border-champagne transition-colors
```

## Dividers
- Hairline: `border-t border-parchment-dark` (1px, warm beige)
- On dark: `border-t border-obsidian-mid`

## Shadows
- Subtle card shadow: `shadow-sm`
- Drawer/modal: `shadow-2xl`
- Avoid heavy drop shadows — use borders instead

## Animations
- Hover transitions: `transition-colors duration-200` or `transition-all duration-300`
- Image crossfade: `transition-opacity duration-500`
- Slide-in drawer: `transition-transform duration-400 ease-in-out`
- Scale on hover: `transition-transform duration-700 group-hover:scale-105`
- Fade-in-up: `.animate-fade-in-up` (custom keyframe, 0.7s)

## Do's
- Use generous whitespace between sections
- Product names always UPPERCASE with `tracking-wider`
- Accent labels above headings in champagne + ultra-wide tracking
- Thin hairline dividers, never thick borders
- Warm, editorial imagery — gold on neutral/dark backgrounds
- Subtle hover states, never jarring

## Don'ts
- No bright/saturated colors — stay within the warm neutral palette
- No rounded corners on buttons (sharp edges = premium)
- No heavy drop shadows
- No generic e-commerce blue/green CTAs
- No crowded layouts — whitespace is a design element
- Never use white (#FFFFFF) — use ivory (#FAF7F2) instead
