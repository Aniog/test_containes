# Pizza Site Design System

## Brand Identity
Warm, rustic Italian pizzeria with a modern touch. Inviting, appetizing, and authentic.

## Colors
- **Primary (Deep Red):** `#C0392B` → Tailwind: `red-pizza` → use `bg-red-pizza`, `text-red-pizza`
- **Primary Dark:** `#922B21` → `red-pizza-dark`
- **Accent (Warm Amber):** `#E67E22` → `amber-pizza`
- **Cream (Background):** `#FDF6EC` → `cream`
- **Warm White:** `#FFFBF5` → `warm-white`
- **Charcoal (Text):** `#1C1C1C` → `charcoal`
- **Muted Text:** `#6B6B6B` → use `text-gray-500`

## Typography
- **Headings:** "Playfair Display" — serif, elegant, classic Italian feel
  - Hero H1: `text-5xl md:text-7xl font-bold font-playfair`
  - Section H2: `text-3xl md:text-4xl font-bold font-playfair`
  - Card H3: `text-xl font-semibold font-playfair`
- **Body:** "Lato" — clean, readable sans-serif
  - Body: `text-base font-lato text-charcoal`
  - Small/Caption: `text-sm text-gray-500`

## Spacing
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6`
- Gap between cards: `gap-6 md:gap-8`

## Borders & Shadows
- Cards: `rounded-2xl shadow-md`
- Buttons: `rounded-full`
- Dividers: `border-t border-amber-pizza/20`

## Buttons
- Primary: `bg-red-pizza text-white rounded-full px-8 py-3 font-semibold hover:bg-red-pizza-dark transition`
- Secondary/Outline: `border-2 border-red-pizza text-red-pizza rounded-full px-8 py-3 font-semibold hover:bg-red-pizza hover:text-white transition`

## Do's
- Use warm, earthy tones throughout
- Use Playfair Display for all headings
- Use generous whitespace between sections
- Use rounded corners on cards and buttons
- Ensure text is always readable against its background

## Don'ts
- Don't use cold blues or grays as primary colors
- Don't use small font sizes for menu items
- Don't use sharp corners on interactive elements
- Don't place dark text on dark backgrounds
