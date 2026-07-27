# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, trustworthy, international, practical, B2B

## Color Palette
All hex values are registered in tailwind.config.js as named colors.

| Name         | Hex       | Usage                                      |
|--------------|-----------|--------------------------------------------|
| brand-navy   | #0D2B4E   | Primary brand color, headers, nav bg       |
| brand-blue   | #1A5FA8   | CTAs, links, highlights                    |
| brand-sky    | #2E8BC0   | Accent, hover states, icons                |
| brand-gold   | #D4A017   | Trust badges, accent highlights            |
| brand-red    | #C0392B   | China accent (subtle), error states        |
| neutral-50   | #F8FAFC   | Page backgrounds                           |
| neutral-100  | #F1F5F9   | Section alternating backgrounds            |
| neutral-200  | #E2E8F0   | Borders, dividers                          |
| neutral-600  | #475569   | Body text secondary                        |
| neutral-800  | #1E293B   | Body text primary                          |
| neutral-900  | #0F172A   | Headings                                   |

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - H4: text-lg font-semibold
- Body: text-base text-neutral-800, leading-relaxed
- Small/Caption: text-sm text-neutral-600

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components

### Buttons
- Primary: bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-navy transition-colors
- Secondary: border-2 border-brand-blue text-brand-blue px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition-colors
- CTA (large): bg-brand-gold text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-600 transition-colors

### Cards
- bg-white rounded-xl shadow-sm border border-neutral-200 p-6 hover:shadow-md transition-shadow

### Section Headers
- Centered, with a short colored underline accent below the subtitle
- Label (eyebrow): text-sm font-semibold text-brand-sky uppercase tracking-widest mb-2
- Title: text-3xl md:text-4xl font-bold text-neutral-900 mb-4
- Subtitle: text-lg text-neutral-600 max-w-2xl mx-auto

### Navigation
- Sticky top nav: bg-brand-navy text-white
- Logo: white text, bold
- Links: text-white/80 hover:text-white
- CTA button in nav: bg-brand-gold text-white

### Hero Section
- Dark overlay on background image
- Headline: text-white, large
- Subheadline: text-white/80
- CTA buttons: primary gold + secondary outline white

## Do's
- Use consistent section padding (py-16 md:py-24)
- Use max-w-7xl container on all sections
- Use brand-navy for all primary headings in dark sections
- Use neutral-900 for headings on light backgrounds
- Ensure all text has sufficient contrast (min 4.5:1)
- Use rounded-xl for cards, rounded-lg for buttons
- Use shadow-sm on cards, shadow-md on hover

## Don'ts
- Don't use pure black (#000) for text — use neutral-900
- Don't use light gray text on white backgrounds (use neutral-600 minimum)
- Don't use more than 3 font weights per section
- Don't use inline styles — use Tailwind classes only
- Don't hardcode hex values in JSX — use named Tailwind colors
