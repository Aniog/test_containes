# Strikingly /generators Hub - Visual Style

This page mirrors Strikingly's product styling. All values below match the brief brand tokens exactly.

## Typography
- Headings: **Josefin Sans**, weight 700, ALL UPPERCASE, line-height 1.2. (Free on Google Fonts. Used as the Brandon Grotesque-equivalent.)
- Body: **Open Sans**, weight 400, 14px base, line-height 1.5.
- Buttons: Josefin Sans, weight 700, uppercase.
- H1: 40-48px desktop, 28-32px mobile.
- H2: 26-32px desktop.

## Color tokens
- Brand purple: `#8159BB` (badges, accents)
- AI gradient: `linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)` - only on primary CTAs and H1 line 2
- Blue-AI: `#7671FF`
- Pink-AI: `#CB0C9F`
- Body text: `#636972`
- Section headings: `#4B5056`
- Hero H1 line 1: `#2E2E2F`
- Card border: `#C6C9CD`
- Subtle divider: `#E2E4E7`
- Light background: `#F4F6F8`
- White: `#FFFFFF` (default page background)

## Buttons
- Standard: 36px height, 4px radius, 14px Josefin uppercase, 9x15px padding.
- Big: 44px height.
- Filled (gradient or solid): white text (`#FFFFFF`) always.
- Ghost: transparent bg, 1px brand-purple border, brand-purple text.

## Cards
- White bg, 1px `#C6C9CD` border, 3px radius, 20px padding.
- Hover: small box-shadow + brand-purple border. No scale/rotate.

## Tags (category badges)
- 11px Josefin uppercase, 2x6px padding, 3px radius.
- Ghost style: brand-purple text, 1px brand-purple border.

## Spacing
- Multiples of 10px (5px allowed for tight pairs).
- 20px between blocks. 40px between sections.
- Hero 60-80px top/bottom.
- 10px between adjacent buttons.
- Max content width 1200px, centered.

## Do's
- Use the AI gradient only on primary CTAs and the second H1 line.
- Use real `<a>` and `<button>` for interactive elements.
- White text on gradient/solid fills, always.
- CSS logical properties (`margin-inline-start`) for RTL readiness.

## Don'ts
- No gradient backgrounds on sections (except faint hero wash).
- No dark text on gradient buttons.
- No hover scale/rotate on cards.
- No `#000000` text.
- No `href="#"` placeholder links.
