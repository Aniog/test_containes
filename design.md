# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `cream` → `#FAF7F2` — warm off-white page base
- **Foreground (charcoal):** `charcoal` → `#1A1A1A` — primary text
- **Accent (gold):** `gold` → `#B8860B` — warm dark gold for CTAs, accents, hover
- **Accent light:** `gold-light` → `#D4A853` — lighter gold for borders, subtle highlights
- **Muted:** `muted` → `#F0EBE3` — card backgrounds, section alternates
- **Muted foreground:** `muted-fg` → `#6B6560` — secondary text, captions
- **Dark surface:** `dark` → `#1A1A1A` — footer, dark sections
- **Dark muted:** `dark-muted` → `#2A2A2A` — dark section cards

## Typography
- **Headings / Product names:** `Cormorant Garamond`, serif — elegant, editorial
- **Body / UI:** `Inter`, sans-serif — clean, modern, readable
- **Product names:** UPPERCASE, letter-spacing: 0.1em–0.15em
- **Heading sizes:** Hero: text-5xl md:text-7xl; Section: text-3xl md:text-4xl; Card: text-lg

## Spacing & Layout
- Generous whitespace: sections py-16 md:py-24
- Container max-w-7xl mx-auto px-4 md:px-8
- Cards: rounded-none or rounded-sm (sharp, editorial)
- Thin hairline dividers: border-gold-light/30

## Components
- **Buttons (primary):** bg-gold text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-gold-light transition-colors
- **Buttons (outline):** border border-gold text-gold px-8 py-3 uppercase tracking-widest text-sm hover:bg-gold hover:text-white transition-colors
- **Cards:** no border-radius, subtle shadow-sm on hover, transition-shadow
- **Hover transitions:** duration-300, ease-in-out
- **Dividers:** h-px bg-gold-light/30

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use serif for emotional/brand text
- Use sans-serif for functional UI
- Maintain warm, golden tone throughout

## Don'ts
- No bright/neon colors
- No rounded-lg or pill shapes (except variant selectors)
- No heavy drop shadows
- No cluttered layouts
- No discount/sale-style badges
