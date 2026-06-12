# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Formed.
- **Tone:** Elegant, professional, trustworthy, approachable

## Color Palette
- **Primary (Deep Navy):** `#0D1B2A` — main backgrounds, headers
- **Accent (Steel Blue):** `#1E6FA5` — CTAs, highlights, links
- **Accent Light (Sky):** `#4DA6D9` — hover states, secondary accents
- **Gold (Premium):** `#C9A84C` — premium highlights, badges, borders
- **Surface (Light Gray):** `#F4F6F9` — section backgrounds
- **Surface Dark:** `#1A2A3A` — dark card backgrounds
- **Text Primary:** `#0D1B2A` — body text on light backgrounds
- **Text Light:** `#F4F6F9` — text on dark backgrounds
- **Text Muted:** `#6B7A8D` — secondary text, captions
- **Border:** `#D1D9E0` — subtle borders

### Tailwind Config Custom Colors
Add to tailwind.config.js:
```js
navy: '#0D1B2A'
steel: '#1E6FA5'
sky: '#4DA6D9'
gold: '#C9A84C'
surface: '#F4F6F9'
'surface-dark': '#1A2A3A'
muted: '#6B7A8D'
```

## Typography
- **Font Family:** "Inter" (Google Fonts) — clean, modern, readable
- **Display / Hero:** `text-5xl font-bold tracking-tight` (Inter 700)
- **Section Headings:** `text-3xl font-semibold tracking-tight`
- **Card Titles:** `text-xl font-semibold`
- **Body:** `text-base font-normal leading-relaxed`
- **Caption / Label:** `text-sm font-medium text-muted`
- **Button:** `text-sm font-semibold uppercase tracking-wider`

## Spacing & Layout
- **Max content width:** `max-w-7xl mx-auto px-6 lg:px-8`
- **Section padding:** `py-20 lg:py-28`
- **Card padding:** `p-8`
- **Grid gaps:** `gap-8` for cards, `gap-4` for tight layouts

## Components

### Buttons
- **Primary:** `bg-steel text-white px-8 py-3 rounded-sm font-semibold uppercase tracking-wider hover:bg-sky transition-colors`
- **Outline:** `border-2 border-gold text-gold px-8 py-3 rounded-sm font-semibold uppercase tracking-wider hover:bg-gold hover:text-navy transition-colors`
- **Ghost:** `text-steel underline-offset-4 hover:underline`

### Cards
- Light: `bg-white border border-border rounded-lg shadow-sm p-8`
- Dark: `bg-surface-dark text-surface rounded-lg p-8`

### Navigation
- Sticky top nav with navy background
- Logo left, links right
- Active link: gold underline
- Mobile: hamburger menu

### Section Dividers
- Thin gold line: `border-t border-gold/30`
- Subtle: `border-t border-border`

## Do's
- Use generous whitespace between sections
- Use gold accents sparingly for premium feel
- Pair dark navy sections with light sections for rhythm
- Use subtle shadows on cards: `shadow-md`
- Use `rounded-sm` (2px) for industrial/precision feel on buttons
- Use `rounded-lg` for cards

## Don'ts
- Don't use bright/neon colors
- Don't crowd elements — maintain breathing room
- Don't use more than 2 accent colors per section
- Don't use all-caps for body text
- Don't use low-contrast text combinations
