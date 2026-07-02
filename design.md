# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `cream` → `#FAF7F2` — warm off-white page base
- **Foreground (charcoal):** `charcoal` → `#1C1917` — primary text
- **Accent (gold):** `gold` → `#B8860B` — CTA buttons, highlights, metallic accents
- **Accent hover:** `gold-dark` → `#996F09` — button hover state
- **Muted:** `taupe` → `#A89F91` — secondary text, borders, subtle elements
- **Surface:** `linen` → `#F5F0E8` — card backgrounds, alternate sections
- **Dark surface:** `espresso` → `#2C2420` — dark sections (hero overlay, footer)
- **Dark text on dark:** `cream` on `espresso`

## Typography
- **Headings / Product names:** `Cormorant Garamond`, serif — elegant, editorial
  - Product names: UPPERCASE, `tracking-[0.2em]`
  - Section headings: normal case or uppercase depending on context
- **Body / UI:** `Inter`, sans-serif — clean, modern, readable
- **Sizes (Tailwind):**
  - Hero headline: `text-4xl md:text-6xl lg:text-7xl`
  - Section titles: `text-3xl md:text-4xl`
  - Product names: `text-sm md:text-base`
  - Body: `text-sm md:text-base`
  - Small/caption: `text-xs`

## Spacing
- Generous whitespace: sections use `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: `p-0` (image fills), text area `p-4`

## Borders & Dividers
- Hairline dividers: `border-t border-taupe/30`
- Card borders: none (rely on subtle shadow or background contrast)

## Shadows
- Cards: `shadow-sm` or none
- Elevated elements (cart drawer): `shadow-xl`

## Buttons
- Primary: `bg-gold text-white hover:bg-gold-dark` — solid, rounded-none (sharp edges for luxury)
- Secondary/outlined: `border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream`
- Pill variant selectors: `border border-taupe rounded-full px-4 py-1`

## Transitions
- All interactive: `transition-all duration-300 ease-in-out`
- Hover image zoom: `hover:scale-105 transition-transform duration-500`
- Opacity reveals: `opacity-0 group-hover:opacity-100 transition-opacity duration-300`

## Do's
- Use generous whitespace between sections
- Keep product imagery large and editorial
- Use serif for emotional/brand text, sans-serif for functional UI
- Maintain warm, golden tone throughout
- Use thin hairline dividers sparingly

## Don'ts
- No rounded corners on buttons (luxury = sharp)
- No heavy drop shadows
- No bright/neon colors
- No cluttered layouts
- No generic e-commerce blue/green CTAs
