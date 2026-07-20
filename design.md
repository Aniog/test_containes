# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `cream` → `#FAF7F2` — warm off-white base
- **Foreground (charcoal):** `charcoal` → `#1C1917` — near-black for text
- **Accent (gold):** `gold` → `#B8860B` — warm dark gold for CTAs and accents
- **Accent hover:** `gold-dark` → `#96700A` — deeper gold for hover states
- **Muted:** `taupe` → `#E8E2DA` — soft warm gray for borders, dividers, cards
- **Muted foreground:** `stone` → `#78716C` — medium warm gray for secondary text
- **Surface:** `ivory` → `#F5F0E8` — slightly darker cream for card backgrounds

## Typography
- **Headings / Product names:** `Cormorant Garamond` (serif), weight 300–600
- **Body / UI:** `Inter` (sans-serif), weight 300–500
- **Product names:** UPPERCASE, letter-spacing `0.15em`
- **Section headings:** Serif, normal case or uppercase depending on context

### Tailwind font classes
- `font-serif` → Cormorant Garamond
- `font-sans` → Inter

## Spacing & Layout
- Generous whitespace: sections use `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card padding: `p-4 md:p-6`
- Grid gaps: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline dividers: `border-taupe` with `border-t` (1px)
- Card borders: `border border-taupe`
- Border radius: minimal — `rounded-none` or `rounded-sm` for premium feel

## Buttons
- Primary: `bg-gold text-cream hover:bg-gold-dark` — solid accent
- Secondary/Outlined: `border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream`
- Padding: `px-8 py-3` for standard, `px-10 py-4` for hero CTA
- Text: uppercase, tracking-wider, text-sm, font-sans font-medium
- Transitions: `transition-all duration-300`

## Shadows & Effects
- Soft shadows: `shadow-sm` or custom `shadow-[0_2px_8px_rgba(0,0,0,0.04)]`
- Hover transitions: `transition-all duration-300 ease-in-out`
- Image hover: subtle scale `hover:scale-105` with overflow-hidden container

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Subtle hover transitions (opacity, scale, translate)
- Product names always uppercase with wide letter-spacing

## Don'ts
- No rounded corners on product cards (use sharp or barely rounded)
- No bright/saturated colors
- No heavy drop shadows
- No busy patterns or gradients
- No discount-style badges or loud sale banners
