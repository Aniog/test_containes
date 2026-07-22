# Velmora Fine Jewelry — Design System

## Visual Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry. No loud discounts, no generic e-commerce. The palette is built around a deep, refined base that makes gold jewelry glow, paired with warm ivory surfaces and a single muted rose-gold accent.

## Color Palette

### Brand Colors
- `brand-charcoal`   `#1A1A1A`  — Primary text, footer, strong UI surfaces
- `brand-warm-black` `#151210`  — Deepest backgrounds (hero overlays, dark sections)
- `brand-ivory`      `#F8F5F2`  — Primary backgrounds, cards, light surfaces
- `brand-cream`      `#EDE8E3`  — Secondary backgrounds, hover states
- `brand-taupe`      `#A69B91`  — Muted text, borders, secondary UI
- `brand-rose`       `#C9A89A`  — Accent color (buttons, highlights, focus)
- `brand-rose-dark`  `#B08472`  — Accent hover / active
- `brand-gold`       `#C5A065`  — Metallic highlights, star ratings, premium accents

### Semantic Pairings
- Light surface text: `brand-charcoal` on `brand-ivory` / `brand-cream`
- Dark surface text: `brand-ivory` on `brand-charcoal` / `brand-warm-black`
- Accent text: `brand-rose-dark` or `brand-gold`
- Muted text: `brand-taupe`

## Typography
- Headings / product names / logo: `Cormorant Garamond`, serif
  - H1: 48–72px, weight 500, line-height 1.05
  - H2: 32–48px, weight 500, line-height 1.1
  - Product names: uppercase, `tracking-[0.2em]`, text-sm to text-base
- Body / UI: `Inter`, sans-serif
  - Body: 16px, weight 400, line-height 1.6
  - UI labels / buttons: 12–14px, weight 500, uppercase, `tracking-widest`

## Spacing & Layout
- Max container width: `1400px`
- Section vertical padding: `py-20` desktop, `py-14` mobile
- Grid gap: `gap-6` to `gap-8`
- Hairline divider: `h-px bg-brand-charcoal/10`
- Border radius: buttons `rounded-none` (sharp luxury), cards `rounded-sm` (2px)

## Components

### Buttons
- Primary: solid `brand-rose` text white, hover `brand-rose-dark`, uppercase tracking-widest, rounded-none, px-8 py-3
- Secondary / outline: border `brand-charcoal`, text `brand-charcoal`, hover:bg-brand-charcoal hover:text-brand-ivory
- Ghost: transparent, underline on hover

### Cards
- Product card: white or ivory background, subtle shadow on hover, image swap on hover
- Category tile: full-bleed image, dark overlay on hover, centered label

### Inputs
- Border-bottom only, `border-brand-charcoal/20`, focus:border-brand-rose, bg-transparent, placeholder text-brand-taupe

## Motion
- Default transition: `transition-all duration-300 ease-out`
- Image hover swap: opacity crossfade 300ms
- Scroll reveals: opacity + translateY, 500ms, ease-out
- Sticky nav: background color transition 300ms

## Image Treatment
- Warm gold jewelry on dark or neutral backgrounds
- Editorial crops, soft natural light, generous negative space
- Use `data-strk-img` placeholders for runtime stock-image population

## Do's and Don'ts
- DO use generous whitespace and large imagery
- DO keep product names uppercase with wide letter-spacing
- DO use thin hairline dividers to separate sections
- DON'T use bright primary colors, neon accents, or discount-style badges
- DON'T use heavy shadows or cluttered layouts
- DON'T use generic ecommerce iconography without refinement
