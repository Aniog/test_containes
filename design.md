# SSourcing China - B2B Website Design System

## Visual Style

Professional, clean, trustworthy international B2B aesthetic. The design communicates reliability, expertise, and global professionalism without exaggeration.

## Color Palette

Primary:
- Navy Blue (#0F2942) - Headers, primary buttons, trust elements
- Steel Blue (#1E4A6E) - Secondary accents, links

Neutral:
- Charcoal (#2D3748) - Body text
- Slate Gray (#4A5568) - Secondary text
- Light Gray (#F7FAFC) - Backgrounds, cards
- White (#FFFFFF) - Card backgrounds, content areas

Accent:
- Teal (#0D9488) - CTAs, highlights, success states
- Teal Light (#14B8A6) - Hover states

## Typography

Font Family: Inter (system-ui fallback)

- Headlines: font-semibold, tracking-tight
  - H1: text-5xl (48px) / text-6xl (60px) on desktop
  - H2: text-4xl (36px)
  - H3: text-2xl (24px)
  - H4: text-xl (20px)

- Body: text-base (16px), leading-relaxed
- Small: text-sm (14px)

All text uses explicit foreground colors for readability.

## Spacing & Layout

- Container max-width: 1280px (mx-auto px-6)
- Section padding: py-16 md:py-24
- Card padding: p-8
- Gap between elements: gap-6, gap-8
- Consistent 8px grid system

## Components

### Buttons
- Primary CTA: bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors
- Secondary: border border-slate-300 hover:bg-slate-50 text-slate-700 px-8 py-3 rounded-lg font-medium transition-colors
- All buttons have clear hover states and focus rings

### Cards
- bg-white border border-slate-200 rounded-xl shadow-sm
- Consistent internal padding
- Clear visual hierarchy within cards

### Forms
- Clean inputs with border-slate-300
- Focus states with teal ring
- Clear labels and error states

### Navigation
- Fixed top bar with subtle shadow
- Clear active states
- Mobile hamburger menu

## Images

Use data-strk-img attributes for stock images showing:
- Factory interiors and production lines
- Quality control inspection processes
- Shipping containers and logistics
- Professional business meetings
- Product samples and manufacturing

All images maintain professional, realistic appearance.

## Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Navigation collapses to hamburger on mobile
- Forms stack vertically on mobile
- Cards adapt to single column on mobile

## Tone & Content

- Professional, clear, practical language
- No exaggerated claims or hype
- Focus on specific services and processes
- Realistic case studies with measurable outcomes
- Clear value propositions without overpromising

## Accessibility

- All text has sufficient contrast ratios
- Focus states visible on all interactive elements
- Semantic HTML structure
- Alt text for all images
- Form labels properly associated

## Do's

- Use plenty of white space for clean professional look
- Maintain consistent alignment across sections
- Use icons from lucide-react for visual clarity
- Show realistic factory/QC/shipping imagery
- Include specific numbers and processes
- Provide clear next steps (CTAs)

## Don'ts

- Avoid bright or flashy colors
- No stock photo clichés or overly staged images
- No superlatives or unrealistic promises
- Avoid cluttered layouts
- No low-contrast text
- Don't use decorative elements that distract from content