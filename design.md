# MicroCosmos Design System

## Concept
A dark, immersive, science-meets-wonder aesthetic inspired by microscopy, biology, and the hidden universe of tiny life. Deep blacks and dark teals form the base, with vivid accent colors evoking bioluminescence and cellular structures.

## Color Palette
- Background (deep space black): `bg-[#050a0e]`
- Surface (dark teal-black): `bg-[#0a1628]`
- Card surface: `bg-[#0d1f2d]`
- Primary accent (electric teal): `text-[#00d4aa]`, `bg-[#00d4aa]`
- Secondary accent (bioluminescent purple): `text-[#7c3aed]`, `bg-[#7c3aed]`
- Highlight (warm amber/gold): `text-[#f59e0b]`
- Body text: `text-slate-200`
- Muted text: `text-slate-400`
- Borders: `border-slate-700/50`

## Typography
- Font: Inter (loaded via Google Fonts)
- Hero heading: `text-5xl md:text-7xl font-black tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption/label: `text-sm text-slate-400`

## Spacing & Layout
- Page max width: `max-w-7xl mx-auto`
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6`
- Grid gaps: `gap-6` or `gap-8`

## Borders & Shadows
- Card border: `border border-slate-700/50 rounded-2xl`
- Glow effect (teal): `shadow-[0_0_30px_rgba(0,212,170,0.15)]`
- Glow effect (purple): `shadow-[0_0_30px_rgba(124,58,237,0.15)]`

## Image Style
- All images use the stock image system (`data-strk-img` / `data-strk-bg`)
- Images are rounded: `rounded-xl` or `rounded-2xl`
- Images use `object-cover` with defined aspect ratios
- Hero uses a full-bleed background image with dark overlay

## Do's
- Use dark backgrounds throughout — never white or light gray
- Use teal/purple glows on cards and featured elements
- Use large, full-bleed imagery in hero and feature sections
- Use grid layouts for image galleries (3-col on desktop, 1-col on mobile)
- Keep text contrast high (white/slate-200 on dark backgrounds)

## Don'ts
- Don't use light backgrounds
- Don't use low-contrast text (e.g. gray on gray)
- Don't use more than 2 accent colors per section
- Don't use hardcoded hex codes in JSX — use Tailwind config or inline style only when necessary
