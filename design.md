# ARTITECT MACHINERY — Visual Style Guide

## Brand Positioning
ARTITECT MACHINERY is a manufacturer of precision sheet-metal folding machines. The brand must read as both **industrial** (machines, steel, engineering) and **elegant** (premium, refined, trust-inspiring). The result is a calm, confident, dark-on-light editorial feel — never raw factory, never flashy consumer.

## Mood
Calm, precise, premium, trustworthy. Visual references: high-end industrial brands (Trumpf, Bystronic) softened with editorial spacing and serif headlines.

## Color Palette
- **Steel Ink** `#0F1722` — primary text, dark surfaces
- **Graphite** `#1F2A3A` — secondary dark surfaces, navbar
- **Industrial Gold** `#B89968` — accent / brand highlight (used sparingly, ~5% of pixels)
- **Warm Steel** `#3A4756` — muted headings on light
- **Off-white** `#F7F5F1` — page background
- **Paper** `#FFFFFF` — cards, surfaces
- **Muted text** `#6B7280` — secondary body text
- **Hairline** `#E5E1D8` — borders, dividers

Do NOT use bright blue, neon green, or saturated reds. Avoid pure black `#000` and pure white `#FFF` for backgrounds.

## Typography
- **Display / Headings:** `Cormorant Garamond` — weight 500, letter-spacing tight. Conveys craftsmanship and heritage.
- **Body / UI:** `Inter` — weight 400/500/600. Clean, neutral, readable.
- **Eyebrow / Labels:** `Inter` uppercase, tracking `[0.18em]`, size `0.75rem`, color Industrial Gold.

Headlines feel like editorial magazine covers: large, light weight, refined. Body text is generous (1.6 line-height) for an easy, user-friendly reading experience.

## Spacing & Layout
- Container max width: `1280px` (use Tailwind `max-w-7xl`).
- Section vertical padding: `py-20 md:py-28` (very generous, editorial breathing room).
- Card padding: `p-8` to `p-10`.
- Default body padding: `px-6 md:px-10`.

## Components
- **Buttons**
  - Primary: `bg-[#0F1722] text-[#F7F5F1] hover:bg-[#1F2A3A]`, padding `px-7 py-3.5`, no rounded corners (`rounded-none`).
  - Outline: `border border-[#0F1722] text-[#0F1722] hover:bg-[#0F1722] hover:text-[#F7F5F1]`.
  - Ghost: `text-[#0F1722] underline underline-offset-4 decoration-[#B89968]`.
- **Cards:** white background, `border border-[#E5E1D8]`, no shadow by default; subtle hover lift on product cards.
- **Section eyebrow:** gold uppercase label, then a serif heading, then a muted body paragraph.

## Imagery
- Use the stock image system for hero / product / industry photos.
- For product machinery imagery use tags like `industrial sheet metal folder`, `metal folding machine factory`, `precision metalwork`.
- Always reference nearby text element IDs in `data-strk-img` / `data-strk-bg` queries.
- All photos should be desaturated / cool-toned to match the editorial palette; the image search system will handle that.

## Do / Don't
- DO: generous whitespace, serif headlines, gold accents, hairline dividers, calm photography.
- DO: keep the Industrial Gold to ≤5% of the screen area; let it earn attention.
- DON'T: bright colors, rounded-everything buttons, emoji icons, busy gradients, animated noise.
- DON'T: use more than 2 typefaces per screen.
- DON'T: lowercase ALL CAPS for headings; use Cormorant Garamond for display text and Inter for everything else.
