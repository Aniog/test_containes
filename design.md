# Velmora Fine Jewelry — Design System

## Brand
Velmora Fine Jewelry is a DTC demi-fine jewelry brand. Mood: quiet luxury, warm, editorial. Premium but accessible ($30–$120). Women 25–45.

## Color Palette
- **Deep base** (`#1A1817`): Primary text, dark backgrounds, footer. Class: `text-velmora-deep` / `bg-velmora-deep`
- **Warm cream** (`#FBF8F4`): Page background. Class: `bg-velmora-cream`
- **Warm sand** (`#F2ECE1`): Card backgrounds, accent blocks. Class: `bg-velmora-sand`
- **Gold accent** (`#C8A44E`): Primary CTA, links, hover states. Class: `text-velmora-gold` / `bg-velmora-gold` / `border-velmora-gold`
- **Dusty rose** (`#D4A098`): Secondary accent, newsletter block, subtle highlights. Used sparingly. Class: `text-velmora-rose` / `bg-velmora-rose`
- **Muted warm gray** (`#8B8580`): Secondary text, captions. Class: `text-velmora-muted`
- **Hairline warm** (`#E8E2D6`): Dividers, borders. Class: `border-velmora-hairline`

## Typography
- **Headings**: Playfair Display (serif) — product names, hero, section titles. Product names in UPPERCASE with wide letter-spacing (`tracking-[0.2em]` or `tracking-widest`).
- **Body**: Inter (sans-serif) — UI text, descriptions, buttons, labels.
- Scale: 13/14/16/18/20/24/32/40/56 px

## Spacing
- Generous whitespace. Section padding: `py-20 md:py-28`. Cards: `p-6`.
- Hairline dividers: `border-b border-velmora-hairline`

## Components
- Buttons: Solid gold (`bg-velmora-gold text-white`) or outlined (`border border-velmora-gold text-velmora-gold`). Rounded. Hover darkens slightly.
- Cards: Soft shadow `shadow-sm`, subtle hover lift `hover:shadow-md transition-shadow`.
- Hover transitions: `transition-all duration-300`.
