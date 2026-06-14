# Strikingly Generators Hub — Design System

## Typography
- **Headings**: Josefin Sans 700, ALL UPPERCASE, line-height 1.2. Fallback: Poppins.
  - H1: 40–48px desktop, 28–32px mobile. Class: `font-heading font-bold uppercase`
  - H2: 26–32px desktop. Class: `section-heading`
  - H3: 20px. Class: `font-heading font-bold uppercase text-[#4B5056]`
- **Body**: Open Sans 400, 14px, line-height 1.5. Class: `font-body text-[#636972]`
- **Buttons**: Josefin Sans 700, uppercase, 14px

## Colors
| Token | Hex | Usage |
|---|---|---|
| Brand purple | `#8159BB` | Badges, accents, ghost borders |
| AI gradient from | `#7671FF` | Gradient start |
| AI gradient to | `#CB0C9F` | Gradient end |
| Body text | `#636972` | All body copy |
| Section headings | `#4B5056` | H2, H3 |
| Hero H1 line 1 | `#2E2E2F` | Dark hero text |
| Card border | `#C6C9CD` | Default card border |
| Divider | `#E2E4E7` | Horizontal rules |
| Surface | `#F4F6F8` | Light section backgrounds |
| White | `#FFFFFF` | Page background, card fill |

**DO NOT** use `#000000`. **DO NOT** splash the AI gradient on backgrounds or section headers.

## Gradient
```css
background: linear-gradient(90deg, #7671FF, #CB0C9F);
```
Use only for: primary CTAs, H1 line 2 text clip.

## Buttons
- Standard: 36px height, 4px radius, 9×15px padding
- Large: 44px height, 9×20px padding
- Gradient fill: `.btn.btn-gradient` — white text always
- Ghost: `.btn.btn-ghost` — purple border + text, transparent bg
- **Never** dark text on gradient or solid fill

## Cards
- White bg, 1px `#C6C9CD` border, 3px radius, 20px padding
- Hover: `box-shadow: 0 4px 16px rgba(0,0,0,0.10)`, border → `#8159BB`
- No scale/rotation transforms

## Tags (category badges)
- 11px Josefin Sans 700, uppercase, 2×6px padding, 3px radius
- Ghost style: purple text + border, no fill

## Spacing
- All margins/paddings in multiples of 10px (5px for tight pairs)
- 20px between blocks, 40px between sections
- Hero: 60–80px top/bottom
- Max content width: 1200px, centered

## Do's
- Use `var(--color-*)` CSS variables for all brand colors
- Use `.btn`, `.btn-gradient`, `.btn-ghost`, `.card`, `.tag`, `.section-heading` utility classes
- Use `font-heading` for all headings and button text
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`

## Don'ts
- No inline color hex values in JSX (use CSS classes or variables)
- No `margin-left` / `margin-right` — use `margin-inline-start` / `margin-inline-end`
- No fake testimonials, ratings, or customer counts
- No embedded builder form on the generators hub page
