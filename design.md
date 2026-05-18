# MicroCosmos Design System

## Theme
Dark, immersive scientific aesthetic inspired by the microscopic world. Deep space-like backgrounds with vibrant teal/cyan accents evoking bioluminescence and cellular structures.

## Colors
- Background primary: `#050d1a` (deep navy black)
- Background secondary: `#0a1628` (dark navy)
- Background card: `#0f1f35` (navy card)
- Accent primary: `#00d4c8` (teal/cyan) — `text-teal-400`, `bg-teal-400`
- Accent secondary: `#7c3aed` (violet) — `text-violet-500`, `bg-violet-500`
- Accent glow: `#00ffea` (bright cyan glow)
- Text primary: `#f0f9ff` (near white) — `text-slate-50`
- Text secondary: `#94a3b8` (muted slate) — `text-slate-400`
- Text muted: `#475569` — `text-slate-600`
- Border: `rgba(0, 212, 200, 0.15)` — `border-teal-400/20`

## Typography
- Font family: Inter (Google Fonts)
- Display headings: `font-bold tracking-tight` — sizes `text-5xl` to `text-7xl`
- Section headings: `font-semibold` — `text-3xl` to `text-4xl`
- Body: `text-base` or `text-lg`, `leading-relaxed`
- Labels/captions: `text-sm font-medium tracking-widest uppercase`
- Accent label: `text-teal-400 text-xs tracking-widest uppercase font-semibold`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card padding: `p-6` or `p-8`
- Gap between grid items: `gap-6` or `gap-8`

## Borders & Shadows
- Card border: `border border-teal-400/20 rounded-2xl`
- Glow effect: `shadow-[0_0_30px_rgba(0,212,200,0.15)]`
- Image overlay: gradient from transparent to `#050d1a`

## Images
- Hero background: full-screen, 16x9, dark overlay
- Gallery grid: 4x3 ratio, 600px wide
- Specimen cards: 1x1 ratio, 400px wide
- Technique images: 3x2 ratio, 500px wide
- Section backgrounds: 16x9, 1400px wide

## Do's
- Use teal/cyan glows on hover states
- Use `backdrop-blur` for glass-morphism cards
- Use gradient text for main headings: `bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent`
- Overlay dark gradients on background images for text readability
- Use `rounded-2xl` or `rounded-3xl` for cards and images

## Don'ts
- Never use white backgrounds
- Never use light text on light backgrounds
- Don't use harsh pure white (#ffffff) for body text — use `text-slate-50` or `text-slate-200`
- Don't use small font sizes below `text-sm` for body content
