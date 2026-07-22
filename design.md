# Velmora Fine Jewelry — Visual Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory neutrals)
- `ivory`        #F7F3EC  — page background (warm off-white)
- `cream`        #EFE8DC  — secondary surface / cards
- `sand`         #E2D6C2  — borders, hairline dividers, muted surfaces
- `espresso`     #2A211A  — primary dark text / dark sections (deep warm brown-black)
- `cocoa`        #4A3F35  — secondary text on light
- `taupe`        #8A7C6B  — muted/placeholder text
- `gold`         #B08A4F  — primary accent (warm metallic gold)
- `gold-deep`    #8C6A36  — hover / pressed accent
- `champagne`    #D9BE86  — soft accent fills, badges

Accessibility: espresso text on ivory (contrast ~12:1). gold on espresso used only for large text/accents. Body text never uses gold on light backgrounds.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Product names: UPPERCASE with wide letter-spacing (tracking-[0.18em]).
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Hero headline: serif, large, tight leading.
- Eyebrow labels: Inter, uppercase, tracking-[0.25em], text-xs, gold or taupe.

## Spacing & Layout
- Section vertical padding: py-20 md:py-28
- Container: max-w-7xl mx-auto px-6 md:px-10
- Hairline dividers: border-t border-sand
- Card radius: rounded-none (editorial, sharp) or rounded-sm max. Prefer sharp corners for premium feel.
- Soft shadows: shadow-[0_10px_40px_-15px_rgba(42,33,26,0.25)]

## Buttons
- Primary (accent): bg-gold text-ivory, hover bg-gold-deep, uppercase tracking-[0.18em] text-xs, py-4 px-8, transition-colors duration-300.
- Outline: border border-espresso text-espresso hover:bg-espresso hover:text-ivory.
- Ghost/Link: text-espresso underline-offset-4 hover:text-gold-deep.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds. Large editorial close-ups.
- Use data-strk-img / data-strk-bg tagging system. Warm, lit, editorial mood.

## Do's
- Use generous whitespace and hairline dividers.
- Keep accent (gold) restrained — buttons, small labels, fine lines.
- Uppercase wide-tracked product names.
- Subtle transitions (duration-300, ease-out).

## Don'ts
- No loud gradients, no discount badges, no rounded-full chunky buttons.
- No low-contrast text (gold on ivory for body text is forbidden).
- No generic e-commerce clutter; keep it editorial and airy.
- Do not mix serif weights carelessly — headings stay light/medium.
