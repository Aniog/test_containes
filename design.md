# Velmora Fine Jewelry — Visual Identity

## Mood
Quiet luxury. Warm, editorial, candle-lit. A soft ivory/linen canvas with deep espresso-brown anchor tones and a single restrained metallic gold accent. Never loud, never discount-looking, never generic. Generous whitespace, thin hairline dividers, large serif headlines.

## Palette (all named in tailwind.config.js — never use raw hex in components)
- `cream` (#F7F2EA) — primary page background, warm ivory
- `sand` (#EFE7DA) — alternate section background
- `shell` (#FBF8F2) — card / product image backdrop
- `espresso` (#241B12) — primary text, solid buttons, dark footer
- `cocoa` (#6B5D4F) — secondary text
- `bronze` (#9A7B2D) — metallic gold accent: CTAs, stars, active states, small caps labels
- `line` (#E3D9C8) — hairline borders/dividers
- `clay` (#B04E35) — sparingly used for errors / sale flags

## Typography
- Headings & product names: **Cormorant Garamond** (`font-serif`), light/medium weight. Product names in UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Body & UI: **Inter** (`font-sans`), 400/500. Small caps labels: `text-xs uppercase tracking-[0.22em]`.
- Fonts loaded via Google Fonts `<link>` in index.html only.

## Surfaces & Lines
- Hairline dividers: `border-line` 1px, used between sections and inside drawers/accordions.
- Cards are borderless on `shell` backgrounds; shadows only as soft hover lift: `shadow-[0_18px_40px_-24px_rgba(36,27,18,0.35)]`.
- No rounded corners except pills for variant selectors / quantity steppers. Buttons are sharp rectangles (editorial) or fully rounded pills for small UI chips.

## Buttons
- Primary: `bg-espresso text-cream hover:bg-bronze` — sharp rectangle, uppercase tracking, `h-12 px-8`.
- Accent: `bg-bronze text-white hover:bg-espresso`.
- Outline: `border border-espresso text-espresso hover:bg-espresso hover:text-cream`.
- All transitions `duration-300 ease-out`.

## Imagery
- Warm gold jewelry photography on dark/neutral backdrops. Product cards use `shell` (light warm) backdrops; hero and story use dark, warm-lit imagery.
- Images scale subtly on hover (`group-hover:scale-[1.04] transition duration-700`).
- Stock images are provided via the data-strk-img tagging system — queries reference nearby text ids.

## Do
- Uppercase serif product names with wide tracking
- Small-caps bronze eyebrow labels above section titles
- Hairline dividers, generous vertical rhythm (`py-20 md:py-28`)
- One accent color (bronze) used with discipline

## Don't
- No gradients, no bright saturated colors, no pill-shaped primary CTAs
- No heavy drop shadows, no dark text on bronze, no centered body paragraphs
- No raw hex codes or arbitrary pixel values in class strings — use the named tokens above
