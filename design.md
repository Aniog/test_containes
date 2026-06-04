# MicroCosmos Design System

## Brand Identity
MicroCosmos is a science-forward website exploring the hidden world of microorganisms. The visual style blends deep-space darkness with bioluminescent accents — evoking the mysterious, glowing beauty of microscopic life.

## Color Palette

### Primary Colors
- **Deep Navy** `#0a0e1a` — page background, darkest surfaces
- **Dark Slate** `#0f1629` — card backgrounds, secondary surfaces
- **Midnight Blue** `#111827` — nav background

### Accent Colors
- **Bioluminescent Teal** `#00d4aa` — primary accent, CTAs, highlights (`text-teal-400`, custom `#00d4aa`)
- **Electric Cyan** `#06b6d4` — secondary accent, links (`text-cyan-500`)
- **Soft Violet** `#7c3aed` — tertiary accent, tags (`text-violet-600`)
- **Warm Amber** `#f59e0b` — warning, featured badges (`text-amber-400`)

### Text Colors
- **Primary Text** `#f1f5f9` — headings, important body text (`text-slate-100`)
- **Secondary Text** `#94a3b8` — body copy, descriptions (`text-slate-400`)
- **Muted Text** `#64748b` — captions, metadata (`text-slate-500`)

### Border & Divider
- `border-slate-700/50` — subtle card borders
- `border-teal-500/30` — accent borders

## Typography

### Font Family
- **Headings**: `Space Grotesk` — modern, scientific feel
- **Body**: `Inter` — clean, readable

### Scale
- `text-5xl font-bold` — Hero H1
- `text-3xl font-bold` — Page H1
- `text-2xl font-semibold` — Section H2
- `text-xl font-semibold` — Card H3
- `text-base` — Body text
- `text-sm` — Captions, metadata

## Spacing
- Section padding: `py-20 px-6`
- Card padding: `p-6`
- Grid gaps: `gap-6` or `gap-8`
- Max content width: `max-w-6xl mx-auto`

## Components

### Cards
- Background: `bg-slate-800/60`
- Border: `border border-slate-700/50`
- Rounded: `rounded-2xl`
- Hover: `hover:border-teal-500/50 hover:bg-slate-800/80 transition-all duration-300`
- Shadow: `shadow-lg`

### Buttons
- **Primary**: `bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold px-6 py-3 rounded-xl transition-colors`
- **Secondary**: `border border-teal-500/50 text-teal-400 hover:bg-teal-500/10 px-6 py-3 rounded-xl transition-colors`
- **Ghost**: `text-slate-400 hover:text-teal-400 transition-colors`

### Navigation
- Background: `bg-slate-900/95 backdrop-blur-md`
- Border bottom: `border-b border-slate-700/50`
- Active link: `text-teal-400`
- Inactive link: `text-slate-300 hover:text-teal-400`

### Badges / Tags
- `bg-teal-500/10 text-teal-400 border border-teal-500/30 text-xs px-3 py-1 rounded-full`

### Hero Section
- Full-width, min-height `min-h-screen`
- Background: dark gradient with subtle radial glow
- Overlay: `bg-gradient-to-b from-slate-900/80 to-slate-900`

## Do's
- Use dark backgrounds consistently — never white or light gray backgrounds
- Use teal/cyan accents sparingly for maximum impact
- Add subtle glow effects on hover for interactive elements
- Use `backdrop-blur` for overlays and nav
- Maintain generous whitespace between sections

## Don'ts
- Don't use white backgrounds
- Don't use more than 3 accent colors on a single page
- Don't use low-contrast text (e.g., slate-600 on slate-800)
- Don't use sharp corners — always round with `rounded-xl` or `rounded-2xl`
- Don't use plain black — use deep navy instead
