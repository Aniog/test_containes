# Velmora Fine Jewelry - Design System

## Visual Identity
**Brand Vibe:** Quiet luxury, warm, editorial, premium-but-accessible ($30-$120). Demi-fine gold jewelry.
**Keywords:** Refined, elegant, warm, confident, minimal, editorial.

## Typography
- **Primary / Headings:** Cormorant Garamond (Serif). Used for big hero titles, product names, featured labels.
- **Secondary / Body:** Manrope (Sans-serif). Used for UI elements, descriptions, navigation, buttons.
- *Styling Note:* Product names and key labels in UPPERCASE with wide letter-spacing (`tracking-widest`).

## Color Palette
An elegant, warm, high-contrast scheme mimicking editorial luxury.
- **Background:** `#FAFAF8` (Off-white / Warm alabaster)
- **Foreground (Text):** `#1A1818` (Deep charcoal, softer than pure black)
- **Primary/Accent:** `#9E7746` (Warm old gold - mimicking 18K gold luster)
- **Primary Foreground:** `#FFFFFF` (White text on accent)
- **Muted/Secondary:** `#E8E6E1` (Soft warm gray for borders and backgrounds)
- **Muted Foreground:** `#6B6865` (Refined soft gray for subtle text)

## Tailwind Configuration Concepts
```javascript
colors: {
  background: "#FAFAF8",
  foreground: "#1A1818",
  primary: {
    DEFAULT: "#9E7746",
    foreground: "#FFFFFF",
  },
  accent: {
    DEFAULT: "#F2EBE1", // Very soft gold tone background
    foreground: "#1A1818",
  },
  muted: {
    DEFAULT: "#E8E6E1",
    foreground: "#6B6865",
  },
  border: "#E8E6E1",
}
```

## Spacing & Layout
- **Containers:** Wide, airy. `max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto`.
- **Whitespace:** Generous spacing (`py-16` to `py-24` on sections).
- **Dividers:** Thin hairline borders (`border-t border-border/50`).

## Components
- **Buttons (Primary):** Solid gold color (`bg-primary`), white text, sans-serif, uppercase slightly tracked out, soft hover state (`hover:bg-primary/90`). No heavy shadows.
- **Buttons (Ghost/Outline):** Transparent with thin border, text color foreground.
- **Cards:** Clean borders or borderless with high-quality imagery. Soft shadows (`shadow-sm`) only where necessary for elevation. Image hover effect (slight scale or fade to second image).
- **Navigation:** Sticky, transparent at the top but gets a solid white/warm-white background with a soft shadow upon scroll.

## Imagery Guidelines
- Use the `data-strk-img` system with descriptors that suit "warm gold jewelry", "luxury editorial model", "close up gold earrings".
- Images should feel cohesive: warm lighting, neutral or dark contrasting backgrounds to make the gold pop.