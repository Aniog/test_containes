# Memory Archive — Design System

## Concept
A deep-space aesthetic evoking the vastness of the cosmos and the intimacy of human memory. Dark backgrounds with luminous accents, as if memories are stars scattered across the void.

## Color Palette

### Base Colors (add to Tailwind config as named colors)
- `void`: `#03040a` — deepest background, near-black with blue tint
- `cosmos`: `#070d1a` — primary background
- `nebula`: `#0d1b35` — card/surface background
- `stardust`: `#1a2d52` — elevated surface, borders
- `aurora`: `#7c3aed` — primary accent (violet)
- `aurora-light`: `#a78bfa` — lighter violet for text/icons
- `nova`: `#06b6d4` — secondary accent (cyan)
- `nova-light`: `#67e8f9` — lighter cyan
- `memory`: `#f59e0b` — warm amber for memory highlights
- `memory-light`: `#fcd34d` — lighter amber
- `starlight`: `#e2e8f0` — primary text
- `mist`: `#94a3b8` — secondary text
- `ghost`: `#475569` — muted/disabled text

### Semantic Tokens
- Background: `void` / `cosmos`
- Surface: `nebula`
- Border: `stardust`
- Primary: `aurora` / `aurora-light`
- Accent: `nova` / `nova-light`
- Highlight: `memory` / `memory-light`
- Text primary: `starlight`
- Text secondary: `mist`
- Text muted: `ghost`

## Typography

### Font Stack
- Headings: `'Cinzel', serif` — classical, monumental feel
- Body: `'Inter', sans-serif` — clean, readable
- Mono/data: `'JetBrains Mono', monospace` — for coordinates, IDs, dates

### Scale
- Display: `text-6xl` to `text-8xl`, `font-light`, `tracking-widest`
- H1: `text-4xl` to `text-5xl`, `font-light`, `tracking-wide`
- H2: `text-2xl` to `text-3xl`, `font-light`, `tracking-wide`
- H3: `text-xl`, `font-medium`
- Body: `text-base`, `leading-relaxed`
- Caption: `text-sm`, `text-mist`
- Label: `text-xs`, `uppercase`, `tracking-widest`, `text-ghost`

## Spacing
- Section padding: `py-24 px-6` (desktop), `py-16 px-4` (mobile)
- Card padding: `p-6` to `p-8`
- Component gap: `gap-6` to `gap-8`
- Tight gap: `gap-3` to `gap-4`

## Borders & Radius
- Cards: `rounded-2xl`, `border border-stardust/40`
- Buttons: `rounded-full` (pill) or `rounded-xl`
- Inputs: `rounded-xl`, `border border-stardust`
- Badges: `rounded-full`

## Shadows & Glow
- Card hover: `shadow-lg shadow-aurora/10`
- Active glow: `shadow-xl shadow-aurora/30`
- Nova glow: `shadow-xl shadow-nova/20`
- Memory glow: `shadow-lg shadow-memory/20`

## Animations
- Constellation: canvas-based particle animation with connecting lines
- Fade in: `animate-fade-in` — opacity 0→1, translateY 20px→0, 0.6s ease
- Float: `animate-float` — subtle vertical oscillation, 6s infinite
- Pulse glow: `animate-pulse-glow` — box-shadow intensity oscillation
- Shimmer: `animate-shimmer` — loading skeleton effect
- Twinkle: `animate-twinkle` — star opacity flicker

## Component Patterns

### Cards
- Background: `bg-nebula`
- Border: `border border-stardust/40`
- Hover: `hover:border-aurora/50 hover:shadow-lg hover:shadow-aurora/10`
- Transition: `transition-all duration-300`

### Buttons
- Primary: `bg-aurora hover:bg-aurora/80 text-white rounded-full px-6 py-2.5`
- Secondary: `border border-aurora/50 text-aurora-light hover:bg-aurora/10 rounded-full px-6 py-2.5`
- Ghost: `text-mist hover:text-starlight hover:bg-stardust/30 rounded-xl px-4 py-2`

### Filter Chips
- Default: `bg-stardust/30 text-mist border border-stardust/50 rounded-full px-4 py-1.5 text-sm`
- Active: `bg-aurora/20 text-aurora-light border border-aurora/50 rounded-full px-4 py-1.5 text-sm`

### Input Fields
- `bg-nebula border border-stardust text-starlight placeholder:text-ghost rounded-xl px-4 py-3 focus:border-aurora/60 focus:outline-none focus:ring-1 focus:ring-aurora/30`

## Do's
- Use dark backgrounds exclusively — this is a space/night theme
- Layer transparency with `/40`, `/20`, `/10` Tailwind opacity modifiers
- Use `backdrop-blur` for glass-morphism effects on overlays
- Animate sparingly — only constellation, hover states, and entrance animations
- Use `tracking-widest` on uppercase labels for elegance
- Prefer `font-light` for large headings to feel ethereal

## Don'ts
- Never use white or light backgrounds
- Never use saturated colors without dark context
- Don't use more than 3 accent colors per view
- Don't use `font-bold` on large display text — use `font-light` or `font-medium`
- Don't use tight line-height on body text
