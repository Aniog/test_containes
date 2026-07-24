# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Not loud, not discount, not generic.
Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color.
Subtle hover transitions, soft shadows.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory)
- `ink` (base dark): #1C1714  — deep warm espresso, used for nav-solid, footer, dark sections
- `espresso`: #2A2320 — slightly lighter dark surface
- `ivory`: #F7F2EA — warm off-white page background
- `cream`: #FBF8F2 — card / panel background
- `sand`: #E8DECF — soft neutral divider / muted surface
- `gold` (accent): #B08A4F — warm metallic gold for buttons, links, accents
- `gold-deep`: #8E6B33 — hover / pressed gold
- `stone` (muted text): #6B6258 — secondary text on light
- `stone-light`: #9A9085 — tertiary text
- `charcoal` (primary text on light): #2A2320

Accessibility: charcoal on ivory = strong contrast. gold on ink = strong contrast. Never use stone-light on ivory for important text.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (tracking-[0.18em]).
- Nav links: uppercase, tracking-[0.2em], text-xs/sm.
- Section eyebrows: uppercase, tracking-[0.3em], text-xs, gold.

## Spacing & Layout
- Section vertical padding: py-20 md:py-28
- Container: max-w-7xl mx-auto px-6 md:px-10
- Hairline dividers: border-t border-sand
- Card radius: rounded-none (editorial, sharp) or rounded-sm max. Prefer sharp corners for editorial feel.

## Buttons
- Primary (accent): bg-gold text-ink, uppercase tracking-wide, px-8 py-3.5, hover:bg-gold-deep hover:text-ivory. Sharp corners.
- Outline: border border-ink text-ink, hover:bg-ink hover:text-ivory.
- On dark sections: bg-ivory text-ink or bg-gold text-ink.

## Shadows
- Soft, subtle: shadow-[0_8px_30px_rgba(28,23,20,0.06)]
- Cards: hover lift translate-y-[-2px] with soft shadow.

## Do's
- Use Cormorant Garamond for all serif headings.
- Keep accent gold restrained — buttons, eyebrows, small accents only.
- Generous whitespace between sections.
- Hairline dividers in sand color.

## Don'ts
- No rounded-full buttons (except small pills like variant selectors).
- No bright/saturated colors. No pure black or pure white.
- No heavy shadows. No gradients except very subtle warm tints.
- Don't use stone-light text on ivory for important content.
