# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Background (cream):** `#FAF7F2` — warm off-white for page backgrounds
- **Surface (warm white):** `#FFFFFF` — cards, modals
- **Text primary (deep charcoal):** `#1A1A1A` — headings, body
- **Text secondary (warm gray):** `#6B6360` — descriptions, muted text
- **Text muted:** `#9C9490` — placeholders, captions
- **Accent (burnished gold):** `#B8860B` — CTAs, highlights, hover states
- **Accent hover (deep gold):** `#96700A` — button hover
- **Accent light (champagne):** `#F5ECD7` — accent backgrounds, badges
- **Border (hairline):** `#E8E2DC` — dividers, card borders
- **Dark surface:** `#1A1A1A` — footer, dark sections
- **Dark surface text:** `#FAF7F2` — text on dark surfaces

Tailwind config names: `cream`, `charcoal`, `warm-gray`, `muted`, `gold`, `gold-hover`, `champagne`, `hairline`, `dark-surface`

## Typography
- **Headings / Product names:** `Cormorant Garamond`, serif — elegant, editorial
- **Body / UI:** `Inter`, sans-serif — clean, modern
- **Product names:** UPPERCASE, letter-spacing `0.15em`
- **Section headings:** Serif, normal case or uppercase depending on context

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card padding: `p-4 md:p-6`
- Grid gaps: `gap-4 md:gap-6`

## Components
- **Buttons:** Rounded-none (square edges), uppercase text, letter-spacing, gold bg with cream text OR outlined with gold border
- **Cards:** No border-radius or very subtle (`rounded-sm`), thin hairline border, soft shadow on hover
- **Dividers:** 1px hairline color
- **Hover transitions:** `transition-all duration-300 ease-in-out`
- **Shadows:** `shadow-sm` on hover only

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers
- Subtle hover transitions (opacity, translate-y)
- Buttons feel premium (solid gold or outlined)
- Product names always uppercase with wide letter-spacing

## Don'ts
- No rounded corners on buttons (use `rounded-none` or `rounded-sm`)
- No bright/neon colors
- No heavy drop shadows
- No cluttered layouts
- No generic e-commerce feel
- No discount badges or sale stickers
