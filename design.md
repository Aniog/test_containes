# Ancient Canopy — Design System

## Visual Identity
Ancient Canopy evokes the weight, silence, and depth of old-growth forests. The UI is heavy, grounded, and atmospheric.

## Colors
- **Forest Deep** `#1A2421` — primary background, darkest surface
- **Canopy Shadow** `#0F1A17` — deeper background, nav
- **Moss Dark** `#2C3D35` — card/surface background
- **Moss Mid** `#3D5247` — borders, dividers
- **Mist Grey** `#8FA89E` — secondary text, muted labels
- **Fog White** `#D6E0DC` — primary text on dark backgrounds
- **Bark Accent** `#6B8C7A` — accent, hover states
- **Fog Overlay** `rgba(26,36,33,0.72)` — fog effect on images

## Typography
- **Display / Headings**: "Playfair Display" — serif, bold, large. Conveys age and gravitas.
- **Body / UI**: "Inter" — clean, readable sans-serif.
- Heading sizes: H1 `5xl–7xl`, H2 `3xl–4xl`, H3 `xl–2xl`
- Letter-spacing: headings use `tracking-wide` or `tracking-wider`
- Line-height: generous, `leading-relaxed` or `leading-loose`

## Borders & Surfaces
- "Rugged" borders: `border border-moss-mid` with slight roughness via `rounded-none` or `rounded-sm`
- Cards use `border-l-4 border-bark-accent` for accent edges
- No smooth rounded corners — prefer sharp or very slightly rounded (`rounded-sm`)
- Subtle box shadows: `shadow-[0_4px_24px_rgba(0,0,0,0.5)]`

## Spacing
- Generous padding: sections use `py-16 md:py-24`
- Grid gaps: `gap-3` to `gap-4` for masonry density

## Effects
- **Fog overlay**: `bg-forest-deep/70` overlay on images, transitions to transparent on hover (`group-hover:opacity-0`)
- **Smooth scroll**: CSS `scroll-behavior: smooth` + custom JS momentum scroll
- **Transitions**: `transition-all duration-700 ease-in-out` for fog clearing

## Do's
- Use large, bold serif headings
- Keep backgrounds very dark
- Use `fog-white` text on dark surfaces
- Use `mist-grey` for secondary/caption text
- Borders should feel structural, not decorative
- Images should feel immersive and full-bleed

## Don'ts
- No bright colors or high-saturation accents
- No rounded pill buttons — use sharp rectangular buttons
- No light backgrounds
- No thin, delicate typography for headings
