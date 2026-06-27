# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `#FAF7F2` — warm off-white for page backgrounds
- **Surface (ivory):** `#F5F0E8` — slightly deeper warm tone for cards/sections
- **Foreground (charcoal):** `#1A1A1A` — near-black for primary text
- **Muted text:** `#6B6358` — warm gray-brown for secondary text
- **Accent (gold):** `#B8860B` — rich dark gold for CTAs, links, highlights
- **Accent hover:** `#9A7209` — deeper gold on hover
- **Accent light:** `#D4A843` — lighter gold for decorative elements
- **Border:** `#E8E0D4` — warm hairline dividers
- **Dark section:** `#1A1A1A` — for hero overlays, dark blocks

## Typography
- **Headings / Product names:** `Cormorant Garamond`, serif — elegant, editorial
- **Body / UI:** `Inter`, sans-serif — clean, modern, readable
- **Product names:** UPPERCASE, letter-spacing: 0.12em
- **Section headings:** Normal case or uppercase depending on context

## Tailwind Classes (common patterns)
- Heading serif: `font-serif` (mapped to Cormorant Garamond)
- Body sans: `font-sans` (mapped to Inter)
- Product name: `font-serif uppercase tracking-widest`
- Accent button: `bg-accent text-white hover:bg-accent-hover`
- Outlined button: `border border-accent text-accent hover:bg-accent hover:text-white`
- Hairline divider: `border-t border-border`
- Card shadow: `shadow-sm`

## Spacing
- Section padding: `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Do's
- Use generous whitespace
- Large editorial imagery
- Thin hairline dividers
- Subtle hover transitions (duration-300)
- Soft shadows on cards
- Buttons feel premium (solid accent or outlined)

## Don'ts
- No harsh borders or thick outlines
- No bright/neon colors
- No rounded-full buttons (use rounded-none or rounded-sm)
- No heavy drop shadows
- No cluttered layouts
- No discount/sale-style badges
