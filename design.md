# MicroCosmos — Visual Style Guide

MicroCosmos is a single-page website exploring the hidden microscopic world.
The design is image-heavy, immersive, and editorial — like a nature magazine
feature crossed with a science museum exhibit.

## Theme
- Dark, cinematic background to make vivid micro-photography pop.
- Deep near-black base with subtle teal/emerald accents (life-science feel).
- Generous whitespace around text; images fill wide bands edge-to-edge.

## Typography
- Headings: "Fraunces" (serif, editorial, high-contrast) for display titles.
- Body: "Inter" (sans-serif) for readable paragraphs and UI.
- Example Tailwind: `font-serif` for headings, default sans for body.

## Colors (Tailwind tokens)
- `ink`: `#0a0f0d` (page background, near-black green)
- `ink-soft`: `#121a17` (card / section background)
- `ink-line`: `#1f2b27` (borders, dividers)
- `mist`: `#e8f1ee` (primary text on dark)
- `mist-dim`: `#9fb3ac` (secondary text)
- `emerald-glow`: `#3ddc97` (accent, links, highlights)
- `amber-glow`: `#f5b942` (secondary accent for stats/numbers)

Add these as named colors in `tailwind.config.js` under `theme.extend.colors`.

## Layout & Spacing
- Full-width sections, max content width `max-w-6xl` centered.
- Section vertical padding `py-20 md:py-28`.
- Hero is full viewport height with a background image.
- Image grids use `grid` with `gap-4 md:gap-6`, responsive 1/2/3 columns.

## Visual Style
- Rounded corners `rounded-2xl` on cards and images.
- Subtle borders `border border-ink-line`.
- Soft shadows on cards: `shadow-2xl shadow-black/40`.
- Image hover: slight scale `hover:scale-[1.03]` with `transition` and `overflow-hidden`.
- Section labels: small uppercase tracking-widest text in `emerald-glow`.

## Do's
- Use many large images (hero backgrounds, gallery grids, specimen cards).
- Keep text concise so imagery dominates.
- Use the stock image system (`data-strk-img` / `data-strk-bg`) for all photos.
- Ensure all text is clearly readable against dark backgrounds.

## Don'ts
- No light/white backgrounds for content sections (breaks the cinematic feel).
- No low-contrast text (e.g. gray on dark gray).
- No hardcoded image URLs — always use the strk image tagging system.
- No arbitrary hex codes in JSX; use the named Tailwind tokens.
