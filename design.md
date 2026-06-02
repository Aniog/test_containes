# MicroCosmos Design System

## Brand Identity
MicroCosmos is a science-forward website exploring the microscopic world. The visual style blends deep-space darkness with bioluminescent accents — evoking the mysterious, glowing world of microorganisms.

## Color Palette

### Primary Colors
- Background (deep dark): `bg-[#050d1a]` — near-black navy
- Surface (card/panel): `bg-[#0a1628]` — dark navy
- Surface elevated: `bg-[#0f1f38]` — slightly lighter navy
- Border: `border-[#1a3a5c]` — muted blue border

### Accent Colors
- Primary accent (cyan-teal): `text-cyan-400`, `bg-cyan-400` — `#22d3ee`
- Secondary accent (emerald): `text-emerald-400`, `bg-emerald-400` — `#34d399`
- Tertiary accent (violet): `text-violet-400`, `bg-violet-400` — `#a78bfa`
- Warm accent (amber): `text-amber-400` — `#fbbf24`

### Text Colors
- Primary text: `text-white` or `text-slate-100`
- Secondary text: `text-slate-300`
- Muted text: `text-slate-400`
- Accent text: `text-cyan-400`

## Typography

### Font
- Primary: Inter (loaded via Google Fonts)
- Monospace accents: `font-mono` for scientific labels and data

### Scale
- Hero heading: `text-5xl md:text-7xl font-bold`
- Page heading: `text-4xl md:text-5xl font-bold`
- Section heading: `text-2xl md:text-3xl font-semibold`
- Card heading: `text-lg font-semibold`
- Body: `text-base text-slate-300`
- Small/label: `text-sm text-slate-400`
- Micro/caption: `text-xs font-mono text-slate-500`

## Spacing & Layout
- Page max width: `max-w-7xl mx-auto`
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6` or `p-8`
- Grid gaps: `gap-6` or `gap-8`

## Components

### Cards
- Background: `bg-[#0a1628]`
- Border: `border border-[#1a3a5c]`
- Rounded: `rounded-2xl`
- Hover: `hover:border-cyan-400/50 transition-all duration-300`

### Buttons
- Primary: `bg-cyan-400 text-[#050d1a] font-semibold px-6 py-3 rounded-full hover:bg-cyan-300 transition-colors`
- Secondary/outline: `border border-cyan-400 text-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-400/10 transition-colors`
- Ghost: `text-slate-300 hover:text-white transition-colors`

### Badges / Tags
- `bg-cyan-400/10 text-cyan-400 text-xs font-mono px-3 py-1 rounded-full border border-cyan-400/20`

### Glows & Effects
- Glow text: `drop-shadow` or subtle `text-shadow` via custom class
- Card glow on hover: `hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]`
- Gradient text: `bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent`

## Navigation
- Sticky top nav: `sticky top-0 z-50 bg-[#050d1a]/90 backdrop-blur-md border-b border-[#1a3a5c]`
- Logo: gradient text, bold
- Links: `text-slate-300 hover:text-cyan-400 transition-colors`
- Active link: `text-cyan-400`

## Do's
- Use dark backgrounds exclusively — this is a dark-mode-only site
- Use cyan/emerald gradients for hero headings
- Use `font-mono` for scientific names, data labels, and measurements
- Add subtle glow effects to accent elements
- Use grid layouts for organism cards (2-3 columns on desktop, 1 on mobile)
- Ensure all text has strong contrast against dark backgrounds

## Don'ts
- Never use white or light backgrounds
- Never use low-contrast text (e.g. dark text on dark bg)
- Avoid overly saturated colors — keep accents at 400 shade
- Don't use more than 3 accent colors per section
- Avoid heavy drop shadows — prefer subtle glows
