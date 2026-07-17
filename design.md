# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `cream` → `#FAF7F2` — warm off-white page base
- **Foreground (charcoal):** `charcoal` → `#1C1917` — primary text
- **Accent (gold):** `gold` → `#B8860B` — CTA buttons, highlights, hover states
- **Gold light:** `gold-light` → `#D4A843` — lighter gold for borders/accents
- **Muted:** `muted` → `#F5F0E8` — card backgrounds, subtle sections
- **Muted foreground:** `muted-fg` → `#78716C` — secondary text, captions
- **Border:** `border` → `#E8E0D4` — hairline dividers

## Typography
- **Headings / Product names:** `Cormorant Garamond` (serif), weights 400–700
- **Body / UI:** `Inter` (sans-serif), weights 300–600
- **Product names:** UPPERCASE, letter-spacing `0.15em`
- **Section headings:** Serif, normal case or uppercase depending on context

### Scale (Tailwind)
- Hero headline: `text-4xl md:text-6xl lg:text-7xl font-serif font-light`
- Section title: `text-3xl md:text-4xl font-serif font-normal`
- Product name: `text-sm md:text-base font-sans uppercase tracking-widest`
- Body: `text-base font-sans font-normal`
- Caption/small: `text-sm font-sans text-muted-fg`

## Spacing
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: `p-0` (image flush) or `p-6` for text cards

## Borders & Dividers
- Hairline: `border-b border-border` (1px)
- Card borders: none or `border border-border`

## Buttons
- Primary: `bg-gold text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-gold-light transition-colors`
- Secondary/outlined: `border border-gold text-gold px-8 py-3 text-sm uppercase tracking-widest hover:bg-gold hover:text-white transition-colors`
- Pill variant selector: `border border-border px-4 py-2 rounded-full text-sm hover:border-gold`

## Shadows & Effects
- Cards: `shadow-none` or very subtle `shadow-sm`
- Hover transitions: `transition-all duration-300 ease-in-out`
- Image hover: slight scale `hover:scale-105` with overflow hidden

## Do's
- Use generous whitespace between sections
- Keep imagery large and editorial
- Use thin hairline dividers sparingly
- Maintain warm, golden tone throughout
- Ensure all text is clearly readable (high contrast)

## Don'ts
- No heavy drop shadows
- No bright/neon colors
- No rounded corners on cards (use `rounded-none` or very subtle `rounded-sm`)
- No cluttered layouts
- No discount/sale-style badges or loud CTAs
