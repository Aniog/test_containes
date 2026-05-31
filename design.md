# Design System — Abyssia: The Hidden Ocean Civilization

## Concept
A dark, immersive, bioluminescent aesthetic evoking the deep ocean. The palette draws from the midnight zone — deep navy, teal, cyan, and glowing aqua accents. Typography is elegant and futuristic. Layouts use generous spacing with subtle glowing borders and translucent glass-morphism cards.

## Color Palette

| Name | Hex | Tailwind Custom |
|---|---|---|
| Abyss Black | #020b18 | `abyss` |
| Deep Navy | #041428 | `deep-navy` |
| Ocean Dark | #061e3a | `ocean-dark` |
| Midnight Blue | #0a2d52 | `midnight` |
| Teal Deep | #0d4f6e | `teal-deep` |
| Bioluminescent Cyan | #00d4ff | `bio-cyan` |
| Glow Aqua | #00ffcc | `glow-aqua` |
| Soft Teal | #4dd9c0 | `soft-teal` |
| Pearl White | #e8f4f8 | `pearl` |
| Muted Slate | #7ba3b8 | `muted-slate` |

## Typography

- **Display / Hero**: `font-display` — Cinzel (Google Fonts), uppercase, wide letter-spacing. Used for civilization name, section titles.
- **Headings**: `font-heading` — Raleway, semi-bold, slightly tracked.
- **Body**: `font-sans` — Inter, regular weight, comfortable line-height.
- **Accent / Labels**: Raleway, uppercase, small, tracked wide.

## Borders & Glows

- Cards: `border border-bio-cyan/20 bg-ocean-dark/60 backdrop-blur-md`
- Glow effects: `shadow-[0_0_30px_rgba(0,212,255,0.15)]`
- Dividers: `border-bio-cyan/10`
- Hover glow: `hover:shadow-[0_0_40px_rgba(0,212,255,0.3)]`

## Spacing

- Section padding: `py-24 px-6 md:px-12 lg:px-24`
- Card padding: `p-6 md:p-8`
- Gap between grid items: `gap-6 md:gap-8`

## Component Patterns

### Section Header
```jsx
<div className="text-center mb-16">
  <span className="text-bio-cyan uppercase tracking-widest text-sm font-semibold">Label</span>
  <h2 className="font-display text-4xl md:text-5xl text-pearl mt-3">Title</h2>
  <p className="text-muted-slate mt-4 max-w-2xl mx-auto">Description</p>
</div>
```

### Glass Card
```jsx
<div className="border border-bio-cyan/20 bg-ocean-dark/60 backdrop-blur-md rounded-2xl p-6 hover:shadow-[0_0_40px_rgba(0,212,255,0.2)] transition-all duration-300">
```

### Glow Button
```jsx
<button className="bg-bio-cyan text-abyss font-semibold px-8 py-3 rounded-full hover:bg-glow-aqua transition-colors duration-300 shadow-[0_0_20px_rgba(0,212,255,0.4)]">
```

## Do's
- Use dark backgrounds exclusively (abyss, deep-navy, ocean-dark)
- Use bio-cyan and glow-aqua for all accent elements, icons, borders
- Use pearl for primary text on dark backgrounds
- Use muted-slate for secondary/body text
- Apply backdrop-blur on cards for depth
- Use subtle animated gradients for hero sections

## Don'ts
- Never use white backgrounds
- Never use black text on dark backgrounds
- Avoid harsh, high-saturation colors outside the palette
- Don't use flat, non-glowing UI elements for key components
- Avoid dense, cramped layouts — breathe with generous padding
