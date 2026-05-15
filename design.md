# MicroCosmos Design System

## Visual Identity
**Theme:** Japanese Minimalism meets Dark Laboratory Aesthetic
**Concept:** Immersive, scientific, and educational — like peering through a high-powered microscope into a hidden world.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `obsidian` | `#090D16` | Primary background, deepest dark |
| `charcoal` | `#121824` | Secondary background, cards |
| `charcoal-light` | `#1A2333` | Elevated surfaces, hover states |
| `charcoal-mid` | `#1E2A3A` | Borders, dividers |
| `bio-green` | `#10B981` | Primary accent — bioluminescent green |
| `bio-cyan` | `#06B6D4` | Secondary accent — electric cyan |
| `bio-orange` | `#F97316` | Tertiary accent — phosphorus orange |
| `bio-purple` | `#8B5CF6` | Quaternary accent — UV fluorescence |
| `text-primary` | `#F1F5F9` | Main body text |
| `text-secondary` | `#94A3B8` | Subheadings, captions |
| `text-muted` | `#475569` | Placeholder, disabled |
| `border-dim` | `#1E2D40` | Subtle borders |

## Typography

- **Display / Hero:** `Space Grotesk` — weight 700–800, tracking tight
- **Body / UI:** `Space Grotesk` — weight 300–500
- **Code / Labels / Data:** `JetBrains Mono` — weight 300–500
- **Base size:** 16px
- **Scale:** 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 48 / 60 / 72px

### Do's
- Use `text-text-primary` on dark backgrounds
- Use `text-text-secondary` for supporting copy
- Use `font-mono` for specimen data, magnification labels, coordinates
- Use generous letter-spacing on uppercase labels: `tracking-widest`

### Don'ts
- Never use white text on light backgrounds
- Never use default browser blue for links
- Avoid font sizes below 12px

## Spacing & Layout

- **Container max-width:** 1280px (`max-w-7xl`)
- **Section padding:** `py-20 md:py-32`
- **Card padding:** `p-6 md:p-8`
- **Grid gaps:** `gap-6 md:gap-8`
- **Generous whitespace** is a design feature, not wasted space

## Component Patterns

### Cards (Specimen / Slide)
- Background: `bg-charcoal`
- Border: `border border-border-dim`
- Hover: `hover:border-bio-green/30 hover:shadow-glow-green`
- Radius: `rounded-2xl`
- Transition: `transition-all duration-300`

### Accent Lines / Dividers
- Use `border-bio-green/20` for subtle green-tinted dividers
- Use `bg-bio-green` for active indicator bars (2–3px height)

### Buttons
- Primary: `bg-bio-green text-obsidian font-semibold hover:bg-bio-green-dim`
- Ghost: `border border-bio-green/40 text-bio-green hover:bg-bio-green/10`
- Radius: `rounded-full` for CTAs, `rounded-lg` for form buttons

### Labels / Badges
- Background: `bg-bio-green/10 text-bio-green`
- Font: `font-mono text-xs tracking-widest uppercase`
- Padding: `px-3 py-1`
- Radius: `rounded-full`

## Image Treatment
- All micrograph images use `object-cover` with `overflow-hidden`
- Images have a subtle green-tinted overlay on hover
- Specimen images use `rounded-xl` or `rounded-2xl`
- Always pair images with annotation overlays or data labels

## Grid Patterns
- Background grid: `bg-grid-pattern bg-grid` at very low opacity
- Radial glow behind hero elements
- Asymmetric layouts preferred for desktop (60/40 or 55/45 splits)

## Iconography
- Library: `lucide-react`
- Size: `w-5 h-5` (inline), `w-6 h-6` (standalone), `w-8 h-8` (feature)
- Color: Match accent color of section
