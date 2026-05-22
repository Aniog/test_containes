# Design System — FreshFruit Grocery

## Brand Identity
Fresh, vibrant, and trustworthy. The site should feel like a farmers market — bright, clean, and inviting.

## Color Palette
- **Primary Green**: `#2d7a3a` — main brand color, CTAs, accents (`text-green-700`, `bg-green-700`)
- **Light Green**: `#f0fdf4` — section backgrounds (`bg-green-50`)
- **Accent Orange**: `#f97316` — highlights, badges, sale tags (`text-orange-500`, `bg-orange-500`)
- **Warm Yellow**: `#fef9c3` — subtle highlights (`bg-yellow-50`)
- **Neutral Dark**: `#1a2e1a` — headings (`text-gray-900`)
- **Neutral Mid**: `#4b5563` — body text (`text-gray-600`)
- **Neutral Light**: `#f9fafb` — page background (`bg-gray-50`)
- **White**: `#ffffff` — cards, navbar (`bg-white`)

## Typography
- **Font**: Inter (Google Fonts)
- **Headings**: `font-bold` or `font-extrabold`, `tracking-tight`
  - H1: `text-4xl md:text-6xl font-extrabold text-gray-900`
  - H2: `text-3xl md:text-4xl font-bold text-gray-900`
  - H3: `text-xl font-semibold text-gray-900`
- **Body**: `text-base text-gray-600 leading-relaxed`
- **Small/Caption**: `text-sm text-gray-500`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-4` or `p-6`
- Gap between grid items: `gap-6` or `gap-8`

## Borders & Shadows
- Cards: `rounded-2xl shadow-sm border border-gray-100`
- Buttons: `rounded-full` for pill style, `rounded-xl` for standard
- Hover shadow: `hover:shadow-md transition-shadow`

## Buttons
- **Primary CTA**: `bg-green-700 hover:bg-green-800 text-white font-semibold rounded-full px-6 py-3`
- **Secondary**: `border border-green-700 text-green-700 hover:bg-green-50 rounded-full px-6 py-3`
- **Icon button**: `bg-white rounded-full p-2 shadow-sm hover:shadow-md`

## Components
- **Product Card**: white bg, rounded-2xl, image top, name + price + add-to-cart button
- **Category Pill**: rounded-full badge with emoji + label
- **Navbar**: white bg, sticky top, shadow-sm, logo left, nav links center, cart icon right
- **Hero**: full-width, green gradient bg, large headline, subtext, CTA button, hero image right

## Do's
- Use green as the dominant brand color
- Use rounded corners generously (rounded-2xl, rounded-full)
- Keep whitespace generous between sections
- Use fruit emojis as decorative accents where appropriate
- Ensure all text has strong contrast against its background

## Don'ts
- Don't use dark backgrounds for main content areas
- Don't use small font sizes for product names or prices
- Don't crowd cards — keep padding generous
- Don't use blue as a primary color (it conflicts with the fresh/natural brand)
