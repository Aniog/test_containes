# MicroCosmos Design System

## Concept
A dark, scientific, immersive aesthetic inspired by microscopy and the hidden world of tiny life. Deep space-like backgrounds with glowing teal/cyan accents evoke the feeling of peering through a microscope lens.

## Colors
- Background primary: `#050d1a` (near-black deep navy) → Tailwind: `bg-[#050d1a]`
- Background secondary: `#0a1628` (dark navy) → Tailwind: `bg-[#0a1628]`
- Background card: `#0f1f38` (dark blue-navy) → Tailwind: `bg-[#0f1f38]`
- Accent primary: `#00d4c8` (teal/cyan) → Tailwind: `text-[#00d4c8]`, `border-[#00d4c8]`
- Accent secondary: `#7c3aed` (violet) → Tailwind: `text-violet-500`
- Text primary: `#f0f6ff` (near-white) → Tailwind: `text-[#f0f6ff]`
- Text secondary: `#8ba3c7` (muted blue-gray) → Tailwind: `text-[#8ba3c7]`
- Text muted: `#4a6080` (dim blue) → Tailwind: `text-[#4a6080]`
- Border subtle: `#1a3050` → Tailwind: `border-[#1a3050]`

## Typography
- Font family: Inter (loaded via Google Fonts)
- Hero heading: `text-5xl md:text-7xl font-black tracking-tight text-[#f0f6ff]`
- Section heading: `text-3xl md:text-4xl font-bold text-[#f0f6ff]`
- Subheading: `text-xl font-semibold text-[#00d4c8]`
- Body: `text-base text-[#8ba3c7] leading-relaxed`
- Caption: `text-sm text-[#4a6080]`
- Label/tag: `text-xs font-semibold uppercase tracking-widest text-[#00d4c8]`

## Spacing
- Section padding: `py-20 md:py-28 px-6`
- Card padding: `p-5 md:p-6`
- Gap between grid items: `gap-4 md:gap-6`

## Borders & Shadows
- Card border: `border border-[#1a3050]`
- Accent border: `border border-[#00d4c8]/30`
- Card shadow: `shadow-lg shadow-black/40`
- Glow effect: `shadow-[0_0_30px_rgba(0,212,200,0.15)]`

## Components
- Cards: dark navy background, subtle border, slight hover scale `hover:scale-[1.02] transition-transform`
- Buttons primary: `bg-[#00d4c8] text-[#050d1a] font-bold px-6 py-3 rounded-full hover:bg-[#00b8ad]`
- Buttons outline: `border border-[#00d4c8] text-[#00d4c8] px-6 py-3 rounded-full hover:bg-[#00d4c8]/10`
- Tags/badges: `bg-[#00d4c8]/10 text-[#00d4c8] text-xs font-semibold px-3 py-1 rounded-full`
- Divider: `border-t border-[#1a3050]`

## Images
- Use rounded corners: `rounded-xl` or `rounded-2xl`
- Overlay on hover: `group-hover:opacity-90 transition-opacity`
- Aspect ratios: 4x3 for gallery cards, 16x9 for hero/banners, 1x1 for circular portraits

## Do's
- Use dark backgrounds throughout — never white or light gray
- Use teal (#00d4c8) as the primary accent for highlights, borders, and CTAs
- Keep text clearly readable: white/near-white on dark backgrounds
- Use generous whitespace between sections
- Images should be prominent and numerous

## Don'ts
- No light/white backgrounds
- No low-contrast text (e.g., gray on dark gray)
- No bright red or orange accents — keep the palette cool and scientific
- No cluttered layouts — let images breathe
