# MicroCosmos Design System

## Concept
MicroCosmos is a visually immersive website exploring the hidden world of microscopic life — bacteria, cells, fungi, plankton, and more. The design should feel scientific yet awe-inspiring, dark and deep like looking through a microscope into an unknown universe.

## Color Palette
- **Background (deep dark):** `#050a0f` — near-black with a blue-green tint
- **Surface / Card:** `#0d1b2a` — dark navy
- **Surface Elevated:** `#112233` — slightly lighter navy
- **Accent Teal:** `#00d4aa` — bioluminescent teal (primary accent)
- **Accent Purple:** `#7c3aed` — deep violet (secondary accent)
- **Accent Amber:** `#f59e0b` — warm amber for highlights
- **Text Primary:** `#e8f4f8` — near-white with cool tint
- **Text Secondary:** `#8ab4c4` — muted blue-grey
- **Text Muted:** `#4a6a7a` — dim blue-grey for captions

In Tailwind config, add custom colors:
```js
cosmos: {
  bg: '#050a0f',
  surface: '#0d1b2a',
  elevated: '#112233',
  teal: '#00d4aa',
  purple: '#7c3aed',
  amber: '#f59e0b',
  text: '#e8f4f8',
  muted: '#8ab4c4',
  dim: '#4a6a7a',
}
```

## Typography
- **Font:** "Space Grotesk" (Google Fonts) for headings — futuristic, scientific feel
- **Body Font:** "Inter" for body text — clean and readable
- **Heading sizes:** text-5xl / text-4xl / text-3xl / text-2xl
- **Body:** text-base / text-sm
- **Letter spacing on headings:** tracking-wide or tracking-wider
- **Line height:** leading-relaxed for body

## Spacing & Layout
- Full-width sections with generous vertical padding: `py-20` to `py-32`
- Max content width: `max-w-7xl mx-auto px-6`
- Cards use `rounded-2xl` with subtle border: `border border-cosmos-elevated`
- Section dividers: subtle gradient lines or glowing teal lines

## Visual Style
- **Dark theme throughout** — no light mode
- **Glassmorphism cards:** `bg-cosmos-surface/80 backdrop-blur-md border border-white/10`
- **Glowing accents:** box-shadow with teal or purple glow on hover
- **Hero:** Full-viewport height with a dramatic background image and centered text
- **Image grid:** Masonry-style or asymmetric grid layouts for maximum visual impact
- **Hover effects:** Scale up images slightly, reveal overlay text
- **Gradient text:** Use gradient from teal to purple on key headings

## Do's
- Use many large, full-bleed images throughout the page
- Use glowing borders and subtle shadows to create depth
- Use gradient overlays on images for text legibility
- Use `object-cover` on all images
- Use rounded corners on cards: `rounded-2xl`
- Use `transition-all duration-300` for smooth hover effects

## Don'ts
- No white or light backgrounds
- No flat, plain card styles without depth
- No small or cramped image thumbnails
- No harsh color contrasts that feel clinical
- No light text on light backgrounds
