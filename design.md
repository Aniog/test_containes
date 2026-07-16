# Velmora Fine Jewelry Design System

## Brand direction
Velmora should feel like quiet luxury: warm, editorial, premium, calm, and confident. The experience should flatter gold jewelry and feel elevated without looking flashy, discount-driven, or generic.

## Color system
Use one cohesive palette sitewide.

- Background: warm ivory / pearl surface for primary page background
  - Tailwind intent: `bg-stone-50`
- Elevated surface: soft cream cards and sections
  - Tailwind intent: `bg-[#f7f2eb]` should be avoided directly in class strings; instead use named tokens in Tailwind config
- Base text: deep espresso
  - Tailwind intent: `text-espresso`
- Secondary text: muted taupe-brown
  - Tailwind intent: `text-mocha`
- Accent: antique gold
  - Tailwind intent: `bg-gold`, `text-gold`, `border-gold`
- Dark editorial section background: deep truffle
  - Tailwind intent: `bg-truffle`, `text-pearl`
- Hairlines and dividers: soft champagne line color
  - Tailwind intent: `border-champagne`

## Typography
- Logo, hero headings, section headings, product names: Cormorant Garamond
- Body, navigation, buttons, metadata, form fields: Inter
- Product names should be uppercase with generous tracking.
- Headings should feel airy and editorial, not heavy.

## Layout and spacing
- Use generous whitespace and breathable sections.
- Desktop should feel editorial with clear horizontal rhythm.
- Mobile should remain elegant, with stacked layouts and easy thumb-friendly controls.
- Use thin borders and subtle shadows.

## Components
- Navigation: transparent over hero, then solid warm surface on scroll.
- Buttons: premium feel; use either solid dark editorial fill or gold-accent outline/fill.
- Product cards: minimal, image-led, strong typography, clear readable price, hover quick action.
- Cart drawer: dark editorial surface with warm text and clear actions.
- Accordions: simple hairline separators and refined spacing.

## Motion
- Keep transitions subtle and smooth.
- Use light hover lift, opacity fades, and soft transforms.
- Avoid bouncy or playful motion.

## Do
- Keep text contrast strong and explicit on every surface.
- Use warm, elegant shadows sparingly.
- Maintain consistent serif/sans pairing.
- Favor restraint over visual noise.

## Don’t
- Don’t use bright sale colors or loud gradients.
- Don’t use cramped spacing.
- Don’t allow low-contrast beige-on-beige text.
- Don’t mix multiple visual directions.
