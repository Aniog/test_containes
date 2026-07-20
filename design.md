# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry for women 25–45.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #4A4540 — muted text on dark
- `parchment`: #F5F0E8 — warm off-white page background
- `cream`: #FAF7F2 — card/section backgrounds
- `linen`: #EDE8DF — subtle dividers, borders

### Accent (Gold)
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover state, lighter gold
- `gold-dark`: #A8854A — pressed state, deep gold

### Text
- `ink`: #1A1714 — primary body text on light
- `muted`: #7A7068 — secondary/caption text
- `whisper`: #A89F94 — placeholder, disabled

### Semantic
- `success`: #4A7C59
- `error`: #9B3A3A

## Typography

### Fonts
- **Serif (headings, product names, editorial)**: Cormorant Garamond — weights 300, 400, 500, 600
- **Sans (body, UI, labels)**: Manrope — weights 300, 400, 500, 600, 700

### Scale
- `display`: 4.5rem / 72px — hero headline (Cormorant, 300)
- `h1`: 3rem / 48px — page titles (Cormorant, 400)
- `h2`: 2rem / 32px — section headings (Cormorant, 400)
- `h3`: 1.375rem / 22px — card titles (Cormorant, 500)
- `body-lg`: 1.0625rem / 17px — lead text (Manrope, 300)
- `body`: 0.9375rem / 15px — standard body (Manrope, 400)
- `caption`: 0.8125rem / 13px — labels, captions (Manrope, 500)
- `micro`: 0.6875rem / 11px — badges, tags (Manrope, 600, uppercase, wide tracking)

### Product Name Style
UPPERCASE, letter-spacing: 0.12em, Cormorant Garamond 500

## Spacing
Generous whitespace. Section padding: `py-20 md:py-28`. Card gaps: `gap-6 md:gap-8`.

## Borders & Dividers
- Hairline dividers: `border-linen` (1px)
- Card borders: none (use shadow instead)
- Pill buttons: `rounded-full`
- Standard buttons: `rounded-none` (sharp, editorial)

## Shadows
- Card hover: `shadow-[0_8px_32px_rgba(26,23,20,0.08)]`
- Drawer: `shadow-[-4px_0_24px_rgba(26,23,20,0.12)]`

## Buttons

### Primary (CTA)
- Background: `gold` (#C9A96E)
- Text: `obsidian` (#1A1714)
- Hover: `gold-light` (#DFC08A)
- Style: `rounded-none px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300`

### Secondary (Outlined)
- Border: `obsidian` 1px
- Text: `obsidian`
- Hover: bg `obsidian`, text `parchment`
- Style: same sizing as primary

### Ghost
- No border, no bg
- Text: `muted`
- Hover: text `ink`

## Animations
- Hover transitions: `duration-300 ease-out`
- Image scale on hover: `scale-105`
- Nav background: `transition-all duration-400`
- Cart drawer: slide from right `translate-x-full → translate-x-0`
- Fade-in sections: `opacity-0 → opacity-100 translateY(16px) → 0`

## Do's
- Use Cormorant for all headings and product names
- Use Manrope for all body copy, labels, nav links
- Keep product names UPPERCASE with wide tracking
- Use gold accent sparingly — only for CTAs and key highlights
- Generous padding around all content
- Thin hairline borders only
- Warm, editorial image treatment

## Don'ts
- No bright white (#FFFFFF) backgrounds — use parchment/cream
- No rounded corners on primary buttons
- No generic blue links
- No heavy drop shadows
- No cluttered layouts
- No more than 2 accent colors per section
