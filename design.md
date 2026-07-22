# Velmora Fine Jewelry - Design System

## Visual Identity

### Mood
- **Quiet luxury**: Understated elegance, editorial sophistication
- **Warm**: Inviting, not cold or clinical
- **Premium-but-accessible**: Elevated without being intimidating

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg` | `#FDFBF8` | Primary background (warm off-white) |
| `--color-bg-alt` | `#F7F3EE` | Secondary background (cream) |
| `--color-bg-dark` | `#1A1814` | Dark sections, footer |
| `--color-text` | `#1A1814` | Primary text (rich black) |
| `--color-text-muted` | `#6B6560` | Secondary text |
| `--color-text-light` | `#9C9590` | Tertiary/placeholder text |
| `--color-accent` | `#C4A86B` | Gold accent (champagne gold) |
| `--color-accent-dark` | `#A68B4B` | Hover state for accent |
| `--color-border` | `#E8E3DC` | Hairline dividers |
| `--color-white` | `#FFFFFF` | Pure white for cards |

### Typography

**Headings**: Cormorant Garamond
- Elegant serif with editorial presence
- Weights: 400, 500, 600
- Used for: Logo, hero headlines, product names, section titles

**Body**: Inter
- Clean, highly legible sans-serif
- Weights: 300, 400, 500, 600
- Used for: Body copy, UI elements, navigation, buttons

**Product Names**: Inter (uppercase, tracked out)
- `letter-spacing: 0.15em`
- `text-transform: uppercase`

### Spacing & Layout
- Base unit: 4px
- Section padding: 80px (desktop) / 48px (mobile)
- Container max-width: 1280px
- Grid gap: 24px (desktop) / 16px (mobile)

### Borders & Shadows
- Border radius: 2px (subtle, refined)
- Box shadows: Very soft, diffused
  - Card: `0 2px 20px rgba(26, 24, 20, 0.04)`
  - Elevated: `0 8px 40px rgba(26, 24, 20, 0.08)`
  - Button hover: subtle lift with shadow

### Motion Philosophy
- **Duration**: 300-400ms for transitions
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` (smooth ease)
- **Hover effects**: Subtle scale (1.02), opacity changes
- **Scroll reveals**: Fade up with slight translation
- **NO**: Bouncy animations, excessive motion, jarring transitions

## Component Guidelines

### Buttons
**Primary (Accent)**
- Background: `--color-accent` (#C4A86B)
- Text: Dark (#1A1814) or White (#FFFFFF) depending on context
- Padding: 16px 32px
- Border-radius: 2px
- Hover: Darken to `--color-accent-dark`, subtle lift

**Secondary (Outline)**
- Background: Transparent
- Border: 1px solid `--color-accent`
- Text: `--color-accent`
- Hover: Fill with accent, text inverts

**Ghost**
- No border, no background
- Text link style with underline on hover

### Cards
- Background: White
- Border: None (or subtle hairline)
- Shadow: Soft card shadow
- Hover: Slight lift, shadow increases

### Form Inputs
- Border: 1px solid `--color-border`
- Focus: Border becomes accent color
- Padding: 12px 16px
- Border-radius: 2px

### Navigation
- Height: 72px (desktop) / 64px (mobile)
- Links: Uppercase, tracked, small size
- Active state: Accent underline

## Imagery Guidelines
- Warm, golden lighting
- Neutral/dark backgrounds for jewelry
- Editorial styling (models, flat lays)
- Aspect ratios: 3:4 for product cards, 16:9 for hero, 9:16 for UGC

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
