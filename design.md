# SSourcing China — Design System

## Brand Identity
Professional, trustworthy, international B2B sourcing company based in China.
Clean, modern, data-driven aesthetic. No flashy animations or exaggerated claims.

## Color Palette
- **Primary (Brand Blue):** `brand-700` (#1e3a8a) — headers, CTAs, nav
- **Primary Dark:** `brand-900` (#0f1f4a) — hero backgrounds, footer
- **Primary Mid:** `brand-600` (#1d4ed8) — links, hover states
- **Accent (Amber):** `accent-500` (#d97706) — CTA buttons, highlights, badges
- **Accent Light:** `accent-400` (#f59e0b) — hover on accent
- **Neutral Light:** `neutral-50` (#f8fafc) — page backgrounds
- **Neutral Section:** `neutral-100` (#f1f5f9) — alternating section backgrounds
- **Neutral Border:** `neutral-200` (#e2e8f0) — card borders, dividers
- **Body Text:** `neutral-700` (#334155) — main body copy
- **Muted Text:** `neutral-500` (#64748b) — secondary text, captions
- **White:** `#ffffff` — card backgrounds, nav

## Typography
- **Font:** Inter (Google Fonts)
- **Display/H1:** `text-4xl md:text-5xl lg:text-6xl font-bold text-white` (on dark) or `text-brand-900`
- **H2 Section:** `text-3xl md:text-4xl font-bold text-brand-900`
- **H3 Card:** `text-xl font-semibold text-brand-800`
- **Body:** `text-base text-neutral-700 leading-relaxed`
- **Small/Caption:** `text-sm text-neutral-500`
- **Label/Badge:** `text-xs font-semibold uppercase tracking-wide`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary CTA:** `bg-accent-500 hover:bg-accent-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Secondary:** `bg-white hover:bg-neutral-50 text-brand-700 border border-brand-200 font-semibold px-6 py-3 rounded-lg transition-colors`
- **Ghost/Outline:** `border-2 border-white text-white hover:bg-white hover:text-brand-900 font-semibold px-6 py-3 rounded-lg transition-colors`

### Cards
- Background: `bg-white`
- Border: `border border-neutral-200`
- Shadow: `shadow-sm hover:shadow-md transition-shadow`
- Radius: `rounded-xl`

### Navigation
- Background: `bg-white` (scrolled) / transparent (hero)
- Border bottom: `border-b border-neutral-200`
- Links: `text-neutral-700 hover:text-brand-600 font-medium`
- Active: `text-brand-700 font-semibold`

### Hero Section
- Background: `bg-brand-900` with subtle overlay
- Text: white
- Subtext: `text-brand-200`

### Section Alternation
- Odd sections: `bg-white`
- Even sections: `bg-neutral-50`
- Dark sections: `bg-brand-900 text-white`

## Do's
- Use consistent 8px spacing grid
- Keep CTAs prominent with accent color
- Use icons from lucide-react for all iconography
- Maintain high contrast for all text
- Use `leading-relaxed` for body copy
- Cards should have clear visual hierarchy

## Don'ts
- No gradients on text
- No low-contrast text (e.g., light gray on white)
- No exaggerated marketing language
- No decorative fonts
- No inline styles
