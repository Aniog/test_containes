# MicroCosmos Design System

## Theme
A dark, immersive, science-inspired design that evokes the mystery and beauty of the microscopic world. Deep dark backgrounds with vibrant accent colors reminiscent of fluorescence microscopy.

## Colors
- **Background**: Deep navy/black (`cosmos-dark`: #0a0e1a, `cosmos-deeper`: #060912)
- **Surface**: Dark blue-gray (`cosmos-surface`: #111827, `cosmos-card`: #1a2235)
- **Primary accent**: Vivid cyan/teal (`cosmos-cyan`: #06d6a0, `cosmos-cyan-light`: #34ebc6)
- **Secondary accent**: Electric purple (`cosmos-purple`: #7c3aed, `cosmos-purple-light`: #a78bfa)
- **Tertiary accent**: Warm magenta (`cosmos-magenta`: #ec4899, `cosmos-magenta-light`: #f472b6)
- **Text primary**: White (`cosmos-text`: #f8fafc)
- **Text secondary**: Light gray (`cosmos-muted`: #94a3b8)
- **Border**: Subtle blue-gray (`cosmos-border`: #1e293b)

## Typography
- **Font family**: Inter (Google Fonts), system-ui fallback
- **Headings**: font-weight 700-800, tracking tight
- **Body**: font-weight 400, leading relaxed
- **Hero title**: text-5xl md:text-7xl font-extrabold
- **Section title**: text-3xl md:text-4xl font-bold
- **Card title**: text-xl font-semibold
- **Body text**: text-base md:text-lg

## Spacing
- Section padding: py-20 md:py-28
- Container max-width: max-w-7xl mx-auto px-4 md:px-8
- Card padding: p-6
- Grid gap: gap-6 md:gap-8

## Borders & Shadows
- Cards: rounded-2xl border border-cosmos-border
- Images: rounded-xl overflow-hidden
- Subtle glow effects using box-shadow with accent colors

## Visual Effects
- Gradient overlays on hero/backgrounds
- Subtle backdrop-blur on navigation
- Hover scale transitions on cards (hover:scale-[1.02])
- Smooth transitions: transition-all duration-300

## Do's
- Use dark backgrounds consistently
- Apply gradient text on key headings (bg-gradient-to-r from-cosmos-cyan to-cosmos-purple bg-clip-text text-transparent)
- Use generous whitespace between sections
- Keep images large and prominent
- Use rounded corners on all containers

## Don'ts
- Don't use pure white backgrounds
- Don't use small, cramped image sizes
- Don't use flat/boring layouts — vary grid patterns
- Don't use low-contrast text combinations
