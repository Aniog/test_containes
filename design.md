# ARTITECT MACHINERY — Design System

## Brand Identity
Industrial precision meets refined elegance. The brand communicates trust, quality, and technical mastery in sheet metal fabrication machinery.

## Color Palette
- **Primary (Deep Navy):** `#0D1B2A` — main backgrounds, headers
- **Secondary (Steel Blue):** `#1B4F72` — section accents, card borders
- **Accent (Burnished Gold):** `#C9A84C` — CTAs, highlights, hover states
- **Light Gold:** `#E8C97A` — hover tints on gold elements
- **Surface (Off-White):** `#F5F5F0` — light section backgrounds
- **Card Background:** `#FFFFFF`
- **Text Primary:** `#0D1B2A`
- **Text Secondary:** `#4A5568`
- **Text Muted:** `#718096`
- **Border:** `#E2E8F0`

In Tailwind config, these are mapped as:
- `navy` → `#0D1B2A`
- `steel` → `#1B4F72`
- `gold` → `#C9A84C`
- `gold-light` → `#E8C97A`
- `surface` → `#F5F5F0`

## Typography
- **Font Family:** "Playfair Display" (headings) + "Inter" (body)
- **H1:** `text-5xl md:text-6xl font-bold font-display tracking-tight`
- **H2:** `text-3xl md:text-4xl font-bold font-display`
- **H3:** `text-xl font-semibold font-display`
- **Body:** `text-base font-sans text-gray-700`
- **Caption/Label:** `text-sm font-medium tracking-widest uppercase`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-6 lg:px-8`
- Section padding: `py-20 md:py-28`
- Card padding: `p-8`
- Border radius: `rounded-2xl` for cards, `rounded-full` for pills/badges

## Component Styles

### Buttons
- **Primary CTA:** `bg-gold text-navy font-semibold px-8 py-3 rounded-full hover:bg-gold-light transition-all`
- **Secondary Outline:** `border-2 border-gold text-gold px-8 py-3 rounded-full hover:bg-gold hover:text-navy transition-all`
- **Ghost (dark bg):** `text-white border border-white/30 px-8 py-3 rounded-full hover:bg-white/10`

### Cards
- `bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 p-8`

### Navigation
- Sticky top nav with `bg-navy/95 backdrop-blur` on scroll
- Logo in gold, nav links in white with gold hover

### Dividers / Accents
- Gold horizontal rule: `border-t-2 border-gold w-16`
- Section labels: small uppercase gold text above headings

## Do's
- Use generous whitespace between sections
- Pair dark navy sections with gold accents for drama
- Use subtle gradients on hero: `from-navy to-steel`
- Keep product cards clean with strong imagery
- Use `tracking-widest uppercase text-gold text-sm` for section eyebrows

## Don'ts
- Don't use pure black backgrounds — use `#0D1B2A` navy instead
- Don't use bright/neon colors
- Don't crowd elements — maintain breathing room
- Don't use more than 2 font families
