# MicroCosmos Design System

## Concept
A dark, immersive scientific/nature aesthetic evoking the microscopic world — cells, bacteria, water droplets, insects, and crystalline structures. The palette draws from bioluminescent blues, teals, and deep space-like blacks.

## Colors
- Background (deep): `#050d14` — near-black deep ocean
- Background (surface): `#0a1628` — dark navy
- Background (card): `#0f1f35` — slightly lighter navy
- Accent primary: `#00d4ff` — electric cyan (teal-blue)
- Accent secondary: `#7c3aed` — deep violet
- Accent glow: `#00ffcc` — bioluminescent green-teal
- Text primary: `#e8f4f8` — near-white with cool tint
- Text secondary: `#7fb3c8` — muted teal-grey
- Text muted: `#3d6478` — dark muted blue

Custom Tailwind tokens:
- `cosmos-deep`: `#050d14`
- `cosmos-dark`: `#0a1628`
- `cosmos-card`: `#0f1f35`
- `cosmos-cyan`: `#00d4ff`
- `cosmos-violet`: `#7c3aed`
- `cosmos-glow`: `#00ffcc`
- `cosmos-text`: `#e8f4f8`
- `cosmos-muted`: `#7fb3c8`
- `cosmos-dim`: `#3d6478`

## Typography
- Font: `Space Grotesk` (headings), `Inter` (body)
- Heading sizes: `text-5xl` / `text-4xl` / `text-2xl` / `text-xl`
- Body: `text-base` / `text-sm`
- Letter spacing for headings: `tracking-wide`
- Uppercase labels: `text-xs tracking-widest uppercase`

## Borders & Shadows
- Card border: `border border-cosmos-cyan/20`
- Glow shadow: `shadow-[0_0_30px_rgba(0,212,255,0.15)]`
- Hover glow: `shadow-[0_0_50px_rgba(0,212,255,0.3)]`
- Border radius: `rounded-2xl` for cards, `rounded-full` for badges

## Spacing
- Section padding: `py-20 md:py-28`
- Card padding: `p-6`
- Grid gaps: `gap-6` / `gap-8`

## Do's
- Use dark backgrounds with glowing cyan/teal accents
- Use `backdrop-blur` for glass-morphism effects on overlays
- Use gradient text for headings: `bg-gradient-to-r from-cosmos-cyan to-cosmos-glow bg-clip-text text-transparent`
- Use subtle grid/dot patterns for section backgrounds
- Images should be full-bleed with slight overlay for text legibility

## Don'ts
- No white backgrounds
- No warm color palettes (no orange, red, yellow as primary)
- No flat, unstyled cards
- No light text on light backgrounds
