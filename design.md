# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Formed.
- **Industry:** Industrial sheet metal folding machinery
- **Tone:** Authoritative, precise, trustworthy, approachable

## Color Palette
- **Primary (Deep Navy):** `#0D1B2A` — main backgrounds, headers, footer
- **Accent (Steel Blue):** `#1E6FA5` — CTAs, highlights, links
- **Accent Light (Sky):** `#4DA8DA` — hover states, secondary accents
- **Gold (Premium):** `#C9A84C` — premium badge, decorative lines, highlights
- **Surface (Light):** `#F4F6F9` — page background, card backgrounds
- **Surface Mid:** `#E8ECF2` — section alternates, borders
- **Text Dark:** `#0D1B2A` — headings on light backgrounds
- **Text Body:** `#3A4A5C` — body copy
- **Text Muted:** `#6B7A8D` — captions, labels
- **White:** `#FFFFFF` — text on dark backgrounds, card content

### Tailwind Config Custom Colors
```js
navy: '#0D1B2A'
steel: '#1E6FA5'
sky: '#4DA8DA'
gold: '#C9A84C'
surface: '#F4F6F9'
surfaceMid: '#E8ECF2'
bodyText: '#3A4A5C'
mutedText: '#6B7A8D'
```

## Typography
- **Font Family:** Inter (Google Fonts)
- **Headings:** font-bold, tracking-tight
  - H1: `text-5xl md:text-6xl font-bold`
  - H2: `text-3xl md:text-4xl font-bold`
  - H3: `text-xl md:text-2xl font-semibold`
- **Body:** `text-base font-normal leading-relaxed`
- **Caption/Label:** `text-sm font-medium tracking-wide uppercase`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-6 lg:px-8`
- Section padding: `py-20 md:py-28`
- Card padding: `p-6 md:p-8`
- Border radius: `rounded-xl` for cards, `rounded-full` for pills/badges

## Component Styles

### Buttons
- **Primary:** `bg-steel text-white hover:bg-sky px-8 py-3 rounded-lg font-semibold transition-all`
- **Secondary (outline):** `border-2 border-steel text-steel hover:bg-steel hover:text-white px-8 py-3 rounded-lg font-semibold transition-all`
- **Gold CTA:** `bg-gold text-navy hover:brightness-110 px-8 py-3 rounded-lg font-bold transition-all`

### Cards
- Background: `bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow`
- Border: subtle `border border-surfaceMid`

### Navigation
- Sticky top nav with `bg-navy/95 backdrop-blur`
- Logo in white, nav links in `text-white/80 hover:text-white`
- Active link underline in gold

### Section Dividers
- Thin gold horizontal rule: `border-t border-gold/30`

## Do's
- Use navy backgrounds for hero and footer sections
- Use surface (#F4F6F9) for alternating content sections
- Always pair dark backgrounds with white text
- Use gold sparingly as an accent/highlight color
- Maintain generous whitespace for an elegant feel
- Use subtle shadows on cards for depth

## Don'ts
- Don't use pure black (#000) — use navy instead
- Don't use low-contrast text (e.g. gray on gray)
- Don't crowd elements — maintain breathing room
- Don't use more than 2 accent colors per section
