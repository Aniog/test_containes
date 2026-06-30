# Velmora Fine Jewelry — Design System

## Visual Identity
- Mood: quiet luxury, warm, editorial. Premium demi-fine jewelry.
- NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Background (cream)**: `#faf8f5` — main page background
- **Surface (white)**: `#ffffff` — cards, modals, overlays
- **Text (charcoal)**: `#1a1a1a` — primary text, headings
- **Text (muted)**: `#6b6560` — secondary text, descriptions
- **Text (light)**: `#9a9490` — placeholders, subtle labels
- **Accent (gold)**: `#c9a96e` — CTAs, links, highlights
- **Accent (gold hover)**: `#b8944f` — hover state for gold
- **Border (hairline)**: `#e8e2db` — dividers, card borders
- **Border (dark)**: `#d4c5b2` — stronger borders
- **Star (rating)**: `#c9a96e` — gold stars
- **Success**: `#4a7c59` — subtle green for confirmations
- **Error**: `#8b3a3a` — muted red for errors

## Typography
- **Headings / Brand**: Cormorant Garamond (serif)
  - Logo: 28px, weight 400, letter-spacing 0.15em
  - H1: 48–64px, weight 300–400
  - H2: 32–40px, weight 400
  - H3: 20–24px, weight 500
- **Body / UI**: Inter (sans-serif)
  - Body: 15–16px, weight 400
  - Small: 13px, weight 400
  - Button: 13px, weight 500, letter-spacing 0.08em, uppercase
- **Product Names**: Cormorant Garamond, UPPERCASE, letter-spacing 0.12em

## Spacing
- Use Tailwind spacing scale
- Section padding: py-20 md:py-28
- Card gap: gap-6 md:gap-8
- Generous whitespace between sections

## Components
- **Buttons**: 
  - Primary: bg-[#1a1a1a] text-white, hover:bg-[#333]
  - Accent: bg-[#c9a96e] text-white, hover:bg-[#b8944f]
  - Outline: border border-[#1a1a1a] text-[#1a1a1a], hover:bg-[#1a1a1a] hover:text-white
  - All buttons: uppercase, tracking-wider, text-xs, py-3 px-8
- **Cards**: bg-white, subtle border border-[#e8e2db], hover:shadow-lg transition
- **Dividers**: h-px bg-[#e8e2db]
- **Inputs**: border border-[#d4c5b2], focus:border-[#c9a96e], bg-transparent

## Animations
- Hover transitions: transition-all duration-300 ease-out
- Fade in: opacity 0→1, translateY 10px→0
- Cart drawer: slide-in from right
- Image hover: scale 1.02, opacity shift for secondary image

## Do's
- Use generous whitespace
- Keep typography elegant and restrained
- Use gold accent sparingly for emphasis
- Large editorial imagery
- Thin hairline dividers
- Subtle hover effects

## Don'ts
- No bright/neon colors
- No heavy shadows
- No rounded-full buttons (use slight rounding or sharp)
- No discount badges or sale stickers
- No loud gradients
- No emoji or playful icons
