# Design System — The Starry Night & Astronomy

## Philosophy
Japanese Minimalism meets deep-space wonder. Every element earns its place.
Generous whitespace, deliberate typography, and a night-sky palette create
an immersive yet calm educational experience.

## Color Palette

### Backgrounds
- Deep space (primary bg): `#0a0e1a` — near-black indigo
- Surface (cards, panels): `#111827` — dark charcoal-indigo (`bg-gray-900`)
- Elevated surface: `#1a2235` — slightly lighter panel (`bg-slate-800/60`)
- Border/divider: `rgba(255,255,255,0.08)` — subtle white border

### Text
- Primary text: `#f0f4ff` — crisp near-white (`text-slate-100`)
- Secondary text: `#94a3b8` — muted slate (`text-slate-400`)
- Accent amber: `#f59e0b` — warm star-gold (`text-amber-400`)
- Accent indigo: `#818cf8` — soft nebula-purple (`text-indigo-400`)

### Accents & Highlights
- Star gold: `#f59e0b` (amber-400) — for headings, highlights, CTAs
- Nebula purple: `#818cf8` (indigo-400) — for secondary accents, tags
- Cosmic teal: `#2dd4bf` (teal-400) — for interactive states, links
- Danger/error: `#f87171` (red-400)

## Typography

### Font Stack
- Headings: `'Cormorant Garamond', Georgia, serif` — elegant, editorial
- Body: `'Inter', system-ui, sans-serif` — clean, readable
- Mono/labels: `'JetBrains Mono', monospace` — for coordinates, data

### Scale
- Hero headline: `text-5xl md:text-7xl font-light tracking-tight`
- Section title: `text-3xl md:text-4xl font-light tracking-tight`
- Card title: `text-xl font-medium`
- Body: `text-base leading-relaxed`
- Caption/label: `text-sm text-slate-400 tracking-widest uppercase`

## Spacing & Layout
- Max content width: `max-w-6xl mx-auto`
- Section padding: `py-24 px-6 md:px-12`
- Card padding: `p-8`
- Grid gap: `gap-8`
- Generous whitespace between sections: `mb-16` to `mb-24`

## Components

### Navigation
- Fixed top, `backdrop-blur-md bg-[#0a0e1a]/80`
- Logo: amber accent, serif font
- Links: slate-400, hover → slate-100 with amber underline
- Mobile: hamburger menu with slide-down drawer

### Cards
- Background: `bg-slate-900/60 border border-white/8`
- Hover: `hover:border-amber-400/30 hover:bg-slate-800/80`
- Transition: `transition-all duration-300`
- Rounded: `rounded-2xl`

### Buttons
- Primary: `bg-amber-400 text-gray-900 hover:bg-amber-300 font-medium rounded-full px-8 py-3`
- Ghost: `border border-white/20 text-slate-200 hover:border-amber-400/50 rounded-full px-8 py-3`

### Form Inputs
- Background: `bg-slate-800/60 border border-white/10`
- Focus: `focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/30`
- Text: `text-slate-100 placeholder:text-slate-500`
- Rounded: `rounded-xl`

### Dividers
- `<hr className="border-white/8">`
- Decorative: thin amber line `w-12 h-px bg-amber-400`

## Images
- All images use the `data-strk-img` / `data-strk-bg` system
- Hero backgrounds: 16x9, width 1600
- Gallery cards: 4x3, width 600
- Knowledge section images: 3x2, width 800
- Always include descriptive alt text

## Do's
- Use `font-light` for large headings — feels more refined
- Add `tracking-widest uppercase text-xs text-amber-400` for section labels
- Use subtle gradients: `from-[#0a0e1a] via-[#0d1224] to-[#0a0e1a]`
- Animate with `transition-all duration-300 ease-out`
- Use `backdrop-blur` for floating elements

## Don'ts
- No bright white backgrounds
- No heavy font weights for display text
- No tight letter-spacing on body text
- No more than 3 accent colors per view
- No hard shadows — use `shadow-lg shadow-black/50` at most
