# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Think Mejuri meets Net-a-Porter.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Named Colors (defined in tailwind.config.js)
- `ivory`: #FAF7F2 — primary page background, warm off-white
- `ivory-dark`: #F2EDE4 — subtle section alternation
- `espresso`: #1A1208 — primary text, deepest dark
- `espresso-light`: #3D2E1E — secondary text, headings
- `gold`: #B8935A — primary accent, CTAs, highlights
- `gold-light`: #D4AF7A — hover states, lighter gold
- `gold-pale`: #EDD9B0 — very light gold tint, backgrounds
- `stone`: #8C7B6B — muted body text, captions
- `stone-light`: #C4B5A5 — borders, dividers, hairlines
- `stone-pale`: #E8E0D6 — card backgrounds, subtle fills

### Usage Rules
- Page background: `bg-ivory`
- Primary text: `text-espresso`
- Secondary/muted text: `text-stone`
- Accent/CTA: `bg-gold text-ivory` or `border-gold text-gold`
- Dividers: `border-stone-light`
- Card backgrounds: `bg-stone-pale` or `bg-white`
- Dark sections (newsletter, footer): `bg-espresso text-ivory`

## Typography

### Fonts
- **Serif (headings, product names, brand)**: Cormorant Garamond — weights 300, 400, 500, 600
- **Sans-serif (body, UI, labels)**: Inter — weights 300, 400, 500, 600

### Scale
- Hero headline: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section title: `font-cormorant text-3xl md:text-4xl font-light`
- Product name: `font-cormorant text-xl uppercase tracking-widest font-medium`
- Body: `font-inter text-sm text-stone leading-relaxed`
- Label/UI: `font-inter text-xs uppercase tracking-widest`
- Price: `font-inter text-base font-medium text-espresso`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section vertical padding: `py-16 md:py-24`
- Generous whitespace between elements
- Hairline dividers: `border-t border-stone-light`

## Components

### Buttons
- Primary (solid): `bg-gold text-ivory px-8 py-3 text-xs uppercase tracking-widest font-inter font-medium hover:bg-gold-light transition-colors duration-300`
- Secondary (outlined): `border border-espresso text-espresso px-8 py-3 text-xs uppercase tracking-widest font-inter font-medium hover:bg-espresso hover:text-ivory transition-colors duration-300`
- Ghost: `text-gold text-xs uppercase tracking-widest font-inter underline-offset-4 hover:underline`

### Cards
- Product card: white bg, no border, soft shadow on hover (`hover:shadow-lg transition-shadow duration-300`)
- Subtle scale on hover: `hover:scale-[1.01] transition-transform duration-300`

### Animations
- All transitions: `duration-300 ease-in-out`
- Hover reveals: opacity fade `transition-opacity duration-300`
- No jarring motion — everything subtle

## Do's
- Use Cormorant Garamond for all headings and product names
- UPPERCASE + wide letter-spacing for product names and labels
- Generous padding and whitespace
- Warm gold tones for accents
- Thin hairline borders (1px, stone-light color)
- Soft box shadows (not harsh)

## Don'ts
- No bright/saturated colors
- No rounded corners on buttons (sharp or very slightly rounded: `rounded-none` or `rounded-sm`)
- No generic blue links
- No heavy drop shadows
- No Comic Sans, no system fonts for headings
