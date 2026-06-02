# NEO-FORM Design System

## Visual Identity
Neo-Brutalism meets Japanese minimalism. Raw, intentional, uncompromising.

## Colors
- Background: `#FFFFFF` (stark white) — `bg-white`
- Foreground / Primary text: `#0A0A0A` (near-black) — `text-[#0A0A0A]`
- Accent: `#FF2D00` (raw red) — `text-[#FF2D00]` / `bg-[#FF2D00]`
- Muted text: `#6B6B6B` — `text-[#6B6B6B]`
- Border / Rule: `#0A0A0A` — `border-[#0A0A0A]`
- Overlay dark: `rgba(10,10,10,0.85)` — used for hover metadata overlays
- Studio grain overlay: `rgba(10,10,10,0.45)` — for B&W grain effect

## Typography
- Font family: `'Space Mono', monospace` — loaded via Google Fonts
- All text is monospace; no serif or sans-serif
- Headings: uppercase, tracked wide (`tracking-widest`)
- Body: normal case, tight leading
- Metadata labels: uppercase, small, letter-spaced (`text-xs tracking-[0.3em]`)
- Nav links: uppercase, `text-sm tracking-[0.25em]`

### Scale
- Display: `text-[clamp(3rem,10vw,9rem)]` — massive, bleeds off grid
- H1: `text-5xl md:text-7xl`
- H2: `text-2xl md:text-4xl`
- Label/meta: `text-xs`
- Body: `text-sm`

## Borders & Spacing
- Borders are `1px solid #0A0A0A` — raw, no radius (`rounded-none`)
- No border-radius anywhere — brutalist aesthetic
- Generous whitespace between sections: `py-24` or `py-32`
- Tight internal padding: `p-4` or `p-6`

## Layout
- CSS Grid with `grid-template-areas` for intentional asymmetry
- Images break the grid — negative margins, overlaps via `z-index`
- No max-width containers on hero/full-bleed sections
- Content sections: `max-w-screen-xl mx-auto px-6`

## Images
- Un-cropped, full-bleed editorial portraits
- `object-fit: cover`, `object-position: top center`
- Hover reveals raw metadata overlay with monospace text

## Interactions
- Hover: metadata overlay slides up from bottom (`translate-y-full` → `translate-y-0`)
- Nav: underline on hover, no color change
- Transitions: `duration-300 ease-in-out`
- Cursor: default arrow (no pointer unless interactive)

## Do's
- Use `font-mono` on everything
- Use uppercase for all labels and nav
- Use stark black borders as design elements
- Let images overflow their containers intentionally
- Use `mix-blend-multiply` for grain overlays

## Don'ts
- No rounded corners
- No drop shadows (use borders instead)
- No color gradients
- No sans-serif or serif fonts
- No centered hero text (prefer left-aligned or offset)
- No card hover shadows — use border or overlay instead
