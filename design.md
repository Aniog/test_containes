# MicroCosmos Design System

## Concept
An immersive, visually rich website exploring the microscopic world. The design evokes the mysterious, beautiful, and alien nature of life at the micro scale — deep dark backgrounds with vivid bioluminescent accent colors.

## Color Palette

### Background Colors
- Deep navy (primary bg): `bg-cosmos-950` → `#050a14`
- Dark navy (section bg): `bg-cosmos-900` → `#0a1628`
- Card bg: `bg-cosmos-800` → `#0f2040`
- Subtle border: `border-cosmos-700` → `#1a3a5c`

### Accent Colors
- Cyan (primary accent): `text-cyan-400` / `bg-cyan-400` → `#22d3ee`
- Teal (secondary accent): `text-teal-400` / `bg-teal-400` → `#2dd4bf`
- Purple (tertiary accent): `text-violet-400` / `bg-violet-400` → `#a78bfa`
- Amber (highlight): `text-amber-400` → `#fbbf24`

### Text Colors
- Primary text: `text-white`
- Secondary text: `text-slate-300`
- Muted text: `text-slate-400`
- Accent text: `text-cyan-400`

## Typography

### Font Family
- Headings: `font-display` → "Playfair Display" (serif, elegant)
- Body: `font-sans` → "Inter" (clean, readable)

### Scale
- Hero title: `text-6xl md:text-8xl font-display font-bold`
- Section title: `text-4xl md:text-5xl font-display font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base text-slate-300`
- Caption: `text-sm text-slate-400`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Shadows
- Card border: `border border-cosmos-700`
- Card radius: `rounded-2xl`
- Glow effect: `shadow-[0_0_30px_rgba(34,211,238,0.15)]`
- Image overlay: gradient from transparent to cosmos-900

## Component Patterns

### Section Header
```
<h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-4">
  Section <span class="text-cyan-400">Title</span>
</h2>
<p class="text-slate-400 text-lg max-w-2xl mx-auto">Subtitle text</p>
```

### Image Card
- Aspect ratio: `aspect-[4/3]` or `aspect-square`
- Overflow hidden with rounded corners
- Hover: scale image slightly `group-hover:scale-105 transition-transform duration-500`
- Overlay gradient on hover

### Buttons
- Primary: `bg-cyan-400 text-cosmos-950 font-semibold px-6 py-3 rounded-full hover:bg-cyan-300`
- Outline: `border border-cyan-400 text-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-400/10`

## Do's
- Use dark backgrounds throughout — never white or light gray
- Use cyan/teal as the primary accent for interactive elements
- Images should be large and prominent — this is an image-first site
- Use subtle glows and gradients to add depth
- Maintain generous whitespace between sections

## Don'ts
- Don't use light backgrounds
- Don't use small images — every image should be impactful
- Don't use more than 3 accent colors in one section
- Don't use harsh borders — prefer subtle or glowing borders
