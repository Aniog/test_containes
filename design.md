# Velmora Fine Jewelry Design System

## Direction
Quiet luxury with warm editorial polish. The storefront should feel premium, intimate, and calm rather than promotional or crowded. Use generous whitespace, large close-up imagery, delicate hairline borders, and restrained metallic accents.

## Palette
Use named Tailwind colors from the `velmora` theme extension.

- Ink: deep espresso-black base for luxury contrast (`bg-velmora-ink`, `text-velmora-ink`).
- Cocoa: refined warm brown section surfaces (`bg-velmora-cocoa`).
- Ivory: warm page background and light text surface (`bg-velmora-ivory`).
- Pearl: elevated cards and panels (`bg-velmora-pearl`).
- Sand: muted editorial strips and form surfaces (`bg-velmora-sand`).
- Champagne: premium metallic CTA accent (`bg-velmora-champagne`, `text-velmora-champagne`).
- Gold: hover and fine detail accent (`text-velmora-gold`, `border-velmora-gold`).
- Taupe: readable secondary copy (`text-velmora-taupe`).
- Mist: hairline borders (`border-velmora-mist`).

Do not introduce arbitrary hex values in JSX class names. Use these named tokens only.

## Typography
- Headings and logo: elegant serif using Cormorant Garamond (`font-serif`).
- Body, UI, navigation, forms: Inter (`font-sans`).
- Product names: uppercase, wide tracking, serif, calm line height.
- Use large editorial heading scale on desktop and compact but spacious type on mobile.

## Components
- Buttons: pill-like or refined rectangles with thin borders. Primary buttons use champagne on ink/cocoa with dark readable text. Secondary buttons are outlined with hairline borders.
- Product cards: minimal, image-led, pearl/ivory backgrounds, soft shadows only on hover.
- Dividers: one-pixel hairlines with mist or translucent ivory.
- Cart drawer: pearl surface, clear dark text, subtle overlay.
- Forms: thin borders, large touch targets, explicit readable foreground colors.

## Motion
Use subtle transitions only: opacity, color, transform, and shadow. Avoid bouncy or loud animation. Hover should feel gentle and premium.

## Do
- Keep contrast strong and text explicit on every custom surface.
- Let product imagery and whitespace carry the luxury feel.
- Use restrained accent color sparingly for CTAs, ratings, highlights, and thin details.

## Don't
- Do not use discount-style red sale badges, bright gradients, heavy shadows, or crowded product tiles.
- Do not stack desktop layouts into narrow mobile-only columns at larger screen sizes.
- Do not use hardcoded colors in component class strings.
