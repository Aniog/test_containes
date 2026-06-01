# Memory Archive — Design System

## Concept
A deep-space, cosmic aesthetic evoking the vastness of the universe and the intimacy of human memory. Dark backgrounds with luminous accents, as if memories are stars scattered across the void.

## Color Palette

### Base Colors (add to Tailwind config as named colors)
- `cosmos` — `#050a14` — deepest background, near-black navy
- `void` — `#080d1a` — card/panel background
- `nebula` — `#0d1628` — elevated surfaces, modals
- `stardust` — `#1a2540` — borders, dividers
- `aurora` — `#7c3aed` — primary accent (violet)
- `aurora-light` — `#a78bfa` — lighter violet for hover/glow
- `nova` — `#06b6d4` — secondary accent (cyan)
- `nova-light` — `#67e8f9` — lighter cyan
- `comet` — `#f59e0b` — warm accent (amber), used for "joy" emotion
- `pulsar` — `#ec4899` — pink accent, used for "love" emotion
- `starlight` — `#e2e8f0` — primary text
- `moonlight` — `#94a3b8` — secondary/muted text
- `twilight` — `#475569` — disabled/placeholder text

### Emotion Color Mapping
- Joy → `comet` (#f59e0b)
- Love → `pulsar` (#ec4899)
- Nostalgia → `aurora` (#7c3aed)
- Wonder → `nova` (#06b6d4)
- Grief → `#6b7280` (gray)
- Hope → `#10b981` (emerald)
- Fear → `#ef4444` (red)
- Peace → `#a3e635` (lime)

## Typography

### Fonts
- **Display/Hero**: `Cinzel` — serif, classical, cosmic weight (Google Fonts)
- **Body**: `Inter` — clean, readable sans-serif (Google Fonts)
- **Mono/Data**: `JetBrains Mono` — for coordinates, dates, IDs

### Scale
- Hero title: `text-5xl md:text-7xl font-cinzel font-bold`
- Section title: `text-3xl md:text-4xl font-cinzel`
- Card title: `text-lg font-semibold font-inter`
- Body: `text-base font-inter`
- Caption/meta: `text-sm text-moonlight`
- Micro: `text-xs text-twilight font-mono`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto`
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6`
- Grid gaps: `gap-6` for cards, `gap-4` for tight lists
- Border radius: `rounded-xl` for cards, `rounded-full` for badges/pills

## Component Styles

### Cards
```
bg-void border border-stardust rounded-xl p-6
hover:border-aurora/50 hover:shadow-lg hover:shadow-aurora/10
transition-all duration-300
```

### Buttons — Primary
```
bg-aurora hover:bg-aurora-light text-white font-semibold
px-6 py-3 rounded-full transition-all duration-200
shadow-lg shadow-aurora/30
```

### Buttons — Ghost
```
border border-stardust text-moonlight hover:border-aurora/50
hover:text-starlight px-6 py-3 rounded-full transition-all duration-200
```

### Badges / Pills
```
text-xs font-mono px-3 py-1 rounded-full border
```
Emotion badges use their respective emotion color as border + text.

### Input / Search
```
bg-nebula border border-stardust text-starlight placeholder-twilight
rounded-xl px-4 py-3 focus:border-aurora focus:ring-1 focus:ring-aurora
outline-none transition-all duration-200
```

## Visual Effects

### Glow Effects
- Aurora glow: `shadow-aurora/20 shadow-xl`
- Nova glow: `shadow-nova/20 shadow-xl`
- Subtle card glow on hover: `hover:shadow-aurora/10`

### Gradients
- Hero background: `bg-gradient-to-b from-cosmos via-void to-cosmos`
- Text gradient: `bg-gradient-to-r from-aurora-light to-nova bg-clip-text text-transparent`
- Card overlay: `bg-gradient-to-t from-void/90 to-transparent`

### Animations
- Constellation stars: slow pulse + drift (custom keyframes)
- Memory cards: fade-in-up on scroll
- Hover transitions: `transition-all duration-300`
- Page transitions: fade

## Do's
- Always use dark backgrounds; never white or light gray backgrounds
- Use glow/shadow effects sparingly for emphasis
- Maintain high contrast: starlight text on cosmos/void backgrounds
- Use Cinzel only for headings and display text
- Use emotion colors consistently across all memory cards and filters

## Don'ts
- Never use white backgrounds
- Never use light-mode color schemes
- Don't use more than 2 accent colors per component
- Don't use harsh borders — prefer subtle `border-stardust` or glow borders
- Don't use solid fills for large areas — prefer gradients
