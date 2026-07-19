# Velmora Fine Jewelry Visual System

## Direction
Quiet luxury, warm editorial, and premium-but-accessible. The storefront should feel like a refined jewelry lookbook rather than a discount catalog: generous whitespace, cinematic imagery, thin dividers, subtle motion, and restrained gold accents.

## Color Palette
Use one cohesive warm neutral direction with a deep editorial base and soft ivory surfaces.

- `velmora-ink` (`#17130F`): primary dark base, footer, overlays, high-contrast text on light surfaces.
- `velmora-espresso` (`#2B211A`): secondary deep brown for elevated cards and navigation when solid.
- `velmora-ivory` (`#F8F2E8`): page background and calm editorial sections.
- `velmora-cream` (`#FFF9F0`): card backgrounds and form surfaces.
- `velmora-sand` (`#E9D8C0`): hairline borders, muted panels, trust strip.
- `velmora-taupe` (`#8D7764`): readable muted text on light surfaces.
- `velmora-gold` (`#B98A45`): primary metallic accent, CTA buttons, ratings, hover states.
- `velmora-champagne` (`#D9B978`): softer highlight for icons, badges, and delicate accents.
- `velmora-rose` (`#B88474`): newsletter accent and small editorial details.

Always pair dark text with ivory/cream/sand surfaces and cream text with ink/espresso surfaces. Do not use low-contrast taupe on dark backgrounds.

## Typography
- Headings and product names: `Cormorant Garamond`, elegant serif, high contrast, editorial scale.
- Body and UI: `Manrope`, clean sans-serif for readability and premium restraint.
- Product names: uppercase with wide letter spacing (`tracking-[0.22em]` or configured utility use).

## Layout and Spacing
- Mobile-first, with graceful expansion to two-column and editorial grid layouts on tablet/desktop.
- Use generous vertical rhythm: section padding around `py-16`, `md:py-24`, `lg:py-28`.
- Containers use `max-w-7xl mx-auto px-5 sm:px-8 lg:px-12`.
- Use thin hairline borders (`border-velmora-sand/70`) and soft shadows only on interactive product cards or drawers.

## Components
- Buttons: solid gold with ink text for primary actions, or transparent outlined buttons with subtle gold border for secondary actions. Rounded-full and letter-spaced labels feel premium.
- Cards: cream or transparent surfaces with image-first composition, delicate borders, and subtle hover lift.
- Navigation: transparent over the hero, solid ivory/cream on scroll with a hairline bottom border.
- Cart drawer: ivory surface, dark readable text, premium gold CTA, clear quantity controls.

## Imagery
Use warm gold jewelry imagery on models, dark neutral backgrounds, velvet/stone surfaces, and editorial close-ups. Prefer large cinematic crops and vertical UGC cards. Avoid generic ecommerce stock compositions that feel loud or discounted.

## Do's
- Use restrained gold accents consistently.
- Keep all text explicitly readable against its surface.
- Use elegant transitions (`duration-300`, `ease-out`) and subtle scale/opacity changes.
- Use editorial whitespace and thin dividers.

## Don'ts
- Do not introduce bright sale colors, heavy discount banners, or loud gradients.
- Do not mix multiple unrelated palettes.
- Do not use hardcoded arbitrary colors in JSX class strings; use Tailwind theme names.
- Do not overcrowd mobile product cards or nav controls.
