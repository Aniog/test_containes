# MicroCosmos Design System

## Brand Identity
MicroCosmos is a science-meets-wonder website exploring the microscopic world. The visual style blends deep scientific curiosity with an ethereal, bioluminescent aesthetic — dark backgrounds with glowing teal/cyan/emerald accents, evoking the feeling of peering through a microscope into an alien universe.

## Color Palette

### Primary Colors
- Background (deep dark): `bg-slate-950` (#020617)
- Surface (card/panel): `bg-slate-900` (#0f172a)
- Surface elevated: `bg-slate-800` (#1e293b)
- Border subtle: `border-slate-700` (#334155)

### Accent Colors
- Primary accent (teal glow): `text-teal-400` / `bg-teal-400` (#2dd4bf)
- Secondary accent (cyan): `text-cyan-400` / `bg-cyan-400` (#22d3ee)
- Highlight (emerald): `text-emerald-400` / `bg-emerald-400` (#34d399)
- Warm accent (amber): `text-amber-400` (#fbbf24) — used sparingly for callouts

### Text Colors
- Primary text: `text-slate-100` (#f1f5f9)
- Secondary text: `text-slate-300` (#cbd5e1)
- Muted text: `text-slate-400` (#94a3b8)
- Accent text: `text-teal-400` (#2dd4bf)

### DO NOT use:
- White text on light backgrounds
- Dark text on dark backgrounds
- Low-contrast gray-on-gray combinations

## Typography

### Font Stack
- Headings: `font-['Space_Grotesk']` — modern, geometric, scientific feel
- Body: `font-['Inter']` — clean, readable
- Mono/labels: `font-mono` — for scientific names, data labels

### Scale
- Hero heading: `text-5xl md:text-7xl font-bold tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card heading: `text-xl font-semibold`
- Body: `text-base text-slate-300`
- Caption/label: `text-sm text-slate-400`
- Scientific name: `text-sm font-mono italic text-teal-400`

## Spacing & Layout
- Page max width: `max-w-7xl mx-auto`
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6`
- Grid gaps: `gap-6` or `gap-8`
- Section gap between elements: `space-y-4` or `space-y-6`

## Components

### Cards
- Background: `bg-slate-900`
- Border: `border border-slate-700/50`
- Hover: `hover:border-teal-500/50 hover:bg-slate-800/80`
- Rounded: `rounded-2xl`
- Shadow: `shadow-lg shadow-black/30`
- Transition: `transition-all duration-300`

### Buttons
- Primary: `bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-6 py-3 rounded-full transition-colors`
- Secondary/outline: `border border-teal-500/50 text-teal-400 hover:bg-teal-500/10 px-6 py-3 rounded-full transition-colors`
- Ghost: `text-slate-300 hover:text-teal-400 transition-colors`

### Navigation
- Background: `bg-slate-950/90 backdrop-blur-md`
- Border bottom: `border-b border-slate-800`
- Nav links: `text-slate-300 hover:text-teal-400 transition-colors`
- Active link: `text-teal-400`
- Logo: `text-teal-400 font-bold text-xl`

### Badges / Tags
- Background: `bg-teal-500/10`
- Border: `border border-teal-500/30`
- Text: `text-teal-400 text-xs font-mono uppercase tracking-wider`
- Padding: `px-3 py-1 rounded-full`

### Dividers
- `border-t border-slate-800`

### Glow Effects
- Subtle glow on accent elements: `shadow-teal-500/20 shadow-lg`
- Hero glow blob: large radial gradient using teal/cyan at low opacity

## Page Structure
Each page follows:
1. Fixed top navigation
2. Page hero/header section
3. Main content sections
4. Footer

## Imagery
- Use stock images with microscopy/biology/nature themes
- Images should have a slightly dark overlay to maintain contrast
- Aspect ratios: `3x2` for cards, `16x9` for heroes, `1x1` for circular portraits

## Do's
- Use glowing teal/cyan accents on dark backgrounds
- Use `backdrop-blur` for glass-morphism effects
- Use `font-mono` for scientific names and data
- Maintain generous whitespace
- Use subtle gradients: `from-slate-950 to-slate-900`

## Don'ts
- No pure white backgrounds
- No flat, colorless designs
- No small touch targets on mobile
- No text below 12px
- No hardcoded hex values — use Tailwind classes only
