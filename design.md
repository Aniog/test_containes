# Velmora Fine Jewelry Design System

## Brand direction
Velmora should feel like quiet luxury: warm, refined, editorial, and premium without looking flashy or discount-driven. The visual language should flatter gold jewelry and leave generous room around products.

## Color palette
Use one consistent direction across the entire site:
- Background base: deep espresso `#221c19`
- Elevated dark surface: smoked walnut `#2d2521`
- Light editorial surface: warm ivory `#f7f1ea`
- Soft section tint: champagne mist `#efe4d7`
- Primary text on light surfaces: rich umber `#2f241f`
- Primary text on dark surfaces: antique pearl `#f6efe6`
- Muted text: toasted taupe `#8d7566`
- Accent: brushed gold `#ba9560`
- Accent hover/deeper gold: burnished gold `#9b7745`
- Hairline divider: `rgba(47, 36, 31, 0.12)` on light surfaces and `rgba(246, 239, 230, 0.16)` on dark surfaces

Add these named colors to Tailwind config. Do not use arbitrary hex values directly in JSX classes.

## Typography
- Headings, editorial statements, logo, and product names: `Cormorant Garamond`
- Body copy, navigation, UI labels, prices, and buttons: `Inter`
- Product names should be uppercase with wide tracking.
- Use serif display sizes generously on hero and story sections.

## Spacing and layout
- Favor large vertical padding and spacious gutters.
- Use thin borders and hairline dividers instead of heavy card chrome.
- Desktop layouts should feel editorial with asymmetry and whitespace, not cramped grids.
- Mobile layouts should stack cleanly with preserved breathing room.

## Components
- Buttons: refined pill or softly rounded rectangle, either brushed-gold filled with dark text or transparent with subtle gold border.
- Cards: light surface with soft shadow and fine border.
- Navigation: transparent over hero, solid dark surface after scroll.
- Inputs: warm ivory or lightly tinted surface with explicit dark text.
- Cart drawer: dark luxurious panel with clear product rows and gold-accented totals/actions.

## Imagery
- Use warm gold jewelry imagery on neutral or dark editorial backgrounds.
- Prefer close-up, tactile, premium compositions.
- UGC/reels row should feel social but still polished.

## Motion
- Keep transitions subtle: opacity, transform, shadow, border-color.
- Avoid bouncy or flashy motion.

## Do
- Keep contrast strong and readable on every surface.
- Use thin dividers, soft shadows, and restrained gold accents.
- Preserve a premium tone in spacing and copy treatment.

## Don’t
- Don’t use discount-style badges, bright sale colors, or loud gradients.
- Don’t use dense layouts or heavy borders.
- Don’t mix multiple color directions.
