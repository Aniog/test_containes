# MicroCosmos Design System

## Brand Identity
MicroCosmos is a visually rich, science-inspired single-page website exploring the microscopic world. The design evokes the feeling of peering through a microscope — dark, mysterious, and full of wonder.

## Color Palette

### Primary Colors
- Background (deep dark): `#050a14` — `bg-[#050a14]`
- Surface (card/section): `#0d1a2e` — `bg-[#0d1a2e]`
- Surface elevated: `#112240` — `bg-[#112240]`

### Accent Colors
- Teal primary: `#00d4aa` — `text-[#00d4aa]`, `border-[#00d4aa]`
- Teal glow: `#00ffcc` — used for highlights
- Purple accent: `#7c3aed` — `bg-purple-700`
- Cyan light: `#67e8f9` — `text-cyan-300`

### Text Colors
- Primary text: `#f0f4f8` — `text-[#f0f4f8]`
- Secondary text: `#94a3b8` — `text-slate-400`
- Muted text: `#64748b` — `text-slate-500`
- Accent text: `#00d4aa` — `text-[#00d4aa]`

## Typography

### Font Family
- Primary: `Inter` (loaded via Google Fonts)
- Monospace accents: `font-mono` for scientific labels

### Scale
- Hero title: `text-5xl md:text-7xl font-black tracking-tight`
- Section title: `text-3xl md:text-4xl font-bold`
- Card title: `text-lg md:text-xl font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption/label: `text-sm font-medium tracking-widest uppercase`
- Micro label: `text-xs font-mono`

## Spacing & Layout
- Section padding: `py-20 md:py-28 px-4 md:px-8`
- Container max-width: `max-w-7xl mx-auto`
- Card gap: `gap-4 md:gap-6`
- Section gap: `gap-12 md:gap-16`

## Borders & Radius
- Card radius: `rounded-2xl`
- Badge radius: `rounded-full`
- Image radius: `rounded-xl`
- Border color: `border-[#00d4aa]/20` or `border-slate-700/50`

## Shadows & Effects
- Card glow: `shadow-lg shadow-[#00d4aa]/10`
- Hover glow: `hover:shadow-xl hover:shadow-[#00d4aa]/20`
- Image overlay: `bg-gradient-to-t from-[#050a14] via-transparent to-transparent`

## Component Patterns

### Section Label (eyebrow text)
```
<span className="text-xs font-mono tracking-widest uppercase text-[#00d4aa]">
  — Category Label —
</span>
```

### Image Cards
- Aspect ratio: `aspect-[4/3]` or `aspect-square`
- Overflow hidden with rounded corners
- Hover scale: `hover:scale-105 transition-transform duration-500`
- Overlay gradient on bottom for text legibility

### Buttons
- Primary: `bg-[#00d4aa] text-[#050a14] font-semibold px-6 py-3 rounded-full hover:bg-[#00ffcc] transition-colors`
- Outline: `border border-[#00d4aa]/50 text-[#00d4aa] px-6 py-3 rounded-full hover:bg-[#00d4aa]/10 transition-colors`

## Do's
- Use dark backgrounds throughout — never white or light backgrounds
- Use teal (#00d4aa) as the primary accent consistently
- Add subtle glow effects on hover for interactive elements
- Use uppercase tracking-widest for section labels/eyebrows
- Use `font-mono` for scientific/technical labels
- Keep image grids dense and varied in size for visual richness

## Don'ts
- Don't use white or very light backgrounds
- Don't use warm colors (orange, red, yellow) as primary accents
- Don't use flat, unstyled cards — always add subtle borders or glows
- Don't use small font sizes for body text (minimum `text-sm`)
- Don't use low-contrast text on dark backgrounds
