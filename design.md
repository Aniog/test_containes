# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `cream` → `#FAF7F2` — warm off-white page base
- **Foreground (charcoal):** `charcoal` → `#1C1917` — primary text
- **Accent (gold):** `gold` → `#B8860B` — CTA buttons, highlights, hover states
- **Accent hover:** `gold-dark` → `#996F09` — darker gold for hover
- **Muted:** `taupe` → `#E8E2DA` — borders, dividers, subtle backgrounds
- **Muted foreground:** `warm-gray` → `#78716C` — secondary text, captions
- **Surface:** `ivory` → `#FFFDF9` — cards, elevated surfaces
- **Dark surface:** `espresso` → `#292524` — dark sections (newsletter, footer)

## Typography
- **Headings / Product names:** `Cormorant Garamond` (serif), weights 400/500/600
- **Body / UI:** `Inter` (sans-serif), weights 300/400/500/600
- **Product names:** UPPERCASE, letter-spacing `0.15em`
- **Section headings:** Serif, normal case or uppercase depending on context

## Tailwind Usage
- Spacing: generous — `py-16 md:py-24`, `px-6 md:px-12 lg:px-20`
- Borders: `border-taupe` with `border` (1px hairline)
- Shadows: `shadow-sm` only, never heavy
- Radius: `rounded-none` for editorial feel, `rounded-sm` for buttons
- Transitions: `transition-all duration-300 ease-in-out`

## Do's
- Use large whitespace between sections
- Thin hairline dividers between sections
- Subtle hover transitions (opacity, translate-y)
- Solid gold accent buttons for primary CTA
- Outlined buttons for secondary actions
- Large editorial imagery

## Don'ts
- No heavy drop shadows
- No rounded corners on cards (keep editorial/angular)
- No bright/neon colors
- No cluttered layouts
- No generic e-commerce feel
- No discount badges or sale stickers
