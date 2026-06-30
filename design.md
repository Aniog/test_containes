# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Background (cream):** `#FAF7F2` — warm off-white, flatters gold
- **Surface (ivory):** `#F5F0E8` — slightly deeper warm neutral for cards/sections
- **Foreground (charcoal):** `#1A1A1A` — near-black for primary text
- **Muted text:** `#6B6560` — warm gray for secondary text
- **Accent (gold):** `#B8860B` — dark goldenrod, the primary CTA/accent color
- **Accent hover:** `#9A7209` — deeper gold for hover states
- **Accent light:** `#D4A843` — lighter gold for subtle highlights
- **Border:** `#E8E2D9` — warm hairline dividers
- **Dark section:** `#2C2420` — deep warm brown for contrast sections (newsletter, footer)
- **Dark section text:** `#FAF7F2` — cream text on dark backgrounds

## Typography
- **Headings / Product names:** `Cormorant Garamond`, serif. Weights: 400, 500, 600.
- **Body / UI:** `Inter`, sans-serif. Weights: 300, 400, 500, 600.
- **Product names:** UPPERCASE, letter-spacing: `0.15em`
- **Section headings:** Normal case or uppercase depending on context, generous letter-spacing `0.05em`

### Tailwind classes
- Heading serif: `font-serif` (mapped to Cormorant Garamond)
- Body sans: `font-sans` (mapped to Inter)
- Product name style: `font-serif uppercase tracking-[0.15em]`
- Section title: `font-serif text-3xl md:text-4xl`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card padding: `p-4 md:p-6`
- Grid gaps: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline dividers: `border-border` (1px, warm neutral)
- Card borders: subtle or none, rely on background contrast
- Rounded corners: minimal — `rounded-none` or `rounded-sm` for premium feel

## Buttons
- Primary (accent): `bg-accent text-white hover:bg-accent-hover` — solid gold
- Secondary (outlined): `border border-accent text-accent hover:bg-accent hover:text-white`
- Pill shape for variant selectors: `rounded-full px-4 py-2`
- Transitions: `transition-all duration-300`

## Shadows & Effects
- Soft shadows on hover: `hover:shadow-lg`
- Image overlays: subtle gradient overlays for text legibility
- Hover transitions: `transition-all duration-300 ease-in-out`

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers sparingly
- Subtle hover animations (scale, opacity, shadow)
- Maintain warm, cohesive tone throughout

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners larger than `rounded-sm`
- No busy patterns or gradients
- No discount/sale-style badges or loud CTAs
- No generic stock photography feel
