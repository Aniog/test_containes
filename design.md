# Velmora Fine Jewelry — Visual System

## Brand Mood
Quiet luxury. Warm. Editorial. **NOT** loud, NOT generic, NOT discount.
A premium demi-fine jewelry house. Restrained and confident.

## Color Palette (commit to one direction: warm, dark editorial)

| Token | Hex | Use |
|---|---|---|
| `ink` | `#13110f` | Primary deep background (dark mode feel) |
| `ink-soft` | `#1c1815` | Cards / elevated dark surfaces |
| `bone` | `#f4ede2` | Light editorial surface (newsletter, story) |
| `bone-soft` | `#ebe1d2` | Section break / hairline on light |
| `gold` | `#c9a875` | Accent / primary CTA / hover |
| `gold-soft` | `#e0c79a` | Gold glow / soft accent |
| `gold-deep` | `#8a6f44` | Deep gold for borders / pressed states |
| `umber` | `#2a1f17` | Card surface on bone |
| `taupe` | `#8a7d6c` | Secondary / muted text on bone |
| `pearl` | `#f7f2e8` | Top-of-page highlight tone |

Foreground / background pairings (accessibility):
- Text on `ink`: `bone` (e.g. `#f4ede2`); body copy `bone/85` for secondary.
- Text on `bone`: `ink`; body copy `ink/75`.
- Accent CTA: `ink` background, `gold` text/border; hover `gold` background, `ink` text.
- All CTAs must keep contrast ≥ 4.5:1.

## Typography
- **Headings / product names**: `Cormorant Garamond` — italic optional for "Our Story" link.
- **Body / UI**: `Inter` — weights 300, 400, 500, 600.
- Product names → `UPPERCASE` + tracking `0.18em` (wide). Class: `font-serif uppercase tracking-[0.18em]`.
- H1: 56–80px desktop / 36–44px mobile. Italic allowed for editorial pull-quotes.
- H2: 36–44px desktop / 28–32px mobile.
- Body: 15–16px, line-height 1.7.

## Layout & Spacing
- Max content width: `max-w-[1400px]`.
- Section vertical rhythm: `py-20` desktop / `py-14` mobile.
- Hairline dividers: `border-t border-bone/15` (on dark) or `border-t border-ink/10` (on light).
- Editorial padding inside cards: `p-8` desktop, `p-5` mobile.
- Use `aspect-[3/4]` for product cards (editorial portrait). `aspect-[4/5]` for hero. `aspect-[9/16]` for UGC reels.

## Imagery
- Always warm gold on dark/neutral backgrounds. Never white. Never blue-tinted.
- Placeholders use SVG data URIs (transparent), upgraded by `ImageHelper.loadImages`.

## Components & States
- Buttons:
  - **Primary**: `bg-ink text-bone border border-gold hover:bg-gold hover:text-ink transition` (subtle 300ms).
  - **Secondary / outline**: `border border-ink/30 text-ink hover:bg-ink hover:text-bone`.
  - On dark: invert (`bg-bone text-ink`).
- Inputs: underline-only on dark (`border-b border-bone/30 focus:border-gold`), boxed on light.
- Cards: flat with subtle hairline. Hover: tiny lift + slow-fade second image.
- Always include explicit `text-*` color on any custom background surface (NEVER inherit).

## Motion
- Transitions: 300–500ms, `ease-out`.
- No bounce. No parallax. No spinner.
- Subtle fade-up on scroll into view (once).

## Don'ts
- No bright reds, blues, or saturated neons.
- No drop shadows deeper than `0 20px 40px -20px rgba(0,0,0,0.35)`.
- No "SALE" red badges. No "BUY NOW" orange buttons. No countdown timers.
- No emoji.
- No Tailwind stock photo placeholders that look stocky.
- No text without explicit readable foreground color on its background.
