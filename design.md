# Aether Cities Design System

## Brand Identity
Aether Cities is a luxury real estate brand for floating sky cities. The visual language is cinematic, futuristic, and aspirational — blending high-end real estate aesthetics with science fiction worldbuilding.

## Color Palette

### Primary Colors
- Deep Space Navy: `#050A1A` — primary background
- Midnight Blue: `#0A1628` — card backgrounds
- Aether Blue: `#0D2545` — elevated surfaces

### Accent Colors
- Sky Gold: `#C9A84C` — primary accent, CTAs, highlights
- Pale Gold: `#E8D5A3` — secondary gold, text accents
- Cloud White: `#F0F4FF` — primary text on dark
- Mist: `#A8B8D8` — secondary text, muted content

### Gradient Colors
- Aurora: `from-[#0D2545] via-[#1A3A6B] to-[#0A1628]`
- Sky Gradient: `from-[#050A1A] via-[#0D2545] to-[#1A3A6B]`
- Gold Shimmer: `from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C]`

### City Accent Colors
- Solara (warm): `#F4A261` — amber/orange
- Nimbus (cool): `#48CAE4` — cyan/teal
- Verdania (green): `#52B788` — emerald
- Crystallis (purple): `#9B72CF` — violet
- Tempestia (red): `#E63946` — crimson

## Typography

### Fonts
- Display: Cormorant Garamond (serif) — headings, hero text
- Body: Inter (sans-serif) — body text, UI elements
- Mono: JetBrains Mono — data, coordinates, technical specs

### Scale
- Hero: `text-7xl lg:text-9xl` — Cormorant Garamond, font-light
- H1: `text-5xl lg:text-7xl` — Cormorant Garamond, font-light
- H2: `text-3xl lg:text-5xl` — Cormorant Garamond, font-light
- H3: `text-xl lg:text-2xl` — Inter, font-semibold
- Body: `text-base` — Inter, font-normal
- Caption: `text-sm` — Inter, font-normal, text-mist
- Label: `text-xs uppercase tracking-widest` — Inter, font-medium

## Spacing
- Section padding: `py-24 lg:py-32`
- Container: `max-w-7xl mx-auto px-6 lg:px-12`
- Card padding: `p-6 lg:p-8`
- Gap between cards: `gap-6 lg:gap-8`

## Borders & Surfaces
- Card border: `border border-white/10`
- Hover border: `border-sky-gold/40`
- Glass card: `bg-white/5 backdrop-blur-md border border-white/10`
- Elevated card: `bg-[#0A1628] border border-white/10`

## Shadows & Glows
- Gold glow: `shadow-[0_0_30px_rgba(201,168,76,0.3)]`
- Blue glow: `shadow-[0_0_40px_rgba(13,37,69,0.8)]`
- Card shadow: `shadow-2xl shadow-black/50`

## Motion & Animation
- Smooth transitions: `transition-all duration-300 ease-out`
- Hover scale: `hover:scale-105`
- Cloud drift: custom CSS keyframe animation, slow horizontal movement
- Fade in up: custom CSS keyframe, opacity 0→1, translateY 20px→0
- Parallax: subtle background-position shift on scroll

## Buttons
- Primary: `bg-gradient-to-r from-[#C9A84C] to-[#E8D5A3] text-[#050A1A] font-semibold px-8 py-3 rounded-full hover:shadow-[0_0_30px_rgba(201,168,76,0.5)]`
- Secondary: `border border-[#C9A84C]/60 text-[#C9A84C] px-8 py-3 rounded-full hover:bg-[#C9A84C]/10`
- Ghost: `text-cloud-white/70 hover:text-cloud-white px-4 py-2`

## Do's
- Use generous whitespace to convey luxury
- Layer translucent glass cards over dark backgrounds
- Use gold accents sparingly for maximum impact
- Animate clouds and atmospheric elements subtly
- Use serif fonts for emotional, aspirational copy
- Use data visualizations with glowing chart lines

## Don'ts
- Never use pure white backgrounds
- Never use harsh, flat colors
- Avoid cluttered layouts — less is more
- Don't use standard blue links — use gold accents
- Never show text with poor contrast on dark backgrounds
