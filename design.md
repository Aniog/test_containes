# Design System — SwimGear

## Brand Identity
A clean, modern aquatic brand. The palette draws from deep ocean blues and bright pool turquoise, with crisp white space and subtle wave-inspired accents.

## Color Palette
- **Primary (Ocean Blue):** `#0369a1` — `bg-sky-700` / `text-sky-700`
- **Primary Dark:** `#0c4a6e` — `bg-sky-900` / `text-sky-900`
- **Accent (Turquoise):** `#06b6d4` — `bg-cyan-500` / `text-cyan-500`
- **Accent Light:** `#cffafe` — `bg-cyan-100`
- **Background:** `#f0f9ff` — `bg-sky-50`
- **Surface (Card):** `#ffffff` — `bg-white`
- **Text Primary:** `#0c4a6e` — `text-sky-900`
- **Text Secondary:** `#475569` — `text-slate-600`
- **Text Muted:** `#94a3b8` — `text-slate-400`
- **Border:** `#e0f2fe` — `border-sky-100`

## Typography
- **Font Family:** Inter (Google Fonts)
- **Hero Heading:** `text-5xl md:text-7xl font-extrabold tracking-tight text-sky-900`
- **Section Heading:** `text-3xl md:text-4xl font-bold text-sky-900`
- **Card Title:** `text-xl font-semibold text-sky-900`
- **Body:** `text-base text-slate-600 leading-relaxed`
- **Small / Caption:** `text-sm text-slate-400`
- **CTA Button Label:** `text-base font-semibold`

## Spacing & Layout
- Page max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card padding: `p-6`
- Grid gap: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary:** `bg-sky-700 hover:bg-sky-800 text-white rounded-full px-8 py-3 font-semibold transition`
- **Secondary / Outline:** `border-2 border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white rounded-full px-8 py-3 font-semibold transition`

### Cards
- `bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border border-sky-100`
- Image on top, content below with `p-6`

### Navigation
- Sticky top nav: `bg-white/90 backdrop-blur border-b border-sky-100`
- Logo: bold, `text-sky-700`
- Nav links: `text-slate-600 hover:text-sky-700 font-medium`

### Badges
- `bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full`

### Hero Section
- Full-width, tall (`min-h-screen`), ocean-blue gradient background
- `bg-gradient-to-br from-sky-900 via-sky-700 to-cyan-500`
- White text on dark background

### Section Backgrounds
- Alternating: `bg-sky-50` and `bg-white`

## Do's
- Use rounded corners (`rounded-2xl`, `rounded-full`) for a modern feel
- Use generous whitespace between sections
- Use `shadow-md` on cards, `shadow-xl` on hover
- Keep text clearly readable — white on dark, dark on light

## Don'ts
- Never use dark text on dark backgrounds
- Never use light text on light backgrounds
- Avoid harsh black; prefer `text-sky-900` or `text-slate-700`
- Do not use more than 2 accent colors per section
