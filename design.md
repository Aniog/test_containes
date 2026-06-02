# Intertwined — Design System

## Visual Identity
"Humanistic Minimalist" — warm, organic, editorial. Nature meets humanity.

## Color Palette
- Bark (warm brown): `#8B6F5E` — CSS var `--color-bark`
- Sand (light tan): `#D4B896` — CSS var `--color-sand`
- Petal (blush): `#E8D5C4` — CSS var `--color-petal`
- Cream (background): `#F5EDE3` — CSS var `--color-cream`
- Moss (deep green): `#4A6741` — CSS var `--color-moss`
- Fern (mid green): `#6B8F5E` — CSS var `--color-fern`
- Sage (light green): `#A8C5A0` — CSS var `--color-sage`
- Mist (pale green): `#C8DFC4` — CSS var `--color-mist`
- Sky (blue): `#7BA7BC` — CSS var `--color-sky`
- Dusk (deep blue): `#4A7A8A` — CSS var `--color-dusk`
- Stone (near-black): `#2C2C2C` — CSS var `--color-stone`
- Ash (mid-gray): `#5A5A5A` — CSS var `--color-ash`

## Typography
- **Handwriting / Quotes**: `Caveat` — use `.font-handwriting` or `font-family: 'Caveat', cursive`
- **Serif / Headlines**: `Playfair Display` — use `.font-serif` or `font-family: 'Playfair Display', serif`
- **Body / UI**: `DM Sans` — use `.font-sans` or `font-family: 'DM Sans', sans-serif`

### Type Scale
- Display: `clamp(3rem, 7vw, 6rem)`, Playfair Display, stone
- H1: `clamp(2rem, 4vw, 3.5rem)`, Playfair Display
- H2: `clamp(1.5rem, 3vw, 2.5rem)`, Playfair Display
- Quote: `clamp(1.5rem, 3vw, 2.5rem)`, Caveat, bark
- Label: `0.7rem`, DM Sans, 0.25em letter-spacing, uppercase, ash
- Body: `1rem`, DM Sans, 1.7 line-height
- Caption: `0.85rem`, DM Sans, ash

## Spacing
- Section padding: `py-20 md:py-32`
- Container: `max-w-7xl mx-auto px-6 md:px-12`
- Card gap: `gap-6 md:gap-8`

## Borders & Shadows
- Subtle card border: `border border-[#E8D5C4]`
- Soft shadow: `shadow-[0_4px_24px_rgba(139,111,94,0.08)]`
- No harsh drop shadows — keep it airy

## Animations (Framer Motion)
- Page enter: `opacity 0→1, y 20→0, duration 0.6s, ease easeOut`
- Stagger children: `0.1s` delay between items
- Image morph: clip-path transitions, `duration 1.2s, ease easeInOut`
- Hover scale: `scale 1→1.03, duration 0.4s`

## Do's
- Use organic shapes (ellipses, blobs) for image masks
- Mix handwriting quotes with clean body text
- Generous whitespace — let images breathe
- Warm cream backgrounds, never pure white or pure black
- Subtle grain/texture overlays on hero sections

## Don'ts
- No harsh borders or heavy drop shadows
- No pure black text — use stone (#2C2C2C)
- No cold grays — always warm tones
- No tight letter-spacing on body text
- No more than 2 fonts per section
