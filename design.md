# MicroCosmos — Visual Style Guide

A single-page website exploring the hidden microscopic world. The design is
immersive, editorial, and image-forward, with a dark, scientific aesthetic that
lets photography dominate.

## Typography
- Display / Headings: `Inter`, weights 700–800, tight tracking (`tracking-tight`).
- Body: `Inter`, weight 400, relaxed leading (`leading-relaxed`).
- Eyebrow / labels: uppercase, `text-xs`, `tracking-[0.2em]`, `font-semibold`.

## Colors (dark scientific palette)
Use these as Tailwind named tokens via inline `bg-[...]` / `text-[...]` only when
needed; prefer semantic class pairs below.

- Background base: `#0a0f14` (near-black with cool tint)
- Surface / card: `#111922`
- Surface elevated: `#16202b`
- Border: `#1f2c3a`
- Foreground text: `#e8eef4`
- Muted foreground: `#8a9aab`
- Accent (bio-green): `#4ade80`
- Accent secondary (cyan): `#22d3ee`

Semantic pairs:
- `bg-[#0a0f14]` / `text-[#e8eef4]`
- `bg-[#111922]` / `text-[#e8eef4]`
- `text-[#8a9aab]` for muted text

## Layout & Spacing
- Max content width: `max-w-6xl` for text, `max-w-7xl` for galleries.
- Section vertical padding: `py-20 md:py-28`.
- Generous gaps in grids: `gap-6` / `gap-8`.
- Rounded corners: `rounded-2xl` for cards, `rounded-full` for pills.

## Visual Style
- Full-bleed hero with background image and dark gradient overlay.
- Image-forward galleries: large thumbnails, hover scale (`hover:scale-105`).
- Cards with subtle border `border border-[#1f2c3a]` and soft shadow.
- Thin accent rules under section eyebrows (`h-px w-12 bg-[#4ade80]`).
- Smooth transitions: `transition duration-500`.

## Do's
- Let images breathe — large, high-ratio visuals.
- Keep text high-contrast on dark surfaces.
- Use the bio-green accent sparingly for emphasis.

## Don'ts
- No light backgrounds for primary sections.
- No low-contrast muted text on dark cards without explicit color.
- No arbitrary font sizes; use Tailwind scale.
