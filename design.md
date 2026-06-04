# MicroCosmos Design System

## Concept
MicroCosmos is a visually immersive website exploring the microscopic world — bacteria, cells, viruses, fungi, and other tiny life forms. The design evokes a sense of wonder, depth, and scientific beauty.

## Color Palette

### Primary Colors
- Deep Space Black: `#050a14` — page background, darkest surfaces
- Midnight Navy: `#0a1628` — card backgrounds, secondary surfaces
- Dark Teal: `#0d2137` — section backgrounds, subtle contrast

### Accent Colors
- Bioluminescent Cyan: `#00d4ff` — primary accent, links, highlights (`text-cyan-400`, `border-cyan-400`)
- Electric Teal: `#00b4d8` — hover states, secondary accent
- Neon Green: `#39ff14` — rare accent for special callouts
- Soft Violet: `#7c3aed` — gradient partner, secondary accent

### Text Colors
- Primary Text: `#e2e8f0` — main body text (`text-slate-200`)
- Secondary Text: `#94a3b8` — muted descriptions (`text-slate-400`)
- Heading Text: `#f8fafc` — headings (`text-slate-50`)
- Accent Text: `#00d4ff` — highlighted labels (`text-cyan-400`)

### Gradients
- Hero gradient: `from-[#050a14] via-[#0a1628] to-[#0d2137]`
- Accent gradient: `from-cyan-400 to-violet-500`
- Card hover: subtle cyan glow via `shadow-cyan-500/20`

## Typography

### Font Family
- Headings: `Space Grotesk` — modern, scientific feel
- Body: `Inter` — clean, readable
- Monospace accents: `JetBrains Mono` — for scientific labels/data

### Scale
- Hero title: `text-5xl md:text-7xl font-bold`
- Section title: `text-3xl md:text-4xl font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base` or `text-sm`
- Label/caption: `text-xs uppercase tracking-widest`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto`
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6` or `p-8`
- Grid gaps: `gap-6` or `gap-8`

## Borders & Shadows
- Card border: `border border-cyan-900/40`
- Card hover border: `border-cyan-400/60`
- Glow shadow: `shadow-lg shadow-cyan-500/10`
- Hover glow: `shadow-xl shadow-cyan-500/30`
- Border radius: `rounded-xl` for cards, `rounded-full` for pills/badges

## Components

### Cards
- Background: `bg-[#0a1628]`
- Border: `border border-cyan-900/40`
- Hover: `hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/20`
- Transition: `transition-all duration-300`

### Buttons
- Primary: `bg-cyan-400 text-[#050a14] font-semibold px-6 py-3 rounded-full hover:bg-cyan-300`
- Secondary: `border border-cyan-400 text-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-400/10`

### Navigation
- Background: `bg-[#050a14]/90 backdrop-blur-md`
- Border bottom: `border-b border-cyan-900/30`
- Links: `text-slate-300 hover:text-cyan-400`

### Badges/Tags
- `bg-cyan-400/10 text-cyan-400 text-xs px-3 py-1 rounded-full border border-cyan-400/30`

## Do's
- Use dark backgrounds with glowing cyan/teal accents
- Add subtle gradients and glow effects to create depth
- Use uppercase tracking-widest for section labels
- Animate elements with `transition-all duration-300`
- Use `backdrop-blur` for overlays and nav

## Don'ts
- Don't use white or very light backgrounds
- Don't use warm colors (orange, red, yellow) as primary accents
- Don't use flat, non-glowing card styles
- Don't use serif fonts
- Don't use dense text without breathing room
