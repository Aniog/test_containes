# Velmora Fine Jewelry — Design System

## Brand Identity
**Mood:** Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.
**Audience:** Women 25–45, gifting and self-purchase, premium-but-accessible ($30–$120).

## Color Palette

### Primary Colors
- **Background (Light):** Warm ivory `#FDFBF7` — main page background
- **Background (Dark):** Deep charcoal `#1A1A1A` — hero sections, footer, overlays
- **Foreground (Light):** Rich black `#111111` — text on light backgrounds
- **Foreground (Dark):** Warm ivory `#FDFBF7` — text on dark backgrounds

### Accent Colors
- **Gold Primary:** Antique gold `#C5A572` — CTAs, accents, hover states
- **Gold Light:** Soft champagne `#D4BC96` — secondary accents, borders
- **Gold Dark:** Deep bronze `#8B7355` — hover states, emphasis

### Neutral Palette
- **Stone 50:** `#FAF9F7` — subtle background sections
- **Stone 100:** `#F5F3F0` — card backgrounds, dividers
- **Stone 200:** `#E8E4DE` — borders, hairlines
- **Stone 300:** `#D1CBC2` — muted text, placeholders
- **Stone 400:** `#A8A196` — secondary text
- **Stone 500:** `#7A7267` — tertiary text
- **Stone 600:** `#5C554C` — emphasis text
- **Stone 700:** `#3D372F` — strong text
- **Stone 800:** `#2A2520` — near-black
- **Stone 900:** `#1A1612` — deepest dark

### Tailwind Color Tokens
```js
colors: {
  background: '#FDFBF7',
  foreground: '#111111',
  card: '#FFFFFF',
  'card-foreground': '#111111',
  primary: '#C5A572',
  'primary-foreground': '#FFFFFF',
  secondary: '#F5F3F0',
  'secondary-foreground': '#111111',
  muted: '#F5F3F0',
  'muted-foreground': '#7A7267',
  accent: '#C5A572',
  'accent-foreground': '#FFFFFF',
  border: '#E8E4DE',
  input: '#E8E4DE',
  ring: '#C5A572',
  gold: '#C5A572',
  'gold-light': '#D4BC96',
  'gold-dark': '#8B7355',
}
```

## Typography

### Fonts
- **Headings:** Cormorant Garamond (elegant serif) — loaded via Google Fonts
- **Body / UI:** Inter (clean sans-serif) — loaded via Google Fonts
- **Product Names:** UPPERCASE with wide letter-spacing (`tracking-[0.2em]`)

### Sizes
- **Hero Title:** `text-5xl md:text-7xl font-light` — Cormorant Garamond
- **Section Title:** `text-3xl md:text-4xl font-light` — Cormorant Garamond
- **Product Name:** `text-sm font-medium uppercase tracking-[0.2em]` — Inter
- **Body Large:** `text-lg leading-relaxed` — Inter
- **Body:** `text-base leading-relaxed` — Inter
- **Small / Caption:** `text-xs uppercase tracking-wider` — Inter

## Spacing & Layout
- **Section Padding:** `py-16 md:py-24 px-6 md:px-12`
- **Container Max Width:** `max-w-7xl mx-auto`
- **Card Padding:** `p-6 md:p-8`
- **Gap (Grid):** `gap-6 md:gap-8`
- **Dividers:** `border-t border-stone-200` (hairline, 1px)

## Components

### Buttons
- **Primary:** Solid gold background, white text, subtle shadow
  - `bg-gold text-white hover:bg-gold-dark transition-all duration-300`
  - Rounded: `rounded-none` or `rounded-sm` for a more editorial feel
  - Size: `px-8 py-3 text-sm uppercase tracking-wider`
- **Secondary (Outline):** Transparent with gold border
  - `border border-gold text-gold hover:bg-gold hover:text-white`
- **Ghost:** No border, subtle hover
  - `text-foreground hover:text-gold transition-colors`

### Cards (Product)
- Clean white background with subtle shadow
- `bg-white shadow-sm hover:shadow-md transition-all duration-300`
- Image aspect ratio: 4:5 for vertical product shots
- Hover: show second image, quick add button slides up
- Typography: Product name in uppercase tracking-wider, price in gold

### Navigation
- **Sticky:** Transparent over hero, solid `bg-background` on scroll
- **Height:** `h-16 md:h-20`
- **Logo:** Serif "VELMORA" in Cormorant Garamond
- **Links:** Clean uppercase tracking-wider, `text-xs font-medium`

### Hero Section
- Full-bleed image with overlay gradient
- Content: Left-aligned with generous padding
- Headline: Cormorant Garamond, large, light weight
- CTA: Solid gold button

### Trust Bar
- Thin strip, slightly different background (stone-50)
- Icons inline with text, centered
- `text-xs uppercase tracking-wider text-stone-500`

### Product Grid
- 2 cols mobile, 3 cols tablet, 4-5 cols desktop
- Clean white cards with subtle hover elevation
- Image-first design

### Footer
- Dark background (`bg-stone-900`)
- Multi-column layout: Logo, Shop, Help, Company
- Social icons, payment icons
- Warm ivory text on dark background

## Animations & Transitions
- **Page transitions:** Subtle fade
- **Hover effects:** `transition-all duration-300 ease-in-out`
- **Cart drawer:** Slide in from right, backdrop fade
- **Scroll reveals:** Fade up with slight delay
- **Image hover:** Scale slightly (`hover:scale-[1.02]`)

## Image Guidelines
- Warm gold jewelry on dark/neutral backgrounds
- Use stock image system with `data-strk-img` attributes
- Product images: 4:5 aspect ratio
- Hero images: 16:9 or full-bleed
- UGC/Reel images: 9:16 vertical

## Do's
- Use generous whitespace
- Maintain warm, editorial feel
- Keep contrast strong for accessibility
- Use subtle shadows for depth
- Hairline dividers for visual separation

## Don'ts
- Don't use bright, saturated colors
- Don't use heavy shadows or borders
- Don't use generic e-commerce patterns
- Don't overcrowd sections
- Don't use multiple font families beyond specified
