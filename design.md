# MicroCosmos Design System

## Theme
A dark, immersive scientific aesthetic inspired by microscopy and the hidden world of microorganisms. Deep space-like backgrounds with glowing teal/cyan accents evoke the feeling of peering through a microscope lens.

## Colors

### Background Palette
- Deep black: `#050810` — page background (`bg-[#050810]`)
- Deep navy: `#0d1b2a` — section backgrounds (`bg-[#0d1b2a]`)
- Dark card: `#0f1f30` — card backgrounds (`bg-[#0f1f30]`)
- Subtle border: `#1a3a4a` — borders (`border-[#1a3a4a]`)

### Accent Palette
- Teal primary: `#00c8c8` — primary accent (`text-[#00c8c8]`)
- Cyan bright: `#00f0ff` — highlights, glows (`text-[#00f0ff]`)
- Teal muted: `#007a7a` — secondary accents
- Amber warm: `#f59e0b` — warm highlights (`text-amber-400`)

### Text Palette
- White primary: `#f0f8ff` — headings (`text-[#f0f8ff]`)
- Light secondary: `#a8c8d8` — body text (`text-[#a8c8d8]`)
- Muted: `#5a7a8a` — captions, labels (`text-[#5a7a8a]`)

## Typography

### Fonts
- Headings: `font-display` (Playfair Display) — elegant, scientific
- Body: `font-sans` (Inter) — clean, readable

### Scale
- Hero title: `text-6xl md:text-8xl font-display font-bold`
- Section title: `text-4xl md:text-5xl font-display font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base leading-relaxed`
- Caption: `text-sm text-[#5a7a8a]`

## Borders & Effects
- Card border: `border border-[#1a3a4a]`
- Glow effect: `shadow-[0_0_30px_rgba(0,200,200,0.15)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(0,200,200,0.3)]`
- Rounded cards: `rounded-2xl`
- Image overlay: gradient from transparent to `rgba(5,8,16,0.8)`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6`
- Inner card padding: `p-6`

## Do's
- Use dark backgrounds throughout — never white or light backgrounds
- Always pair teal/cyan accents with dark surfaces for contrast
- Use glowing borders and shadows to create depth
- Images should have subtle dark overlays to blend with the theme
- Use generous whitespace between sections

## Don'ts
- Never use white or light backgrounds
- Never use black text on dark backgrounds
- Avoid flat, unstyled cards — always add border + shadow
- Don't use more than 2 accent colors in one component
