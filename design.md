# World Cup Website Design System

## Theme
A bold, energetic sports theme inspired by the 2026 FIFA World Cup (USA, Canada, Mexico).
Dark backgrounds with vibrant accent colors create a premium, immersive feel.

## Color Palette

### Primary Colors
- `bg-[#0a0e1a]` — Deep navy black (main background)
- `bg-[#0d1526]` — Dark navy (card/section backgrounds)
- `bg-[#111827]` — Slightly lighter dark (secondary backgrounds)

### Accent Colors
- `text-[#f5a623]` / `bg-[#f5a623]` — Golden yellow (primary accent, CTAs, highlights)
- `text-[#e63946]` / `bg-[#e63946]` — Vibrant red (danger, live indicators, scores)
- `text-[#2ecc71]` / `bg-[#2ecc71]` — Green (wins, positive stats)
- `text-[#3b82f6]` / `bg-[#3b82f6]` — Blue (links, info)

### Text Colors
- `text-white` — Primary text on dark backgrounds
- `text-gray-300` — Secondary text
- `text-gray-400` — Muted/helper text
- `text-[#f5a623]` — Highlighted/accent text

### Border Colors
- `border-gray-700` — Subtle borders
- `border-[#f5a623]/30` — Golden accent borders

## Typography

### Font Family
- Primary: Inter (sans-serif)
- Headings: Inter with font-weight 700-900

### Scale
- Hero title: `text-5xl md:text-7xl font-black`
- Section title: `text-3xl md:text-4xl font-bold`
- Card title: `text-xl font-bold`
- Body: `text-base text-gray-300`
- Small/caption: `text-sm text-gray-400`

## Spacing & Layout

### Container
- `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

### Section Padding
- `py-16 md:py-24`

### Card Padding
- `p-6` standard, `p-4` compact

## Component Styles

### Cards
```
bg-[#0d1526] border border-gray-700/50 rounded-xl p-6
hover:border-[#f5a623]/40 transition-all duration-300
```

### Buttons (Primary)
```
bg-[#f5a623] text-black font-bold px-6 py-3 rounded-lg
hover:bg-[#e09415] transition-colors duration-200
```

### Buttons (Secondary/Outline)
```
border border-[#f5a623] text-[#f5a623] font-semibold px-6 py-3 rounded-lg
hover:bg-[#f5a623]/10 transition-colors duration-200
```

### Badges
```
bg-[#f5a623]/20 text-[#f5a623] text-xs font-semibold px-3 py-1 rounded-full
```

### Live Badge
```
bg-[#e63946] text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse
```

### Navigation
```
bg-[#0a0e1a]/95 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50
```

## Visual Effects

### Gradients
- Hero gradient: `bg-gradient-to-br from-[#0a0e1a] via-[#0d1526] to-[#1a0a2e]`
- Gold gradient text: `bg-gradient-to-r from-[#f5a623] to-[#ffd700] bg-clip-text text-transparent`
- Card hover glow: `shadow-lg shadow-[#f5a623]/10`

### Dividers
- `border-t border-gray-800`

## Do's
- Always use dark backgrounds with light text
- Use golden yellow (#f5a623) as the primary accent consistently
- Add hover states to all interactive elements
- Use rounded-xl for cards, rounded-lg for buttons
- Keep consistent padding within sections
- Use grid layouts for team/match cards (2-4 columns on desktop)

## Don'ts
- Never use white backgrounds
- Never use low-contrast text (e.g., gray-600 on dark bg)
- Don't mix too many accent colors in one section
- Avoid overly complex animations that hurt performance
