# Velmora Fine Jewelry — Design System

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `ink` | `#1A1816` | Primary text, headings, dark backgrounds |
| `warm-white` | `#FAF8F5` | Page background, card surfaces |
| `ivory` | `#F5F0EB` | Subtle section backgrounds, footer |
| `champagne` | `#E8E0D4` | Dividers, borders, subtle fills |
| `gold` | `#C9A96E` | Primary accent — CTAs, links, stars, highlights |
| `gold-hover` | `#B8945A` | Hover state for gold elements |
| `muted` | `#8C8279` | Secondary text, captions, placeholders |
| `warm-gray` | `#D6CFC6` | Hairline borders |

## Typography

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Headings | Cormorant Garamond | 400–600 | Page titles, section headings, product names |
| Body / UI | Inter | 300–500 | Paragraphs, navigation, buttons, prices |

- Product names: UPPERCASE, wide letter-spacing (`tracking-[0.2em]`)
- Headings: relaxed line-height (`leading-relaxed`)
- Body: `text-sm` to `text-base`, `leading-relaxed`

## Spacing & Layout

- Max content width: `max-w-7xl` (1280px), centered
- Section vertical padding: `py-16 md:py-24`
- Horizontal padding: `px-6 md:px-12`
- Generous whitespace between sections
- Hairline dividers: `border-champagne` or `bg-champagne h-px`

## Components

### Buttons
- Primary: `bg-gold text-ink font-medium px-8 py-3 tracking-widest uppercase text-xs` — hover darkens to `gold-hover`
- Secondary / Outline: `border border-ink text-ink bg-transparent` — hover fills `bg-ink text-warm-white`
- All buttons: `transition-all duration-300 ease-out`

### Cards
- Background: `bg-warm-white`
- Border-radius: none (sharp editorial edges) or subtle `rounded-sm`
- Shadow: none by default, soft on hover: `hover:shadow-lg transition-shadow duration-300`

### Inputs
- Border: `border-champagne` bottom-only or full
- Focus: `border-gold`
- Background: transparent or `warm-white`

## Animation Principles

- Transitions: `duration-300` standard, `duration-500` for reveals
- Easing: `ease-out` for most, `cubic-bezier(0.4, 0, 0.2, 1)` for smooth UI
- Scroll reveals: fade-up with `translateY(12px)` to `translateY(0)`, opacity 0 to 1
- Hover effects: subtle scale (1.02), opacity shifts, shadow depth

## Do's and Don'ts

- DO use generous whitespace and let images breathe
- DO use uppercase tracking for product names and CTAs
- DO use thin hairline dividers between sections
- DON'T use bright saturated colors
- DON'T use heavy drop shadows on cards
- DON'T use rounded corners excessively
- DON'T use discount-style badges or loud sale banners
