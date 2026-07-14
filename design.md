# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Background (cream):** `#FAF7F2` — warm off-white, flatters gold
- **Foreground (charcoal):** `#1A1A1A` — near-black for body text
- **Accent (burnished gold):** `#B8860B` — warm metallic gold for CTAs, highlights
- **Accent hover:** `#9A7209` — darker gold on hover
- **Muted (warm gray):** `#6B6560` — secondary text, captions
- **Muted background:** `#F0EBE3` — subtle section backgrounds
- **Border:** `#E8E2D9` — hairline dividers, card borders
- **Dark surface:** `#1A1A1A` — footer, dark sections
- **Dark surface text:** `#FAF7F2` — text on dark surfaces

## Typography
- **Headings / Product names:** `Cormorant Garamond`, serif. Weight 300–600.
- **Body / UI:** `Inter`, sans-serif. Weight 300–500.
- **Product names:** UPPERCASE, letter-spacing `0.15em`
- **Section headings:** Title case or uppercase, letter-spacing `0.05em`

### Scale (Tailwind)
- Hero headline: `text-5xl md:text-7xl font-light`
- Section title: `text-3xl md:text-4xl font-light`
- Product name: `text-sm uppercase tracking-widest`
- Body: `text-base font-light`
- Small/caption: `text-xs tracking-wide`

## Spacing
- Generous whitespace: sections use `py-16 md:py-24`
- Cards: `p-0` (image bleeds) or `p-6` for text cards
- Grid gaps: `gap-4 md:gap-6`

## Components
- **Buttons:** Solid accent background with cream text, or outlined with accent border. Rounded `rounded-none` (sharp edges for luxury). Padding `px-8 py-3`. Uppercase, tracking-wide, text-sm.
- **Cards:** No border-radius, thin border or no border. Subtle shadow on hover.
- **Dividers:** 1px `border-border` color, full-width or contained.
- **Hover transitions:** `transition-all duration-300 ease-in-out`
- **Images:** Object-cover, no border-radius for editorial feel.

## Do's
- Use generous whitespace
- Keep typography elegant and restrained
- Use gold accent sparingly — CTAs, stars, highlights
- Large editorial imagery
- Thin hairline dividers between sections
- Subtle hover states (opacity, translate, scale)

## Don'ts
- No rounded corners on buttons or cards (luxury = sharp)
- No bright/saturated colors
- No heavy shadows
- No cluttered layouts
- No generic stock photo feel — warm, editorial lighting
- No discount/sale badges or loud promotional elements
