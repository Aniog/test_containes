# Design System

## Brand Identity
Clean, professional SaaS-style landing page. Indigo/violet primary palette with white backgrounds and subtle gray accents.

## Colors
- **Primary**: Indigo `#6366f1` (brand-500) — buttons, links, highlights
- **Primary Dark**: `#4f46e5` (brand-600) — hover states
- **Background**: White `#ffffff`
- **Surface/Card**: White with `border border-border` and `shadow-sm`
- **Text Primary**: `text-foreground` (near-black `#0f172a`)
- **Text Muted**: `text-muted-foreground` (slate-500)
- **Border**: `border-border` (slate-200)
- **Hero gradient**: `from-brand-50 via-white to-white`

## Typography
- **Font**: Inter (Google Fonts)
- **Hero heading**: `text-4xl md:text-6xl font-bold tracking-tight text-foreground`
- **Section heading**: `text-3xl font-bold text-foreground`
- **Card heading**: `text-lg font-semibold text-foreground`
- **Body**: `text-base text-muted-foreground`
- **Small/label**: `text-sm font-medium text-foreground`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6`
- Form gap: `space-y-4`

## Components
- **Buttons**: Rounded `rounded-md`, primary uses `bg-primary text-primary-foreground`, full-width on mobile
- **Inputs**: `border border-input rounded-md h-10 px-3`, focus ring indigo
- **Cards**: `bg-card rounded-xl border border-border shadow-sm p-6`
- **Badges**: Rounded-full, small text, indigo for new/active

## Layout
- Single-column on mobile, multi-column on `md:` and `lg:`
- Navigation: sticky top, white bg, border-bottom
- Hero: centered text, max-w-3xl, gradient background
- Features: 3-column grid on desktop
- Contact form: centered card, max-w-lg

## Do's
- Always use `text-foreground` or `text-muted-foreground` on white/card backgrounds
- Use `bg-primary text-primary-foreground` for primary buttons
- Keep generous whitespace between sections
- Use `shadow-sm` on cards, not heavy shadows

## Don'ts
- No dark backgrounds on the main page
- No text-white on white/light backgrounds
- No inline styles — use Tailwind classes only
- No arbitrary hex values in JSX — use named Tailwind colors
