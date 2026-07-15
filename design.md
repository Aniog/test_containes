# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color. Subtle hover transitions, soft shadows.

## Color Palette
A deep refined base (warm charcoal/espresso) paired with warm metallic gold accents and soft neutral editorial tones. Light, airy surfaces for content; deep warm tones for hero/feature sections.

- `ink` (base dark): `#1A1714` — warm near-black espresso, used for hero/footer/feature backgrounds and primary text on light surfaces
- `cream` (base light): `#F7F3EC` — warm off-white, primary page background
- `sand`: `#EDE6DA` — soft neutral for cards / alternating sections
- `gold` (accent): `#B08D57` — warm metallic gold for buttons, links, accents, dividers
- `gold-soft`: `#C9A876` — lighter gold for hover states
- `stone`: `#8A7F73` — muted warm gray for secondary text
- `line`: `#E2D9CC` — hairline divider color on light surfaces

### Semantic token pairs (Tailwind)
- Background `cream` / Foreground `ink`
- Card `#FFFFFF` / Card-foreground `ink`
- Primary `gold` / Primary-foreground `cream`
- Muted `sand` / Muted-foreground `stone`
- Border `line`

Contrast: `ink` on `cream` is high contrast. `cream` on `ink` is high contrast. Never use `stone` on `sand` (too low). Gold text only on dark backgrounds (`ink`/`gold` filled buttons use `cream` text).

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600. Editorial, elegant.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.2em]`), serif.
- Nav links: uppercase, `text-xs tracking-[0.2em]`.
- Buttons: uppercase, `text-xs tracking-[0.2em]`, sans-serif.

Font sizes: large editorial headings (`text-5xl`–`text-7xl` on desktop), restrained body (`text-sm`/`text-base`).

## Spacing & Layout
- Generous vertical rhythm: sections `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-6 md:px-8`.
- Hairline dividers: `border-t border-line`.
- Soft shadows: `shadow-sm`, `shadow-md` on hover for cards.

## Components
- Buttons: solid gold (`bg-gold text-cream`) or outlined (`border border-ink text-ink`). Rounded-none or slightly rounded (`rounded-sm`). Hover: subtle darken / fill.
- Product cards: white background, hairline border, image area 4:5, hover reveals second image + quick add-to-cart overlay.
- Pills (variant selector): `rounded-full border`, active = `bg-ink text-cream`.
- Inputs: hairline border, `bg-transparent`, focus ring gold.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, small details, dividers.
- Use generous whitespace.
- Ensure strong contrast on all text.

## Don'ts
- No loud/discount colors (no reds, no neon).
- No generic rounded blue buttons.
- No low-contrast text (e.g. stone on sand).
- No hardcoded arbitrary hex in components — use Tailwind named tokens.
- Don't overuse images; place them editorially.
