# Strikingly /generators — Design System

Single source of truth for visual style on the /generators hub page.

## Fonts

- **Headings**: Brandon Grotesque, 700, ALL UPPERCASE, line-height 1.2.
  Brandon Grotesque is paid; the runtime fallback is **Josefin Sans** (free,
  Google Fonts, 700). Secondary fallback: Poppins. Never fall back to Inter or
  the system sans for headings.
- **Body**: Open Sans, 400, 14px base, line-height 1.5.
- **Buttons**: same as headings, 700, uppercase.

Sizes:
- H1: 40–48px desktop, 28–32px mobile
- H2: 26–32px desktop
- H3: 18–22px desktop
- Body: 14px base, 16px for hero subhead

## Colors

| Token | Value | Use |
|---|---|---|
| brand-purple | `#8159BB` | accents, badges, ghost border |
| ai-blue | `#7671FF` | gradient start |
| ai-pink | `#CB0C9F` | gradient end |
| ai-gradient | `linear-gradient(90deg, #7671FF, #CB0C9F)` | primary CTAs, H1 line 2 only |
| body | `#636972` | body text |
| heading | `#4B5056` | section headings |
| heading-strong | `#2E2E2F` | hero H1 line 1 |
| border | `#C6C9CD` | card border |
| divider | `#E2E4E7` | subtle dividers |
| bg-light | `#F4F6F8` | optional surface |
| bg | `#FFFFFF` | page background |

Do **not** use `#000000`. Do **not** splash the AI gradient on backgrounds or
section headers — only on primary CTAs and the gradient line of the H1.

## Buttons

- Standard: 36px height, 4px radius, 14px heading font, uppercase, 9×15 padding.
- Big: 44px height.
- Filled (gradient or solid): always white text `#FFFFFF`. Never dark text on a
  filled button.
- Ghost: transparent fill, 1px brand-purple border, brand-purple text.

## Cards

- White background, 1px `#C6C9CD` border, 3px radius, 20px padding.
- Hover: subtle box-shadow lift + 1px brand-purple border.
- No `transform: scale()` or rotation on hover.

## Tags (category badges)

- 11px heading font, uppercase, 2×6 padding, 3px radius.
- Ghost: brand-purple text, 1px brand-purple border, no fill.

## Spacing

- Multiples of 10px (5px allowed for tight pairs).
- 20px between blocks inside a section.
- 40px between sections.
- Hero 60–80px top/bottom.
- 10px gap between adjacent buttons.
- Max content width 1200px, centered.
- Use logical properties (`margin-inline-start`, `padding-inline`) where
  practical for RTL readiness.

## Do / Don't

- Do keep the AI gradient rare and special. It's a signature, not a wallpaper.
- Do keep every section on a white background. Only the hero may have a very
  faint purple-to-pink wash.
- Do make every interactive element a real `<a>` or `<button>`.
- Don't introduce a 2nd accent color. Brand purple is the only accent.
- Don't add hover transforms (scale, rotate). Use shadow + border color only.
- Don't put dark text on a filled or gradient button.
