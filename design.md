# Bakery Site Design System

## Brand Identity
Warm, artisan, inviting. The site evokes the feeling of a cozy neighborhood bakery — handcrafted quality, natural ingredients, and a welcoming atmosphere.

## Color Palette
All hex values are registered as named Tailwind colors in `tailwind.config.js`.

| Name         | Hex       | Usage                                      |
|--------------|-----------|--------------------------------------------|
| `cream`      | `#FDF6EC`  | Page background, light section backgrounds |
| `warm-white` | `#FFFDF8`  | Card backgrounds, nav background           |
| `brown`      | `#5C3D2E`  | Primary text, headings                     |
| `brown-dark` | `#3B2314`  | Dark headings, footer background           |
| `brown-light`| `#8B6347`  | Secondary text, muted labels               |
| `amber`      | `#D4873A`  | Primary accent, CTAs, highlights           |
| `amber-light`| `#F2C07E`  | Hover states, decorative accents           |
| `sage`       | `#7A8C6E`  | Secondary accent, tags, badges             |

## Typography
- **Font**: Playfair Display (headings) + Inter (body) — loaded via Google Fonts in `index.html`
- **Headings**: `font-playfair` class, `text-brown-dark`, bold
- **Body**: `font-sans` (Inter), `text-brown`, regular weight
- **Labels / Captions**: `text-brown-light`, small size

### Scale
- Hero title: `text-5xl md:text-7xl font-playfair font-bold text-brown-dark`
- Section title: `text-3xl md:text-4xl font-playfair font-bold text-brown-dark`
- Card title: `text-xl font-playfair font-semibold text-brown-dark`
- Body: `text-base text-brown`
- Caption: `text-sm text-brown-light`

## Spacing
- Section padding: `py-20 px-6 md:px-12`
- Card padding: `p-6`
- Gap between cards: `gap-8`

## Borders & Radius
- Cards: `rounded-2xl`
- Buttons: `rounded-full`
- Images: `rounded-2xl`
- Dividers: `border-amber/30`

## Shadows
- Cards: `shadow-md hover:shadow-xl transition-shadow`
- Nav: `shadow-sm`

## Buttons
- Primary: `bg-amber text-warm-white rounded-full px-8 py-3 font-semibold hover:bg-amber-light transition-colors`
- Outline: `border-2 border-amber text-amber rounded-full px-8 py-3 font-semibold hover:bg-amber hover:text-warm-white transition-colors`

## Sections (in order)
1. **Nav** — sticky, warm-white bg, logo left, links right
2. **Hero** — full-height, background image, centered headline + CTA
3. **Menu / Specialties** — 3-column card grid with product images
4. **Articles / Blog** — 3-column article card grid with image, date, title, excerpt
5. **About** — 2-column layout: text left, image right
6. **Footer** — dark brown bg, white text, links + copyright

## Do's
- Use warm, earthy tones throughout
- Use Playfair Display for all headings
- Use rounded corners on all cards and images
- Keep generous whitespace between sections

## Don'ts
- Don't use cold blues or grays as primary colors
- Don't use sharp corners on cards
- Don't use dark backgrounds for main content sections
- Don't use low-contrast text (e.g. amber on white without sufficient weight)
