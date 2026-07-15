# Velmora Fine Jewelry — Design System

## Brand Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine — NOT loud, NOT discount-looking, NOT generic.
- **Target**: Women 25–45, gifting and self-purchase, $30–$120 price point.
- **Tone**: Refined, warm, confident. Jewelry that lives with you, not locked away.

## Color Palette

### Primary: Warm Neutrals
| Token | Hex | Usage |
|-------|-----|-------|
| `cream-50` | `#fefdfb` | Page background |
| `cream-100` | `#fdf9f0` | Card backgrounds, subtle accents |
| `cream-200` | `#faf0da` | Hover states on dark backgrounds |
| `cream-300` | `#f5e3b7` | Decorative elements |

### Accent: Velvet Gold
| Token | Hex | Usage |
|-------|-----|-------|
| `velvet-50` | `#faf8f5` | Section backgrounds |
| `velvet-100` | `#f5f0e8` | Image placeholders, card backs |
| `velvet-200` | `#ebe0ce` | Selection highlight |
| `velvet-400` | `#c9a87a` | Trust bar icon accents |
| `velvet-500` | `#b8915a` | Star ratings, small accents |
| `velvet-600` | `#a67c4a` | Primary CTA buttons, links, hover states |
| `velvet-700` | `#8a6340` | Button hover |
| `velvet-950` | `#332319` | Deep accent |

### Neutral: Charcoal
| Token | Hex | Usage |
|-------|-----|-------|
| `charcoal-50` | `#f6f6f6` | Subtle backgrounds |
| `charcoal-100` | `#e7e7e7` | Borders, dividers |
| `charcoal-200` | `#d1d1d1` | Light borders |
| `charcoal-300` | `#b0b0b0` | Inactive stars |
| `charcoal-400` | `#888888` | Secondary text, muted |
| `charcoal-500` | `#6d6d6d` | Body text, descriptions |
| `charcoal-600` | `#5d5d5d` | Medium emphasis text |
| `charcoal-700` | `#4f4f4f` | High emphasis body |
| `charcoal-800` | `#454545` | Near-black text |
| `charcoal-900` | `#1a1a1a` | Primary text, headings |
| `charcoal-950` | `#0d0d0d` | Footer/nav backgrounds |

**DO**: Use velvet-600 as the single accent anchor. Button, link, hover — all velvet-600.
**DON'T**: Use cream for text on light backgrounds. Use charcoal-900 text on cream-50 for strong contrast.

## Typography

### Headings: Playfair Display (serif)
- `font-serif` class. Weights: 400, 500, 600, 700.
- Hero: `text-4xl md:text-6xl lg:text-7xl` leading-tight
- Section headings: `text-3xl md:text-4xl lg:text-5xl`
- Product names: `text-xs md:text-sm tracking-[0.2em] uppercase`
- Card headings: `text-lg md:text-xl`

### Body: Inter (sans-serif)
- `font-sans` class. Weights: 300, 400, 500, 600.
- Body text: `text-sm` or `text-base`, `text-charcoal-500` or `text-charcoal-600`
- UI labels: `text-xs tracking-wider uppercase font-medium`
- Buttons: `text-sm tracking-wider uppercase font-medium`

**DO**: Use serif for all headings (h1-h3), product names, and decorative text. Use sans for body, UI, buttons, forms.
**DON'T**: Mix serif/sans within the same element. Use one font family consistently per element.

## Spacing & Layout
- Page container: `max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16`
- Section padding: `section-padding` = `py-16 md:py-24 lg:py-28`
- Card gaps: `gap-5 md:gap-6 lg:gap-8`
- Generous whitespace. Sections breathe. Don't crowd.

## Components

### Buttons
- **Primary/Accent**: `btn-accent` — velvet-600 bg, white text, shadow-lg shadow-velvet-600/20
- **Outline**: `btn-outline` — transparent bg, charcoal-900 border, hover fills charcoal-900
- **Primary (no shadow)**: `btn-primary` — velvet-600 bg, no shadow

### Dividers
- Thin hairline: `border-t border-charcoal-200` or `border-charcoal-100`
- 1px, never bold. Restrained.

### Cards
- Hover: subtle shadow, slight scale or color shift
- Product cards: image swap on hover, quick-add button slides up
- Image placeholders: `bg-velvet-100`

### Shadows
- Soft, never harsh. `shadow-sm`, `shadow-md` for elevated elements
- Buttons: `shadow-lg shadow-velvet-600/20`

## Animations
- `animate-fade-in`: opacity 0→1, 0.5s ease-out
- `animate-slide-up`: translateY(20px)→0 + opacity, 0.5s
- `animate-slide-in-right`: translateX(100%)→0, 0.3s (mobile drawers)
- Transitions: `duration-300` for hover, `duration-500` for nav scroll

## Responsive
- Mobile-first. Stack on mobile, grid on desktop.
- Product grids: 2-col mobile → 3-col md → 5-col lg (bestsellers), 2/3-col (shop)
- Font scales: serif headings shrink significantly on mobile
- Mobile nav: flyout. Mobile filters: slide-in panel.

## Accessibility
- All text meets WCAG AA contrast minimum (4.5:1 for body, 3:1 for large text)
- charcoal-900 (#1a1a1a) on cream-50 (#fefdfb) = ~17:1 (excellent)
- velvet-600 (#a67c4a) on cream-50 = ~3.5:1 (large text only, OK for headings/buttons)
- Focus states visible. Semantic HTML. ARIA labels on icon buttons.