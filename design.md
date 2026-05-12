# Design System — The Starry Night & Astronomy

## Aesthetic: "Immersive Minimalism"
Dark-sky palette with high-contrast text and glowing amber/gold accents. Lean layouts with full-width imagery as primary teaching tools.

---

## Color Palette

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Void | `#0B0E14` | `bg-cosmos-void` | Page background |
| Deep | `#0D1117` | `bg-cosmos-deep` | Section backgrounds |
| Charcoal | `#121212` | `bg-cosmos-charcoal` | Alternate sections |
| Surface | `#161B27` | `bg-cosmos-surface` | Card backgrounds |
| Card | `#1A2035` | `bg-cosmos-card` | Elevated cards |
| Border | `#252D42` | `border-cosmos-border` | Dividers, card borders |
| Muted | `#3A4460` | `text-cosmos-muted` | Disabled, placeholder |
| Text | `#C8D0E0` | `text-cosmos-text` | Body text |
| Subtle | `#8892A4` | `text-cosmos-subtle` | Secondary text, captions |
| Amber Glow | `#F5A623` | `text-amber-glow` | Primary accent, CTAs |
| Amber Bright | `#FFB84D` | `text-amber-bright` | Hover states |
| Star White | `#F0F4FF` | `text-star-white` | Headlines |
| Star Blue | `#A8C4FF` | `text-star-blue` | Highlights, links |
| Star Purple | `#C4A8FF` | `text-star-purple` | Decorative accents |

---

## Typography

### Fonts
- **Display / Headlines**: `font-display` → Montserrat (700–900)
- **Body / UI**: `font-sans` → Inter (300–700)

### Scale
- Hero headline: `text-5xl md:text-7xl font-display font-black text-star-white`
- Section title: `text-3xl md:text-4xl font-display font-bold text-star-white`
- Card title: `text-xl font-display font-semibold text-star-white`
- Body: `text-base font-sans text-cosmos-text leading-relaxed`
- Caption / label: `text-sm font-sans text-cosmos-subtle`
- Accent label: `text-xs font-sans font-semibold uppercase tracking-widest text-amber-glow`

---

## Spacing
- Section padding: `py-20 md:py-28 px-6 md:px-12 lg:px-20`
- Card padding: `p-6 md:p-8`
- Component gap: `gap-6 md:gap-8`
- Max content width: `max-w-7xl mx-auto`

---

## Components

### Navbar
- Translucent glass: `bg-cosmos-void/80 backdrop-blur-xl border-b border-cosmos-border/50`
- Logo: Montserrat bold, amber accent
- Links: Inter medium, cosmos-text, hover amber-glow transition

### Buttons
- Primary CTA: `bg-amber-glow hover:bg-amber-bright text-cosmos-void font-semibold px-6 py-3 rounded-lg transition-all`
- Ghost: `border border-cosmos-border text-cosmos-text hover:border-amber-glow hover:text-amber-glow px-6 py-3 rounded-lg transition-all`

### Cards
- Base: `bg-cosmos-card border border-cosmos-border rounded-2xl overflow-hidden shadow-card-cosmos`
- Hover: `hover:border-amber-glow/40 hover:-translate-y-1 transition-all duration-300`
- Glass variant: `.glass-card rounded-2xl`

### Section Dividers
- Amber line: `w-16 h-0.5 bg-amber-glow`
- Subtle: `border-t border-cosmos-border/50`

---

## Imagery Guidelines
- Hero backgrounds: Full-width, `object-cover`, with `.img-overlay-full` or `.img-overlay-bottom` overlay
- Card images: Fixed aspect ratio (`aspect-video` or `aspect-[4/3]`), `object-cover`
- All images: `rounded-xl` or `rounded-2xl` when inside cards

---

## Do's
- Use `text-star-white` for all primary headlines
- Use `text-amber-glow` for accent labels, icons, and CTAs
- Use `text-cosmos-text` for body copy
- Use `text-cosmos-subtle` for captions and secondary info
- Apply `transition-all duration-300` on interactive elements
- Use `backdrop-blur` for overlaid UI elements

## Don'ts
- Never use white (`#ffffff`) text directly — use `text-star-white` (`#F0F4FF`)
- Never use pure black backgrounds — use `cosmos-void` or `cosmos-deep`
- Never use blue/purple links without context — use amber for primary actions
- Avoid more than 3 font weights per section
- Don't use `text-gray-*` — use `cosmos-*` tokens instead
