# Velmora Fine Jewelry — Design System

## Visual Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry. No loud colors, no discount vibes, no generic e-commerce patterns.

## Color Palette

### Primary Colors
- **Base / Background**: `#F6F3EE` — warm off-white, used as primary background
- **Foreground / Text**: `#1A1814` — deep warm charcoal, used for all primary text
- **Accent**: `#B8956A` — warm antique gold, used for CTAs, highlights, stars

### Secondary Colors
- **Muted**: `#8A8278` — warm stone gray for secondary text
- **Border / Divider**: `#D9D3CA` — warm hairline divider color
- **Card / Surface**: `#FFFFFF` — pure white for cards and elevated surfaces
- **Dark Surface**: `#1A1814` — deep charcoal for dark sections (newsletter, footer)

### State Colors
- **Success**: `#2E7D5A` — muted green
- **Error**: `#A84040` — muted burgundy

## Typography

### Font Families
- **Serif (Headings)**: `Cormorant Garamond`, serif
- **Sans-serif (Body / UI)**: `Inter`, sans-serif

### Type Scale
- Display: `font-serif text-5xl md:text-7xl font-light tracking-tight`
- H1: `font-serif text-4xl md:text-5xl font-normal`
- H2: `font-serif text-3xl md:text-4xl font-normal`
- H3: `font-serif text-xl md:text-2xl font-medium uppercase tracking-[0.2em]` — product names
- Body: `font-sans text-sm md:text-base font-light leading-relaxed`
- Caption: `font-sans text-xs font-medium uppercase tracking-[0.15em]`
- Nav: `font-sans text-xs font-medium uppercase tracking-[0.12em]`

## Spacing & Layout
- Page horizontal padding: `px-5 md:px-10 lg:px-16`
- Section vertical spacing: `py-16 md:py-24`
- Max content width: `max-w-7xl mx-auto`
- Card border-radius: `0` — sharp editorial corners, or `2px` for subtle softening
- Button border-radius: `0` — sharp premium buttons

## Components

### Buttons
- **Primary (Solid Accent)**: `bg-[#B8956A] text-white px-8 py-3.5 font-sans text-xs uppercase tracking-[0.15em] hover:bg-[#A08055] transition-colors duration-300`
- **Secondary (Outline)**: `border border-[#1A1814] text-[#1A1814] px-8 py-3.5 font-sans text-xs uppercase tracking-[0.15em] hover:bg-[#1A1814] hover:text-white transition-colors duration-300`
- **Ghost**: `text-[#1A1814] font-sans text-xs uppercase tracking-[0.12em] hover:text-[#B8956A] transition-colors duration-300`

### Cards
- Product card: `bg-white group overflow-hidden`
- Image container: `aspect-[3/4] overflow-hidden bg-[#EDE9E2]`
- Hover: image scale `1.05`, quick-add button fades in

### Inputs
- `border-b border-[#D9D3CA] bg-transparent py-3 px-0 font-sans text-sm focus:outline-none focus:border-[#B8956A] transition-colors`

## Effects
- Shadows: `shadow-sm` only, very subtle
- Hover transitions: `transition-all duration-300 ease-out`
- Image hover: `scale-105` over `500ms`

## Do's
- Use generous whitespace
- Use uppercase with wide tracking for product names and nav
- Use hairline dividers (`1px` warm gray)
- Use warm neutral backgrounds
- Keep everything aligned to a grid

## Don'ts
- No bright primary colors (red, blue, green as accents)
- No rounded corners on cards or buttons
- No heavy drop shadows
- No discount-style badges or flashy sale banners
- No cluttered layouts
