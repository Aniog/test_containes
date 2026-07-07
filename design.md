# Velmora Fine Jewelry Design System

## Brand direction
Velmora should feel like quiet luxury: warm, editorial, and refined. The site must feel premium-but-accessible, with generous space, clean composition, and restrained gold accents. Avoid loud promotional styling, overly dark heavy UI, discount-banner aesthetics, or generic marketplace layouts.

## Color palette
Use one consistent palette across the entire storefront.

- `velmora-noir`: deep espresso-black base for hero overlays, header text on light backgrounds, and premium contrast. Example Tailwind intent: `bg-velmora-noir`, `text-velmora-noir`
- `velmora-espresso`: warm dark brown for secondary surfaces and borders. Example: `border-velmora-espresso/15`
- `velmora-parchment`: soft warm ivory main page background. Example: `bg-velmora-parchment`
- `velmora-sand`: refined taupe-beige for cards, filter panels, and secondary sections. Example: `bg-velmora-sand`
- `velmora-mist`: pale neutral for subtle separators and pills. Example: `bg-velmora-mist`
- `velmora-gold`: muted metallic accent for buttons, stars, and highlights. Example: `bg-velmora-gold`, `text-velmora-gold`
- `velmora-rose`: softened blush accent used sparingly for newsletter or hover glow. Example: `bg-velmora-rose`

## Typography
- Headings, hero statements, section titles, and product names: `Cormorant Garamond`
- Body text, buttons, labels, filters, pricing, and utility UI: `Inter`
- Product names should be uppercase with wide tracking. Example: `uppercase tracking-[0.28em]`
- Headings should feel elegant and airy rather than dense or bold-heavy.

## Layout and spacing
- Favor wide containers and generous vertical rhythm. Example: `max-w-7xl mx-auto px-5 md:px-8 lg:px-10`
- Use large editorial sections with roomy padding. Example: `py-16 md:py-24`
- Use thin dividers instead of chunky borders. Example: `border-b border-velmora-espresso/10`
- Maintain strong readability on every surface with explicit text colors.

## Components
- Buttons: premium, slightly elongated, uppercase, fine letter-spacing. Use either solid gold with dark text or transparent with dark border.
- Product cards: soft shadow, warm neutral background, generous image area, subtle hover lift.
- Header: transparent over hero, becomes solid parchment with hairline border after scroll.
- Inputs: light warm backgrounds, rounded-full or softly rounded rectangles, clear border contrast.
- Cart drawer: elegant side panel with readable totals and a strong checkout placeholder button.

## Motion
- Keep animations subtle and smooth. Use small translate, fade, and shadow transitions.
- Avoid bouncy or flashy motion.

## Do
- Keep whitespace generous.
- Use warm neutral surfaces that flatter gold jewelry.
- Keep text legible with explicit foreground color choices.
- Use accent color sparingly for premium feel.

## Don’t
- Don’t use neon, bright discount red, or overly saturated colors.
- Don’t crowd mobile layouts.
- Don’t rely on low-contrast gold text on light backgrounds.
- Don’t mix multiple visual styles across pages.
