# Velmora Fine Jewelry — Visual Design System

## Mood & Tone
- Quiet luxury, warm, editorial
- Premium demi-fine jewelry — NOT loud, NOT discount-looking
- Editorial photography style with warm, golden lighting
- Generous whitespace, airy layouts

## Color Palette
- **Background**: `#FDFCFA` (warm white) — primary page background
- **Surface**: `#FAF7F4` (ivory) — card, section alt backgrounds
- **Accent Gold**: `#C8A96E` — CTAs, accent borders, stars, gold text
- **Gold Light**: `#D4BC8A` — hover states, footer headings
- **Gold Dark**: `#A68B56` — gold hover
- **Charcoal**: `#2C2C2C` — primary text color
- **Charcoal Light**: `#4A4A4A` — body/secondary text
- **Taupe**: `#8B7D72` — muted text, metadata
- **Taupe Light**: `#B5A89B` — footer text, placeholder text
- **Sand**: `#E8DDD0` — hairline borders, dividers
- **Cream**: `#F5F0EB` — image placeholder backgrounds
- **Rose**: `#E8C4B8` — optional warm accent
- All colors available as Tailwind `velmora-{name}` classes

## Typography
- **Headings & Product Names**: Cormorant Garamond (Google Font) — serif, elegant, light weight for headings, semibold italic for emphasis
- **Product names**: UPPERCASE with `tracking-widest` (0.2em letter spacing)
- **Body & UI**: Inter (Google Font) — clean sans-serif, light weight (300–500)
- **Nav links**: uppercase, tiny tracking, sans-serif
- **Section labels**: uppercase, 0.25em tracking, gold color, sans-serif

## Spacing
- Section padding: `py-16 lg:py-24` (default)
- Tight sections: `py-16 lg:py-20`
- Generous whitespace between sections
- Grid gaps: `gap-4 sm:gap-6`
- Max width container: `max-w-7xl`

## Borders & Dividers
- Thin hairline dividers: `height: 1px; background-color: #E8DDD0`
- Gold accent divider under section titles: `w-12 h-[1px] bg-velmora-gold mx-auto`
- Soft shadows on hover: `0 20px 40px -12px rgba(0, 0, 0, 0.1)`

## Buttons
- **Primary (CTA)**: `bg-velmora-gold text-white`, uppercase, tracking-widest, hover darkens
- **Outline variant**: border with accent color, transparent bg
- **Text link**: underline on hover with gold transition
- Cart quick-add: white circle with shadow, transitions to gold on hover

## Navigation
- Transparent on homepage hero, solid on scroll
- Z-50, height 72px
- Desktop: centered logo, nav links left, icons right
- Mobile: hamburger menu left, logo center, icons right

## Product Cards
- Aspect ratio 4:5 for images
- Hover: slight translateY(-2px), shadow, second image reveal
- Quick-add button appears on hover (desktop only)
- Rating stars in gold, product name uppercase serif

## Animations
- Subtle hover transitions (300–400ms ease)
- Category tiles: overlay fades in on hover with label slide-up
- Product card: smooth shadow + transform on hover
- Cart drawer: slide from right with backdrop
- Nav: background color transition on scroll
- UGC images: scale on hover

## Do's
- Use generous whitespace
- Keep gold as the only accent color (no competing bright colors)
- Use serif for headlines and product names
- Use thin dividers between sections
- Use warm editorial imagery
- Keep text readable with high contrast

## Don'ts
- Don't use loud/discount visual language
- Don't overuse the gold accent
- Don't crowd elements together
- Don't use multiple competing accent colors
- Don't use generic e-commerce stock photos
- Don't make text low-contrast or invisible