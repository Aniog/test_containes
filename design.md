# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `#FAF8F5` — warm off-white for page backgrounds
- **Surface (ivory):** `#F5F0EB` — slightly warmer for cards and sections
- **Foreground (charcoal):** `#1A1A1A` — primary text
- **Muted text:** `#6B6560` — secondary/body text
- **Accent (gold):** `#B8860B` — warm dark gold for CTAs, links, highlights
- **Accent hover:** `#9A7209` — darker gold on hover
- **Accent light:** `#F5ECD7` — light gold tint for backgrounds
- **Border:** `#E8E2DB` — warm hairline dividers
- **Dark section:** `#1A1A1A` — for newsletter/footer backgrounds

### Tailwind Config Names
- `cream`, `ivory`, `charcoal`, `muted`, `gold`, `gold-dark`, `gold-light`, `border-warm`, `dark`

## Typography
- **Headings:** Cormorant Garamond (serif), weights 400/500/600
- **Body/UI:** Inter (sans-serif), weights 300/400/500/600
- **Product names:** UPPERCASE, letter-spacing `0.15em`, Cormorant Garamond 500

### Scale (Tailwind)
- Hero headline: `text-5xl md:text-7xl font-serif font-light`
- Section titles: `text-3xl md:text-4xl font-serif font-normal`
- Product names: `text-sm font-serif font-medium uppercase tracking-widest`
- Body: `text-base font-sans text-muted`
- Small/caption: `text-xs font-sans text-muted tracking-wide uppercase`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card padding: `p-4 md:p-6`
- Grid gaps: `gap-4 md:gap-6`

## Components
- **Buttons:** Solid gold bg with cream text, or outlined with gold border. Rounded `rounded-none` (sharp edges for luxury). Padding `px-8 py-3`. Uppercase tracking-wide text-sm.
- **Cards:** No border, subtle shadow on hover `shadow-sm hover:shadow-md`. Transition `transition-all duration-300`.
- **Dividers:** 1px `border-border-warm` hairlines.
- **Images:** Object-cover, aspect ratios maintained. Hover scale `hover:scale-105 transition-transform duration-500`.

## Do's
- Use generous whitespace
- Keep text minimal and elegant
- Use serif for emotional/brand text, sans for functional UI
- Maintain warm tones throughout
- Use subtle transitions (300-500ms)

## Don'ts
- No rounded buttons (use sharp/square edges)
- No bright/neon colors
- No heavy shadows or borders
- No cluttered layouts
- No discount/sale-style badges
- No generic stock photo feel
