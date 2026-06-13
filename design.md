# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Formed.
- **Tone:** Elegant, professional, trustworthy, industrial yet refined

## Color Palette
- **Primary (Deep Navy):** `#0D1B2A` — main backgrounds, navbar, footer
- **Accent (Steel Gold):** `#C9A84C` — CTAs, highlights, borders, icons
- **Secondary (Slate):** `#1E3A5F` — section backgrounds, card backgrounds
- **Light Surface:** `#F5F7FA` — light section backgrounds
- **Text Primary:** `#0D1B2A` — on light backgrounds
- **Text Light:** `#F5F7FA` — on dark backgrounds
- **Text Muted:** `#8A9BB0` — subtitles, captions on dark
- **Border:** `#C9A84C` with low opacity for dividers

### Tailwind Custom Colors (add to config)
```js
colors: {
  navy: { DEFAULT: '#0D1B2A', dark: '#070F17', light: '#1E3A5F' },
  gold: { DEFAULT: '#C9A84C', light: '#E2C97E', dark: '#A8872E' },
  slate: { DEFAULT: '#1E3A5F', light: '#2A4F7A' },
  surface: '#F5F7FA',
}
```

## Typography
- **Heading Font:** Playfair Display (serif) — elegant, authoritative
- **Body Font:** Inter (sans-serif) — clean, readable
- **Heading sizes:** h1: `text-5xl lg:text-7xl`, h2: `text-3xl lg:text-5xl`, h3: `text-xl lg:text-2xl`
- **Body:** `text-base` or `text-lg`, `leading-relaxed`
- **Letter spacing for headings:** `tracking-tight`
- **Uppercase labels:** `text-xs tracking-widest uppercase font-semibold`

## Spacing & Layout
- **Max content width:** `max-w-7xl mx-auto`
- **Section padding:** `py-20 lg:py-28 px-6 lg:px-8`
- **Card padding:** `p-8`
- **Grid gaps:** `gap-8` or `gap-10`

## Components

### Buttons
- **Primary:** `bg-gold text-navy font-semibold px-8 py-3 rounded-none hover:bg-gold-light transition-colors tracking-wide uppercase text-sm`
- **Outline:** `border border-gold text-gold px-8 py-3 rounded-none hover:bg-gold hover:text-navy transition-colors tracking-wide uppercase text-sm`
- No border-radius (sharp corners = industrial precision)

### Cards
- `bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow`
- Or dark variant: `bg-navy-light border border-gold/20`

### Navbar
- Fixed, `bg-navy/95 backdrop-blur`, gold accent on active links
- Logo in Playfair Display, gold color

### Section Dividers
- Thin gold line: `border-t border-gold/30`

## Do's
- Use sharp corners (no rounded-xl on major elements)
- Use gold sparingly as an accent — not everywhere
- Maintain generous whitespace
- Use uppercase tracking-widest for labels and section tags
- Dark sections alternate with light sections for rhythm

## Don'ts
- Don't use rounded-full on buttons
- Don't use bright/neon colors
- Don't crowd elements — keep breathing room
- Don't use more than 2 font families
