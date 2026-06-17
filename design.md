# SSourcing China — Design System

## Brand Identity
Professional B2B sourcing agency. Clean, trustworthy, international.

## Colors
- **Primary Navy**: `#1a2e4a` — main brand color, headers, nav bg
- **Accent Orange**: `#e85d26` — CTAs, highlights, active states
- **Light Blue**: `#2563eb` — links, secondary accents
- **Dark Gray**: `#1f2937` — body text
- **Mid Gray**: `#6b7280` — secondary text, captions
- **Light Gray**: `#f3f4f6` — section backgrounds, cards
- **White**: `#ffffff` — card surfaces, nav bg on scroll
- **Border**: `#e5e7eb` — dividers, card borders

## Typography
- **Font**: Inter (Google Fonts, already loaded in index.html)
- **Heading 1**: `text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2e4a]`
- **Heading 2**: `text-3xl md:text-4xl font-bold text-[#1a2e4a]`
- **Heading 3**: `text-xl md:text-2xl font-semibold text-[#1a2e4a]`
- **Body**: `text-base text-[#1f2937] leading-relaxed`
- **Caption/Meta**: `text-sm text-[#6b7280]`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary CTA**: `bg-[#e85d26] hover:bg-[#c94d1e] text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Secondary**: `border-2 border-[#1a2e4a] text-[#1a2e4a] hover:bg-[#1a2e4a] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Ghost**: `text-[#e85d26] hover:underline font-medium`

### Cards
- `bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-6 hover:shadow-md transition-shadow`

### Section Backgrounds
- White: default
- Light gray: `bg-[#f3f4f6]`
- Navy: `bg-[#1a2e4a] text-white`

### Badges
- `bg-[#e85d26]/10 text-[#e85d26] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide`

## Do's
- Use navy for authority, orange for action
- Keep layouts clean with generous whitespace
- Use real-looking data in case studies
- Icons from lucide-react, consistent size (w-6 h-6 or w-8 h-8)
- Responsive: mobile-first, stack on mobile, grid on desktop

## Don'ts
- No dark text on dark backgrounds
- No exaggerated claims ("best in the world")
- No cluttered layouts
- No light gray text on white (use at least #6b7280)
