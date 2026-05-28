# Ignition Dynamics: The Fusion Era — Design System

## Visual Philosophy
"Japanese Industrial Minimalism" meets Hyper-Quant. Ultra-clean layouts, massive deliberate whitespace, hairline borders, crisp monospaced and sans-serif typography. Images act as "glowing windows of energy" inside a cold, structured machine.

## Color Palette

### UI / Layout (Strictly Black & White)
- Background void: `#050505` → `bg-[#050505]`
- Surface dark: `#121212` → `bg-[#121212]`
- Surface elevated: `#1a1a1a` → `bg-[#1a1a1a]`
- Border hairline: `#262626` → `border-[#262626]`
- Border subtle: `#1f1f1f` → `border-[#1f1f1f]`
- Text primary: `#FFFFFF` → `text-white`
- Text secondary: `#A0A0A0` → `text-[#A0A0A0]`
- Text muted: `#555555` → `text-[#555555]`
- Text accent: `#E0E0E0` → `text-[#E0E0E0]`

### Accent (Minimal, Structural Only)
- White glow: `rgba(255,255,255,0.05)` for hover states
- No colored UI elements — color lives only in images

## Typography

### Fonts
- Primary: `Space Grotesk` (headings, labels) — loaded via Google Fonts
- Mono: `Space Mono` (telemetry, specs, data) — loaded via Google Fonts
- Fallback: `system-ui, sans-serif`

### Scale
- Display: `text-7xl` to `text-9xl`, `font-black`, `tracking-tighter`
- Heading: `text-3xl` to `text-5xl`, `font-bold`, `tracking-tight`
- Subheading: `text-xl` to `text-2xl`, `font-semibold`
- Body: `text-base`, `font-normal`, `leading-relaxed`
- Label/Mono: `text-xs` to `text-sm`, `font-mono`, `tracking-widest`, `uppercase`
- Spec: `text-xs`, `font-mono`, `text-[#555555]`

## Borders & Spacing
- Hairline borders: `border border-[#262626]`
- Section dividers: `border-t border-[#262626]`
- Card padding: `p-8` to `p-12`
- Section padding: `py-24` to `py-32`
- Max content width: `max-w-7xl mx-auto`

## Components

### Cards
- Background: `bg-[#121212]`
- Border: `border border-[#262626]`
- Hover: `hover:border-[#404040] hover:bg-[#1a1a1a]`
- Transition: `transition-all duration-300`

### Buttons
- Primary: `bg-white text-black hover:bg-[#E0E0E0]` — stark, no color
- Ghost: `border border-[#262626] text-white hover:border-white`
- Mono label: `font-mono text-xs tracking-widest uppercase`

### Images
- Always full-bleed within their container
- Aspect ratios: `aspect-video`, `aspect-square`, `aspect-[4/3]`
- Overlay: `mix-blend-luminosity` or none — let color shine
- Border: `border border-[#262626]`

### Telemetry Overlays
- Background: `bg-[#050505]/80 backdrop-blur-sm`
- Text: `font-mono text-xs text-[#A0A0A0]`
- Indicator dots: `w-1.5 h-1.5 rounded-full bg-white animate-pulse`

## Do's
- Use massive whitespace to let content breathe
- Use `font-mono` for all data, specs, coordinates, and labels
- Use `tracking-widest uppercase` for section labels
- Let images be the only source of color
- Use hairline `1px` borders everywhere
- Use asymmetric grid layouts (60/40, 70/30)

## Don'ts
- Never use colored text, buttons, or backgrounds in UI
- Never use rounded corners larger than `rounded-sm` on structural elements
- Never use shadows (use borders instead)
- Never use gradients in UI (only in images)
- Never use more than 2 font weights in a single section
