# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `#FAF7F2` — warm off-white for page backgrounds
- **Foreground (charcoal):** `#1A1A1A` — near-black for body text
- **Accent (gold):** `#B8860B` — warm dark gold for CTAs, highlights, accents
- **Accent hover:** `#9A7209` — deeper gold on hover
- **Muted:** `#F5F0E8` — soft warm beige for cards, sections
- **Muted foreground:** `#6B5E4F` — warm brown-gray for secondary text
- **Border:** `#E8E0D4` — warm hairline dividers
- **Dark surface:** `#1A1A1A` — for hero overlays, dark sections
- **Dark surface text:** `#FAF7F2` — cream text on dark surfaces

## Typography
- **Headings / Product names:** Cormorant Garamond (serif), weight 300–600
- **Body / UI:** Inter (sans-serif), weight 300–500
- **Product names:** UPPERCASE, letter-spacing: 0.15em
- **Section headings:** Cormorant Garamond, font-size 2.5–3.5rem, weight 300

## Spacing & Layout
- Generous whitespace: sections py-20 to py-28
- Container max-width: 1280px, px-6
- Product grid gap: 1.5rem–2rem
- Cards: no heavy borders, subtle shadow on hover

## Components
- **Buttons:** Rounded-none (square), bg-accent text-white or outlined with border-accent
- **Dividers:** 1px border-border, full width or partial
- **Cards:** bg-white, subtle hover shadow, transition-all duration-300
- **Hover effects:** scale(1.02), opacity transitions, translateY(-2px)

## Do's
- Use Tailwind classes: `font-serif` for Cormorant, default sans for Inter
- Use named colors from tailwind config: `bg-cream`, `text-charcoal`, `bg-accent`, `text-muted-fg`, `border-border`
- Keep generous padding and whitespace
- Use uppercase tracking-widest for product names
- Subtle transitions: `transition-all duration-300 ease-in-out`

## Don'ts
- No hardcoded hex in class strings
- No rounded buttons (use sharp/square edges for premium feel)
- No heavy drop shadows
- No bright/neon colors
- No cluttered layouts
