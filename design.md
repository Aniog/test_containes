# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Elegantly Crafted.
- **Tone:** Professional, trustworthy, industrial yet refined

---

## Color Palette

| Name         | Hex       | Tailwind Token  | Usage                              |
|--------------|-----------|------------------|------------------------------------|
| Steel Black  | #0D0F14   | `steel-black`    | Primary background, navbar         |
| Charcoal     | #1A1D24   | `charcoal`       | Section backgrounds, cards         |
| Iron Gray    | #2C3140   | `iron-gray`      | Borders, dividers                  |
| Silver       | #8A9BB0   | `silver`         | Secondary text, muted labels       |
| Platinum     | #D4DCE8   | `platinum`       | Body text on dark backgrounds      |
| White        | #F5F7FA   | `off-white`      | Headings, high-contrast text       |
| Gold Accent  | #C9A84C   | `gold`           | CTAs, highlights, hover states     |
| Gold Light   | #E8C96A   | `gold-light`     | Hover glow on gold elements        |
| Light BG     | #F0F2F5   | `light-bg`       | Light section backgrounds          |
| Light Text   | #1A1D24   | `light-text`     | Text on light backgrounds          |

---

## Typography

- **Primary Font:** Playfair Display (headings — elegant serif)
- **Secondary Font:** Inter (body, labels, UI — clean sans-serif)
- **Google Fonts embed:** Both fonts loaded in index.html

### Scale
- `text-xs` — 12px — captions, badges
- `text-sm` — 14px — labels, nav links
- `text-base` — 16px — body text
- `text-lg` — 18px — subheadings
- `text-xl` — 20px — card titles
- `text-2xl` — 24px — section subtitles
- `text-3xl` — 30px — section headings
- `text-4xl` — 36px — page headings
- `text-5xl` — 48px — hero headings
- `text-6xl` — 60px — hero display

---

## Spacing & Layout

- Max content width: `max-w-7xl` with `mx-auto px-6 lg:px-12`
- Section vertical padding: `py-20 lg:py-28`
- Card padding: `p-8`
- Border radius: `rounded-lg` for cards, `rounded-full` for pills/badges
- Grid: 1 col mobile → 2 col tablet → 3 col desktop

---

## Component Styles

### Navbar
- Dark background (`steel-black`), sticky top
- Logo in Playfair Display, gold accent
- Nav links in platinum, gold on hover
- CTA button: gold background, steel-black text

### Buttons
- **Primary:** `bg-gold text-steel-black font-semibold px-8 py-3 rounded hover:bg-gold-light transition`
- **Secondary (outline):** `border border-gold text-gold px-8 py-3 rounded hover:bg-gold hover:text-steel-black transition`
- **Ghost:** `text-platinum hover:text-gold transition`

### Cards (Product)
- Background: `charcoal`
- Border: `border border-iron-gray`
- Hover: subtle gold border glow `hover:border-gold`
- Image: 4:3 ratio, top of card
- Title: `text-off-white font-playfair text-xl`
- Description: `text-silver text-sm`

### Section Headings
- Eyebrow label: `text-gold text-sm font-semibold tracking-widest uppercase`
- Main heading: `text-off-white font-playfair text-4xl`
- On light sections: `text-light-text`

---

## Do's and Don'ts

### Do's
- Use Playfair Display for all headings
- Use Inter for all body/UI text
- Use gold sparingly as an accent — CTAs, highlights, hover states
- Maintain high contrast: white/platinum text on dark backgrounds
- Use generous whitespace for an elegant feel
- Use subtle borders and shadows rather than heavy outlines

### Don'ts
- Don't use bright/neon colors — keep the palette industrial and refined
- Don't use rounded-full on rectangular cards
- Don't stack more than 3 columns on desktop for product cards
- Don't use low-contrast text (e.g., silver on charcoal for important content)
- Don't use inline styles — always use Tailwind classes
- Don't hardcode hex values in JSX — use named Tailwind tokens
