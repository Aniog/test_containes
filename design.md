# Velmora Fine Jewelry — Design System

Quiet-luxury demi-fine jewelry storefront. Warm, editorial, premium-but-accessible.

## Color palette

| Token | Tailwind class | Hex | Usage |
|---|---|---|---|
| Cream | `bg-velmora-cream` / `text-velmora-cream` | `#F8F5F0` | Secondary section backgrounds, footer |
| Ivory | `bg-velmora-ivory` / `text-velmora-ivory` | `#FFFDF9` | Primary background, hero text, button fills |
| Stone | `bg-velmora-stone` | `#EDE8E0` | Subtle cards, placeholders, dividers, hover fills |
| Sand | `text-velmora-sand` | `#D9CFC2` | Muted decorative accents, empty-state icons |
| Taupe | `text-velmora-taupe` | `#A89F91` | Secondary meta text, struck prices |
| Warm Gray | `text-velmora-warmgray` | `#7A746C` | Body copy, descriptions, captions |
| Ink | `bg-velmora-ink` / `text-velmora-ink` | `#1E1C1A` | Primary text, primary buttons, nav solid state |
| Charcoal | `bg-velmora-charcoal` | `#2E2C2A` | Button hover state |
| Rust | `bg-velmora-rust` / `text-velmora-rust` | `#8C5A3C` | Accent CTA blocks, sale badges, category labels |
| Soft Gold | `text-velmora-softgold` | `#C9A23E` | Optional metallic highlight (use sparingly) |

Always pair dark text on light surfaces and light text on dark or image surfaces. Hero and category tiles use a translucent ink overlay (`bg-velmora-ink/20` to `/60`) to guarantee text contrast.

## Typography

- **Headings / product names:** Cormorant Garamond, Georgia, serif (`font-serif`).
- **Body / UI:** Inter, system-ui, sans-serif (`font-sans`).
- Product names and labels are uppercase with wide letter-spacing (`uppercase tracking-widest`).
- Display headlines: `text-5xl sm:text-6xl md:text-7xl lg:text-8xl`.
- Section titles: `font-serif text-3xl md:text-4xl`.
- Body copy: `text-sm leading-relaxed text-velmora-warmgray`.

## Spacing & layout

- Page max-width: `max-w-7xl`.
- Section vertical padding: `py-16 md:py-24`.
- Container horizontal padding: `px-4 sm:px-6 lg:px-8`.
- Grid gaps: `gap-4` for tight product grids, `gap-10 lg:gap-16` for split layouts.
- Generous whitespace is preferred over dense packing.

## Components

### Buttons
- Primary solid: `rounded-full bg-velmora-ink text-velmora-ivory hover:bg-velmora-charcoal`.
- Primary on dark/accent: `rounded-full bg-velmora-ivory text-velmora-ink hover:bg-velmora-stone`.
- Text link: `text-velmora-warmgray hover:text-velmora-ink underline-offset-4 hover:underline`.
- All CTAs use `uppercase tracking-widest text-xs font-semibold`.

### Cards
- Product cards: image aspect `3/4`, `bg-velmora-stone` placeholder, hover secondary image reveal.
- Category tiles: full-bleed image with ink overlay and centered serif label.

### Dividers
- Hairline rules: `border-velmora-stone` (`1px`).

### Forms
- Inputs: subtle transparent background on accent surfaces (`bg-velmora-ivory/10`), rounded-full, light placeholder.

## Motion

- Easing: `ease-lux` (`cubic-bezier(0.25, 0.46, 0.45, 0.94)`).
- Durations: `300ms` for UI, `500ms–700ms` for image reveals, `duration-500` for drawer.
- Hover: scale `105`, opacity cross-fades, translate-y reveals.
- Staggered fades: `animate-fadeIn` with incremental `animationDelay`.

## Do’s and Don’ts

- DO use the exact Tailwind `velmora-*` tokens; no hardcoded hex codes in JSX.
- DO keep text contrast high on every surface, especially image overlays.
- DO reserve `velmora-rust` for accents and CTAs only.
- DON’T use loud discount styling; sale badges are small, rust-toned, and minimal.
- DON’T crowd sections; whitespace is part of the luxury feel.
- DON’T mix additional accent colors; rust + ink + ivory is the core palette.
