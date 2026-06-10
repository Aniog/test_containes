# Design System — Mainland China Online Shop

## Visual Identity
Chinese e-commerce style: clean, modern, trustworthy. Inspired by platforms like JD.com and Tmall.
Bright red accents on white backgrounds, bold typography, card-based product layouts.

## Colors
- Primary Red: `#E31837` — main CTA buttons, badges, highlights (`bg-red-600`, `text-red-600`)
- Primary Red Dark: `#B8102A` — hover states (`hover:bg-red-700`)
- Primary Red Light: `#FEE2E2` — light backgrounds, tags (`bg-red-50`)
- Gold/Orange: `#F59E0B` — star ratings, sale badges (`text-amber-500`)
- Background: `#F5F5F5` — page background (`bg-gray-100`)
- Surface White: `#FFFFFF` — cards, navbar, modals (`bg-white`)
- Text Primary: `#1A1A1A` — headings, product names (`text-gray-900`)
- Text Secondary: `#6B7280` — descriptions, meta info (`text-gray-500`)
- Text Muted: `#9CA3AF` — placeholders, disabled (`text-gray-400`)
- Border: `#E5E7EB` — card borders, dividers (`border-gray-200`)
- Success: `#10B981` — in-stock, order success (`text-emerald-500`)
- Danger: `#EF4444` — out-of-stock, errors (`text-red-500`)

## Typography
- Font: Inter (Google Fonts)
- Page Title: `text-2xl font-bold text-gray-900`
- Section Heading: `text-xl font-semibold text-gray-900`
- Product Name: `text-base font-semibold text-gray-900`
- Price: `text-lg font-bold text-red-600`
- Original Price: `text-sm line-through text-gray-400`
- Body: `text-sm text-gray-600`
- Caption/Meta: `text-xs text-gray-500`

## Spacing & Layout
- Page max-width: `max-w-7xl mx-auto px-4`
- Section padding: `py-8` or `py-12`
- Card padding: `p-4`
- Grid gaps: `gap-4` or `gap-6`
- Product grid: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4`

## Components

### Navbar
- White background, bottom border, sticky top
- Logo left, search center, cart + user right
- `bg-white border-b border-gray-200 sticky top-0 z-50`

### Product Card
- White card, rounded corners, subtle shadow on hover
- `bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow`
- Image top, content bottom with name, price, rating

### Buttons
- Primary: `bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2.5 rounded-lg`
- Secondary: `border border-red-600 text-red-600 hover:bg-red-50 font-semibold px-6 py-2.5 rounded-lg`
- Ghost: `text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg`

### Badges
- Sale: `bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded`
- New: `bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded`
- Hot: `bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded`
- In Stock: `bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 rounded`

### Category Pills
- Default: `bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm`
- Active: `bg-red-600 text-white px-4 py-2 rounded-full text-sm`

## Do's
- Use red (#E31837) as the primary action color
- Show original price crossed out next to sale price
- Display star ratings on product cards
- Use card shadows to separate products from background
- Show "加入购物车" (Add to Cart) style prominent CTAs
- Use grid layouts for product listings

## Don'ts
- Don't use dark backgrounds for main content areas
- Don't use low-contrast text on colored backgrounds
- Don't use blue as primary color (reserved for links only)
- Don't use overly complex layouts — keep it clean and scannable
