# MicroCosmos Design System

## Concept
A dark, immersive, science-meets-wonder aesthetic. The site explores the microscopic world — cells, organisms, crystals, and natural patterns invisible to the naked eye. The visual language is deep, rich, and cinematic.

## Color Palette
- Background: `#050a0f` (near-black deep ocean)
- Surface: `#0d1a26` (dark navy)
- Card: `#0f2030` (dark teal-navy)
- Accent Primary: `#00d4ff` (electric cyan) — Tailwind: `text-[#00d4ff]`, `bg-[#00d4ff]`
- Accent Secondary: `#7c3aed` (deep violet) — Tailwind: `text-violet-600`
- Accent Glow: `#00ffcc` (bioluminescent green-teal)
- Text Primary: `#e8f4f8` (near-white with cool tint)
- Text Secondary: `#7fb3c8` (muted blue-grey)
- Text Muted: `#3d6070` (dark muted)
- Border: `#1a3a4a` (subtle dark border)

## Typography
- Font: `Inter` (loaded via Google Fonts)
- Hero Title: `text-5xl md:text-7xl font-black tracking-tight`
- Section Title: `text-3xl md:text-4xl font-bold`
- Card Title: `text-xl font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption: `text-sm text-[#7fb3c8]`
- Label/Tag: `text-xs font-semibold uppercase tracking-widest`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`
- Card padding: `p-5 md:p-6`

## Borders & Radius
- Card radius: `rounded-2xl`
- Button radius: `rounded-full`
- Image radius: `rounded-xl`
- Border color: `border border-[#1a3a4a]`

## Shadows & Glow
- Card shadow: `shadow-lg shadow-black/40`
- Glow effect: `drop-shadow-[0_0_12px_rgba(0,212,255,0.4)]`
- Hover glow: `hover:shadow-[0_0_24px_rgba(0,212,255,0.3)]`

## Images
- Use `data-strk-img` and `data-strk-bg` for all imagery
- Hero: full-width background, `16x9` ratio, width `1600`
- Gallery grid: `4x3` or `3x2` ratio, width `600`–`800`
- Feature cards: `3x2` ratio, width `600`
- Portrait/detail: `1x1` ratio, width `400`

## Components

### Navigation
- Fixed top bar, dark semi-transparent background with backdrop blur
- Logo left, nav links right
- `bg-[#050a0f]/80 backdrop-blur-md border-b border-[#1a3a4a]`

### Hero Section
- Full-viewport height, centered content over background image
- Dark overlay gradient: `bg-gradient-to-b from-black/60 via-black/30 to-[#050a0f]`
- Cyan accent on key words

### Section Dividers
- Subtle gradient lines or spacing, no harsh borders

### Cards
- Dark card background `bg-[#0f2030]`, border `border-[#1a3a4a]`
- Image on top, content below
- Hover: slight scale `hover:scale-[1.02]` and glow border

### Buttons
- Primary: `bg-[#00d4ff] text-[#050a0f] font-bold rounded-full px-6 py-2.5 hover:bg-[#00ffcc]`
- Ghost: `border border-[#00d4ff] text-[#00d4ff] rounded-full px-6 py-2.5 hover:bg-[#00d4ff]/10`

## Do's
- Use dark backgrounds throughout — this is a dark-mode-only site
- Use cyan/teal accents for highlights and interactive elements
- Use large, immersive images — the site is image-heavy by design
- Use subtle animations (fade-in, scale on hover)
- Keep text readable: always use light text on dark backgrounds

## Don'ts
- No white or light backgrounds
- No warm color palettes (orange, red, yellow as primary)
- No small or cramped image layouts
- No low-contrast text combinations
