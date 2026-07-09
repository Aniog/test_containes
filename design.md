# Velmora Fine Jewelry Design System

## Brand direction
Velmora Fine Jewelry should feel like quiet luxury: warm, editorial, feminine, and premium without looking flashy or discount-led. The site should feel elevated and spacious, with restrained motion and a polished direct-to-consumer aesthetic.

## Color palette
Use one consistent palette across the full storefront.

- Background base: deep espresso-plum for hero, navigation overlays, and strong contrast surfaces. Example Tailwind intent: `bg-velmora-noir`.
- Soft canvas: warm ivory for page backgrounds and editorial sections. Example Tailwind intent: `bg-velmora-ivory`.
- Surface: soft pearl for cards and drawers. Example Tailwind intent: `bg-velmora-pearl`.
- Accent metallic: muted champagne gold for CTAs, borders, icons, pills, and subtle highlights. Example Tailwind intent: `bg-velmora-gold`, `border-velmora-gold`, `text-velmora-gold`.
- Primary text: rich espresso for light surfaces. Example Tailwind intent: `text-velmora-ink`.
- Inverse text: warm ivory for dark surfaces. Example Tailwind intent: `text-velmora-ivory`.
- Secondary text: softened taupe for metadata and supporting copy. Example Tailwind intent: `text-velmora-mist`.

## Typography
- Headings, logo, editorial pull quotes, and product names: Cormorant Garamond. Use elegant sizing and moderate tracking.
- Body copy, UI labels, navigation, filters, buttons, and price text: Inter.
- Product names should appear in uppercase with generous tracking, for example `tracking-[0.3em]` to `tracking-[0.4em]`.

## Layout and spacing
- Use generous whitespace with roomy section padding. Prefer `py-16`, `py-20`, `lg:py-24`.
- Keep content widths refined using `max-w-7xl` and narrower text containers for editorial copy.
- Use thin dividers rather than heavy borders. Prefer `border-white/10`, `border-velmora-gold/20`, or `border-velmora-line`.
- Product cards should breathe; avoid crowded grids and excessive badges.

## Components
- Navigation should feel weightless over the hero, then become a softly opaque solid surface on scroll.
- Buttons should feel premium and restrained. Preferred styles:
  - Primary: solid champagne gold with dark text.
  - Secondary: transparent or pearl background with fine border.
- Cards should use soft shadows and subtle hover lifts. Avoid harsh drop shadows.
- Accordions, filter panels, and drawers should use pearl or deep surfaces with clearly readable text.

## Motion
- Use subtle transitions only: `duration-300`, `ease-out`, slight translate/opacity shifts.
- Hover states should feel calm and editorial, not playful or bouncy.

## Imagery
- Use warm-lit jewelry imagery with intimate crops.
- Favor dark neutral or soft beige backgrounds that flatter gold tones.
- UGC imagery should feel premium and lifestyle-led, not influencer-chaotic.

## Do
- Keep contrast strong and text explicit on every surface.
- Maintain a consistent luxury palette sitewide.
- Use serif sparingly but intentionally for elegance.
- Preserve premium spacing, clean product cards, and thin dividers.

## Don't
- Do not use loud discount colors, bright promo reds, or generic marketplace styling.
- Do not use cramped grids, oversized badges, or heavy shadows.
- Do not leave key text relying on inherited color.
- Do not stack the desktop layout into overly mobile-looking compositions on large screens.
