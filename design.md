# MicroCosmos Design System

## Theme
A dark, immersive, science-inspired design that evokes the mystery and beauty of the microscopic world.

## Colors
- **Background**: Deep dark navy/black (`cosmos-dark`: #0a0e1a, `cosmos-deeper`: #060912)
- **Primary accent**: Bioluminescent cyan/teal (`cosmos-cyan`: #00e5ff, `cosmos-teal`: #00bfa5)
- **Secondary accent**: Vibrant magenta/purple (`cosmos-magenta`: #e040fb, `cosmos-purple`: #7c4dff)
- **Warm accent**: Amber/gold for highlights (`cosmos-gold`: #ffd740)
- **Text primary**: White with slight opacity (`cosmos-text`: #f0f4ff)
- **Text muted**: Soft blue-gray (`cosmos-muted`: #8892b0)
- **Surface/card**: Semi-transparent dark (`cosmos-surface`: rgba(15, 20, 40, 0.8))

## Typography
- **Font family**: Inter (Google Fonts), weights 300, 400, 500, 600, 700, 800
- **Headings**: Font weight 700-800, tracking tight
- **Body**: Font weight 400, leading relaxed
- **Hero title**: text-5xl md:text-7xl font-extrabold
- **Section title**: text-3xl md:text-5xl font-bold
- **Subtitle**: text-lg md:text-xl font-light text-cosmos-muted

## Spacing
- Section padding: py-20 md:py-32
- Container max-width: max-w-7xl mx-auto px-4 md:px-8
- Card padding: p-6 md:p-8
- Grid gap: gap-6 md:gap-8

## Borders & Shadows
- Cards: border border-white/10 rounded-2xl
- Glow effects: shadow-[0_0_30px_rgba(0,229,255,0.15)]
- Hover glow: hover:shadow-[0_0_40px_rgba(0,229,255,0.25)]

## Visual Style
- Dark immersive backgrounds
- Subtle gradient overlays on images
- Rounded corners (rounded-xl, rounded-2xl)
- Glassmorphism on cards (backdrop-blur-sm bg-white/5)
- Smooth transitions (transition-all duration-300)

## Do's
- Use generous whitespace between sections
- Apply subtle hover animations on cards
- Use gradient text for key headings (bg-gradient-to-r from-cosmos-cyan to-cosmos-purple bg-clip-text text-transparent)
- Overlay dark gradients on background images for text readability

## Don'ts
- No bright white backgrounds
- No harsh borders without opacity
- No small text without sufficient contrast
- No crowded layouts on mobile
