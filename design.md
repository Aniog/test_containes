# Design System — Dogs Site

## Brand Personality
Warm, playful, and trustworthy. Feels like a sunny afternoon at the dog park.

## Color Palette
- **Primary (amber/warm orange):** `bg-amber-500`, `text-amber-500`, `border-amber-500`
- **Primary dark:** `bg-amber-600`, `hover:bg-amber-600`
- **Primary light:** `bg-amber-50`, `text-amber-50`
- **Accent (teal):** `bg-teal-600`, `text-teal-600`
- **Background (off-white):** `bg-stone-50`
- **Surface (white):** `bg-white`
- **Surface muted:** `bg-stone-100`
- **Text primary:** `text-stone-900`
- **Text secondary:** `text-stone-600`
- **Text muted:** `text-stone-400`
- **Border:** `border-stone-200`

## Typography
- **Font:** Inter (loaded via Google Fonts in index.html)
- **Hero heading:** `text-5xl md:text-7xl font-extrabold text-stone-900 leading-tight`
- **Section heading:** `text-3xl md:text-4xl font-bold text-stone-900`
- **Card heading:** `text-xl font-semibold text-stone-900`
- **Body:** `text-base text-stone-600 leading-relaxed`
- **Label / caption:** `text-sm text-stone-400 uppercase tracking-wide`

## Spacing & Layout
- Page max width: `max-w-6xl mx-auto px-4 md:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card padding: `p-6`
- Gap between grid items: `gap-6 md:gap-8`

## Borders & Radius
- Cards: `rounded-2xl`
- Buttons: `rounded-full`
- Images: `rounded-2xl`
- Badges: `rounded-full`

## Shadows
- Cards: `shadow-md hover:shadow-xl transition-shadow`
- Hero image: `shadow-2xl`

## Buttons
- Primary: `bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-full transition-colors`
- Secondary/outline: `border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-semibold px-6 py-3 rounded-full transition-colors`

## Navigation
- Sticky top nav: `bg-white/90 backdrop-blur-sm border-b border-stone-200`
- Nav links: `text-stone-600 hover:text-amber-500 font-medium transition-colors`

## Cards
- White background, rounded-2xl, shadow-md, hover:shadow-xl
- Image on top, content below with p-6
- Always set `text-stone-900` for headings and `text-stone-600` for body inside cards

## Do's
- Use amber as the primary accent throughout
- Keep backgrounds light (stone-50 or white) for readability
- Use generous whitespace between sections
- Ensure all text has sufficient contrast against its background

## Don'ts
- Don't use dark backgrounds for body sections (only hero may use a dark overlay)
- Don't use amber text on amber backgrounds
- Don't use very small font sizes for body copy (min text-sm)
- Don't use more than 2 font weights in a single component
