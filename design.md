# Velmora Fine Jewelry — Visual Identity

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Primary Base (Deep Warm Charcoal)**: `#1C1917` — stone-900. Used for backgrounds, nav, hero overlays, footer.
- **Secondary Base (Warm Cream)**: `#FAFAF9` — stone-50. Used for page backgrounds, card surfaces, light sections.
- **Accent (Warm Gold)**: `#C9A96E` — custom `velmora-gold`. Used for CTAs, highlights, borders, price text, hover states.
- **Accent Hover (Deep Gold)**: `#B08D4E` — custom `velmora-gold-dark`. Used for button hover, active states.
- **Text Primary (Warm Off-White)**: `#F5F5F4` — stone-100. Used for headings on dark backgrounds.
- **Text Secondary (Warm Mid Gray)**: `#A8A29E` — stone-400. Used for captions, secondary text on dark backgrounds.
- **Text Body Dark (Warm Dark)**: `#292524` — stone-800. Used for body text on light backgrounds.
- **Text Body Light Sub**: `#78716C` — stone-500. Used for subtle labels, descriptions on light backgrounds.
- **Divider**: `#E7E5E4` — stone-200. Hairline dividers.
- **Divider Dark**: `#44403C` — stone-700. Hairline dividers on dark backgrounds.

## Typography
- **Headings / Product Names**: Cormorant Garamond (serif), weights 400/500/600/700. Uppercase with wide letter-spacing for product names.
- **Body / UI**: Inter (sans-serif), weights 300/400/500/600. Clean, minimal.
- **Accent Text**: Cormorant Garamond italic for editorial captions.

### Tailwind Font Classes
- `font-serif` → Cormorant Garamond
- `font-sans` → Inter

## Spacing
- Generous whitespace. Sections use `py-20 md:py-28` or more.
- Content max-width: `max-w-7xl` (1280px) for grids, `max-w-2xl` for text blocks.
- Card padding: `p-4 md:p-6`.
- Gap between grid items: `gap-4 md:gap-6`.

## Component Styles
- **Buttons**: Solid accent gold (`bg-velmora-gold text-stone-900`) or outlined (`border-velmora-gold text-velmora-gold`). Rounded-none or rounded-sm. Font-serif uppercase tracking-widest for primary CTAs. Font-sans for secondary.
- **Cards**: Minimal, no heavy shadows. `bg-white` or `bg-stone-50`. Soft shadow on hover: `shadow-sm hover:shadow-md`. Thin border `border-stone-200`.
- **Dividers**: `border-t border-stone-200` (hairline, 1px).
- **Images**: Large, editorial. Aspect ratios: 3x4 for product, 16x9 for hero, 9x16 for UGC reels.
- **Hover Transitions**: `transition-all duration-300 ease-out`. Subtle opacity changes, scale on images.
- **Product Names**: `font-serif uppercase tracking-[0.2em] text-sm md:text-base`.

## Do's
- Use generous whitespace and large imagery
- Keep hover transitions subtle (300ms ease-out)
- Use serif for all headings and product names
- Use uppercase + wide tracking for product names
- Keep buttons minimal and premium-feeling
- Use warm gold accent sparingly — it should feel special
- Ensure strong contrast: light text on dark, dark text on light

## Don'ts
- Don't use bright/saturated colors
- Don't use heavy shadows or thick borders
- Don't use generic e-commerce patterns (badges, loud sales banners)
- Don't mix too many font styles
- Don't use rounded-full buttons (too casual)
- Don't place light text on light backgrounds or dark text on dark backgrounds
