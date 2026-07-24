# Velmora Fine Jewelry — Design System

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.
- **Target**: Women 25–45, gifting and self-purchase, premium-but-accessible ($30–$120).

## Color Palette
- **Base (Deep Warm Charcoal)**: `#1C1917` — primary background for hero, nav, footer, dark sections
- **Surface (Warm Off-White)**: `#FAF7F2` — page background, card backgrounds, light sections
- **Cream**: `#F5EFE6` — subtle warm tint for alternating sections, newsletter block
- **Gold Accent**: `#C9A96E` — primary accent, buttons, highlights, links, decorative elements
- **Gold Light**: `#D4B87A` — hover state for gold accent
- **Gold Dark**: `#A8894A` — pressed/active state for gold accent
- **Text Primary**: `#1C1917` — headings, body text on light backgrounds
- **Text Secondary**: `#6B6560` — secondary text, descriptions, muted content
- **Text On Dark**: `#FAF7F2` — text on dark backgrounds (hero, footer)
- **Text Muted On Dark**: `#A39E97` — secondary text on dark backgrounds
- **Divider**: `#E8E2D9` — hairline dividers, borders on light
- **Divider Dark**: `#3D3833` — hairline dividers on dark

## Typography
- **Headings / Product Names**: Cormorant Garamond (serif), weight 400–600
- **Body / UI**: Inter (sans-serif), weight 300–500
- **Product Names**: UPPERCASE with `tracking-[0.15em]` letter-spacing
- **Logo**: Cormorant Garamond, uppercase, `tracking-[0.3em]`, weight 500

### Font Sizes (Tailwind)
- Hero headline: `text-5xl md:text-7xl`
- Section headings: `text-3xl md:text-4xl`
- Product names: `text-lg md:text-xl uppercase tracking-[0.15em]`
- Body: `text-sm md:text-base`
- Small / caption: `text-xs md:text-sm`

## Spacing & Layout
- Generous whitespace: `py-20 md:py-28` for sections, `gap-8 md:gap-12` for grids
- Max content width: `max-w-7xl mx-auto`
- Hairline dividers: `border-t border-[#E8E2D9]` (1px, warm tone)
- Cards: minimal shadow, `shadow-sm` or none, rounded corners `rounded-sm`

## Buttons
- **Primary (Accent)**: Solid gold background `bg-[#C9A96E]`, dark text `text-[#1C1917]`, uppercase, tracking-wide, `tracking-[0.1em]`, `px-8 py-3`, hover: `bg-[#D4B87A]`
- **Secondary (Outlined)**: Border gold `border-[#C9A96E]`, text gold, hover fills: `hover:bg-[#C9A96E] hover:text-[#1C1917]`
- **On Dark Background**: Same primary style, or outlined with gold border and gold text

## Cards & Product Grid
- Product cards: clean, no heavy shadows, `bg-[#FAF7F2]` or white
- Hover: second image fades in, "Add to Cart" button appears with smooth transition
- Image aspect ratio: 3x4 for product shots (portrait jewelry)
- Price: serif font, `text-[#C9A96E]` or `text-[#1C1917]`

## Animations
- Subtle, smooth: `transition-all duration-300 ease-in-out`
- Hover image swap: opacity transition
- Cart drawer: slide from right, `transform translate-x-full` → `translate-x-0`
- Nav: transparent → solid background on scroll with smooth transition

## Do's
- Use warm, gold-accented tones throughout
- Keep whitespace generous
- Use serif for all headings and product names
- Use uppercase + wide tracking for product names and CTAs
- Ensure strong contrast (dark text on light, light text on dark)
- Use thin hairline dividers instead of thick borders

## Don'ts
- Don't use bright/saturated colors (no blues, reds, greens as accents)
- Don't use heavy shadows or thick borders
- Don't use generic e-commerce styling (no badges, no loud sale tags)
- Don't mix serif and sans-serif in the same role
- Don't use rounded/bubbly button styles — keep them refined
- Don't place light text on light backgrounds or dark text on dark backgrounds
