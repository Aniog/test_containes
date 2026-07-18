# Velmora Fine Jewelry — Visual Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained,
confident, never loud or discount-looking. Generous whitespace, large
editorial imagery, thin hairline dividers, soft shadows, subtle motion.

## Color Palette (committed direction: warm editorial — cream + espresso + gold)
- `cream`        #FAF6EF  — primary page background (warm off-white)
- `cream-100`    #F3ECE0  — subtle section background / cards
- `espresso`     #1C1714  — deep warm near-black (dark sections, footer, hero overlay)
- `espresso-700` #2A2420  — primary body text
- `espresso-500` #4A413A  — secondary text
- `muted`        #8A7F73  — muted/placeholder text
- `gold`         #B08D57  — primary accent (warm metallic gold)
- `gold-600`     #9A7746  — accent hover / pressed
- `gold-100`     #E8DCC6  — soft accent tint backgrounds
- `line`         #E2D9CB  — hairline dividers / borders
- `white`        #FFFFFF  — cards / drawer

Accessibility: body text uses espresso-700 on cream (strong contrast). Accent
gold is used for buttons (gold bg + espresso text) and small accents, never
for body text on cream.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE, wide letter-spacing (tracking-[0.18em]).
- Nav links: UPPERCASE, tracking-[0.14em], text-xs.
- Hero headline: serif, large (text-5xl → text-7xl), leading tight.

## Spacing & Layout
- Section vertical padding: py-20 md:py-28
- Container: max-w-7xl mx-auto px-6 md:px-10
- Hairline dividers: border-t border-line
- Card radius: rounded-none (editorial, sharp) or rounded-sm max. Prefer
  sharp corners for an editorial feel; buttons may be pill (rounded-full)
  or sharp.
- Soft shadows: shadow-[0_10px_40px_-15px_rgba(28,23,20,0.25)]

## Buttons
- Primary (accent): bg-gold text-espresso hover:bg-gold-600, uppercase,
  tracking-wide, px-8 py-3.5, text-xs, rounded-full, transition.
- Outline: border border-espresso text-espresso hover:bg-espresso hover:text-cream.
- Ghost/links: underline-offset-4 hover:underline, text-xs uppercase tracking-wide.

## Motion
- Subtle, slow (300–500ms ease). Hover lifts on product cards (image swap,
  slight translate). No bouncy or flashy animations.

## Do's
- Use serif for all headings and product names.
- Keep generous whitespace; let imagery breathe.
- Use hairline borders (border-line) to separate sections.
- Ensure strong text contrast everywhere.

## Don'ts
- No bright/saturated colors. No pure black on pure white.
- No rounded-2xl chunky cards. No drop shadows on text.
- No generic e-commerce blue. No discount-red badges.
- Do not use gold for body text on cream (low contrast).
