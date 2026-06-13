# Strikingly Generators Hub — Design System

## Fonts
- **Headings**: Josefin Sans 700, ALL CAPS, line-height 1.2. Fallback: Poppins 700.
  - Tailwind: `font-heading` (custom) or class `font-heading`
  - CSS class: `.font-heading`
- **Body**: Open Sans 400, 14px base, line-height 1.5.
  - Tailwind: `font-body`
- **Buttons**: Josefin Sans 700, uppercase, letter-spacing 0.04em.

### Type Scale
| Role | Size (desktop) | Size (mobile) |
|------|---------------|---------------|
| H1   | 44px          | 30px          |
| H2   | 28px          | 22px          |
| H3   | 18px          | 16px          |
| Body | 14px          | 14px          |
| Small| 12px          | 12px          |

## Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--brand-purple` | `#8159BB` | Badges, accents, ghost borders, breadcrumb |
| `--ai-from` | `#7671FF` | AI gradient start |
| `--ai-to` | `#CB0C9F` | AI gradient end |
| `--body-text` | `#636972` | All body copy |
| `--heading` | `#4B5056` | Section headings (H2, H3) |
| `--hero-heading` | `#2E2E2F` | Hero H1 line 1 |
| `--card-border` | `#C6C9CD` | Card borders (default) |
| `--divider` | `#E2E4E7` | Horizontal rules, FAQ dividers |
| `--light-bg` | `#F4F6F8` | Alternate section backgrounds |
| `--white` | `#FFFFFF` | Default page background |

### AI Gradient
`linear-gradient(90deg, #7671FF, #CB0C9F)`
- **Only** used for: primary CTA buttons, H1 line 2 gradient text.
- Do NOT use on section backgrounds or decorative elements.

## Buttons
| Variant | Height | Padding | Style |
|---------|--------|---------|-------|
| Primary (large) | 44px | 0 20px | AI gradient fill, white text |
| Ghost | 44px | 0 20px | Transparent bg, 1px brand-purple border, brand-purple text |
| Small | 36px | 0 15px | Same variants, smaller |

- Border-radius: 4px
- Font: Josefin Sans 700, 14px, uppercase
- All filled buttons: white text (`#FFFFFF`). Never dark text on gradient.
- Hover: opacity 0.9 (primary), subtle purple tint (ghost)
- Focus: 2px brand-purple outline, 2px offset

## Cards
- Background: `#FFFFFF`
- Border: `1px solid #C6C9CD`, border-radius 3px
- Padding: 20px
- Hover: `box-shadow: 0 4px 16px rgba(0,0,0,0.10)`, border-color → brand-purple
- No scale or rotation transforms on hover

## Category Tags (Badges)
- Font: Josefin Sans 700, 11px, uppercase
- Padding: 2px 6px, border-radius 3px
- Ghost style: brand-purple text + border, no fill
- CSS class: `.cat-tag`

## Spacing
- All margins/paddings in multiples of 10px (5px allowed for tight pairs)
- Between adjacent buttons: 10px gap
- Between blocks: 20px
- Between sections: 40px
- Hero top/bottom: 60–80px
- Max content width: 1200px, centered

## Do's
- Use `var(--brand-purple)` for all purple accents
- Use `.font-heading` for all uppercase headings
- Use `.gen-card` for all generator cards
- Use `.cat-tag` for all category badges
- Use `.btn .btn-primary` or `.btn .btn-ghost` for all buttons
- Use `#FFFFFF` text on all gradient/filled buttons

## Don'ts
- Don't use `#000000` anywhere
- Don't splash the AI gradient on backgrounds or section headers
- Don't use Inter or system-default sans for headings
- Don't use dark text on gradient fills
- Don't add fake ratings, testimonials, or customer counts
- Don't use `href="#"` placeholder links
