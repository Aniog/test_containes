# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette (Tailwind named tokens)
- `cream`: #FDFBF7 — primary page background
- `cream-dark`: #F5F0EB — muted surface / cards
- `charcoal`: #1C1917 — primary text (stone-900)
- `charcoal-light`: #44403C — secondary text (stone-700)
- `gold`: #9E7C4C — primary accent (buttons, links, highlights)
- `gold-dark`: #7D6139 — accent hover state
- `gold-light`: #C9A96E — lighter gold for decorative elements
- `border`: #E8E0D8 — hairline dividers

## Typography
- Headings: `font-serif` → Cormorant Garamond (weights 400, 500, 600, 700)
- Body/UI: `font-sans` → Inter (weights 300, 400, 500, 600)
- Product names: uppercase, tracking-[0.15em], font-serif
- Section headings: text-3xl md:text-4xl lg:text-5xl font-serif font-light
- Body text: text-sm md:text-base font-sans text-charcoal-light

## Spacing & Layout
- Generous whitespace: section padding py-16 md:py-24 lg:py-32
- Container: max-w-7xl mx-auto px-4 md:px-6 lg:px-8
- Card padding: p-4 md:p-6
- Grid gaps: gap-4 md:gap-6 lg:gap-8

## Borders & Dividers
- Hairline: border-b border-border (1px)
- Card borders: border border-border rounded-none (sharp corners for editorial feel)

## Buttons
- Primary: bg-gold text-cream px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium hover:bg-gold-dark transition-colors
- Secondary/Outlined: border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase hover:bg-gold hover:text-cream transition-colors
- No border-radius (sharp/editorial) or very subtle rounded-sm

## Shadows & Effects
- Cards: shadow-none or shadow-sm on hover
- Images: hover:scale-[1.02] transition-transform duration-500
- Opacity transitions for overlays

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Subtle hover transitions (300-500ms)
- Product names always uppercase with letter-spacing

## Don'ts
- No rounded corners on cards/buttons (keep editorial/sharp)
- No bright/saturated colors
- No heavy drop shadows
- No cluttered layouts
- No generic e-commerce feel
