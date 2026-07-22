# Velmora Fine Jewelry Design System

Velmora uses a quiet luxury editorial direction: warm ivory surfaces, deep espresso text, antique gold accents, and restrained contrast. The experience should feel premium and calm, not promotional or loud.

## Palette
- `velmora-ink` (`#241B17`): primary text and deep surfaces. Use for nav text, headings, drawers, footer.
- `velmora-espresso` (`#3B2A22`): rich brown secondary surface and hover states.
- `velmora-cream` (`#F7F1E8`): main page background.
- `velmora-porcelain` (`#FFFDF8`): cards, forms, elevated panels.
- `velmora-mist` (`#E8DED0`): hairline borders and muted panels.
- `velmora-sand` (`#CDBFAE`): soft neutral fills.
- `velmora-gold` (`#B88A4A`): primary accent and premium CTA background.
- `velmora-gold-dark` (`#8A6435`): CTA hover and strong accent text.
- `velmora-blush` (`#E9D3C2`): warm editorial highlight blocks.

## Typography
- Headings and product names: `Cormorant Garamond`, elegant serif, generous line-height, refined tracking.
- Body and UI: `Inter`, clean sans-serif.
- Product names should be uppercase with wide letter spacing: `uppercase tracking-[0.24em]` or token-equivalent classes.

## Layout and spacing
- Use generous whitespace: section padding around `py-16 md:py-24`.
- Keep max content width around `max-w-7xl mx-auto px-5 sm:px-8 lg:px-10`.
- Use thin hairline borders: `border border-velmora-mist`.
- Prefer editorial asymmetric layouts on desktop and stacked mobile layouts.

## Components
- Buttons: premium, restrained. Solid gold CTA with dark readable text, or outline button with espresso text and gold border.
- Product cards: porcelain/cream surfaces, soft shadow, subtle image scale/opacity transition, quick-add appears on hover/focus.
- Navigation: transparent over hero and solid cream/porcelain after scroll with clear contrast.
- Drawer/modal surfaces: explicit `bg-velmora-porcelain text-velmora-ink`.

## Do
- Use warm jewelry-friendly imagery and dark/neutral backgrounds.
- Maintain strong readable contrast for all text, including captions and badges.
- Use slow subtle transitions: `duration-300` to `duration-500`.
- Keep accents minimal and consistent.

## Don’t
- Do not use discount-style reds, neon colors, heavy badges, or cluttered sale messaging.
- Do not use low-contrast beige text on ivory without explicit darker foreground.
- Do not hardcode arbitrary hex values in JSX class strings; add named colors to Tailwind config.
