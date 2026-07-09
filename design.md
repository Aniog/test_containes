# MicroCosmos Design System

## Concept
A dark, immersive, science-inspired aesthetic that evokes the mysterious beauty of the microscopic world. Deep blacks and dark teals with vivid accent colors (cyan, emerald, violet) to mimic bioluminescence and microscopy imagery.

## Color Palette
- Background: `#050a0e` (near-black deep ocean)
- Surface: `#0a1520` (dark navy)
- Card: `#0d1f2d` (dark teal-navy)
- Border: `#1a3a4a` (subtle teal border)
- Primary accent: `#00d4ff` (cyan / bioluminescent blue) → Tailwind: `cyan-400`
- Secondary accent: `#10b981` (emerald green) → Tailwind: `emerald-500`
- Tertiary accent: `#8b5cf6` (violet) → Tailwind: `violet-500`
- Text primary: `#e2f4f8` (near-white with cool tint)
- Text secondary: `#7fb3c8` (muted teal-blue)
- Text muted: `#4a7a8a`

Custom Tailwind colors to add:
```js
cosmos: {
  bg: '#050a0e',
  surface: '#0a1520',
  card: '#0d1f2d',
  border: '#1a3a4a',
  cyan: '#00d4ff',
  emerald: '#10b981',
  violet: '#8b5cf6',
  text: '#e2f4f8',
  muted: '#7fb3c8',
  faint: '#4a7a8a',
}
```

## Typography
- Font: `Space Grotesk` (headings) + `Inter` (body) from Google Fonts
- Hero heading: `text-5xl md:text-7xl font-bold tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card title: `text-lg font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption/label: `text-sm text-cosmos-muted uppercase tracking-widest`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto`
- Section padding: `py-20 px-6 md:px-12`
- Card gap: `gap-6`
- Border radius: `rounded-2xl` for cards, `rounded-full` for pills/badges

## Visual Style
- Heavy use of full-bleed background images with dark overlays
- Glassmorphism cards: `bg-cosmos-card/80 backdrop-blur-md border border-cosmos-border`
- Glowing accents: `shadow-[0_0_30px_rgba(0,212,255,0.3)]`
- Subtle gradient overlays on images: `from-cosmos-bg via-transparent to-cosmos-bg`
- Section dividers: thin `border-cosmos-border` lines or gradient fades

## Do's
- Use dark overlays on all background images to keep text readable
- Use `text-cosmos-text` on dark surfaces
- Use `text-cosmos-cyan` for highlighted labels and accents
- Use `rounded-2xl overflow-hidden` on all image cards
- Use `object-cover w-full h-full` for all images

## Don'ts
- Never use white backgrounds
- Never use light text on light backgrounds
- Never use default Tailwind gray palette — use cosmos colors instead
- Don't use more than 3 accent colors in one section
