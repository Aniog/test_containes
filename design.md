# Velmora Fine Jewelry — Design System

## Color Palette
- **Base/Background**: `#1a1816` — Deep espresso for dark sections, hero overlays
- **Cream**: `#faf8f5` — Primary page background
- **Warm**: `#f5f0eb` — Subtle section alternation, cards
- **Sand**: `#e8e0d6` — Borders, dividers, hover states
- **Gold**: `#c9a96e` — Primary accent, CTAs, highlights
- **Gold Dark**: `#b8956a` — Hover states for gold elements
- **Charcoal**: `#2d2a26` — Body text on light backgrounds
- **Stone**: `#8c8279` — Secondary text, captions
- **Muted**: `#a69f96` — Placeholder text, disabled states

## Typography
- **Headings**: Cormorant Garamond (serif), weight 300–700
  - Hero H1: 48–72px, weight 300, line-height 1.1
  - Section H2: 36–48px, weight 400, line-height 1.2
  - Product names: 16–20px, weight 500, UPPERCASE, letter-spacing 0.2em
- **Body**: Inter (sans-serif), weight 300–600
  - Body: 14–16px, weight 400, line-height 1.7
  - UI/Labels: 12–14px, weight 500, letter-spacing 0.05em, UPPERCASE

## Spacing
- Generous whitespace: section padding 80–120px desktop, 48–64px mobile
- Component gaps: 24–48px
- Thin hairline dividers: 1px solid `#e8e0d6`

## Components
- **Buttons**:
  - Primary: solid gold bg `#c9a96e`, white text, no border-radius (or 0px), hover darkens to `#b8956a`
  - Secondary: transparent with 1px gold border, gold text, hover fills gold
- **Cards**: no border-radius, subtle shadow `0 4px 24px rgba(0,0,0,0.06)`, hover lifts slightly
- **Inputs**: 1px sand border, no border-radius, focus ring in gold

## Motion
- All transitions: 300–400ms ease
- Hover lifts: `transform: translateY(-4px)` with shadow increase
- Image reveals: opacity 0→1, 400ms
- Stagger children: 100ms delay between items
