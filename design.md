# Velmora Fine Jewelry — Visual Design System

## Brand & Mood
- Direct-to-consumer, demi-fine gold jewelry
- Quiet luxury. Editorial. Warm. Restrained.
- Premium but accessible — never loud, never discount-feeling.
- Customer: women 25–45, gifting + self-purchase.
- Always feel like a boutique that happens to be online.

## Direction
One confident direction: **"Charcoal Atelier"** — a deep neutral ground, warm
oat neutrals, restrained champagne-gold metallic accent. Imagery is the
"color"; the chrome around it is calm.

## Color Palette
Single canonical palette. No off-palette accents. Use these CSS variables
everywhere — never raw hex.

| Token                | Hex       | Role                                                      |
|----------------------|-----------|-----------------------------------------------------------|
| `ink`                | `#161311` | Primary text, deep ground, sticky nav after scroll        |
| `oat`                | `#F4ECE0` | Page base, light surfaces, warm neutral                   |
| `bone`               | `#EAE0D1` | Section variant, card surface, trust bar                  |
| `champagne`          | `#C8A972` | Single accent (CTAs, links, underline, focus ring)        |
| `champagne-deep`     | `#A7864A` | Hover/active state for accent                             |
| `mist`               | `#7A726A` | Secondary / muted text, hairline rules                    |
| `cream`              | `#FBF7F0` | Highlight blocks, drawers                                 |
| `rose-gold`          | `#D8B192` | Accent variant for category tiles, subtle warmth          |

Contrast targets (WCAG AA): ink on oat >= 12:1, ink on bone >= 11:1,
champagne on ink >= 4.6:1 (used for buttons only with ink text on champagne
fills → >= 7:1). Never put champagne text directly on cream.

## Typography
- Serif (display + product names): **Cormorant Garamond**, weights 300/400/500.
  Use for H1–H3, product names, hero copy, section titles.
- Sans (body + UI): **Inter**, weights 300/400/500/600. Use for nav links,
  body copy, buttons, prices, footer.
- Product names: UPPERCASE, `tracking-[0.18em]`, weight 500, serif.
- Body: max 65ch, line-height 1.7, color ink.
- Letter-spacing: headings 0 (serif), buttons 0.12em, nav 0.18em uppercase,
  product names 0.18em uppercase, section labels 0.25em uppercase.

Type scale (mobile / desktop):
- H1 hero: 3.25rem / 6rem (serif, weight 300, leading 1.02)
- H2 section: 2rem / 3.25rem
- H3 card: 1.125rem / 1.25rem
- Body: 1rem / 1rem
- Small: 0.8125rem

## Layout & Spacing
- Generous whitespace. 8px base. Use 16, 24, 32, 48, 64, 96, 128, 160.
- Max content width 1280px. Editorial sections can bleed full-width.
- Product grid: 2 cols on mobile, 3 cols md, 4 cols lg.
- Aspect ratios: product card 4:5, hero 16:9 desktop / 4:5 mobile, UGC 9:16.

## Components
- Buttons:
  - Primary: solid `ink` background, `cream` text, uppercase, 0.12em tracking,
    no rounding (4px). Hover: invert to `champagne` bg / `ink` text. 0.25s ease.
  - Secondary: 1px `ink` border, transparent bg, `ink` text. Hover: ink fill.
  - Ghost: text + 1px underline, no fill.
- Cards: 0px radius. Hairline border `1px #E2D9C7` or no border on dark
  sections. Soft shadow optional: `0 1px 2px rgba(22,19,17,0.04)` only.
- Image hover: very subtle 1.0 → 1.02 scale over 0.6s, cross-fade to second
  image on product card. No jitter. Use `will-change: transform` sparingly.
- Accent rule: 1px hairline `mist` dividers, never thick lines.
- Focus: 2px `champagne` ring with 2px offset on all interactive elements.
- Form inputs: 1px `mist` border, 4px radius, `oat` background, ink text.
  Focus border `champagne`.

## Iconography
- Lucide React line icons at 1.25–1.5px stroke. Never filled.
- Icon color matches text color. Cart/search 20px in nav.

## Motion
- Page transitions: 250ms ease-out fade.
- Hover transitions: 200–300ms.
- Sticky nav: 400ms color swap on scroll, no jump.
- Drawer: slide in 320ms cubic-bezier(0.22, 1, 0.36, 1).
- Respect `prefers-reduced-motion: reduce` — kill non-essential transitions.

## Imagery
- Editorial warmth. Gold jewelry on neutral or dark skin/warm brown
  backgrounds. Never on white clinical backgrounds. Generous negative space.
- Use stock image system with `data-strk-img` / `data-strk-bg`.
- Composition reference: "lifestyle close-up, golden hour, soft shadows,
  visible skin texture, hand or ear or neck in frame".

## Tone of Voice (microcopy)
- Quiet, never salesy. Never "SALE!" or "BEST DEAL".
- Use "Discover", "Crafted", "Treasured", "Made to last", "Find your piece".
- Reviews first-name + last initial only. 5 stars. No exclamation marks.

## Do
- Keep one accent color only (`champagne`). Use restraint.
- Always set explicit text color when using a custom background.
- Use hairline 1px dividers, not 2px+ borders.
- Whitespace > decoration.
- Uppercase + wide tracking for ALL product names.

## Don't
- No rainbow gradients.
- No emoji.
- No thick borders or heavy shadows.
- No bright red, electric blue, or neon accents.
- No "limited time" urgency messaging.
- No more than one accent color per section.
- No icon-only buttons without aria-labels.
- No "Lorem ipsum" — copy must read as a real boutique.
