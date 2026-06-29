# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial mood. Demi-fine gold jewelry for women 25–45. Premium-but-accessible ($30–$120).

## Color Palette (Dark Luxe)
| Token              | Hex       | Usage                              |
|---------------------|-----------|-------------------------------------|
| `velmora-bg`       | `#0f0d0b` | Page background                     |
| `velmora-surface`  | `#1a1714` | Navbar, drawer, elevated panels     |
| `velmora-card`     | `#211e1a` | Product cards, image containers     |
| `velmora-border`   | `#2d2824` | Dividers, card borders              |
| `velmora-gold`     | `#c9a96e` | Primary accent, prices, CTAs        |
| `velmora-gold-light` | `#d4b87a` | Gold hover state                  |
| `velmora-cream`    | `#f5f0eb` | Primary text (headings, titles)     |
| `velmora-text-secondary` | `#a89f94` | Body text, descriptions    |
| `velmora-muted`    | `#6b6058` | Placeholder, disabled text          |
| `velmora-star`     | `#c9a96e` | Star ratings                        |
| `velmora-error`    | `#e54d4d` | Error states, destructive actions   |

## Typography
- **Serif (headings):** Cormorant Garamond — elegant, editorial
- **Sans (body/UI):** Inter — clean, highly readable
- Product names: UPPERCASE with `tracking-[0.12em]` wide letter-spacing
- Section labels: UPPERCASE, small text, gold color, `tracking-[0.2em]`

## Spacing & Layout
- Max content width: `max-w-[1400px]`
- Standard padding: `px-5 md:px-8`
- Generous whitespace between sections: `py-16 md:py-24`
- Card gaps: `gap-5 md:gap-8`

## Components
- **Buttons:** Solid gold bg with dark text, or gold-outline with gold text. Hover lightens.
- **Cards:** Dark bg (`velmora-card`), no heavy borders, subtle hover shadow.
- **Dividers:** `h-px bg-velmora-border` — thin hairline, barely visible.
- **Stars:** Filled gold (`fill-velmora-star text-velmora-star`) or empty muted.
- **Accordions:** Hairline border-bottom, chevron toggle, smooth open/close.

## Do's
- Use generous whitespace; let content breathe
- Keep contrast strong (cream on dark, gold on dark)
- Use subtle transitions (`duration-200` to `duration-700`)
- Maintain responsive-first layout (mobile-first breakpoints)

## Don'ts
- Never use bright, loud colors or discount-looking badges
- Avoid heavy box shadows; use soft shadows sparingly
- Don't use mixed serif/sans on the same element
- Never use font sizes below 10px for readable text
