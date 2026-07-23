# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds. Never loud, never discount-looking.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `espresso`: #2C2420 — secondary dark, footer
- `parchment`: #F5F0E8 — warm off-white, main page background
- `ivory`: #FAF7F2 — card backgrounds, section alternates
- `linen`: #EDE8DF — subtle dividers, borders

### Accent / Gold
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover states, warm glow
- `gold-dark`: #A8854A — pressed states, deep accent

### Text
- `ink`: #1A1714 — primary body text on light backgrounds
- `muted`: #6B6560 — secondary text, captions
- `whisper`: #9E9690 — placeholder, disabled

### Utility
- `white`: #FFFFFF
- `overlay`: rgba(26,23,20,0.45) — hero overlay

## Typography

### Fonts
- **Serif**: Cormorant Garamond — headings, product names, editorial text
- **Sans**: Manrope — body, UI, labels, captions

### Scale
- `display`: Cormorant Garamond 300, 72–96px, tracking-wide — hero headlines
- `h1`: Cormorant Garamond 400, 48–60px — page titles
- `h2`: Cormorant Garamond 400, 36–42px — section headings
- `h3`: Cormorant Garamond 500, 24–28px — product names (UPPERCASE, tracking-widest)
- `body-lg`: Manrope 400, 16–18px — descriptions
- `body`: Manrope 400, 14–16px — standard body
- `caption`: Manrope 400, 12px — labels, metadata
- `ui`: Manrope 500–600, 12–14px — buttons, nav links

### Product Names
Always UPPERCASE, Cormorant Garamond, letter-spacing: 0.15–0.2em

## Spacing
Generous whitespace. Section padding: py-20 to py-32 on desktop, py-12 to py-16 on mobile.
Grid gaps: gap-6 to gap-8. Card padding: p-6 to p-8.

## Borders & Dividers
- Hairline dividers: `border-linen` (1px)
- Card borders: none (use shadow instead)
- Pill buttons: rounded-full
- Standard buttons: rounded-none (sharp, editorial)

## Shadows
- Card hover: `shadow-lg` with warm tint
- Nav solid: `shadow-sm`
- Drawer: `shadow-2xl`

## Buttons
### Primary (Accent)
- Background: gold (#C9A96E), text: obsidian
- Hover: gold-light (#DFC08A)
- Style: `px-8 py-3 font-manrope font-600 text-sm tracking-widest uppercase`
- Shape: rounded-none (sharp editorial)

### Outlined
- Border: 1px gold, text: gold
- Hover: fill gold, text obsidian
- Same sizing as primary

### Ghost / Text
- No border, text: muted
- Hover: text ink, underline

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `scale-105`
- Nav background: `transition-colors duration-300`
- Cart drawer: slide from right, `transition-transform duration-400`
- Fade-in on scroll: `opacity-0 → opacity-100, translateY(20px) → 0`

## Do's
- Use Cormorant Garamond for all headings and product names
- Use Manrope for all body, UI, and label text
- Keep backgrounds warm (parchment, ivory) — never cold white
- Use gold accent sparingly — it should feel precious
- Large editorial images, full-bleed where possible
- Generous padding around all content
- Thin hairline borders only

## Don'ts
- No bright/saturated colors
- No rounded corners on primary buttons (keep sharp)
- No generic blue links
- No heavy drop shadows
- No crowded layouts
- No cold grays or blues in the palette
