# Velmora Fine Jewelry Visual System

Velmora uses a warm editorial luxury direction: deep espresso ink, pearl and champagne neutrals, and restrained antique-gold accents. The look should feel quiet, premium, and intimate, never loud or discount-driven.

## Palette
- `velmora-ink` (`#201A17`): primary deep base for hero overlays, footer, drawer text, and premium dark sections.
- `velmora-espresso` (`#332721`): secondary dark surface for cards and gradients.
- `velmora-pearl` (`#F8F3EC`): main page background and light surfaces.
- `velmora-ivory` (`#FFFDF8`): cards, form fields, and elevated panels.
- `velmora-linen` (`#E9DED0`): soft dividers, muted panels, and trust bars.
- `velmora-clay` (`#8B6B58`): readable muted body copy.
- `velmora-gold` (`#B38A4C`): primary CTA, icons, ratings, and refined accent lines.
- `velmora-goldDark` (`#8E6735`): hover and pressed CTA states.
- `velmora-rose` (`#D8B7A6`): warm editorial highlight blocks.

## Typography
- Headings and product names: Cormorant Garamond, elegant serif, generous line height.
- Body and UI: Inter, clean sans-serif.
- Product names: uppercase with wide letter spacing (`uppercase tracking-widest`).

## Layout and Spacing
- Mobile-first, generous vertical rhythm, large hero imagery, responsive grids.
- Desktop sections use max-width containers and generous padding (`px-6`, `py-20`, `lg:py-28`).
- Hairline dividers use `border-velmora-linen` or subtle dark borders.

## Components
- Buttons: refined, either solid antique-gold with ivory text or outlined with thin borders.
- Product cards: ivory surfaces, soft shadows, image-forward, subtle hover reveal for alternate image and quick add action.
- Navigation: transparent over hero, solid ivory on scroll; serif logo; clean UI links.
- Cart drawer: ivory panel over a dark translucent overlay with clear readable text.

## Do's
- Use warm neutral backgrounds that flatter gold jewelry.
- Keep accents restrained and high contrast.
- Use soft transitions (`duration-300`, `ease-out`) and subtle shadows.
- Use Strikingly stock image attributes for jewelry/editorial imagery.

## Don'ts
- Do not use loud sale colors, bright discount banners, or generic marketplace styling.
- Do not place low-contrast clay text on dark surfaces.
- Do not hardcode image URLs or arbitrary hex colors in JSX class strings.
