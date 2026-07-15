# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color. Subtle hover transitions, soft shadows.

## Color Palette
A deep refined base with warm metallic accents. One confident direction, sitewide.

- **Ink (base dark)**: `#1A1714` — near-black warm brown, used for dark sections, hero overlays, footer. (tailwind: `ink`)
- **Espresso**: `#2A2420` — slightly lighter warm dark for cards on dark bg. (tailwind: `espresso`)
- **Cream (base light)**: `#F7F2EA` — warm off-white, primary page background. (tailwind: `cream`)
- **Sand**: `#EDE4D6` — warm neutral for section bands, dividers. (tailwind: `sand`)
- **Champagne (accent)**: `#C9A24B` — warm metallic gold accent for buttons, links, highlights. (tailwind: `champagne`)
- **Champagne-dark**: `#A8842F` — hover/pressed state for accent. (tailwind: `champagne-dark`)
- **Mocha (body text on light)**: `#3D332B` — warm dark brown for body text. (tailwind: `mocha`)
- **Taupe (muted text on light)**: `#8A7B6C` — secondary text on light bg. (tailwind: `taupe`)
- **Stone (muted text on dark)**: `#B8A99A` — secondary text on dark bg. (tailwind: `stone`)

### Semantic token pairs (strong contrast)
- Light surfaces: `text-mocha` on `bg-cream` / `bg-sand`
- Dark surfaces: `text-cream` on `bg-ink` / `bg-espresso`
- Accent: `text-ink` on `bg-champagne` (buttons), `text-champagne` on `bg-ink` (links on dark)
- Muted: `text-taupe` on light, `text-stone` on dark — always legible, never invisible

## Typography
- **Headings & product names**: Cormorant Garamond (serif), weights 400–600. Editorial, elegant.
- **Body & UI**: Inter (sans-serif), weights 300–600.
- **Product names**: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`), serif.
- Headings use serif; all UI labels, buttons, nav, prices use sans-serif with letter-spacing.

### Font scale (desktop)
- Hero headline: `text-5xl md:text-7xl`, serif, leading tight
- Section titles: `text-3xl md:text-4xl`, serif
- Product names: `text-sm md:text-base`, serif, uppercase, tracking-wide
- Body: `text-sm md:text-base`, sans, `text-mocha`
- Eyebrow/labels: `text-xs uppercase tracking-[0.2em]`, sans, `text-taupe`/`text-champagne`

## Spacing & Layout
- Generous whitespace. Section padding `py-20 md:py-28`.
- Container max-width `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-t border-sand` or `border-white/10` on dark.
- Soft shadows: `shadow-sm`, `shadow-md` on hover for cards.

## Buttons
- **Primary (accent)**: solid `bg-champagne text-ink`, uppercase, tracking-wide, `text-xs`, `px-8 py-4`, hover `bg-champagne-dark`. Rounded-none (sharp editorial) or `rounded-sm`.
- **Secondary (outlined)**: `border border-ink text-ink` on light, `border border-cream/40 text-cream` on dark. Hover fills.
- Subtle transitions: `transition-all duration-300`.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds. Large editorial close-ups.
- Product cards: square or 4x5 ratio, hover reveals second image.
- Reels: 9x16 vertical.

## Do's
- Use serif for all headings and product names.
- Keep accent (champagne) restrained — buttons, small highlights, links on dark.
- Use generous whitespace and hairline dividers.
- Ensure strong contrast on every surface.

## Don'ts
- Don't use bright/saturated colors. Stay in the warm neutral + gold family.
- Don't use rounded-full buttons (too casual). Keep edges sharp or slightly rounded.
- Don't use low-contrast text. Every value must be readable.
- Don't mix many fonts. Two families only.
