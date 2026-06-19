# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Velvet (base neutrals):**
  - `velvet-50`: #faf8f5 — warm off-white pages
  - `velvet-100`: #f3efe9 — card backgrounds
  - `velvet-200`: #e8e1d5 — subtle borders
  - `velvet-300`: #d4cbb9 — hairline dividers
  - `velvet-400`: #b8ad99 — muted text
  - `velvet-500`: #9c907b — secondary text
  - `velvet-600`: #7d7260 — body text
  - `velvet-700`: #5f5647 — strong body
  - `velvet-800`: #423c30 — headings
  - `velvet-900`: #2a2520 — dark surfaces
  - `velvet-950`: #181511 — deepest black-brown
- **Gold (warm metallic accent):**
  - `gold-50`: #fdf8f0
  - `gold-100`: #faf0db
  - `gold-200`: #f3ddb0
  - `gold-300`: #ecc880
  - `gold-400`: #e4b050
  - `gold-500`: #d8952a — primary accent
  - `gold-600`: #b87a20 — hover/active accent
  - `gold-700`: #936218

## Typography
- **Headings / Product names:** Playfair Display (serif), uppercase, wide tracking (`tracking-[0.15em]` to `tracking-[0.3em]`). Use `font-serif`.
- **Body / UI / Buttons:** Inter (sans-serif), clean, legible. Use `font-sans` (default).
- **Product card names:** UPPERCASE, tracking-[0.1em], font-serif.
- **Section labels:** `text-xs tracking-[0.2em] uppercase text-gold-600 font-medium`

## Spacing
- Section vertical padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-5`
- Card gaps: `gap-5 md:gap-6` (grid), `gap-8` (testimonials)
- Generous whitespace between sections.

## Borders & Dividers
- Thin `border-velvet-100` for cards and sections
- Hairline `border-t border-velvet-100` for accordion dividers
- Subtle shadows: `shadow-[0_1px_0_rgba(0,0,0,0.04)]` on nav

## Buttons
- Primary (accent): `bg-gold-600 text-white hover:bg-gold-500`
- Primary (dark): `bg-velvet-900 text-white hover:bg-velvet-800`
- Outlined: `border border-velvet-300 text-velvet-700 hover:border-velvet-700`
- All buttons: `rounded-sm`, `text-xs tracking-[0.1em] uppercase font-semibold`, `transition-colors`
- Add-to-cart: full-width accent button, `py-3.5`

## Images
- Warm-lit gold jewelry on dark/neutral backgrounds
- Editorial, model-worn, soft lighting
- 4:5 aspect for product images, 9:16 for UGC reels

## Animations
- `fade-in`: opacity 0→1, for mobile menu
- `slide-up`: translateY 20px → 0, for section reveals
- `slide-in-right`: translateX 100% → 0, for cart drawer
- Duration: 300-500ms, ease-out

## Do's
- Use uppercase + wide tracking for product names
- Use gold accent sparingly — only for CTAs, stars, section labels
- Keep backgrounds warm neutral (velvet-50, white)
- Use `rounded-sm` everywhere (subtle, not pill-like)

## Don'ts
- Don't use bright/loud colors
- Don't use `rounded-full` or `rounded-xl`
- Don't use heavy drop shadows
- Don't use discount badges or sale language
- Don't use pure black (#000)
