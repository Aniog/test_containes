# MicroCosmos Design System

## Brand Identity
MicroCosmos is a science-forward website exploring the invisible world of microorganisms. The visual style blends deep-space darkness with bioluminescent accents — evoking the mysterious, glowing world seen through a microscope.

## Color Palette

### Primary Colors
- Background (deep dark): `bg-slate-950` (#020617)
- Surface / Card: `bg-slate-900` (#0f172a)
- Surface elevated: `bg-slate-800` (#1e293b)
- Border subtle: `border-slate-700`

### Accent Colors (bioluminescent)
- Teal glow (primary accent): `text-teal-400`, `bg-teal-400` (#2dd4bf)
- Cyan highlight: `text-cyan-300`, `bg-cyan-300` (#67e8f9)
- Emerald secondary: `text-emerald-400`, `bg-emerald-400` (#34d399)
- Purple deep: `text-purple-400`, `bg-purple-400` (#c084fc)

### Text Colors
- Primary text: `text-slate-100` (#f1f5f9)
- Secondary text: `text-slate-300` (#cbd5e1)
- Muted text: `text-slate-400` (#94a3b8)
- Accent text: `text-teal-400`

### DO NOT use:
- White text on light backgrounds
- Black text on dark backgrounds without explicit override
- Low-contrast gray-on-gray combinations

## Typography

### Font Family
- Primary: Inter (loaded via Google Fonts)
- Monospace accents: system monospace for scientific labels

### Scale
- Hero heading: `text-5xl md:text-7xl font-bold`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card heading: `text-xl font-semibold`
- Body: `text-base text-slate-300`
- Caption / label: `text-sm text-slate-400`
- Scientific tag: `text-xs font-mono uppercase tracking-widest text-teal-400`

## Spacing & Layout
- Page max width: `max-w-7xl mx-auto`
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6`
- Grid gaps: `gap-6` or `gap-8`
- Section gap between elements: `space-y-4` or `space-y-6`

## Components

### Cards
- Background: `bg-slate-900 border border-slate-700`
- Hover: `hover:border-teal-500 hover:shadow-lg hover:shadow-teal-900/30`
- Rounded: `rounded-2xl`
- Transition: `transition-all duration-300`

### Buttons
- Primary: `bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-6 py-3 rounded-full transition-colors`
- Secondary/outline: `border border-teal-500 text-teal-400 hover:bg-teal-500/10 px-6 py-3 rounded-full transition-colors`
- Ghost: `text-slate-300 hover:text-teal-400 transition-colors`

### Navigation
- Background: `bg-slate-950/90 backdrop-blur-md border-b border-slate-800`
- Nav links: `text-slate-300 hover:text-teal-400 transition-colors`
- Active link: `text-teal-400`
- Logo: `text-teal-400 font-bold text-xl`

### Badges / Tags
- Scientific tag: `bg-teal-500/10 text-teal-400 border border-teal-500/30 text-xs font-mono px-3 py-1 rounded-full`
- Category badge: `bg-slate-800 text-slate-300 text-xs px-2 py-1 rounded`

### Hero Section
- Full viewport height: `min-h-screen`
- Gradient overlay on background images: `bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950`
- Centered content with large heading

### Dividers
- Subtle: `border-t border-slate-800`

## Visual Effects
- Glow effects: `shadow-teal-500/20 shadow-lg`
- Gradient text: `bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent`
- Subtle grid/dot pattern backgrounds for hero sections using CSS

## Responsive Breakpoints
- Mobile first
- `md:` — tablet (768px+)
- `lg:` — desktop (1024px+)
- `xl:` — wide desktop (1280px+)
- Single column on mobile, 2-3 columns on desktop for grids

## Do's
- Use dark backgrounds throughout for consistency
- Use teal/cyan accents sparingly for emphasis
- Maintain generous whitespace
- Use rounded corners (`rounded-2xl`, `rounded-xl`) for cards
- Use subtle borders to define surfaces

## Don'ts
- Don't use pure white backgrounds
- Don't use more than 2 accent colors per section
- Don't use small font sizes below `text-sm` for body content
- Don't use harsh drop shadows — prefer glow-style shadows
