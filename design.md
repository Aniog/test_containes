# Memory Archive — Design System

## Concept
A deep-space, cosmic aesthetic that evokes the weight of human memory preserved against the void of interstellar migration. Dark, atmospheric, with luminous accents that feel like stars and light fragments.

## Color Palette

### Backgrounds
- Deep space black: `#050810` (bg-[#050810])
- Dark navy: `#080d1a` (bg-[#080d1a])
- Card surface: `#0d1526` (bg-[#0d1526])
- Card hover: `#111d35` (bg-[#111d35])
- Subtle border: `rgba(255,255,255,0.07)` (border-white/[0.07])

### Accent Colors (named in tailwind.config.js)
- Nebula blue: `#4a9eff` — primary interactive, links, highlights
- Stellar gold: `#f5c842` — warm memory glow, featured items
- Aurora teal: `#2dd4bf` — emotion tags, secondary accent
- Cosmic rose: `#f472b6` — life event tags
- Void purple: `#a78bfa` — era tags

### Text
- Primary: `#e8edf5` — main body text
- Secondary: `#8899b4` — captions, metadata
- Muted: `#4a5568` — disabled, placeholder
- Accent: `#4a9eff` — links, interactive

## Typography

### Fonts
- Display: "Cinzel" (Google Fonts) — headings, titles, logo
- Body: "Inter" (Google Fonts) — body text, UI
- Mono: system monospace — coordinates, IDs

### Scale
- Hero title: `text-5xl md:text-7xl font-cinzel font-bold`
- Section title: `text-3xl md:text-4xl font-cinzel`
- Card title: `text-lg font-semibold`
- Body: `text-sm md:text-base`
- Caption: `text-xs text-[#8899b4]`

## Spacing
- Section padding: `py-20 md:py-32`
- Card padding: `p-5 md:p-6`
- Grid gap: `gap-4 md:gap-6`
- Container: `max-w-7xl mx-auto px-4 md:px-8`

## Borders & Shadows
- Card border: `border border-white/[0.07]`
- Card shadow: `shadow-[0_4px_32px_rgba(74,158,255,0.06)]`
- Glow effect: `shadow-[0_0_24px_rgba(74,158,255,0.3)]`
- Rounded: `rounded-xl` for cards, `rounded-full` for tags/badges

## Components

### Memory Card
- Dark card surface `#0d1526`
- Thin luminous border on hover
- Subtle blue glow on hover
- Era badge (purple), emotion badge (teal), life event badge (rose)

### Filter Tags
- Pill shape, `rounded-full`
- Inactive: `bg-white/5 text-[#8899b4] border border-white/10`
- Active: colored background matching category

### Navigation
- Transparent with blur backdrop
- Logo in Cinzel font
- Links in Inter, muted → white on hover

## Animations
- Constellation: canvas-based, particles connected by lines, slow drift
- Fade-in on scroll: `opacity-0 → opacity-100` with `translateY(20px → 0)`
- Card hover: subtle scale `1 → 1.02`, border glow
- Tag hover: brightness increase

## Do's
- Use deep space backgrounds exclusively
- Layer subtle gradients for depth
- Use luminous glows sparingly for emphasis
- Keep text contrast high (WCAG AA minimum)
- Animate subtly — this is solemn, not playful

## Don'ts
- No white or light backgrounds
- No bright saturated colors without dark context
- No heavy drop shadows that look "material"
- No Comic Sans or decorative fonts other than Cinzel for display
