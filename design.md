# Yellow Pages Design System

## Brand Identity
Classic Yellow Pages aesthetic modernized with a clean, professional look.
Primary color: golden yellow (#F5C518) on dark navy (#1A1F36) header.
Content area: white background with light gray cards.

## Color Palette
- Primary Yellow: `bg-yellow-400` / `#F5C518` — used for header, accents, CTA buttons
- Dark Navy: `bg-[#1A1F36]` — header background, footer
- White: `bg-white` — card backgrounds, main content area
- Light Gray: `bg-gray-50` — page background
- Border Gray: `border-gray-200` — card borders, dividers
- Text Dark: `text-gray-900` — headings, primary text
- Text Muted: `text-gray-500` — secondary text, labels
- Link Blue: `text-blue-600 hover:text-blue-800` — clickable links

## Typography
- Font: Inter (Google Fonts)
- Page Title: `text-3xl font-bold text-white` (in header)
- Section Heading: `text-xl font-semibold text-gray-900`
- Card Name: `text-lg font-bold text-gray-900`
- Body: `text-sm text-gray-700`
- Label/Meta: `text-xs text-gray-500 uppercase tracking-wide`

## Layout
- Max width: `max-w-7xl mx-auto px-4`
- Header: full-width dark navy with yellow logo/title
- Search bar: centered, prominent, below header
- Contact grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Card: `bg-white rounded-xl shadow-sm border border-gray-200 p-5`

## Components

### Header
- Dark navy background `bg-[#1A1F36]`
- Yellow "YP" logo badge
- White navigation links
- Tagline in yellow

### Search Bar
- Large, full-width input with yellow focus ring
- Search icon inside input
- Filter dropdowns for country and location

### Contact Card
- White card with subtle shadow
- Avatar circle with initials (colored by first letter)
- Name, location badge, country code badge
- Contact info: phone, email with icons
- Social links row: website, facebook, twitter, instagram, youtube icons
- Hover: slight shadow lift `hover:shadow-md transition-shadow`

### Alphabet Filter
- Row of A-Z letter buttons
- Active letter: `bg-yellow-400 text-gray-900 font-bold`
- Inactive: `bg-white text-gray-600 hover:bg-yellow-50`

### Badges
- Country code: `bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full`
- Location: `bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full`

## Do's
- Use yellow as the primary accent color consistently
- Keep cards clean with clear visual hierarchy
- Use icons for contact info (phone, email, web, social)
- Show avatar initials with distinct background colors per letter
- Maintain generous whitespace inside cards

## Don'ts
- Don't use yellow text on white backgrounds (low contrast)
- Don't crowd cards with too much information
- Don't use more than 2 font weights per card
- Don't use inline styles — use Tailwind classes only
