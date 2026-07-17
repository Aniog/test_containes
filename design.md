# Velmora Fine Jewelry — Design System

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry. Not loud, not discount, not generic.
- **Audience**: Women 25–45, self-purchase and gifting, $30–$120 price range.

## Color Palette

### Primary / Background
| Token | Hex | Usage |
|---|---|---|
| `velmora-black` | `#0F0F0F` | Deep footer, overlays |
| `velmora-charcoal` | `#1A1A1A` | Primary dark background |
| `velmora-dark` | `#242424` | Cards, secondary surfaces |
| `velmora-cream` | `#F5F0EB` | Light section backgrounds |
| `velmora-ivory` | `#FAF8F5` | Page background (light mode) |
| `velmora-white` | `#FEFCFA` | Cards, contrast surfaces |

### Accent / Gold
| Token | Hex | Usage |
|---|---|---|
| `velmora-gold` | `#C9A96E` | Primary accent, CTAs, links |
| `velmora-gold-light` | `#D4BC8A` | Hover states, highlights |
| `velmora-gold-dark` | `#A68B5B` | Active states, pressed |

### Neutrals
| Token | Hex | Usage |
|---|---|---|
| `velmora-gray` | `#3A3A3A` | Secondary text on light |
| `velmora-muted` | `#6B6B6B` | Captions, meta text |
| `velmora-light` | `#B8B8B8` | Borders, dividers |
| `velmora-rose` | `#E8D5C4` | Soft accents, badges |

### Do's
- Use `velmora-charcoal` for dark hero sections
- Use `velmora-ivory` or `velmora-cream` for light content sections
- Gold accent for all interactive elements (buttons, links, highlights)
- Ensure minimum 4.5:1 contrast ratio for body text

### Don'ts
- Never use pure black (`#000`) for backgrounds — use `velmora-charcoal`
- Never use pure white (`#FFF`) for backgrounds — use `velmora-white`
- Don't use gold for large text blocks — only accents and headings
- Don't use low-contrast combinations

## Typography

### Font Families
- **Serif**: Cormorant Garamond — headings, product names, hero text
- **Sans**: Inter — body text, UI elements, buttons

### Heading Styles
- **Display** (Hero): `font-serif text-display font-light` — 72px, light weight
- **Heading XL**: `font-serif text-heading-xl font-light` — 56px
- **Heading LG**: `font-serif text-heading-lg font-medium` — 40px
- **Heading MD**: `font-serif text-heading-md font-medium` — 28px
- **Heading SM**: `font-serif text-heading-sm font-semibold` — 20px

### Product Names
Always: `font-serif uppercase tracking-[0.15em]` — wide letter-spacing, uppercase

### Body Text
- **Body LG**: `font-sans text-body-lg` — 18px
- **Body**: `font-sans text-body` — 15px
- **Body SM**: `font-sans text-body-sm` — 13px
- **Caption**: `font-sans text-caption uppercase tracking-[0.08em]` — 11px, uppercase

## Spacing
- Section padding: `py-22 md:py-30` (88px / 120px)
- Content max-width: `max-w-7xl mx-auto px-6 md:px-8`
- Card padding: `p-6` (24px)
- Element gap: `gap-6` or `gap-8` (24px / 32px)

## Borders & Dividers
- Hairline dividers: `border-hairline velmora-light/40`
- Card borders: `border velmora-light/20`
- Button borders: `border velmora-gold`

## Shadows
- Product card: `shadow-product` (subtle)
- Product card hover: `shadow-product-hover` (elevated)
- Modal/drawer: `shadow-drawer`

## Buttons

### Primary (Accent)
```
bg-velmora-gold text-velmora-black font-sans font-medium text-caption uppercase tracking-wider
hover:bg-velmora-gold-light
```

### Secondary (Outlined)
```
border border-velmora-gold text-velmora-gold bg-transparent font-sans font-medium text-caption uppercase tracking-wider
hover:bg-velmora-gold hover:text-velmora-black
```

### Ghost (Text)
```
text-velmora-gold font-sans text-body-sm underline underline-offset-4
hover:text-velmora-gold-light
```

## Transitions
- Default: `transition-all duration-300 ease-out`
- Hover scale: `hover:scale-[1.02]`
- Image zoom: `hover:scale-105` on product images
- Smooth fade: `transition-opacity duration-400`

## Layout Patterns
- **Grid**: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`
- **Split section**: `grid md:grid-cols-2 gap-12 items-center`
- **Centered content**: `max-w-2xl mx-auto text-center`

## Responsive Breakpoints
- Mobile first, then:
- `md:` (768px) — tablet
- `lg:` (1024px) — desktop
- `xl:` (1280px) — large desktop

## Component Patterns

### Product Card
- Image container with overflow hidden, hover zoom
- Product name: serif, uppercase, tracking-wide
- Price: sans, gold accent
- Subtle shadow on hover

### Section Heading
- Center aligned
- Serif font, light weight
- Thin gold line accent above or below
- Generous vertical spacing

### Input Fields
- `bg-transparent border-b border-velmora-light/40 py-3 px-0`
- Focus: `border-velmora-gold`
- Placeholder: `text-velmora-muted`
