# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `warm-black` | `#1A1714` | Primary background (deep warm black) |
| `warm-charcoal` | `#2A2520` | Card backgrounds, nav solid |
| `warm-dark` | `#3D3630` | Borders, dividers, subtle surfaces |
| `warm-tan` | `#8B7E6A` | Muted text, secondary elements |
| `warm-gold` | `#C9A96E` | Primary accent (gold), buttons, links |
| `warm-cream` | `#F5F0E8` | Light backgrounds, text on dark |
| `warm-ivory` | `#FAF7F2` | Page background (light mode) |
| `warm-white` | `#FFFFFF` | Pure white accents |

### Usage Rules
- Dark scheme is default: `warm-black` background, `warm-cream` text
- `warm-gold` is the ONLY accent color — use sparingly for CTAs, links, highlights
- Hairline dividers use `warm-dark` at 1px
- Cards use `warm-charcoal` on dark backgrounds
- Never use blue, purple, or saturated colors

## Typography

### Headings & Product Names
- Font: **Cormorant Garamond** (Google Fonts, weights 400/500/600/700)
- Style: UPPERCASE, wide letter-spacing (0.15em–0.25em)
- Sizes: h1=3rem, h2=2rem, h3=1.5rem, h4=1.25rem

### Body & UI
- Font: **Inter** (Google Fonts, weights 300/400/500/600)
- Style: Normal case, standard spacing
- Sizes: body=0.9375rem (15px), small=0.8125rem (13px), xs=0.6875rem (11px)

### Do's
- Use generous line-height (1.6–1.8 for body, 1.2 for headings)
- Uppercase + wide tracking for product names and section headings
- Light font weights for elegance

### Don'ts
- Never use bold/heavy weights on serif headings
- Never mix more than 2 font families
- Never use all-caps on body text

## Spacing & Layout
- Section padding: 80px–120px vertical (desktop), 48px–64px (mobile)
- Max content width: 1280px
- Grid gaps: 24px (product cards), 16px (tight grids)
- Generous whitespace is critical — never crowd elements

## Buttons
- Primary: `warm-gold` background, `warm-black` text, uppercase, wide tracking, 12px 32px padding
- Secondary: transparent bg, `warm-gold` border, `warm-gold` text
- Hover: subtle opacity shift or lighten gold
- Border-radius: 0 (sharp) or 2px (minimal)
- Transitions: 300ms ease

## Cards
- Product cards: minimal, no visible border, subtle shadow on hover
- Image aspect ratio: 3x4 or 4x5
- Hover: second image fade-in, subtle scale
- Quick-add button appears on hover

## Dividers
- 1px solid `warm-dark` — hairline style
- Used between sections, in footers, between nav items

## Shadows
- Very subtle: `0 2px 8px rgba(0,0,0,0.15)` for cards
- None on buttons
- Soft ambient shadows only

## Animations
- Subtle, 300ms ease transitions
- Image crossfade on hover
- Cart drawer slides from right
- Nav background transitions on scroll
- No bouncy or playful animations

## Responsive
- Mobile-first (most traffic is mobile)
- Breakpoints: sm=640px, md=768px, lg=1024px, xl=1280px
- Mobile nav: hamburger menu
- Product grid: 2 cols mobile, 3 cols tablet, 4-5 cols desktop
