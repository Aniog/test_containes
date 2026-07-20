# Velmora Fine Jewelry Design System

## Brand direction
Velmora uses a quiet-luxury editorial aesthetic: deep espresso backgrounds, warm champagne gold accents, and soft parchment surfaces that flatter gold jewelry without feeling flashy or discount-led.

## Typography
- Headings and product names: `Cormorant Garamond` with elegant contrast and generous line height.
- Body and UI: `Inter` for clean readability.
- Product names should appear uppercase with strong letter spacing, for example `tracking-[0.28em]`.

## Color tokens
Use named Tailwind colors only.
- `obsidian` for the primary dark background and footer: `bg-obsidian`, `text-ivory`
- `espresso` for elevated dark surfaces and overlays: `bg-espresso`
- `parchment` for light editorial panels: `bg-parchment`, `text-obsidian`
- `champagne` for premium accent buttons, dividers, highlights, and badges: `bg-champagne`, `text-obsidian`
- `rose` for the muted warm blush accent surface: `bg-rose`
- `sand` for subtle borders and supporting fills: `border-sand`
- `mist` for softer muted backgrounds and card fills: `bg-mist`
- `ivory` for readable text on dark surfaces: `text-ivory`
- `taupe` for secondary text on light surfaces: `text-taupe`

## Layout and spacing
- Use generous vertical rhythm: section padding around `py-16 md:py-24`.
- Content width should generally cap at `max-w-7xl`.
- Prefer airy grids with `gap-6 md:gap-8`.
- Use thin dividers like `border-white/10` on dark surfaces or `border-sand/70` on light surfaces.

## Surfaces and effects
- Cards should feel premium and calm with rounded corners around `rounded-2xl` to `rounded-[2rem]`.
- Shadows should be soft and diffused, for example `shadow-[0_20px_60px_rgba(33,24,22,0.12)]`.
- Hover transitions should be subtle: `transition duration-300 ease-out`.
- Buttons should be refined, either a solid champagne fill or a thin bordered style.

## Imagery
- Favor warm-lit gold jewelry, close crop editorial portraits, dark neutral backdrops, and tactile detail shots.
- UGC/reel cards should use vertical 9:16 imagery with a soft gradient overlay for readable captions.

## Do
- Maintain strong contrast for all text.
- Keep the overall palette restrained and consistent.
- Use serif headings sparingly but prominently for editorial moments.

## Don't
- Do not introduce bright sale colors, discount badges, or harsh gradients.
- Do not use pure black or pure white as the dominant palette.
- Do not hardcode random hex values in component class strings.
