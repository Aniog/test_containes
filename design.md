# MicroCosmos Design System

## Concept
A dark, immersive science/nature website exploring the microscopic world. Deep space-like backgrounds with vivid accent colors inspired by bioluminescence and microscopy imagery.

## Color Palette
- Background (deep): `#050a0f` — near-black deep ocean/space
- Background (surface): `#0a1628` — dark navy
- Background (card): `#0d1f35` — slightly lighter navy
- Accent primary: `#00d4ff` — electric cyan (bioluminescent)
- Accent secondary: `#7c3aed` — deep violet
- Accent tertiary: `#10b981` — emerald green
- Accent warm: `#f59e0b` — amber/gold
- Text primary: `#f0f9ff` — near-white
- Text secondary: `#94a3b8` — muted slate
- Text muted: `#475569` — dimmer slate
- Border: `rgba(0, 212, 255, 0.15)` — subtle cyan border

Tailwind config additions:
- `cosmos-deep`: `#050a0f`
- `cosmos-navy`: `#0a1628`
- `cosmos-card`: `#0d1f35`
- `cosmos-cyan`: `#00d4ff`
- `cosmos-violet`: `#7c3aed`
- `cosmos-emerald`: `#10b981`
- `cosmos-amber`: `#f59e0b`

## Typography
- Font: **Inter** (loaded via Google Fonts in index.html)
- Hero heading: `text-5xl md:text-7xl font-black tracking-tight text-white`
- Section heading: `text-3xl md:text-4xl font-bold text-white`
- Card title: `text-xl font-semibold text-white`
- Body: `text-base text-slate-300 leading-relaxed`
- Caption/label: `text-sm text-slate-400 uppercase tracking-widest`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section padding: `py-20 md:py-28`
- Card gap: `gap-6 md:gap-8`
- Border radius: `rounded-2xl` for cards, `rounded-full` for pills/badges

## Component Styles

### Navigation
- Fixed top, `backdrop-blur-md bg-cosmos-deep/80 border-b border-cosmos-cyan/10`
- Logo: cyan accent text, bold
- Links: `text-slate-300 hover:text-cosmos-cyan transition-colors`

### Hero Section
- Full-viewport height, centered content
- Background: dark gradient with subtle radial glow in cyan/violet
- Headline with gradient text: `bg-gradient-to-r from-cosmos-cyan to-cosmos-violet bg-clip-text text-transparent`

### Image Cards
- `bg-cosmos-card border border-cosmos-cyan/10 rounded-2xl overflow-hidden`
- Hover: `hover:border-cosmos-cyan/40 hover:shadow-lg hover:shadow-cosmos-cyan/10 transition-all`
- Image aspect ratio: `aspect-[4/3]` or `aspect-square`

### Section Dividers
- Subtle gradient lines: `h-px bg-gradient-to-r from-transparent via-cosmos-cyan/30 to-transparent`

### Badges/Tags
- `bg-cosmos-cyan/10 text-cosmos-cyan border border-cosmos-cyan/20 rounded-full px-3 py-1 text-xs font-medium`

### CTA Buttons
- Primary: `bg-cosmos-cyan text-cosmos-deep font-bold px-8 py-3 rounded-full hover:bg-white transition-colors`
- Secondary: `border border-cosmos-cyan/40 text-cosmos-cyan px-8 py-3 rounded-full hover:bg-cosmos-cyan/10 transition-colors`

## Do's
- Use dark backgrounds throughout — never white or light backgrounds
- Use cyan/violet glows and gradients for visual interest
- Images should be large and prominent
- Use grid layouts for image galleries (3-col on desktop, 1-2 col on mobile)
- Add subtle hover animations on cards

## Don'ts
- No light mode styling
- No flat, colorless sections
- No small or decorative-only images — every image should be meaningful and large
- No excessive text — let images do the talking
