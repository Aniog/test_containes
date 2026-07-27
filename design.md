# SSourcing China - Design System

## Brand Identity
- Professional B2B sourcing agent based in China
- Trustworthy, clean, international feel
- Target audience: overseas buyers (US, EU, AU, etc.)

## Colors
- **Primary**: `brand-navy` (#1B2B4B) - deep navy for trust and authority
- **Primary Accent**: `brand-blue` (#2563EB) - action blue for CTAs and links
- **Secondary**: `brand-orange` (#E97B2C) - warm orange for highlights and accents
- **Neutral Light**: `brand-gray-50` (#F8FAFC) - page backgrounds
- **Neutral**: `brand-gray-100` (#F1F5F9) - card backgrounds
- **Neutral Border**: `brand-gray-200` (#E2E8F0) - borders
- **Text Primary**: `brand-gray-900` (#0F172A) - headings
- **Text Secondary**: `brand-gray-600` (#475569) - body text
- **Text Muted**: `brand-gray-400` (#94A3B8) - captions
- **Success**: `brand-green` (#16A34A) - trust indicators
- **White**: #FFFFFF - cards, sections

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - H4: text-lg md:text-xl
- Body: text-base (16px), text-brand-gray-600
- Small: text-sm, text-brand-gray-400

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components

### Buttons
- Primary CTA: bg-brand-orange text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors
- Secondary: bg-brand-navy text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-navy/90
- Outline: border-2 border-brand-navy text-brand-navy font-semibold px-6 py-3 rounded-lg hover:bg-brand-navy hover:text-white

### Cards
- bg-white rounded-xl shadow-sm border border-brand-gray-200 p-6
- Hover: hover:shadow-md transition-shadow

### Badges
- bg-brand-blue/10 text-brand-blue text-sm font-medium px-3 py-1 rounded-full

## Do's
- Use plenty of white space
- Keep text concise and scannable
- Use icons (Lucide) to support text
- Use stock images of factories, QC inspections, shipping containers
- Maintain consistent section structure
- Use trust indicators (numbers, certifications, client logos)

## Don'ts
- No dark mode (B2B audience prefers light)
- No exaggerated claims or superlatives
- No cluttered layouts
- No decorative animations that slow the page
- No hardcoded hex colors in JSX (use Tailwind config names)
