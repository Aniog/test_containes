# SSourcing China — Visual Style Guide

A professional, trustworthy B2B visual style for a China-based sourcing agent serving global buyers. The look must feel international, established, and practical — never flashy, never exaggerated.

## Brand Tone
- Professional, clear, practical, no exaggerated claims
- Trustworthy, international, B2B
- Real factory/QC/shipping imagery
- Calm confidence, not hype

## Color Palette
Use semantic Tailwind tokens via the `brand-` prefix.

| Token | Hex | Usage |
|---|---|---|
| `brand-ink` | `#0B1E3A` | Deep navy. Primary headings, dark sections, footer |
| `brand-primary` | `#163C73` | Primary buttons, links, accents |
| `brand-primary-hover` | `#0F2C57` | Hover for primary actions |
| `brand-accent` | `#C8A45D` | Warm gold. Secondary CTA, highlights, trust badges |
| `brand-surface` | `#F5F7FA` | Section backgrounds, card alt |
| `brand-surface-2` | `#EDF1F6` | Deeper section band |
| `brand-line` | `#E3E8EF` | Hairline borders, dividers |
| `brand-text` | `#0F172A` | Body text on light surfaces |
| `brand-muted` | `#5A6A82` | Secondary text, helper text |
| `brand-muted-2` | `#8694AB` | Tertiary text, metadata |
| `brand-success` | `#15803D` | Trust signals, positive state |
| `brand-white` | `#FFFFFF` | Card background, hero over image |

Always set explicit `text-*` color on colored surfaces; never rely on inherited color.

## Typography
Google Font: **Inter** (loaded in `index.html`).
- `font-sans` is the base.
- Headings: `font-bold` or `font-extrabold`, tight tracking (`tracking-tight`).
- Body: `font-normal` or `font-medium`, `leading-relaxed` for paragraphs.
- No display fonts. No script fonts. No italics for emphasis in headings.

Type scale (Tailwind):
- `text-4xl` / `text-5xl` / `text-6xl` — page hero H1 (responsive)
- `text-3xl` / `text-4xl` — section H2
- `text-xl` / `text-2xl` — subsection H3
- `text-base` — body
- `text-sm` — helper / metadata
- `text-xs` — micro labels

## Spacing
- Section vertical padding: `py-16` mobile, `py-24` desktop.
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Card padding: `p-6` to `p-8`.
- Grid gaps: `gap-6` to `gap-8`.

## Borders & Shadows
- Borders: `border border-brand-line`, hairline weight.
- Card radius: `rounded-lg` (default), `rounded-xl` for larger feature cards.
- Shadows: very subtle. `shadow-sm` for resting cards, `shadow-md` only on hover.
- No heavy drop shadows. No neon glows.

## Buttons
Three styles only:
1. **Primary** (gold accent): `bg-brand-accent hover:bg-brand-accent/90 text-brand-ink font-semibold rounded-md px-6 py-3`. The main "Get a Free Sourcing Quote" CTA.
2. **Secondary** (outline): `border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-semibold rounded-md px-6 py-3`.
3. **Ghost link**: `text-brand-primary hover:text-brand-primary-hover font-medium underline-offset-4 hover:underline`.

## Layout Patterns
- **Page hero**: Light surface (no full-bleed photo on every page). Heading + supporting paragraph + 1–2 CTAs + optional supporting stat row.
- **Section header**: Eyebrow (uppercase, `text-xs tracking-widest text-brand-accent`) → H2 → sub-paragraph (max 2 lines). Centered on marketing pages, left on content pages.
- **Cards**: White background, `border border-brand-line`, `rounded-lg`, `p-6`. Icon in `bg-brand-surface text-brand-primary` square.
- **Alternating section bands**: `bg-white` → `bg-brand-surface` → `bg-white` for rhythm.
- **Dark band**: `bg-brand-ink text-white` for final CTA / footer.

## Imagery
- Use the `data-strk-img` system. No Unsplash hotlinks.
- Photography should evoke: factory floors, container yards, quality inspection, supplier meetings, packaged goods, Chinese production cities.
- Image ratios used:
  - Hero photo: `16x9`, `width="1600"`
  - Section illustration: `4x3`, `width="800"`
  - Card thumbnail: `3x2`, `width="600"`
  - Inline / icon-size: `1x1`, `width="200"`

## Iconography
- Lucide React. Stroke icons only (no filled).
- Default size: `h-5 w-5` inline, `h-7 w-7` in card icons, `h-10 w-10` in feature blocks.
- Icon container: square `h-12 w-12 rounded-md bg-brand-surface text-brand-primary` with the icon centered.

## Do
- Use `bg-white text-brand-text` on every card so text is always readable.
- Always pair a colored surface with an explicit `text-*` color.
- Use the warm gold accent sparingly — only for primary CTAs and small highlight marks.
- Keep navigation calm: small text, generous padding, no drop shadow.
- Add a "trust strip" (small text + small icons row) above or below hero copy on most pages.

## Don't
- Don't use neon colors, gradients on text, or heavy gradients on backgrounds.
- Don't use placeholder Lorem ipsum — every label is real.
- Don't use emoji as icons.
- Don't place body text directly on dark photos without a dark overlay.
- Don't animate decorations excessively — only a subtle hover lift on cards.
- Don't show text that is invisible (low contrast) or that looks like missing data.
