# Serengeti Pulse — Design System

## Visual Identity
"Warm Earth" aesthetic inspired by the African savanna.

## Color Palette
- **Burnt Orange**: `#C2541A` — primary accent, CTAs, highlights
- **Deep Ochre**: `#B8860B` — secondary accent, borders, warm tones
- **Acacia Green**: `#4A5E3A` — nature accent, subtle backgrounds
- **Savanna Sand**: `#E8D5A3` — light background, card surfaces
- **Dusk Brown**: `#3D2B1F` — dark text, deep backgrounds
- **Ember**: `#E07B39` — hover states, warm glow
- **Ash**: `#F5EDD8` — near-white background
- **Charcoal Earth**: `#1C1208` — deepest dark

Tailwind custom names: `burnt-orange`, `deep-ochre`, `acacia-green`, `savanna-sand`, `dusk-brown`, `ember`, `ash`, `charcoal-earth`

## Typography
- **Display / Headings**: `Playfair Display` — tall, elegant serif. Use for all H1–H3.
- **Body**: `Lato` — clean, readable sans-serif for body text and UI labels.
- **Accent / Captions**: `Playfair Display` italic for pull quotes and captions.

### Scale
- Hero title: `text-7xl` / `text-8xl` (Playfair Display, font-bold)
- Section title: `text-4xl` / `text-5xl` (Playfair Display)
- Card title: `text-xl` / `text-2xl` (Playfair Display)
- Body: `text-base` / `text-lg` (Lato)
- Caption: `text-sm` italic (Playfair Display)

## Spacing
- Section padding: `py-20 px-8` or `py-24 px-12`
- Card gap: `gap-6` or `gap-8`
- Max content width: `max-w-7xl mx-auto`

## Borders & Shadows
- Subtle card border: `border border-savanna-sand/40`
- Warm shadow: `shadow-[0_4px_24px_rgba(194,84,26,0.15)]`
- Hover glow: `shadow-[0_8px_40px_rgba(194,84,26,0.3)]`

## Do's
- Use Playfair Display for all display text
- Layer warm overlays (burnt-orange/20) on hero images
- Use parallax and slow scroll animations for depth
- Maintain high contrast: light text on dark backgrounds, dark text on sand

## Don'ts
- No cool blues or grays as primary colors
- No flat, purely white backgrounds — always tinted warm
- No tight, cramped layouts — embrace open, breathing space
