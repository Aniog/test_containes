# Velmora Fine Jewelry Design System

## Brand mood
Velmora should feel like quiet luxury: warm, editorial, premium, and restrained. The experience must read as boutique demi-fine jewelry, not mass-market or discount retail.

## Palette
Use one consistent warm editorial palette across the site.

- `obsidian` — deep refined base for hero, header states, and luxury contrast
- `ink` — primary text on light surfaces
- `shell` — overall page background
- `mist` — soft elevated surface for cards and forms
- `parchment` — borders, dividers, and secondary surfaces
- `champagne` — restrained metallic accent for buttons, highlights, stars, and focus states
- `bronze` — darker accent for hover/pressed states
- `stone` — muted supporting copy
- `blush` — soft accent surface for newsletter and editorial blocks

Example Tailwind classes:
- Backgrounds: `bg-shell`, `bg-mist`, `bg-obsidian`, `bg-blush`
- Text: `text-ink`, `text-obsidian`, `text-stone`, `text-shell`, `text-champagne`
- Borders: `border-parchment`, `border-champagne/30`

## Typography
- Headings and product names: `font-serif` using Cormorant Garamond
- Body and UI: `font-sans` using Inter
- Product names should be uppercase with generous tracking using `tracking-luxe`

## Layout
- Favor generous whitespace and large editorial image areas
- Use thin dividers and soft, premium shadows
- Desktop should feel airy and multi-column; mobile should remain elegant and uncluttered
- Buttons should feel polished: either solid champagne with dark text or transparent with refined border

## Surfaces
- Cards should use light editorial surfaces such as `bg-mist` or `bg-shell`
- Dark sections should explicitly set readable foregrounds like `text-shell`
- Always preserve strong contrast for form fields, muted copy, badges, and small labels

## Motion
- Keep motion subtle and fast
- Prefer `transition-all`, `duration-300`, gentle opacity fades, and small vertical shifts
- Avoid bouncy or flashy animation

## Do
- Use hairline borders and restrained accent moments
- Keep copy concise and premium
- Let imagery and whitespace carry the luxury feel
- Maintain explicit foreground colors on every surface

## Do not
- Do not use loud sale styling, bright discount colors, or dense layouts
- Do not use generic marketplace card treatments
- Do not introduce extra accent colors outside this palette
- Do not leave important text colors implicit against custom backgrounds
