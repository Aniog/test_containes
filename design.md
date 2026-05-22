# MicroCosmos Design System

## Brand Identity
MicroCosmos is a science-inspired website exploring the microscopic world — cells, bacteria, fungi, insects, and other tiny organisms. The visual style is dark, immersive, and scientific, evoking the feeling of peering through a microscope into an unseen universe.

## Color Palette
- Background (deep dark): `#050d1a` — `bg-[#050d1a]`
- Surface (card/panel): `#0a1628` — `bg-[#0a1628]`
- Surface elevated: `#0f1f38` — `bg-[#0f1f38]`
- Border subtle: `#1a3050` — `border-[#1a3050]`
- Primary accent (teal/cyan): `#00d4c8` — `text-[#00d4c8]`, `bg-[#00d4c8]`
- Secondary accent (violet): `#7c3aed` — `text-violet-600`
- Highlight (amber/gold): `#f59e0b` — `text-amber-400`
- Text primary: `#e2e8f0` — `text-slate-200`
- Text secondary: `#94a3b8` — `text-slate-400`
- Text muted: `#475569` — `text-slate-600`

## Typography
- Font family: "Space Grotesk" (headings), "Inter" (body) — loaded via Google Fonts
- Heading XL: `text-5xl md:text-7xl font-bold tracking-tight`
- Heading L: `text-3xl md:text-4xl font-bold`
- Heading M: `text-xl md:text-2xl font-semibold`
- Body: `text-base text-slate-300 leading-relaxed`
- Caption/label: `text-sm text-slate-400 uppercase tracking-widest`

## Spacing & Layout
- Page max width: `max-w-7xl mx-auto px-4 md:px-8`
- Section padding: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Grid gap: `gap-6 md:gap-8`

## Components

### Navigation
- Fixed top bar, dark background with blur: `fixed top-0 w-full bg-[#050d1a]/80 backdrop-blur-md border-b border-[#1a3050] z-50`
- Logo: teal accent color, bold
- Nav links: `text-slate-300 hover:text-[#00d4c8] transition-colors`
- Active link: `text-[#00d4c8]`

### Hero Section
- Full viewport height: `min-h-screen`
- Background image with dark overlay
- Centered content with large headline
- Subtle animated gradient overlay

### Cards
- Dark surface with border: `bg-[#0a1628] border border-[#1a3050] rounded-2xl overflow-hidden`
- Hover effect: `hover:border-[#00d4c8]/40 hover:shadow-lg hover:shadow-[#00d4c8]/10 transition-all duration-300`
- Image aspect ratio: `aspect-[4/3]` or `aspect-square`

### Buttons
- Primary: `bg-[#00d4c8] text-[#050d1a] font-semibold px-6 py-3 rounded-full hover:bg-[#00b8ad] transition-colors`
- Secondary/outline: `border border-[#00d4c8] text-[#00d4c8] px-6 py-3 rounded-full hover:bg-[#00d4c8]/10 transition-colors`

### Badges/Tags
- `bg-[#00d4c8]/10 text-[#00d4c8] text-xs font-medium px-3 py-1 rounded-full border border-[#00d4c8]/20`

## Do's
- Use dark backgrounds throughout — never white or light backgrounds
- Always ensure text is clearly readable against dark surfaces (use slate-200 or slate-300 for body text)
- Use teal (#00d4c8) as the primary accent for interactive elements and highlights
- Use generous whitespace between sections
- Images should be large and prominent — this is an image-heavy site
- Use rounded corners on cards and images (rounded-xl or rounded-2xl)

## Don'ts
- Don't use white backgrounds
- Don't use low-contrast text (e.g., dark gray on dark background)
- Don't use more than 3 accent colors at once
- Don't use sharp corners on cards
- Don't crowd elements — maintain breathing room
