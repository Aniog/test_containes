# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `#FAF7F2` — warm off-white for page backgrounds
- **Surface (ivory):** `#F5F0E8` — slightly deeper warm tone for cards/sections
- **Foreground (charcoal):** `#1A1A1A` — near-black for primary text
- **Muted text:** `#6B6358` — warm gray-brown for secondary text
- **Gold accent:** `#B8860B` — rich dark gold for CTAs, accents, highlights
- **Gold light:** `#D4A853` — lighter gold for hover states, decorative elements
- **Divider:** `#E8E0D4` — warm hairline dividers
- **Dark section:** `#1A1A1A` — for newsletter block, footer

## Typography
- **Headings / Product names:** `Cormorant Garamond`, serif — elegant, editorial
- **Body / UI:** `Inter`, sans-serif — clean, modern, readable
- **Product names:** UPPERCASE, letter-spacing: 0.15em
- **Section headings:** Normal case or uppercase depending on context

## Tailwind Classes (common patterns)
- Heading serif: `font-serif text-foreground`
- Body text: `font-sans text-muted`
- Product name: `font-serif uppercase tracking-[0.15em]`
- CTA button: `bg-gold text-white hover:bg-gold-light transition-colors`
- Outlined button: `border border-gold text-gold hover:bg-gold hover:text-white transition-colors`
- Card: `bg-surface rounded-none` (no border-radius for editorial feel)
- Divider: `border-t border-divider`
- Section padding: `py-16 md:py-24 px-6 md:px-12 lg:px-20`

## Spacing
- Generous whitespace between sections (py-16 to py-24)
- Product grid gap: gap-6 to gap-8
- Inner card padding: p-4 to p-6

## Borders & Shadows
- Hairline dividers only (1px, border-divider color)
- No rounded corners on cards/images (editorial, sharp)
- Subtle shadow on cart drawer: shadow-xl

## Hover & Transitions
- All interactive elements: `transition-all duration-300`
- Product cards: reveal second image on hover, slight scale
- Buttons: color shift on hover
- Links: opacity or underline on hover

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use serif for emotional/brand text
- Use sans-serif for functional/UI text
- Maintain warm, golden tone throughout

## Don'ts
- No rounded corners on product images or cards
- No bright/neon colors
- No heavy drop shadows
- No cluttered layouts
- No discount/sale-style badges
- No generic blue links
