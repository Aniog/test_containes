# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `cream` → `#FAF7F2` — warm off-white page base
- **Foreground (charcoal):** `charcoal` → `#1C1917` — primary text
- **Accent (gold):** `gold` → `#B8860B` — warm dark gold for CTAs, links, highlights
- **Accent light:** `gold-light` → `#D4A843` — hover states
- **Muted:** `muted` → `#F5F0E8` — card backgrounds, subtle sections
- **Muted foreground:** `muted-fg` → `#78716C` — secondary text, captions
- **Border:** `border` → `#E7E0D5` — hairline dividers
- **Dark surface:** `dark` → `#1C1917` — hero overlays, dark sections
- **Dark muted:** `dark-muted` → `#292524` — dark card backgrounds

## Typography
- **Headings / Product names:** `font-serif` → Cormorant Garamond (weights 300, 400, 500, 600, 700)
- **Body / UI:** `font-sans` → Inter (weights 300, 400, 500, 600)
- Product names: UPPERCASE, `tracking-[0.2em]`
- Section headings: serif, normal case or uppercase depending on context
- Body: `text-base` (16px), `leading-relaxed`

## Spacing & Layout
- Generous whitespace: sections use `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: minimal border, subtle shadow on hover (`shadow-sm hover:shadow-md`)
- Hairline dividers: `border-t border-border`

## Components
- **Buttons (primary):** `bg-gold text-cream px-8 py-3 text-sm tracking-[0.15em] uppercase font-sans font-medium hover:bg-gold-light transition-colors`
- **Buttons (outlined):** `border border-gold text-gold px-8 py-3 text-sm tracking-[0.15em] uppercase font-sans font-medium hover:bg-gold hover:text-cream transition-colors`
- **Cards:** `bg-white rounded-none` (no border-radius for editorial feel)
- **Hover transitions:** `transition-all duration-300 ease-in-out`

## Do's
- Use generous whitespace between sections
- Use serif for all headings and product names
- Keep product names uppercase with wide letter-spacing
- Use thin hairline dividers (1px, border-border color)
- Subtle hover animations (opacity, translate, scale)
- Large editorial imagery

## Don'ts
- No rounded corners on cards or images (editorial/luxury feel)
- No bright/saturated colors
- No heavy drop shadows
- No cluttered layouts
- No generic e-commerce patterns (no red sale badges, no busy grids)
