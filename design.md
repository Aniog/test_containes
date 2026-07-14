# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Not loud, not discount, not generic. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory neutrals)
- `espresso` (base dark): `#1C1714` — deep warm near-black, used for footer, dark sections, nav solid
- `ink` (primary text): `#2A2420` — warm near-black for body text on light
- `gold` (accent): `#B08D57` — warm metallic gold for buttons, links, accents, stars
- `gold-soft`: `#C9A876` — lighter gold for hover/secondary
- `ivory` (page background): `#F7F3EE` — warm soft ivory
- `cream` (card/section alt): `#EFE8DF` — slightly deeper warm neutral
- `stone` (muted text): `#8A7F73` — warm gray for secondary text
- `hairline`: `#E2D9CD` — thin divider color

Tailwind tokens (added to config):
- `espresso: '#1C1714'`
- `ink: '#2A2420'`
- `gold: '#B08D57'`
- `gold-soft: '#C9A876'`
- `ivory: '#F7F3EE'`
- `cream: '#EFE8DF'`
- `stone: '#8A7F73'`
- `hairline: '#E2D9CD'`

Contrast: ink on ivory = strong. gold on espresso = strong. stone used only for secondary text on ivory (passes AA for large/secondary). Never put stone text on cream without testing.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400/500/600. Large display sizes, tight leading.
- Body & UI: **Inter** (sans-serif), weights 300/400/500/600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.2em]`), smaller serif.
- Nav links: uppercase, `tracking-[0.15em]`, text-xs, sans-serif.
- Buttons: uppercase, `tracking-[0.15em]`, text-xs/sm, sans-serif, medium weight.

Font loading via Google Fonts in index.html:
`Cormorant+Garamond:wght@400;500;600;700` and `Inter:wght@300;400;500;600;700`

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-5 md:px-8`
- Generous whitespace between elements.
- Hairline dividers: `border-hairline`, 1px.

## Buttons
- Primary (accent): solid `bg-gold text-ivory` hover `bg-gold-soft`, uppercase, tracking-wide, `px-8 py-3.5`, no border-radius (sharp/editorial) or very subtle `rounded-none`. Premium feel.
- Secondary (outlined): `border border-ink text-ink` hover `bg-ink text-ivory`.
- On dark sections: `border border-ivory/70 text-ivory` hover `bg-ivory text-espresso`.

## Cards
- Product cards: white/ivory background, hairline border optional, soft shadow on hover (`shadow-md`), image area 4:5 or 1:1, hover reveals second image + quick add button.
- No heavy borders. Let whitespace separate.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds. Editorial close-ups.
- Use `data-strk-img` / `data-strk-bg` tagging system with descriptive queries referencing nearby text.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, stars, small accents, links.
- Use uppercase + wide tracking for product names and nav.
- Generous whitespace.
- Hairline dividers between sections where appropriate.

## Don'ts
- No bright/saturated colors. No blues/purples.
- No rounded-full buttons (pill CTA ok for variant selectors only).
- No heavy shadows. No generic e-commerce density.
- No discount-looking red sale badges.
- Don't use stone text on cream without checking contrast.
