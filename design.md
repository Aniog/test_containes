# Velmora Fine Jewelry Design System

## Direction
Quiet luxury with a warm editorial feel. The storefront should feel refined, intimate, and premium-but-accessible: soft parchment surfaces, deep espresso contrast, muted gold accents, generous whitespace, thin hairline dividers, and large warm jewelry imagery.

## Palette
- Deep base: `velmora-espresso` for primary text, footer, overlay panels, and high-contrast sections. Example: `bg-velmora-espresso text-velmora-ivory`.
- Warm page surface: `velmora-parchment` for the main background. Example: `bg-velmora-parchment text-velmora-espresso`.
- Card surface: `velmora-ivory` for product cards and quiet content blocks. Example: `bg-velmora-ivory text-velmora-espresso`.
- Metallic accent: `velmora-gold` for CTAs, focus rings, star ratings, small rules, and premium highlights. Example: `bg-velmora-gold text-velmora-espresso`.
- Soft neutrals: `velmora-stone`, `velmora-mist`, and `velmora-taupe` for secondary text, dividers, filters, and muted backgrounds.
- Blush accent: `velmora-blush` only for newsletter or subtle editorial warmth.

## Typography
- Headings and brand moments use Cormorant Garamond: `font-serif`, elegant and editorial.
- Body and UI use Manrope: `font-sans`, clean and readable.
- Product names are uppercase with wide letter spacing: `uppercase tracking-[0.22em]`.
- Large headings should be light-to-medium weight with generous line height: `font-serif font-medium leading-none`.

## Layout and spacing
- Mobile-first, with calm single-column stacking on small screens and editorial multi-column layouts from `lg:` upward.
- Use generous section padding: `py-16 md:py-24` and max-width containers: `max-w-7xl mx-auto px-5 sm:px-8`.
- Use hairline borders: `border border-velmora-stone/60` or `border-t border-velmora-gold/25`.
- Avoid dense grids; product cards need breathing room and clear hierarchy.

## Components
- Buttons: premium, restrained, rounded-full or softly rounded, with subtle transitions. Primary buttons use `bg-velmora-gold text-velmora-espresso hover:bg-velmora-goldDark`.
- Secondary buttons use an espresso or gold hairline outline with transparent fill.
- Cards: quiet ivory surfaces, soft shadows, clear foreground text, and image-led composition.
- Navigation: transparent over hero, solid parchment/ivory after scroll, thin bottom border when solid.
- Cart drawer: ivory panel over a deep transparent overlay, readable foreground text, clear quantity controls.

## Do's
- Keep imagery warm, close-up, and jewelry-focused.
- Keep text contrast explicit on every custom surface.
- Use subtle hover motion: image scale, opacity fades, underline reveal.
- Use serif captions for editorial overlays.

## Don'ts
- Do not use bright sale colors, discount badges, loud gradients, or generic ecommerce blue.
- Do not overcrowd product cards with too many badges or controls.
- Do not place low-contrast taupe text over images without a dark overlay.
