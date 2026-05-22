# MicroCosmos Design System

## Concept
A dark, immersive aesthetic inspired by microscopy and the hidden world of tiny organisms. Deep navy and teal tones evoke the feeling of looking through a microscope into a glowing, mysterious world.

## Color Palette
- Background (deep dark): `bg-[#050d1a]`
- Surface (card/panel): `bg-[#0a1628]`
- Surface elevated: `bg-[#0f1f38]`
- Primary accent (teal/cyan): `text-teal-400`, `bg-teal-400`, `border-teal-400`
- Secondary accent (purple/violet): `text-violet-400`, `bg-violet-500`
- Text primary: `text-white`
- Text secondary: `text-slate-300`
- Text muted: `text-slate-500`
- Border: `border-slate-700`, `border-teal-800`

## Typography
- Font: "Space Grotesk" (headings), "Inter" (body)
- Hero heading: `text-5xl md:text-7xl font-bold tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card heading: `text-xl font-semibold`
- Body: `text-base text-slate-300`
- Caption: `text-sm text-slate-500`

## Spacing & Layout
- Page max width: `max-w-7xl mx-auto px-4 md:px-8`
- Section padding: `py-20 md:py-28`
- Card padding: `p-6`
- Grid gap: `gap-6 md:gap-8`

## Components

### Navbar
- Fixed top, dark background with blur: `fixed top-0 w-full bg-[#050d1a]/80 backdrop-blur-md border-b border-slate-800 z-50`
- Logo: teal accent color, bold
- Nav links: `text-slate-300 hover:text-teal-400 transition-colors`

### Hero Section
- Full viewport height: `min-h-screen`
- Background: dark with subtle radial gradient overlay
- Headline: large, white with teal gradient highlight
- Subtext: `text-slate-300`
- CTA button: `bg-teal-500 hover:bg-teal-400 text-white rounded-full px-8 py-3`

### Image Cards
- Rounded corners: `rounded-2xl overflow-hidden`
- Hover scale: `hover:scale-105 transition-transform duration-300`
- Caption overlay: dark gradient at bottom

### Badges / Tags
- `bg-teal-900/50 text-teal-300 border border-teal-700 rounded-full px-3 py-1 text-xs`

### Footer
- Dark background: `bg-[#030a14]`
- Muted text: `text-slate-500`

## Do's
- Use dark backgrounds throughout for immersive feel
- Use teal/cyan as the primary accent color
- Use large, high-quality images prominently
- Use subtle glowing effects with teal shadows: `shadow-teal-500/20`
- Use rounded corners on all cards and images

## Don'ts
- Don't use white or light backgrounds
- Don't use harsh red/orange accents
- Don't use small or cramped image layouts
- Don't use flat, unstyled buttons
