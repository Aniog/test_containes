# NEO-FORM Design System

## Visual Identity
Neo-Brutalism meets Japanese minimalism. Stark, raw, intentional.

## Colors
- `#FFFFFF` — Primary background (stark white) → Tailwind: `bg-white`
- `#000000` — Primary text and borders (pure black) → Tailwind: `text-black`, `border-black`
- `#F5F5F0` — Off-white surface → Tailwind: `bg-[#F5F5F0]`
- `#1A1A1A` — Near-black for secondary text → Tailwind: `text-[#1A1A1A]`
- `#E8E8E0` — Subtle divider/border → Tailwind: `border-[#E8E8E0]`
- Accent: none — color is used sparingly; contrast is the accent

## Typography
- Font: `'Space Mono', monospace` — raw, mechanical, anti-decorative
- Display: `font-mono text-[clamp(3rem,10vw,9rem)] font-bold tracking-tighter leading-none`
- Heading: `font-mono text-2xl md:text-4xl font-bold tracking-tight`
- Label/Meta: `font-mono text-xs tracking-[0.2em] uppercase`
- Body: `font-mono text-sm leading-relaxed`
- DO NOT use serif or sans-serif fonts anywhere

## Borders & Surfaces
- Borders: `border border-black` — always 1px solid black, no radius
- Cards: no shadow, no radius — `border border-black`
- Hover states: invert colors `bg-black text-white`
- No border-radius anywhere — `rounded-none` is the rule

## Spacing
- Generous whitespace: sections use `py-16 md:py-24`
- Grid gaps: `gap-0` or `gap-px` for brutalist tight grids, `gap-4` for breathing room
- Padding: `p-4` or `p-6` for containers

## Layout
- Max width: `max-w-screen-2xl mx-auto`
- Asymmetrical grids using CSS Grid with `grid-template-areas`
- Images break the grid intentionally — overlapping via negative margins or z-index
- Full-bleed images: `w-full h-full object-cover`

## Navigation
- Fixed top bar, `border-b border-black bg-white`
- Logo: `font-mono font-bold tracking-[0.3em] text-sm uppercase`
- Nav links: `font-mono text-xs tracking-[0.2em] uppercase`
- Active state: underline with `border-b border-black`

## Images
- Always uncropped, full-bleed, `object-cover`
- No rounded corners, no shadows
- Hover reveals metadata overlay in monospace

## Do's
- Use stark contrast (black on white, white on black)
- Use massive typography that bleeds off-screen
- Use intentional asymmetry
- Use raw metadata labels (e.g., `DROP_04 // 2026`)
- Use `mix-blend-mode: multiply` for overlapping image effects

## Don'ts
- No gradients
- No rounded corners
- No drop shadows
- No color accents
- No decorative icons
- No centered hero layouts (always offset/asymmetric)
