# Ignition Dynamics — Design System

## Visual Identity
"Japanese Industrial Minimalism meets Hyper-Quant"
Ultra-clean, data-dense, monochrome UI with hyper-chromatic specimen images acting as glowing energy windows.

## Color Palette

### UI / Layout (Strictly Monochrome)
- Void Black: `#050505` → `bg-[#050505]`
- Deep Industrial: `#0a0a0a` → `bg-[#0a0a0a]`
- Surface Dark: `#121212` → `bg-[#121212]`
- Card Surface: `#1a1a1a` → `bg-[#1a1a1a]`
- Border Hairline: `#262626` → `border-[#262626]`
- Border Muted: `#1f1f1f` → `border-[#1f1f1f]`
- Text Primary: `#ffffff` → `text-white`
- Text Secondary: `#a3a3a3` → `text-neutral-400`
- Text Muted: `#525252` → `text-neutral-600`
- Text Accent: `#e5e5e5` → `text-neutral-200`

### Images / Visuals (Hyper-Chromatic — images only, never UI)
- Plasma Purple: glowing violet/indigo plasma cores
- Laser Cyan: electric cyan and emerald laser beams
- Solar Orange: incandescent tungsten and plasma exhaust
- Tritium Green: neon green particle traces
- Fusion Pink: searing pink plasma streams

## Typography
- Display: `font-mono` uppercase tracking-widest for headings and labels
- Body: `font-sans` for readable paragraphs
- Spec Data: `font-mono text-xs` for telemetry readouts
- Scale: Display 5xl–7xl, Section 3xl–4xl, Body base–lg

## Borders & Spacing
- Hairline borders: `border border-[#262626]`
- Section dividers: `border-t border-[#262626]`
- Generous padding: `px-8 py-16` or `px-12 py-24`
- Negative space is intentional — never crowd elements

## Components
- Cards: `bg-[#121212] border border-[#262626]` with generous padding
- Buttons: `border border-white text-white hover:bg-white hover:text-black` transition
- Tags/Badges: `font-mono text-xs uppercase tracking-widest text-neutral-500`
- Telemetry indicators: monospace, small, neutral-500 with dot separators

## Images
- All images are vibrant, colorful, luminous scientific visuals
- Images act as "glowing windows" inside the cold monochrome UI
- Use data-strk-img system for stock image population
- Images always have a subtle border: `border border-[#262626]`

## Do's
- Use massive whitespace to create tension and focus
- Use hairline 1px borders to define structure
- Use monospace font for all technical data and labels
- Let images be the only source of color
- Use asymmetric layouts for visual dynamism

## Don'ts
- Never use colored text in the UI (no blue links, no colored badges)
- Never use rounded corners larger than `rounded-sm` on structural elements
- Never crowd elements — whitespace is a design element
- Never use gradients in the UI (only in images)
- Never use drop shadows on UI elements
