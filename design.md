# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Not loud, not discount-looking, not generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette
A warm editorial scheme that flatters gold jewelry: soft ivory base, deep espresso for contrast sections, and a refined warm-gold accent.

| Token | Hex | Usage |
|------|------|-------|
| `ivory` | `#F7F3EC` | Page background, light sections |
| `cream` | `#FBF8F2` | Cards, raised surfaces |
| `espresso` | `#1C1714` | Dark sections, footer, hero overlay text |
| `ink` | `#2A2420` | Primary body text |
| `stone` | `#6B6258` | Muted/secondary text |
| `sand` | `#E8E0D3` | Hairline dividers, borders, soft fills |
| `gold` | `#B08D57` | Primary accent (buttons, links, highlights) |
| `gold-soft` | `#C9A96A` | Hover/lighter accent |
| `gold-deep` | `#8A6D3F` | Pressed/active accent |

Tailwind config maps these as named colors (e.g. `bg-ivory`, `text-gold`, `border-sand`).

## Typography
- **Headings & product names**: `Cormorant Garamond` (serif), weights 400–600. Large, elegant.
- **Body & UI**: `Inter` (sans-serif), weights 300–600.
- **Product names**: UPPERCASE with wide letter-spacing (`tracking-[0.2em]`), serif.
- **Eyebrow / labels**: UPPERCASE sans, `tracking-[0.25em]`, `text-xs`, muted.

Font classes: `.font-serif` → Cormorant Garamond; `.font-sans` → Inter (default).

## Spacing & Layout
- Generous whitespace. Section vertical padding `py-20 md:py-28`.
- Container max-width `max-w-7xl`, horizontal padding `px-5 md:px-8`.
- Hairline dividers: `border-sand` / `border-t`.

## Buttons
- **Primary (accent)**: solid `bg-gold text-cream`, `tracking-[0.15em] uppercase text-xs`, `px-8 py-4`, hover `bg-gold-deep`, subtle transition.
- **Outline**: `border border-ink text-ink`, hover `bg-ink text-cream`.
- Rounded-none or minimal radius (`rounded-none`). Premium, sharp edges.

## Imagery
- Large editorial imagery, warm-lit gold jewelry on dark/neutral backgrounds.
- Use the `data-strk-img` / `data-strk-bg` system for all imagery.
- Soft shadows only where needed (`shadow-sm`).

## Do's
- Keep one confident warm-editorial direction sitewide.
- Ensure strong contrast: dark text on ivory, cream text on espresso.
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, small highlights, links.

## Don'ts
- No loud/discount colors (no bright reds, neon, pure black on pure white).
- No generic rounded e-commerce cards; prefer sharp edges and hairlines.
- No low-contrast text (muted text must stay readable on its surface).
- No hardcoded hex in JSX — use Tailwind named tokens.
