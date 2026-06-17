# 办公桌购置指南 — Design System

## Brand Identity
- Site name: 办公桌购置指南
- Tone: Professional, clean, trustworthy, modern Chinese office aesthetic

## Color Palette
- Primary: `#1A56DB` (blue-600 equivalent) — CTAs, links, highlights
- Primary Dark: `#1E429F` — hover states
- Accent: `#F59E0B` (amber-500) — badges, star ratings, callouts
- Background: `#F8FAFC` (slate-50) — page background
- Surface: `#FFFFFF` — cards, panels
- Border: `#E2E8F0` (slate-200) — dividers, card borders
- Text Primary: `#0F172A` (slate-900) — headings
- Text Secondary: `#475569` (slate-600) — body copy
- Text Muted: `#94A3B8` (slate-400) — captions, labels
- Success: `#10B981` (emerald-500) — checkmarks, positive indicators

## Typography
- Font family: "Inter", system-ui, sans-serif (loaded via Google Fonts in index.html)
- Heading 1: `text-4xl md:text-5xl font-bold text-slate-900`
- Heading 2: `text-2xl md:text-3xl font-bold text-slate-900`
- Heading 3: `text-xl font-semibold text-slate-800`
- Body: `text-base text-slate-600 leading-relaxed`
- Caption/Label: `text-sm text-slate-400`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-6xl mx-auto px-4 md:px-8`
- Card padding: `p-6`
- Gap between cards: `gap-6`

## Borders & Shadows
- Card: `rounded-2xl border border-slate-200 shadow-sm`
- Button: `rounded-xl`
- Hover card: `hover:shadow-md transition-shadow duration-200`

## Components
- Primary Button: `bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl`
- Secondary Button: `border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-xl`
- Badge: `bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded-full`
- Section divider: thin `border-t border-slate-200`

## Layout
- Single-page with sticky nav
- Sections: Hero → 为什么选对办公桌很重要 → 选购要点 → 推荐产品 → 常见问题 → 联系/CTA
- Desktop: multi-column grids (2–3 cols)
- Mobile: single column stacking

## Do's
- Use Tailwind utility classes exclusively
- Keep text clearly readable on all backgrounds
- Use stock images via data-strk-img system
- Maintain consistent section padding

## Don'ts
- No hardcoded hex colors in JSX (use Tailwind named classes)
- No invisible or low-contrast text
- No inline styles unless unavoidable
