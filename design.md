# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `cream` → `#FAF7F2` — warm off-white page base
- **Foreground (charcoal):** `charcoal` → `#1C1917` — primary text
- **Accent (gold):** `gold` → `#B8860B` — CTA buttons, highlights, metallic feel
- **Accent hover:** `gold-dark` → `#996F09`
- **Muted:** `taupe` → `#E8E2DA` — borders, dividers, subtle backgrounds
- **Muted foreground:** `stone` → `#78716C` — secondary text, captions
- **Card surface:** `ivory` → `#FFFDF9` — card backgrounds
- **Dark surface:** `espresso` → `#292524` — footer, dark sections

## Typography
- **Headings / Product names:** `Cormorant Garamond` (serif), weight 300–600
- **Body / UI:** `Inter` (sans-serif), weight 300–500
- **Product names:** UPPERCASE, letter-spacing `0.15em`
- **Section headings:** Sentence case or Title Case, serif, weight 300 (light)

### Scale (Tailwind)
- Hero headline: `text-5xl md:text-7xl font-light`
- Section title: `text-3xl md:text-4xl font-light`
- Product name: `text-sm uppercase tracking-widest`
- Body: `text-base font-light`
- Caption/small: `text-xs tracking-wide`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: no heavy borders, subtle `shadow-sm` or `border border-taupe`
- Dividers: `border-t border-taupe` (thin hairline)

## Buttons
- Primary: `bg-gold text-cream px-8 py-3 text-sm uppercase tracking-widest hover:bg-gold-dark transition-colors`
- Secondary/outlined: `border border-charcoal text-charcoal px-8 py-3 text-sm uppercase tracking-widest hover:bg-charcoal hover:text-cream transition-colors`

## Interactions
- Hover transitions: `transition-all duration-300 ease-in-out`
- Image hover: subtle scale `hover:scale-105` with overflow hidden
- Links: no underline by default, underline on hover or subtle opacity change

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use serif for emotional/brand text
- Keep UI elements minimal and refined

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded-full buttons (use slight rounding `rounded-sm` or none)
- No cluttered layouts
- No generic stock photo feel — warm, styled, editorial
