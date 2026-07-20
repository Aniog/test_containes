# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Inspired by high-end jewelry editorial photography — dark warm backgrounds, gold accents, generous whitespace.

## Color Palette

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| `ink` | `#1A1410` | `bg-ink` / `text-ink` | Primary background, deep warm black |
| `parchment` | `#F7F3EC` | `bg-parchment` / `text-parchment` | Light page background, cards |
| `cream` | `#FAF8F4` | `bg-cream` | Lightest surface |
| `gold` | `#C9A96E` | `bg-gold` / `text-gold` | Primary accent — CTAs, highlights |
| `gold-light` | `#E2C98A` | `text-gold-light` | Hover state for gold |
| `gold-dark` | `#A8854A` | `text-gold-dark` | Active/pressed gold |
| `warm-gray` | `#8B7B6B` | `text-warm-gray` | Secondary text, captions |
| `warm-gray-light` | `#C4B8A8` | `text-warm-gray-light` | Placeholder, dividers |
| `charcoal` | `#3D3530` | `text-charcoal` | Body text on light backgrounds |

## Typography

### Fonts
- **Headings / Product Names**: Cormorant Garamond (serif) — loaded via Google Fonts
- **Body / UI**: Inter (sans-serif) — loaded via Google Fonts

### Scale
- Hero headline: `text-5xl md:text-7xl font-light tracking-wide` (Cormorant)
- Section title: `text-3xl md:text-4xl font-light tracking-wide` (Cormorant)
- Product name: `text-xl font-normal tracking-[0.15em] uppercase` (Cormorant)
- Body: `text-sm md:text-base font-normal leading-relaxed` (Inter)
- Caption / label: `text-xs tracking-widest uppercase` (Inter)
- Price: `text-lg font-medium` (Inter)

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace between elements

## Borders & Dividers
- Hairline dividers: `border-warm-gray-light/30` (very subtle)
- Card borders: none (use shadow or background contrast)
- Pill buttons: `rounded-full`
- Standard buttons: `rounded-none` (sharp, editorial)

## Shadows
- Card hover: `shadow-lg shadow-ink/10`
- Drawer: `shadow-2xl shadow-ink/20`

## Buttons

### Primary (CTA)
```
bg-gold text-ink px-8 py-3 text-xs tracking-widest uppercase font-medium
hover:bg-gold-light transition-colors duration-300
```

### Outlined
```
border border-gold text-gold px-8 py-3 text-xs tracking-widest uppercase font-medium
hover:bg-gold hover:text-ink transition-all duration-300
```

### Ghost (nav links)
```
text-xs tracking-widest uppercase text-charcoal hover:text-gold transition-colors duration-200
```

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom on hover: `scale-105 transition-transform duration-500`
- Fade in: `opacity-0 → opacity-100 transition-opacity duration-500`
- Drawer slide: `translate-x-full → translate-x-0 transition-transform duration-400`

## Do's
- Use Cormorant Garamond for all headings and product names
- Keep product names UPPERCASE with wide letter-spacing
- Use generous whitespace — let the jewelry breathe
- Hairline dividers only — never thick borders
- Gold accent sparingly — it should feel precious
- Dark ink background for hero/editorial sections; cream/parchment for product sections

## Don'ts
- No bright/neon colors
- No rounded corners on primary buttons (editorial sharpness)
- No generic e-commerce blue/green CTAs
- No crowded layouts
- No heavy drop shadows
- Never use white text on parchment or cream backgrounds
