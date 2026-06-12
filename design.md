# ARTITECT MACHINERY — Design System

## Brand Identity
Industrial precision meets refined elegance. The brand communicates trust, quality, and technical mastery in sheet metal fabrication machinery.

## Color Palette
- **Primary (Deep Navy):** `#0D1B2A` — main backgrounds, headers, footer
- **Accent (Steel Blue):** `#1E6FA5` — CTAs, highlights, links
- **Accent Light (Sky):** `#4DA6D9` — hover states, secondary accents
- **Gold (Premium):** `#C9A84C` — premium badge, decorative lines, highlights
- **Surface (Off-White):** `#F5F7FA` — section backgrounds, cards
- **Surface Dark:** `#1A2B3C` — dark card backgrounds
- **Text Primary:** `#0D1B2A` — body text on light backgrounds
- **Text Light:** `#F5F7FA` — text on dark backgrounds
- **Text Muted:** `#6B7A8D` — secondary text, captions
- **Border:** `#D1D9E0` — subtle dividers

Tailwind config custom colors:
- `navy`: `#0D1B2A`
- `steel`: `#1E6FA5`
- `sky-accent`: `#4DA6D9`
- `gold`: `#C9A84C`
- `surface`: `#F5F7FA`
- `surface-dark`: `#1A2B3C`
- `muted-text`: `#6B7A8D`

## Typography
- **Font Family:** "Inter" (Google Fonts) — clean, modern, professional
- **Display / Hero:** `text-5xl md:text-7xl font-bold tracking-tight`
- **Section Heading:** `text-3xl md:text-4xl font-bold tracking-tight`
- **Sub-heading:** `text-xl md:text-2xl font-semibold`
- **Body:** `text-base font-normal leading-relaxed`
- **Caption / Label:** `text-sm font-medium tracking-wide uppercase`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-6 md:px-12`
- Card padding: `p-8`
- Gap between cards: `gap-6 md:gap-8`

## Borders & Shadows
- Card border: `border border-border rounded-2xl`
- Elevated card: `shadow-lg hover:shadow-xl transition-shadow`
- Accent line: `border-l-4 border-gold`
- Rounded buttons: `rounded-full`

## Buttons
- **Primary CTA:** `bg-steel text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-accent transition-colors`
- **Secondary CTA:** `border-2 border-gold text-gold px-8 py-3 rounded-full font-semibold hover:bg-gold hover:text-navy transition-colors`
- **Ghost:** `text-steel underline-offset-4 hover:underline`

## Do's
- Use generous whitespace to convey premium quality
- Use the gold accent sparingly for maximum impact
- Maintain strong contrast between text and backgrounds
- Use subtle gradients on dark sections (navy to surface-dark)
- Use uppercase tracking-wide labels for section tags

## Don'ts
- Don't use bright/neon colors — keep palette restrained
- Don't crowd elements — let the design breathe
- Don't use more than 2 font weights in a single section
- Don't use rounded corners larger than `rounded-2xl` on cards
