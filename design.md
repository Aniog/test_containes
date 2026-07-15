# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds. NOT loud, NOT discount-looking.

## Color Palette

### Named Colors (defined in tailwind.config.js)
- `ivory`: #FAF7F2 — primary background, warm off-white
- `ivory-dark`: #F2EDE4 — secondary background, section alternates
- `espresso`: #1A1208 — primary text, deepest dark
- `espresso-light`: #2E2010 — secondary dark, nav background (solid)
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #E8D5A3 — light gold tint, hover states
- `gold-dark`: #A07840 — darker gold, pressed states
- `warm-gray`: #8A7E72 — muted text, captions, secondary UI
- `warm-gray-light`: #D4CCC2 — borders, dividers, hairlines
- `cream`: #FFFDF9 — card backgrounds, elevated surfaces

### Usage
- Page background: `bg-ivory`
- Card/surface: `bg-cream`
- Primary text: `text-espresso`
- Muted/secondary text: `text-warm-gray`
- Accent/CTA: `bg-gold text-espresso` or `border-gold text-gold`
- Dividers: `border-warm-gray-light`
- Nav (transparent over hero): `bg-transparent`
- Nav (scrolled/solid): `bg-espresso-light`

## Typography

### Fonts
- Serif (headings, product names, logo): Cormorant Garamond — loaded via Google Fonts
- Sans-serif (body, UI, labels): Inter — loaded via Google Fonts

### Scale
- Hero headline: `font-serif text-5xl md:text-7xl font-light tracking-wide`
- Section heading: `font-serif text-3xl md:text-4xl font-light`
- Product name: `font-serif text-xl uppercase tracking-[0.15em]`
- Price: `font-sans text-lg font-medium`
- Body: `font-sans text-sm leading-relaxed`
- Caption/label: `font-sans text-xs uppercase tracking-widest`
- Nav links: `font-sans text-xs uppercase tracking-widest`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace — never cramped

## Borders & Dividers
- Hairline dividers: `border-t border-warm-gray-light`
- Card borders: `border border-warm-gray-light`
- Rounded corners: `rounded-none` for editorial feel (or `rounded-sm` max)

## Shadows
- Subtle card shadow: `shadow-sm` with warm tint
- Hover elevation: `hover:shadow-md transition-shadow duration-300`

## Buttons
- Primary CTA: `bg-gold text-espresso px-8 py-3 text-xs uppercase tracking-widest font-sans font-medium hover:bg-gold-dark transition-colors duration-200`
- Outlined: `border border-espresso text-espresso px-8 py-3 text-xs uppercase tracking-widest hover:bg-espresso hover:text-ivory transition-colors duration-200`
- Ghost/text: `text-gold text-xs uppercase tracking-widest underline-offset-4 hover:underline`

## Animations
- Transitions: `duration-200` to `duration-300`, `ease-out`
- Hover image scale: `hover:scale-105 transition-transform duration-500`
- Cart drawer: slide in from right
- Nav: fade to solid on scroll

## Do's
- Use Cormorant Garamond for all headings and product names
- UPPERCASE with wide letter-spacing for product names and labels
- Warm ivory/cream backgrounds — never pure white or cold gray
- Gold accent sparingly — it should feel precious, not garish
- Large editorial imagery with generous padding
- Thin hairline dividers between sections

## Don'ts
- No pure white (#FFFFFF) backgrounds
- No cold blues, purples, or generic e-commerce colors
- No rounded pill buttons (keep them sharp/minimal)
- No heavy drop shadows
- No cluttered layouts — whitespace is a feature
- No bold/heavy serif weights — keep headings light and elegant
