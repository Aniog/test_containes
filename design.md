# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background**: `cream` (#FFFBF5) — warm off-white
- **Surface**: `ivory` (#F7F3ED) — slightly darker warm neutral for cards/sections
- **Foreground/Text**: `charcoal` (#1A1A1A) — near-black for body text
- **Heading text**: `espresso` (#2C2420) — warm dark brown for headings
- **Muted text**: `stone` (#7A7068) — warm gray for secondary text
- **Accent**: `gold` (#B8860B) — dark goldenrod for CTAs, links, highlights
- **Accent hover**: `gold-dark` (#96700A) — deeper gold on hover
- **Accent light**: `gold-light` (#D4A843) — lighter gold for subtle accents
- **Border**: `sand` (#E8E2DA) — warm hairline dividers
- **Dark section**: `noir` (#1A1714) — deep warm black for contrast sections

## Typography
- **Headings / Product names**: `Cormorant Garamond` (serif), weights 400/500/600
- **Body / UI**: `Inter` (sans-serif), weights 300/400/500/600
- **Product names**: UPPERCASE, letter-spacing: 0.12em
- **Section headings**: Normal case or uppercase depending on context

## Tailwind Classes (common patterns)
- Headings: `font-serif text-espresso`
- Body: `font-sans text-charcoal`
- Muted: `text-stone`
- Accent button: `bg-gold text-cream hover:bg-gold-dark`
- Outlined button: `border border-gold text-gold hover:bg-gold hover:text-cream`
- Card: `bg-white border border-sand`
- Section padding: `py-16 md:py-24 px-6 md:px-12 lg:px-20`
- Container: `max-w-7xl mx-auto`

## Spacing
- Generous whitespace between sections (py-16 to py-24)
- Cards: p-4 to p-6
- Grid gaps: gap-4 to gap-8

## Borders & Dividers
- Hairline: `border-sand` (1px)
- Rounded: minimal, `rounded-sm` or `rounded-none` for editorial feel

## Shadows
- Soft: `shadow-sm` only where needed
- Cards on hover: `shadow-md transition-shadow`

## Transitions
- All interactive elements: `transition-all duration-300 ease-in-out`
- Hover opacity shifts, scale(1.02) on cards

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use serif for emotional/brand text
- Use thin hairline dividers
- Subtle hover transitions

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded-full buttons (use rounded-sm or rounded-none)
- No cluttered layouts
- No generic e-commerce feel
