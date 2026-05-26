# Case Mold Trading — Design System

## Brand Identity
Professional B2B manufacturing website. Credible, clean, inquiry-focused. Targets overseas buyers sourcing mold factories in China.

## Color Palette
- Primary Blue: `#1B4F8A` — main brand color, CTAs, headings (Tailwind: `[#1B4F8A]`)
- Primary Blue Dark: `#163F6E` — hover states (Tailwind: `[#163F6E]`)
- Accent Orange: `#E87722` — highlight CTAs, badges, accents (Tailwind: `[#E87722]`)
- Accent Orange Dark: `#C9651A` — hover on accent (Tailwind: `[#C9651A]`)
- Neutral Dark: `#1A2332` — body text, headings (Tailwind: `[#1A2332]`)
- Neutral Mid: `#4A5568` — secondary text (Tailwind: `[#4A5568]`)
- Neutral Light: `#F7F9FC` — page backgrounds, section alternates (Tailwind: `[#F7F9FC]`)
- Border: `#E2E8F0` — card borders, dividers (Tailwind: `[#E2E8F0]`)
- White: `#FFFFFF`

Add to tailwind.config.js:
```js
colors: {
  brand: {
    blue: '#1B4F8A',
    'blue-dark': '#163F6E',
    orange: '#E87722',
    'orange-dark': '#C9651A',
    dark: '#1A2332',
    mid: '#4A5568',
    light: '#F7F9FC',
    border: '#E2E8F0',
  }
}
```

## Typography
- Font: Inter (Google Fonts)
- H1: `text-4xl md:text-5xl font-bold text-[#1A2332] leading-tight`
- H2: `text-3xl font-bold text-[#1A2332]`
- H3: `text-xl font-semibold text-[#1A2332]`
- Body: `text-base text-[#4A5568] leading-relaxed`
- Small/Caption: `text-sm text-[#4A5568]`
- Nav links: `text-sm font-medium text-[#1A2332]`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-6xl mx-auto px-4 md:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Primary Button
`bg-[#E87722] hover:bg-[#C9651A] text-white font-semibold px-6 py-3 rounded-lg transition-colors`

### Secondary Button
`bg-[#1B4F8A] hover:bg-[#163F6E] text-white font-semibold px-6 py-3 rounded-lg transition-colors`

### Outline Button
`border-2 border-[#1B4F8A] text-[#1B4F8A] hover:bg-[#1B4F8A] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`

### Card
`bg-white border border-[#E2E8F0] rounded-xl shadow-sm hover:shadow-md transition-shadow p-6`

### Section (light bg)
`bg-[#F7F9FC]`

### Section (white bg)
`bg-white`

### Badge
`bg-[#1B4F8A]/10 text-[#1B4F8A] text-xs font-semibold px-3 py-1 rounded-full`

## Navigation
- Sticky top nav with white background and subtle bottom border
- Logo: brand name in `text-[#1B4F8A] font-bold text-xl`
- Nav links: `text-[#1A2332] hover:text-[#1B4F8A]`
- CTA button in nav: accent orange

## Do's
- Always use explicit text colors — never rely on inherited dark/light mode
- Use `text-[#1A2332]` for all headings
- Use `text-[#4A5568]` for body/secondary text
- Use `text-white` on colored backgrounds
- Keep sections alternating white / light gray for visual rhythm
- Use icons from lucide-react for visual support

## Don'ts
- No dark mode color-scheme switching
- No invisible text (white on white, dark on dark)
- No magic hex values outside of this guide
- No mobile-only single-column layouts on desktop
