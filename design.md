# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `--color-cream` → `#FAF7F2` — warm off-white for page backgrounds
- **Background (dark):** `--color-charcoal` → `#1A1714` — deep warm black for hero/contrast sections
- **Text primary:** `--color-ink` → `#2C2825` — warm near-black for body text
- **Text secondary:** `--color-stone` → `#6B6560` — muted warm gray for secondary text
- **Accent (gold):** `--color-gold` → `#B8956A` — warm antique gold for CTAs, accents, highlights
- **Accent hover:** `--color-gold-dark` → `#9A7A55` — darker gold for hover states
- **Border/divider:** `--color-sand` → `#E8E2DA` — subtle warm border color
- **Card surface:** `--color-linen` → `#F5F0EA` — slightly darker cream for cards

## Typography
- **Headings / Product names:** `font-family: 'Cormorant Garamond', serif`
  - Product names: `uppercase tracking-[0.2em]`
  - Hero headings: `text-4xl md:text-6xl lg:text-7xl font-light`
- **Body / UI:** `font-family: 'Inter', sans-serif`
  - Body: `text-sm md:text-base font-normal`
  - Small/labels: `text-xs uppercase tracking-widest`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24 lg:py-32`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Product grid gaps: `gap-4 md:gap-6`

## Components
- **Buttons (primary):** `bg-gold text-cream px-8 py-3 text-xs uppercase tracking-widest font-medium hover:bg-gold-dark transition-colors duration-300`
- **Buttons (outlined):** `border border-gold text-gold px-8 py-3 text-xs uppercase tracking-widest hover:bg-gold hover:text-cream transition-colors duration-300`
- **Dividers:** `border-t border-sand` — thin hairline, warm tone
- **Cards:** `bg-linen` or `bg-cream` with no border, subtle `shadow-sm` on hover
- **Hover transitions:** `transition-all duration-300 ease-in-out`

## Do's
- Use generous whitespace between sections
- Keep product images large and editorial
- Use serif for emotional/brand text, sans-serif for functional UI
- Maintain warm tones throughout
- Use subtle opacity transitions on hover

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on product cards (use `rounded-none` or very subtle `rounded-sm`)
- No busy patterns or gradients
- No discount-style badges or flashy sale banners
