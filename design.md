# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained,
confident, never loud or discount-looking. Generous whitespace, large
editorial imagery, thin hairline dividers, soft shadows, subtle motion.

## Color Palette
A deep, refined warm-charcoal base with warm metallic gold accents and soft
cream neutrals. Strong contrast for accessibility.

- `ink`        #1A1714  — deep warm near-black (primary text, dark sections)
- `ink-soft`   #2A2520  — slightly lifted dark surface
- `cream`      #F7F2EA  — warm off-white page background
- `cream-soft` #FBF8F2  — lifted card / panel background
- `sand`       #E8DECF  — warm neutral divider / muted surface
- `gold`       #B08D57  — primary accent (warm metallic gold)
- `gold-deep`  #8A6B3F  — hover / pressed accent
- `stone`      #6B6258  — muted secondary text
- `stone-soft` #9A9088  — placeholder / disabled text

All text on dark surfaces uses `cream`/`cream-soft`; all text on light
surfaces uses `ink`/`stone`. Never place low-contrast text (e.g. stone on
sand, gold on cream) for body copy.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 400–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.2em]`).
- Eyebrow / label text: UPPERCASE, `tracking-[0.25em]`, small size, `stone`.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-sand` / `border-ink/10` on dark.
- Card radius: `rounded-none` to `rounded-sm` only — sharp, editorial.

## Buttons
- Primary (accent): solid `bg-ink text-cream` or `bg-gold text-cream`, hover
  `bg-gold-deep`. Uppercase, tracked, `px-8 py-4`, `text-xs`.
- Secondary (outlined): `border border-ink text-ink`, hover `bg-ink text-cream`.
- On dark sections: outlined `border-cream/40 text-cream`, hover `bg-cream text-ink`.

## Motion
- Transitions: `duration-300 ease-out`, `duration-500` for image reveals.
- Hover lifts: `hover:-translate-y-1`, soft shadow on hover.
- Image crossfade on product hover.

## Do's
- Use serif for all headlines and product names.
- Keep accent gold restrained — buttons, small details, dividers.
- Use generous whitespace between sections.
- Ensure every text element has strong contrast against its background.

## Don'ts
- No rounded-full buttons (pill buttons only for variant selectors).
- No bright/saturated colors. No pure black or pure white.
- No heavy shadows. No discount-style badges or loud CTAs.
- No low-contrast body text.
