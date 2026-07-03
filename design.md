# MicroCosmos Design System

## Visual Identity
MicroCosmos is a visually immersive single-page website exploring the microscopic world. The design evokes the feeling of peering through a microscope — dark, deep, mysterious, with glowing accents that suggest bioluminescence and cellular structures.

## Color Palette
- **Background (deep dark):** `#050a14` — near-black deep navy, like the void of a microscope slide
- **Surface (dark card):** `#0d1a2e` — dark navy for cards and sections
- **Surface elevated:** `#112240` — slightly lighter navy for elevated elements
- **Primary accent (teal/cyan):** `#00d4c8` — glowing teal, like fluorescent microscopy
- **Secondary accent (violet):** `#7c3aed` — deep violet for contrast
- **Highlight (lime green):** `#39d353` — bright green like bacteria cultures
- **Text primary:** `#e8f4f8` — near-white with a cool blue tint
- **Text secondary:** `#8ab4c8` — muted blue-gray for secondary text
- **Border:** `rgba(0, 212, 200, 0.2)` — subtle teal border

In Tailwind config, add these as named colors:
```js
cosmos: {
  bg: '#050a14',
  surface: '#0d1a2e',
  elevated: '#112240',
  teal: '#00d4c8',
  violet: '#7c3aed',
  green: '#39d353',
  text: '#e8f4f8',
  muted: '#8ab4c8',
}
```

## Typography
- **Font:** Inter (Google Fonts)
- **Display headings (h1):** `text-5xl md:text-7xl font-black tracking-tight text-cosmos-text`
- **Section headings (h2):** `text-3xl md:text-4xl font-bold text-cosmos-text`
- **Card headings (h3):** `text-xl font-semibold text-cosmos-text`
- **Body text:** `text-base text-cosmos-muted leading-relaxed`
- **Labels/tags:** `text-xs font-semibold uppercase tracking-widest text-cosmos-teal`

## Spacing
- Section padding: `py-20 md:py-28 px-4 md:px-8`
- Card padding: `p-6`
- Grid gaps: `gap-6 md:gap-8`
- Max content width: `max-w-7xl mx-auto`

## Borders & Shadows
- Card border: `border border-cosmos-teal/20 rounded-2xl`
- Glow effect: `shadow-[0_0_30px_rgba(0,212,200,0.15)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(0,212,200,0.3)]`
- Image overlay: `bg-gradient-to-t from-cosmos-bg/80 to-transparent`

## Component Styles

### Cards
- Background: `bg-cosmos-surface`
- Border: `border border-cosmos-teal/20`
- Radius: `rounded-2xl`
- Overflow: `overflow-hidden`
- Hover: `hover:border-cosmos-teal/50 transition-all duration-300`

### Buttons
- Primary: `bg-cosmos-teal text-cosmos-bg font-semibold px-6 py-3 rounded-full hover:bg-cosmos-teal/90`
- Outline: `border border-cosmos-teal text-cosmos-teal px-6 py-3 rounded-full hover:bg-cosmos-teal/10`

### Section Dividers
- Use subtle gradient dividers: `bg-gradient-to-r from-transparent via-cosmos-teal/30 to-transparent h-px`

### Tags/Badges
- `bg-cosmos-teal/10 text-cosmos-teal border border-cosmos-teal/30 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider`

## Do's
- Use dark backgrounds throughout — never white or light backgrounds
- Use glowing teal as the primary accent color
- Images should be large and prominent
- Use grid layouts with varied sizes for visual interest
- Add subtle gradient overlays on images for text legibility
- Use `rounded-2xl` or `rounded-3xl` for all cards and images

## Don'ts
- Don't use white or light backgrounds
- Don't use small images — make them large and impactful
- Don't use more than 3 accent colors at once
- Don't use sharp corners — always round them
- Don't use low-contrast text on dark backgrounds
