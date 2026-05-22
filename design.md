# Mountain Climbing Site — Design System

## Visual Identity
A dramatic, adventurous aesthetic inspired by high-altitude environments. Dark, moody backgrounds contrast with crisp white text and bold accent colors drawn from mountain sunrises.

## Color Palette
- **Background (deep):** `bg-slate-950` (#020617) — primary page background
- **Background (surface):** `bg-slate-900` (#0f172a) — cards, sections
- **Background (elevated):** `bg-slate-800` (#1e293b) — hover states, borders
- **Accent (primary):** `bg-amber-500` (#f59e0b) — CTAs, highlights, icons
- **Accent (secondary):** `bg-sky-400` (#38bdf8) — links, badges
- **Text (primary):** `text-white` — headings, key content
- **Text (secondary):** `text-slate-300` — body copy, descriptions
- **Text (muted):** `text-slate-400` — captions, metadata
- **Border:** `border-slate-700` — dividers, card borders

## Typography
- **Font:** Inter (Google Fonts)
- **Hero heading:** `text-5xl md:text-7xl font-black tracking-tight text-white`
- **Section heading:** `text-3xl md:text-4xl font-bold text-white`
- **Card heading:** `text-xl font-semibold text-white`
- **Body:** `text-base text-slate-300 leading-relaxed`
- **Caption/label:** `text-sm text-slate-400 uppercase tracking-widest`

## Spacing & Layout
- **Max content width:** `max-w-6xl mx-auto px-4 md:px-8`
- **Section padding:** `py-20 md:py-28`
- **Card padding:** `p-6 md:p-8`
- **Grid gaps:** `gap-6 md:gap-8`

## Components

### Navbar
- Sticky, transparent → dark on scroll
- Logo left, nav links right
- `bg-slate-950/80 backdrop-blur-md border-b border-slate-800`

### Hero Section
- Full-viewport height with background image overlay
- Dark gradient overlay: `bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950`
- Large headline + subtitle + CTA button

### Section Cards
- `bg-slate-900 border border-slate-700 rounded-2xl`
- Hover: `hover:border-amber-500/50 hover:bg-slate-800 transition-all duration-300`

### Buttons (Primary)
- `bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-colors`

### Buttons (Secondary/Outline)
- `border border-slate-600 hover:border-amber-500 text-white px-6 py-3 rounded-xl transition-colors`

### Badges
- `bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide`

### Dividers
- `border-t border-slate-800`

## Do's
- Always use explicit text colors on dark backgrounds (`text-white`, `text-slate-300`)
- Use `amber-500` for primary interactive elements and highlights
- Use generous whitespace between sections
- Use `rounded-2xl` for cards and image containers
- Ensure all text has sufficient contrast against its background

## Don'ts
- Never use light backgrounds without switching to dark text
- Don't use default browser button styles
- Don't use pure black (#000) — use `slate-950` instead
- Don't use small font sizes for body text (minimum `text-base`)
