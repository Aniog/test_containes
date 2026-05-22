# Cinema Noir — Design System

## Brand Identity
Premium, minimalist cinema experience. Monochromatic black-and-white palette inspired by classic noir films. Every element should feel intentional, atmospheric, and luxurious.

## Color Palette
- **cinema-black**: `#000000` — Primary background, deepest surfaces
- **cinema-void**: `#0a0a0a` — Card backgrounds, secondary surfaces
- **cinema-dark**: `#111111` — Elevated surfaces, nav background
- **cinema-charcoal**: `#1a1a1a` — Borders, dividers
- **cinema-ash**: `#333333` — Muted text, secondary elements
- **cinema-silver**: `#666666` — Tertiary text
- **cinema-mist**: `#999999` — Placeholder, disabled states
- **cinema-smoke**: `#cccccc` — Secondary text on dark
- **cinema-pearl**: `#e5e5e5` — Body text on dark backgrounds
- **cinema-white**: `#ffffff` — Primary text, high-contrast elements

## Typography
- **Display / Headings**: `Cormorant Garamond` — Elegant, cinematic serif. Use for hero titles, section headings, movie titles.
  - Hero title: `text-7xl lg:text-9xl font-light tracking-widest uppercase`
  - Section heading: `text-4xl lg:text-5xl font-light tracking-wider`
  - Movie title: `text-xl font-light tracking-wide`
- **Body / UI**: `Montserrat` — Clean, modern sans-serif. Use for nav, labels, body copy, buttons.
  - Nav links: `text-xs font-medium tracking-[0.2em] uppercase`
  - Body: `text-sm font-light tracking-wide`
  - Labels/badges: `text-xs font-medium tracking-[0.15em] uppercase`

## Spacing
- Generous white space is essential. Sections use `py-24 lg:py-32`.
- Content containers: `max-w-7xl mx-auto px-6 lg:px-12`
- Card gaps: `gap-6 lg:gap-8`

## Borders & Dividers
- Use `border-cinema-charcoal` (`border-[#1a1a1a]`) for subtle separators
- Thin 1px borders only — never thick or decorative
- Sharp edges only — no border-radius on primary elements (`rounded-none`)
- Subtle hover states: `border-cinema-white` on interactive cards

## Shadows & Depth
- No colored shadows — use `shadow-[0_0_40px_rgba(0,0,0,0.8)]` for depth
- Overlay gradients: `from-black via-black/60 to-transparent`

## Buttons
- Primary: `bg-white text-black px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium hover:bg-cinema-pearl transition-colors`
- Ghost: `border border-white text-white px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium hover:bg-white hover:text-black transition-colors`

## Images
- Movie posters: aspect-ratio `2x3` (portrait)
- Hero background: aspect-ratio `16x9`, full-bleed
- All images use `object-cover` and `grayscale` filter for monochromatic consistency

## Do's
- Use `grayscale` CSS filter on all images
- Use `tracking-widest` or `tracking-[0.2em]` for uppercase labels
- Use thin horizontal rules (`<hr className="border-cinema-charcoal">`) as section dividers
- Animate with `transition-all duration-500` for smooth, luxurious feel

## Don'ts
- No rounded corners on cards or buttons
- No colored accents — strictly black, white, and grays
- No drop shadows with color
- No bold/heavy font weights for headings (use `font-light` or `font-thin`)
- No busy backgrounds or patterns
