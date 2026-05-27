# MicroCosmos Design System

## Theme
Dark, immersive, scientific-wonder aesthetic. Deep blacks and dark teals evoking the depths of microscopic worlds. Accent colors inspired by bioluminescence — electric cyan, vivid green, and soft violet.

## Colors
- Background primary: `#050d12` (near-black deep ocean)
- Background secondary: `#0a1a22` (dark teal-black)
- Background card: `#0f2230` (dark blue-teal)
- Accent cyan: `#00e5ff` (electric cyan / bioluminescent)
- Accent green: `#39ff14` (neon green)
- Accent violet: `#b57bee` (soft violet)
- Text primary: `#e8f4f8` (near-white, cool tint)
- Text secondary: `#7fb3c8` (muted teal-blue)
- Text muted: `#4a7a8a`
- Border: `#1a3a4a`

In Tailwind config, add these as named colors:
- `cosmos-bg`: `#050d12`
- `cosmos-card`: `#0f2230`
- `cosmos-cyan`: `#00e5ff`
- `cosmos-green`: `#39ff14`
- `cosmos-violet`: `#b57bee`
- `cosmos-text`: `#e8f4f8`
- `cosmos-muted`: `#7fb3c8`
- `cosmos-border`: `#1a3a4a`

## Typography
- Font: "Space Grotesk" (headings) + "Inter" (body) from Google Fonts
- Headings: font-bold, tracking-tight, text-cosmos-text
- Body: font-normal, text-cosmos-muted
- Display headings: large, uppercase letter-spacing for section titles

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto`
- Section padding: `py-20 px-6`
- Card gap: `gap-6`
- Border radius: `rounded-2xl` for cards, `rounded-full` for badges

## Components

### Navigation
- Fixed top, dark semi-transparent background with backdrop blur
- Logo: cyan accent color, bold
- Nav links: text-cosmos-muted hover:text-cosmos-cyan transition
- Active link: text-cosmos-cyan

### Hero Section
- Full-viewport height
- Large background image with dark overlay
- Centered text with large display heading
- Subtle animated glow effect on heading

### Image Cards
- Dark card background `bg-cosmos-card`
- Image fills top portion, rounded corners
- Hover: scale-up + glow border in cyan
- Caption text in cosmos-muted

### Gallery Grid
- Masonry-style or responsive grid: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4`
- Images with hover overlay showing title

### Section Titles
- Uppercase, letter-spacing wide, small cyan accent line below

## Do's
- Use dark backgrounds everywhere — never white or light gray
- Use cyan/green glows for interactive elements
- Images should be large and prominent
- Use subtle gradients from cosmos-bg to cosmos-card
- Maintain high contrast: light text on dark backgrounds

## Don'ts
- No white backgrounds
- No light-mode color schemes
- No small or hidden images
- No low-contrast text combinations
