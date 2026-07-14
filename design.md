# Velmora Fine Jewelry — Design System

## Visual Direction
**Mood:** Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Primary Colors
- **Deep Charcoal (base):** `#1C1917` — primary background for hero/dark sections, nav solid state
- **Warm Cream (light base):** `#FAF7F2` — main page background, card backgrounds
- **Rich Gold (accent):** `#B8860B` — CTAs, accent borders, hover states, active states
- **Soft Gold (secondary accent):** `#D4A843` — lighter gold for hover, highlights

### Neutral Colors
- **Stone-900:** `#1C1917` — deep text, dark backgrounds
- **Stone-800:** `#292524` — secondary dark text
- **Stone-600:** `#57534E` — muted text, captions
- **Stone-400:** `#A8A29E` — disabled states, dividers
- **Stone-200:** `#E7E5E4` — light borders, dividers
- **Stone-100:** `#F5F5F4` — subtle backgrounds
- **Cream-50:** `#FAF7F2` — warm light background

### Semantic Colors
- **Success:** `#4A7C59` — muted sage green for confirmations
- **Error:** `#9B3333` — muted red for errors

## Typography

### Heading Font: Cormorant Garamond
- **Usage:** Logo, page headings, product names, section titles, editorial text
- **Weights:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Product names:** UPPERCASE, letter-spacing: 0.15em

### Body Font: Inter
- **Usage:** Body text, navigation, buttons, form labels, UI elements, prices
- **Weights:** 300 (light), 400 (regular), 500 (medium), 600 (semibold)
- **Button text:** UPPERCASE, letter-spacing: 0.1em, font-weight: 500

### Type Scale
- **Display/Hero:** Cormorant Garamond 600, 48–72px, tracking -0.02em
- **H1:** Cormorant Garamond 600, 36–48px, tracking -0.01em
- **H2:** Cormorant Garamond 500, 28–36px, tracking 0
- **H3:** Cormorant Garamond 500, 22–28px, tracking 0
- **Product Name:** Cormorant Garamond 500, 16–18px, UPPERCASE, tracking 0.15em
- **Body Large:** Inter 400, 18px, line-height 1.7
- **Body:** Inter 400, 15px, line-height 1.6
- **Caption:** Inter 400, 13px, tracking 0.02em
- **Button:** Inter 500, 13px, UPPERCASE, tracking 0.1em
- **Price:** Inter 500, 16px

## Spacing & Layout
- **Section padding:** 80–120px vertical (desktop), 48–64px (mobile)
- **Container max-width:** 1280px, centered
- **Grid gap:** 24px (product cards), 32px (section grids)
- **Card padding:** 0 (image-first cards), 24px (content cards)
- **Generous whitespace** between all sections and elements

## Components

### Buttons
- **Primary (accent):** bg-rich-gold, text-white, uppercase, tracking-wide, px-8 py-3, hover:bg-soft-gold, transition 300ms
- **Secondary (outlined):** border-rich-gold, text-rich-gold, uppercase, tracking-wide, px-8 py-3, hover:bg-rich-gold hover:text-white, transition 300ms
- **Ghost:** text-stone-600, uppercase, tracking-wide, hover:text-rich-gold, transition 200ms

### Cards (Product)
- Clean white/cream background
- Image takes full card width, no border-radius on image
- Subtle shadow on hover: shadow-md
- Product name in serif uppercase with wide tracking
- Price in sans-serif medium weight
- Hover: second image fade-in, "Add to Cart" button slides up

### Dividers
- Hairline: 1px solid stone-200
- Accent divider: 1px solid rich-gold at 30% opacity

### Navigation
- Transparent over hero, solid deep-charcoal on scroll
- Logo: Cormorant Garamond 600, UPPERCASE, tracking 0.25em
- Links: Inter 400, 14px, UPPERCASE, tracking 0.12em
- Transition: 300ms ease

### Cart Drawer
- Slides in from right
- Semi-transparent overlay
- Cream background
- Product items with image thumbnail, name, variant, quantity controls, price

## Images
- Warm-lit, editorial style
- Dark/neutral backgrounds for product shots
- Close-up macro shots showing gold texture
- Lifestyle shots on models with warm lighting
- Aspect ratios: 3x4 for product cards, 16x9 for hero, 9x16 for UGC/reels

## Animations
- **Hover transitions:** 300ms ease
- **Page transitions:** subtle fade 200ms
- **Scroll reveals:** gentle translateY(20px) → 0, opacity 0 → 1, 600ms ease-out
- **Cart drawer:** slide from right, 300ms ease
- **Image hover:** crossfade 400ms ease
- **No bouncy or playful animations** — everything smooth and restrained

## Do's
- Use generous whitespace
- Keep typography hierarchy strict
- Use warm, muted tones
- Maintain consistent spacing rhythm
- Use subtle, refined transitions
- Ensure strong contrast for accessibility

## Don'ts
- Don't use bright/saturated colors
- Don't use playful or bouncy animations
- Don't crowd elements — let them breathe
- Don't use generic e-commerce patterns (badges, countdown timers, aggressive CTAs)
- Don't use more than 2 typefaces
- Don't use rounded/bubbly UI elements
