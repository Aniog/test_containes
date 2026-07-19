# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color. Subtle hover transitions, soft shadows.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory neutrals)
- `ivory`        `#F7F3EC`  — primary page background (warm off-white)
- `cream`        `#EFE8DC`  — secondary surface / cards
- `sand`         `#E2D6C2`  — borders, dividers, muted fills
- `espresso`     `#1F1A15`  — primary text / dark sections (deep warm brown-black)
- `cocoa`        `#3A322A`  — secondary text on light
- `taupe`        `#8A7E6E`  — muted/placeholder text
- `gold`         `#B08A4F`  — primary accent (warm metallic gold)
- `gold-deep`    `#8C6A36`  — hover / pressed accent
- `gold-soft`    `#D9BE8E`  — soft accent fills

Accessibility: espresso text on ivory (contrast ~14:1), gold on espresso (~5.5:1). Never use taupe text on ivory for important content (use cocoa). Gold buttons use espresso text for contrast.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE, wide letter-spacing (`tracking-[0.18em]`), serif.
- Eyebrow / labels: UPPERCASE sans, `tracking-[0.25em]`, `text-xs`, taupe/gold.
- Body base size 15–16px, line-height 1.6.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container max width: `max-w-7xl mx-auto px-6 md:px-10`.
- Hairline dividers: `border-t border-sand`.
- Card radius: `rounded-none` (editorial, sharp) or `rounded-sm` max. Keep edges crisp.
- Soft shadows only on hover: `shadow-[0_18px_40px_-20px_rgba(31,26,21,0.35)]`.

## Buttons
- Primary (accent): `bg-gold text-espresso` hover `bg-gold-deep`, uppercase sans, `tracking-[0.2em]`, `text-xs`, `py-4 px-8`, `rounded-none`.
- Outline: `border border-espresso text-espresso` hover `bg-espresso text-ivory`.
- Ghost / link: underline-on-hover, serif or sans per context.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds. Large editorial close-ups.
- Use `data-strk-img` / `data-strk-bg` tagging system with descriptive queries referencing nearby text.

## Do's
- Use generous whitespace and hairline dividers.
- Keep accent (gold) restrained — buttons, small labels, thin underlines.
- Uppercase serif product names with wide tracking.
- Subtle transitions (`transition duration-300 ease-out`).

## Don'ts
- No bright/saturated colors. No pure black or pure white.
- No rounded-full chunky buttons. No drop shadows on resting cards.
- No generic e-commerce density — keep it airy and editorial.
- No low-contrast text (taupe on ivory is for decorative labels only).
