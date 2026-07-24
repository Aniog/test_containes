# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background**: `ivory` (#FDFBF7) — warm off-white for main surfaces
- **Foreground / Text**: `charcoal` (#1C1917) — rich warm black
- **Accent**: `gold` (#B8860B) — dark goldenrod for CTAs, highlights, hover states
- **Accent Light**: `goldLight` (#D4A843) — lighter gold for hover/active
- **Muted**: `stone` (#78716C) — warm gray for secondary text, borders
- **Muted Light**: `stoneLight` (#F5F0EB) — very light warm gray for cards, sections
- **Surface**: `cream` (#FAF7F2) — slightly darker than ivory for alternating sections
- **Border**: `hairline` (#E7E0D8) — warm hairline dividers

## Typography
- **Headings / Product Names**: `Cormorant Garamond` (serif), weights 400/500/600
- **Body / UI**: `Inter` (sans-serif), weights 300/400/500/600
- **Product names**: UPPERCASE, letter-spacing: 0.12em
- **Section headings**: Normal case or uppercase depending on context, letter-spacing: 0.05em

## Tailwind Classes (common patterns)
- Heading serif: `font-serif`
- Body sans: `font-sans`
- Product name: `font-serif uppercase tracking-widest`
- Section title: `font-serif text-3xl md:text-4xl lg:text-5xl font-normal`
- Body text: `font-sans text-stone text-sm md:text-base`
- CTA button: `bg-gold text-ivory px-8 py-3 font-sans text-sm uppercase tracking-wider hover:bg-goldLight transition-colors`
- Outlined button: `border border-gold text-gold px-8 py-3 font-sans text-sm uppercase tracking-wider hover:bg-gold hover:text-ivory transition-colors`
- Hairline divider: `border-t border-hairline`
- Card: `bg-white`

## Spacing
- Generous whitespace: sections use `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Grid gaps: `gap-6 md:gap-8`

## Do's
- Use large editorial imagery
- Thin hairline dividers between sections
- Subtle hover transitions (300ms)
- Soft shadows on cards (`shadow-sm`)
- Generous padding inside cards
- Restrained use of accent color

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners larger than `rounded-sm` on cards
- No busy patterns or gradients
- No discount/sale badges or loud promotional elements
- No generic stock photo feel
