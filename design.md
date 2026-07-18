# Velmora Fine Jewelry — Design System

## Color Palette
- **Surface Primary (background):** `#0f0d0a` — near-black with warm undertone
- **Surface Secondary:** `#1a1714` — dark warm brown
- **Surface Card:** `#1e1b16` — card backgrounds
- **Text Primary:** `#f5efe6` — warm cream
- **Text Secondary:** `#b8a88a` — muted warm
- **Text Muted:** `#6b5f47` — very muted
- **Gold Accent:** `#c9a96e` — primary CTA, links, accents
- **Gold Light:** `#d4b87a` — hover state
- **Gold Dark:** `#b89b5e` — pressed/active
- **Hairline border:** `rgba(201, 169, 110, 0.12)`

## Typography
- **Headings:** Cormorant Garamond, serif — weights 400, 500, 600. Uppercase for product names with wide tracking (0.15em–0.25em)
- **Body / UI:** Inter, sans-serif — weights 300, 400, 500, 600
- **Scale:**
  - Hero heading: `text-5xl md:text-7xl`
  - Section heading: `text-3xl md:text-5xl`
  - Product name: `text-lg` uppercase
  - Body: `text-sm` / `text-base`
  - Caption/label: `text-xs` uppercase tracking-wider

## Layout
- Max content width: `max-w-7xl` (1280px)
- Generous section padding: `py-20 md:py-32`
- Grid gap: `gap-6 md:gap-8`
- Card border-radius: none (sharp edges = premium)

## Components
- **Buttons:** `.btn-gold` (solid gold) and `.btn-outline` (outlined). No border-radius.
- **Cards:** No border-radius. Subtle border `border-brand-800`. Hover: lift + shadow.
- **Dividers:** `.hairline` class
- **Product names:** `.product-name` — serif, uppercase, wide tracking

## Do's
- Use generous whitespace
- Keep transitions subtle (0.3s ease)
- Use gold accent sparingly — CTAs, highlights, links
- Ensure all text passes WCAG AA contrast

## Don'ts
- No border-radius on cards or buttons
- No bright/neon colors
- No cluttered layouts
- No generic e-commerce patterns
