# Velmora Fine Jewelry Design System

## Visual direction
Velmora uses a quiet-luxury editorial direction: warm ivory surfaces, deep espresso contrast, soft champagne panels, and restrained metallic gold accents. The store should feel premium, intimate, and refined rather than loud or promotional.

## Color palette
Use these named Tailwind colors only for brand surfaces and accents:
- `velmora-espresso` `#211814`: primary deep text, sticky navigation, footer, dark editorial panels.
- `velmora-ink` `#382922`: secondary dark text and borders on warm surfaces.
- `velmora-ivory` `#F8F3EA`: main page background.
- `velmora-pearl` `#FFFDF8`: elevated cards, drawers, form fields.
- `velmora-champagne` `#E9DCC7`: warm section backgrounds and subtle dividers.
- `velmora-sand` `#C9B89D`: muted supporting text on dark or ivory surfaces.
- `velmora-gold` `#B88746`: primary accent, premium buttons, selected states.
- `velmora-bronze` `#7A542E`: hover accent and grounded metallic detail.
- `velmora-blush` `#F0DED2`: soft editorial highlight panels.

## Typography
- Headings and product names: `font-serifDisplay` using Cormorant Garamond.
- Body and UI: `font-sansBody` using Manrope.
- Product names must be uppercase with wide tracking (`tracking-[0.24em]` only where needed for product naming).
- Use generous line height and avoid dense text blocks.

## Components and spacing
- Use large whitespace, thin hairline borders (`border-velmora-champagne/70`), and soft shadows.
- Buttons should feel refined: solid gold with pearl text, or outlined espresso/gold with subtle hover fills.
- Cards should use pearl/ivory surfaces and restrained hover movement.
- Use rounded corners sparingly: small to medium radii only, never playful pill-heavy layouts except variant selectors.

## Do's
- Pair dark backgrounds with explicit pearl/ivory text.
- Use editorial imagery in large, calm compositions.
- Keep CTAs concise and premium.
- Use subtle transitions (`duration-300`, `ease-out`) and gentle shadows.

## Don'ts
- Do not use loud sale colors, neon accents, or generic marketplace styling.
- Do not use low-contrast muted text.
- Do not introduce unrelated colors outside the palette.
- Do not overcrowd mobile layouts.
