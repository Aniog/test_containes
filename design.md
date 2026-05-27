# MicroCosmos Design System

## Brand Identity
MicroCosmos is a science-forward website exploring the microscopic world. The visual style is dark, immersive, and scientific — evoking the feeling of peering through a microscope into an alien universe.

## Color Palette
- **Background (deep space):** `#050d1a` — near-black navy
- **Surface (cards/panels):** `#0d1f35` — dark navy blue
- **Surface elevated:** `#112540` — slightly lighter navy
- **Primary accent (teal):** `#00c9b1` — vibrant teal/cyan
- **Secondary accent (purple):** `#7c3aed` — deep violet
- **Highlight (glow):** `#00e5cc` — bright teal glow
- **Text primary:** `#e8f4f8` — near-white with cool tint
- **Text secondary:** `#7fb3c8` — muted blue-grey
- **Text muted:** `#4a7a8a` — dim blue-grey
- **Border:** `#1a3a52` — subtle dark border

### Tailwind Custom Colors (add to config)
```js
microbg: '#050d1a'
microsurface: '#0d1f35'
microelevated: '#112540'
microteal: '#00c9b1'
micropurple: '#7c3aed'
microglow: '#00e5cc'
microtext: '#e8f4f8'
micromuted: '#7fb3c8'
microdim: '#4a7a8a'
microborder: '#1a3a52'
```

## Typography
- **Font:** "Space Grotesk" (headings) + "Inter" (body) from Google Fonts
- **Display heading:** `text-5xl md:text-7xl font-bold tracking-tight text-microtext`
- **Section heading:** `text-3xl md:text-4xl font-bold text-microtext`
- **Card heading:** `text-xl font-semibold text-microtext`
- **Body text:** `text-base text-micromuted leading-relaxed`
- **Caption/label:** `text-sm text-microdim uppercase tracking-widest`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section padding: `py-20 md:py-28`
- Card padding: `p-6`
- Grid gaps: `gap-6 md:gap-8`

## Components

### Navbar
- Fixed top, `bg-microbg/90 backdrop-blur-md border-b border-microborder`
- Logo: teal accent color
- Links: `text-micromuted hover:text-microteal transition-colors`
- Active link: `text-microteal`

### Cards
- `bg-microsurface border border-microborder rounded-2xl overflow-hidden`
- Hover: `hover:border-microteal/50 hover:shadow-lg hover:shadow-microteal/10 transition-all`

### Buttons
- Primary: `bg-microteal text-microbg font-semibold px-6 py-3 rounded-full hover:bg-microglow transition-colors`
- Outline: `border border-microteal text-microteal px-6 py-3 rounded-full hover:bg-microteal/10 transition-colors`

### Image Cards
- Always use `object-cover w-full h-full` for images
- Overlay gradient: `bg-gradient-to-t from-microbg/80 to-transparent`

### Section Dividers
- Use subtle teal glow lines or gradient fades between sections

## Do's
- Use dark backgrounds throughout — never white or light grey
- Add glow effects with `shadow-microteal/20` on hover states
- Use `backdrop-blur` for overlays and navbars
- Use rounded corners (`rounded-2xl`, `rounded-full`) for a modern feel
- Images should be large and prominent — they are the star of the show

## Don'ts
- Never use white or light backgrounds
- Never use black text on dark backgrounds (use `text-microtext` or `text-micromuted`)
- Don't use harsh borders — keep them subtle with low opacity
- Don't crowd text — use generous spacing
