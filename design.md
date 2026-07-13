# ARTITECT MACHINERY — Design System

## Brand Identity
Industrial precision meets refined elegance. ARTITECT MACHINERY positions itself as a premium, trustworthy manufacturer of sheet metal folding machines. The visual language is clean, authoritative, and approachable.

## Color Palette

### Primary Colors
- **Navy Deep** `#0D1B2A` — primary background, headers, navbar
- **Steel Blue** `#1B3A5C` — secondary backgrounds, card surfaces
- **Slate Mid** `#2E4A6B` — hover states, borders

### Accent Colors
- **Gold** `#C9A84C` — primary accent, CTAs, highlights, icons
- **Gold Light** `#E8C97A` — hover state for gold elements

### Neutral Colors
- **Off White** `#F5F0E8` — body text on dark backgrounds
- **Light Gray** `#D4D8E0` — secondary text, borders
- **Mist** `#EEF1F5` — light section backgrounds
- **White** `#FFFFFF` — cards, clean surfaces

### Semantic Colors
- **Success** `#2E7D52`
- **Error** `#C0392B`

## Typography

### Font Family
- **Headings**: `Playfair Display` — serif, elegant, authoritative
- **Body / UI**: `Inter` — clean, readable, modern

### Scale
- `text-xs` — 12px — labels, captions
- `text-sm` — 14px — secondary body, metadata
- `text-base` — 16px — primary body text
- `text-lg` — 18px — lead paragraphs
- `text-xl` — 20px — card titles
- `text-2xl` — 24px — section subtitles
- `text-3xl` — 30px — section titles
- `text-4xl` — 36px — page titles
- `text-5xl` — 48px — hero headline
- `text-6xl` — 60px — hero display

### Font Weights
- Regular `400` — body text
- Medium `500` — UI labels, nav links
- Semibold `600` — card titles, subheadings
- Bold `700` — section headings
- Extrabold `800` — hero headlines

## Spacing
Use Tailwind's default spacing scale. Key values:
- Section vertical padding: `py-20` or `py-24`
- Container max-width: `max-w-7xl mx-auto px-6`
- Card padding: `p-8`
- Gap between cards: `gap-8`

## Borders & Radius
- Cards: `rounded-2xl`
- Buttons: `rounded-full` (pill) or `rounded-lg`
- Inputs: `rounded-lg`
- Dividers: `border-slate-700` on dark, `border-gray-200` on light

## Shadows
- Cards on dark: `shadow-xl shadow-black/30`
- Cards on light: `shadow-lg shadow-gray-200`
- Hover lift: `hover:shadow-2xl hover:-translate-y-1 transition-all`

## Buttons

### Primary (Gold CTA)
```
bg-gold text-navy-deep font-semibold px-8 py-3 rounded-full hover:bg-gold-light transition-all
```

### Secondary (Outlined)
```
border border-gold text-gold font-semibold px-8 py-3 rounded-full hover:bg-gold hover:text-navy-deep transition-all
```

### Ghost (Dark)
```
text-off-white font-medium hover:text-gold transition-colors
```

## Component Patterns

### Navbar
- Dark background (`navy-deep`)
- Logo left, nav links center/right
- Gold accent on active/hover links
- Sticky with backdrop blur on scroll

### Section Layout
- Alternating light/dark sections for visual rhythm
- Dark sections: `bg-navy-deep` or `bg-steel-blue`
- Light sections: `bg-mist` or `bg-white`

### Product Cards
- Dark card surface `bg-steel-blue`
- Gold top border accent `border-t-4 border-gold`
- Image top, content below
- Hover: lift + glow effect

### Feature Icons
- Gold icon on dark circle background
- Clean label below

## Do's
- Use generous whitespace — never crowd elements
- Maintain strong contrast: white/off-white text on dark, dark text on light
- Use gold sparingly as a true accent — not everywhere
- Use Playfair Display only for headings, never body text
- Keep CTAs prominent with gold color

## Don'ts
- Don't use light text on light backgrounds
- Don't use dark text on dark backgrounds
- Don't use more than 2 accent colors per section
- Don't use rounded corners larger than `rounded-2xl` on cards
- Don't use generic stock imagery — prefer industrial/machinery themes
