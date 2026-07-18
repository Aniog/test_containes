# Velmora Fine Jewelry — Design System

## Brand
Quiet luxury, warm, editorial. Premium demi-fine jewelry — not loud, not generic e-commerce. Tagline: *Crafted to be Treasured.*

## Color Palette
A jewel-box, warm-dark scheme. One confident direction: **espresso + champagne gold + warm ivory**.

| Token | Hex | Tailwind class | Role |
|---|---|---|---|
| `background` | `#1A1410` | `bg-background` | Page background, deep warm espresso |
| `surface` | `#241B16` | `bg-surface` | Cards, nav after scroll, raised surfaces |
| `surface-elevated` | `#2E231C` | `bg-surface-elevated` | Modals, drawer, hover states |
| `gold` | `#C8A66B` | `bg-gold` / `text-gold` | Accent, CTAs, hairlines, hover |
| `gold-soft` | `#A8884E` | `bg-gold-soft` | Pressed accent |
| `ivory` | `#F5EFE6` | `text-ivory` | Primary text on dark |
| `ivory-muted` | `#A39788` | `text-ivory-muted` | Secondary text |
| `hairline` | `#3A2E26` | `border-hairline` | Thin dividers, borders |

Rationale: A dark warm base flatters gold jewelry (gold pops on dark, never looks cheap). Champagne gold (not yellow) reads as premium. Warm ivory keeps text legible without clinical brightness.

## Typography
- **Display/Serif (headings, product names):** Cormorant Garamond — 300/400/500/600
- **Sans (body, UI):** Inter — 300/400/500/600
- **Product names:** UPPERCASE, letter-spacing `0.18em`, weight 500
- **Section headings (eyebrow):** Inter uppercase, letter-spacing `0.3em`, size 11px, color gold
- **Hero headline:** Cormorant, weight 400, size up to 96px desktop / 56px mobile
- **Body:** Inter 400, size 15–16px, line-height 1.7
- **UI (buttons, nav):** Inter 500, uppercase, letter-spacing `0.15em`, size 12–13px

## Spacing
Generous whitespace. Section padding `py-20 md:py-32`. Section max-width `max-w-7xl`. Vertical rhythm via 8px grid.

## Shapes & Lines
- Hairline borders: 1px solid `hairline`
- Buttons: sharp corners (no big radius); outlined or solid gold fill
- Cards: no border-radius on hero, very subtle (2–4px) on product cards
- Icons: 1.25px stroke (Lucide default)

## Shadows
Soft, low-spread. Never heavy drop shadows. `shadow-[0_2px_30px_rgba(0,0,0,0.35)]` on cards/drawer.

## Motion
Subtle, slow, editorial.
- Default transition: 300–500ms ease-out
- Hover on product card: second image fades in, title color shifts to gold
- Nav: 300ms background fade on scroll
- Drawer: 400ms ease-in-out
- No bouncy springs, no rotation, no parallax

## Buttons
- **Primary (solid):** `bg-gold text-background`, hover `bg-gold-soft`, uppercase, tracking, padding `px-8 py-4`
- **Secondary (outline):** `border border-gold text-gold`, hover `bg-gold text-background`
- **Tertiary (text link):** `text-ivory` with gold underline on hover

## Do
- Use a single, restrained accent (gold) on every page
- Let images breathe with 8–16px margin
- Keep product names in uppercase tracking
- Use thin gold hairlines for dividers
- Ensure every text on dark meets WCAG AA contrast (ivory on background = 13:1)

## Don't
- No bright/neon colors
- No heavy drop shadows or gradients on text
- No emoji
- No more than one accent color anywhere
- No center-aligned body paragraphs
- No "SALE!" / "BUY NOW!" style urgency — premium brand voice
