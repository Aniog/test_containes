# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry for women 25–45. No loud discount cues, no generic e-commerce chrome. The experience should feel like a boutique lookbook: generous whitespace, refined typography, soft transitions, and photography-forward layouts.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-cream` | `#F9F7F4` | Primary page background |
| `--color-espresso` | `#2A1F1A` | Primary text, footer background, strong accents |
| `--color-gold` | `#B3875C` | CTA buttons, accent links, stars, hover states |
| `--color-gold-light` | `#C49B74` | Button hover, lighter gold highlights |
| `--color-taupe` | `#7D6E64` | Secondary text, muted labels |
| `--color-warm-gray` | `#E8E3DD` | Hairline dividers, subtle borders |
| `--color-ivory` | `#FFFDFB` | Cards, input backgrounds, footer text on dark |
| `--color-charcoal` | `#3E322B` | Body text fallback |

Contrast strategy: dark espresso text on cream backgrounds passes WCAG AA. Gold accent used on solid espresso or cream backgrounds, never at small sizes on light cream (always large CTA text or icons).

## Typography

- **Headings / Display / Product names:** Cormorant Garamond, weights 400, 500, 600.
  - Product names are UPPERCASE with `letter-spacing: 0.12em` (Tailwind `tracking-[0.12em]`).
- **Body / UI / Navigation:** Manrope, weights 300, 400, 500, 600.
- **Fallbacks:** system-ui, Georgia, serif for headings; Inter, system-ui, sans-serif for body.

### Type Scale (Tailwind classes)
- Hero display: `text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.95]`
- Section title: `text-3xl md:text-4xl lg:text-5xl font-serif`
- Product name: `text-xs md:text-sm font-sans font-medium uppercase tracking-[0.12em]`
- Body: `text-sm md:text-base font-sans font-light leading-relaxed`
- UI label / nav: `text-xs font-sans uppercase tracking-[0.16em]`
- Price: `text-sm md:text-base font-sans font-medium`

## Spacing & Layout

- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12`
- Section vertical rhythm: `py-16 md:py-24 lg:py-32`
- Card gaps: `gap-4 md:gap-6 lg:gap-8`
- Hairline dividers: `border-warm-gray` at 1px.

## Components

### Buttons
- **Primary (solid accent):** `bg-espresso text-cream hover:bg-charcoal` with `px-8 py-3.5 uppercase text-xs tracking-[0.16em]`.
- **Secondary (outline):** `border border-espresso text-espresso hover:bg-espresso hover:text-cream`.
- **Ghost:** transparent with underline or arrow on hover.
- Transitions: `transition-all duration-300 ease-out`.

### Product Cards
- Image aspect ratio 4:5 (`aspect-[4/5]`).
- Hover reveals alternate angle image with cross-fade.
- Quick "Add to Cart" button appears on hover (desktop) or sits below image (mobile).
- Subtle shadow only on hover: `shadow-sm hover:shadow-md`.

### Forms / Inputs
- `bg-ivory border border-warm-gray rounded-none px-4 py-3 text-espresso placeholder:text-taupe focus:border-gold focus:ring-1 focus:ring-gold`.

### Icons
- Lucide React, stroke width 1.25–1.5, sized 20–24px.

## Imagery

- Full-bleed editorial hero with warm, soft lighting.
- Product photography on dark or neutral warm backgrounds.
- UGC / Reel strip: vertical 9:16 cards, muted overlays, serif caption.
- All images use `data-strk-img` / `data-strk-bg` stock-image integration.

## Animation

- Page load fade-in: `opacity-0 → opacity-100` over 600ms with `translate-y-3`.
- Hover transitions: 300ms ease-out for images, buttons, overlays.
- Sticky nav background transition: 300ms on scroll.
- Mobile menu and cart drawer: translate-x slide 300ms.

## Do's & Don'ts

- DO use the espresso/cream/gold palette consistently.
- DO keep product names uppercase with wide tracking.
- DO use generous whitespace and large product imagery.
- DO rely on `data-strk-img` / `data-strk-bg` for all photography.
- DON'T add discount badges, countdown timers, or loud sale cues.
- DON'T use drop shadows on static cards.
- DON'T use rounded corners on buttons or inputs (keep edges sharp).
