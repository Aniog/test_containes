# Design System — 办公椅品牌网站

## Color Palette
- Primary: `#1a1a2e` (深海军蓝，用于导航/页脚背景)
- Accent: `#e8b86d` (金色，用于高亮/CTA 按钮)
- Surface: `#f8f7f4` (米白，页面主背景)
- Card BG: `#ffffff`
- Text Primary: `#1a1a2e`
- Text Secondary: `#5a5a72`
- Text Muted: `#9a9aaa`
- Border: `#e2e2ec`

Tailwind config custom colors:
- `navy`: `#1a1a2e`
- `gold`: `#e8b86d`
- `cream`: `#f8f7f4`

## Typography
- Font: Inter (Google Fonts)
- Hero title: `text-5xl md:text-7xl font-bold tracking-tight text-navy`
- Section title: `text-3xl md:text-4xl font-bold text-navy`
- Body: `text-base text-[#5a5a72] leading-relaxed`
- Label/Caption: `text-sm font-medium text-[#9a9aaa] uppercase tracking-widest`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-6xl mx-auto px-6`
- Card padding: `p-8`
- Gap between cards: `gap-8`

## Borders & Shadows
- Card: `rounded-2xl shadow-md border border-[#e2e2ec]`
- Button primary: `rounded-full bg-[#e8b86d] text-[#1a1a2e] font-semibold px-8 py-3 hover:bg-[#d4a45a] transition`
- Button outline: `rounded-full border-2 border-[#1a1a2e] text-[#1a1a2e] font-semibold px-8 py-3 hover:bg-[#1a1a2e] hover:text-white transition`

## Visual Style
- Clean, modern, premium feel
- Generous whitespace
- Subtle gradient hero section
- Image-forward product cards
- Smooth hover transitions on cards and buttons

## Do's
- Use `text-navy` or explicit dark colors on light backgrounds
- Use `text-white` on dark/navy backgrounds
- Keep section backgrounds alternating: cream → white → cream
- Use gold accent sparingly for CTAs and highlights

## Don'ts
- Don't use light gray text on white backgrounds (low contrast)
- Don't use dark text on dark backgrounds
- Don't use inline styles; use Tailwind classes
