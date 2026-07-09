# MicroCosmos Design System

## Concept
A dark, immersive website exploring the microscopic world — bacteria, cells, fungi, insects, water droplets, and other tiny life forms. The aesthetic is scientific yet beautiful, evoking wonder and discovery.

## Color Palette
- Background (deep dark): `#050a0f` → Tailwind: `bg-[#050a0f]`
- Surface (dark card): `#0d1a24` → Tailwind: `bg-[#0d1a24]`
- Surface elevated: `#112233` → Tailwind: `bg-[#112233]`
- Primary accent (teal/cyan): `#00d4c8` → Tailwind: `text-[#00d4c8]`, `border-[#00d4c8]`
- Secondary accent (violet): `#7c3aed` → Tailwind: `text-violet-600`
- Highlight (amber/gold): `#f59e0b` → Tailwind: `text-amber-400`
- Text primary: `#e2f0f9` → Tailwind: `text-[#e2f0f9]`
- Text secondary: `#7fa8c4` → Tailwind: `text-[#7fa8c4]`
- Text muted: `#4a7a9b` → Tailwind: `text-[#4a7a9b]`
- Border subtle: `rgba(0,212,200,0.15)` → Tailwind: `border-[#00d4c8]/15`

## Typography
- Font: Inter (Google Fonts, already loaded in index.html)
- Display headings: `font-bold tracking-tight`
- Section titles: `text-3xl md:text-5xl font-bold`
- Card titles: `text-xl font-semibold`
- Body: `text-base leading-relaxed`
- Caption/label: `text-sm font-medium tracking-widest uppercase`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section padding: `py-20 md:py-28`
- Card gap: `gap-6 md:gap-8`
- Border radius: `rounded-2xl` for cards, `rounded-full` for badges

## Component Styles

### Cards
```
bg-[#0d1a24] border border-[#00d4c8]/15 rounded-2xl overflow-hidden
hover:border-[#00d4c8]/40 transition-all duration-300
```

### Buttons (Primary)
```
bg-[#00d4c8] text-[#050a0f] font-semibold px-6 py-3 rounded-full
hover:bg-[#00b8ad] transition-colors duration-200
```

### Buttons (Outline)
```
border border-[#00d4c8] text-[#00d4c8] px-6 py-3 rounded-full
hover:bg-[#00d4c8]/10 transition-colors duration-200
```

### Section Labels
```
text-[#00d4c8] text-sm font-medium tracking-widest uppercase mb-3
```

### Gradient Text
```
bg-gradient-to-r from-[#00d4c8] to-violet-400 bg-clip-text text-transparent
```

## Do's
- Use dark backgrounds throughout; never white or light backgrounds
- Use teal/cyan as the primary accent for interactive elements and highlights
- Use generous whitespace between sections
- Images should be large and prominent
- Use subtle glowing borders on hover states
- Overlay text on images with dark gradient overlays for readability

## Don'ts
- No light mode styling
- No bright white backgrounds
- No small, cramped image grids
- No generic sans-serif fallback fonts without Inter
- No hardcoded hex colors outside of the palette above
