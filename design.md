# SSourcing China - Design Guidelines

## Visual Style

### Typography
- **Primary Font**: Inter (Google Fonts) - clean, professional, highly readable
- **Headings**: Inter Bold (700), sizes: H1: 48px, H2: 36px, H3: 28px, H4: 20px
- **Body**: Inter Regular (400), 16px, line-height 1.6
- **Small Text**: Inter Regular, 14px
- **Fallback**: system-ui, -apple-system, sans-serif

### Color Palette
- **Primary Blue**: #1E40AF (trustworthy, professional, B2B)
- **Primary Blue Light**: #3B82F6 (hover states, accents)
- **Secondary Navy**: #1E3A5F (headers, important text)
- **Accent Orange**: #F97316 (CTAs, highlights)
- **Success Green**: #10B981 (trust indicators, checkmarks)
- **Background Light**: #F8FAFC (page backgrounds)
- **Background White**: #FFFFFF (cards, sections)
- **Text Primary**: #1E293B (main body text)
- **Text Secondary**: #64748B (supporting text, descriptions)
- **Border**: #E2E8F0 (subtle borders)

### Layout & Spacing
- **Max Content Width**: 1280px
- **Section Padding**: 80px vertical (desktop), 48px (mobile)
- **Card Padding**: 24px
- **Grid Gap**: 32px
- **Border Radius**: 8px (cards), 6px (buttons), 4px (inputs)

### Visual Elements
- **Shadows**: Subtle shadows for cards: `0 4px 6px -1px rgba(0,0,0,0.1)`
- **Icons**: Lucide React icons, 24px default size
- **Images**: Professional factory/QC/shipping imagery via stock system
- **Decorative**: Subtle geometric patterns, gradient overlays

## Do's and Don'ts

### Do's
- Use clean, white backgrounds for content areas
- Maintain consistent spacing throughout
- Use blue for trust/professionalism, orange for CTAs
- Include real factory/warehouse imagery
- Use checkmarks and icons for trust points
- Keep text concise and scannable
- Use cards for service offerings
- Include clear CTAs on every page

### Don'ts
- Don't use flashy animations or excessive effects
- Don't use low-contrast text colors
- Don't overcrowd sections with too much content
- Don't use unprofessional stock imagery
- Don't make exaggerated claims
- Don't use more than 3 font weights
- Don't use bright/neon colors

## Component Patterns

### Buttons
- **Primary CTA**: Orange background (#F97316), white text, hover darken
- **Secondary**: Blue outline, blue text, hover fill
- **Ghost**: Transparent, text color, hover background

### Cards
- White background, subtle shadow, 8px radius
- 24px padding, consistent spacing
- Icon or image at top, title, description

### Navigation
- Sticky header with white background
- Logo left, nav links center/right
- Mobile hamburger menu
- Active state indicator

### Forms
- Clean input fields with border
- Focus states with blue ring
- Clear labels above inputs
- Error states in red

## Responsive Breakpoints
- **Mobile**: < 640px (single column, stacked)
- **Tablet**: 640px - 1024px (2 columns where appropriate)
- **Desktop**: > 1024px (full layout, 3-4 columns)
