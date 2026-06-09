# Ignition Dynamics — Design System

## Visual Philosophy
"Japanese Industrial Minimalism" meets Hyper-Quantum. Ultra-clean layouts, massive whitespace, hairline borders, crisp mono-spaced and sans-serif typography. The UI/layout is strictly monochrome (black, white, gray). All imagery is hyper-chromatic and luminous — "glowing windows of energy" inside a cold, structured machine.

## Color Tokens
### UI / Layout (Monochrome Only)
| Token | Hex | Usage |
|---|---|---|
| `void` | `#050505` | Primary background |
| `void-light` | `#0a0a0a` | Elevated surfaces |
| `industrial` | `#121212` | Card backgrounds |
| `industrial-border` | `#262626` | Hairline borders, dividers |
| `industrial-muted` | `#1a1a1a` | Muted surfaces |

### Image / Accent (Hyper-Chromatic)
| Token | Hex | Usage |
|---|---|---|
| `plasma-purple` | `#9333ea` | Tokamak plasma, magnetic fields |
| `plasma-blue` | `#3b82f6` | Cool plasma, deuterium |
| `plasma-cyan` | `#06b6d4` | Laser systems, diagnostics |
| `plasma-orange` | `#f97316` | Divertor heat, solar flare |
| `plasma-green` | `#22c55e` | Tritium, inertial confinement |
| `plasma-pink` | `#ec4899` | Ignition glow |

## Typography
- **Display / Headings**: Inter (700–900), tracked tight, uppercase for industrial headers
- **Body**: Inter (300–500), 16px base
- **Technical / Telemetry**: JetBrains Mono (400–600), used for data readouts, labels, specs

## Layout Rules
- Asymmetric split-screen layouts (60/40, 70/30)
- Generous padding (p-8 to p-24)
- 1px hairline borders (`border-neutral-800` or `border-[#262626]`)
- Grid backgrounds with 40px cells at 30% opacity
- Cards with no shadows, just borders
- Telemetry-style overlays with monospace fonts

## Imagery
- All `<img>` tags use Unsplash source URLs with vibrant, colorful science/industrial search terms
- Images act as "glowing windows" — the only colorful elements in the monochrome UI
- Full-height hero images, side-by-side reactor renders
- Hover reveals: white overlay with technical specs

## Responsive Breakpoints
- Mobile: < 768px (stack layouts, reduced padding)
- Tablet: 768px–1024px
- Desktop: > 1024px (full split layouts)
