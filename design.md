# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount, NOT generic e-commerce.

## Color Palette
- **Background (cream):** `#FAF7F2` — warm off-white, the primary page background
- **Background Dark (charcoal):** `#1B1B1B` — deep rich black-brown for hero, footer, dark sections
- **Foreground (ink):** `#1A1A1A` — primary text on light backgrounds
- **Foreground Light (ivory):** `#FAF7F2` — text on dark backgrounds
- **Gold (accent):** `#C9A84C` — primary accent, CTAs, highlights, warm gold
- **Gold Dark:** `#A68A3E` — gold hover state
- **Gold Light:** `#E8D5A3` — subtle gold tint, borders
- **Muted (stone):** `#8A8578` — secondary text, muted labels
- **Muted Light (linen):** `#F0EDE6` — card backgrounds, subtle section alternation
- **Border (whisper):** `#E5E0D8` — thin dividers, card borders
- **Star (amber):** `#D4A843` — star ratings

## Typography
- **Headings:** Cormorant Garamond (serif) — elegant, editorial, used for h1-h3, product names, section titles
- **Body/UI:** Inter (sans-serif) — clean, legible, used for body text, buttons, labels, navigation
- **Product names:** UPPERCASE with `tracking-[0.2em]` letter-spacing
- **Section titles:** Title case, Cormorant Garamond, 400 weight, large size

## Spacing & Layout
- Generous whitespace — sections use `py-20 md:py-28` padding
- Max content width: `max-w-7xl mx-auto`
- Grid gaps: `gap-6 md:gap-8`
- Thin hairline dividers: `border-t border-border` with `#E5E0D8`

## Components
- **Buttons:** Solid gold primary (`bg-gold text-charcoal`), outlined secondary (`border-gold text-gold`), subtle hover transitions
- **Cards:** Clean white/linen background, subtle shadow on hover, rounded corners `rounded-lg`
- **Inputs:** Clean borders, rounded, focus ring in gold
- **Icons:** Lucide React, consistent 18-20px for UI, 24px for features

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Card hover: slight scale `hover:scale-[1.02]`, shadow increase
- Button hover: opacity/color shift
- Nav: smooth background transition on scroll

## Do's
- Use generous whitespace
- Maintain warm, gold-toned aesthetic
- Keep text highly readable with strong contrast
- Use thin hairline dividers between sections
- Use the stock image system for editorial imagery

## Don'ts
- Don't use harsh colors or neon accents
- Don't make it look like a discount store
- Don't use rounded pill shapes for everything
- Don't use too many font weights
- Don't crowd elements together
