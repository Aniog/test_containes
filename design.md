# Velmora Fine Jewelry — Visual System

## Brand
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry for women 25–45.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
Committed direction: **warm cream / ivory editorial** with deep moody espresso sections and a warm antique-gold accent. Restrained, never gaudy.

| Token | Hex | Usage |
|---|---|---|
| `cream` | `#F8F3EA` | Primary page background, soft and warm |
| `sand` | `#EFE6D6` | Section alternates, soft cards |
| `ivory` | `#FBF7F0` | Elevated surfaces, cards on dark |
| `espresso` | `#1C1611` | Dark editorial sections, hero text |
| `ink` | `#2C2218` | Primary text on light |
| `muted` | `#8A7E6E` | Secondary text, captions |
| `hairline` | `#D9CCB8` | 1px dividers on cream |
| `hairline-dark` | `#3A2E22` | 1px dividers on espresso |
| `gold` | `#B8945A` | Primary accent — warm antique gold |
| `gold-deep` | `#9A7A45` | Hover / active for gold |
| `terracotta` | `#A0524B` | Warm pop for newsletter CTA, sale/limited badges |

## Typography
Two families, used with intention.

**Serif — Cormorant Garamond** (`font-serif`, weights 300, 400, 500, 600):
- Display headlines (h1, h2)
- Brand wordmark "VELMORA"
- Editorial pull-quotes and brand story body
- Section titles
- Product names in UPPERCASE with wide letter-spacing (`tracking-[0.18em]` to `tracking-[0.28em]`)

**Sans — Inter** (`font-sans`, weights 300, 400, 500, 600):
- All UI chrome (nav, buttons, inputs)
- Body copy under editorial sections
- Small labels, breadcrumbs, footer columns
- Star ratings, prices, quantities

## Spacing & Layout
- Generous whitespace. Sections get `py-20 md:py-28 lg:py-32` breathing room.
- Container width: `max-w-[1400px]` for full-width sections, `max-w-[1280px]` for editorial content.
- Hairline dividers: 1px, color `hairline` on cream, `hairline-dark` on espresso.
- Grids: 12-col desktop, comfortable gutters (`gap-6 md:gap-8 lg:gap-10`).

## Components

### Buttons
- **Primary (on light)**: `bg-espresso text-ivory` — solid dark, premium, never loud.
- **Primary (on dark)**: `bg-ivory text-espresso`.
- **Accent**: `bg-terracotta text-ivory` — used sparingly (newsletter, sale).
- **Outlined**: `border border-ink/20 text-ink` for secondary actions.
- Padding: `px-8 py-4`. Text: uppercase Inter 12px, `tracking-[0.2em]`.
- Hover: subtle darken + slight translate-y(-1px) + shadow-sm. Transition 300ms ease.
- Radius: `rounded-none` — sharp corners read more premium.

### Cards / Product Cards
- Background: ivory or transparent on cream.
- Image: 4:5 portrait ratio, soft `shadow-[0_8px_30px_rgba(28,22,17,0.06)]`.
- Hover: image swaps to alternate angle, slight scale on image, "Quick Add" button slides up.
- No harsh shadows. No neon colors.

### Hairlines
- 1px solid, color `hairline`. Used between nav and hero, between sections, between footer columns.

### Shadows
- `shadow-soft`: `0 8px 30px rgba(28,22,17,0.06)` — for product cards.
- `shadow-medium`: `0 20px 60px rgba(28,22,17,0.10)` — for cart drawer.
- Never use deep saturated shadows.

## Imagery Direction
- Warm-lit close-ups of gold jewelry on skin or warm neutral backgrounds.
- Models: warm skin tones, soft directional light, no harsh studio white.
- Categories reference names in stock image queries to keep relevant results.

## Do's
- Use Cormorant Garamond for emotional/editorial weight.
- Keep product names UPPERCASE with wide tracking.
- Use hairline dividers liberally.
- Use serif italic for testimonial names and pull-quotes.
- Maintain generous whitespace around type.

## Don'ts
- No emoji in UI chrome.
- No pure black (#000000) — always warm dark (#1C1611 / #2C2218).
- No neon or saturated colors.
- No bright yellow gold (#FFD700) — always antique / muted gold.
- No drop-shadows on text.
- No rounded-pill buttons — sharp corners read premium.
- No "SALE!" shouty copy. Quiet confidence only.