# ARTITECT MACHINERY — Design System

## Overview
Elegant, industrial website for a sheet metal folding machinery manufacturer. Dark, premium aesthetic with warm gold/amber accents conveying precision engineering and craftsmanship.

## Color Palette
- **Primary Background**: `#0f1115` — near-black with subtle blue-gray undertone
- **Secondary Background**: `#181b21` — slightly lighter dark for cards/sections
- **Surface**: `#1e222a` — elevated surfaces, cards
- **Accent/Gold**: `#c9a45c` — warm gold for highlights, CTAs, icons
- **Accent Hover**: `#d4b76a` — lighter gold on hover
- **Text Primary**: `#f0f0f0` — off-white for headings
- **Text Secondary**: `#a0a8b8` — muted gray-blue for body text
- **Text Muted**: `#6b7280` — for captions, labels
- **Border**: `#2a2f3a` — subtle borders

## Typography
- **Font Family**: Inter, system-ui, sans-serif
- **H1**: 48px / 700 weight / -0.02em letter-spacing / line-height 1.1
- **H2**: 36px / 600 weight / -0.01em letter-spacing / line-height 1.2
- **H3**: 24px / 600 weight / line-height 1.3
- **Body**: 16px / 400 weight / line-height 1.7
- **Caption/Label**: 12px / 500 weight / uppercase / letter-spacing 0.08em
- **Nav Link**: 14px / 500 weight / uppercase / letter-spacing 0.06em

## Spacing
- Section vertical padding: 80px (desktop), 48px (mobile)
- Container max-width: 1200px, centered with auto margins
- Content padding: 24px (mobile), 32px (tablet), 48px (desktop)
- Gap between grid items: 24px–32px

## Component Styles

### Buttons
- **Primary**: bg `#c9a45c`, text `#0f1115`, font-weight 600, padding 14px 32px, border-radius 4px, uppercase, letter-spacing 0.06em
- **Primary Hover**: bg `#d4b76a`, slight scale(1.02)
- **Outline**: border 1px `#c9a45c`, text `#c9a45c`, transparent bg, same padding/radius
- **Outline Hover**: bg `rgba(201,164,92,0.1)`

### Cards
- bg `#181b21`, border 1px `#2a2f3a`, border-radius 8px, padding 32px
- Hover: border-color transitions to `rgba(201,164,92,0.4)`, subtle shadow

### Navigation
- Fixed top, bg `rgba(15,17,21,0.9)` with backdrop-blur(12px)
- Height: 72px
- Logo: 18px / 700 weight / uppercase / letter-spacing 0.1em / color `#c9a45c`

## Visual Effects
- Gradients: subtle radial gradients for hero backgrounds
- Subtle noise/texture overlay on hero (optional)
- Smooth scroll behavior
- Transition durations: 200ms for colors, 300ms for transforms

## Do's
- Use generous whitespace
- Keep text readable with strong contrast
- Use gold accent sparingly for maximum impact
- Use uppercase labels for section headings and nav

## Don'ts
- Don't use bright saturated colors
- Don't crowd content — machinery images need breathing room
- Don't use gradients on text
- Don't use border-radius larger than 8px
