# Memory Archive — Design System

## Concept
A deep-space aesthetic evoking the vastness of the cosmos and the intimacy of human memory. Dark backgrounds with luminous accents, as if memories are stars scattered across the void.

## Color Palette

### Backgrounds
- Deep space black: `bg-[#050810]` — primary page background
- Dark navy: `bg-[#080d1a]` — card/panel backgrounds
- Midnight blue: `bg-[#0d1530]` — elevated surfaces, modals

### Accent Colors (named in tailwind config)
- Nebula purple: `#7c3aed` → `text-violet-600`, `bg-violet-600`
- Stellar cyan: `#06b6d4` → `text-cyan-400`, `bg-cyan-400`
- Memory gold: `#f59e0b` → `text-amber-400`, `bg-amber-400`
- Cosmic rose: `#f43f5e` → `text-rose-400`, `bg-rose-400`
- Starlight white: `#e2e8f0` → `text-slate-200`

### Text
- Primary: `text-slate-100` (#f1f5f9)
- Secondary: `text-slate-400` (#94a3b8)
- Muted: `text-slate-500` (#64748b)
- Accent: `text-cyan-400` for highlights

## Typography

### Fonts
- Display: "Cinzel" (Google Fonts) — for headings, titles, logo
- Body: "Inter" — for all body text, UI elements

### Scale
- Hero title: `text-5xl md:text-7xl font-cinzel font-bold`
- Section heading: `text-3xl md:text-4xl font-cinzel`
- Card title: `text-lg font-semibold text-slate-100`
- Body: `text-sm md:text-base text-slate-300`
- Caption/label: `text-xs text-slate-500 uppercase tracking-widest`

## Borders & Shadows
- Card border: `border border-slate-700/50`
- Glow border: `border border-cyan-500/30`
- Card shadow: `shadow-lg shadow-black/50`
- Glow effect: `shadow-cyan-500/20`

## Spacing
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-5 md:p-6`
- Grid gap: `gap-4 md:gap-6`

## Components

### Memory Card
- Dark background `bg-[#080d1a]`
- Subtle border `border border-slate-700/40`
- Hover: border brightens to `border-cyan-500/40`, slight scale `hover:scale-[1.02]`
- Transition: `transition-all duration-300`

### Filter Pills
- Default: `bg-slate-800 text-slate-400 border border-slate-700`
- Active: `bg-violet-600/20 text-violet-300 border border-violet-500/50`

### Buttons
- Primary: `bg-cyan-500 text-black font-semibold hover:bg-cyan-400`
- Ghost: `border border-slate-600 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300`

## Animations
- Constellation: canvas-based particle system with connecting lines
- Memory fragments: slow float/pulse animations
- Page transitions: fade-in with slight upward drift
- Star twinkle: opacity oscillation on small dots

## Do's
- Always use dark backgrounds with light text
- Use glow effects sparingly for emphasis
- Maintain cosmic/space metaphors in copy
- Use `font-cinzel` for all display headings

## Don'ts
- Never use white backgrounds
- Avoid harsh, fully saturated colors — prefer muted/translucent variants
- Don't use more than 3 accent colors per section
- Avoid dense text blocks — use generous line-height and spacing
