# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on warm neutral backgrounds. Never loud, never discount-looking.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `ivory` | `#FAF8F5` | Page background, primary surface |
| `espresso` | `#1C1410` | Primary text, nav, footer background |
| `gold` | `#C9A96E` | Accent color — CTAs, highlights, borders |
| `gold-light` | `#E8D5B0` | Hover states, subtle tints |
| `taupe` | `#6B5E52` | Secondary/muted text |
| `linen` | `#EDE8E1` | Dividers, card borders, light backgrounds |
| `white` | `#FFFFFF` | Card surfaces, overlays |

**Do:** Use ivory as the default page background. Use espresso for all primary text. Use gold sparingly as the accent — buttons, underlines, icons.
**Don't:** Use pure black (#000) or pure white (#fff) as primary surfaces. Don't use gold for large background fills.

## Typography

### Fonts
- **Serif (headings, product names, editorial):** Cormorant Garamond — weights 300, 400, 500, 600
- **Sans-serif (body, UI, labels):** Manrope — weights 300, 400, 500, 600, 700

### Scale
- `display`: Cormorant Garamond 600, 56–72px, tracking normal
- `h1`: Cormorant Garamond 500, 40–48px
- `h2`: Cormorant Garamond 500, 32–36px
- `h3`: Cormorant Garamond 400, 24–28px
- `product-name`: Cormorant Garamond 500, 18–22px, UPPERCASE, letter-spacing 0.12em
- `body`: Manrope 400, 15–16px, line-height 1.7
- `label/ui`: Manrope 500, 12–13px, UPPERCASE, letter-spacing 0.08em
- `caption`: Manrope 300, 13px

### Tailwind classes
- Headings: `font-serif font-medium tracking-wide`
- Product names: `font-serif font-medium uppercase tracking-widest`
- Body: `font-sans font-normal leading-relaxed`
- Labels: `font-sans font-medium uppercase tracking-widest text-xs`

## Spacing
Generous whitespace. Section padding: `py-20 md:py-28`. Card padding: `p-6`. Grid gaps: `gap-6 md:gap-8`.

## Borders & Dividers
- Hairline dividers: `border-linen` (1px)
- Card borders: `border border-linen`
- Rounded corners: `rounded-none` for editorial feel, `rounded-sm` for pills/buttons

## Shadows
- Subtle card shadow: `shadow-sm` with warm tint
- Hover: `shadow-md` transition

## Buttons
- **Primary (CTA):** `bg-espresso text-ivory px-8 py-3 font-sans font-medium uppercase tracking-widest text-xs hover:bg-gold transition-colors`
- **Outlined:** `border border-espresso text-espresso px-8 py-3 font-sans font-medium uppercase tracking-widest text-xs hover:bg-espresso hover:text-ivory transition-colors`
- **Gold accent:** `bg-gold text-espresso px-8 py-3 font-sans font-medium uppercase tracking-widest text-xs hover:bg-gold-light transition-colors`

## Animations
- All transitions: `transition-all duration-300 ease-in-out`
- Hover image scale: `hover:scale-105`
- Nav scroll: opacity + background transition
- Cart drawer: slide-in from right

## Image Treatment
- Product images: warm-lit, neutral/dark backgrounds, square or 4:3 ratio
- Hero: full-bleed, 16:9 or taller on mobile
- UGC: 9:16 vertical (portrait)
- Category tiles: 3:4 portrait
- Brand story: 4:5 portrait
