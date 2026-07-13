# MicroCosmos Design System

## Theme
A dark, immersive, science-inspired design that evokes the mystery of the microscopic world. Deep dark backgrounds with vibrant accent colors reminiscent of fluorescence microscopy.

## Colors
- **Background (primary):** `cosmos-dark` → `#0a0e1a` (deep navy-black)
- **Background (secondary):** `cosmos-deeper` → `#060a14` (near black)
- **Background (card):** `cosmos-card` → `#111827` (dark gray-blue)
- **Accent (primary):** `cosmos-cyan` → `#06d6a0` (fluorescent green-cyan)
- **Accent (secondary):** `cosmos-purple` → `#7c3aed` (vivid purple)
- **Accent (tertiary):** `cosmos-pink` → `#ec4899` (hot pink)
- **Text (primary):** `cosmos-text` → `#f1f5f9` (near white)
- **Text (muted):** `cosmos-muted` → `#94a3b8` (slate gray)
- **Border:** `cosmos-border` → `#1e293b` (dark slate)

## Typography
- **Font family:** "Space Grotesk" for headings, "Inter" for body
- **Headings:** font-bold, tracking-tight
- **Body:** font-normal, leading-relaxed
- **Hero title:** text-5xl md:text-7xl font-bold
- **Section title:** text-3xl md:text-5xl font-bold
- **Card title:** text-xl font-semibold
- **Body text:** text-base md:text-lg

## Spacing
- **Section padding:** py-20 md:py-32 px-4 md:px-8
- **Card padding:** p-6
- **Grid gap:** gap-6 md:gap-8
- **Container max-width:** max-w-7xl mx-auto

## Borders & Shadows
- **Card border:** border border-cosmos-border rounded-2xl
- **Image border-radius:** rounded-xl or rounded-2xl
- **Hover glow:** shadow-lg shadow-cosmos-cyan/10

## Visual Style
- Dark immersive backgrounds
- Subtle gradient overlays on hero/backgrounds
- Rounded corners on all cards and images
- Hover transitions with scale and glow effects
- Grid-based image galleries with varied sizes

## Do's
- Use dark backgrounds consistently
- Apply vibrant accent colors sparingly for emphasis
- Use generous whitespace between sections
- Add subtle hover animations on interactive elements
- Use rounded-2xl for cards and images

## Don'ts
- Don't use light backgrounds
- Don't use flat/boring layouts — vary grid sizes
- Don't use small text on dark backgrounds without sufficient contrast
- Don't hardcode hex values in JSX — use Tailwind config names
