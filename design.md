# Design System

## Brand Identity
Clean, modern SaaS-style landing page. Professional, trustworthy, and approachable.

## Color Palette
- **Primary**: Indigo `#4F46E5` (`bg-indigo-600`, `text-indigo-600`)
- **Primary Dark**: `#4338CA` (`bg-indigo-700`) — hover states
- **Primary Light**: `#EEF2FF` (`bg-indigo-50`) — subtle backgrounds
- **Accent**: `#06B6D4` (`text-cyan-500`) — highlights, badges
- **Background**: White `#FFFFFF` (`bg-white`) — page background
- **Surface**: `#F8FAFC` (`bg-slate-50`) — section alternates, cards
- **Border**: `#E2E8F0` (`border-slate-200`)
- **Text Primary**: `#0F172A` (`text-slate-900`)
- **Text Secondary**: `#475569` (`text-slate-600`)
- **Text Muted**: `#94A3B8` (`text-slate-400`)
- **Success**: `#10B981` (`text-emerald-500`)
- **Error**: `#EF4444` (`text-red-500`)

## Typography
- **Font**: Inter (Google Fonts)
- **Hero Heading**: `text-5xl font-bold text-slate-900` (desktop), `text-3xl` (mobile)
- **Section Heading**: `text-3xl font-bold text-slate-900`
- **Subheading**: `text-xl font-semibold text-slate-800`
- **Body**: `text-base text-slate-600`
- **Small/Caption**: `text-sm text-slate-500`
- **Label**: `text-sm font-medium text-slate-700`

## Spacing
- Section vertical padding: `py-20` (desktop), `py-12` (mobile)
- Container max width: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6` or `p-8`
- Form field gap: `gap-4` or `gap-6`

## Borders & Radius
- Cards: `rounded-2xl border border-slate-200`
- Inputs: `rounded-lg border border-slate-300`
- Buttons: `rounded-lg`
- Badges: `rounded-full`

## Shadows
- Cards: `shadow-sm` or `shadow-md`
- Elevated cards: `shadow-lg`
- Buttons: no shadow by default, `shadow-md` on primary CTA

## Buttons
- **Primary CTA**: `bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition`
- **Secondary**: `border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium px-6 py-3 rounded-lg transition`
- **Destructive**: `bg-red-500 hover:bg-red-600 text-white`

## Form Inputs
- `w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`

## Navigation
- Sticky top nav: `bg-white/90 backdrop-blur border-b border-slate-200`
- Nav links: `text-slate-600 hover:text-indigo-600 font-medium transition`

## Do's
- Use indigo as the primary brand color consistently
- Keep sections alternating between white and slate-50 backgrounds
- Use generous whitespace between sections
- Ensure all text has sufficient contrast against its background

## Don'ts
- Don't use dark backgrounds for the main page (keep it light/white)
- Don't use more than 2 font weights in a single component
- Don't use raw hex codes — always use Tailwind named classes
- Don't place light text on light backgrounds
