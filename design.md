# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `#FAF7F2` — warm off-white for page backgrounds
- **Surface (ivory):** `#F5F0E8` — slightly warmer for cards and sections
- **Foreground (charcoal):** `#1A1A1A` — primary text
- **Muted text:** `#6B6560` — secondary/body text
- **Accent (gold):** `#B8860B` — warm dark gold for CTAs, links, accents
- **Accent hover:** `#9A7209` — darker gold on hover
- **Accent light:** `#D4A843` — lighter gold for subtle highlights
- **Border:** `#E8E2D9` — warm hairline dividers
- **Dark section:** `#1A1A1A` — for newsletter/footer backgrounds

## Typography
- **Headings / Product names:** `Cormorant Garamond`, serif — elegant, editorial
- **Body / UI:** `Inter`, sans-serif — clean, modern
- **Product names:** UPPERCASE, letter-spacing: 0.1em–0.15em
- **Heading sizes:** Hero: text-5xl/6xl, Section: text-3xl/4xl, Card: text-lg/xl

## Tailwind Classes (common patterns)
- Headings: `font-serif text-foreground tracking-wide`
- Body: `font-sans text-muted`
- Accent button: `bg-accent text-white hover:bg-accent-hover transition-colors`
- Outlined button: `border border-accent text-accent hover:bg-accent hover:text-white transition-colors`
- Card: `bg-surface rounded-none border border-border`
- Divider: `border-t border-border`
- Section padding: `py-16 md:py-24 px-6 md:px-12 lg:px-20`

## Do's
- Use generous whitespace between sections
- Large editorial imagery
- Thin hairline dividers (1px, border-border color)
- Subtle hover transitions (duration-300)
- Soft shadows on cards (shadow-sm)
- Restrained use of accent color — only CTAs and key highlights

## Don'ts
- No rounded corners on product cards (use rounded-none or very subtle rounded-sm)
- No bright/saturated colors
- No heavy drop shadows
- No busy patterns or gradients
- No discount-style badges or loud sale banners
- No generic stock photo feel
