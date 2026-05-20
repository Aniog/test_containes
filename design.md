# MicroCosmos Design System

## Brand Identity
MicroCosmos is a visually immersive website exploring the hidden world of microscopic life — bacteria, cells, fungi, plankton, and more. The aesthetic is dark, scientific, and awe-inspiring, with vivid accent colors evoking bioluminescence and microscope imagery.

## Color Palette
- **Background (deep dark):** `#050a0f` — near-black with a blue tint. Use as page background.
- **Surface (card/section bg):** `#0d1a26` — dark navy. Use for cards and section backgrounds.
- **Surface elevated:** `#112233` — slightly lighter navy for hover states and elevated cards.
- **Primary accent (cyan/teal):** `#00d4ff` — bright cyan, evoking bioluminescence. Use for headings, highlights, borders.
- **Secondary accent (green):** `#39ff14` — neon green, for badges and call-to-action elements.
- **Tertiary accent (purple):** `#a855f7` — vivid purple, for tags and decorative elements.
- **Text primary:** `#e2f4ff` — near-white with a cool blue tint.
- **Text secondary:** `#7ab8d4` — muted blue-gray for subtitles and captions.
- **Border:** `#1a3a5c` — subtle dark blue border.

Add these to Tailwind config as named colors:
```js
cosmos: {
  bg: '#050a0f',
  surface: '#0d1a26',
  elevated: '#112233',
  cyan: '#00d4ff',
  green: '#39ff14',
  purple: '#a855f7',
  text: '#e2f4ff',
  muted: '#7ab8d4',
  border: '#1a3a5c',
}
```

## Typography
- **Font family:** `Space Grotesk` (headings) + `Inter` (body). Load both from Google Fonts.
- **Hero heading:** `text-5xl md:text-7xl font-bold tracking-tight` in `cosmos-cyan`
- **Section heading:** `text-3xl md:text-4xl font-bold` in `cosmos-text`
- **Card title:** `text-xl font-semibold` in `cosmos-text`
- **Body text:** `text-base` in `cosmos-muted`
- **Caption/label:** `text-sm` in `cosmos-muted`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section vertical padding: `py-20 md:py-28`
- Card gap in grids: `gap-6`
- Card border radius: `rounded-2xl`
- Card padding: `p-6`

## Component Styles

### Navigation
- Fixed top bar, `bg-cosmos-bg/80 backdrop-blur-md border-b border-cosmos-border`
- Logo in `cosmos-cyan`, nav links in `cosmos-muted` hover `cosmos-text`

### Hero Section
- Full-viewport height, dark background with a large background image
- Centered text with a glowing cyan headline
- Subtle animated gradient overlay

### Image Cards
- `bg-cosmos-surface border border-cosmos-border rounded-2xl overflow-hidden`
- Image fills top portion, text below
- Hover: `hover:border-cosmos-cyan/50 hover:shadow-lg hover:shadow-cosmos-cyan/10 transition-all`

### Badges / Tags
- `bg-cosmos-purple/20 text-purple-300 text-xs px-3 py-1 rounded-full`
- `bg-cosmos-cyan/20 text-cyan-300 text-xs px-3 py-1 rounded-full`

### Buttons
- Primary: `bg-cosmos-cyan text-cosmos-bg font-semibold px-6 py-3 rounded-full hover:bg-cyan-300 transition`
- Outline: `border border-cosmos-cyan text-cosmos-cyan px-6 py-3 rounded-full hover:bg-cosmos-cyan/10 transition`

## Do's
- Use dark backgrounds throughout — never white or light gray
- Use vivid accent colors sparingly for maximum impact
- Images should be large and prominent
- Use subtle glows and shadows with accent colors
- Maintain generous whitespace between sections

## Don'ts
- No light mode or white backgrounds
- No low-contrast text (never use cosmos-muted on cosmos-bg without sufficient size)
- No cluttered layouts — keep it clean and spacious
- No generic stock-photo aesthetics — all imagery should feel scientific/microscopic
