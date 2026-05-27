# MicroCosmos Design System

## Brand Identity
MicroCosmos is a science-meets-wonder website exploring the invisible world of microscopic life. The visual language blends deep-ocean darkness with bioluminescent accents — mysterious, scientific, and beautiful.

## Color Palette

### Primary Colors
- **Deep Navy** `#0a0f1e` — page background, darkest surfaces
- **Dark Slate** `#0f172a` — card backgrounds, nav
- **Midnight Blue** `#1e293b` — secondary surfaces, borders

### Accent Colors
- **Bioluminescent Teal** `#06b6d4` (cyan-500) — primary accent, CTAs, highlights
- **Emerald Glow** `#10b981` (emerald-500) — secondary accent, tags, badges
- **Violet Pulse** `#8b5cf6` (violet-500) — tertiary accent, decorative

### Text Colors
- **Primary Text** `#f1f5f9` (slate-100) — headings, important content
- **Secondary Text** `#94a3b8` (slate-400) — body copy, descriptions
- **Muted Text** `#64748b` (slate-500) — captions, metadata

### Tailwind Custom Colors (added to config)
```js
microcosmos: {
  bg: '#0a0f1e',
  surface: '#0f172a',
  border: '#1e293b',
  teal: '#06b6d4',
  emerald: '#10b981',
  violet: '#8b5cf6',
}
```

## Typography

### Font Family
- **Headings**: `'Space Grotesk', sans-serif` — geometric, scientific feel
- **Body**: `'Inter', sans-serif` — clean, readable

### Scale
- Hero heading: `text-5xl md:text-7xl font-bold`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card heading: `text-xl font-semibold`
- Body: `text-base` (16px)
- Caption/meta: `text-sm text-slate-400`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section padding: `py-20 md:py-28`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Borders & Shadows
- Card border: `border border-slate-800`
- Glow effect: `shadow-[0_0_30px_rgba(6,182,212,0.15)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]`
- Border radius: `rounded-2xl` for cards, `rounded-full` for pills/badges

## Components

### Buttons
- **Primary**: `bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-6 py-3 rounded-full transition-all`
- **Secondary**: `border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-6 py-3 rounded-full transition-all`
- **Ghost**: `text-slate-400 hover:text-white transition-colors`

### Cards
- Background: `bg-slate-900 border border-slate-800 rounded-2xl`
- Hover: `hover:border-cyan-500/50 transition-all duration-300`
- Image area: `rounded-xl overflow-hidden`

### Badges / Tags
- `bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs px-3 py-1 rounded-full`
- Emerald variant: `bg-emerald-500/10 text-emerald-400 border border-emerald-500/20`
- Violet variant: `bg-violet-500/10 text-violet-400 border border-violet-500/20`

### Navigation
- Background: `bg-slate-950/80 backdrop-blur-md border-b border-slate-800`
- Active link: `text-cyan-400`
- Inactive link: `text-slate-400 hover:text-white`

## Visual Effects
- Gradient text: `bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent`
- Subtle grid background: CSS grid pattern with low-opacity lines
- Particle/glow orbs: absolute positioned blurred divs for ambient light

## Do's
- Use dark backgrounds exclusively — this is a dark-theme site
- Always ensure text has sufficient contrast against dark surfaces
- Use cyan as the primary interactive color
- Add subtle glow effects to important elements
- Use gradient text for hero headings

## Don'ts
- Never use white backgrounds
- Don't use more than 3 accent colors in one section
- Avoid harsh borders — keep them subtle (slate-800)
- Don't use default blue link colors
