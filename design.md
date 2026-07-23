# Velmora Fine Jewelry Design System

## Direction
Velmora uses a quiet luxury editorial aesthetic for premium-but-accessible demi-fine gold jewelry. The site should feel warm, restrained, tactile, and refined rather than promotional or generic.

## Palette
- Deep base: `velmora-ink` (`#171412`) for navigation, footer, dark panels, and high-contrast text.
- Warm page background: `velmora-porcelain` (`#F7F1E8`) for the main site canvas.
- Soft card surface: `velmora-ivory` (`#FFF9F1`) for product cards and elevated surfaces.
- Muted editorial beige: `velmora-champagne` (`#E8D8BF`) for subtle strips and secondary surfaces.
- Metallic accent: `velmora-gold` (`#B88945`) for CTAs, icons, fine rules, and active states.
- Deep accent: `velmora-olive` (`#3F3A2F`) for secondary dark sections.
- Readable muted text: `velmora-taupe` (`#74685D`) for descriptions and helper text.
- Soft line: `velmora-line` (`#D7C6AA`) for hairline borders.

## Typography
- Headings and brand marks use `Cormorant Garamond`, elegant, high contrast, and editorial.
- Body and UI use `Manrope`, clean and modern.
- Product names use uppercase Manrope with wide tracking (`tracking-[0.22em]` or Tailwind `tracking-widest`).

## Layout & Spacing
- Use generous whitespace with section padding around `py-16 md:py-24`.
- Prefer centered max-width containers (`max-w-7xl mx-auto px-5 sm:px-8`).
- Use thin hairline dividers (`border-velmora-line/70`) rather than heavy borders.
- Use editorial asymmetry for hero/story, but keep product grids clean and balanced.

## UI Elements
- Primary buttons: solid metallic gold background with deep ink text; pill shape; subtle hover lift.
- Secondary buttons: transparent/ivory with thin gold or line border.
- Cards: ivory or warm transparent surfaces, soft shadows, hairline border, slow hover transitions.
- Inputs: ivory background, explicit dark text, visible focus ring in gold.

## Do's
- Use warm jewelry-friendly neutrals and high contrast.
- Let imagery breathe with large crops and soft overlays.
- Keep animations subtle: fade, translate, hover reveal, no loud motion.
- Ensure all text is explicitly readable against dark or warm surfaces.

## Don'ts
- Do not use bright sale colors, discount badges, neon tones, or loud gradients.
- Do not overcrowd sections or make desktop layouts look mobile-stacked.
- Do not use arbitrary hex colors in JSX; add named Tailwind colors here and in the config.
