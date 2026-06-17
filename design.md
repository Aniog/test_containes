# Tiger Rescue Sanctuary — Design System

## Brand Identity
A conservation-focused, emotionally resonant design that conveys strength, care, and urgency. The palette draws from the tiger's natural environment — deep forest greens, warm amber tones, and rich earth colors — balanced with clean whites for readability.

## Color Palette
- **Primary (Amber/Gold):** `#D97706` — `amber-600` — used for CTAs, highlights, accents
- **Primary Dark:** `#92400E` — `amber-800` — hover states, headings
- **Primary Light:** `#FEF3C7` — `amber-50` — light backgrounds, tints
- **Forest Green:** `#166534` — `green-800` — secondary accent, nature feel
- **Forest Light:** `#DCFCE7` — `green-50` — subtle section backgrounds
- **Dark Base:** `#1C1917` — `stone-900` — hero overlays, dark sections
- **Text Primary:** `#1C1917` — `stone-900` — main body text
- **Text Secondary:** `#57534E` — `stone-600` — supporting text
- **Text Muted:** `#A8A29E` — `stone-400` — captions, metadata
- **Surface White:** `#FAFAF9` — `stone-50` — card backgrounds
- **Border:** `#E7E5E4` — `stone-200` — dividers, card borders

## Typography
- **Font Family:** Inter (Google Fonts)
- **Display / Hero H1:** `text-5xl md:text-7xl font-black tracking-tight` — bold, impactful
- **Section H2:** `text-3xl md:text-4xl font-bold` — clear hierarchy
- **Card H3:** `text-xl font-semibold`
- **Body Large:** `text-lg leading-relaxed`
- **Body:** `text-base leading-relaxed`
- **Caption / Label:** `text-sm font-medium uppercase tracking-widest`

## Spacing
- Section padding: `py-20 md:py-28`
- Container max-width: `max-w-6xl mx-auto px-4 md:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary CTA:** `bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-xl`
- **Secondary:** `border-2 border-amber-600 text-amber-700 hover:bg-amber-50 font-semibold px-8 py-3 rounded-full transition-all`
- **Ghost (on dark):** `border-2 border-white text-white hover:bg-white hover:text-stone-900 font-semibold px-8 py-3 rounded-full transition-all`

### Cards
- Background: `bg-white` or `bg-stone-50`
- Border: `border border-stone-200`
- Radius: `rounded-2xl`
- Shadow: `shadow-md hover:shadow-xl transition-shadow`

### Navigation
- Sticky top nav with blur backdrop: `sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200`
- Logo: amber accent color
- Links: `text-stone-700 hover:text-amber-600 font-medium transition-colors`

### Hero Section
- Full-viewport height with dark overlay on background image
- White text on dark overlay
- Gradient overlay: `from-stone-900/80 via-stone-900/50 to-transparent`

### Section Dividers
- Alternating white and `stone-50` backgrounds for visual rhythm

## Do's
- Use amber/gold as the primary accent — it echoes tiger stripes
- Use large, full-bleed images for emotional impact
- Maintain generous whitespace between sections
- Use rounded corners (`rounded-2xl`) on cards and images
- Use `font-black` for hero headlines for maximum impact
- Ensure all text on dark backgrounds is white or amber

## Don'ts
- Don't use blue or purple — off-brand for nature/wildlife
- Don't use small font sizes for body text (minimum `text-base`)
- Don't place dark text on dark backgrounds
- Don't use sharp corners on cards (always round them)
- Don't use more than 3 font weights in one section
