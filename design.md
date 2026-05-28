# MicroCosmos Design System

## Brand Identity
MicroCosmos is a science-forward website exploring the hidden world of microscopic life. The visual language is dark, immersive, and scientific — evoking deep-sea bioluminescence, petri dishes, and electron microscopy.

## Color Palette
- **Background (deep dark):** `bg-slate-950` (#020617)
- **Surface (card/panel):** `bg-slate-900` (#0f172a)
- **Surface elevated:** `bg-slate-800` (#1e293b)
- **Border subtle:** `border-slate-700`
- **Primary accent (teal/cyan):** `text-cyan-400`, `bg-cyan-500`, `border-cyan-500`
- **Secondary accent (emerald):** `text-emerald-400`, `bg-emerald-500`
- **Highlight (violet):** `text-violet-400`
- **Body text:** `text-slate-200`
- **Muted text:** `text-slate-400`
- **Headings:** `text-white`

## Typography
- **Font:** Inter (loaded via Google Fonts)
- **Display / Hero headings:** `text-5xl md:text-7xl font-extrabold tracking-tight text-white`
- **Section headings (h2):** `text-3xl md:text-4xl font-bold text-white`
- **Sub-headings (h3):** `text-xl font-semibold text-white`
- **Body text:** `text-base text-slate-300 leading-relaxed`
- **Caption / label:** `text-sm text-slate-400 uppercase tracking-widest`
- **Accent label:** `text-xs font-semibold text-cyan-400 uppercase tracking-widest`

## Spacing & Layout
- **Page max width:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section vertical padding:** `py-20 md:py-28`
- **Card padding:** `p-6 md:p-8`
- **Grid gaps:** `gap-6 md:gap-8`

## Components

### Navigation
- Fixed top bar: `fixed top-0 inset-x-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800`
- Logo: bold, cyan accent
- Nav links: `text-slate-300 hover:text-cyan-400 transition-colors`
- Active link: `text-cyan-400`

### Buttons
- **Primary:** `bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition-colors`
- **Secondary/outline:** `border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-6 py-3 rounded-lg transition-colors`
- **Ghost:** `text-slate-300 hover:text-white transition-colors`

### Cards
- `bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden`
- Hover: `hover:border-cyan-500/50 transition-colors`
- Image area: `aspect-video` or `aspect-square`

### Badges / Tags
- `bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-semibold px-3 py-1 rounded-full`
- Emerald variant: `bg-emerald-500/10 text-emerald-400 border border-emerald-500/30`
- Violet variant: `bg-violet-500/10 text-violet-400 border border-violet-500/30`

### Section Dividers
- Subtle gradient line: `border-t border-slate-800`
- Glow accent: use `bg-cyan-500/20 blur-3xl` absolute positioned orbs for depth

## Do's
- Use dark backgrounds throughout — never white or light backgrounds
- Use cyan as the primary interactive color
- Add subtle glow/blur orbs behind hero sections for depth
- Use `backdrop-blur` on the nav for a glass effect
- Keep text contrast high: white or slate-200 on dark surfaces
- Use rounded-2xl for cards, rounded-lg for buttons

## Don'ts
- Never use white or light backgrounds
- Never use dark text on dark backgrounds
- Don't use more than 3 accent colors per section
- Don't use serif fonts
- Don't use harsh borders — prefer subtle slate-700/800 borders
