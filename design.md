# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry for women 25–45. No loud discount language, no generic marketplace clutter. Generous whitespace, refined typography, large imagery.

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-cream` | `#FAF8F5` | Primary background |
| `--color-parchment` | `#F3EFE8` | Secondary background, newsletter block |
| `--color-espresso` | `#1C1A17` | Primary text, footer |
| `--color-warm-gray` | `#6B6560` | Secondary / muted text |
| `--color-taupe` | `#A8A199` | Subtle borders, dividers |
| `--color-gold` | `#B88A4D` | Accent CTA, hover states, stars |
| `--color-gold-dark` | `#8F6A38` | Gold hover |
| `--color-ivory` | `#FFFFFF` | Cards, nav solid background |
| `--color-overlay` | `rgba(28,26,23,0.35)` | Text overlay on images |

## Typography

- **Headings / Product names**: `Playfair Display`, serif. Product names are uppercase with `letter-spacing: 0.18em`.
- **Body / UI**: `Inter`, sans-serif.
- Scale: `text-xs` (12px) for UI labels, `text-sm` (14px) body, `text-base` (16px) lead, `text-2xl–5xl` for headings.

## Spacing & Layout

- Max container width: `1280px` (`max-w-7xl`), side padding `px-4 md:px-8 lg:px-12`.
- Section vertical spacing: `py-16 md:py-24`.
- Hairline dividers: `border-stone-200` (1px).

## Components

### Buttons
- **Primary**: solid gold background, ivory text, no border-radius, uppercase tracking, hover darkens to gold-dark.
- **Secondary / Outline**: transparent with espresso border, hover fills espresso with ivory text.
- All buttons have subtle transitions (`transition-all duration-300`).

### Cards
- No heavy shadows. Soft shadow on hover: `shadow-lg`.
- Image aspect ratios: product cards `4x5`, category tiles `3x4`, UGC cards `9x16`.

### Forms
- Inputs: bottom-border only (`border-b border-stone-300`), transparent background, uppercase label.

## Accessibility
- All text has strong contrast against its background.
- Interactive elements have focus-visible outlines.
- Alt text on every image.
