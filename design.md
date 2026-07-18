# Velmora Fine Jewelry — Visual Design System

## Brand Identity
- **Mood**: quiet luxury, warm, editorial. Premium demi-fine — not loud, not discount, not generic.
- **Audience**: women 25–45, gifting & self-purchase, $30–$120 price point.

## Color Palette (Tailwind: velmora-*)
| Token | Hex | Usage |
|---|---|---|
| `cream` | #FBF7F4 | Page background, card surfaces |
| `sand` | #F0EAE4 | Image placeholders, subtle differentiation |
| `gold` | #C8A96E | Primary accent — buttons, links, icons, star fills |
| `gold-dark` | #B8944F | Button hover states |
| `gold-light` | #DFCDA0 | Subtle gold highlights (use sparingly) |
| `charcoal` | #2B2B2B | Primary text, footer background |
| `slate` | #4A4A4A | Secondary text |
| `warmgray` | #8C8179 | Tertiary text, captions, muted labels |
| `border` | #E8E0D9 | Hairline dividers, subtle borders |

## Typography
- **Headings**: Cormorant Garamond (serif) via `font-serif`. Use `tracking-wide` or `tracking-[0.25em]` for logo. Product names in uppercase with `tracking-[0.15em]`.
- **Body/UI**: Inter (sans-serif). Weights 300, 400, 500, 600.
- **Hierarchy**: Large serif headlines → small uppercase labels → body text.

## Component Patterns

### Buttons
- **Primary (`.btn-primary`)**: Solid gold (#C8A96E) background, cream text, uppercase, wide tracking. Hover → darker gold (#B8944F).
- **Outline (`.btn-outline`)**: Transparent bg, charcoal border + text. Hover → solid charcoal, cream text.

### Dividers
- **Hairline (`.hairline-divider`)**: 1px solid #E8E0D9, full width.

### Section Spacing
- **`.section-padding`**: 5vw horizontal padding (mobile), 8vw (md+). Vertical rhythm: py-16 md:py-24.

### Cards
- Product cards: 3:4 aspect ratio, `bg-velmora-sand` placeholder. Hover: scale-105 image, slide-up "Add to Cart" button.
- Subtle shadows only where needed (navbar on scroll, cart drawer). No heavy drop shadows.

### Navbar
- Fixed top, z-50. Transparent over hero → `bg-velmora-cream/95 backdrop-blur-md shadow-sm` on scroll.
- Logo centered, serif, wide tracking.
- Mobile: hamburger → expandable menu.

### Cart Drawer
- Slides in from right. Cream background. Full height. z-60.
- Empty state: centered icon + message + continue shopping link.

## Imagery
- Warm-lit gold jewelry on dark/neutral backgrounds.
- 3:4 product images, 16:9 hero/banners, 9:16 UGC reel cards.
- Use `data-strk-img` / `data-strk-bg` tagging system for stock images.

## Do's
- Generous whitespace between sections
- Thin hairline dividers (not thick borders)
- Gold accent used sparingly — one per viewport typically
- Serif reserved for headings and product names
- Uppercase + wide tracking for all product names and UI labels

## Don'ts
- No bright/neon colors
- No heavy box shadows or rounded cards
- No discount badges, strikethrough prices, "SALE" language
- No text on gold backgrounds (low contrast)
- No black (#000) — use charcoal (#2B2B2B)
