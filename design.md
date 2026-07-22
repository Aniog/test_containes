# Velmora Fine Jewelry Design System

## Brand direction
Velmora should feel like quiet luxury: warm, editorial, elevated, and feminine without being sugary. The storefront must feel premium-but-accessible, with a refined boutique mood rather than a marketplace or discount store.

## Typography
- Headings and product names: `Cormorant Garamond` with elegant contrast and generous line-height.
- Body, navigation, buttons, labels: `Inter`.
- Product names should be uppercase with wide tracking: `tracking-[0.28em]` equivalent styling via a reusable class.

## Color palette
Commit to one direction sitewide:
- `ink`: deep espresso-charcoal for main backgrounds and high contrast sections. Example: `bg-ink`, `text-ink-foreground`.
- `parchment`: soft warm ivory for the main canvas. Example: `bg-parchment`, `text-ink`.
- `champagne`: muted metallic accent inspired by gold jewelry. Example: `bg-champagne`, `text-ink`, `border-champagne`.
- `rose-tint`: subtle blush neutral for cards and secondary backgrounds. Example: `bg-rose-tint`.
- `line`: delicate divider/border tone. Example: `border-line`.
- `muted`: softened editorial body text. Example: `text-muted`.

## Surface rules
- Main page background: `bg-parchment`.
- Hero and footer use `bg-ink` with explicit light foreground text.
- Cards sit on `bg-white/80` or `bg-rose-tint` with visible `text-ink`.
- Accents should be restrained. Use champagne for buttons, outline details, and badges, not everywhere.

## Layout and spacing
- Outer shell: max width around `max-w-7xl`.
- Section spacing: `py-16 md:py-24`.
- Use generous whitespace, especially around imagery and headlines.
- Hairline dividers should use `border-line` or `bg-line`.

## Component styling
- Buttons: premium rounded pills or softly squared buttons with subtle hover lift. Primary button example: `bg-champagne text-ink hover:bg-champagne-strong`.
- Secondary button example: `border border-line bg-transparent text-ink hover:bg-white/60`.
- Product cards: thin borders, soft shadow, calm hover motion, no loud sale stickers.
- Inputs: warm light surfaces with visible border and high-contrast placeholder text.

## Imagery
- Prefer warm-lit, editorial close-ups of gold jewelry on skin, dark satin, stone, or neutral backdrops.
- Avoid flat catalog-only visuals, bright white marketplace imagery, or anything that looks promotional/discount-heavy.
- Use a mix of model close-ups and still life imagery.

## Do
- Keep text clearly readable on every surface.
- Use serif headlines at generous scale with restrained supporting copy.
- Use subtle opacity, blur, and hover transitions.
- Preserve a luxurious mobile experience with stacked sections and horizontal media rails.

## Don't
- Do not use neon gold, harsh gradients, or loud promo banners.
- Do not overcrowd sections or reduce spacing to fit more products.
- Do not use low-contrast gray text on warm neutral cards.
- Do not make desktop layout feel like a stretched mobile page.
