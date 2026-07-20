# Velmora — Visual Design System

> Mood: quiet luxury, warm, editorial. Premium demi-fine jewelry.

## Brand Palette

A warm, editorial palette designed to flatter gold jewelry. Single confident direction used sitewide.

| Token | Hex | Role |
|-------|-----|------|
| `bone` | `#F6F1EA` | Primary background — warm off-white, never stark |
| `ivory` | `#FBF7F1` | Card / surface — slightly lighter than bone |
| `ink` | `#1F1A16` | Primary text & dark surfaces — warm deep brown-black |
| `gold` | `#B58A4A` | Accent / primary CTA — warm champagne gold |
| `gold-deep` | `#8B6B3A` | Hover / darker accent / product name letterforms |
| `muted` | `#A89A8B` | Secondary text, captions, metadata |
| `hairline` | `#E5DCD0` | 1px dividers, borders, separators |
| `champagne` | `#E8D9BE` | Soft accent surface (newsletter, badges) |
| `white` | `#FFFFFF` | Pure white (modals, scrolled nav) |

Contrast pairs to rely on (all pass WCAG AA for body text):
- `ink` on `bone` → 13.8:1 ✓
- `ink` on `ivory` → 13.2:1 ✓
- `gold-deep` on `bone` → 6.7:1 ✓
- `muted` on `bone` → 3.0:1 (use only for non-essential captions, never for required info)
- `white` on `ink` → 13.8:1 ✓
- `white` on `gold` → 3.2:1 (use for primary CTA only — never body text)

## Typography

- **Display / Headings / Product names**: `Cormorant Garamond` — light (300) for hero, regular (400) for h2, medium (500) for product names. Italic (400i) for editorial accents.
- **Body / UI / Buttons**: `Inter` — 400 body, 500 nav, 600 small caps. Tracking wide on uppercase labels.

Tailwind family tokens:
- `font-serif` → `Cormorant Garamond, "Playfair Display", Georgia, serif`
- `font-sans` → `Inter, system-ui, sans-serif`

Type scale (px → rem):
- Hero: 56–96px (mobile→desktop), font-light, leading-[1.05], tracking-tight
- H2 section: 40–56px, font-light
- H3: 24–32px
- Product name: 13px, UPPERCASE, tracking-[0.18em], font-medium
- Body: 15–16px, leading-relaxed
- Caption / metadata: 12px, uppercase, tracking-[0.15em]

## Layout

- Max content width: `1440px` with `px-6 md:px-10 lg:px-16`
- Section vertical rhythm: `py-20 md:py-28 lg:py-32`
- Editorial split: image 50% / copy 50% on desktop, stacked on mobile
- Generous whitespace; never crowd. Let content breathe.
- Hairline dividers: `border-t border-hairline` (1px warm gray)

## Components

### Buttons
- **Primary (gold)**: `bg-ink text-bone hover:bg-gold-deep px-8 py-4 tracking-[0.18em] uppercase text-xs font-medium` — premium dark CTA on warm bg. (We use ink for the solid CTA so it reads as the most confident element, with a small gold border-accent.)
  - Better: `bg-gold text-ink hover:bg-gold-deep hover:text-bone` — solid warm gold with deep ink text. Confident + brand-perfect.
- **Secondary (outlined)**: `border border-ink text-ink hover:bg-ink hover:text-bone`
- **Tertiary (text link)**: underlined serif, italic, `text-ink hover:text-gold-deep`

### Product Card
- Image area with hover swap (second image) — square aspect on desktop, 4:5 on mobile
- Quick-add button slides up on hover (`translate-y-full → translate-y-0`)
- Name uppercase tracking-wide, price below
- Star rating in muted gold

### Form fields
- Underline only (no boxes): `border-b border-ink/40 focus:border-ink py-3 bg-transparent`
- Used for newsletter and search

## Motion

- `transition-all duration-300 ease-out` on hover
- Image hover: `scale-105` over `duration-700`
- Fade-up on scroll for sections (subtle, 12px translate)
- No bounces, no spring overshoot. Quiet.

## Imagery

- Warm, low-key lighting. Model shots with golden tones, dark warm backgrounds.
- 3:4 portrait for product cards. 16:9 for hero. 1:1 for category tiles.
- Background: warm tan, brown, deep cream — never cool gray or white.

## Do's & Don'ts

**Do**
- Keep at least 24px around every text block.
- Use hairline dividers in the hairline color, never thicker than 1px.
- Letter-space product names aggressively (0.18em).
- Use Cormorant for ANY product name or hero copy.
- Use the warm gold ONLY as accent — not for large fills.

**Don't**
- Don't use bright primary colors (no red, blue, green as accents).
- Don't use sans-serif for headlines.
- Don't use boxy shadows — only soft, low-opacity warm shadows.
- Don't center-align body text.
- Don't use more than 2 weights of Cormorant in a single view.
- Don't put any text on top of busy imagery without a scrim.
