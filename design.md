# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Named Colors (defined in tailwind.config.js)
- `ivory`: #FAF7F2 — primary background, warm off-white
- `ivory-dark`: #F2EDE5 — secondary background, section alternates
- `espresso`: #1A1208 — primary text, deepest dark
- `espresso-light`: #3D2E1E — secondary text, warm dark brown
- `gold`: #C9A96E — primary accent, warm gold
- `gold-light`: #E2C98A — lighter gold for hover states
- `gold-dark`: #A8854A — darker gold for pressed states
- `stone`: #8C7B6B — muted text, captions, metadata
- `stone-light`: #C4B5A5 — hairline dividers, borders
- `charcoal`: #2C2420 — card backgrounds, dark sections

### Usage Rules
- Page backgrounds: `bg-ivory` or `bg-ivory-dark`
- Primary text: `text-espresso`
- Secondary/muted text: `text-stone`
- Accent/CTA: `bg-gold text-espresso` or `border-gold text-gold`
- Dark sections (footer, newsletter): `bg-espresso text-ivory`
- Dividers: `border-stone-light`
- Cards: `bg-white` or `bg-ivory`

## Typography

### Fonts
- Serif (headings, product names, editorial): **Cormorant Garamond** — weights 300, 400, 500, 600, 700
- Sans-serif (body, UI, labels): **Inter** — weights 300, 400, 500, 600

### Scale
- Hero headline: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section heading: `font-cormorant text-3xl md:text-4xl font-light`
- Product name: `font-cormorant text-xl uppercase tracking-widest font-medium`
- Body: `font-inter text-sm leading-relaxed`
- Label/UI: `font-inter text-xs uppercase tracking-widest`
- Price: `font-inter text-lg font-medium`

### Rules
- Product names ALWAYS uppercase with wide letter-spacing (`tracking-widest`)
- Headings use Cormorant Garamond, light weight (300–400)
- UI elements (buttons, nav, labels) use Inter
- Never use bold for serif headings — use weight 300–500 only

## Spacing & Layout
- Generous whitespace: section padding `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Product grid gap: `gap-6 md:gap-8`
- Card padding: `p-4 md:p-6`

## Borders & Dividers
- Hairline dividers: `border-t border-stone-light`
- Card borders: `border border-stone-light/50`
- Radius: minimal — `rounded-none` for editorial, `rounded-sm` for cards

## Shadows
- Subtle: `shadow-sm` with warm tint
- Card hover: `shadow-md transition-shadow duration-300`

## Buttons
- Primary (CTA): `bg-gold text-espresso font-inter text-xs uppercase tracking-widest px-8 py-3 hover:bg-gold-dark transition-colors`
- Outlined: `border border-espresso text-espresso font-inter text-xs uppercase tracking-widest px-8 py-3 hover:bg-espresso hover:text-ivory transition-colors`
- Ghost: `text-espresso font-inter text-xs uppercase tracking-widest hover:text-gold transition-colors`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fade-in`
- Subtle, never flashy

## Do's
- Use warm ivory/cream backgrounds to flatter gold jewelry
- Large editorial imagery, full-bleed hero
- Thin hairline dividers between sections
- Generous whitespace — let products breathe
- Uppercase product names with wide tracking
- Restrained gold accent — use sparingly for maximum impact

## Don'ts
- No bright white (#FFFFFF) backgrounds — use ivory (#FAF7F2)
- No bold serif headings — keep them light and elegant
- No rounded pill buttons — keep them rectangular/minimal
- No generic blue links
- No heavy drop shadows
- No cluttered layouts
