# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry for women 25–45.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

| Name           | Hex       | Tailwind Class         | Usage                          |
|----------------|-----------|------------------------|--------------------------------|
| Obsidian       | #1a1714   | `bg-obsidian`          | Primary text, dark backgrounds |
| Obsidian Light | #2a2520   | `bg-obsidian-light`    | Dark card backgrounds          |
| Ivory          | #f7f3ee   | `bg-ivory`             | Page background, light surfaces|
| Ivory Dark     | #ede8e0   | `bg-ivory-dark`        | Subtle section backgrounds     |
| Gold           | #c9a96e   | `text-gold`, `bg-gold` | Primary accent, CTAs, borders  |
| Gold Light     | #dfc08a   | `text-gold-light`      | Hover states, highlights       |
| Gold Dark      | #a8854a   | `text-gold-dark`       | Active states                  |
| Taupe          | #8c7b6b   | `text-taupe`           | Secondary body text            |
| Taupe Light    | #b5a898   | `text-taupe-light`     | Placeholder, captions          |
| Divider        | #e2dbd2   | `border-divider`       | Hairline dividers              |

## Typography

### Headings & Product Names
- Font: Cormorant Garamond (serif)
- Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold)
- Product names: UPPERCASE, `tracking-widest2` (0.25em letter-spacing)
- Hero headline: `font-serif text-5xl md:text-7xl font-light`
- Section titles: `font-serif text-3xl md:text-4xl font-light`

### Body & UI
- Font: Manrope (sans-serif)
- Weights: 300, 400, 500, 600
- Body: `font-sans text-sm text-obsidian`
- Nav links: `font-sans text-xs tracking-widest uppercase`
- Prices: `font-sans text-base font-medium text-obsidian`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`
- Generous whitespace is a design feature — never crowd elements

## Buttons

### Primary (Gold filled)
```
bg-gold text-obsidian font-sans text-xs tracking-widest uppercase px-8 py-4
hover:bg-gold-light transition-colors duration-300
```

### Secondary (Outlined)
```
border border-gold text-gold font-sans text-xs tracking-widest uppercase px-8 py-4
hover:bg-gold hover:text-obsidian transition-colors duration-300
```

### Ghost (Dark outlined)
```
border border-obsidian text-obsidian font-sans text-xs tracking-widest uppercase px-8 py-4
hover:bg-obsidian hover:text-ivory transition-colors duration-300
```

## Cards
- Product cards: white/ivory background, no border, soft shadow on hover
- `shadow-sm hover:shadow-md transition-shadow duration-300`
- Image aspect ratio: 3:4 (portrait) for product images

## Dividers
- Use `border-t border-divider` for hairline dividers
- Never use thick borders — always 1px

## Animations
- Fade up on scroll: `animate-fade-up`
- Hover transitions: `transition-all duration-300`
- Cart drawer: slides in from right `animate-slide-in-right`

## Do's
- Use generous whitespace
- Keep typography hierarchy clear (serif headline → sans body)
- Gold accent sparingly — it should feel precious
- Large editorial imagery
- Thin, restrained UI elements

## Don'ts
- No bright/neon colors
- No thick borders or heavy shadows
- No crowded layouts
- No generic sans-serif headings
- No discount-style pricing (no red sale tags unless intentional)
- No hardcoded hex values in JSX — use Tailwind color tokens
