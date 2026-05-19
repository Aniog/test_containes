# Design System — Purple Tulip Hero

## Color Palette
- Primary purple: `#7C3AED` (violet-600)
- Deep purple: `#4C1D95` (violet-900)
- Light lavender: `#EDE9FE` (violet-100)
- Accent pink: `#C084FC` (purple-400)
- White: `#FFFFFF`
- Dark overlay: `rgba(0,0,0,0.45)`

## Typography
- Font family: Inter (Google Fonts)
- Hero headline: `text-5xl md:text-7xl font-bold tracking-tight`
- Subheading: `text-xl md:text-2xl font-light`
- Body: `text-base font-normal`
- Button label: `text-sm md:text-base font-semibold`

## Spacing
- Section padding: `py-24 px-6 md:px-16`
- Component gap: `gap-6 md:gap-8`
- Button padding: `px-8 py-3`

## Borders & Shadows
- Rounded buttons: `rounded-full`
- Card shadow: `shadow-xl`
- Subtle border: `border border-violet-300`

## Visual Style
- Hero uses a full-viewport background image with a dark gradient overlay for text legibility
- Text is always white on the hero background
- Primary CTA: solid violet-600 background, white text, rounded-full
- Secondary CTA: transparent with white border, white text, rounded-full, hover fills white/10
- Smooth transitions on hover: `transition-all duration-300`

## Do's
- Always pair dark overlays with white text on image backgrounds
- Use `violet-*` Tailwind classes for purple tones
- Keep hero text left-aligned on desktop, centered on mobile

## Don'ts
- Never use dark text directly on the image background without an overlay
- Avoid mixing too many purple shades — stick to the palette above
- Don't use `px` font sizes; use Tailwind text scale
