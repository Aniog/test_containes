# MicroCosmos Design System

## Brand Identity
MicroCosmos is a visually immersive website exploring the hidden world of microscopic life — bacteria, cells, fungi, plankton, and more. The aesthetic is dark, scientific, and awe-inspiring, with vivid accent colors inspired by fluorescence microscopy.

## Color Palette
- **Background (deep dark):** `#050a0f` — near-black with a blue tint. Use as page background.
- **Surface (card/section bg):** `#0d1a26` — dark navy. Use for cards and section backgrounds.
- **Surface elevated:** `#112233` — slightly lighter navy for hover states and elevated cards.
- **Primary accent (cyan/teal):** `#00d4ff` — electric cyan. Use for headings, highlights, borders.
- **Secondary accent (magenta):** `#e040fb` — vivid magenta/purple. Use for tags, badges, secondary highlights.
- **Tertiary accent (green):** `#39ff14` — neon green. Use sparingly for special callouts.
- **Text primary:** `#e8f4f8` — near-white with a cool tint.
- **Text secondary:** `#7fb3c8` — muted blue-grey for subtitles and body text.
- **Border:** `#1a3a4a` — subtle dark teal border.

Add to Tailwind config as named colors:
```js
cosmos: {
  bg: '#050a0f',
  surface: '#0d1a26',
  elevated: '#112233',
  cyan: '#00d4ff',
  magenta: '#e040fb',
  neon: '#39ff14',
  text: '#e8f4f8',
  muted: '#7fb3c8',
  border: '#1a3a4a',
}
```

## Typography
- **Font:** Inter (Google Fonts, already loaded)
- **Display headings:** `text-4xl md:text-6xl font-extrabold tracking-tight text-cosmos-cyan`
- **Section headings:** `text-2xl md:text-3xl font-bold text-cosmos-text`
- **Body text:** `text-base text-cosmos-muted leading-relaxed`
- **Labels/tags:** `text-xs font-semibold uppercase tracking-widest text-cosmos-magenta`
- **Caption:** `text-sm text-cosmos-muted`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card gap: `gap-6`
- Border radius: `rounded-2xl` for cards, `rounded-full` for badges/pills

## Component Styles

### Cards
```
bg-cosmos-surface border border-cosmos-border rounded-2xl overflow-hidden hover:border-cosmos-cyan transition-colors duration-300
```

### Buttons (Primary)
```
bg-cosmos-cyan text-cosmos-bg font-bold px-6 py-3 rounded-full hover:bg-white transition-colors duration-200
```

### Buttons (Ghost)
```
border border-cosmos-cyan text-cosmos-cyan px-6 py-3 rounded-full hover:bg-cosmos-cyan hover:text-cosmos-bg transition-colors duration-200
```

### Section Dividers
Use a subtle gradient line: `border-t border-cosmos-border`

### Image Containers
Images should fill their containers with `object-cover w-full h-full`. Use aspect ratios like `aspect-video` or `aspect-square`.

## Visual Style
- Dark, immersive, scientific aesthetic
- Glowing cyan/magenta accents on dark backgrounds
- Generous use of full-bleed and grid imagery
- Subtle hover effects (border glow, scale)
- No harsh white backgrounds — always dark surfaces

## Do's
- Use dark backgrounds everywhere
- Use cyan and magenta accents for interactive elements
- Use large, full-bleed hero images
- Use grid layouts with many images for gallery sections
- Keep text readable with `text-cosmos-text` or `text-cosmos-muted` on dark surfaces

## Don'ts
- Never use white or light backgrounds
- Never use low-contrast text (e.g. dark text on dark bg)
- Don't overuse neon green — only for special callouts
- Don't use more than 3 accent colors in one section
