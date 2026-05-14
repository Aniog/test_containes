# Sky Website Design System

## Theme
A serene, awe-inspiring sky-themed website. The visual language evokes the feeling of looking up — vast, open, and beautiful.

## Color Palette
- **Deep Sky Blue**: `#0ea5e9` (sky-500) — primary accent
- **Midnight**: `#0c1a2e` — dark backgrounds, hero overlays
- **Twilight**: `#1e3a5f` — section backgrounds
- **Horizon**: `#7dd3fc` (sky-300) — light accents, highlights
- **Cloud White**: `#f0f9ff` (sky-50) — text on dark backgrounds
- **Sunset Orange**: `#f97316` (orange-500) — warm accent for sunset sections
- **Aurora Purple**: `#a855f7` (purple-500) — night sky accent
- **Gold**: `#fbbf24` (amber-400) — stars, highlights

Do's:
- Use sky-50 or white text on dark/blue backgrounds
- Use sky-900 or midnight text on light backgrounds
- Gradient backgrounds from deep blue to lighter sky tones

Don'ts:
- Never use light text on light backgrounds
- Avoid harsh pure black; use midnight (#0c1a2e) instead

## Typography
- **Font**: Inter (Google Fonts)
- **Hero Title**: `text-5xl md:text-7xl font-bold tracking-tight text-white`
- **Section Title**: `text-3xl md:text-4xl font-bold text-sky-50`
- **Body**: `text-base text-sky-100 leading-relaxed`
- **Caption**: `text-sm text-sky-300`

## Spacing
- Section padding: `py-16 md:py-24 px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`
- Container max width: `max-w-7xl mx-auto`

## Borders & Shadows
- Cards: `rounded-2xl overflow-hidden shadow-xl`
- Image overlays: `bg-gradient-to-t from-midnight/80 to-transparent`

## Backgrounds
- Hero: full-screen image with dark overlay gradient
- Sections alternate between `bg-[#0c1a2e]` and `bg-[#0a1628]`
- Subtle star/dot pattern for night sections

## Components
- **NavBar**: fixed top, semi-transparent dark background, blur effect
- **Hero**: full-viewport height, centered text, scroll indicator
- **Image Cards**: rounded corners, hover zoom effect, caption overlay
- **Gallery Grid**: responsive masonry-style grid
- **Quote Block**: large italic text, centered, sky accent border
