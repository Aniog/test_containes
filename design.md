# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Base (deep warm charcoal):** `#1C1917` (stone-950 equivalent) — primary background for hero/dark sections
- **Cream (warm off-white):** `#FAF7F2` — primary light background, page base
- **Gold Accent:** `#C9A96E` — primary accent, CTAs, highlights, hover states
- **Gold Light:** `#D4B87A` — hover state for gold buttons
- **Text Dark:** `#1C1917` — headings, body on light
- **Text Muted:** `#78716C` — secondary text, captions (stone-500)
- **Text Light:** `#FAF7F2` — text on dark backgrounds
- **Border:** `#E7E5E4` — hairline dividers (stone-200)
- **Card BG:** `#FFFFFF` — product cards on cream

## Typography
- **Headings / Product Names:** Cormorant Garamond, serif. Uppercase with wide letter-spacing for product names.
  - H1: `text-4xl md:text-5xl lg:text-6xl font-light tracking-wide`
  - H2: `text-3xl md:text-4xl font-light tracking-wide`
  - H3 (product name): `text-lg font-medium uppercase tracking-[0.15em]`
- **Body / UI:** Inter, sans-serif.
  - Body: `text-sm font-normal`
  - Small/caption: `text-xs font-normal tracking-wide uppercase`
  - Button: `text-xs font-semibold uppercase tracking-[0.15em]`

## Spacing & Layout
- Generous whitespace. Sections: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-6 lg:px-8`
- Hairline dividers: `border-t border-stone-200`

## Buttons
- **Primary (accent):** `bg-gold text-white hover:bg-gold-light` — solid gold, uppercase, tracking-wide, rounded-none
- **Secondary (outlined):** `border border-gold text-gold hover:bg-gold hover:text-white` — outlined gold
- **Dark:** `bg-stone-950 text-cream hover:bg-stone-800`
- All buttons: `px-8 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300`

## Cards
- Product cards: white bg, subtle shadow on hover, no border radius (sharp corners for editorial feel)
- Hover: second image fade-in, slight scale

## Images
- Editorial, warm-lit, dark/moody backgrounds for hero
- Product shots on neutral/warm dark backgrounds
- Generous aspect ratios, no cropping

## Animations
- Subtle, smooth transitions (300ms ease)
- Hover: opacity changes, gentle transforms
- No bouncy or playful animations

## Do's
- Use generous whitespace
- Use serif for all headings and product names
- Use uppercase tracking for product names and CTAs
- Keep color palette restrained — cream, charcoal, gold
- Ensure strong contrast for accessibility

## Don'ts
- Don't use bright/saturated colors
- Don't use rounded buttons or cards (keep editorial/sharp)
- Don't use playful or bouncy animations
- Don't mix too many font weights
- Don't use generic e-commerce patterns (badges, countdown timers, etc.)
