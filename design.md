# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury. Warm. Editorial. Premium demi-fine jewelry. Calm confidence. The site should feel like a curated gallery, not a discount storefront.

## Color Palette (commit to one direction)
A warm, editorial, "soft darkroom + champagne" scheme that flatters gold jewelry.

- **Ivory** `#F6F1EA` — primary canvas / page background
- **Bone** `#FBF8F3` — secondary surface (cards, header on scroll)
- **Ink** `#1F1A17` — primary text, strong contrast on ivory (>= 14:1)
- **Espresso** `#4A4039` — secondary text (still passes AA on ivory, ~9:1)
- **Muted** `#7A6F66` — tertiary text / metadata (>= 4.5:1)
- **Champagne** `#B68B5A` — primary accent (buttons, links on hover, highlights)
- **Champagne Deep** `#9A7340` — hover/pressed accent
- **Blush** `#E8D8C8` — soft warm surface (badges, hover, testimonial bg)
- **Hairline** `#E5DED3` — dividers, borders
- **Charcoal** `#26211D` — dark surface (announcement bar, footer, hero text overlay)

All text colors are explicitly set; no reliance on inherited color.

## Typography
- **Display & Headings**: Cormorant Garamond (serif) — weights 400, 500, 600
- **Body & UI**: Inter (sans) — weights 300, 400, 500, 600
- Product names: **UPPERCASE**, letter-spacing 0.18em, font-weight 500, Inter sans
- Eyebrow labels: UPPERCASE, 11px, letter-spacing 0.25em, Inter
- Headings have serif italic accents on selected words for editorial feel

## Type Scale
- `display` 72px / 1.05 / serif 500
- `h1` 56px / 1.1 / serif 500
- `h2` 40px / 1.15 / serif 500
- `h3` 24px / 1.3 / serif 500
- `lead` 18px / 1.6 / sans 400
- `body` 15px / 1.65 / sans 400
- `small` 13px / 1.5 / sans 400
- `eyebrow` 11px / 1 / sans 500 uppercase tracking-[0.25em]

## Spacing
- Section padding: 128px desktop, 80px mobile
- Container max-width: 1280px, gutter 24px
- Vertical rhythm on 8px grid

## Borders, Dividers, Shadows
- Hairline: 1px solid `#E5DED3`
- Soft shadow: `0 4px 24px rgba(31, 26, 23, 0.06)`
- Elevated shadow: `0 12px 40px rgba(31, 26, 23, 0.10)`
- Buttons: 0px radius (premium square), or 2px for slight softness
- Image aspect: hero 16:9, product 1:1, reel 9:16, tile 3:4

## Buttons
- **Primary**: bg Champagne, text Ink, uppercase 12px tracking 0.2em, py-4 px-8, hover shadow lift + 5% darker bg
- **Outline**: border 1px Ink, text Ink, hover bg Ink hover text Bone
- **Ghost**: no border, text Ink underline on hover
- All buttons transition 200ms ease

## Motion
- All transitions: 200–300ms ease-out
- Hover: subtle scale 1.02 on product images, opacity shifts on text
- Drawer / modal: 320ms cubic-bezier
- Sticky header: solid at scroll > 24px

## Do
- Use generous whitespace
- Use thin hairline dividers
- Use uppercase + letter-spacing for product names and eyebrows
- Let serif do the editorial work; sans for UI
- Add real warm-lit jewelry imagery
- Always set explicit text color on backgrounds

## Don't
- Don't use bright primary blue / red / green (it breaks the warm palette)
- Don't use low-contrast text on Blush / Champagne
- Don't use heavy drop shadows on products (editorial, not retail)
- Don't use emoji, gradients, or busy patterns
- Don't stack too many CTAs in one viewport
- Don't use generic sans for headlines
