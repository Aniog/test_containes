# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `#FAF7F2` — warm off-white for page backgrounds
- **Foreground (charcoal):** `#1A1A1A` — near-black for body text
- **Accent (gold):** `#B8860B` — warm dark goldenrod for CTAs, highlights, accents
- **Accent hover:** `#9A7209` — deeper gold on hover
- **Muted (warm gray):** `#6B6560` — secondary text, captions
- **Muted background:** `#F0EBE3` — subtle section backgrounds, cards
- **Border:** `#E8E2D9` — hairline dividers, card borders
- **Dark surface:** `#1A1A1A` — footer, dark sections
- **Dark surface text:** `#FAF7F2` — text on dark surfaces

## Typography
- **Headings / Product names:** `Cormorant Garamond`, serif — elegant, editorial
- **Body / UI:** `Inter`, sans-serif — clean, modern, readable
- **Product names:** UPPERCASE, letter-spacing: 0.1em–0.15em
- **Heading sizes:** Hero: text-5xl/6xl, Section: text-3xl/4xl, Card: text-lg/xl
- **Body:** text-sm/base, leading-relaxed

## Spacing & Layout
- Generous whitespace: sections py-16 md:py-24
- Container max-w-7xl mx-auto px-4 md:px-8
- Cards: rounded-none or rounded-sm (sharp, editorial)
- Thin hairline dividers: border-t border-border

## Components
- **Buttons (primary):** bg-accent text-white px-8 py-3 uppercase tracking-widest text-sm font-sans hover:bg-accent-hover transition-colors
- **Buttons (outline):** border border-accent text-accent px-8 py-3 uppercase tracking-widest text-sm hover:bg-accent hover:text-white transition-colors
- **Cards:** bg-white border border-border, no rounded corners, subtle shadow on hover
- **Hover transitions:** transition-all duration-300 ease-in-out
- **Shadows:** shadow-sm on hover only

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Subtle hover transitions (opacity, translate, shadow)
- Product names always uppercase with wide letter-spacing

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded-lg or pill shapes (except variant selectors)
- No cluttered layouts
- No generic e-commerce feel
