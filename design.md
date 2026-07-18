# Velmora Fine Jewelry Design System

## Brand direction
Velmora uses a quiet-luxury editorial look: deep espresso surfaces, warm ivory content areas, muted champagne metallic accents, and soft rose-beige supporting tones. The experience should feel premium, calm, and giftable.

## Color palette
Use named colors only. Do not hardcode hex colors in JSX classes.

- `velvet` `#241b18` — primary deep background. Example: `bg-velvet`, `text-velvet`.
- `ivory` `#f6f0e8` — warm page background. Example: `bg-ivory`.
- `champagne` `#c8a36a` — restrained metallic accent. Example: `bg-champagne`, `text-champagne`, `border-champagne/40`.
- `rose` `#dcc8bc` — soft supporting neutral. Example: `bg-rose/25`, `border-rose/50`.
- `sand` `#e8ddd1` — secondary surface and dividers. Example: `bg-sand`, `border-sand`.
- `ink` `#453833` — readable body text on light surfaces. Example: `text-ink`.
- `mist` `#fbf8f4` — bright elevated card surface. Example: `bg-mist`.

## Typography
- Headings and product names: Cormorant Garamond. Use elegant scale and slightly tighter leading.
- Body, navigation, UI, buttons: Inter.
- Product names should be uppercase with wide tracking. Example: `uppercase tracking-[0.28em]`.

## Layout and spacing
- Use generous vertical spacing. Prefer `py-16 md:py-24` for primary sections.
- Use thin dividers. Example: `border-white/10` on dark backgrounds and `border-ink/10` on light backgrounds.
- Main content width should feel editorial, with roomy margins. Prefer `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.

## Components
- Buttons feel premium: pill or softly rounded rectangles, medium weight, subtle hover transitions, no loud gradients.
- Cards should use soft shadows and warm surfaces. Prefer `shadow-[0_20px_60px_rgba(36,27,24,0.08)]` only in CSS, not inline arbitrary class strings.
- Overlays use dark translucent veil with readable light text.
- Sticky header starts transparent over hero and becomes solid velvet with hairline border on scroll.

## Imagery
- Use warm-lit gold jewelry, close-up editorial portraits, soft neutral or dark backdrops.
- Product tiles should feel polished and premium, never discount or marketplace-like.
- UGC row should mimic refined social content, not busy collage styling.

## Do
- Keep contrast strong and text clearly readable.
- Maintain one consistent palette across all pages.
- Use whitespace and typography to communicate luxury.

## Don’t
- Do not use bright sale colors, neon accents, or loud gradients.
- Do not mix multiple unrelated palette directions.
- Do not use low-contrast beige-on-beige text.
