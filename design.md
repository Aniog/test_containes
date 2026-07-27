# SSourcing China - Visual Design System

## Brand Overview
Professional B2B sourcing agent website for China-based supplier verification and quality control services.

## Color Palette
- Primary: #0F172A (Slate 900) - Deep navy for headers and primary text
- Secondary: #1E40AF (Blue 800) - Trustworthy blue for CTAs and accents
- Accent: #0EA5E9 (Sky 500) - Light blue for highlights
- Background: #FFFFFF (White) - Clean white backgrounds
- Surface: #F8FAFC (Slate 50) - Light gray for cards and sections
- Text Primary: #0F172A (Slate 900) - Dark text for readability
- Text Secondary: #475569 (Slate 600) - Muted text for descriptions
- Border: #E2E8F0 (Slate 200) - Subtle borders
- Success: #059669 (Emerald 600) - For trust indicators

## Typography
- Font Family: Inter (system-ui fallback)
- Headings: 700 weight, tight tracking
- Body: 400 weight, 1.6 line-height
- Small text: 500 weight for labels

## Spacing Scale
- Section padding: 80px top/bottom (desktop), 48px (mobile)
- Card padding: 32px
- Element gaps: 16px, 24px, 32px
- Container max-width: 1280px with 24px side padding

## Component Styles

### Buttons
- Primary CTA: bg-[#1E40AF] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1E3A8A] transition-colors
- Secondary: border border-[#1E40AF] text-[#1E40AF] px-8 py-3 rounded-lg font-medium hover:bg-[#EFF6FF]
- Form submit: Full width on mobile, auto on desktop

### Cards
- Background: #FFFFFF
- Border: 1px solid #E2E8F0
- Shadow: 0 1px 3px rgba(0,0,0,0.05)
- Hover: Subtle lift with shadow transition
- Padding: 32px
- Border radius: 12px

### Forms
- Input: border border-[#E2E8F0] rounded-lg px-4 py-3 focus:border-[#1E40AF] focus:ring-1 focus:ring-[#1E40AF]
- Label: text-sm font-medium text-[#475569] mb-1.5 block
- Error: text-sm text-red-600 mt-1

### Navigation
- Desktop: Horizontal links with hover underline
- Mobile: Hamburger menu with slide-out drawer
- Active state: Bold weight + blue accent

## Layout Principles
- Desktop-first responsive approach
- 12-column grid system via Tailwind
- Consistent 24px horizontal margins
- Generous whitespace between sections
- Clear visual hierarchy with heading sizes

## Visual Elements
- Icons: Lucide React icons in slate/blue tones
- Images: Professional factory, QC, and logistics visuals via data-strk-img
- Trust badges: Clean logos or icon + text combinations
- Process steps: Numbered circles with connecting lines

## Do's
- Use ample white space for professional feel
- Ensure all text has high contrast (WCAG AA minimum)
- Keep CTAs consistent in style and placement
- Use realistic, relevant imagery for B2B context
- Maintain consistent icon style throughout

## Don'ts
- Avoid bright or saturated colors
- No decorative patterns or gradients
- No exaggerated claims or hype language
- Avoid cluttered layouts or tight spacing
- No low-contrast text or icons