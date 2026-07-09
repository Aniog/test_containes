# Velmora Fine Jewelry Design System

## Visual direction
Velmora uses a quiet-luxury editorial look: warm ivory surfaces, espresso ink, smoked bronze panels, and restrained champagne-gold accents. The experience should feel premium and calm, never sale-driven or generic.

## Palette
- Ivory foundation: `velmora-ivory` (`#F7F1E7`) for page backgrounds and light sections.
- Porcelain cards: `velmora-porcelain` (`#FFFDF8`) for elevated product cards and forms.
- Espresso text: `velmora-espresso` (`#211915`) for primary copy on light backgrounds.
- Umber secondary: `velmora-umber` (`#5E4A3F`) for body text and supporting labels.
- Bronze base: `velmora-bronze` (`#3A2A24`) for dark editorial blocks and footer.
- Champagne accent: `velmora-champagne` (`#C8A46A`) for CTAs, rules, icons, and focus states.
- Soft sand: `velmora-sand` (`#E7D9C7`) for dividers and subtle panels.

## Typography
- Headings and editorial display: Cormorant Garamond, elegant serif, generous line height.
- Product names: serif, uppercase, wide letter spacing.
- Body and UI: Manrope, clean sans-serif.
- Use restrained font sizes with large editorial headlines on desktop and readable headings on mobile.

## Layout and spacing
- Mobile-first, generous vertical rhythm, and large image areas.
- Desktop sections should use multi-column grids where appropriate; avoid single-column desktop layouts.
- Use thin hairline dividers (`border-velmora-sand/70` or `border-white/15`) instead of heavy borders.
- Cards should have soft shadows and ample padding, never cramped.

## Components
- Primary buttons: champagne fill with espresso text, uppercase tracking, rounded-full.
- Secondary buttons: transparent/outlined with a thin champagne or espresso border.
- Product cards: porcelain background, image-first, subtle hover lift, quick add revealed on hover.
- Navigation: transparent over hero, solid ivory/espresso text after scroll with blur.
- Cart drawer: porcelain surface, explicit dark text, clear quantity controls.

## Do
- Keep copy and imagery warm, tactile, and editorial.
- Maintain strong text contrast on every surface.
- Use subtle transitions: opacity, transform, and border color.
- Let whitespace and image scale create luxury.

## Don’t
- Do not use loud discount colors, neon accents, chunky borders, or crowded promotional badges.
- Do not place low-contrast gold text on pale backgrounds for important content.
- Do not hardcode arbitrary colors in JSX; use Tailwind theme tokens.
