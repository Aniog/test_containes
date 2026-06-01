# MicroCosmos Design System

## Theme
Dark, scientific, immersive. Inspired by microscopy imagery — deep space-like backgrounds with vivid bioluminescent accent colors.

## Colors
- Background primary: `#050d1a` (near-black deep navy)
- Background secondary: `#0a1628` (dark navy)
- Background card: `#0f1f38` (dark blue-navy)
- Accent primary: `#00d4ff` (cyan/teal — like fluorescent microscopy)
- Accent secondary: `#7c3aed` (violet/purple)
- Accent tertiary: `#10b981` (emerald green — like bio specimens)
- Text primary: `#f0f9ff` (near-white, cool tint)
- Text secondary: `#94a3b8` (slate-400, muted)
- Text muted: `#475569` (slate-600)
- Border: `#1e3a5f` (dark blue border)

Add to Tailwind config as named colors:
```js
cosmos: {
  bg: '#050d1a',
  card: '#0f1f38',
  navy: '#0a1628',
  cyan: '#00d4ff',
  violet: '#7c3aed',
  emerald: '#10b981',
  border: '#1e3a5f',
}
```

## Typography
- Font: Inter (Google Fonts, already loaded)
- Hero title: `text-6xl md:text-8xl font-black tracking-tight`
- Section title: `text-3xl md:text-4xl font-bold`
- Card title: `text-lg font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption/label: `text-sm font-medium tracking-widest uppercase`

## Spacing
- Section padding: `py-20 md:py-28 px-6 md:px-12`
- Card padding: `p-5 md:p-6`
- Grid gap: `gap-4 md:gap-6`

## Borders & Radius
- Card radius: `rounded-2xl`
- Image radius: `rounded-xl`
- Badge radius: `rounded-full`
- Border: `border border-cosmos-border`

## Shadows & Effects
- Card glow: `shadow-lg shadow-cosmos-cyan/10`
- Hover scale: `hover:scale-105 transition-transform duration-300`
- Image overlay gradient: `bg-gradient-to-t from-cosmos-bg/80 to-transparent`

## Do's
- Use dark backgrounds throughout — never white or light backgrounds
- Use cyan/teal as the primary accent for headings and highlights
- Use violet as secondary accent for badges and tags
- Use emerald for success states and nature-related labels
- Images should be plentiful — every section should have at least one image
- Use subtle glowing borders on cards (`border-cosmos-cyan/20`)
- Use `tracking-widest uppercase text-sm` for section labels/eyebrows

## Don'ts
- Don't use white backgrounds
- Don't use warm colors (orange, red, yellow) as primary accents
- Don't use light text on light backgrounds
- Don't use more than 3 accent colors in one section
- Don't use magic hex values — always use named Tailwind colors
