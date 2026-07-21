# Velmora Fine Jewelry — Design System

## Brand Direction
**Quiet luxury. Warm, editorial. Premium demi-fine.**

The site should feel like a high-end editorial magazine about jewelry — not like a discount e-commerce store. We commit to a single warm, paper-and-gold direction and apply it consistently sitewide.

## Color Palette (commit to ONE direction — Warm Editorial)
Use Tailwind classes. Do not invent new hex values.

| Token | Hex | Tailwind class | Usage |
|---|---|---|---|
| `ivory` | `#F8F4ED` | `bg-ivory`, `text-ivory` | Page background, light surfaces |
| `champagne` | `#EDE4D3` | `bg-champagne` | Section bands, soft cards |
| `sand` | `#D9CDB7` | `bg-sand`, `border-sand` | Hairlines, muted dividers |
| `gold` | `#C9A961` | `bg-gold`, `text-gold` | Primary accent (buttons, icons) |
| `gold-deep` | `#8B6F3D` | `text-gold-deep` | Muted accent text, prices |
| `espresso` | `#1F1A14` | `bg-espresso`, `text-espresso` | Dark surfaces, primary text |
| `mocha` | `#3A2F22` | `bg-mocha` | Hover/dark gradient end |
| `ink-soft` | `#6B5D4A` | `text-ink-soft` | Body/secondary text on light |

### Color rules
- Primary text on light: `text-espresso` (AAA contrast vs ivory).
- Primary text on dark: `text-ivory`.
- Never use pure black `#000` or pure white `#FFFFFF` — it looks cheap.
- The accent is **gold**, used sparingly: buttons, hover states, underlines, prices.
- Section bands alternate `ivory` and `champagne` for editorial rhythm.
- Imagery always lives on either `ivory` or `espresso` — never on the gold accent.

## Typography
- **Headings & product names:** Cormorant Garamond (Google Fonts). Serif, elegant, editorial.
  - Display: `font-serif` `text-5xl md:text-7xl` `font-light` `tracking-tight`
  - Section titles: `font-serif` `text-3xl md:text-5xl` `font-light`
  - Product names: `font-serif` `text-base md:text-lg` `font-normal` `uppercase` `tracking-[0.18em]`
- **Body, UI, nav, buttons:** Inter (Google Fonts). Clean sans.
  - Nav links: `font-sans` `text-[11px] md:text-xs` `tracking-[0.22em]` `uppercase`
  - Body: `font-sans` `text-sm md:text-base` `font-normal`
  - Buttons: `font-sans` `text-xs md:text-sm` `tracking-[0.18em]` `uppercase`

## Layout & Spacing
- Mobile-first. Use Tailwind breakpoints `md:` and `lg:` generously.
- Generous vertical rhythm: sections use `py-16 md:py-24 lg:py-32`.
- Horizontal: `px-4 md:px-8 lg:px-12` for content, full-bleed for hero/imagery.
- Max content width: `max-w-7xl` (1280px) for grids, `max-w-4xl` for text blocks.
- Hairlines: `border-t border-sand` (1px) for subtle dividers between sections.

## Components
- **Buttons:**
  - Primary: `bg-espresso text-ivory` → hover `bg-mocha`. Padding `px-8 py-4`. Uppercase tracking.
  - Accent (rare): `bg-gold text-espresso` for the hero CTA.
  - Outlined: `border border-espresso text-espresso` → hover `bg-espresso text-ivory`.
- **Product card:** white-cream background, 1px sand hairline, image area 4:5 ratio, name+price below, hover reveals secondary image and quick-add.
- **Inputs:** `bg-transparent border-b border-sand focus:border-espresso`, no rounded corners, editorial style.
- **Nav:** transparent over hero, becomes `bg-ivory/95 backdrop-blur` with hairline border after scroll.
- **Cart drawer:** slides from right, `bg-ivory`, `max-w-md`, espresso close icon.

## Imagery
- Place jewelry on dark or neutral warm backgrounds (never bright/saturated backgrounds).
- Use the `data-strk-img` system with queries referencing nearby headings/descriptions.
- Aspect ratios: products 4:5, hero 3:4, category tiles 1:1, UGC reels 9:16.

## Motion
- Subtle, editorial: `transition-all duration-500 ease-out` for hover/fade.
- Image hover swap: 300ms cross-fade.
- Cart drawer: 400ms ease-out translate.
- No bouncy springs, no large parallax — restraint = luxury.

## Do's and Don'ts
- DO: keep section dividers as 1px hairlines, not heavy blocks.
- DO: uppercase product names with wide letter-spacing.
- DO: leave generous whitespace above and below every section.
- DON'T: use bright discount colors (red, neon).
- DON'T: use generic stock "shop" imagery — keep everything warm and editorial.
- DON'T: use multiple accent colors — gold is the only accent.
- DON'T: use rounded pill buttons everywhere — keep corners square (`rounded-none`) for the editorial feel.
