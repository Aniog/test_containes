# Velmora Fine Jewelry — Visual Design System

## Brand Mood
Quiet luxury. Warm, editorial, premium-but-accessible. Demi-fine gold jewelry.
NOT loud. NOT discount-looking. NOT generic e-commerce. Think editorial magazine, not marketplace.

## Color Palette (committed, single direction: "Ivory + Espresso + Brushed Gold")

| Token | Hex | Usage |
|---|---|---|
| `--ivory` | `#F8F4EE` | Primary page background. Warm cream. |
| `--ivory-soft` | `#F1ECE3` | Alt section background, soft contrast. |
| `--espresso` | `#1F1A17` | Primary text, deep surface, buttons. Warm near-black. |
| `--espresso-soft` | `#3A322C` | Secondary text on ivory. |
| `--muted` | `#8A7E72` | Tertiary text, helper, meta. |
| `--gold` | `#B8956A` | Primary accent: CTAs, icons, dividers, links. Brushed warm gold. |
| `--gold-soft` | `#D4B896` | Hover gold, soft accents, decorative. |
| `--rose-clay` | `#C9A48A` | Secondary accent: subtle backgrounds, badges. |
| `--hairline` | `#D9CFC2` | Thin dividers, borders. |
| `--white` | `#FFFFFF` | Card backgrounds, contrast surfaces. |

**Contrast rules:**
- Body text on `--ivory` MUST be `--espresso` or `--espresso-soft` (never `--muted` for primary copy).
- Text on `--espresso` MUST be `--ivory` or `--ivory-soft`.
- `--gold` only for accents, never as primary text on `--ivory` (insufficient contrast for body).
- Buttons: solid `--espresso` background with `--ivory` text; OR outlined `--espresso` border with `--espresso` text.

## Typography

| Token | Font | Usage |
|---|---|---|
| Display / Headings | **Cormorant Garamond** (Google) | Hero h1, section h2, product names |
| Body / UI | **Inter** (Google) | Paragraphs, buttons, nav, form fields |
| Product Names | Cormorant Garamond **UPPERCASE**, letter-spacing 0.18em | Product cards & detail |
| Section Eyebrows | Inter UPPERCASE, letter-spacing 0.25em, 11px | Small uppercase labels above section titles |

Weights:
- Cormorant: 400 (regular), 500 (medium), 600 (semibold)
- Inter: 300 (light), 400 (regular), 500 (medium), 600 (semibold)

## Spacing & Layout
- Mobile-first. Max content width 1280px. Generous outer padding (px-6 mobile, px-10 desktop).
- Vertical rhythm: section padding `py-20 md:py-28 lg:py-32`.
- Hairlines: 1px solid `--hairline`. Use `border-t border-hairline` on full-width divider lines.

## Components / Patterns
- Buttons:
  - Primary: `bg-espresso text-ivory` solid, `tracking-[0.18em] uppercase text-xs px-8 py-4`. Hover: subtle lift + softer shadow.
  - Secondary: `border border-espresso text-espresso` outlined.
  - Accent: `bg-gold text-espresso` for newsletter / hero CTA.
- Cards: white or `--ivory-soft` surface, no heavy shadow; thin hairline border on hover.
- Product image hover: opacity swap from image 1 → image 2 (no aggressive zoom).
- Forms: bottom-border-only inputs, generous label tracking, minimal chrome.

## Do
- Use uppercase tracked labels for product names and section eyebrows.
- Use thin hairline dividers, not heavy separators.
- Use editorial whitespace — never crowd components.
- Use soft shadows (`shadow-[0_8px_30px_rgba(31,26,23,0.06)]`) only when needed.

## Don't
- Never use bright primary colors (red, blue, green) as CTAs.
- Never use emojis.
- Never use harsh borders or busy gradients.
- Never use drop-shadows under text.
- Never use `--muted` text for primary content.
- Never use the gold accent as primary body text.