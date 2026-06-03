# MicroCosmos Design System

## Concept
A dark, immersive website evoking the feeling of peering through a microscope into the hidden world of tiny life. Deep space-like backgrounds with glowing teal/cyan accents.

## Colors
- Background primary: `#050a14` (near-black deep navy) → Tailwind: `bg-[#050a14]`
- Background secondary: `#0d1526` (dark navy) → Tailwind: `bg-[#0d1526]`
- Background card: `#111c30` (dark card) → Tailwind: `bg-[#111c30]`
- Accent primary: `#00d4c8` (teal/cyan) → Tailwind: `text-[#00d4c8]`, `border-[#00d4c8]`
- Accent secondary: `#7c3aed` (violet) → Tailwind: `text-violet-500`
- Text primary: `#f0f4ff` (near-white) → Tailwind: `text-[#f0f4ff]`
- Text secondary: `#8ba3c7` (muted blue-gray) → Tailwind: `text-[#8ba3c7]`
- Text muted: `#4a6080` → Tailwind: `text-[#4a6080]`
- Border subtle: `#1e3050` → Tailwind: `border-[#1e3050]`

## Typography
- Font: Inter (loaded via Google Fonts in index.html)
- Hero heading: `text-5xl md:text-7xl font-black tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card title: `text-lg font-semibold`
- Body: `text-base font-normal`
- Caption: `text-sm text-[#8ba3c7]`

## Spacing
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-4` or `p-6`
- Gap between cards: `gap-4` or `gap-6`

## Borders & Shadows
- Card border: `border border-[#1e3050]`
- Card hover: `hover:border-[#00d4c8]/50`
- Glow effect: `shadow-[0_0_30px_rgba(0,212,200,0.15)]`
- Card radius: `rounded-xl` or `rounded-2xl`

## Do's
- Use dark backgrounds throughout — never white or light gray
- Use teal (#00d4c8) for highlights, labels, and interactive elements
- Use image-heavy layouts with grid and masonry-style arrangements
- Add subtle glow/blur effects to accent elements
- Use uppercase tracking-widest for section labels/eyebrows

## Don'ts
- Don't use white or light backgrounds
- Don't use low-contrast text on dark backgrounds
- Don't use more than 2 accent colors per section
- Don't use large empty spaces without images or content
