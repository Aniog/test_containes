# MicroCosmos Design System

## Concept
MicroCosmos is a science-meets-wonder website exploring the microscopic world — bacteria, cells, viruses, fungi, and more. The visual style is dark, immersive, and scientific with a sense of awe and discovery.

## Color Palette

### Primary Colors
- Deep Space Black: `#050a0e` — page background
- Midnight Navy: `#0a1628` — card/section backgrounds
- Dark Teal: `#0d2137` — secondary backgrounds

### Accent Colors
- Bioluminescent Cyan: `#00d4ff` — primary accent, links, highlights (`cyan-400`)
- Electric Teal: `#00b4d8` — secondary accent (`cyan-500`)
- Neon Green: `#39ff14` — special highlights, badges (`lime-400`)
- Soft Violet: `#a78bfa` — tertiary accent (`violet-400`)

### Text Colors
- Primary Text: `#e2e8f0` — main body text (`slate-200`)
- Secondary Text: `#94a3b8` — muted/supporting text (`slate-400`)
- Heading Text: `#f8fafc` — headings (`slate-50`)

### Named Tailwind Config Colors
- `cosmos-black`: `#050a0e`
- `cosmos-navy`: `#0a1628`
- `cosmos-dark`: `#0d2137`
- `cosmos-cyan`: `#00d4ff`
- `cosmos-teal`: `#00b4d8`
- `cosmos-green`: `#39ff14`
- `cosmos-violet`: `#a78bfa`

## Typography

### Fonts
- Headings: `Space Grotesk` — modern, scientific feel
- Body: `Inter` — clean, readable

### Scale
- Hero heading: `text-5xl md:text-7xl font-bold`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card heading: `text-xl font-semibold`
- Body: `text-base` or `text-lg`
- Caption/label: `text-sm text-slate-400`

## Borders & Shadows
- Card border: `border border-cyan-900/40`
- Glow effect: `shadow-[0_0_30px_rgba(0,212,255,0.15)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(0,212,255,0.3)]`
- Rounded corners: `rounded-2xl` for cards, `rounded-full` for badges/pills

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Component Styles

### Buttons
- Primary: `bg-cyan-400 text-cosmos-black font-semibold px-6 py-3 rounded-full hover:bg-cyan-300 transition-all`
- Secondary/Outline: `border border-cyan-400 text-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-400/10 transition-all`

### Cards
- Base: `bg-cosmos-navy border border-cyan-900/40 rounded-2xl p-6 hover:border-cyan-400/40 transition-all`
- With glow: add `hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]`

### Badges/Tags
- `bg-cyan-400/10 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full border border-cyan-400/20`

### Navigation
- Background: `bg-cosmos-black/80 backdrop-blur-md border-b border-cyan-900/30`
- Active link: `text-cyan-400`
- Inactive link: `text-slate-300 hover:text-cyan-400`

## Do's
- Use dark backgrounds with glowing cyan/teal accents
- Use subtle gradients: `from-cosmos-black via-cosmos-navy to-cosmos-dark`
- Add subtle grid or dot patterns for texture
- Use `backdrop-blur` for glass-morphism effects
- Animate with `transition-all duration-300`

## Don'ts
- Don't use white or light backgrounds
- Don't use harsh, fully saturated colors without transparency
- Don't use serif fonts
- Don't use flat, colorless designs — always add subtle glow or gradient
