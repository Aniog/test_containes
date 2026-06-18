# World Cup Website Design System

## Brand Identity
FIFA World Cup 2026 — hosted by USA, Canada, Mexico.
Bold, energetic, international feel with a modern sports aesthetic.

## Color Palette
- Primary: `#C8102E` (FIFA Red) — used for accents, CTAs, highlights
- Secondary: `#003087` (Deep Blue) — used for headers, nav, dark sections
- Gold: `#FFD700` (Trophy Gold) — used for rankings, winners, badges
- Dark BG: `#0A0E1A` (Near Black) — main dark background
- Card BG: `#111827` (Dark Card) — card surfaces
- Surface: `#1F2937` (Elevated Surface) — elevated elements
- Border: `#374151` (Subtle Border)
- Text Primary: `#F9FAFB` (Near White)
- Text Secondary: `#9CA3AF` (Muted Gray)
- Text Muted: `#6B7280`
- Green: `#10B981` (Win indicator)
- Orange: `#F59E0B` (Draw indicator)

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold to font-extrabold, tracking-tight
- Body: font-normal, leading-relaxed
- Labels/Caps: text-xs uppercase tracking-widest font-semibold

## Spacing & Layout
- Max content width: max-w-7xl mx-auto
- Section padding: py-16 px-4 md:px-8
- Card padding: p-4 md:p-6
- Gap between cards: gap-4 md:gap-6

## Components

### Navigation
- Dark background `bg-[#0A0E1A]` with border-b border-[#374151]
- Logo: bold red text + trophy icon
- Links: text-gray-300 hover:text-white transition
- Active link: text-[#C8102E] font-semibold
- Mobile: hamburger menu

### Hero Section
- Full-width dark gradient background with subtle pattern
- Large bold headline, subheadline, CTA button
- Trophy/stadium imagery

### Cards
- `bg-[#111827]` background, `border border-[#374151]` border
- `rounded-xl` corners
- Hover: `hover:border-[#C8102E]/50 hover:bg-[#1F2937]` transition

### Buttons
- Primary: `bg-[#C8102E] hover:bg-[#A50D25] text-white font-semibold rounded-lg px-6 py-2.5`
- Secondary: `bg-[#1F2937] hover:bg-[#374151] text-white border border-[#374151] rounded-lg`
- Ghost: `text-gray-300 hover:text-white`

### Badges / Tags
- Group badge: `bg-[#003087] text-white text-xs px-2 py-0.5 rounded font-bold`
- Status Win: `bg-green-900/40 text-green-400 border border-green-800`
- Status Draw: `bg-yellow-900/40 text-yellow-400 border border-yellow-800`
- Status Loss: `bg-red-900/40 text-red-400 border border-red-800`

### Tables / Standings
- Header: `bg-[#1F2937] text-gray-400 text-xs uppercase tracking-wider`
- Row: `border-b border-[#374151] hover:bg-[#1F2937]/50`
- Rank 1-3: gold/silver/bronze left border accent

### Charts (Recharts)
- Background: transparent
- Grid: `#374151`
- Axis text: `#9CA3AF`
- Bar fill: `#C8102E` primary, `#003087` secondary

## Do's
- Always use dark backgrounds for the main layout
- Use red (#C8102E) sparingly for emphasis and CTAs
- Use gold (#FFD700) only for top-ranked items and trophies
- Ensure all text has sufficient contrast against dark backgrounds
- Use rounded-xl for cards, rounded-lg for buttons

## Don'ts
- Don't use white backgrounds anywhere
- Don't use light gray text on dark gray backgrounds (low contrast)
- Don't use more than 2 accent colors per section
- Don't use inline styles — use Tailwind classes only
