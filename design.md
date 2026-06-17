# ARTITECT MACHINERY — Design Style Guide

## Brand Personality
Professional, precise, trustworthy, and elegant. The brand conveys industrial expertise with a refined, modern aesthetic. Not heavy or gritty — clean and sophisticated.

## Typography
- **Primary Font**: Inter (Google Fonts) — clean, modern sans-serif
- **Headings**: Inter 700–800 weight, tracking tight
- **Body**: Inter 400 weight, leading relaxed
- **Accent/Label**: Inter 500–600 weight, uppercase tracking-wide for small labels

## Color Palette
- **Primary**: Deep Navy `#0F1B2D` — authority, precision
- **Primary Light**: `#1A2D47` — hover states, darker sections
- **Accent**: Warm Gold `#C8973E` — elegance, premium feel
- **Accent Light**: `#D4A94F` — hover states for gold elements
- **Background**: Off-White `#F7F8FA` — clean, spacious
- **Surface**: White `#FFFFFF` — cards, elevated elements
- **Text Primary**: `#0F1B2D` — on light backgrounds
- **Text Secondary**: `#5A6577` — muted descriptions
- **Text On Dark**: `#F7F8FA` — on navy/dark backgrounds
- **Border**: `#E2E6ED` — subtle dividers
- **Success**: `#2D8A56` — confirmation states

## Spacing & Layout
- Section padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`
- Generous whitespace — let the content breathe

## Borders & Shadows
- Cards: `rounded-xl border border-[#E2E6ED] shadow-sm`
- Hover: `shadow-md` with subtle translateY
- Buttons: `rounded-lg` for primary, `rounded-full` for CTA
- No heavy borders — keep it refined

## Buttons
- **Primary CTA**: `bg-[#C8973E] text-white hover:bg-[#D4A94F] px-8 py-3 rounded-lg font-semibold`
- **Secondary**: `border-2 border-[#0F1B2D] text-[#0F1B2D] hover:bg-[#0F1B2D] hover:text-white px-8 py-3 rounded-lg font-semibold`
- **On Dark**: `bg-[#C8973E] text-white hover:bg-[#D4A94F]` or `border-2 border-white text-white hover:bg-white hover:text-[#0F1B2D]`

## Images
- Use `data-strk-img` and `data-strk-bg` for stock images
- Product images: `4x3` ratio, `600` width
- Hero backgrounds: `16x9` ratio, `1600` width
- Feature icons: Use Lucide React icons

## Do's
- Use generous whitespace for an elegant feel
- Use gold accents sparingly for premium touch
- Keep navigation simple and intuitive
- Use smooth transitions (transition-all duration-300)
- Ensure high contrast for readability

## Don'ts
- Don't use bright or neon colors
- Don't overcrowd sections with too much content
- Don't use heavy drop shadows
- Don't use more than 2 font families
- Don't use low-contrast text (e.g., light gray on white)
