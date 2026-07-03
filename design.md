# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color. Subtle hover transitions, soft shadows.

## Color Palette
A deep refined base with warm metallic accents. One confident direction, consistent sitewide.

- `ink` (base dark): `#1A1714` — near-black warm brown, used for text and dark sections
- `cream` (page background): `#F7F3EC` — warm off-white, the primary page surface
- `sand` (secondary surface): `#EFE7DA` — slightly deeper warm neutral for cards/strips
- `gold` (accent / metallic): `#B08D57` — warm antique gold for buttons, links, accents
- `gold-deep` (hover): `#94703F` — deeper gold for hover states
- `champagne` (soft accent text): `#C9A86A` — lighter gold for subtle accents on dark
- `stone` (muted text): `#7A6F62` — warm gray for secondary body text
- `hairline` (dividers/borders): `#E2D8C8` — warm hairline border color

Contrast: ink text on cream (#1A1714 on #F7F3EC) is high contrast and accessible. Gold accent (#B08D57) is used for buttons with cream/white text where contrast is sufficient; on dark backgrounds champagne (#C9A86A) is used for readable accent text.

## Typography
- Headings & product names: **Cormorant Garamond** (elegant serif). Product names UPPERCASE with wide letter-spacing.
- Body & UI: **Inter** (clean sans-serif).
- Display hero headline: Cormorant Garamond, large, light/medium weight.

Font sizes use Tailwind scale. Hero h1 ~ text-5xl to text-7xl. Section headings text-3xl/4xl. Body text-sm/base.

## Spacing & Layout
- Generous whitespace. Section vertical padding py-20 to py-32 on desktop, py-14 on mobile.
- Max content width: max-w-7xl (1280px) for grids, max-w-3xl for text blocks.
- Hairline dividers: border-t border-hairline.

## Components
- Buttons: solid gold (`bg-gold text-cream hover:bg-gold-deep`) or outlined (`border border-ink text-ink hover:bg-ink hover:text-cream`). Rounded-none (sharp) or rounded-sm for premium feel. Uppercase, tracking-wide, text-xs/sm, px-8 py-4.
- Product cards: clean, image-forward, name uppercase serif, price sans. Hover reveals second image + quick add button.
- Inputs: underline style or thin border, no heavy fills.

## Do's
- Use warm neutrals and gold accents consistently.
- Keep imagery large and editorial.
- Use thin hairline dividers between sections.
- Subtle transitions (duration-300, ease-in-out).
- Soft shadows: shadow-sm, shadow-md only.

## Don'ts
- No bright/saturated colors. No pure black or pure white.
- No heavy drop shadows or glows.
- No rounded-full buttons (except small icon pills).
- No generic e-commerce clutter (badges, sale flashes) unless subtle.
- No low-contrast text. Always ensure readable foreground on every surface.
