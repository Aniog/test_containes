# Design System — Alternate Realities Luxury Travel

## Brand Identity
Dark, immersive, and otherworldly. The brand evokes the feeling of stepping through a portal into the unknown — luxurious, mysterious, and awe-inspiring.

## Color Palette
- **Deep Space Black** `#0a0a0f` — primary background
- **Void Dark** `#0f0f1a` — card/section backgrounds
- **Cosmic Purple** `#6b21a8` — primary accent (Tailwind: `purple-800`)
- **Nebula Violet** `#7c3aed` — secondary accent (Tailwind: `violet-600`)
- **Starlight Gold** `#d4af37` — luxury highlight (custom: `gold`)
- **Pale Gold** `#f5e6a3` — light gold text (custom: `gold-light`)
- **Mist White** `#e8e8f0` — primary text on dark backgrounds
- **Soft Gray** `#9ca3af` — secondary/muted text (Tailwind: `gray-400`)
- **Portal Teal** `#0d9488` — destination accent (Tailwind: `teal-600`)
- **Ember Orange** `#ea580c` — steampunk accent (Tailwind: `orange-600`)
- **Neon Cyan** `#06b6d4` — futuristic accent (Tailwind: `cyan-500`)
- **Jungle Green** `#16a34a` — prehistoric accent (Tailwind: `green-600`)
- **Ocean Blue** `#1d4ed8` — ocean planet accent (Tailwind: `blue-700`)

## Typography
- **Display font**: Cinzel (Google Fonts) — for headings, titles, brand name
- **Body font**: Inter — for body text, descriptions, UI elements
- **Taglines**: Cinzel Decorative for hero taglines

### Scale
- Hero title: `text-6xl md:text-8xl` Cinzel, font-bold
- Section title: `text-4xl md:text-5xl` Cinzel, font-semibold
- Card title: `text-2xl` Cinzel
- Body: `text-base` Inter, `text-gray-300`
- Caption/label: `text-sm` Inter, `text-gray-400`

## Spacing
- Section padding: `py-24 px-6 md:px-12 lg:px-24`
- Card padding: `p-8`
- Component gap: `gap-8` or `gap-12`

## Borders & Shadows
- Cards: `border border-purple-900/40 rounded-2xl`
- Glow effects: `shadow-[0_0_40px_rgba(124,58,237,0.3)]`
- Gold border accent: `border-t-2 border-gold`

## Gradients
- Hero overlay: `bg-gradient-to-b from-black/60 via-black/30 to-[#0a0a0f]`
- Section divider: `bg-gradient-to-r from-transparent via-purple-700 to-transparent`
- Card hover: `bg-gradient-to-br from-purple-900/30 to-violet-900/20`
- Gold shimmer: `bg-gradient-to-r from-gold via-gold-light to-gold`

## Buttons
- Primary CTA: `bg-gradient-to-r from-purple-700 to-violet-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-violet-500 transition-all`
- Secondary: `border border-gold text-gold px-8 py-4 rounded-full hover:bg-gold/10 transition-all`

## Do's
- Use dark backgrounds exclusively — this is a dark-mode-only site
- Layer subtle gradients and glows for depth
- Use Cinzel for all headings to maintain the luxury/mystical feel
- Use gold accents sparingly for premium emphasis
- Ensure all text has strong contrast against dark backgrounds

## Don'ts
- No white or light backgrounds
- No flat, unstyled buttons
- No generic stock-photo aesthetics — everything should feel otherworldly
- No small text on dark backgrounds without sufficient contrast
