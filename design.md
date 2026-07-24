# Velmora Fine Jewelry — Design System

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `velvet` | `#0F0D0B` | Primary background — near-black with warm undertone |
| `night` | `#1A1714` | Card backgrounds, elevated surfaces |
| `espresso` | `#2A2520` | Subtle contrast, secondary backgrounds |
| `champagne` | `#F8F4EF` | Primary text — warm off-white |
| `cream` | `#EDE8E0` | Secondary light text |
| `gold` | `#C5A662` | Primary accent — warm metallic |
| `gold-light` | `#D4B97E` | Hover state for gold |
| `gold-dark` | `#9E854E` | Subtle gold for borders |
| `muted` | `#8A7E72` | Muted text, secondary labels |
| `divider` | `#3A3530` | Hairline dividers, subtle borders |

## Typography

### Headings (Serif)
- Font: Cormorant Garamond
- Weight: 400 (regular), 500 (medium)
- Usage: Page titles, section headers, product names

### Product Names
- Font: Cormorant Garamond
- Transform: UPPERCASE
- Letter-spacing: 0.15em
- Weight: 500

### Body / UI (Sans-serif)
- Font: Inter
- Weight: 300 (light), 400 (regular), 500 (medium)
- Usage: Body text, navigation, buttons, labels

### Micro Text
- Font: Inter
- Size: 10-11px
- Transform: UPPERCASE
- Letter-spacing: 0.2em
- Usage: Trust bar, breadcrumbs, badges

## Spacing

- Section padding: 4rem (mobile), 6rem (desktop)
- Card padding: 1.5rem
- Component gaps: 1rem-1.5rem
- Maximum content width: 80rem (1280px)

## Borders & Dividers

- Hairline: 1px solid `divider` (#3A3530)
- Accent border: 1px solid `gold` at 20-40% opacity
- Card borders: 1px solid `divider`
- No rounded corners on cards — sharp, editorial feel

## Shadows

- Subtle: `shadow-lg shadow-gold/10` (on hover)
- Card: minimal or none — rely on borders instead

## Animations

- Fade in: 0.5s ease-out
- Slide up: 0.6s ease-out with 20px offset
- Hover transitions: 0.3s ease
- Navbar scroll: 0.5s ease
- Cart drawer: 0.4s ease-out

## Component Patterns

### Buttons
- Primary: Solid gold background, dark text, uppercase tracking
- Secondary: Outlined with champagne border, transparent bg
- Hover: Lighten background, subtle shadow

### Product Cards
- Aspect ratio: 3:4
- Border: 1px divider
- Hover: Show overlay + quick add button
- Transition: 0.5s for image scale, 0.3s for overlay

### Sections
- Section label: 10px uppercase tracking gold
- Section title: Serif, large
- Divider: Gold line at 40% opacity, centered

## Do's
- Use generous whitespace
- Keep text on dark backgrounds always readable (champagne on velvet)
- Use serif for emotional/trust elements
- Use sans-serif for functional UI elements
- Maintain consistent spacing rhythm

## Don'ts
- Don't use bright or saturated colors
- Don't use rounded corners on primary containers
- Don't mix serif and sans-serif in the same element
- Don't use text smaller than 10px
- Don't use heavy shadows or gradients
