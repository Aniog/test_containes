# The Time Traveler's Archive — Design System

## Visual Identity
A blend of futuristic museum, vintage library, and classified government database.
Dark, atmospheric, cinematic. Premium storytelling experience.

## Color Palette
- Background primary: `#050810` (deep space black)
- Background secondary: `#0a0f1e` (dark navy)
- Background card: `rgba(10, 20, 40, 0.7)` (glassmorphism)
- Accent primary: `#00d4ff` (cyan glow) → Tailwind: `cyan-400`
- Accent secondary: `#7c3aed` (temporal violet) → Tailwind: `violet-600`
- Accent tertiary: `#f59e0b` (amber warning) → Tailwind: `amber-500`
- Accent danger: `#ef4444` (paradox red) → Tailwind: `red-500`
- Text primary: `#e2e8f0` → Tailwind: `slate-200`
- Text secondary: `#94a3b8` → Tailwind: `slate-400`
- Text muted: `#475569` → Tailwind: `slate-600`
- Border subtle: `rgba(0, 212, 255, 0.15)` → `border-cyan-400/15`
- Border glow: `rgba(0, 212, 255, 0.4)` → `border-cyan-400/40`

## Typography
- Display font: "Cinzel" (Google Fonts) — for headings, titles, logo
- Body font: "Inter" — for body text, UI elements
- Mono font: "JetBrains Mono" — for metadata, codes, coordinates

## Spacing & Layout
- Max content width: `max-w-7xl`
- Section padding: `py-20 px-6`
- Card padding: `p-6`
- Border radius: `rounded-lg` for cards, `rounded-full` for badges

## Component Styles

### Glassmorphism Card
```
bg-slate-900/60 backdrop-blur-md border border-cyan-400/15 rounded-lg
```

### Glow Button (Primary)
```
bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 rounded-lg px-6 py-2.5 transition-all
```

### Danger Badge
```
bg-red-500/10 border border-red-500/30 text-red-400 text-xs px-2 py-0.5 rounded-full
```

### Section Header
```
font-cinzel text-3xl text-slate-100 tracking-widest uppercase
```

## Animations
- Particle drift: slow, subtle, upward floating
- Timeline pulse: glowing nodes that pulse on hover
- Card hover: subtle glow border intensification + slight lift
- Page transitions: fade + slight upward slide
- Scanline overlay: very subtle CRT-style scanlines on hero

## Do's
- Use glassmorphism for all cards and panels
- Use cyan glow for interactive elements and highlights
- Use violet for temporal/dimensional elements
- Use amber for warnings and discoveries
- Use red sparingly for paradox/danger indicators
- Always ensure text is readable against dark backgrounds
- Use uppercase tracking-widest for section labels

## Don'ts
- No white backgrounds
- No light mode
- No flat/plain buttons without glow effects
- No sans-serif for display headings
- No hardcoded hex values in JSX — use Tailwind classes
