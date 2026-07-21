# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Think warm-lit editorial photography, generous whitespace, hairline dividers, restrained metallic accents.

## Color Palette
A deep, refined espresso base with warm metallic gold accents and soft ivory neutrals. One confident direction, sitewide.

- `espresso` (base dark): `#1C1714` — deep warm near-black, used for dark sections, footer, hero overlays
- `ink` (primary text on light): `#2A2420` — warm near-black for body text
- `ivory` (light background): `#F7F2EA` — warm cream, primary page background
- `cream`: `#FBF8F2` — lighter cream for cards / alt sections
- `sand`: `#E8DECF` — soft warm neutral for dividers, subtle surfaces
- `gold` (accent): `#B08A4F` — refined warm metallic gold for CTAs, accents, links
- `gold-deep`: `#8A6A38` — darker gold for hover states
- `muted`: `#8A7F73` — warm muted gray for secondary text
- `stone`: `#6B6258` — slightly darker muted for captions

Tailwind tokens (added to tailwind.config.js `theme.extend.colors`):
- `espresso: '#1C1714'`
- `ink: '#2A2420'`
- `ivory: '#F7F2EA'`
- `cream: '#FBF8F2'`
- `sand: '#E8DECF'`
- `gold: '#B08A4F'`
- `gold-deep: '#8A6A38'`
- `muted: '#8A7F73'`
- `stone: '#6B6258'`

## Typography
- Headings & product names: **Cormorant Garamond** (elegant serif). Loaded via Google Fonts in index.html.
- Body & UI: **Inter** (clean sans-serif). Loaded via Google Fonts in index.html.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Eyebrow / label text: UPPERCASE, `tracking-[0.25em]`, `text-xs`, `text-gold` or `text-muted`.

Tailwind tokens:
- `font-serif: ['Cormorant Garamond', 'serif']`
- `font-sans: ['Inter', 'system-ui', 'sans-serif']`

## Spacing & Layout
- Generous whitespace. Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 sm:px-8`.
- Hairline dividers: `border-t border-sand/60`.
- Card spacing: `gap-6 md:gap-8`.

## Buttons
- Primary (accent): solid `bg-gold text-cream hover:bg-gold-deep`, `tracking-[0.18em] uppercase text-xs`, `px-8 py-4`, subtle transition `duration-300`.
- Outlined: `border border-ink/30 text-ink hover:border-gold hover:text-gold`.
- On dark backgrounds: `bg-cream text-espresso hover:bg-white` or outlined `border-cream/40 text-cream`.

## Cards & Surfaces
- Product cards: `bg-cream`, soft shadow `shadow-[0_10px_40px_-20px_rgba(28,23,20,0.25)]`, hover lift `hover:-translate-y-1 transition duration-500`.
- Image containers: `overflow-hidden`, images `object-cover`, hover reveals second image with crossfade.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds. Editorial close-ups.
- Use the `data-strk-img` / `data-strk-bg` stock image system with descriptive queries referencing nearby text.

## Animations
- Subtle, slow transitions (`duration-300` to `duration-700`).
- Hover: gentle lift, image crossfade, underline reveal on links.
- No bouncy or flashy motion.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — CTAs, small labels, hairline accents.
- Ensure strong contrast: dark text on ivory/cream, cream/ivory text on espresso.
- Uppercase wide-tracked product names and eyebrow labels.

## Don'ts
- No bright/discount reds, no generic blue links.
- No heavy drop shadows or thick borders.
- No centered mobile-stacked layouts forced onto desktop.
- No low-contrast text (e.g. gold text on ivory body copy — use ink instead).
