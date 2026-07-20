# Velmora Fine Jewelry Design System

## Direction
Velmora uses a quiet luxury editorial direction: deep espresso surfaces, warm ivory page backgrounds, champagne metallic accents, generous whitespace, thin hairline dividers, and restrained motion. The experience should feel premium and intimate, never loud, discount-led, or generic.

## Palette
- Ink espresso: `velmora-espresso` (`#211915`) for primary text and dark surfaces.
- Deep umber: `velmora-umber` (`#35251e`) for elevated dark panels and navigation backgrounds.
- Warm ivory: `velmora-ivory` (`#f8f2e9`) for page background.
- Soft pearl: `velmora-pearl` (`#fffaf2`) for cards and inputs.
- Sand: `velmora-sand` (`#e7d8c4`) for dividers and subtle panels.
- Champagne: `velmora-champagne` (`#c49a5a`) for premium accents and solid buttons.
- Antique gold: `velmora-gold` (`#9f7333`) for hover and secondary accent states.
- Rose clay: `velmora-clay` (`#9b6f60`) for soft editorial highlights.

Always pair dark backgrounds with ivory/pearl text. Always pair light cards with espresso text. Use champagne as an accent, not as a large body background unless the foreground is espresso.

## Typography
- Headings and brand/product names use Cormorant Garamond, elegant serif, high contrast.
- Body and UI labels use Manrope, clean sans-serif.
- Product names are uppercase with wide letter spacing.
- Use restrained sizes and generous line-height; avoid cramped text blocks.

## Layout and Components
- Use generous section padding: `py-16 md:py-24`.
- Use a max content width: `max-w-7xl mx-auto px-5 sm:px-8`.
- Use thin dividers: `border-t border-velmora-sand/70` or `border-white/10`.
- Cards should use soft shadows and subtle hover lift: `shadow-[0_20px_60px_rgba(33,25,21,0.08)]`.
- Buttons should feel premium: small uppercase label, letter spacing, either champagne solid or espresso outlined.

## Motion
- Use subtle transitions: `transition-all duration-300 ease-out`.
- Hover image scale should be restrained (`scale-105`) and smooth.
- Cart drawer and mobile menu should animate softly without bouncing.

## Do
- Keep imagery warm, close-up, editorial, and jewelry-focused.
- Keep navigation, forms, cards, and drawers readable with explicit foreground colors.
- Preserve whitespace around premium content.

## Don't
- Do not use bright sale colors, loud gradients, neon tones, or discount badges.
- Do not use low-contrast text over images without a dark overlay.
- Do not hardcode arbitrary colors in JSX; use Tailwind theme tokens.
