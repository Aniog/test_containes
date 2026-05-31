# Memory Archive — Design System

## Concept
A deep-space, cosmic aesthetic evoking the vastness of the universe and the intimacy of human memory. Dark backgrounds with luminous accents, as if memories are stars scattered across the void.

## Color Palette

### Base Colors (add to Tailwind config as named tokens)
- `cosmos-black`: #050810 — deepest background
- `cosmos-dark`: #0a0f1e — card/panel backgrounds
- `cosmos-navy`: #0d1530 — secondary backgrounds
- `cosmos-blue`: #1a2a5e — borders, subtle fills
- `nebula-purple`: #6b21a8 — accent, highlights
- `nebula-violet`: #7c3aed — primary interactive
- `nebula-pink`: #c026d3 — secondary interactive, tags
- `stardust-gold`: #f59e0b — warm accent, featured items
- `stardust-cyan`: #06b6d4 — cool accent, links
- `memory-white`: #e2e8f0 — primary text
- `memory-muted`: #94a3b8 — secondary text, placeholders

### Usage
- Page background: `cosmos-black`
- Cards/panels: `cosmos-dark` with `cosmos-blue` border
- Primary CTA: `nebula-violet` bg, white text
- Secondary CTA: transparent with `nebula-violet` border
- Headings: `memory-white`
- Body text: `memory-muted`
- Accent/highlight: `stardust-gold` or `stardust-cyan`
- Tags/badges: `nebula-pink` or `nebula-violet` with low opacity bg

## Typography

### Font Stack
- Primary: "Cinzel" (Google Fonts) — headings, titles, logo (serif, classical, cosmic)
- Secondary: "Inter" (Google Fonts) — body, UI, labels

### Scale
- Display: `text-5xl md:text-7xl font-cinzel font-bold tracking-wide`
- H1: `text-4xl md:text-5xl font-cinzel font-semibold`
- H2: `text-2xl md:text-3xl font-cinzel`
- H3: `text-xl font-semibold text-memory-white`
- Body: `text-base text-memory-muted leading-relaxed`
- Caption/label: `text-sm text-memory-muted tracking-widest uppercase`
- Tag: `text-xs font-medium tracking-wide`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section padding: `py-16 md:py-24`
- Card padding: `p-6`
- Grid gaps: `gap-6` or `gap-8`
- Border radius: `rounded-xl` for cards, `rounded-full` for tags/badges

## Borders & Shadows
- Card border: `border border-cosmos-blue/40`
- Glow effect: `shadow-[0_0_30px_rgba(124,58,237,0.15)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(124,58,237,0.3)]`
- Subtle separator: `border-cosmos-blue/20`

## Animations
- Constellation: canvas-based particle animation with connecting lines
- Fade-in: `animate-fade-in` (opacity 0→1, translateY 20px→0, 0.6s ease)
- Pulse glow: subtle opacity pulse on star/memory nodes
- Hover transitions: `transition-all duration-300`

## Component Patterns

### Memory Card
- Dark bg (`cosmos-dark`), subtle border (`cosmos-blue/40`)
- Hover: border brightens to `nebula-violet/60`, glow shadow
- Emotion color dot in top-right corner
- Era badge bottom-left, location tag bottom-right

### Filter Pill
- Default: `bg-cosmos-navy border border-cosmos-blue/40 text-memory-muted`
- Active: `bg-nebula-violet/20 border-nebula-violet text-memory-white`
- Hover: `border-nebula-violet/60`

### Navigation
- Transparent on hero, `cosmos-dark/90 backdrop-blur` on scroll
- Logo: Cinzel font, `stardust-gold` accent
- Links: `memory-muted` default, `memory-white` hover

## Do's
- Use subtle gradients: `from-cosmos-black via-cosmos-navy to-cosmos-black`
- Layer translucent overlays for depth
- Use `backdrop-blur` on floating elements
- Animate sparingly — only meaningful motion
- Ensure all text has sufficient contrast against dark backgrounds

## Don'ts
- No white or light backgrounds
- No flat, unstyled buttons
- No harsh color transitions
- No text smaller than `text-xs` for important content
- Don't use pure black (#000) — use `cosmos-black` (#050810)
