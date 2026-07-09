# MicroCosmos Design Guidelines

## Color Palette

### Primary Colors
- **Deep Space Navy**: `#0a0e27` - Background, headers, footer
- **Bioluminescent Teal**: `#00d4aa` - Primary accent, CTAs, highlights
- **Microscopic Purple**: `#7c3aed` - Secondary accent, hover states
- **Cell Membrane Blue**: `#3b82f6` - Links, interactive elements

### Neutral Colors
- **Dark Matter**: `#111827` - Text on light backgrounds
- **Stardust Gray**: `#6b7280` - Secondary text, muted elements
- **Nebula White**: `#f9fafb` - Light backgrounds, cards
- **Pure White**: `#ffffff` - Text on dark backgrounds

### Accent Colors (for organism categories)
- **Bacteria Green**: `#10b981`
- **Virus Red**: `#ef4444`
- **Fungi Orange**: `#f59e0b`
- **Protozoa Cyan**: `#06b6d4`

## Typography

### Primary Font
- **Inter** - Clean, modern, highly readable
- Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)

### Secondary Font
- **Space Grotesk** - Futuristic, techy feel for headings
- Weights: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

### Font Sizes
- Hero Title: `text-5xl md:text-7xl lg:text-8xl` (responsive)
- Section Titles: `text-3xl md:text-4xl lg:text-5xl`
- Subsection Titles: `text-2xl md:text-3xl`
- Body Text: `text-lg md:text-xl`
- Small Text: `text-sm md:text-base`

## Spacing

### Section Padding
- Large sections: `py-20 md:py-28 lg:py-36`
- Medium sections: `py-16 md:py-24`
- Small sections: `py-12 md:py-16`

### Content Gaps
- Grid gaps: `gap-6 md:gap-8 lg:gap-10`
- Card padding: `p-6 md:p-8`
- Container padding: `px-4 md:px-8 lg:px-12`

## Visual Style

### Backgrounds
- Use subtle gradients: `bg-gradient-to-b from-[#0a0e27] to-[#111827]`
- Add radial gradients for depth: `bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]`
- Use noise texture overlay for organic feel

### Cards
- Glassmorphism effect: `bg-white/5 backdrop-blur-md border border-white/10`
- Hover effects: `hover:bg-white/10 hover:border-[#00d4aa]/30`
- Smooth transitions: `transition-all duration-300`

### Images
- Use rounded corners: `rounded-xl` or `rounded-2xl`
- Add subtle shadows: `shadow-lg shadow-black/20`
- Hover scale: `hover:scale-105 transition-transform duration-500`

### Animations
- Fade in on scroll: Use intersection observer
- Smooth hover transitions: `transition-all duration-300`
- Subtle float animations for decorative elements

## Layout

### Grid System
- Mobile: Single column (`grid-cols-1`)
- Tablet: Two columns (`md:grid-cols-2`)
- Desktop: Three or four columns (`lg:grid-cols-3` or `xl:grid-cols-4`)

### Container Widths
- Max content width: `max-w-7xl mx-auto`
- Narrow content: `max-w-4xl mx-auto`
- Full width sections: `w-full`

## Component Styles

### Buttons
- Primary: `bg-[#00d4aa] hover:bg-[#00b894] text-[#0a0e27] font-semibold px-8 py-4 rounded-full`
- Secondary: `border-2 border-[#00d4aa] text-[#00d4aa] hover:bg-[#00d4aa]/10 px-8 py-4 rounded-full`
- Ghost: `text-[#00d4aa] hover:bg-[#00d4aa]/5 px-4 py-2`

### Navigation
- Fixed top: `fixed top-0 left-0 right-0 z-50`
- Glassmorphism: `bg-[#0a0e27]/80 backdrop-blur-md border-b border-white/10`
- Logo: Left aligned
- Links: Right aligned with hover effects

### Section Dividers
- Use gradient dividers: `h-px bg-gradient-to-r from-transparent via-[#00d4aa] to-transparent`
- Or organic shapes using SVG

## Image Guidelines

### Microorganism Images
- Use high magnification shots
- Prefer dark field or fluorescent microscopy
- Show diverse organisms: bacteria, viruses, fungi, protozoa
- Use educational captions

### Hero Images
- Dramatic, high-contrast microscopy images
- Preferably showing bioluminescence or fluorescent staining
- Wide aspect ratio (16:9 or wider)

### Gallery Images
- Square or 4:3 aspect ratio
- Consistent style across the gallery
- Show different types of microorganisms

## Do's and Don'ts

### Do's
- Use consistent spacing throughout
- Maintain high contrast for readability
- Use animations sparingly and purposefully
- Keep mobile responsiveness in mind
- Use semantic HTML for accessibility

### Don'ts
- Don't use too many different colors
- Don't overcrowd sections with content
- Don't use low contrast text on backgrounds
- Don't forget to add proper alt text for images
- Don't use animations that might cause motion sickness

## Example Tailwind Classes

### Hero Section
```html
<section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0e27] to-[#111827] overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,170,0.1)_0%,_transparent_70%)]"></div>
  {/* Content */}
</section>
```

### Card Component
```html
<div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#00d4aa]/30 transition-all duration-300">
  {/* Card content */}
</div>
```

### Section Title
```html
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
  <span className="text-[#00d4aa]">Microscopic</span> Wonders
</h2>
```
