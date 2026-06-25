# SSourcing China - Design System

## Brand Identity
- **Industry:** B2B Sourcing / International Trade
- **Tone:** Professional, trustworthy, clean, international
- **Target:** Overseas buyers looking for China sourcing support

## Colors
- **Primary:** Deep navy `#1e3a5f` — trust, professionalism
- **Primary Light:** `#2d5a8e` — hover states
- **Accent:** Warm orange `#e86c2e` — CTAs, highlights
- **Accent Hover:** `#d45a1e`
- **Background:** White `#ffffff`
- **Surface:** Light gray `#f8fafc`
- **Surface Alt:** `#f1f5f9`
- **Text Primary:** `#1e293b` (slate-800)
- **Text Secondary:** `#475569` (slate-600)
- **Text Muted:** `#64748b` (slate-500)
- **Border:** `#e2e8f0` (slate-200)
- **Success:** `#16a34a`
- **Error:** `#dc2626`

## Typography
- **Font Family:** Inter (Google Fonts)
- **Headings:** font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - H4: text-lg md:text-xl
- **Body:** text-base (16px), text-slate-600
- **Small:** text-sm, text-slate-500

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components

### Buttons
- **Primary CTA:** bg-[#e86c2e] hover:bg-[#d45a1e] text-white font-semibold px-6 py-3 rounded-lg
- **Secondary:** bg-[#1e3a5f] hover:bg-[#2d5a8e] text-white font-semibold px-6 py-3 rounded-lg
- **Outline:** border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white px-6 py-3 rounded-lg

### Cards
- bg-white rounded-xl shadow-sm border border-slate-200 p-6
- Hover: hover:shadow-md transition-shadow

### Navigation
- bg-white border-b border-slate-200 sticky top-0 z-50
- Links: text-slate-700 hover:text-[#1e3a5f] font-medium

### Sections
- Alternating backgrounds: white and #f8fafc
- Section titles centered with subtitle below

## Do's
- Use plenty of whitespace
- Keep text concise and scannable
- Use icons to support text (Lucide React)
- Use stock images for factory/QC/shipping visuals
- Maintain consistent spacing

## Don'ts
- No dark mode (B2B site, light only)
- No exaggerated claims or superlatives
- No cluttered layouts
- No magic hex values outside this system
- No text-on-text contrast issues
