# MicroCosmos Design System

## Brand Identity
MicroCosmos is a science-forward website exploring the hidden world of microorganisms. The visual style blends deep-ocean darkness with bioluminescent accents — mysterious, scientific, and beautiful.

## Color Palette

### Primary Colors
- Background (deep dark): `bg-slate-950` (#020617)
- Surface (card/panel): `bg-slate-900` (#0f172a)
- Surface elevated: `bg-slate-800` (#1e293b)
- Border subtle: `border-slate-700` (#334155)

### Accent Colors
- Teal glow (primary accent): `text-teal-400` / `bg-teal-400` (#2dd4bf)
- Teal dark: `text-teal-600` (#0d9488)
- Cyan highlight: `text-cyan-300` (#67e8f9)
- Emerald secondary: `text-emerald-400` (#34d399)
- Purple bioluminescent: `text-purple-400` (#c084fc)

### Text Colors
- Primary text: `text-slate-100` (#f1f5f9)
- Secondary text: `text-slate-300` (#cbd5e1)
- Muted text: `text-slate-400` (#94a3b8)
- Accent text: `text-teal-400` (#2dd4bf)

## Typography

### Font Family
- Primary: Inter (Google Fonts)
- Monospace accents: system monospace for scientific labels

### Scale
- Hero heading: `text-5xl md:text-7xl font-bold tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card heading: `text-xl font-semibold`
- Body: `text-base text-slate-300`
- Caption/label: `text-sm text-slate-400`
- Scientific tag: `text-xs font-mono uppercase tracking-widest text-teal-400`

## Spacing & Layout
- Page max width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-20 md:py-28`
- Card padding: `p-6`
- Grid gaps: `gap-6` or `gap-8`

## Components

### Navigation
- Fixed top bar: `fixed top-0 w-full z-50`
- Background: `bg-slate-950/90 backdrop-blur-md border-b border-slate-800`
- Logo: teal accent color, bold
- Nav links: `text-slate-300 hover:text-teal-400 transition-colors`
- Active link: `text-teal-400`

### Buttons
- Primary: `bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition-colors`
- Secondary/outline: `border border-teal-500 text-teal-400 hover:bg-teal-500/10 px-6 py-3 rounded-lg transition-colors`
- Ghost: `text-slate-300 hover:text-teal-400 transition-colors`

### Cards
- Base: `bg-slate-900 border border-slate-800 rounded-xl overflow-hidden`
- Hover: `hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/10 transition-all`
- Image area: aspect-ratio preserved, object-cover

### Badges / Tags
- Scientific classification: `bg-teal-500/10 text-teal-400 border border-teal-500/30 text-xs font-mono px-2 py-1 rounded-full`
- Category: `bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full`

### Hero Section
- Full viewport height: `min-h-screen`
- Background: dark with subtle radial gradient overlay
- Centered content with large heading and subtext

### Section Dividers
- Use subtle `border-t border-slate-800` or gradient fades

## Do's
- Use teal/cyan as the primary accent consistently
- Maintain high contrast: light text on dark backgrounds
- Use `backdrop-blur` for overlays and nav
- Add subtle glow effects with `shadow-teal-500/20`
- Use `transition-all duration-300` for smooth interactions
- Scientific labels in monospace font

## Don'ts
- Never use white backgrounds — this is a dark-themed site
- Don't use red/orange as primary colors (reserved for warnings only)
- Avoid overly saturated colors that clash with the dark palette
- Don't use default blue link colors — override with teal
- Never show text that blends into the background
