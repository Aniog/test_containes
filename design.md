# World Cup 2026 Design System

## Theme
Sports / Football / World Cup 2026 — bold, energetic, international.

## Color Palette
- Primary Gold: `#F5A623` (trophy gold) → Tailwind: `text-amber-400`, `bg-amber-400`
- Primary Green: `#1A6B3C` (football pitch) → Tailwind: `text-green-800`, `bg-green-800`
- Dark Navy: `#0D1B2A` (deep background) → Tailwind: `bg-[#0D1B2A]`
- Mid Navy: `#1C2E45` (card backgrounds) → Tailwind: `bg-[#1C2E45]`
- Light Navy: `#243B55` (hover states) → Tailwind: `bg-[#243B55]`
- Accent Red: `#E63946` (highlights, live badges) → Tailwind: `text-red-500`, `bg-red-500`
- Text Primary: `#F0F4F8` → Tailwind: `text-slate-100`
- Text Secondary: `#94A3B8` → Tailwind: `text-slate-400`
- Border: `#2D4A6B` → Tailwind: `border-[#2D4A6B]`

## Typography
- Font: Inter (Google Fonts)
- Headings: `font-black` or `font-bold`, uppercase for section titles
- Body: `font-normal`, `text-slate-300`
- Numbers/Stats: `font-black text-amber-400`

## Spacing
- Section padding: `py-16 px-4` or `py-20 px-6`
- Card padding: `p-5` or `p-6`
- Gap between cards: `gap-4` or `gap-6`

## Borders & Shadows
- Cards: `rounded-xl border border-[#2D4A6B]`
- Glow effect on featured: `shadow-lg shadow-amber-400/10`
- Hover: `hover:border-amber-400/50 transition-colors`

## Buttons
- Primary: `bg-amber-400 text-[#0D1B2A] font-bold rounded-lg px-6 py-3 hover:bg-amber-300`
- Secondary: `border border-amber-400 text-amber-400 rounded-lg px-6 py-3 hover:bg-amber-400/10`

## Do's
- Use dark navy backgrounds for all pages
- Use amber/gold for key numbers, scores, and CTAs
- Use green accents for "win" states
- Use red for "loss" states and live indicators
- Keep text always readable — never use dark text on dark backgrounds
- Use uppercase for section labels and team names

## Don'ts
- No light backgrounds (white/gray) — this is a dark-themed site
- No low-contrast text combinations
- No overly decorative fonts
- No inline styles — use Tailwind classes only
