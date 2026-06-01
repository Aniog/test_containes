# Echoes of Earth — Design System

## Concept
A dark, cosmic aesthetic evoking deep space and the fragility of human memory. The palette draws from nebulae, starfields, and bioluminescence — beautiful, melancholic, and timeless.

## Colors

### Palette (defined in tailwind.config.js as named colors)
- `cosmos-950`: #03020a — deepest background, near-black with a blue tint
- `cosmos-900`: #080618 — primary background
- `cosmos-800`: #0f0d2a — card/surface background
- `cosmos-700`: #1a1640 — elevated surface, borders
- `cosmos-600`: #2a2560 — subtle borders, dividers
- `nebula-400`: #7c6ff7 — primary accent (violet)
- `nebula-300`: #a89cf8 — lighter accent
- `nebula-200`: #c8bffc — highlight
- `aurora-400`: #4fd1c5 — teal accent (emotions, life events)
- `aurora-300`: #81e6d9 — lighter teal
- `stardust-400`: #f6ad55 — warm amber (eras, dates)
- `stardust-300`: #fbd38d — lighter amber
- `memory-pink`: #f687b3 — pink accent (love/joy memories)
- `memory-blue`: #63b3ed — blue accent (nostalgia/sadness)
- `text-star`: #e8e4ff — primary text on dark backgrounds
- `text-nebula`: #a89cf8 — secondary text, labels
- `text-dim`: #6b6890 — muted/placeholder text

### Usage Rules
- Always use `cosmos-900` or `cosmos-950` as page backgrounds
- Cards use `cosmos-800` background with `cosmos-700` border
- Primary CTAs use `nebula-400` with white text
- Never use white text on `nebula-300` or lighter — use `cosmos-900` instead
- Emotion tags: `aurora-400` background with `cosmos-900` text
- Era tags: `stardust-400` background with `cosmos-900` text

## Typography

### Font Stack
- Headings: `Cinzel` (Google Fonts) — serif, classical, monumental
- Body: `Inter` (Google Fonts) — clean, readable
- Mono/data: `JetBrains Mono` — for coordinates, dates, IDs

### Scale
- Hero title: `text-5xl md:text-7xl font-cinzel font-bold`
- Section title: `text-3xl md:text-4xl font-cinzel font-semibold`
- Card title: `text-lg font-cinzel font-medium`
- Body: `text-base font-inter text-text-star`
- Caption/label: `text-sm text-text-nebula`
- Micro: `text-xs text-text-dim font-mono`

## Spacing
- Page padding: `px-4 md:px-8 lg:px-16`
- Section gap: `py-16 md:py-24`
- Card padding: `p-5 md:p-6`
- Component gap: `gap-4 md:gap-6`

## Borders & Shadows
- Card border: `border border-cosmos-700`
- Glow effect: `shadow-[0_0_20px_rgba(124,111,247,0.15)]`
- Hover glow: `shadow-[0_0_30px_rgba(124,111,247,0.3)]`
- Border radius: `rounded-xl` for cards, `rounded-full` for tags/badges

## Animations
- Constellation: canvas-based, slow drift, connected nodes
- Fade in: `animate-fade-in` (custom, 0.6s ease-out)
- Float: `animate-float` (custom, 3s ease-in-out infinite)
- Pulse glow: `animate-pulse-glow` (custom, 2s ease-in-out infinite)
- Transitions: `transition-all duration-300`

## Component Patterns

### Memory Card
- Background: `cosmos-800`
- Border: `cosmos-700`, hover `nebula-400/40`
- Title: `text-star` with `font-cinzel`
- Tags: pill badges with category-specific colors
- Hover: subtle glow + slight scale up

### Filter Pills
- Default: `cosmos-700` bg, `text-nebula` text
- Active: `nebula-400` bg, white text
- Rounded full, `px-4 py-1.5 text-sm`

### Navigation
- Background: `cosmos-950/90` with backdrop blur
- Logo: `font-cinzel text-nebula-300`
- Links: `text-text-dim` hover `text-star`

## Do's
- Use layered transparency (bg-cosmos-800/60 backdrop-blur) for overlays
- Add subtle grain/noise texture via CSS for depth
- Use `letter-spacing: wider` on all caps labels
- Animate constellation nodes with slight random drift

## Don'ts
- No pure white backgrounds anywhere
- No bright saturated colors (keep everything slightly desaturated/cosmic)
- No sharp corners on interactive elements
- Don't use default browser blue for links
