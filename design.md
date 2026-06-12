# Strikingly Generators Hub — Design System

## Typography

| Role | Font | Weight | Size | Case |
|------|------|--------|------|------|
| Headings (H1–H3) | Josefin Sans → Poppins → sans-serif | 700 | H1: 40–48px desktop / 28–32px mobile; H2: 26–32px; H3: 20–24px | UPPERCASE |
| Body | Open Sans | 400 | 14px base | Sentence |
| Buttons | Josefin Sans | 700 | 14px | UPPERCASE |
| Tags/badges | Josefin Sans | 700 | 11px | UPPERCASE |

Line-height: 1.2 for headings, 1.5 for body.

## Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-purple` | `#8159BB` | Badges, accents, ghost borders, breadcrumb |
| `ai-blue` | `#7671FF` | AI gradient start |
| `ai-pink` | `#CB0C9F` | AI gradient end |
| `body-text` | `#636972` | All body copy |
| `heading-section` | `#4B5056` | Section H2/H3 headings |
| `heading-hero` | `#2E2E2F` | Hero H1 line 1 |
| `card-border` | `#C6C9CD` | Card default border |
| `divider` | `#E2E4E7` | Horizontal rules, section dividers |
| `light-bg` | `#F4F6F8` | Alternate section backgrounds |
| White | `#FFFFFF` | Default page background, button text |

**AI gradient:** `linear-gradient(to right, #7671FF, #CB0C9F)`
- Use ONLY for: primary CTA fill, H1 line 2 gradient text.
- Do NOT use on section backgrounds or decorative elements.

## Buttons

| Variant | Height | Padding | Style |
|---------|--------|---------|-------|
| Standard | 36px | 9px 15px | Gradient fill or ghost |
| Large (hero/closing CTA) | 44px | 12px 24px | Gradient fill |
| Ghost | 36px | 9px 15px | Transparent bg, 1px brand-purple border, brand-purple text |

All filled buttons: white text (`#FFFFFF`). Never dark text on gradient.
Border-radius: 4px. Letter-spacing: 0.03em.

## Cards

- Background: `#FFFFFF`
- Border: `1px solid #C6C9CD`, border-radius: 3px
- Padding: 20px
- Hover: `box-shadow: 0 4px 20px rgba(0,0,0,0.10)`, border-color → `#8159BB`
- No scale or rotation transforms on hover

## Tags (category badges)

- Font: Josefin Sans 700, 11px, uppercase
- Padding: 2px 6px, border-radius: 3px
- Ghost style: `#8159BB` text + border, no fill

## Spacing

All margins/paddings in multiples of 10px (5px allowed for tight pairs).
- Between adjacent buttons: 10px
- Between blocks: 20px
- Between sections: 40px
- Hero padding: 60–80px top/bottom
- Max content width: 1200px, centered

## Do's

- Use `font-heading` class for all headings
- Use `gradient-text` class for AI gradient text
- Use `btn-gradient` / `btn-ghost` classes for buttons
- Use `gen-card` class for all generator cards
- Use `cat-tag` class for category badges
- Use `content-wrap` for max-width centering
- Use CSS logical properties (`margin-inline-start`, `padding-block`) for RTL readiness

## Don'ts

- Don't use `#000000` for text
- Don't use the AI gradient on backgrounds or section headers
- Don't use dark text on gradient or solid-color button fills
- Don't use Inter or system-default sans for headings
- Don't add fake social proof (ratings, testimonials, customer counts)
- Don't hardcode arbitrary hex codes outside this file
