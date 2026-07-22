# MicroCosmos Design System

## Concept
A dark, immersive scientific aesthetic inspired by microscopy and the hidden world of microorganisms. Deep navy and teal tones evoke bioluminescence and deep-sea imagery.

## Color Palette
- Background (deep dark): `#050d1a` — `bg-[#050d1a]`
- Surface (dark navy): `#0a1628` — `bg-[#0a1628]`
- Card surface: `#0f1f38` — `bg-[#0f1f38]`
- Accent teal: `#00d4c8` — `text-[#00d4c8]`, `border-[#00d4c8]`
- Accent cyan glow: `#00b8ff` — `text-[#00b8ff]`
- Accent purple: `#7c3aed` — `text-purple-600`
- Primary text: `#e8f4f8` — `text-[#e8f4f8]`
- Secondary text: `#8ab4c8` — `text-[#8ab4c8]`
- Muted text: `#4a7a94` — `text-[#4a7a94]`
- Highlight border: `rgba(0,212,200,0.3)` — `border-[#00d4c8]/30`

## Typography
- Font family: Inter (loaded via Google Fonts)
- Hero heading: `text-5xl md:text-7xl font-black tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption/label: `text-sm font-medium tracking-widest uppercase`

## Spacing & Layout
- Page max width: `max-w-7xl mx-auto`
- Section padding: `py-20 px-6 md:px-12`
- Card padding: `p-6`
- Grid gaps: `gap-6` or `gap-8`

## Borders & Shadows
- Card border: `border border-[#00d4c8]/20 rounded-2xl`
- Glow effect: `shadow-[0_0_30px_rgba(0,212,200,0.15)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(0,212,200,0.3)]`
- Divider: `border-t border-[#00d4c8]/10`

## Image Style
- All images use the `data-strk-img` stock image system
- Images have rounded corners: `rounded-xl` or `rounded-2xl`
- Images use `object-cover` with defined aspect ratios
- Subtle overlay on images: `bg-gradient-to-t from-[#050d1a]/60 to-transparent`

## Component Patterns
- Pill badge: `px-3 py-1 rounded-full text-xs font-semibold bg-[#00d4c8]/10 text-[#00d4c8] border border-[#00d4c8]/30`
- Section label: `text-[#00d4c8] text-sm font-semibold tracking-widest uppercase mb-3`
- CTA button: `px-8 py-3 rounded-full bg-[#00d4c8] text-[#050d1a] font-bold hover:bg-[#00b8ff] transition-colors`
- Ghost button: `px-8 py-3 rounded-full border border-[#00d4c8]/50 text-[#00d4c8] hover:bg-[#00d4c8]/10 transition-colors`

## Do's
- Use dark backgrounds throughout — never white or light gray
- Use teal/cyan as the primary accent color consistently
- Add subtle glow effects to cards and images on hover
- Use uppercase tracking-widest labels for section identifiers
- Ensure all text is clearly readable against dark backgrounds

## Don'ts
- Never use white backgrounds
- Never use black text on dark surfaces
- Avoid flat, unstyled cards — always add border and subtle shadow
- Don't use more than 2 accent colors per section
