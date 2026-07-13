# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background**: `velmora-cream` (#FAF7F2) — warm off-white
- **Surface**: `velmora-sand` (#F3EDE4) — slightly darker warm neutral
- **Foreground / Text**: `velmora-charcoal` (#1A1A1A) — near-black
- **Muted text**: `velmora-stone` (#6B6358) — warm gray-brown
- **Accent**: `velmora-gold` (#B8860B) — dark goldenrod, premium feel
- **Accent hover**: `velmora-gold-dark` (#8B6508) — deeper gold
- **Accent light**: `velmora-gold-light` (#D4A843) — lighter gold for highlights
- **Border**: `velmora-border` (#E8E0D6) — subtle warm border
- **Dark section**: `velmora-espresso` (#2C2420) — deep warm brown for contrast sections

## Typography
- **Headings / Product names**: `font-serif` → Cormorant Garamond (weights 300, 400, 500, 600, 700)
- **Body / UI**: `font-sans` → Inter (weights 300, 400, 500, 600)
- Product names: UPPERCASE, letter-spacing `tracking-widest` (0.1em)
- Section headings: Normal case or uppercase depending on context, `text-3xl` to `text-5xl`
- Body: `text-base` (16px), line-height 1.6

## Spacing & Layout
- Generous whitespace: sections use `py-20` to `py-28`
- Container max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Cards: no heavy borders, use subtle shadow `shadow-sm` or `border border-velmora-border`
- Hairline dividers: `border-t border-velmora-border`

## Components
- **Buttons (primary)**: `bg-velmora-gold text-white px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium hover:bg-velmora-gold-dark transition-colors duration-300`
- **Buttons (outlined)**: `border border-velmora-gold text-velmora-gold px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium hover:bg-velmora-gold hover:text-white transition-colors duration-300`
- **Cards**: `bg-white` with subtle hover scale `hover:scale-[1.02] transition-transform duration-300`
- **Links**: `text-velmora-stone hover:text-velmora-gold transition-colors duration-200`

## Do's
- Use generous whitespace between sections
- Use serif font for all headings and product names
- Keep imagery large and editorial
- Use thin hairline dividers
- Subtle hover transitions (300ms)
- Maintain warm, golden tone throughout

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded-full buttons (use slight rounding or none)
- No cluttered layouts
- No generic e-commerce blue/green CTAs
- No hardcoded hex in JSX — always use Tailwind config names
