# Velmora Fine Jewelry — Design System

## Brand Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry.
- **Audience**: Women 25–45, gifting and self-purchase.

## Color Palette
| Token | Hex | Usage |
|---|---|---|
| `velmora-cream` | `#FAF7F2` | Primary background |
| `velmora-warm` | `#F5F0E8` | Card backgrounds, image containers |
| `velmora-linen` | `#EDE8DF` | Secondary surfaces |
| `velmora-sand` | `#E8E2DA` | Borders, dividers |
| `velmora-gold` | `#C9A96E` | Primary accent, CTAs, highlights |
| `velmora-gold-light` | `#D4BA85` | Hover accent |
| `velmora-gold-dark` | `#B8944F` | Active accent |
| `velmora-charcoal` | `#2D2A26` | Primary text, dark buttons |
| `velmora-graphite` | `#4A4640` | Secondary text |
| `velmora-stone` | `#6B6560` | Muted text, descriptions |
| `velmora-mist` | `#9B958E` | Placeholders, tertiary text |
| `velmora-ivory` | `#FFFEF9` | White alternative, cards |

## Typography
### Headings: Playfair Display (serif)
- Weights: 400, 500, 600, 700
- Use for: h1–h6, product names, section titles
- Product names: uppercase with `tracking-wider` or `tracking-ultra-wide`
- Line height: 1.2

### Body: Inter (sans-serif)
- Weights: 300, 400, 500, 600
- Use for: body text, UI elements, labels, buttons
- Tracking: `tracking-wide` for labels, `tracking-widest` for button text

## Spacing
- Section padding: `py-16 sm:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card gaps: `gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-10`

## Buttons
### Primary (Dark)
```
bg-velmora-charcoal text-velmora-ivory py-3.5 text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold transition-colors duration-300
```

### Primary (Gold Accent)
```
bg-velmora-gold text-white py-3.5 text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold-dark transition-colors duration-300
```

### Outlined
```
border border-velmora-sand text-velmora-charcoal text-xs tracking-widest uppercase hover:border-velmora-gold
```

## Borders & Dividers
- Thin hairline: `border border-velmora-sand/50`
- Section divider: `border-t border-velmora-sand/60`
- Subtle card border: `border border-velmora-sand/40`

## Shadows
- Soft shadow: `shadow-sm` or subtle `shadow-lg`
- Avoid heavy shadows. Use opacity-based overlays instead.

## Animations
- Hover scale on images: `transition-transform duration-500 group-hover:scale-105`
- Fade in: `animate-fade-in`
- Slide up: `animate-slide-up`
- Transitions on color/opacity: `transition-colors duration-200` or `duration-300`

## Do's
- Use generous whitespace
- Keep text readable with strong contrast
- Use the gold accent sparingly for CTAs and highlights
- Maintain the warm, editorial aesthetic throughout
- Use `uppercase tracking-wider` for product names and labels

## Don'ts
- Don't use bright or neon colors
- Don't use heavy borders or boxy designs
- Don't use multiple accent colors
- Don't use generic e-commerce patterns (sale badges, countdown timers)
- Don't use emoji in the UI
