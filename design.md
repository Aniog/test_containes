# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color. Subtle hover transitions, soft shadows.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory neutrals)
- `espresso` (base dark): `#1C1714` — deep warm near-black, used for footer, dark sections, hero overlays
- `ink` (primary text): `#2A2520` — warm near-black for body text
- `ivory` (page background): `#F7F3EC` — soft warm cream
- `cream` (alt surface): `#EFE8DC` — slightly deeper cream for cards/strips
- `sand` (muted text / borders): `#B8AFA1` — warm taupe for secondary text and hairlines
- `gold` (accent): `#B08A4F` — refined warm metallic gold for buttons, links, accents
- `gold-deep` (accent hover): `#947039` — deeper gold for hover states
- `champagne` (soft accent surface): `#E7D9BE` — soft champagne for newsletter block

Semantic token pairs (Tailwind):
- background: `bg-ivory`, foreground: `text-ink`
- card: `bg-white` with `text-ink`; alt card: `bg-cream`
- muted: `bg-cream`, muted-foreground: `text-sand`
- primary: `bg-gold text-ivory`, hover `bg-gold-deep`
- border hairline: `border-sand/40`

Contrast: ink on ivory = strong. gold on espresso = strong. Never put sand text on cream without checking — use ink for important content on cream surfaces.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600. Product names UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Eyebrow / labels: Inter, UPPERCASE, `tracking-[0.2em]`, `text-xs`, color sand or gold.
- Hero headline: Cormorant Garamond, large (`text-5xl`–`text-7xl`), tight leading.

Fonts loaded via Google Fonts in index.html.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-5 md:px-8`
- Hairline dividers: `border-t border-sand/40`
- Card radius: `rounded-none` (editorial, sharp corners) — buttons `rounded-full` (pill) for premium feel
- Soft shadows: `shadow-[0_10px_40px_-15px_rgba(28,23,20,0.25)]`

## Buttons
- Primary (accent): `bg-gold text-ivory rounded-full px-8 py-3.5 tracking-[0.15em] text-xs uppercase font-medium hover:bg-gold-deep transition-colors`
- Outline: `border border-ink/30 text-ink rounded-full px-8 py-3.5 tracking-[0.15em] text-xs uppercase hover:border-gold hover:text-gold transition-colors`
- On dark sections: `bg-ivory text-ink` or `border-ivory/40 text-ivory`

## Do's
- Use generous whitespace and large imagery.
- Keep accent gold restrained — buttons, small labels, links.
- Uppercase wide-tracked product names.
- Hairline dividers between sections.
- Soft, slow transitions (`duration-500`, `ease-out`).

## Don'ts
- No loud discount badges, no neon colors, no drop shadows on text.
- No rounded corners on cards/images (editorial sharp edges).
- No generic blue/purple links.
- No low-contrast text (sand on cream is risky — prefer ink).
- Don't hardcode hex in components; use Tailwind named tokens defined in config.
