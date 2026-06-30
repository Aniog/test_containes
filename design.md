# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Base background:** `cream` `#FAF6F0` (warm off-white) — primary page background
- **Deep base:** `espresso` `#1A1512` (warm near-black) — hero overlays, footer, dark sections
- **Accent (metallic gold):** `gold` `#B08D57` — buttons, links, hairline accents, CTAs
  - `gold-light` `#C9A876` — hover states
  - `gold-soft` `#E8D9BE` — soft fills, badges
- **Text:** `ink` `#2B231D` on light; `cream` `#FAF6F0` on dark
- **Neutrals:** `sand` `#F0E9DF`, `stone` `#E5DDD1` — section dividers, cards

## Typography
- **Headings & product names:** Cormorant Garamond (serif), weights 300–600
- **Body & UI:** Inter (sans-serif), weights 300–600
- **Product names:** UPPERCASE with wide letter-spacing (`tracking-widest` / `tracking-ultra`)
- **Eyebrow labels:** UPPERCASE, `text-xs tracking-ultra`, gold color
- Hero headlines: serif, large, light weight, generous line-height

## Spacing & Layout
- Generous whitespace. Section padding `py-20 md:py-28`
- Max content width `max-w-7xl mx-auto px-6`
- Thin hairline dividers: `border-t border-espresso/10` or `border-gold/30`

## Components
- **Buttons (premium):**
  - Solid accent: `bg-gold text-cream hover:bg-gold-dark`, uppercase, tracking-widest, text-xs, py-4 px-8
  - Outlined: `border border-espresso text-espresso hover:bg-espresso hover:text-cream`
- **Cards:** soft shadow `shadow-sm`, hover lift `hover:-translate-y-1 transition`, rounded-none (sharp editorial edges) or `rounded-sm`
- **Hairline borders** preferred over heavy borders

## Do's
- Use serif for all headlines and product names
- Keep accent gold restrained — use for CTAs and small details only
- Large editorial imagery with warm tones
- Subtle hover transitions (0.3s ease)
- Soft shadows, never harsh

## Don'ts
- No bright/saturated colors
- No heavy borders or thick shadows
- No generic e-commerce feel (no badges like "SALE!" in red)
- No rounded-full buttons (keep editorial sharpness)
- Don't mix serif and sans for the same role
