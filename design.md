# MicroCosmos Design System

## Brand Identity
MicroCosmos is a science-meets-wonder website exploring the microscopic world. The visual style blends deep scientific curiosity with an ethereal, bioluminescent aesthetic — dark backgrounds with glowing teal/cyan/emerald accents, evoking the feeling of peering through a microscope into an alien universe.

## Color Palette
All colors are defined in tailwind.config.js as named tokens.

| Token | Hex | Usage |
|---|---|---|
| `cosmos-bg` | `#050d14` | Page background (deepest dark) |
| `cosmos-surface` | `#0a1628` | Card/panel backgrounds |
| `cosmos-surface-2` | `#0f2040` | Elevated surfaces, nav |
| `cosmos-border` | `#1a3a5c` | Borders, dividers |
| `cosmos-teal` | `#00d4c8` | Primary accent, CTAs, highlights |
| `cosmos-cyan` | `#22d3ee` | Secondary accent, links |
| `cosmos-emerald` | `#10b981` | Success, tags, badges |
| `cosmos-violet` | `#7c3aed` | Tertiary accent, special highlights |
| `cosmos-amber` | `#f59e0b` | Warm accent, warnings |
| `cosmos-text` | `#e2f0ff` | Primary text |
| `cosmos-muted` | `#7a9bbf` | Secondary/muted text |
| `cosmos-dim` | `#3d6080` | Placeholder, disabled text |

## Typography
- **Font**: Inter (loaded via Google Fonts in index.html)
- **Headings**: font-bold, tracking-tight, text-cosmos-text
- **Body**: font-normal, leading-relaxed, text-cosmos-text
- **Muted**: text-cosmos-muted
- **Accent labels**: uppercase, tracking-widest, text-xs, text-cosmos-teal

### Scale
- Hero H1: `text-5xl md:text-7xl font-black`
- Section H2: `text-3xl md:text-4xl font-bold`
- Card H3: `text-xl font-semibold`
- Body: `text-base leading-relaxed`
- Caption: `text-sm text-cosmos-muted`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Borders & Shadows
- Card border: `border border-cosmos-border`
- Card radius: `rounded-2xl`
- Glow effect: `shadow-[0_0_30px_rgba(0,212,200,0.15)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(0,212,200,0.3)]`
- Nav border: `border-b border-cosmos-border`

## Components

### Buttons
- Primary: `bg-cosmos-teal text-cosmos-bg font-semibold px-6 py-3 rounded-full hover:bg-cosmos-cyan transition-all`
- Outline: `border border-cosmos-teal text-cosmos-teal px-6 py-3 rounded-full hover:bg-cosmos-teal hover:text-cosmos-bg transition-all`
- Ghost: `text-cosmos-muted hover:text-cosmos-text transition-colors`

### Cards
- Base: `bg-cosmos-surface border border-cosmos-border rounded-2xl overflow-hidden`
- Hover: `hover:border-cosmos-teal/50 hover:shadow-[0_0_30px_rgba(0,212,200,0.1)] transition-all duration-300`

### Tags / Badges
- `bg-cosmos-teal/10 text-cosmos-teal text-xs font-medium px-3 py-1 rounded-full border border-cosmos-teal/20`

### Navigation
- Background: `bg-cosmos-surface-2/90 backdrop-blur-md`
- Active link: `text-cosmos-teal`
- Inactive link: `text-cosmos-muted hover:text-cosmos-text`

## Do's
- Use glowing teal/cyan accents on dark backgrounds for maximum contrast
- Use `backdrop-blur` on overlays and nav for depth
- Use subtle gradient overlays on hero images: `from-cosmos-bg via-cosmos-bg/70 to-transparent`
- Use `transition-all duration-300` on interactive elements
- Ensure all text has sufficient contrast against its background

## Don'ts
- Never use light backgrounds (white, gray-100) — this is a dark-theme site
- Never use black text on dark backgrounds
- Don't use more than 3 accent colors in one section
- Don't use harsh borders — keep them subtle with low opacity
