# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury. Warm, editorial, premium-but-accessible. Think Mejuri meets Net-a-Porter.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
| Token | Hex | Usage |
|---|---|---|
| `obsidian` | `#1C1A18` | Primary text, dark backgrounds, nav solid |
| `obsidian-light` | `#2A2724` | Card dark backgrounds |
| `ivory` | `#F5F0E8` | Page background, light surfaces |
| `ivory-dark` | `#EDE6D6` | Subtle section backgrounds |
| `gold` | `#C9A96E` | Primary accent — CTAs, borders, highlights |
| `gold-light` | `#DFC08A` | Hover states on gold |
| `gold-dark` | `#A8854A` | Active/pressed gold |
| `taupe` | `#8C7B6B` | Secondary text, captions, muted labels |
| `taupe-light` | `#B5A898` | Dividers, placeholder text |
| `blush` | `#E8D5C4` | Soft accent backgrounds |

## Typography
- **Headings / Product names**: `font-serif` (Cormorant Garamond) — elegant, editorial
  - Hero H1: `text-5xl md:text-7xl font-light tracking-widest2 font-serif`
  - Section titles: `text-3xl md:text-4xl font-serif font-light`
  - Product names: `text-lg font-serif uppercase tracking-widest2`
- **Body / UI**: `font-sans` (Manrope)
  - Body: `text-sm font-sans font-normal`
  - Nav links: `text-xs font-sans uppercase tracking-widest`
  - Prices: `text-base font-sans font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline: `border-taupe-light/25` (1px)
- Card border: `border border-taupe-light/30`
- Rounded: `rounded-none` for editorial feel; `rounded-sm` for pills/buttons

## Buttons
- **Primary (CTA)**: `bg-gold text-obsidian px-8 py-3 text-xs uppercase tracking-widest font-sans font-semibold hover:bg-gold-light transition-colors`
- **Outlined**: `border border-gold text-gold px-8 py-3 text-xs uppercase tracking-widest hover:bg-gold hover:text-obsidian transition-colors`
- **Ghost**: `text-taupe text-xs uppercase tracking-widest hover:text-obsidian transition-colors`

## Shadows
- Soft card shadow: `shadow-[0_4px_24px_rgba(28,26,24,0.08)]`
- Hover lift: `hover:shadow-[0_8px_32px_rgba(28,26,24,0.14)]`

## Animations
- All transitions: `transition-all duration-400 ease-in-out`
- Image hover scale: `hover:scale-105`
- Overlay fade: `opacity-0 group-hover:opacity-100 transition-opacity duration-400`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or 2/3 width)
- Thin hairline dividers between sections
- UPPERCASE product names with wide letter-spacing
- Warm gold accents sparingly — they should feel precious

## Don'ts
- No bright/saturated colors
- No rounded corners on images (editorial = square)
- No heavy drop shadows
- No generic sans-serif headings
- No cluttered layouts
