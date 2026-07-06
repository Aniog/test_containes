# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `#FAF7F2` — warm off-white for page backgrounds
- **Foreground (charcoal):** `#1A1A1A` — near-black for body text
- **Accent (antique gold):** `#B8860B` — warm gold for CTAs, highlights, accents
- **Accent hover:** `#9A7209` — darker gold for hover states
- **Muted (warm gray):** `#6B6560` — secondary text, captions
- **Muted background:** `#F0EBE3` — subtle section backgrounds, cards
- **Border:** `#E8E2D9` — hairline dividers, card borders
- **Dark surface:** `#2C2824` — dark sections (newsletter, footer)
- **Dark surface text:** `#FAF7F2` — text on dark surfaces

## Typography
- **Headings / Product names:** `Cormorant Garamond`, serif — weights 400, 500, 600
- **Body / UI:** `Inter`, sans-serif — weights 300, 400, 500, 600
- **Product names:** UPPERCASE, letter-spacing: 0.12em
- **Section headings:** Normal case or uppercase depending on context, letter-spacing: 0.05em

## Tailwind Classes (common patterns)
- Heading serif: `font-serif`
- Body sans: `font-sans`
- Accent button: `bg-accent text-white hover:bg-accent-hover`
- Outlined button: `border border-accent text-accent hover:bg-accent hover:text-white`
- Card: `bg-muted-bg border border-border`
- Section padding: `py-16 md:py-24 px-6 md:px-12 lg:px-20`
- Container max: `max-w-7xl mx-auto`

## Spacing
- Generous whitespace between sections (py-16 to py-24)
- Cards: p-4 to p-6
- Grid gaps: gap-4 to gap-8

## Borders & Shadows
- Hairline dividers: `border-t border-border`
- Card shadows: `shadow-sm` or none
- Rounded corners: minimal (rounded-sm or rounded-none for editorial feel)

## Transitions
- All interactive elements: `transition-all duration-300 ease-in-out`
- Hover opacity changes: `hover:opacity-80`
- Button hover: scale slightly or darken

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use serif for elegance, sans for clarity
- Maintain warm, golden tones throughout
- Thin hairline dividers between sections

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded-full buttons (too casual)
- No cluttered layouts
- No discount/sale-style badges
- No dark mode (this is a light, warm brand)
