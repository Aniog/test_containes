# MicroCosmos Design System

## Concept
A dark, immersive aesthetic inspired by microscopy imagery — deep space-like backgrounds with bioluminescent cyan and teal accents, evoking the otherworldly beauty of the microscopic world.

## Colors

### Backgrounds
- Page background: `#030b18` (deep navy-black) — `bg-[#030b18]`
- Section alternate: `#060f20` — `bg-[#060f20]`
- Card surface: `#0a1628` — `bg-[#0a1628]`
- Card border: `rgba(0,212,255,0.15)` — `border-cyan-500/20`

### Accent Colors
- Primary cyan: `#00d4ff` — `text-cyan-400`, `bg-cyan-400`
- Teal: `#14b8a6` — `text-teal-500`
- Emerald: `#10b981` — `text-emerald-400`
- Violet: `#8b5cf6` — `text-violet-400`

### Text
- Heading: `#f0f9ff` — `text-sky-50`
- Body: `#94a3b8` — `text-slate-400`
- Muted: `#475569` — `text-slate-600`
- Accent text: `#00d4ff` — `text-cyan-400`

## Typography

### Fonts
- Headings: "Space Grotesk" (Google Font) — bold, modern, scientific feel
- Body: "Inter" — clean, readable

### Scale
- Hero title: `text-6xl md:text-8xl font-bold`
- Section title: `text-4xl md:text-5xl font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base text-slate-400`
- Caption: `text-sm text-slate-500`

## Borders & Shadows
- Card border: `border border-cyan-500/20`
- Glow effect: `shadow-[0_0_30px_rgba(0,212,255,0.15)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(0,212,255,0.3)]`
- Rounded cards: `rounded-2xl`

## Spacing
- Section padding: `py-24 px-6`
- Card padding: `p-6` or `p-8`
- Grid gap: `gap-6` or `gap-8`

## Gradients
- Hero text gradient: `bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent`
- Section divider: `bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent`
- Card overlay: `bg-gradient-to-t from-[#030b18] to-transparent`

## Do's
- Use dark backgrounds exclusively — this is a dark-mode-only site
- Use cyan/teal glows on interactive elements
- Use subtle border highlights on cards
- Use gradient text for major headings
- Ensure all text has strong contrast against dark backgrounds

## Don'ts
- No light backgrounds
- No harsh white text on colored backgrounds
- No flat, unstyled cards — always add border + subtle shadow
- No generic stock-photo look — lean into the scientific/microscopic aesthetic
