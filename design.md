# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `#FAF7F2` — warm off-white for page backgrounds
- **Surface (ivory):** `#F5F0E8` — slightly deeper warm tone for cards/sections
- **Foreground (charcoal):** `#1A1A1A` — near-black for body text
- **Heading (deep brown):** `#2C2420` — rich dark brown for headings
- **Accent (antique gold):** `#B8860B` — warm gold for CTAs, links, highlights
- **Accent hover:** `#9A7209` — darker gold on hover
- **Muted text:** `#6B5E54` — warm gray-brown for secondary text
- **Border/divider:** `#E8E0D4` — subtle warm hairline dividers
- **Dark section:** `#2C2420` — deep brown for contrast sections (newsletter, footer)

## Typography
- **Headings / Product names:** `Cormorant Garamond`, serif — elegant, editorial
- **Body / UI:** `Inter`, sans-serif — clean, modern, readable
- **Product names:** UPPERCASE, letter-spacing: 0.12em
- **Heading sizes:** Hero: text-5xl md:text-7xl, Section: text-3xl md:text-4xl
- **Body:** text-base (16px), leading-relaxed

## Spacing & Layout
- Generous whitespace: sections py-16 md:py-24
- Container max-w-7xl mx-auto px-4 md:px-8
- Cards: rounded-none or rounded-sm (sharp, editorial)
- Thin hairline dividers: border-t border-border

## Components
- **Buttons:** bg-accent text-white px-8 py-3 uppercase tracking-widest text-sm font-sans hover:bg-accent-hover transition-colors
- **Outlined buttons:** border border-accent text-accent hover:bg-accent hover:text-white
- **Cards:** No heavy shadows. Subtle hover scale (scale-[1.02]) with transition
- **Images:** object-cover, aspect ratios maintained
- **Accordions:** Minimal, hairline borders, serif titles

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use serif for emotional/brand text, sans for functional UI
- Subtle transitions (duration-300)
- Maintain warm, cohesive tone throughout

## Don'ts
- No heavy drop shadows
- No rounded-lg or pill shapes (except variant selectors)
- No bright/neon colors
- No cluttered layouts
- No generic e-commerce feel
- No dark mode (this is a warm, light brand)
