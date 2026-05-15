# Burger Joint — Design System

## Brand Identity
A bold, warm, and appetizing burger restaurant brand. The aesthetic is modern-casual: confident typography, rich warm tones, and generous whitespace.

## Color Palette
- **Primary (Flame Red):** `#E63946` — CTAs, accents, highlights. Tailwind: `bg-[#E63946]`, `text-[#E63946]`
- **Secondary (Amber Gold):** `#F4A261` — Secondary accents, hover states. Tailwind: `bg-[#F4A261]`
- **Dark (Charcoal):** `#1A1A2E` — Navbar, footer, dark sections. Tailwind: `bg-[#1A1A2E]`
- **Surface (Warm Cream):** `#FFF8F0` — Page background, card backgrounds. Tailwind: `bg-[#FFF8F0]`
- **Text Primary:** `#1A1A2E` — Headings on light backgrounds. Tailwind: `text-[#1A1A2E]`
- **Text Secondary:** `#6B6B6B` — Body text, captions. Tailwind: `text-[#6B6B6B]`
- **Text On Dark:** `#FFFFFF` — Text on dark/colored backgrounds. Tailwind: `text-white`

## Typography
- **Font Family:** "Playfair Display" (headings) + "Inter" (body). Loaded via Google Fonts in index.html.
- **Hero Heading:** `text-5xl md:text-7xl font-bold` (Playfair Display)
- **Section Heading:** `text-3xl md:text-4xl font-bold` (Playfair Display)
- **Card Title:** `text-xl font-semibold` (Inter)
- **Body Text:** `text-base font-normal` (Inter)
- **Caption / Label:** `text-sm font-medium tracking-wide uppercase`

## Spacing
- Section padding: `py-20 px-6 md:px-16`
- Card padding: `p-6`
- Gap between grid items: `gap-8`

## Borders & Radius
- Cards: `rounded-2xl`
- Buttons: `rounded-full`
- Images: `rounded-2xl`
- Dividers: `border-[#E63946]`

## Shadows
- Cards: `shadow-lg hover:shadow-xl transition-shadow`
- Navbar: `shadow-md`

## Buttons
- **Primary CTA:** `bg-[#E63946] text-white rounded-full px-8 py-3 font-semibold hover:bg-[#c62d39] transition-colors`
- **Secondary:** `border-2 border-[#E63946] text-[#E63946] rounded-full px-8 py-3 font-semibold hover:bg-[#E63946] hover:text-white transition-colors`
- **Ghost (on dark):** `border-2 border-white text-white rounded-full px-8 py-3 font-semibold hover:bg-white hover:text-[#1A1A2E] transition-colors`

## Do's
- Use warm cream `#FFF8F0` as the default page background
- Use Playfair Display for all headings to convey premium quality
- Use generous padding and whitespace to let content breathe
- Use `#E63946` sparingly for maximum impact on CTAs and key accents
- Ensure all text has strong contrast against its background

## Don'ts
- Don't use dark backgrounds for the main content area (only navbar/footer)
- Don't use small font sizes for menu item names
- Don't use more than 2 accent colors in a single section
- Don't use low-contrast text (e.g., light gray on white)
