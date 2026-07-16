# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `#FDFBF7` → `bg-cream`
- **Foreground (charcoal):** `#1C1917` → `text-charcoal`
- **Accent (antique gold):** `#B5956B` → `text-gold` / `bg-gold`
- **Accent hover:** `#9E7E56` → darker gold for hover states
- **Muted text (taupe):** `#8C7E72` → `text-taupe`
- **Border (warm light):** `#E8E2DA` → `border-warm`
- **Card surface:** `#FFFFFF` → `bg-white`
- **Dark surface (for contrast sections):** `#1C1917` → `bg-charcoal`

## Typography
- **Headings / Product names:** `font-serif` → Cormorant Garamond (weights 300, 400, 500, 600)
- **Body / UI:** `font-sans` → Inter (weights 300, 400, 500, 600)
- **Product names:** UPPERCASE, `tracking-widest` (0.15em+)
- **Section headings:** Serif, normal case or uppercase depending on context
- **Body text:** 16px base, `leading-relaxed`

## Spacing & Layout
- Generous whitespace: sections use `py-20` to `py-28`
- Container max-width: `max-w-7xl mx-auto px-6`
- Cards: minimal border or no border, subtle shadow on hover
- Hairline dividers: `border-t border-warm`

## Components
- **Buttons (primary):** `bg-gold text-white px-8 py-3 text-sm tracking-wider uppercase font-sans font-medium hover:bg-gold-dark transition-colors`
- **Buttons (outline):** `border border-gold text-gold px-8 py-3 text-sm tracking-wider uppercase hover:bg-gold hover:text-white transition-colors`
- **Cards:** No visible border by default, subtle `shadow-sm` on hover, `transition-shadow duration-300`
- **Links:** `text-charcoal hover:text-gold transition-colors`

## Do's
- Use generous whitespace between sections
- Keep imagery large and editorial
- Use thin hairline dividers sparingly
- Subtle hover transitions (opacity, shadow, color)
- Product names always uppercase with letter-spacing

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on cards (use `rounded-none` or very subtle `rounded-sm`)
- No busy patterns or gradients
- No discount-style badges or starburst graphics
