# Basketball Website Design System

## Brand Identity
A bold, energetic basketball-themed website with a dark, premium feel.
Primary accent: orange (#F97316) — the color of a basketball.
Secondary accent: white (#FFFFFF) for contrast.
Background: deep dark navy/black (#0A0A0F, #111827).

## Color Palette
- `bg-primary`: `#0A0A0F` — page background (near black)
- `bg-card`: `#111827` — card/section background (dark navy)
- `bg-card-hover`: `#1F2937` — card hover state
- `accent-orange`: `#F97316` — primary CTA, highlights (Tailwind: `orange-500`)
- `accent-orange-dark`: `#EA580C` — hover state (Tailwind: `orange-600`)
- `text-primary`: `#FFFFFF` — headings
- `text-secondary`: `#D1D5DB` — body text (Tailwind: `gray-300`)
- `text-muted`: `#6B7280` — captions, labels (Tailwind: `gray-500`)
- `border-subtle`: `#1F2937` — card borders (Tailwind: `gray-800`)

## Typography
- Font: **Barlow Condensed** (headings, bold/extrabold) + **Inter** (body)
- Hero heading: `text-6xl md:text-8xl font-extrabold uppercase tracking-tight`
- Section heading: `text-4xl md:text-5xl font-bold uppercase`
- Card title: `text-xl font-bold`
- Body: `text-base font-normal leading-relaxed`
- Label/caption: `text-sm font-medium uppercase tracking-widest`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section padding: `py-20 md:py-28`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`

## Borders & Radius
- Cards: `rounded-2xl border border-gray-800`
- Buttons: `rounded-full`
- Badges: `rounded-full px-4 py-1`

## Shadows & Effects
- Card hover: `hover:border-orange-500 transition-all duration-300`
- Glow effect on accent: `shadow-[0_0_30px_rgba(249,115,22,0.3)]`
- Hero overlay: dark gradient over background image

## Components

### Navbar
- Fixed top, dark background with blur: `bg-black/80 backdrop-blur-md`
- Logo: orange accent color
- Nav links: white, hover orange

### Hero Section
- Full viewport height: `min-h-screen`
- Background image with dark overlay
- Large uppercase headline
- Orange CTA button

### Stats Bar
- Dark background strip with 4 key stats
- Orange numbers, white labels

### Featured Players Section
- 3-column grid on desktop, 1-column on mobile
- Player cards with image, name, position, stats

### News/Articles Section
- 2-column grid on desktop
- Article cards with image, category badge, title, excerpt

### Schedule Section
- List of upcoming games
- Team logos, date, time, venue

### Footer
- Dark background, orange logo
- Links in gray-400

## Do's
- Use `text-white` on dark backgrounds
- Use `text-gray-900` on orange/light backgrounds
- Always pair orange buttons with white text
- Use uppercase for headings and labels
- Add hover transitions on interactive elements

## Don'ts
- No light backgrounds (keep it dark and premium)
- No small, hard-to-read fonts
- No low-contrast text combinations
- No rounded corners on hero images (use full bleed)
