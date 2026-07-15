# Velmora Fine Jewelry Design System

## Visual direction
Velmora uses a warm editorial quiet-luxury direction: deep espresso foundations, porcelain editorial surfaces, champagne metallic accents, refined hairlines, generous whitespace, and soft model-focused jewelry imagery. The store should feel premium and calm, never loud, discounted, or generic.

## Palette
Use named Tailwind colors only; do not hardcode hex values in JSX.

- `velmora-espresso` `#1F1713`: primary dark base, hero overlays, footer, high-contrast text on light surfaces.
- `velmora-ink` `#2E2520`: body copy and secondary dark surfaces.
- `velmora-cream` `#F7F0E7`: page background and warm editorial sections.
- `velmora-porcelain` `#FFFBF5`: cards, forms, drawer surfaces.
- `velmora-linen` `#E7D7C6`: hairline borders, soft dividers, muted blocks.
- `velmora-champagne` `#C7A56B`: primary accent for buttons, icons, rating stars, and refined highlights.
- `velmora-antique` `#8A633C`: hover accent and secondary metallic text.
- `velmora-blush` `#D8B7A3`: subtle warm accent blocks.
- `velmora-sage` `#747063`: quiet muted text accent.

## Typography
- Headings and product names: Cormorant Garamond, elegant serif, refined tracking.
- Body and UI: Manrope, clean sans-serif.
- Product names must be uppercase with wide letter spacing (`tracking-[0.22em]` or semantic utility equivalents).

## Layout and spacing
- Mobile-first with generous breathing room; use `px-5`, `py-16`, `md:px-8`, and `lg:py-24` as common rhythms.
- Desktop pages should use editorial two-column or multi-column layouts, not mobile stacking.
- Use thin borders (`border-velmora-linen/70`) and restrained shadows (`shadow-soft`) only where they add depth.

## Components
- Primary buttons: solid champagne with espresso text, uppercase tracking, soft hover to antique.
- Secondary buttons: transparent or porcelain with champagne/espresso border.
- Cards: porcelain or cream surfaces, subtle borders, image-first, quiet hover transitions.
- Navigation: transparent over the homepage hero, porcelain/espresso when scrolled or on inner pages.
- Cart drawer: porcelain surface, explicit espresso text, clear quantity controls.

## Do
- Keep text contrast strong on every surface.
- Use warm jewelry imagery with nearby text-based stock image prompts.
- Maintain calm motion: subtle fade, lift, and image zoom only.

## Don't
- Do not use bright sale colors, loud badges, heavy gradients, or discount-style urgency.
- Do not use arbitrary hex values in class strings.
- Do not place dark text directly on image areas without a readable overlay.
