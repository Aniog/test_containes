# Basketball Website Design System

## Color Palette
- **Primary Orange**: `court-orange` (#F97316) — CTAs, highlights, accents
- **Dark Orange**: `court-orange-dark` (#EA580C) — hover states
- **Background Black**: `court-black` (#0F0F0F) — page background
- **Dark Surface**: `court-dark` (#1A1A1A) — cards, sections
- **Gray Surface**: `court-gray` (#2A2A2A) — subtle backgrounds
- **Light Text**: `court-light` (#F5F5F5) — primary text on dark
- **Muted Text**: `court-muted` (#9CA3AF) — secondary text, captions

## Typography
- **Font**: Inter (Google Fonts)
- **Hero Heading**: `text-5xl md:text-7xl font-black tracking-tight text-court-light`
- **Section Heading**: `text-3xl md:text-4xl font-bold text-court-light`
- **Card Title**: `text-xl font-semibold text-court-light`
- **Body**: `text-base text-court-muted`
- **Caption**: `text-sm text-court-muted`

## Spacing
- Section padding: `py-20 px-6 md:px-12`
- Card padding: `p-6 md:p-8`
- Gap between grid items: `gap-6 md:gap-8`

## Borders & Radius
- Cards: `rounded-2xl`
- Buttons: `rounded-full`
- Badges: `rounded-full`
- Subtle border: `border border-court-gray`

## Shadows
- Cards: `shadow-lg shadow-black/40`
- Hover lift: `hover:-translate-y-1 transition-transform duration-300`

## Buttons
- Primary: `bg-court-orange hover:bg-court-orange-dark text-white font-semibold px-8 py-3 rounded-full transition-colors`
- Outline: `border border-court-orange text-court-orange hover:bg-court-orange hover:text-white px-8 py-3 rounded-full transition-colors`

## Do's
- Use dark backgrounds with orange accents for energy and contrast
- Use bold, heavy font weights for headings
- Use generous whitespace between sections
- Ensure all text is clearly readable against its background

## Don'ts
- Never use light backgrounds for the main page
- Never use low-contrast text (e.g., gray on dark gray)
- Avoid too many colors — stick to orange, black, and white
