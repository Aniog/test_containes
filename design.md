# MicroCosmos Design System

## Brand Identity
MicroCosmos is a science-meets-wonder website exploring the microscopic world — bacteria, fungi, plankton, cells, and tiny ecosystems. The visual language blends deep-ocean darkness with bioluminescent accents, evoking curiosity and awe.

## Color Palette
- **Background (deep):** `#050d1a` — near-black deep-sea blue
- **Background (surface):** `#0a1628` — dark navy
- **Background (card):** `#0f1f3d` — dark blue card surface
- **Background (elevated):** `#162444` — slightly lighter card
- **Accent primary (teal):** `#00d4aa` — bioluminescent teal/green
- **Accent secondary (violet):** `#7c3aed` — deep violet/purple
- **Accent glow (cyan):** `#06b6d4` — cyan highlight
- **Text primary:** `#f0f9ff` — near-white
- **Text secondary:** `#94a3b8` — muted slate
- **Text muted:** `#475569` — very muted
- **Border:** `#1e3a5f` — subtle dark border

Tailwind config custom colors:
```js
cosmos: {
  bg: '#050d1a',
  surface: '#0a1628',
  card: '#0f1f3d',
  elevated: '#162444',
  teal: '#00d4aa',
  violet: '#7c3aed',
  cyan: '#06b6d4',
  border: '#1e3a5f',
}
```

## Typography
- **Font:** Space Grotesk (headings) + Inter (body) — loaded via Google Fonts
- **Heading sizes:** `text-5xl` / `text-4xl` / `text-3xl` / `text-2xl` / `text-xl`
- **Body:** `text-base` / `text-sm`
- **Heading weight:** `font-bold` or `font-semibold`
- **Body weight:** `font-normal`
- **Letter spacing headings:** `tracking-tight`

## Spacing
- Section padding: `py-20 px-6` or `py-24 px-8`
- Card padding: `p-6` or `p-8`
- Gap between cards: `gap-6` or `gap-8`
- Max content width: `max-w-7xl mx-auto`

## Borders & Shadows
- Card border: `border border-[#1e3a5f]`
- Card radius: `rounded-2xl`
- Glow effect: `shadow-[0_0_30px_rgba(0,212,170,0.15)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(0,212,170,0.25)]`

## Component Patterns
- **Buttons primary:** `bg-[#00d4aa] text-[#050d1a] font-semibold rounded-full px-6 py-3 hover:bg-[#00bfa0] transition`
- **Buttons outline:** `border border-[#00d4aa] text-[#00d4aa] rounded-full px-6 py-3 hover:bg-[#00d4aa]/10 transition`
- **Badge:** `bg-[#00d4aa]/10 text-[#00d4aa] text-xs font-semibold px-3 py-1 rounded-full`
- **Section label:** small uppercase teal text above headings: `text-[#00d4aa] text-sm font-semibold uppercase tracking-widest`

## Do's
- Use dark backgrounds throughout — this is a dark-theme site
- Use teal (#00d4aa) as the primary accent for CTAs, highlights, and icons
- Use subtle glows and gradients to evoke bioluminescence
- Use `text-[#f0f9ff]` for all primary text on dark backgrounds
- Use `text-[#94a3b8]` for secondary/body text
- Use rounded-2xl for cards, rounded-full for pills/badges

## Don'ts
- Never use white backgrounds
- Never use dark text on dark backgrounds
- Don't use harsh pure-white (#ffffff) for body text — use #f0f9ff
- Don't use too many accent colors — stick to teal + violet + cyan
- Don't use small font sizes below text-sm for body content
