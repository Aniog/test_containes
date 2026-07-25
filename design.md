# Velmora Fine Jewelry — Visual Identity

## Mood
Quiet luxury. Warm, editorial, intimate. A demi-fine gold jewelry house — never loud, never discount-looking, never generic e-commerce. Every surface breathes: generous whitespace, hairline dividers, large imagery, restrained accent use.

## Color Palette (one direction, used sitewide)
Deep espresso-near-black base with warm champagne-gold accents and soft ivory surfaces. Dark and light sections alternate editorially; gold is the only accent.

| Token | Hex | Tailwind name | Usage |
|---|---|---|---|
| Noir | #191410 | `noir` | Primary text on light, dark section backgrounds, solid buttons |
| Noir soft | #241D17 | `noir-soft` | Slightly lifted dark surface (cards on dark, footer) |
| Ivory | #FAF6F0 | `ivory` | Primary light page background |
| Cream | #F3EDE2 | `cream` | Alternate light section background |
| Sand | #E7DECF | `sand` | Subtle fills, hover washes, pill backgrounds |
| Gold | #B08D57 | `gold` | The accent: CTAs, stars, prices on dark, links hover, details |
| Gold deep | #8F6E3E | `gold-deep` | Hover state of gold buttons |
| Gold light | #D6BE96 | `gold-light` | Gold text/icons on dark backgrounds |
| Hairline | #E4DCCF | `hairline` | Hairline dividers/borders on light surfaces |
| Hairline dark | #3A322A | `hairline-dark` | Hairline dividers/borders on dark surfaces |
| Muted | #7D7264 | `muted` | Secondary text on light |
| Muted dark | #A79B8B | `muted-dark` | Secondary text on dark |

Rules:
- Text on `noir` backgrounds: `ivory` or `muted-dark`. Gold only for small accents (eyebrows, prices, stars), never long paragraphs.
- Text on `ivory`/`cream`: `noir` primary, `muted` secondary.
- Buttons: solid `noir` with `ivory` text on light; solid `gold` with `noir` text as the single accent CTA per view; or outlined (1px border, transparent bg).
- Never introduce other accent colors (no blue links, no red sale badges). Ratings stars are gold. Focus rings use gold.

## Typography
- Headings / product names / logo: **Cormorant Garamond** (serif), weights 300–500. Product names and eyebrows are UPPERCASE with wide tracking (`tracking-[0.18em]`–`[0.3em]`).
- Body / UI / prices / buttons: **Inter** (sans), weights 300–600.
- Eyebrow labels: Inter, 11–12px, uppercase, `tracking-[0.25em]`, gold.
- Hero headlines: serif, `font-light`, generous line-height, can italicize one word for editorial feel.
- Buttons: Inter, 12–13px, uppercase, `tracking-[0.2em]`, no rounded corners (square, `rounded-none`) — jewelry-house feel.

## Shape & Depth
- No border radius on buttons, inputs, image frames, or cards (`rounded-none`). Quiet-luxury = sharp, architectural edges.
- Shadows: only soft, diffuse (`shadow-[0_20px_50px_-20px_rgba(25,20,16,0.25)]`), used sparingly on cards/drawer.
- Dividers: 1px hairlines (`border-hairline` / `border-hairline-dark`).

## Motion
- Subtle only: 300–500ms `ease-out` transitions on opacity/transform.
- Product card hover: second image crossfades, image scales `1.05`, "Add to Cart" bar slides up.
- Nav: transparent over hero → solid ivory with hairline border after 40px scroll.
- Reveal-on-scroll: fade + translateY(16px) via IntersectionObserver utility.
- No bouncy/spring easing, no autoplay carousels.

## Imagery
- Warm-lit macro gold jewelry photography, dark espresso or neutral ivory backgrounds, models with warm skin tones.
- Product shots: single piece, centered, on deep brown/black or warm neutral backdrop, soft directional light.
- Ratios: hero 16x9 (full-bleed bg), product cards 4x3→portrait 3x4 crops, UGC reels 9x16 vertical, category tiles 3x4, brand story 4x3.
- All images come from the strk-img tagging system with descriptive multi-reference queries — never hardcode URLs.

## Do / Don't
- Do: whitespace, hairlines, uppercase tracked serif labels, gold used sparingly.
- Don't: rounded pill buttons for primary CTAs, bright colors, drop shadows everywhere, dense grids with no breathing room, gradients, neon, discount badges.
