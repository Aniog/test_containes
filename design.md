# Pizza Site Design System

## Brand Identity
Warm, rustic Italian pizzeria with a modern edge. Feels authentic, inviting, and appetizing.

## Color Palette
- **Primary Red**: `#C0392B` (tomato red) — `text-pizza-red`, `bg-pizza-red`
- **Deep Red**: `#922B21` — hover states, accents
- **Warm Orange**: `#E67E22` — highlights, badges, CTAs
- **Cream / Off-white**: `#FDF6EC` — page background, card backgrounds
- **Dark Brown**: `#2C1A0E` — headings, footer background
- **Warm Gray**: `#7D6B5E` — body text, muted labels
- **Gold**: `#D4A017` — star ratings, premium accents

## Typography
- **Font**: "Playfair Display" (headings) + "Inter" (body) — loaded via Google Fonts
- **Heading sizes**: `text-5xl` / `text-4xl` / `text-3xl` / `text-2xl`
- **Body**: `text-base` (16px), `leading-relaxed`
- **Uppercase labels**: `text-xs tracking-widest uppercase font-semibold`

## Spacing & Layout
- Section padding: `py-20 px-6` on desktop, `py-12 px-4` on mobile
- Max content width: `max-w-6xl mx-auto`
- Card gap: `gap-8`
- Border radius: `rounded-2xl` for cards, `rounded-full` for badges/buttons

## Buttons
- **Primary CTA**: `bg-pizza-red text-white px-8 py-3 rounded-full font-semibold hover:bg-deep-red transition`
- **Secondary**: `border-2 border-pizza-red text-pizza-red px-8 py-3 rounded-full font-semibold hover:bg-pizza-red hover:text-white transition`

## Cards
- Background: `bg-white` or `bg-cream`
- Shadow: `shadow-lg hover:shadow-xl transition`
- Border radius: `rounded-2xl`
- Padding: `p-6`

## Sections
- Hero: full-viewport, dark overlay on background image, centered text
- Menu: cream background, 3-column grid on desktop, 1-column on mobile
- About: alternating image + text layout
- Features: icon grid on warm background
- Footer: dark brown background, white text

## Do's
- Use warm, food-photography-style images
- Keep headings in Playfair Display for elegance
- Use generous whitespace between sections
- Highlight prices in pizza-red or warm-orange

## Don'ts
- No cold blues or grays as primary colors
- No tight, cramped layouts
- No invisible text — always ensure contrast on colored backgrounds
