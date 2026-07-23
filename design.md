# Velmora Fine Jewelry Design System

## Visual direction
Velmora uses a quiet-luxury editorial look: warm parchment surfaces, deep espresso ink, refined champagne metallic accents, generous whitespace, thin hairline dividers, and softly shadowed product cards. The storefront should feel premium and intimate rather than loud, discounted, or generic.

## Color palette
Use these named Tailwind colors only for branded surfaces and accents:
- `velmora-ink` #211814: primary deep espresso text and dark sections.
- `velmora-charcoal` #3A2A24: secondary dark surfaces.
- `velmora-cream` #F7F0E6: main page background.
- `velmora-pearl` #FFF9F1: card and elevated surface background.
- `velmora-sand` #E8D8C3: soft borders and neutral fills.
- `velmora-mist` #CDBEA9: muted supporting text on light surfaces.
- `velmora-gold` #B88A4A: primary accent and CTA color.
- `velmora-gold-deep` #8A6232: hover/accent darkening.
- `velmora-rose` #B17A67: restrained warm editorial accent.

## Typography
- Headings and product names: Cormorant Garamond, elegant serif, high contrast, calm editorial rhythm.
- Body and UI: Manrope, clean sans-serif.
- Product names: uppercase with wide tracking (`uppercase tracking-[0.22em]` only where needed for brand/product styling).

## Spacing and layout
- Mobile-first with comfortable padding: `px-5`, increasing to `lg:px-12` and `xl:px-16`.
- Desktop sections use generous vertical rhythm: `py-20` to `py-28`.
- Use max-width containers (`max-w-7xl mx-auto`) for content sections; hero can be full bleed.
- Hairline dividers use `border-velmora-sand/70` or `border-white/15` depending on surface.

## Components
- Buttons: refined solid gold CTA or outlined dark/gold border; rounded-full, subtle hover transitions, no loud colors.
- Cards: pearl background, soft shadow, thin sand border, calm hover lift.
- Navigation: transparent over hero, solid cream/pearl on scroll and interior pages.
- Forms: pearl/cream fields with visible espresso text and clear gold focus ring.

## Do
- Keep text contrast strong and explicit.
- Use warm imagery and editorial cropping.
- Keep interactions subtle and smooth.
- Use gold accents sparingly for hierarchy.

## Don’t
- Do not use bright sale colors, discount badges, or generic blue links.
- Do not crowd the layout, especially on mobile.
- Do not use low-contrast muted text for important product details.
