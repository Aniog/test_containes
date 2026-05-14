# 星闪医疗器械有限公司 Design System

## Brand Identity
Professional medical device company. Conveys trust, precision, innovation, and clinical excellence.

## Color Palette

### Primary Colors
- **Deep Navy** `#0A2463` — Primary brand color, used for headings, navbar background, key CTAs. Tailwind: `bg-[#0A2463]`, `text-[#0A2463]`
- **Medical Blue** `#1565C0` — Secondary brand color, used for buttons, links, highlights. Tailwind: `bg-[#1565C0]`, `text-[#1565C0]`
- **Sky Blue** `#1E88E5` — Accent, hover states, icons. Tailwind: `text-[#1E88E5]`

### Neutral Colors
- **White** `#FFFFFF` — Page backgrounds, card backgrounds
- **Light Gray** `#F5F7FA` — Section backgrounds, alternating rows
- **Mid Gray** `#E8ECF0` — Borders, dividers
- **Text Gray** `#64748B` — Body text, descriptions
- **Dark Text** `#1E293B` — Headings, primary text

### Accent Colors
- **Teal** `#00897B` — Success states, certifications, badges
- **Gold** `#F59E0B` — Highlights, star ratings, awards

## Typography

### Font Family
- Primary: `'Noto Sans SC', 'Inter', sans-serif` — Chinese + Latin support
- Headings: Bold weight (700-800)
- Body: Regular weight (400)

### Scale
- Hero heading: `text-4xl md:text-5xl lg:text-6xl font-bold`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card heading: `text-xl font-semibold`
- Body: `text-base text-[#64748B]`
- Small/caption: `text-sm text-[#64748B]`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Borders & Shadows
- Card border: `border border-[#E8ECF0] rounded-xl`
- Card shadow: `shadow-md hover:shadow-xl transition-shadow duration-300`
- Button border radius: `rounded-lg`
- Image border radius: `rounded-xl`

## Components

### Primary Button
`bg-[#1565C0] hover:bg-[#0A2463] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200`

### Secondary Button (Outline)
`border-2 border-[#1565C0] text-[#1565C0] hover:bg-[#1565C0] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200`

### Section Background Alternation
- Odd sections: `bg-white`
- Even sections: `bg-[#F5F7FA]`

### Navbar
- Background: `bg-[#0A2463]`
- Text: `text-white`
- Active link: `text-[#1E88E5]`
- Height: `h-16 md:h-20`

### Footer
- Background: `bg-[#0A2463]`
- Text: `text-white/80`
- Heading: `text-white font-semibold`

## Do's
- Use clean white space generously
- Use high-quality medical/healthcare imagery
- Keep text concise and professional
- Use icons to support text (Lucide React)
- Maintain consistent padding and alignment
- Use gradient overlays on hero images for text readability

## Don'ts
- Don't use bright/neon colors
- Don't use dark text on dark backgrounds
- Don't crowd elements — maintain breathing room
- Don't use more than 3 font sizes per section
- Don't use decorative fonts — keep it clean and professional
