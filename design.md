# Velmora Fine Jewelry — Visual Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color.

## Color Palette (committed direction: warm editorial)
- **Ink (primary text / dark surfaces):** `#1A1714` (warm espresso near-black), soft `#2B2622`, muted `#5C544C`
- **Cream (page background / light surfaces):** `#F7F2EA` (warm paper), soft `#FBF8F2`, deep `#EFE7DA`
- **Sand (dividers / subtle fills):** `#E4D8C7`, deep `#D6C7B2`
- **Gold (accent — buttons, links, highlights):** `#B08D57` (refined metallic), light `#C9A876`, deep `#8A6A3E`

Tailwind tokens: `ink`, `cream`, `sand`, `gold` (each with shades). Use semantic pairs:
- Text on cream: `text-ink` on `bg-cream`
- Text on ink: `text-cream` on `bg-ink`
- Accent button: `bg-gold text-cream-soft`
- Hairline divider: `border-sand-deep` or `border-ink/10`

## Typography
- **Headings & product names:** Cormorant Garamond (serif), weight 400–600.
- **Body & UI:** Inter (sans), weight 300–600.
- **Product names:** UPPERCASE with wide letter-spacing (`tracking-widest2` / `tracking-[0.25em]`).
- **Eyebrow / labels:** UPPERCASE Inter, `text-xs tracking-widest2 text-gold` or `text-ink-muted`.

## Spacing & Layout
- Max content width: `max-w-content` (1280px), generous horizontal padding `px-6 md:px-10 lg:px-16`.
- Section vertical rhythm: `py-20 md:py-28 lg:py-32`.
- Hairline dividers: `border-t border-ink/10`.

## Components
- **Buttons:** Solid gold `bg-gold text-cream-soft tracking-widest2 uppercase text-xs px-8 py-4 hover:bg-gold-deep`; Outlined `border border-ink text-ink hover:bg-ink hover:text-cream`. Rounded-none or slightly rounded `rounded-sm`. Subtle transition `transition-colors duration-300 ease-elegant`.
- **Cards:** `bg-cream-soft` with soft shadow on hover, image-first. Hover reveals second image + quick add.
- **Inputs:** Underline style or thin border `border-ink/20 bg-transparent focus:border-gold`.

## Do's
- Use generous whitespace and large editorial imagery.
- Keep accent gold restrained — for CTAs, small highlights, eyebrows.
- Ensure strong contrast: ink text on cream, cream text on ink.
- Subtle hover transitions (300ms, elegant easing).

## Don'ts
- No loud/discount colors (no pure reds, neon, bright sale tags).
- No generic e-commerce feel (no heavy borders, no busy grids).
- No low-contrast text (never light text on light surface).
- No hardcoded arbitrary hex/pixel values outside the token system.
