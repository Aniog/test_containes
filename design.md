# MicroCosmos Design System

## Concept
MicroCosmos is a science-forward website exploring the invisible world of microscopic life. The visual style is dark, immersive, and scientific — evoking the feeling of peering through a microscope into a glowing, alien world.

## Color Palette

### Primary Colors
- **Deep Space Black**: `#050a0e` — page background
- **Midnight Navy**: `#0a1628` — card/section backgrounds
- **Dark Teal**: `#0d2137` — secondary backgrounds, nav

### Accent Colors
- **Bioluminescent Cyan**: `#00d4ff` — primary accent, links, highlights (`text-cyan-400`, `border-cyan-400`)
- **Emerald Glow**: `#00ff88` — secondary accent, success states (`text-emerald-400`)
- **Violet Pulse**: `#7c3aed` — tertiary accent, tags (`text-violet-500`)
- **Amber Spore**: `#f59e0b` — warm accent, warnings (`text-amber-400`)

### Text Colors
- **Primary Text**: `#e2e8f0` — main body text (`text-slate-200`)
- **Secondary Text**: `#94a3b8` — muted/supporting text (`text-slate-400`)
- **Heading Text**: `#f8fafc` — headings (`text-slate-50`)

## Typography

### Fonts
- **Display/Headings**: `Space Grotesk` — modern, scientific feel
- **Body**: `Inter` — clean, readable
- Import via Google Fonts in index.html

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
- Rounded corners: `rounded-xl` for cards, `rounded-full` for badges/pills

## Spacing
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6`
- Grid gap: `gap-6` or `gap-8`

## Component Patterns

### Cards
- Dark background: `bg-midnight` or `bg-slate-900/60`
- Subtle border: `border border-cyan-900/40`
- Hover: scale slightly + glow `hover:scale-[1.02] transition-all`

### Buttons
- Primary: `bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-full`
- Secondary: `border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-6 py-3 rounded-full`
- Ghost: `text-slate-400 hover:text-white`

### Navigation
- Sticky top nav with dark background + blur: `sticky top-0 bg-slate-950/80 backdrop-blur-md`
- Active link: `text-cyan-400`
- Inactive link: `text-slate-300 hover:text-white`

### Badges/Tags
- `bg-cyan-900/40 text-cyan-300 text-xs px-3 py-1 rounded-full`
- Category variants: cyan (bacteria), emerald (fungi), violet (protozoa), amber (viruses)

## Do's
- Use dark backgrounds throughout — this is a dark-mode-only site
- Use glowing cyan as the primary accent consistently
- Use subtle gradients for hero sections: `from-slate-950 via-slate-900 to-slate-950`
- Add subtle animated elements (pulsing dots, glowing borders) for a living feel
- Use grid layouts for cards on desktop, single column on mobile

## Don'ts
- Never use white or very light backgrounds
- Don't use more than 3 accent colors on a single page
- Avoid flat, unstyled buttons — always use the defined button styles
- Don't use serif fonts — keep it modern and scientific
