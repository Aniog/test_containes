# Strikingly Design System

## Fonts
- **Headings**: Josefin Sans (700, uppercase, line-height 1.2). Fallback: Poppins. Class: `font-heading` or CSS var `--font-heading`.
- **Body**: Open Sans (400, 14px base, line-height 1.5). Class: `font-body` or CSS var `--font-body`.
- **Buttons**: Same as headings (Josefin Sans 700 uppercase).
- H1: 40–48px desktop, 28–32px mobile.
- H2: 28–30px desktop.
- H3: 20–22px.

## Colors
| Token | Hex | Usage |
|---|---|---|
| Brand Purple | `#8159BB` | Badges, accents, borders, tags |
| AI Blue | `#7671FF` | Gradient start |
| AI Pink | `#CB0C9F` | Gradient end |
| Body Text | `#636972` | Paragraphs, descriptions |
| Heading | `#4B5056` | Section headings (h2, h3) |
| Hero Heading | `#2E2E2F` | H1 line 1, FAQ questions |
| Card Border | `#C6C9CD` | Card borders |
| Divider | `#E2E4E7` | Horizontal rules, FAQ dividers |
| Light BG | `#F4F6F8` | Alternate section backgrounds |
| White | `#FFFFFF` | Default page background |

## AI Gradient
`linear-gradient(to right, #7671FF, #CB0C9F)`
- Use ONLY for: primary CTA buttons, H1 line 2 gradient text.
- Do NOT use on section backgrounds or headers.

## Buttons
- **Primary (AI gradient)**: `.btn-ai` — gradient fill, white text, 36px height, 4px radius. Large: `.btn-ai-lg` (44px).
- **Ghost**: `.btn-ghost` — transparent bg, 1px brand-purple border, brand-purple text. Large: `.btn-ghost-lg`.
- All button text: uppercase, Josefin Sans 700, white on filled buttons.
- Spacing between adjacent buttons: 10px.

## Cards
- `.gen-card`: white bg, 1px `#C6C9CD` border, 3px radius, 20px padding.
- Hover: `box-shadow: 0 4px 16px rgba(0,0,0,0.10)`, border becomes brand-purple.
- No scale/rotation transforms on hover.

## Tags
- `.cat-tag`: 11px Josefin Sans uppercase, 2px 6px padding, 3px radius, brand-purple text + border, no fill.

## Spacing
- All margins/paddings in multiples of 10px (5px allowed for tight pairs).
- 20px between blocks, 40px between sections.
- Hero: 60–80px top/bottom.
- Max content width: 1200px, centered.

## Do's
- Use `content-container` class for max-width centering.
- Use CSS logical properties (`margin-inline-start`, `padding-inline`) for RTL readiness.
- White text on all gradient/filled buttons.
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.

## Don'ts
- No dark text on gradient fills.
- No gradient on section backgrounds.
- No fake social proof (ratings, testimonials, customer counts).
- No `href="#"` placeholder links.
- No `<div>` for interactive elements — use `<a>` and `<button>`.
