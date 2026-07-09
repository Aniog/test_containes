# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry for women 25–45.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `espresso`: #2C2420 — secondary dark, footer
- `parchment`: #F5F0E8 — warm off-white, main page background
- `cream`: #FAF7F2 — card backgrounds, section alternates
- `linen`: #EDE8DF — borders, dividers, subtle backgrounds

### Accent / Gold
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover states, lighter gold
- `gold-dark`: #A8854A — pressed states, deep gold

### Text
- `ink`: #1A1714 — primary body text on light backgrounds
- `muted`: #6B6259 — secondary text, captions, labels
- `whisper`: #9E9189 — placeholder, disabled text

### Semantic
- `surface`: #FFFFFF — pure white for cards/modals
- `overlay`: rgba(26,23,20,0.6) — image overlays

## Typography

### Fonts
- **Serif (headings, product names, editorial):** Cormorant Garamond — weights 300, 400, 500, 600
- **Sans-serif (body, UI, labels):** Manrope — weights 300, 400, 500, 600, 700

### Scale
- `display`: 4.5rem / 72px — hero headline (Cormorant, 300)
- `h1`: 3rem / 48px — page titles (Cormorant, 400)
- `h2`: 2rem / 32px — section headings (Cormorant, 400)
- `h3`: 1.375rem / 22px — product names (Cormorant, 500, uppercase, tracking-widest)
- `body-lg`: 1.0625rem / 17px — lead text (Manrope, 300)
- `body`: 0.9375rem / 15px — standard body (Manrope, 400)
- `label`: 0.75rem / 12px — tags, badges, nav links (Manrope, 500, uppercase, tracking-wider)
- `price`: 1.125rem / 18px — product prices (Manrope, 500)

### Product Name Rule
Product names: Cormorant Garamond, UPPERCASE, tracking-widest (0.15em+)

## Spacing
Generous whitespace. Section padding: py-20 to py-28 on desktop, py-12 to py-16 on mobile.
Grid gaps: gap-6 to gap-8. Card padding: p-6.

## Borders & Dividers
- Hairline dividers: `border-linen` (1px)
- Card borders: none (use shadow instead) or `border border-linen`
- Border radius: `rounded-none` for editorial feel, `rounded-sm` (2px) for pills/buttons

## Shadows
- Card hover: `shadow-[0_8px_32px_rgba(26,23,20,0.08)]`
- Drawer: `shadow-[-4px_0_24px_rgba(26,23,20,0.12)]`
- Button: none (flat premium feel)

## Buttons
- **Primary (CTA):** bg-gold text-obsidian uppercase tracking-widest text-xs font-medium px-8 py-3.5 hover:bg-gold-light transition-colors
- **Outlined:** border border-obsidian text-obsidian uppercase tracking-widest text-xs font-medium px-8 py-3.5 hover:bg-obsidian hover:text-parchment transition-colors
- **Ghost:** text-muted uppercase tracking-widest text-xs hover:text-ink transition-colors
- All buttons: rounded-none (sharp, editorial)

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `scale-105`
- Fade in: `opacity-0 → opacity-100` with `transition-opacity duration-500`
- Cart drawer: slide from right, `translate-x-full → translate-x-0`
- No bouncy or playful animations — everything is slow, smooth, restrained

## Do's
- Large editorial imagery (full-bleed, aspect-ratio locked)
- Thin hairline dividers between sections
- Generous padding around text
- Uppercase product names with wide tracking
- Warm gold accents sparingly
- Serif for all emotional/editorial copy

## Don'ts
- No rounded corners on main containers (editorial = sharp)
- No bright colors other than gold accent
- No drop shadows on text
- No generic blue links
- No crowded layouts
- No Comic Sans, Roboto, or system fonts for headings
