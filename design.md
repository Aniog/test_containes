# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, clear, practical, trustworthy, international B2B

## Color Palette
Primary brand color: Deep Navy Blue — conveys trust, professionalism, international B2B
Accent: China Red — cultural nod, CTAs, highlights
Neutral: Slate grays for text, borders, backgrounds

| Token | Hex | Tailwind class |
|---|---|---|
| brand-navy | #0F2A4A | bg-brand-navy, text-brand-navy |
| brand-red | #C0392B | bg-brand-red, text-brand-red |
| brand-gold | #D4A017 | bg-brand-gold, text-brand-gold |
| brand-light | #F4F7FB | bg-brand-light |
| brand-slate | #4A5568 | text-brand-slate |

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
- Body: font-normal, leading-relaxed
- H1: text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy
- H2: text-3xl md:text-4xl font-bold text-brand-navy
- H3: text-xl font-semibold text-brand-navy
- Body: text-base text-brand-slate leading-relaxed
- Small/caption: text-sm text-gray-500

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components

### Buttons
- Primary CTA: bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors
- Secondary: border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors
- Ghost: text-brand-navy underline hover:text-brand-red

### Cards
- bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow
- Icon cards: icon in brand-red or brand-navy, title in brand-navy, body in brand-slate

### Navigation
- bg-white border-b border-gray-200 sticky top-0 z-50
- Logo: text-brand-navy font-bold text-xl
- Nav links: text-brand-slate hover:text-brand-navy font-medium
- Active: text-brand-navy font-semibold

### Hero Section
- bg-brand-navy text-white
- Headline: text-white font-bold
- Subheadline: text-blue-200
- CTA button: bg-brand-red

### Section Backgrounds
- White sections: bg-white
- Light sections: bg-brand-light (alternating)
- Dark sections: bg-brand-navy text-white

## Do's
- Use consistent 8px spacing grid
- Always pair dark backgrounds with white/light text
- Use brand-red sparingly for CTAs and highlights only
- Keep cards clean with subtle shadows
- Use icons from lucide-react consistently

## Don'ts
- No dark text on dark backgrounds
- No light text on light backgrounds
- No more than 2 font weights per section
- No exaggerated claims in copy
- No decorative fonts
