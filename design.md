# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury, warm editorial, premium-but-accessible demi-fine gold jewelry. The site should feel like a glossy jewelry lookbook: generous whitespace, refined typography, warm metallic accents, and large lifestyle imagery.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg` | `#F8F5F0` | Page backgrounds, cards |
| `--color-bg-dark` | `#1C1C1C` | Hero overlays, footer, dark sections |
| `--color-text` | `#1C1C1C` | Primary text, headings |
| `--color-text-light` | `#F8F5F0` | Text on dark backgrounds |
| `--color-muted` | `#6D655D` | Body copy, captions |
| `--color-accent` | `#B08D6F` | Primary accent (warm bronze/taupe) |
| `--color-accent-dark` | `#8C6F52` | Hover states for accent |
| `--color-gold` | `#C9A96E` | Metallic highlights, stars, price |
| `--color-border` | `#E3DDD4` | Hairline dividers, card borders |
| `--color-border-dark` | `#3A3A3A` | Dividers on dark backgrounds |

All text must maintain strong contrast. Light text is only used on dark surfaces; dark text is only used on light surfaces.

## Typography

- **Headings / Serif**: `Cormorant Garamond`, 300–700. Used for brand name, page titles, section headings, product names.
- **Body / UI**: `Inter`, 300–600. Used for body copy, buttons, navigation, prices, captions.
- Product names are rendered in **UPPERCASE** with wide letter-spacing (`tracking-[0.2em]` or `tracking-widest`).

### Type Scale
- Display: `text-5xl md:text-7xl` — hero headline
- H1: `text-4xl md:text-5xl`
- H2: `text-3xl md:text-4xl`
- H3: `text-xl md:text-2xl`
- Body: `text-sm md:text-base`
- Caption / UI: `text-xs tracking-widest uppercase`

## Spacing & Layout

- Page horizontal padding: `px-5 md:px-8 lg:px-12 xl:px-16`
- Section vertical spacing: `py-16 md:py-24 lg:py-32`
- Grid gaps: `gap-4 md:gap-6 lg:gap-8`
- Hairline dividers: `border-b border-[#E3DDD4]`
- Container max-width: `max-w-7xl mx-auto`

## Components

### Buttons
- **Primary (solid accent)**: `bg-[#B08D6F] text-white hover:bg-[#8C6F52]`
- **Secondary (outline)**: `border border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-[#F8F5F0]`
- **Ghost**: transparent background, underline on hover
- Padding: `px-8 py-3`
- Letter-spacing: `tracking-widest uppercase text-xs`
- Transition: `transition-all duration-300 ease-out`

### Cards
- Background: `#F8F5F0`
- Border: none or `1px solid #E3DDD4`
- Shadow on hover: `shadow-lg`
- Transition: `transition-shadow duration-300`

### Icons
- Use `lucide-react`
- Default size: `w-5 h-5`

## Animation
- Subtle fade/slide on scroll is acceptable but keep it minimal and fast.
- Hover transitions: `duration-300 ease-out`
- Mobile menu: slide from right

## Do's and Don'ts
- DO use generous whitespace.
- DO keep product names uppercase and spaced.
- DO ensure all text is readable against its background.
- DON'T use loud sale banners or discount-looking red/green.
- DON'T use generic placeholder UI patterns.
- DON'T use neon or overly saturated colors.
