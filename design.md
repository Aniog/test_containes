# SSourcing China - Design System

## Overview
A professional B2B website for a China-based sourcing agent. Clean, trustworthy, international feel. Target audience: overseas buyers, procurement managers, business owners.

## Color Palette
- **Primary (Brand Blue)**: `#1E40AF` (blue-800) - trustworthy, professional
- **Primary Accent**: `#2563EB` (blue-600) - buttons, links, active states
- **Primary Dark**: `#1E3A5F` - headings, dark backgrounds
- **Secondary (Warm Accent)**: `#D97706` (amber-600) - CTAs, highlights
- **Background**: `#F8FAFC` (slate-50) - page background
- **Surface**: `#FFFFFF` - cards, sections
- **Text Primary**: `#0F172A` (slate-900) - body text
- **Text Secondary**: `#475569` (slate-600) - captions, descriptions
- **Text Muted**: `#94A3B8` (slate-400) - placeholders
- **Border**: `#E2E8F0` (slate-200) - dividers, card borders
- **Success**: `#16A34A` (green-600) - trust indicators
- **Dark Section BG**: `#0F172A` (slate-900) - footer, dark sections

## Typography
- **Font Family**: Inter, system-ui, sans-serif
- **Headings**: font-semibold to font-bold, tight letter spacing
  - H1: text-4xl md:text-5xl lg:text-6xl, font-bold, tracking-tight
  - H2: text-3xl md:text-4xl, font-bold, tracking-tight
  - H3: text-xl md:text-2xl, font-semibold
- **Body**: text-base, font-normal, leading-relaxed
- **Small/Caption**: text-sm, text-slate-600

## Spacing
- Section padding: py-16 md:py-24
- Container max-width: max-w-7xl mx-auto
- Component gaps: gap-6 to gap-12
- Card padding: p-6 to p-8

## Components

### Buttons
- **Primary CTA**: bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-lg
- **Secondary**: bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg
- **Outline**: border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-lg

### Cards
- bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition
- p-6 or p-8

### Forms
- Input: border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500
- Label: text-sm font-medium text-slate-700

## Layout Patterns
- Hero: full-width, left-aligned content, optional right image
- Feature grid: 3 or 4 columns on desktop, 1 on mobile
- Two-column: text + image alternating
- Dark section: slate-900 background with white text

## Visual Style
- Clean lines, generous whitespace
- Subtle shadows for depth
- Icons from Lucide React
- Stock images for factory, quality control, shipping, manufacturing
- Trust badges and numbers prominently displayed
- No gradients - solid colors only
- Rounded corners on all interactive elements (rounded-lg to rounded-xl)

## Do's and Don'ts
- DO use high-contrast text on all backgrounds
- DO keep CTAs above the fold where possible
- DO use real numbers for trust indicators
- DON'T use overly decorative elements
- DON'T use more than 2 accent colors
- DON'T crowd content - keep breathing room
