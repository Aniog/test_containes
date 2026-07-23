# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background**: `ivory` (#FDFBF7) — warm off-white
- **Foreground / Text**: `charcoal` (#1C1917) — warm near-black
- **Accent**: `gold` (#B8860B) — dark goldenrod, premium metallic feel
- **Accent Light**: `gold-light` (#D4A843) — lighter gold for hover states
- **Muted**: `stone` (#78716C) — warm gray for secondary text
- **Muted Background**: `linen` (#F5F0E8) — soft warm neutral for sections
- **Border**: `sand` (#E7E0D5) — subtle warm divider

## Typography
- **Headings / Product Names**: `Cormorant Garamond` (serif), weight 300–600
- **Body / UI**: `Inter` (sans-serif), weight 300–500
- **Product names**: UPPERCASE, letter-spacing `0.15em`
- **Section headings**: Normal case or uppercase depending on context

## Tailwind Classes (common patterns)
- Headings: `font-serif text-charcoal`
- Body: `font-sans text-charcoal`
- Muted text: `text-stone`
- Accent button (solid): `bg-gold text-ivory hover:bg-gold-light transition-colors`
- Accent button (outline): `border border-gold text-gold hover:bg-gold hover:text-ivory transition-colors`
- Cards: `bg-white border border-sand`
- Sections with alt bg: `bg-linen`
- Dividers: `border-t border-sand`

## Spacing
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Product grid gap: `gap-4 md:gap-6`

## Borders & Shadows
- Hairline dividers: `border-sand` (1px)
- Cards: subtle `shadow-sm` or no shadow, rely on border
- Buttons: no border-radius or very slight `rounded-sm`

## Transitions
- All interactive elements: `transition-all duration-300 ease-in-out`
- Hover opacity shifts, scale(1.02) on cards

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use serif for elegance, sans for clarity
- Maintain warm tones throughout
- Thin hairline dividers between sections

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded-full buttons (too casual)
- No cluttered layouts
- No discount/sale-style badges
- No dark mode (this is a light, warm brand)
