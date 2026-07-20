# Velmora Fine Jewelry Visual System

Velmora uses a warm editorial quiet-luxury direction: ivory paper surfaces, deep espresso contrast, soft taupe neutrals, and restrained antique-gold accents. The look should feel premium and calm, never loud, sale-driven, or generic.

## Palette
- Ink / primary text: `velmora-ink` (`#241B17`) for body copy and high-contrast UI.
- Espresso / deep base: `velmora-espresso` (`#18100D`) for footer, dark panels, hero overlays, and luxury contrast.
- Ivory / page background: `velmora-ivory` (`#F7F1E8`) for the main canvas.
- Porcelain / cards: `velmora-porcelain` (`#FFFBF5`) for product cards and form surfaces.
- Sand / secondary surface: `velmora-sand` (`#E7D8C4`) for trust bars, subtle blocks, and borders.
- Taupe / muted text: `velmora-taupe` (`#7D6A5D`) for supporting text only on light backgrounds.
- Gold / accent: `velmora-gold` (`#B88A44`) for CTAs, icons, ratings, and fine details.
- Champagne / soft accent: `velmora-champagne` (`#D8B875`) for hover states and metallic highlights.
- Blush / editorial warmth: `velmora-blush` (`#EAD8CF`) for newsletter and gentle accent blocks.

## Typography
- Headings, logo, hero copy, product names: Cormorant Garamond, elegant serif. Use high contrast, generous line height, and editorial scale.
- Body and UI: Manrope, clean sans-serif. Use consistent tracking for nav and buttons.
- Product names: uppercase, wide letter-spacing (`tracking-[0.24em]` or configured `tracking-luxury`).

## Layout and spacing
- Generous whitespace with airy sections (`py-16 md:py-24`).
- Thin hairline dividers using `border-velmora-sand` or low-opacity ivory on dark surfaces.
- Desktop layouts should feel editorial and balanced; mobile stacks should remain spacious and readable.

## Components
- Buttons: premium solid gold on dark/light surfaces or thin outlined espresso/gold. Rounded-full, uppercase, small text, wide tracking.
- Cards: porcelain backgrounds, soft shadows, thin borders, subtle image zoom and second-image reveal on hover.
- Navigation: transparent over hero, solid ivory with shadow on scroll. Text must stay readable in both states.
- Forms: porcelain/ivory surfaces, espresso text, visible labels/placeholders, gold focus rings.

## Do
- Use warm jewelry imagery, dark neutral backgrounds, model close-ups, and elegant detail shots.
- Keep text contrast explicit on every custom surface.
- Use subtle transitions and restrained accents.

## Don’t
- Do not use bright sale colors, heavy discount badges, neon accents, or cluttered merchandising.
- Do not hardcode random hex colors in component classes; add named colors to Tailwind if a new color is needed.
- Do not use low-contrast taupe text on dark or blush backgrounds.
