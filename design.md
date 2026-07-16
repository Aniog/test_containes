# Velmora Fine Jewelry Design System

## Brand direction
Velmora should feel like quiet luxury: warm, editorial, refined, and premium without feeling inaccessible. The visual mood should flatter gold jewelry and feel elevated on mobile and desktop.

## Color palette
Use one confident direction sitewide:
- Background base: deep espresso / ink brown for hero, nav overlays, footer, and dramatic sections.
- Surface: warm ivory / champagne for content sections and cards.
- Accent: muted antique gold for borders, buttons, highlights, and trust cues.
- Text: espresso on light surfaces, ivory on dark surfaces.
- Supporting neutrals: soft taupe and smoky brown for dividers, secondary text, and hover states.

### Example Tailwind mapping
- page background: `bg-stone-50`
- dark brand sections: `bg-stone-950`
- light editorial surfaces: `bg-[#f7f1ea]` should be avoided directly in classes; instead use named colors in Tailwind config
- primary text on light: `text-stone-900`
- primary text on dark: `text-stone-50`
- muted text: `text-stone-500` or `text-stone-400`
- accent: `bg-amber-200`, `text-amber-200`, `border-amber-200/50`

## Typography
- Headings and product names: elegant serif look, high contrast, generous spacing. Use Playfair Display.
- Body/UI: clean sans-serif, use Inter.
- Product names: uppercase with wide tracking, e.g. `uppercase tracking-[0.28em]`.
- Editorial headlines should be large with tight leading.

## Layout and spacing
- Use generous whitespace with clear section rhythm.
- Prefer max widths like `max-w-7xl` and strong horizontal padding.
- Use thin dividers, subtle shadows, and restrained rounded corners.
- Desktop should feel editorial and spacious; mobile should remain airy, not cramped.

## Components
- Buttons should feel premium: solid dark buttons with warm gold text or outlined ivory/espresso variants.
- Product cards should use soft shadows, thin borders, and refined hover motion.
- Newsletter and brand story blocks should feel like luxury magazine layouts.
- Cart drawer should be clean, bright, and easy to scan.

## Motion
- Use subtle hover lifts, opacity changes, and transform transitions.
- Avoid flashy animations, bouncing, bright gradients, or discount-style badges.

## Do
- Keep contrast strong and readable.
- Use warm imagery and editorial framing.
- Keep icons thin and refined.
- Make mobile layouts feel premium and uncluttered.

## Do not
- Do not use loud sale colors, neon accents, or chunky UI.
- Do not use discount banners or aggressive promotional language.
- Do not mix multiple visual directions.
