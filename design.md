# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory neutrals)
- `ivory`        #F7F3EC  — page background (warm off-white)
- `cream`        #FBF8F2  — card / panel background
- `sand`         #EDE6D8  — subtle dividers, muted surfaces
- `espresso`     #2A211B  — primary dark text, footer background (deep warm brown-black)
- `cocoa`        #4A3F36  — secondary text
- `taupe`        #8A7E6E  — muted / placeholder text
- `gold`         #B08A4F  — primary accent (warm metallic gold)
- `gold-deep`    #8C6A36  — hover / pressed accent
- `gold-soft`    #D9BE8A  — soft accent fills, badges
- `line`         #E2D9C8  — hairline borders

All text on ivory/cream uses espresso/cocoa for strong contrast. Gold is used sparingly for CTAs, accents, and links. Footer (espresso bg) uses ivory text.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Nav links: uppercase, `tracking-[0.2em]`, small size (`text-xs`).
- Hero headline: serif, very large, tight leading.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-t border-line`.
- Cards: `bg-cream`, soft shadow `shadow-[0_8px_30px_rgba(42,33,27,0.06)]`, rounded-none (editorial sharp edges) or `rounded-sm`.

## Buttons
- Primary (accent): `bg-gold text-ivory`, uppercase, `tracking-[0.18em]`, `text-xs`, `px-8 py-4`, hover `bg-gold-deep`.
- Outlined: `border border-espresso text-espresso`, hover `bg-espresso text-ivory`.
- Pill variant buttons (variant selector): `border border-line`, active `bg-espresso text-ivory border-espresso`.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Use `data-strk-img` / `data-strk-bg` system with descriptive queries referencing nearby text.
- Large editorial hero (full-bleed), 4:3 product cards, 9:16 reel cards, 3x2 category tiles.

## Do's
- Keep palette consistent sitewide.
- Use generous whitespace.
- Thin hairline dividers between sections.
- Subtle transitions (`transition-all duration-300`).
- Uppercase wide-tracked labels for product names and nav.

## Don'ts
- No bright/saturated colors. No pure black or pure white.
- No heavy shadows. No rounded-full buttons (except small icon chips).
- No generic e-commerce clutter (badges, countdowns, popups).
- No low-contrast text (taupe only for secondary, never for primary content).
