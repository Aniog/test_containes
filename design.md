# Design System — 冰壶运动专题网站

## Color Palette
- Primary: Ice Blue `#1E90FF` (Tailwind: `blue-500`)
- Primary Dark: `#0A5FA8` (Tailwind: `blue-800`)
- Accent: `#00D4FF` (Tailwind: `cyan-400`)
- Background: `#0A0F1E` (deep navy, Tailwind: `slate-950`)
- Surface: `#111827` (Tailwind: `gray-900`)
- Surface Light: `#1F2937` (Tailwind: `gray-800`)
- Border: `#374151` (Tailwind: `gray-700`)
- Text Primary: `#F9FAFB` (Tailwind: `gray-50`)
- Text Secondary: `#9CA3AF` (Tailwind: `gray-400`)
- Text Muted: `#6B7280` (Tailwind: `gray-500`)
- Gold Accent: `#F59E0B` (Tailwind: `amber-500`)

## Typography
- Font Family: "Noto Sans SC" for Chinese, "Inter" for Latin
- Headings: font-bold, tracking-tight
- H1: `text-5xl md:text-7xl font-bold`
- H2: `text-3xl md:text-4xl font-bold`
- H3: `text-xl md:text-2xl font-semibold`
- Body: `text-base text-gray-300`
- Caption: `text-sm text-gray-400`

## Spacing
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6`
- Gap between cards: `gap-6`

## Borders & Shadows
- Card border: `border border-gray-700`
- Card radius: `rounded-2xl`
- Glow effect: `shadow-[0_0_30px_rgba(30,144,255,0.15)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(30,144,255,0.3)]`

## Components
- Buttons: `bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-6 py-3 font-semibold transition-all`
- Outline Button: `border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-xl px-6 py-3`
- Badge: `bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full px-3 py-1 text-sm`
- Card: `bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all`

## Do's
- Use dark navy/slate backgrounds for all sections
- Use ice blue and cyan for interactive elements and highlights
- Use subtle gradients: `from-slate-950 via-blue-950/20 to-slate-950`
- Use glassmorphism for hero overlays: `bg-white/5 backdrop-blur-sm`
- Ensure all text is clearly readable against dark backgrounds

## Don'ts
- Don't use white backgrounds
- Don't use light gray text on dark gray backgrounds (low contrast)
- Don't use pure black (#000) — use deep navy instead
- Don't use more than 3 accent colors per section
