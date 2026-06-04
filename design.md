# Abyssos Design System

## Brand
"Abyssos" — an immersive deep-ocean experience. Dark, fluid, mysterious.

## Color Palette
- **Midnight Navy**: `#000080` — primary brand color, deep ocean base
- **Electric Cyan**: `#00FFFF` — accent, bioluminescent glow
- **Abyss Black**: `#000510` — deepest background
- **Deep Sea**: `#000033` — mid-depth background
- **Surface Blue**: `#001a66` — shallow water
- **Coral Pink**: `#FF6B6B` — reef accent
- **Coral Orange**: `#FF8C42` — reef warmth
- **Seafoam**: `#7FFFD4` — aquamarine highlight
- **White Glow**: `rgba(255,255,255,0.9)` — text on dark

## Typography
- **Font**: `'Cinzel'` for headings (elegant, ancient feel), `'Inter'` for body
- **Heading sizes**: `text-5xl` to `text-8xl` for hero, `text-2xl` to `text-4xl` for sections
- **Body**: `text-base` to `text-lg`, `leading-relaxed`
- **Letter spacing**: `tracking-widest` for headings

## Borders & Radius
- **Bubble corners**: `rounded-3xl` (24px) to `rounded-full` for cards and buttons
- **Glass panels**: `rounded-2xl` with `backdrop-blur-md`

## Shadows & Glow
- **Cyan glow**: `0 0 20px rgba(0,255,255,0.4), 0 0 60px rgba(0,255,255,0.15)`
- **Navy glow**: `0 0 30px rgba(0,0,128,0.6)`
- **Glass shadow**: `0 8px 32px rgba(0,0,0,0.4)`

## Glassmorphism
- Background: `rgba(0, 0, 128, 0.15)` to `rgba(0, 255, 255, 0.05)`
- Blur: `backdrop-blur-md` (12px)
- Border: `1px solid rgba(0,255,255,0.2)`

## Animations
- **Liquid float**: slow sinusoidal vertical movement, 4–8s duration
- **Pulse glow**: opacity oscillation on cyan elements
- **Bubble rise**: particles float upward with slight horizontal drift
- **Fade in up**: elements enter from below with opacity transition
- All transitions: `transition-all duration-700 ease-in-out`

## Do's
- Use dark backgrounds everywhere; never white backgrounds
- Cyan for interactive elements, highlights, and glows
- Rounded corners on all cards, buttons, and overlays
- Smooth scroll behavior site-wide
- Canvas particles always present as ambient background

## Don'ts
- No sharp corners (avoid `rounded-none`)
- No light-mode color schemes
- No flat, non-animated UI elements
- No high-contrast black text on white
