# MicroCosmos Design System

## Concept
A dark, immersive aesthetic evoking the mysterious and beautiful microscopic world — deep navy backgrounds with glowing teal/cyan accents, reminiscent of bioluminescent organisms and electron microscopy imagery.

## Colors
- **Background primary**: `#050a14` (deep navy black) — `bg-cosmos-dark`
- **Background secondary**: `#0d1526` (dark navy) — `bg-cosmos-navy`
- **Background card**: `#111d35` (card surface) — `bg-cosmos-card`
- **Accent teal**: `#00d4aa` — `text-cosmos-teal`, `bg-cosmos-teal`
- **Accent cyan**: `#00b4d8` — `text-cosmos-cyan`, `bg-cosmos-cyan`
- **Accent purple**: `#8b5cf6` — `text-cosmos-purple`
- **Accent glow**: `#00ffd5` — used for glow effects
- **Text primary**: `#e8f4f8` — `text-cosmos-light`
- **Text muted**: `#7a9bb5` — `text-cosmos-muted`
- **Border subtle**: `#1e3a5f` — `border-cosmos-border`

## Typography
- **Font**: Inter (loaded via Google Fonts)
- **Display headings**: `font-black tracking-tight` — large, bold, impactful
- **Section headings**: `text-3xl md:text-5xl font-bold`
- **Body**: `text-base leading-relaxed text-cosmos-muted`
- **Labels/Captions**: `text-xs uppercase tracking-widest font-semibold`

## Spacing & Layout
- Section padding: `py-20 md:py-28 px-6`
- Max content width: `max-w-7xl mx-auto`
- Card border radius: `rounded-2xl`
- Grid gaps: `gap-6` or `gap-8`

## Visual Style
- Cards: dark background with subtle teal border glow on hover — `border border-cosmos-border hover:border-cosmos-teal/50 transition-colors`
- Glow effects: `shadow-[0_0_30px_rgba(0,212,170,0.15)]`
- Gradient text: `bg-gradient-to-r from-cosmos-teal to-cosmos-cyan bg-clip-text text-transparent`
- Section dividers: subtle gradient lines
- Images: rounded corners, slight overlay on hover

## Do's
- Use dark backgrounds throughout — never white or light backgrounds
- Use teal/cyan for interactive elements and highlights
- Use generous whitespace between sections
- Images should have rounded corners and subtle hover effects
- Use gradient text for main headings

## Don'ts
- No white backgrounds
- No harsh borders — keep them subtle
- No flat, unstyled buttons — always use gradient or outlined styles
- Don't use red/orange as accent colors
