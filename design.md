# SSourcing China - Design System

## Visual Style

**Overall Aesthetic:** Clean, trustworthy, international B2B. Professional corporate design with subtle Chinese manufacturing authenticity.

**Color Palette:**
- Primary: #0A2540 (Deep navy) - Trust, professionalism
- Secondary: #1E40AF (Royal blue) - Action, reliability
- Accent: #F59E0B (Amber) - Attention, quality
- Neutral Dark: #1F2937 (Slate gray) - Text
- Neutral Light: #F3F4F6 (Light gray) - Backgrounds
- White: #FFFFFF - Cards, sections
- Success: #059669 (Green) - Verification, quality

**Typography:**
- Font: Inter (system-ui fallback)
- Headings: 700 weight, tight tracking
- Body: 400 weight, 1.6 line-height
- Small text: 500 weight

**Spacing Scale:**
- Section padding: 80px (desktop), 48px (mobile)
- Card padding: 32px
- Element gaps: 16px, 24px, 32px

**Border Radius:**
- Cards: 8px
- Buttons: 6px
- Inputs: 6px

**Shadows:**
- Card: 0 1px 3px rgba(0,0,0,0.1)
- Elevated: 0 4px 6px -1px rgba(0,0,0,0.1)

**Do's:**
- Use generous white space
- Maintain consistent 8px grid alignment
- Use icons from lucide-react for visual clarity
- Ensure all text has high contrast (4.5:1 minimum)
- Use subtle dividers between sections

**Don'ts:**
- Avoid bright or saturated colors
- No decorative patterns or gradients
- No stock photo watermarks or obvious placeholders
- Avoid overly promotional language in UI
- No excessive animations or transitions

## Component Guidelines

**Buttons:**
- Primary CTA: Navy background, white text, 48px height
- Secondary: White background, navy border, navy text
- Hover: Slight darkening

**Forms:**
- Clean inputs with subtle borders
- Clear labels above fields
- Error states in red
- Success confirmation message

**Cards:**
- White background
- Subtle shadow
- Clear heading + body text
- Consistent internal spacing

**Navigation:**
- Fixed header on scroll
- Clear active state
- Mobile hamburger menu
- Logo left, nav center, CTA right

## Page Structure

All pages follow consistent header + footer pattern.
Main content uses max-width container (1280px) centered.
Sections stack vertically with consistent spacing.