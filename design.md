# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Background**: `#FAF7F2` (warm ivory/cream) — sitewide page background
- **Surface / Cards**: `#FFFFFF` (white) — for cards, modals, drawers
- **Text Primary**: `#1A1A1A` (near-black) — body text, headings
- **Text Secondary**: `#6B6258` (warm taupe) — muted text, labels
- **Accent / Gold**: `#C9A96E` (warm gold) — CTAs, accent borders, hover states
- **Accent Hover**: `#B8944F` (deeper gold) — button hover
- **Divider**: `#E5DDD3` (warm light beige) — hairline dividers
- **Border**: `#E5DDD3` — card borders, inputs
- **Footer BG**: `#1A1A1A` — dark footer
- **Footer Text**: `#A0988A` — muted footer text

### Usage
- Use `bg-[#FAF7F2]` for page backgrounds
- Use `bg-[#C9A96E]` for accent buttons and highlights
- Use `text-[#1A1A1A]` for primary text
- Use `text-[#6B6258]` for secondary/muted text
- Use `border-[#E5DDD3]` for dividers and borders
- Use `bg-[#1A1A1A]` for footer

## Typography
- **Headings (serif)**: `'Cormorant Garamond', Georgia, serif` — elegant serif for headings, product names
- **Body (sans)**: `'Inter', -apple-system, sans-serif` — clean sans for body, UI, navigation
- **Product names**: UPPERCASE, tracking-wide (letter-spacing), serif font
- **Scale**: h1: 3.5rem, h2: 2.5rem, h3: 1.75rem, h4: 1.25rem, body: 1rem, small: 0.875rem

## Spacing
- Generous whitespace throughout
- Section padding: py-16 md:py-24
- Card padding: p-6
- Grid gap: gap-6 md:gap-8

## Borders & Shadows
- Hairline dividers: `border-t border-[#E5DDD3]`
- Soft shadows on cards: `shadow-sm hover:shadow-md`
- Buttons: no border-radius (or minimal), solid or outlined

## Interactions
- Subtle hover transitions: `transition-all duration-300`
- Hover scale/opacity transformations
- Smooth scroll behavior

## Components
- Buttons: `bg-[#C9A96E] text-white hover:bg-[#B8944F]` for primary, `border border-[#C9A96E] text-[#C9A96E]` for outline
- Nav: transparent over hero, `bg-[#FAF7F2]/95 backdrop-blur-sm` on scroll
- Inputs: `border border-[#E5DDD3] bg-white rounded-none px-4 py-3`