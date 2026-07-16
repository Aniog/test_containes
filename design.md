# Velmora Fine Jewelry — Visual Identity

## Brand Essence
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| Deep Warm | `#1A1410` | Primary text, dark backgrounds, nav on scroll |
| Warm Ivory | `#F5F0EB` | Page background, light sections |
| Pure White | `#FFFFFF` | Cards, modals, elevated surfaces |
| Warm Gold | `#C9A96E` | Accent, CTAs, hover states, active indicators |
| Dark Gold | `#B8944F` | Gold hover, darker accent |
| Soft Gold | `#E8D5B7` | Subtle accents, border highlights |
| Warm Muted | `#8B7D72` | Secondary text, metadata |
| Light Border | `#E5DDD5` | Hairline dividers, thin borders |
| Warm Light | `#D9CFC4` | Light borders, subtle frames |
| Deep Gold | `#A67C3E` | Dark gold for text accents |

## Typography

- **Headings (h1-h4, product names, logo)**: Cormorant Garamond, serif
  - Product names: UPPERCASE, letter-spacing: 0.15em
  - Logo: Cormorant Garamond, uppercase, tracking wide
- **Body & UI**: Inter, sans-serif
  - Size: 14px base for body, scale as needed
- **Font loading**: Google Fonts, preconnected in index.html

## Spacing & Layout
- Generous whitespace (py-16 to py-24 on sections)
- Max content width: 1280px
- Section padding: px-4 md:px-8 lg:px-12
- Thin hairline borders (border-t border-[#E5DDD5])

## Component Styles

### Buttons
- Primary: Solid Warm Gold (`#C9A96E`) bg, dark text, uppercase, tracking-wider, py-3 px-8
- Outline: 1px solid Warm Gold border, text Warm Gold, transparent bg
- Hover: subtle darken (bg-[#B8944F] for primary, bg-[#C9A96E]/10 for outline)
- Transitions: all 0.3s ease

### Cards
- White bg, subtle shadow, rounded-none (sharp/square edges)
- Product cards: image on hover reveals second image, quick add button
- Hover: slight lift (translateY(-2px), shadow increase)

### Navigation
- Transparent over hero, solid white on scroll
- Logo: serif, uppercase, tracking-[0.2em]
- Links: uppercase, text-xs tracking-[0.15em]

### Dividers
- Thin hairline: border-t border-[#E5DDD5]
- Used between sections

### Animations
- Subtle: fade-in on scroll, smooth hover transitions
- Duration: 0.3s ease
- No heavy animations that slow load

## Do's
- Use warm, editorial photography
- Generous whitespace
- Thin, elegant lines
- Gold accents throughout
- Uppercase with wide tracking for product names
- Serif for headings, sans for body

## Don'ts
- No bright or saturated colors
- No heavy borders or thick lines
- No loud sale banners or discount styling
- No generic stock photos of people
- No emoji
- No rounded corners on cards