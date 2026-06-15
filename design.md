# ARTITECT MACHINERY - Design Guidelines

## Brand Identity
- **Brand Name**: ARTITECT MACHINERY
- **Industry**: Sheet Metal Fabrication Equipment
- **Style**: Elegant, Professional, User-Friendly, Industrial Precision

## Color Palette

### Primary Colors
- **Deep Navy**: `#1a1f36` - Primary brand color, headers, footers
- **Steel Blue**: `#2c5282` - Secondary color, accents, buttons
- **Copper**: `#c05621` - Accent color, CTAs, highlights

### Neutral Colors
- **Light Gray**: `#f7fafc` - Backgrounds
- **Medium Gray**: `#a0aec0` - Secondary text
- **Dark Gray**: `#2d3748` - Primary text
- **White**: `#ffffff` - Cards, content areas

### Semantic Colors
- **Success**: `#38a169` - Confirmations
- **Error**: `#e53e3e` - Errors, warnings

## Typography

### Font Family
- **Headings**: `Playfair Display` - Elegant serif for headings
- **Body**: `Inter` - Clean, modern sans-serif for body text
- **Fallback**: `system-ui, -apple-system, sans-serif`

### Font Sizes
- **Hero Heading**: `text-5xl md:text-6xl lg:text-7xl` (48px - 72px+)
- **Section Headings**: `text-3xl md:text-4xl` (30px - 36px)
- **Subheadings**: `text-xl md:text-2xl` (20px - 24px)
- **Body Text**: `text-base` (16px)
- **Small Text**: `text-sm` (14px)

### Font Weights
- **Light**: 300 - Elegant touch
- **Regular**: 400 - Body text
- **Medium**: 500 - Subheadings
- **Semi-bold**: 600 - CTAs, important text
- **Bold**: 700 - Headings

## Spacing & Layout

### Section Spacing
- **Desktop**: `py-20` (80px top/bottom)
- **Mobile**: `py-12` (48px top/bottom)
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

### Component Spacing
- **Cards**: `p-6` (24px padding)
- **Grid Gap**: `gap-8` (32px)
- **Button Padding**: `px-8 py-3` (32px x 12px)

## Design Elements

### Shadows
- **Card Shadow**: `shadow-lg hover:shadow-xl`
- **Button Shadow**: `shadow-md hover:shadow-lg`
- **Header Shadow**: `shadow-sm`

### Border Radius
- **Cards**: `rounded-lg` (8px)
- **Buttons**: `rounded-md` (6px)
- **Images**: `rounded-lg` (8px)

### Transitions
- **Default**: `transition-all duration-300`
- **Hover Effects**: `hover:scale-105`
- **Button Hover**: `hover:shadow-lg transform hover:-translate-y-0.5`

## Component Styles

### Buttons
- **Primary**: `bg-steel-600 hover:bg-steel-700 text-white font-semibold`
- **Secondary**: `bg-transparent border-2 border-steel-600 text-steel-600 hover:bg-steel-600 hover:text-white`
- **Accent**: `bg-copper-600 hover:bg-copper-700 text-white`

### Cards
- **Product Cards**: White background, subtle shadow, hover effect
- **Feature Cards**: Icon top, title, description
- **Testimonial Cards**: Quote style with author

### Navigation
- **Desktop**: Horizontal, right-aligned
- **Mobile**: Hamburger menu, full-screen overlay
- **Active State**: Copper underline or background

## Imagery Guidelines

### Hero Images
- High-quality industrial machinery
- Professional, well-lit photos
- Aspect ratio: 16:9 or 21:9
- Overlay: Gradient for text readability

### Product Images
- Clean, white background product shots
- Multiple angles when possible
- Consistent lighting and framing
- Aspect ratio: 4:3 or 1:1

### Icons
- **Style**: Line icons (Lucide React)
- **Size**: 24px default, 48px for features
- **Color**: Match text color or accent color

## DO's and DON'Ts

### DO:
- Use ample white space for elegance
- Maintain consistent spacing throughout
- Ensure text is readable on all backgrounds
- Use high-quality, professional images
- Keep navigation intuitive and simple
- Test on mobile devices regularly

### DON'T:
- Use more than 3 colors in a single view
- Overcrowd the layout with too much information
- Use fonts smaller than 14px for body text
- Forget alt text for accessibility
- Use pure black (#000000) - use dark gray instead
- Ignore loading states and error messages

## Responsive Breakpoints

- **Mobile**: `< 640px` (sm)
- **Tablet**: `640px - 1024px` (md-lg)
- **Desktop**: `> 1024px` (xl)
- **Wide**: `> 1280px` (2xl)

## Animation Guidelines

- **Subtle**: Use `transition-all duration-300` for smooth interactions
- **Purposeful**: Animations should enhance UX, not distract
- **Performance**: Use `transform` and `opacity` for smooth animations
- **Accessibility**: Respect `prefers-reduced-motion`

## Print Styles

- Remove backgrounds for ink savings
- Ensure text has high contrast
- Hide navigation and interactive elements
- Show URLs for links
