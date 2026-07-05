# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury. Warm, editorial, premium demi-fine. Generous whitespace, large imagery, hairline dividers. Never loud, never discount-feeling.

## Color Palette (commit to one direction: warm ivory + cocoa + antique gold)

| Token | Hex | Use |
| --- | --- | --- |
| `background` | `#F5F0E6` | Page background, soft warm ivory |
| `foreground` | `#1F1A14` | Primary text, deep cocoa (AA on ivory) |
| `card` | `#FFFFFF` | Card surfaces |
| `muted` | `#EFE7D9` | Subtle warm beige for trust strip, accents |
| `muted-foreground` | `#6B5F4F` | Secondary text, captions |
| `accent` | `#B58A4C` | Antique gold, CTAs, links on hover |
| `accent-foreground` | `#FFFFFF` | Text on accent (e.g. gold button) |
| `border` | `#E2D8C5` | Hairline dividers, card borders |
| `ink` | `#2A2118` | Stronger dark for hero overlays |

All foreground text on background passes AA contrast. Gold on white is reserved for small accents (underlines, icons) — primary buttons use deep cocoa background with ivory text, or transparent with cocoa text + cocoa border.

## Typography
- **Headings / Serif**: `Cormorant Garamond` (weights 300/400/500/600) — hero headlines, product names, editorial pull quotes.
- **Body / Sans**: `Inter` (weights 300/400/500/600) — UI, body, nav.
- **Product names**: UPPERCASE, `tracking-[0.18em]`, `text-xs`–`text-sm`, font-weight 500.
- **Editorial section titles**: lowercase italic Cormorant, very large (5xl–7xl on desktop), tight leading.

## Spacing
- Section vertical padding: `py-20` mobile, `py-32` desktop.
- Container max width: `max-w-[1400px]`, side padding `px-6 md:px-10`.
- Generous gaps between sections (`mt-24`+).

## Components
- Buttons:
  - Primary: solid `bg-ink` text ivory, uppercase, `tracking-[0.2em]`, `text-xs`, `px-8 py-4`, hover fade to `bg-accent`.
  - Outline: 1px `border-ink`, text `ink`, hover invert (ink bg, ivory text).
  - Ghost / link: small caps + underline-on-hover.
- Inputs: 1px border, no rounded corners (use `rounded-none`), bottom-border-only variant for newsletter.
- Cards: `bg-card`, `border border-border`, no shadow by default, `shadow-sm` on hover for product cards.
- Dividers: 1px `bg-border` hairline, max 1px.

## Imagery
- Always warm-lit gold jewelry on dark cocoa / warm beige gradients.
- Aspect ratios:
  - Hero: 16:9 desktop, 4:5 mobile.
  - Product card: 4:5.
  - Category tile: 3:4.
  - UGC reel: 9:16 vertical.
  - Story: 4:5.

## Motion
- Hover: 300–500ms ease, opacity / transform only (no aggressive movement).
- Page transitions: subtle fade.
- No bouncy springs, no parallax.

## Do
- Use serif for emotion, sans for function.
- Let products breathe in whitespace.
- Use hairline dividers instead of heavy borders.
- Keep accent gold for small details (price, underlines, hover).

## Don't
- No emoji.
- No red/orange sale colors, no "SALE!" tags.
- No shadows on hero text overlays.
- No more than one accent per viewport section.
- No body text in serif (except editorial pull-quotes).
