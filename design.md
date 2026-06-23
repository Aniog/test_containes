# MicroCosmos Design System

## Concept
A dark, immersive website exploring the microscopic world. The visual style evokes the feeling of peering through a microscope into an alien, beautiful universe — deep blacks, glowing teals, electric blues, and soft purples.

## Colors
- Background primary: `#0a0a0a` (near-black) — `bg-cosmos-dark`
- Background secondary: `#111111` (dark gray) — `bg-cosmos-navy`
- Background card: `#1a1a1a` (dark card) — `bg-cosmos-card`
- Accent white: `#ffffff` — `text-cosmos-teal`, `bg-cosmos-teal`
- Accent light gray: `#e2e8f0` — `text-cosmos-cyan`
- Accent medium gray: `#94a3b8` — `text-cosmos-purple`
- Accent glow: `#ffffff` — `text-cosmos-glow`
- Text primary: `#f8fafc` (near white) — `text-cosmos-text`
- Text muted: `#64748b` — `text-cosmos-muted`
- Border: `#2d2d2d` — `border-cosmos-border`

## Typography
- Headings: `font-display` → "Playfair Display", serif — elegant, scientific
- Body: `font-sans` → "Inter", sans-serif — clean, readable
- Accent labels: uppercase, wide letter-spacing (`tracking-widest`)

### Scale
- Hero title: `text-6xl md:text-8xl font-display font-bold`
- Section title: `text-4xl md:text-5xl font-display font-semibold`
- Card title: `text-xl font-display font-semibold`
- Body: `text-base font-sans leading-relaxed`
- Label/tag: `text-xs uppercase tracking-widest font-sans font-semibold`

## Spacing
- Section padding: `py-20 md:py-28 px-6 md:px-12`
- Card padding: `p-6`
- Grid gap: `gap-6` or `gap-8`

## Borders & Shadows
- Card border: `border border-cosmos-border`
- Card radius: `rounded-2xl`
- Glow effect: `shadow-[0_0_30px_rgba(0,212,200,0.15)]`
- Image overlay: dark gradient overlay on images for text legibility

## Do's
- Use dark backgrounds throughout — never white or light gray
- Use teal/cyan as the primary accent color for highlights, borders, and CTAs
- Use subtle glowing effects on key elements
- Images should be large and prominent — this is a visual-first site
- Use grid layouts with varied sizes for visual interest
- Add subtle gradient overlays on images

## Don'ts
- No white or light backgrounds
- No flat, unstyled cards
- No small, cramped images
- No bright red or orange accents
- Don't use default Tailwind gray palette for backgrounds
