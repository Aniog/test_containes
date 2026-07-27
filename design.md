# SSourcing China - Design System

## Typography
- Font: Inter (Google Fonts, weights 300-800)
- Headings: font-bold, tracking-tight
- Body: font-normal, leading-relaxed
- Sizes: h1=text-5xl, h2=text-4xl, h3=text-2xl, body=text-base

## Colors
- Primary Blue: #1e3a5f (deep navy - trust, professionalism)
- Accent Blue: #2563eb (CTA buttons, links)
- Accent Orange: #f97316 (highlights, urgency elements)
- Background: #ffffff (white)
- Surface: #f8fafc (light gray)
- Text Primary: #1e293b (slate-800)
- Text Secondary: #64748b (slate-500)
- Text Light: #94a3b8 (slate-400)
- Border: #e2e8f0 (slate-200)

## Tailwind Config
- primary: { DEFAULT: '#1e3a5f', light: '#2d5a8e', dark: '#152a45' }
- accent: { DEFAULT: '#2563eb', hover: '#1d4ed8' }
- cta: '#f97316'
- surface: '#f8fafc'

## Spacing
- Section padding: py-20 md:py-28
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components
- Cards: bg-white border border-slate-200 rounded-xl shadow-sm
- Buttons: rounded-lg font-semibold
  - Primary: bg-[#2563eb] text-white hover:bg-[#1d4ed8]
  - CTA: bg-[#f97316] text-white hover:bg-[#ea580c]
  - Outline: border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white
- Inputs: border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2563eb] focus:border-transparent

## Visual Style
- Clean, spacious layouts with ample white space
- Subtle shadows (shadow-sm, shadow-md)
- Icons from Lucide React
- Stock images for hero, services, case studies
- No excessive animations - keep it professional
- Rounded corners on cards (rounded-xl)
- Consistent use of the navy blue for trust elements
