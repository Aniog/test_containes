# Phyllotaxis — Design System

## Visual Identity
**Aesthetic:** Naturalist Minimalist  
**Concept:** Inspired by the mathematical beauty of plant growth patterns (phyllotaxis — the spiral arrangement of leaves, seeds, and petals).

---

## Color Palette

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Clay White | `#F5F0E8` | `bg-[#F5F0E8]` | Primary background |
| Warm White | `#FAF7F2` | `bg-[#FAF7F2]` | Card / surface background |
| Sage Green | `#7A9E7E` | `text-[#7A9E7E]` | Primary accent, links, highlights |
| Deep Sage | `#4A6741` | `text-[#4A6741]` | Headings, strong accents |
| Moss | `#3D5C3A` | `text-[#3D5C3A]` | Dark text on light backgrounds |
| Bark | `#8B7355` | `text-[#8B7355]` | Secondary text, dividers |
| Parchment | `#E8E0D0` | `bg-[#E8E0D0]` | Borders, dividers, subtle backgrounds |
| Charcoal | `#2C2C2C` | `text-[#2C2C2C]` | Body text |

**Do:** Use sage-green sparingly as an accent. Keep backgrounds in the clay-white family.  
**Don't:** Use pure white (#FFFFFF) or pure black (#000000). Avoid saturated colors.

---

## Typography

**Primary Font:** Cormorant Garamond (serif) — for headings and display text  
**Secondary Font:** Inter (sans-serif) — for body text, labels, navigation  
**Mono Font:** JetBrains Mono — for scientific names, taxonomy labels

### Scale
- Display: `text-6xl font-light tracking-tight` (Cormorant Garamond)
- H1: `text-5xl font-light` (Cormorant Garamond)
- H2: `text-3xl font-light` (Cormorant Garamond)
- H3: `text-xl font-medium` (Inter)
- Body: `text-base font-normal leading-relaxed` (Inter)
- Caption / Label: `text-xs tracking-widest uppercase` (Inter)
- Scientific: `text-sm italic` (Cormorant Garamond)

---

## Spacing & Layout

**Grid:** Based on golden-ratio proportions (1 : 1.618)  
**Base unit:** 8px  
**Content max-width:** 1440px  
**Gutters:** 24px (mobile), 48px (desktop)

### Golden Ratio Proportions
- Sidebar : Content = 38.2% : 61.8%
- Card aspect ratios: 1:1.618 (portrait), 1.618:1 (landscape)

---

## Borders & Dividers

- Dividers: `border-[#E8E0D0]` — 1px solid, very subtle
- Card borders: `border border-[#E8E0D0]`
- No box shadows — use borders and spacing instead
- Rounded corners: `rounded-none` for structural elements, `rounded-full` for circular crops only

---

## Animation & Motion

- Scroll-driven rotation: subtle `rotate` transforms (max ±8deg) tied to scroll position
- Transitions: `transition-all duration-700 ease-in-out`
- Modal open: scale from 0.9 to 1.0 with opacity fade
- Hover states: gentle opacity shift `hover:opacity-80`

---

## Component Patterns

### Navigation
- Minimal top bar, left-aligned wordmark in Cormorant Garamond
- Right-aligned nav links in Inter, small caps, letter-spaced
- No background — transparent over content, switches to clay-white on scroll

### Circular Image Crops
- Use SVG `<clipPath>` with `<circle>` for perfectly sharp edges
- Never use `border-radius: 50%` on `<img>` — use SVG masking
- Hover: scale 1.05 with cursor pointer

### Tags
- Pill-shaped: `rounded-full px-4 py-1 text-xs tracking-widest uppercase`
- Active: `bg-[#7A9E7E] text-[#FAF7F2]`
- Inactive: `bg-[#E8E0D0] text-[#8B7355]`

---

## Do's and Don'ts

**Do:**
- Use generous whitespace
- Let images breathe with large margins
- Use thin (1px) dividers
- Prefer light font weights for headings
- Use scientific/Latin names in italic serif

**Don't:**
- Use drop shadows or heavy borders
- Use bright or saturated colors
- Use bold headings (prefer light/regular weight)
- Crowd elements together
- Use more than 2 typefaces
