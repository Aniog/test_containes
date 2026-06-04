# Ancient Canopy — Design System

## Visual Identity
A heavy, grounded UI evoking deep old-growth forests. Deep desaturated greens, mist-grey accents, and rugged minimalism.

## Colors (Tailwind: canopy-*)
- **deep** `#1A2421` — Primary background, the forest floor at midnight
- **moss** `#2D3A2C` — Card surfaces, secondary backgrounds
- **bark** `#3B2F25` — Accent, borders, earthy contrast
- **mist** `#C4C9C2` — Secondary text, subtle UI elements
- **mist-light** `#DDE0D9` — Primary text, headings, active states
- **fog** `#8A9085` — Fog overlay, muted text, dividers
- **stone** `#5C5F58` — Tertiary text, captions
- **lichen** `#7A8B6E` — Accent highlights, hover states

## Typography
- **Headings:** Playfair Display (serif, font-display) — Bold, large, grounded
- **Body:** Inter (sans-serif, font-body) — Clean, readable
- Headings use tracking-tight, heavy weight (700+)

## Borders & Surfaces
- Rugged: 2px border-radius, 1px borders at 30% mist opacity
- No glossy shadows — use hard, minimal borders
- Cards: bg-canopy-moss, rug-border

## Layout
- Max width content: 1400px, centered
- Generous vertical spacing (py-24, py-32)
- Navigation: fixed, low-opacity bg, minimal

## Do
- Use large bold Playfair Display headings
- Keep the palette dark and muted
- Use the fog overlay for atmosphere
- Let images breathe with generous whitespace
- Use rugged borders (2px radius, thin mist borders)

## Don't
- No bright colors or neons
- No large border-radius or pill shapes
- No box shadows or glossy effects
- No light backgrounds
- No fast transitions (keep timing ≥ 500ms)