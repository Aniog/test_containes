# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Industry:** Industrial machinery / Sheet metal folding equipment
- **Mood:** Elegant, professional, industrial, trustworthy, modern

## Color Palette
- **Primary Background:** `#0B0F19` — Deep navy-black for hero and dark sections
- **Secondary Background:** `#F5F5F5` — Light gray for alternating sections
- **Card Background:** `#1A1F2E` — Slightly lighter dark for cards on dark sections
- **Accent / Primary CTA:** `#D4A853` — Warm metallic gold, evokes precision metalwork
- **Accent Hover:** `#C49A3B` — Slightly deeper gold
- **Text Primary (dark bg):** `#FFFFFF`
- **Text Secondary (dark bg):** `#B0B8C8`
- **Text Primary (light bg):** `#1A1F2E`
- **Text Secondary (light bg):** `#5A6478`
- **Border:** `rgba(212, 168, 83, 0.3)` — Subtle gold border for highlights

## Typography
- **Heading Font:** Inter, system-ui, sans-serif
- **Body Font:** Inter, system-ui, sans-serif
- **H1:** 48px / 3rem, font-weight 700, letter-spacing -0.02em, line-height 1.1
- **H2:** 36px / 2.25rem, font-weight 600, letter-spacing -0.01em, line-height 1.2
- **H3:** 24px / 1.5rem, font-weight 600, line-height 1.3
- **Body:** 16px / 1rem, font-weight 400, line-height 1.6
- **Small / Caption:** 14px / 0.875rem, font-weight 400, line-height 1.5
- **Nav:** 14px / 0.875rem, font-weight 500, letter-spacing 0.05em, text-transform uppercase

## Spacing
- **Section Padding:** py-20 (80px) to py-24 (96px)
- **Container Max Width:** max-w-7xl (1280px) with px-6 responsive padding
- **Card Padding:** p-6 to p-8
- **Grid Gap:** gap-6 to gap-8
- **Element Spacing:** space-y-4 to space-y-6

## Component Styles

### Buttons
- **Primary (Gold):** bg-[#D4A853] text-[#0B0F19] font-semibold px-8 py-3 rounded-sm hover:bg-[#C49A3B] transition
- **Secondary (Outline):** border border-[#D4A853] text-[#D4A853] bg-transparent px-8 py-3 rounded-sm hover:bg-[#D4A853]/10 transition
- **Ghost (Light bg):** bg-[#1A1F2E] text-white px-6 py-3 rounded-sm hover:bg-[#2A3040] transition

### Cards
- **Product Card:** bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#D4A853]/30
- **Feature Card:** bg-[#1A1F2E] rounded-lg p-8 border border-white/5 hover:border-[#D4A853]/20 transition

### Navigation
- **Desktop:** Fixed top, bg-[#0B0F19]/95 backdrop-blur-md, border-b border-white/5
- **Mobile:** Hamburger menu, full-screen overlay with dark bg

## Layout Principles
- Single-page layout with smooth anchor scrolling
- Alternating dark/light sections for visual rhythm
- Generous whitespace between sections
- Images use stock image system with machinery-related queries
- Responsive: mobile-first, md: and lg: breakpoints for desktop

## Do's
- Use gold accent sparingly for CTAs and highlights only
- Maintain high contrast on all backgrounds
- Keep sections clean with clear hierarchy
- Use uppercase tracking-widest for small labels

## Don'ts
- Don't use multiple accent colors — stick to gold only
- Don't overcrowd sections with too much text
- Don't use low-contrast text on any background
- Don't use rounded-full buttons — keep them slightly rounded (rounded-sm)
