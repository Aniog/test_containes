# Velmora Fine Jewelry — Design System

## Visual Direction
Quiet luxury. Warm, editorial, premium-but-accessible. The palette flatters gold jewelry — deep espresso tones as the base, warm champagne and gold as accents, ivory/cream as the primary surface. NOT loud, NOT discount-looking.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `velvet` | `#1A1410` | Primary text, dark backgrounds, CTA buttons |
| `espresso` | `#2C2118` | Trust bar, newsletter section, dark surfaces |
| `bark` | `#4A3728` | Secondary text, hover states |
| `sand` | `#C8A97E` | Section labels, dividers |
| `champagne` | `#E8D5B0` | Light accents, footer text |
| `cream` | `#F7F2EA` | Card backgrounds, secondary surfaces |
| `ivory` | `#FDFAF5` | Primary page background |
| `gold` | `#B8924A` | Accent color — CTAs, stars, highlights |
| `gold-light` | `#D4AF6E` | Hover state for gold elements |
| `mist` | `#8A7B6E` | Muted/secondary text, placeholders |

**Do:** Use `velvet` text on `ivory`/`cream` backgrounds. Use `champagne` text on `velvet`/`espresso` backgrounds.
**Don't:** Use `mist` text on `cream` (low contrast). Never use `champagne` text on `ivory`.

## Typography

### Headings — Cormorant Garamond (serif)
- Page titles: `font-serif text-5xl md:text-6xl font-light text-velvet`
- Section headings: `font-serif text-4xl md:text-5xl font-light text-velvet`
- Product names: `font-serif text-base text-velvet uppercase tracking-wider` (ALWAYS uppercase, wide tracking)
- Italic emphasis: `<em className="italic">` inside serif headings for editorial feel

### Body / UI — Manrope (sans-serif)
- Body text: `font-sans text-sm text-bark leading-relaxed`
- Labels / eyebrows: `font-sans text-xs tracking-widest uppercase text-gold`
- Buttons: `font-sans text-xs tracking-widest uppercase`
- Prices: `font-sans text-sm font-medium text-velvet`
- Muted/secondary: `font-sans text-xs text-mist`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-6 lg:px-8`
- Section vertical padding: `py-20 lg:py-28`
- Generous whitespace — never crowd elements
- Hairline dividers: `border border-champagne/40` or `w-12 h-px bg-gold`

## Buttons

### Primary (solid dark)
```
px-10 py-4 bg-velvet text-champagne font-sans text-xs tracking-widest uppercase hover:bg-bark transition-colors duration-300
```

### Accent (gold fill)
```
px-10 py-4 bg-gold text-velvet font-sans text-xs tracking-widest uppercase hover:bg-gold-light transition-colors duration-300
```

### Outlined
```
px-10 py-4 border border-velvet text-velvet font-sans text-xs tracking-widest uppercase hover:bg-velvet hover:text-champagne transition-colors duration-300
```

### Ghost (dark bg)
```
px-10 py-4 border border-champagne/50 text-champagne font-sans text-xs tracking-widest uppercase hover:border-gold hover:text-gold transition-colors duration-300
```

## Cards & Surfaces
- Product cards: `bg-cream` image area, no border, soft shadow on hover
- Hover image swap: opacity transition `duration-500`
- Quick-add overlay: slides up from bottom `translate-y-full group-hover:translate-y-0 transition-transform duration-300`

## Animations
- All transitions: `duration-300` or `duration-400`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Nav scroll: `transition-all duration-400`
- No bouncy or playful animations — everything is smooth and restrained

## Do's and Don'ts
- **Do** use wide letter-spacing (`tracking-widest`, `tracking-widest2`, `tracking-widest3`) on uppercase labels
- **Do** use `font-light` (300) for large serif headings
- **Do** use italic serif for editorial emphasis
- **Don't** use rounded corners on buttons (sharp edges = premium)
- **Don't** use drop shadows on product images (let whitespace do the work)
- **Don't** use bright/saturated colors — everything stays warm and muted
- **Don't** use generic blue links — all interactive elements use gold or velvet
