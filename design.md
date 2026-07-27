# SSourcing China — Visual Style Guide

## Brand Identity
- Professional B2B sourcing agent website
- Tone: trustworthy, clear, practical, international
- No exaggerated claims — factual and confidence-building

## Typography
- Primary font: Inter (Google Fonts, weights 300–800)
- Headings: Inter 600–700, tracking tight
- Body: Inter 400, line-height 1.6
- Small/labels: Inter 500, uppercase tracking-wide for section labels

## Colors
- **Primary (Navy):** `#1B3A5C` — headers, nav, trust elements, dark backgrounds
- **Primary Light:** `#2A5A8C` — hover states, secondary headers
- **Accent (Orange):** `#E8772E` — CTAs, highlights, action buttons
- **Accent Hover:** `#D06820` — button hover
- **Success Green:** `#2D8A4E` — trust badges, checkmarks
- **Text Dark:** `#1A2332` — primary body text
- **Text Medium:** `#4A5568` — secondary text
- **Text Light:** `#718096` — captions, muted
- **Background White:** `#FFFFFF` — main content
- **Background Light:** `#F7F9FC` — alternating sections
- **Background Warm:** `#FFF8F0` — featured/CTA sections
- **Border:** `#E2E8F0` — subtle dividers
- **Card Shadow:** `0 1px 3px rgba(0,0,0,0.08)` — cards

## Tailwind Custom Colors
Map these in tailwind.config.js:
- navy: { 50: '#F0F4F8', 100: '#D9E2EC', 200: '#BCCCDC', 300: '#9FB3C8', 400: '#6B8DB5', 500: '#2A5A8C', 600: '#1B3A5C', 700: '#142D47', 800: '#0E1F31', 900: '#081422' }
- accent: { 50: '#FFF3E8', 100: '#FFE0C2', 200: '#FFCC96', 300: '#FFB06A', 400: '#E8772E', 500: '#D06820', 600: '#B85A18', 700: '#9A4C12', 800: '#7C3E0C', 900: '#5E3006' }

## Spacing & Layout
- Section padding: `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`

## Component Patterns
- **Hero:** Full-width, navy background with overlay, large headline, CTA button
- **Section headers:** Small uppercase label + large heading + subtitle
- **Cards:** White bg, rounded-xl, shadow-sm, border border-gray-100
- **CTA buttons:** bg-accent-400 text-white rounded-lg px-6 py-3 font-semibold hover:bg-accent-500
- **Secondary buttons:** border-2 border-navy-600 text-navy-600 rounded-lg px-6 py-3 font-semibold hover:bg-navy-50
- **Icons:** Lucide React, 20–24px, navy-600 or accent-400
- **Trust badges:** Green checkmark icon + short text

## Do's
- Use navy for authority and trust
- Use accent orange sparingly for CTAs and highlights
- Keep backgrounds mostly white/light for readability
- Use generous whitespace between sections
- Ensure all text is clearly readable (high contrast)
- Use realistic factory/QC/shipping stock imagery via data-strk-img

## Don'ts
- Don't use gradient backgrounds on text areas
- Don't use light text on light backgrounds
- Don't overcrowd sections — keep breathing room
- Don't use cartoonish or overly promotional language
- Don't use more than 2 accent colors per section
