# Velmora Fine Jewelry — Design System

## Visual Direction
**Mood:** Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Primary Colors
- **Deep Charcoal** (#1C1917) — Main background for hero/dark sections, nav solid state. Tailwind: `stone-900`
- **Warm Cream** (#FAF7F2) — Primary page background, light sections. Tailwind: custom `cream`
- **Rich Gold** (#B8860B) — Accent color for CTAs, highlights, hover states. Tailwind: custom `gold`
- **Soft Gold** (#D4A843) — Lighter gold for borders, subtle accents. Tailwind: custom `gold-light`

### Neutral Colors
- **Warm White** (#FEFCF9) — Card backgrounds, overlays. Tailwind: custom `warm-white`
- **Stone** (#78716C) — Muted text, secondary info. Tailwind: `stone-500`
- **Light Stone** (#E7E5E4) — Hairline dividers, borders. Tailwind: `stone-200`
- **Dark Stone** (#292524) — Body text on light backgrounds. Tailwind: `stone-800`

### Semantic Colors
- **Success** — muted green for confirmations
- **Error** — muted red for errors

## Typography

### Headings & Product Names
- **Font:** Cormorant Garamond (Google Fonts, weights: 400, 500, 600, 700)
- **Style:** UPPERCASE with wide letter-spacing for product names and section headings
- **Sizes:** 
  - Hero headline: `text-5xl md:text-7xl` tracking-widest
  - Section headings: `text-3xl md:text-4xl` tracking-wide
  - Product names: `text-lg` tracking-widest uppercase

### Body & UI
- **Font:** Inter (Google Fonts, weights: 300, 400, 500, 600)
- **Style:** Clean, minimal, generous line-height
- **Sizes:**
  - Body: `text-sm` to `text-base`
  - Labels/buttons: `text-xs` to `text-sm` tracking-wide uppercase
  - Price: `text-base` font-medium

## Spacing & Layout
- Generous whitespace — sections padded `py-20 md:py-28`
- Content max-width: `max-w-7xl` with `px-4 md:px-8`
- Product grid gap: `gap-6 md:gap-8`
- Hairline dividers: `border-t border-stone-200`

## Buttons
- **Primary CTA:** Solid gold background (#B8860B), warm-white text, uppercase, tracking-widest, text-xs, py-3 px-8, rounded-none (sharp corners for editorial feel), hover: darker gold
- **Secondary:** Outlined — gold border, gold text, transparent bg, same sizing, hover: gold bg + warm-white text
- **Pill buttons (variant selector):** Small, rounded-full, border stone-300, selected: gold border + gold text

## Cards
- Product cards: No visible border, subtle shadow on hover, image aspect 3:4
- Hover: second image fade-in, "Add to Cart" overlay slides up
- Background: warm-white or transparent

## Animations
- Subtle, smooth transitions: `transition-all duration-300 ease-out`
- Hover scale on images: `hover:scale-[1.02]`
- Nav: transparent to solid on scroll with backdrop blur
- Cart drawer: slide in from right

## Do's
- Use generous whitespace
- Use serif for all headings and product names
- Use uppercase + wide tracking for product names
- Keep gold as the single accent color
- Use warm, neutral backgrounds
- Ensure strong text contrast (dark text on light, light text on dark)

## Don'ts
- Don't use bright/saturated colors
- Don't use rounded buttons (keep sharp/editorial)
- Don't use heavy shadows
- Don't mix too many font styles
- Don't use generic e-commerce patterns (no star-burst badges, no aggressive sale banners)
- Don't use light text on light backgrounds or dark text on dark backgrounds
