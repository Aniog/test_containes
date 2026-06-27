# Strikingly Design Tokens (/generators hub)

This file is the source of truth for visual style on the /generators hub page.
Mirror these tokens across any future generator pages.

## Fonts

- Headings: Brandon Grotesque, weight 700, ALL UPPERCASE, line-height 1.2.
  Fallback: Josefin Sans (Google Fonts, weight 700).
  Secondary fallback: Poppins. Never Inter or system sans for headings.
- Body: Open Sans, weight 400, 14px base, line-height 1.5.
- Buttons: same heading font, weight 700, uppercase.

Sizes:
- H1: 40-48px desktop, 28-32px mobile
- H2: 26-32px desktop
- H3: 18-22px
- Body: 14px base

## Colors (hex)

- Brand purple: #8159BB
- AI gradient: linear-gradient(135deg, #7671FF 0%, #CB0C9F 100%)
  - Use ONLY on: primary CTAs, second line of hero H1
  - Do NOT use on section backgrounds, headers, cards
- Body text: #636972
- Section headings: #4B5056
- Hero H1 line 1: #2E2E2F
- Card border: #C6C9CD
- Divider: #E2E4E7
- Light background: #F4F6F8
- Page background: #FFFFFF (never #000)
- Filled-button text: ALWAYS #FFFFFF

Subtle hero wash: low-opacity radial of purple→pink. No other section gets a tinted bg.

## Buttons

- Standard: 36px height, 4px radius, 14px heading-font uppercase, 9px/15px padding.
- Big: 44px height.
- Primary fill: AI gradient + white text.
- Ghost: transparent bg, 1px brand-purple border, brand-purple text.

## Cards

- White bg, 1px #C6C9CD border, 3px radius, 20px padding.
- Hover: small box-shadow lift + 1px brand-purple border. No scale/rotate.

## Tags (category badges)

- 11px heading-font uppercase, 2px/6px padding, 3px radius.
- Ghost: brand-purple text, 1px brand-purple border, no fill.

## Spacing

- Multiples of 10px (5px allowed for tight pairs).
- 20px between blocks.
- 40px between sections.
- 60-80px hero top/bottom.
- 10px between adjacent buttons.
- Max content width: 1200px, centered.

## Do / Don't

- Do: keep gradients to CTAs and the hero accent only.
- Do: use logical CSS properties (margin-inline-start) for RTL readiness.
- Do: white text on every filled button.
- Don't: introduce dark text on gradient fills.
- Don't: splash gradient on section backgrounds.
- Don't: use clickable divs; use real <a>/<button>.
- Don't: invent ratings, testimonials, or social proof.
