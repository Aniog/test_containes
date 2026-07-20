# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (primary):** `bg-ivory` (#F7F3EE) — warm cream, used for all page backgrounds
- **Background (secondary):** `bg-ivory-dark` (#EDE8E0) — slightly deeper cream for section alternates
- **Dark base:** `bg-obsidian` (#1C1A18) — deep warm charcoal, used for hero overlays, footer, dark sections
- **Dark soft:** `bg-obsidian-soft` (#2A2724) — slightly lighter charcoal for cards on dark bg
- **Gold accent:** `text-gold` / `bg-gold` (#C9A96E) — warm metallic gold, primary accent
- **Gold light:** `text-gold-light` (#DFC08A) — hover states, highlights
- **Gold dark:** `text-gold-dark` (#A8854A) — pressed states
- **Taupe:** `text-taupe` (#8C7B6B) — muted body text, captions
- **Taupe light:** `text-taupe-light` (#B5A898) — placeholder text, dividers

## Typography
- **Headings / Product names:** `font-serif` (Cormorant Garamond) — elegant, editorial
  - Hero H1: `font-serif text-5xl md:text-7xl font-light tracking-wide`
  - Section titles: `font-serif text-3xl md:text-4xl font-light`
  - Product names: `font-serif text-xl uppercase tracking-widest2`
- **Body / UI:** `font-sans` (Manrope) — clean, modern
  - Body: `font-sans text-sm font-normal`
  - Labels / nav: `font-sans text-xs uppercase tracking-widest font-medium`
  - Prices: `font-sans text-base font-semibold`

## Spacing
- Generous whitespace: sections use `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gaps: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline dividers: `border-t border-ivory-dark` or `.hairline` class
- Card borders: `border border-ivory-dark`
- Radius: `rounded-none` for editorial feel, `rounded-sm` for buttons

## Buttons
- **Primary (CTA):** `bg-gold text-obsidian font-sans text-xs uppercase tracking-widest px-8 py-3 hover:bg-gold-light transition-colors`
- **Outlined:** `border border-obsidian text-obsidian font-sans text-xs uppercase tracking-widest px-8 py-3 hover:bg-obsidian hover:text-ivory transition-colors`
- **Dark CTA:** `bg-obsidian text-ivory font-sans text-xs uppercase tracking-widest px-8 py-3 hover:bg-obsidian-soft transition-colors`

## Shadows
- Subtle: `shadow-sm` — used sparingly on cards
- No heavy drop shadows

## Animations
- Hover transitions: `transition-all duration-400`
- Image zoom: `scale-[1.04]` on hover, `duration-600`
- Cart drawer: slide in from right, `translate-x-full` → `translate-x-0`

## Do's
- Use wide letter-spacing on product names and labels
- Keep imagery large and editorial
- Use serif for all emotional/brand copy
- Use sans for all functional UI (prices, buttons, nav links)
- Maintain ivory background as the dominant surface

## Don'ts
- No bright whites (#fff) — use ivory instead
- No generic blue links
- No heavy borders or thick outlines
- No busy patterns or gradients (except subtle overlays on hero)
- No Comic Sans, no system fonts for headings
