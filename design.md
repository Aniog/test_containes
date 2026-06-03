# Design System — The Starry Night & Astronomy

## Philosophy
Japanese Minimalism meets deep-space aesthetics. Generous whitespace, deliberate typography, and a dark night-sky palette. Every element earns its place.

## Color Palette

### Backgrounds
- `bg-cosmos` → `#0B0F19` — deepest background, page base
- `bg-space` → `#111827` — card/section backgrounds
- `bg-nebula` → `#1a2035` — elevated surfaces, hover states
- `bg-overlay` → `rgba(11,15,25,0.75)` — image overlays

### Accents
- `accent-amber` → `#F59E0B` — primary CTA, highlights, stars
- `accent-indigo` → `#6366F1` — secondary accent, links
- `accent-cyan` → `#22D3EE` — data/science highlights
- `accent-rose` → `#F43F5E` — alerts, stellar phenomena

### Text
- `text-primary` → `#F9FAFB` — headings, primary content
- `text-secondary` → `#9CA3AF` — body text, captions
- `text-muted` → `#4B5563` — placeholders, disabled

### Borders
- `border-subtle` → `#1F2937` — card borders
- `border-glow` → `rgba(99,102,241,0.3)` — focus/hover glow

## Typography

### Font Family
- Primary: `Inter` (Google Fonts) — clean, scientific
- Mono: `JetBrains Mono` — data labels, coordinates

### Scale
- Hero heading: `text-5xl md:text-7xl font-light tracking-tight`
- Section heading: `text-3xl md:text-4xl font-light tracking-tight`
- Card heading: `text-xl font-medium`
- Body: `text-base font-normal leading-relaxed`
- Caption: `text-sm text-secondary`
- Label: `text-xs uppercase tracking-widest font-medium`

## Spacing
- Section padding: `py-24 px-6 md:px-12 lg:px-24`
- Card padding: `p-6 md:p-8`
- Gap between grid items: `gap-6 md:gap-8`

## Borders & Radius
- Cards: `rounded-2xl border border-[#1F2937]`
- Buttons: `rounded-full` or `rounded-xl`
- Images: `rounded-xl` or `rounded-2xl`

## Shadows & Glows
- Card hover: `shadow-[0_0_30px_rgba(99,102,241,0.15)]`
- Image glow: `shadow-[0_0_60px_rgba(99,102,241,0.2)]`
- Amber glow: `shadow-[0_0_20px_rgba(245,158,11,0.3)]`

## Component Patterns

### Section Layout
```
<section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0B0F19]">
  <div className="max-w-7xl mx-auto">
    <span className="text-xs uppercase tracking-widest text-amber-400">Label</span>
    <h2 className="text-4xl font-light text-white mt-2 mb-4">Heading</h2>
    <p className="text-gray-400 max-w-2xl">Description</p>
  </div>
</section>
```

### Split Layout (Image + Text)
```
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  <div className="rounded-2xl overflow-hidden">Image</div>
  <div className="space-y-4">Text content</div>
</div>
```

### Card
```
<div className="bg-[#111827] border border-[#1F2937] rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300">
```

## Do's
- Use `font-light` for large headings — feels scientific and elegant
- Use `tracking-widest` for labels and eyebrow text
- Use `leading-relaxed` for body text
- Pair every image with explanatory text
- Use subtle gradient overlays on images: `bg-gradient-to-t from-[#0B0F19] to-transparent`
- Animate with `transition-all duration-300`

## Don'ts
- No bright white backgrounds
- No heavy font weights for headings (avoid `font-bold` on large text)
- No more than 3 accent colors per section
- No tight line-height on body text
- No unstyled default browser elements
