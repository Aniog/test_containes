# Bike Site Design System

## Brand Identity
Bold, adventurous, and modern. The site targets cycling enthusiasts and showcases bikes with energy and confidence.

## Color Palette
- **Background (primary):** Dark charcoal `#111111` — `bg-[#111111]`
- **Background (secondary):** Deep gray `#1a1a1a` — `bg-[#1a1a1a]`
- **Background (card):** Slightly lighter `#222222` — `bg-[#222222]`
- **Accent (primary):** Vivid orange `#f97316` — `text-orange-500`, `bg-orange-500`
- **Accent (hover):** Deeper orange `#ea580c` — `hover:bg-orange-600`
- **Text (primary):** Near-white `#f5f5f5` — `text-neutral-100`
- **Text (secondary):** Medium gray `#a3a3a3` — `text-neutral-400`
- **Text (muted):** Darker gray `#737373` — `text-neutral-500`
- **Border:** Subtle `#2a2a2a` — `border-[#2a2a2a]`

## Typography
- **Font:** Inter (loaded via Google Fonts in index.html)
- **Hero heading:** `text-5xl md:text-7xl font-extrabold tracking-tight text-neutral-100`
- **Section heading:** `text-3xl md:text-4xl font-bold text-neutral-100`
- **Card title:** `text-xl font-semibold text-neutral-100`
- **Body text:** `text-base text-neutral-400 leading-relaxed`
- **Label/tag:** `text-xs font-semibold uppercase tracking-widest text-orange-500`

## Spacing
- Section padding: `py-20 px-6 md:px-12 lg:px-24`
- Card padding: `p-6`
- Gap between grid items: `gap-6` or `gap-8`

## Borders & Shadows
- Card border: `border border-[#2a2a2a] rounded-2xl`
- Card hover: `hover:border-orange-500 transition-colors duration-300`
- Button shadow: `shadow-lg shadow-orange-500/20`

## Buttons
- **Primary CTA:** `bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200`
- **Secondary/Ghost:** `border border-neutral-600 hover:border-orange-500 text-neutral-100 font-semibold px-8 py-3 rounded-full transition-all duration-200`

## Layout
- Max content width: `max-w-7xl mx-auto`
- Grid: 1 column mobile → 2 columns tablet → 3 columns desktop
- Navbar: sticky top, dark background with slight blur

## Do's
- Use orange as the single accent color consistently
- Keep backgrounds very dark for contrast
- Use generous whitespace between sections
- Use rounded-2xl for cards, rounded-full for buttons and tags

## Don'ts
- Don't use light backgrounds (white/light gray) for main sections
- Don't mix multiple accent colors
- Don't use low-contrast text on dark backgrounds
- Don't use sharp corners on interactive elements
