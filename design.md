# Velmora Fine Jewelry — Design System

## Brand
Quiet luxury demi-fine gold jewelry. Warm, editorial, premium-but-accessible. Target: women 25–45.

## Color Palette
- **Base (page bg)**: Warm Cream `#FBF7F4` — site background
- **Surface (cards)**: Soft White `#FFFDFB` — product cards, elevated surfaces
- **Foreground (text)**: Espresso `#2C2416` — primary text
- **Muted Text**: Warm Taupe `#8B7E6E` — secondary text, placeholders
- **Accent**: Burnished Gold `#B8975A` — buttons, links, hover states, dividers
- **Accent Dark**: Deep Gold `#9C7D40` — button hover, active states
- **Border**: Warm Sand `#E8DDD0` — hairline dividers, card borders
- **Muted BG**: Clay `#F0EBE3` — subtle section backgrounds, newsletter block
- **Dark Surface**: Espresso `#2C2416` — footer, dark sections (text inverts to cream)

## Typography
- **Headings / Product Names**: Playfair Display (serif), UPPERCASE with tracking-[0.15em] to tracking-[0.25em]
- **Body / UI**: Inter (sans-serif), 400 regular, 500 medium, 600 semibold
- **Scale**: text-xs (12px), text-sm (14px), text-base (16px), text-lg (18px), text-xl (20px), text-2xl (24px), text-3xl (30px), text-4xl (36px), text-5xl (48px)

## Spacing
- Generous whitespace: section padding py-20 to py-28
- Cards: p-4 to p-6
- Hairline dividers: border-t border-warm-sand
- Max content width: max-w-7xl (1280px), centered

## Components
- Buttons: rounded-none (sharp, architectural), uppercase tracking-wide, px-8 py-3
  - Primary: bg-accent text-white hover:bg-accent-dark
  - Outline: border border-accent text-accent hover:bg-accent hover:text-white
- Cards: bg-surface border border-warm-sand, subtle shadow-sm hover:shadow-md transition
- Inputs: border-warm-sand bg-white focus:border-accent focus:ring-1 focus:ring-accent rounded-none
- Badges/Tags: pill shape, text-xs uppercase tracking-wider

## Images
- Warm-lit gold jewelry on dark/neutral backgrounds
- Editorial, close-up, skin-tone flattering
- Large hero imagery, 4:3 or 3:4 product shots

## Animation
- Subtle transitions: transition-all duration-300
- Hover: gentle scale (scale-[1.02]), shadow lift
- Fade-in on scroll (optional, keep subtle)

## DO
- UPPERCASE product names with wide letter-spacing
- Generous whitespace, breathing room
- Warm, golden accent sparingly — no more than 2-3 accent elements per viewport
- Hairline dividers (border-warm-sand, 1px)
- Editorial serif for headlines, clean sans for everything else

## DON'T
- No bright/discount colors (no red badges, no neon, no flash sales aesthetic)
- No heavy box shadows
- No rounded buttons or cards
- No gradient backgrounds
- No more than 3 font sizes visible at once
