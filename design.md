# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Formed.
- **Tone:** Elegant, professional, trustworthy, approachable

## Color Palette
- **Primary (Deep Navy):** `#0D1B2A` — main backgrounds, navbar, footer
- **Accent (Steel Blue):** `#1E6FA5` — CTAs, highlights, links
- **Accent Light (Sky):** `#4DA8DA` — hover states, secondary accents
- **Gold (Premium):** `#C9A84C` — premium badges, decorative lines, highlights
- **Surface (Off-White):** `#F5F7FA` — page background, card backgrounds
- **Surface Dark:** `#1A2A3A` — dark section backgrounds
- **Text Primary:** `#0D1B2A` — headings on light backgrounds
- **Text Secondary:** `#4A5568` — body text, descriptions
- **Text Light:** `#F5F7FA` — text on dark backgrounds
- **Border:** `#E2E8F0` — subtle dividers

### Tailwind Config Custom Colors
```js
navy: '#0D1B2A'
steel: '#1E6FA5'
sky: '#4DA8DA'
gold: '#C9A84C'
surface: '#F5F7FA'
```

## Typography
- **Font Family:** "Inter" (Google Fonts) — clean, modern, readable
- **Headings:** font-bold, tracking-tight
  - H1: `text-5xl md:text-6xl lg:text-7xl`
  - H2: `text-3xl md:text-4xl`
  - H3: `text-xl md:text-2xl`
- **Body:** `text-base` or `text-lg`, `leading-relaxed`
- **Labels/Caps:** `text-xs uppercase tracking-widest font-semibold`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-6 lg:px-8`
- Section padding: `py-20 md:py-28`
- Card padding: `p-6 md:p-8`
- Border radius: `rounded-xl` for cards, `rounded-full` for pills/badges

## Components

### Buttons
- **Primary:** `bg-steel text-white hover:bg-sky px-8 py-3 rounded-lg font-semibold transition-all`
- **Outline:** `border-2 border-steel text-steel hover:bg-steel hover:text-white px-8 py-3 rounded-lg font-semibold transition-all`
- **Gold CTA:** `bg-gold text-navy hover:brightness-110 px-8 py-3 rounded-lg font-semibold transition-all`

### Cards
- `bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-border`
- Image on top, content below with generous padding

### Navigation
- Sticky top navbar with `bg-navy` background
- Logo left, links right
- Mobile: hamburger menu

### Sections
- Alternate between `bg-surface` and `bg-white` for visual rhythm
- Dark sections use `bg-navy text-white`
- Gold accent lines: `border-l-4 border-gold` or `h-1 w-16 bg-gold`

## Do's
- Use generous whitespace between sections
- Use gold accents sparingly for premium feel
- Use subtle shadows on cards
- Use uppercase tracking-widest for section labels
- Ensure all text is clearly readable against its background

## Don'ts
- Don't use light text on light backgrounds
- Don't use dark text on dark/navy backgrounds
- Don't crowd elements — maintain breathing room
- Don't use more than 3 font weights per section
