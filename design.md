# Generators Hub Page — Visual Style Guide

Single source of truth for typography, colors, spacing, and component look. Mirrors the Strikingly component kit tokens.

## Page Background
- Default page surface is pure white `#FFFFFF`. The hero may carry a faint purple-to-pink wash, but every other section sits on flat white. Never use `#000000`.

## Typography

### Headings
- Family: Josefin Sans (Brandon Grotesque is paid; Josefin Sans is the closest free geometric sans and the prescribed fallback).
- Weight: 700.
- All uppercase.
- Line-height: 1.2.
- Letter-spacing: a touch wide (tracking ~0.02em) so the all-caps feels intentional.
- Color: `#2E2E2F` for hero H1 line 1, `#4B5056` for section H2 / H3.

### Body
- Family: Open Sans.
- Weight: 400.
- Size: 14px base, line-height 1.5.
- Color: `#636972` for body paragraphs, `#4B5056` for stronger labels.

### Buttons and Tags
- Family: same as headings (Josefin Sans).
- Weight: 700.
- Uppercase.
- Buttons: 14px. Tags: 11px.

### Type Scale
- H1 desktop: 44px (range 40–48px), mobile: 30px.
- H2 desktop: 28px (range 26–32px), mobile: 22px.
- H3 desktop: 20px, mobile: 18px.
- Body: 14px. Small print: 12px.

## Colors
| Token            | Hex       | Use                                               |
| ---------------- | --------- | ------------------------------------------------- |
| Brand purple     | `#8159BB` | Accents, ghost borders/text, tag stroke, focus.   |
| AI gradient      | `#7671FF` → `#CB0C9F` (linear, 135°) | Primary CTAs, H1 line 2 only. |
| Body text        | `#636972` | Default paragraph and helper text.                |
| Heading text     | `#4B5056` | Section H2 / H3.                                  |
| Hero heading     | `#2E2E2F` | H1 line 1 only.                                   |
| Card border      | `#C6C9CD` | Default card outline.                             |
| Subtle divider   | `#E2E4E7` | Hairlines, accordion rules.                       |
| Light surface    | `#F4F6F8` | Search input background, very subtle wells.       |
| White            | `#FFFFFF` | Page background, card background, button text on filled/gradient. |

### Do
- White text on filled or gradient buttons.
- Use the AI gradient only on primary CTAs and the hero H1 line 2.
- Keep the gradient diagonal (top-left blue → bottom-right pink).

### Don't
- Don't paint large surfaces with the AI gradient.
- Don't put dark text on a gradient or solid color fill.
- Don't use `#000000` for anything visible.
- Don't apply the gradient to section headings or background washes.

## Spacing
- All margins/paddings in multiples of 10px. 5px is fine for tight pairs (icon + label).
- 20px between blocks.
- 40px between sections (desktop); 30px on mobile.
- Hero: 60–80px top and bottom on desktop, 40px on mobile.
- Buttons adjacent: 10px gap.
- Max content width 1200px, centered.

## Buttons
- Standard: 36px tall, 4px radius, 9px × 15px padding, 14px Josefin Sans uppercase.
- Big: 44px tall, 4px radius.
- Filled (primary): AI gradient fill, white text.
- Ghost: transparent fill, 1px brand-purple border, brand-purple text.
- Hover: subtle darken (filled) or purple wash (ghost). No scale or rotation.
- Focus: 2px brand-purple outline with 2px offset.

## Cards
- Background: `#FFFFFF`.
- Border: 1px `#C6C9CD`.
- Radius: 3px.
- Padding: 20px.
- Hover: subtle box-shadow lift + 1px brand-purple border.
- No scale or rotation transforms.
- As a link: the whole card is one `<a>`; the category illustration, name, and description are inside.

## Tags (category badges)
- 11px Josefin Sans uppercase.
- Padding: 2px × 6px.
- Radius: 3px.
- Ghost style: brand-purple text, 1px brand-purple border, transparent fill.

## Forms
- Input height: 40px.
- Background: `#F4F6F8`.
- Border: 1px `#C6C9CD`. Focus: 1px brand-purple.
- Radius: 3px.
- Padding: 0 12px.
- Placeholder color: `#8A8F99`.
- Inline search icon sits inside the left padding (no border separator).

## Section Heading Pair
- Eyebrow H2 in dark gray, uppercase, ~28px.
- Subheading one line below in body gray, ~14px.
- 20px gap between eyebrow and subheading.
- 40px gap from the eyebrow to the first row of content.

## Hero
- Two-column layout (text left, illustration right) on desktop ≥960px.
- Stacked on mobile (text first, illustration below).
- Background: faint radial wash from purple `#8159BB` ~6% opacity (top-left) fading to pink `#CB0C9F` ~4% (bottom-right). Pure white at the bottom edge.
- H1 spans both lines in 44px, uppercase. Line 2 carries the AI gradient.
- Subhead two lines max in body gray.
- CTA row: 10px gap, stacked on mobile.

## Layout Grids
- All grids default to 3 columns on desktop, 2 on tablet (≤960px), 1 on mobile (≤640px).
- 20px gap between cards.
- Cards never bleed past the 1200px container.

## Accessibility
- Focus visible on every interactive element (purple outline, 2px offset).
- Color contrast ≥ WCAG AA (4.5:1 normal text, 3:1 large text).
- Decorative SVG uses `aria-hidden="true"`.
- Accordion buttons: `aria-expanded`, `aria-controls`.
- Show-all toggles: `aria-expanded`, `aria-controls`.
- Card links: descriptive accessible name from the card title.

## Don'ts
- No fake testimonials, star ratings, customer counts, or photos.
- No inline `<div>` click handlers — always `<a>` or `<button>`.
- No dark text on a gradient or solid color fill.
- No section-wide gradient backgrounds. The hero wash is the only tint on the page.