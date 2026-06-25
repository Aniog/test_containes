# SSourcing China - Design System

## Visual Style

Professional, clean, trustworthy B2B website for a China-based sourcing agent.

### Color Palette

- **Primary**: #0F172A (Slate 900) - Deep navy for headers and primary text
- **Secondary**: #1E40AF (Blue 800) - Trustworthy blue for CTAs and accents
- **Accent**: #0EA5E9 (Sky 500) - Light blue for highlights
- **Background**: #FFFFFF (White) - Clean white backgrounds
- **Surface**: #F8FAFC (Slate 50) - Light gray for cards and sections
- **Text Primary**: #0F172A (Slate 900) - Dark text for readability
- **Text Secondary**: #475569 (Slate 600) - Muted text for descriptions
- **Border**: #E2E8F0 (Slate 200) - Subtle borders
- **Success**: #059669 (Emerald 600) - For trust indicators

### Typography

- **Font Family**: Inter (system-ui fallback)
- **Headings**: 600-700 weight, tight tracking
  - H1: 48px / 56px line-height (desktop), 36px / 42px (mobile)
  - H2: 36px / 44px (desktop), 28px / 36px (mobile)
  - H3: 24px / 32px
  - H4: 20px / 28px
- **Body**: 16px / 26px line-height, 400-500 weight
- **Small**: 14px / 20px

### Spacing

- Consistent 8px grid system
- Section padding: 80px vertical (desktop), 48px (mobile)
- Card padding: 32px
- Component gaps: 16px, 24px, 32px

### Components

#### Buttons
- Primary CTA: bg-[#1E40AF] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1E3A8A] transition-colors
- Secondary: border border-[#1E40AF] text-[#1E40AF] px-8 py-3 rounded-lg font-medium hover:bg-[#EFF6FF]
- Size: min 44px height for touch targets

#### Cards
- Background: #FFFFFF
- Border: 1px solid #E2E8F0
- Shadow: 0 1px 3px rgba(0,0,0,0.05)
- Hover: subtle lift with shadow transition
- Border radius: 12px

#### Forms
- Input: border border-[#E2E8F0] rounded-lg px-4 py-3 focus:border-[#1E40AF] focus:ring-1 focus:ring-[#1E40AF]
- Label: 14px font-medium text-[#475569] mb-1.5
- Error: 14px text-red-600 mt-1

#### Navigation
- Fixed header with subtle shadow
- Logo left, nav links center, CTA right
- Mobile: hamburger menu

### Layout Principles

- Maximum content width: 1280px, centered
- Responsive breakpoints: 640px, 768px, 1024px, 1280px
- Generous whitespace between sections
- Left-aligned text for readability
- Consistent vertical rhythm

### Imagery

- Professional factory, QC inspection, shipping visuals
- Use data-strk-img for stock images with contextual queries
- Aspect ratios: 16:9 for hero, 4:3 for cards, 1:1 for icons

### Do's

- Use ample white space
- Maintain consistent icon style (Lucide)
- Ensure all text has sufficient contrast
- Use professional, practical language
- Show real process steps visually

### Don'ts

- Avoid overly bright or saturated colors
- No exaggerated claims or hype language
- No decorative elements that distract from content
- No low-contrast text
- No cluttered layouts

### Trust Elements

- Client logos section (placeholder)
- Case study metrics
- Process transparency
- Professional certifications mention
- Clear contact information

### SEO & Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text on all images
- ARIA labels on interactive elements
- Keyboard navigation support
- Mobile-first responsive design
