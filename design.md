# Design System — 驯犬赛事专业网站

## Brand Identity
Professional dog training competition website with an authoritative, sporty, and trustworthy feel.
Primary audience: dog trainers, handlers, and enthusiasts.

## Color Palette
- **Primary**: Deep Navy `#1a2744` — authority, trust
- **Accent**: Golden Yellow `#f5a623` — energy, achievement, medals
- **Secondary**: Forest Green `#2d6a4f` — nature, outdoors
- **Background**: Off-white `#f8f7f4` — clean, warm
- **Surface**: White `#ffffff`
- **Text Primary**: `#1a1a2e` — near-black
- **Text Secondary**: `#6b7280` — muted gray
- **Border**: `#e5e7eb`

Tailwind config custom colors:
- `navy`: `#1a2744`
- `gold`: `#f5a623`
- `forest`: `#2d6a4f`
- `cream`: `#f8f7f4`

## Typography
- **Font**: Inter (Google Fonts, already loaded)
- **Headings**: font-bold, tracking-tight
  - H1: `text-4xl md:text-6xl font-extrabold`
  - H2: `text-3xl md:text-4xl font-bold`
  - H3: `text-xl md:text-2xl font-semibold`
- **Body**: `text-base text-gray-700`
- **Caption/Label**: `text-sm text-gray-500`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section padding: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Border radius: `rounded-xl` for cards, `rounded-full` for badges/pills

## Components

### Buttons
- Primary: `bg-gold text-navy font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition`
- Secondary: `border-2 border-navy text-navy font-semibold px-6 py-3 rounded-lg hover:bg-navy hover:text-white transition`
- Ghost: `text-navy underline hover:text-gold transition`

### Cards
- `bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 border border-gray-100`

### Navigation
- Sticky top nav with navy background
- Logo: white text, gold accent
- Links: white text, gold on hover
- Mobile: hamburger menu

### Badges / Status Pills
- Active: `bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full`
- Upcoming: `bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full`
- Closed: `bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full`

### Hero Section
- Full-width with background image overlay
- Dark gradient overlay for text readability
- Large headline + subtitle + CTA buttons

## Do's
- Use navy + gold as the primary color combination
- Use generous whitespace between sections
- Use card grids for events and competitors
- Use icons from lucide-react consistently
- Ensure all text is readable against its background

## Don'ts
- Don't use light text on light backgrounds
- Don't use more than 3 font sizes per section
- Don't use inline styles — use Tailwind classes only
- Don't use placeholder colors like gray-200 for important text
