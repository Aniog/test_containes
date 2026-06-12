# SSourcing China – Design System

## Brand Identity
- Professional B2B sourcing agent website
- Trustworthy, international, clean
- Target: overseas buyers looking for China sourcing support

## Colors
- **Primary (Navy):** `navy-900` (#0f1b3d), `navy-800` (#1a2d5a), `navy-700` (#243f77)
- **Accent (Orange):** `accent-500` (#e8590c), `accent-600` (#d14b08), `accent-400` (#f76b1c)
- **Neutral:** Tailwind slate scale (slate-50 through slate-900)
- **Success:** emerald-500
- **Background surfaces:** white, slate-50, slate-100
- **Text primary:** slate-900
- **Text secondary:** slate-600
- **Text muted:** slate-500

## Typography
- Font family: Inter (Google Fonts), system-ui fallback
- Headings: font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - H4: text-lg md:text-xl
- Body: text-base (16px), text-slate-700
- Small/caption: text-sm, text-slate-500

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components
- **Buttons:**
  - Primary CTA: bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg
  - Secondary: border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white px-6 py-3 rounded-lg
- **Cards:** bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow
- **Badges:** inline-flex px-3 py-1 rounded-full text-sm font-medium bg-accent-500/10 text-accent-500
- **Section dividers:** border-t border-slate-200

## Do's
- Use generous whitespace
- Keep text concise and scannable
- Use icons (Lucide) to support text
- Maintain consistent border-radius (rounded-lg for buttons, rounded-xl for cards)
- Use subtle shadows (shadow-sm, shadow-md)

## Don'ts
- No dark mode (B2B site, light only)
- No neon or overly saturated colors
- No rounded-full on large containers
- No text smaller than 14px for body content
- No more than 3 font weights per page section
