# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `#FAF7F2` — warm off-white, flatters gold
- **Foreground (charcoal):** `#1A1A1A` — near-black for body text
- **Accent (warm gold):** `#B8860B` — dark goldenrod, used for CTAs, highlights
- **Accent hover:** `#9A7209` — deeper gold on hover
- **Muted:** `#F5F0E8` — slightly darker cream for sections
- **Muted foreground:** `#6B6358` — warm gray for secondary text
- **Border:** `#E8E0D4` — warm hairline dividers
- **Card:** `#FFFFFF` — pure white for product cards
- **Card foreground:** `#1A1A1A`

## Typography
- **Headings / Product names:** `Cormorant Garamond`, serif — elegant, editorial
- **Body / UI:** `Inter`, sans-serif — clean, modern
- **Product names:** UPPERCASE, letter-spacing: 0.12em
- **Heading sizes:** Hero: text-5xl/6xl, Section: text-3xl/4xl, Card: text-lg

## Spacing & Layout
- Generous whitespace: sections py-20 lg:py-28
- Container max-w-7xl mx-auto px-4 lg:px-8
- Product grid gap-6 lg:gap-8
- Thin hairline dividers: border-b border-border (1px)

## Components
- **Buttons:** Accent bg with cream text, rounded-none (sharp edges), px-8 py-3, uppercase tracking-wider text-sm font-medium. Hover: darker accent.
- **Outlined buttons:** border border-foreground, bg-transparent, text-foreground. Hover: bg-foreground text-background.
- **Cards:** bg-card, no border, subtle shadow-sm on hover, transition-all duration-300
- **Inputs:** border-b border-border, bg-transparent, focus:border-accent, no rounded

## Do's
- Use Tailwind classes exclusively
- Maintain generous whitespace
- Use thin 1px dividers sparingly
- Subtle hover transitions (duration-300)
- Large editorial imagery
- Restrained use of accent color

## Don'ts
- No rounded buttons (use rounded-none or rounded-sm at most)
- No heavy shadows
- No bright/neon colors
- No cluttered layouts
- No generic e-commerce feel
- No discount badges or sale stickers
