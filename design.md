# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `#FAF7F2` — warm off-white for page backgrounds
- **Foreground (charcoal):** `#1A1A1A` — near-black for primary text
- **Accent (antique gold):** `#B8860B` — warm gold for CTAs, highlights, accents
- **Accent hover:** `#9A7209` — darker gold for hover states
- **Muted (warm gray):** `#6B6560` — secondary text, captions
- **Muted light:** `#E8E2DA` — borders, dividers, subtle backgrounds
- **Card surface:** `#FFFFFF` — white cards on cream background
- **Dark surface:** `#1A1A1A` — dark sections (newsletter, footer)
- **Dark muted:** `#A39E99` — light text on dark backgrounds

## Typography
- **Headings / Product names:** `Cormorant Garamond`, serif — elegant, editorial
- **Body / UI:** `Inter`, sans-serif — clean, modern, readable
- **Product names:** UPPERCASE, letter-spacing: 0.12em
- **Heading sizes:** Hero: text-5xl/6xl, Section: text-3xl/4xl, Card: text-lg/xl

## Spacing & Layout
- Generous whitespace: sections py-16 md:py-24
- Container max-w-7xl mx-auto px-4 md:px-8
- Card padding: p-4 md:p-6
- Grid gaps: gap-4 md:gap-6

## Borders & Dividers
- Hairline dividers: border-muted-light (1px)
- Card borders: border border-muted-light or shadow-sm
- Rounded corners: rounded-none or rounded-sm (sharp/minimal)

## Buttons
- Primary: bg-accent text-white px-8 py-3 uppercase tracking-widest text-sm font-medium hover:bg-accent-hover transition
- Outlined: border border-accent text-accent hover:bg-accent hover:text-white transition
- Pill variant selectors: border rounded-full px-4 py-1.5

## Hover & Transitions
- All interactive: transition-all duration-300
- Product cards: hover scale-[1.02], reveal second image
- Links: hover text-accent

## Do's
- Use Tailwind classes exclusively
- Keep generous whitespace
- Use serif for editorial/brand moments
- Use thin hairline dividers between sections
- Maintain warm, golden tone throughout

## Don'ts
- No arbitrary hex codes in JSX (use Tailwind config names)
- No heavy shadows or rounded corners
- No bright/neon colors
- No cluttered layouts
- No generic e-commerce feel
