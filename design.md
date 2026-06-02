# Phyllotaxis — Design System

## Visual Identity: Naturalist Minimalist

### Palette
- **Sage Green**: `#7A9E7E` (primary accent, nav links, tags)
- **Deep Sage**: `#4E6E52` (hover states, active tags)
- **Clay White**: `#F5F0E8` (page background)
- **Warm Parchment**: `#EDE6D6` (card backgrounds, dividers)
- **Ink**: `#1C1C1A` (primary text)
- **Muted Ink**: `#5A5A54` (secondary text, captions)
- **Divider**: `#D8D0C0` (thin rule lines)

Tailwind config keys: `sage`, `deep-sage`, `clay`, `parchment`, `ink`, `muted-ink`, `divider`

### Typography
- **Display / Headings**: `Cormorant Garamond` — serif, elegant, naturalist feel
  - H1: `text-5xl font-light tracking-tight`
  - H2: `text-3xl font-light tracking-wide`
  - H3: `text-xl font-normal`
- **Body / UI**: `Inter` — clean, minimal
  - Body: `text-sm font-normal leading-relaxed`
  - Caption: `text-xs font-light tracking-widest uppercase`
  - Tag: `text-xs font-medium tracking-widest uppercase`

### Spacing & Grid
- Golden ratio proportions: base unit 8px, major sections use 1.618 multiplier
- Page max-width: `1440px`
- Content max-width: `1200px`
- Section padding: `py-24 px-8 md:px-16`

### Borders & Surfaces
- Dividers: `border-divider` (1px, `#D8D0C0`)
- Cards: `bg-parchment` with no shadow, thin border
- Modals: `bg-clay` with subtle backdrop blur

### Motion
- Scroll-driven rotation: `transform rotate()` tied to scroll progress
- Transitions: `duration-500 ease-out` for most interactions
- Modal open: scale from 0.8 to 1.0 with opacity fade

### Do's
- Use generous whitespace between sections
- Prefer thin, hairline borders over shadows
- Use uppercase tracking-widest for all labels and tags
- Keep image crops sharp with SVG clipPath masking
- Animate subtly — rotation max ±8deg on scroll

### Don'ts
- No drop shadows on cards
- No bright or saturated colors
- No rounded corners on rectangular containers (only circles for species grid)
- No bold weights for headings (use light/regular)
