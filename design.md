# MicroCosmos Design System

## Concept
MicroCosmos is a visually immersive website exploring the microscopic world — bacteria, cells, fungi, plankton, and other tiny life forms. The design evokes a sense of wonder, depth, and scientific beauty.

## Color Palette
- **Background (deep dark):** `#050d1a` — near-black deep navy, like looking through a microscope in a dark lab
- **Surface:** `#0a1628` — dark navy card/section backgrounds
- **Surface elevated:** `#0f2040` — slightly lighter for cards and panels
- **Primary accent (teal/cyan):** `#00d4c8` — bioluminescent teal, vibrant and scientific
- **Secondary accent (violet):** `#7c3aed` — deep violet for contrast highlights
- **Tertiary accent (amber):** `#f59e0b` — warm amber for call-to-action elements
- **Text primary:** `#e2f0ff` — soft white-blue for main text
- **Text secondary:** `#7ba7cc` — muted blue-gray for secondary text
- **Border:** `#1a3a5c` — subtle dark blue border

## Typography
- **Font family:** `Space Grotesk` (headings) + `Inter` (body) — loaded via Google Fonts
- **Heading sizes:**
  - H1: `text-5xl md:text-7xl font-bold tracking-tight`
  - H2: `text-3xl md:text-5xl font-bold`
  - H3: `text-xl md:text-2xl font-semibold`
- **Body:** `text-base leading-relaxed`
- **Small/caption:** `text-sm text-[#7ba7cc]`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section padding: `py-20 md:py-28`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`

## Component Styles

### Buttons
- **Primary:** `bg-[#00d4c8] text-[#050d1a] font-semibold px-6 py-3 rounded-full hover:bg-[#00b8ad] transition-all`
- **Secondary (outline):** `border border-[#00d4c8] text-[#00d4c8] px-6 py-3 rounded-full hover:bg-[#00d4c8]/10 transition-all`
- **Ghost:** `text-[#7ba7cc] hover:text-[#e2f0ff] transition-colors`

### Cards
- Background: `bg-[#0a1628]` or `bg-[#0f2040]`
- Border: `border border-[#1a3a5c]`
- Rounded: `rounded-2xl`
- Hover: `hover:border-[#00d4c8]/50 hover:shadow-lg hover:shadow-[#00d4c8]/10 transition-all`

### Navigation
- Background: `bg-[#050d1a]/90 backdrop-blur-md border-b border-[#1a3a5c]`
- Logo: `text-[#00d4c8] font-bold text-xl`
- Nav links: `text-[#7ba7cc] hover:text-[#e2f0ff] transition-colors`
- Active link: `text-[#00d4c8]`

### Hero Section
- Full viewport height: `min-h-screen`
- Background: dark with subtle radial gradient overlay
- Headline: large, bold, with teal gradient text on key words

### Badges / Tags
- `bg-[#00d4c8]/10 text-[#00d4c8] text-xs font-medium px-3 py-1 rounded-full border border-[#00d4c8]/20`

## Visual Style
- Dark, immersive, scientific aesthetic
- Subtle glowing effects using `shadow-[#00d4c8]/20`
- Gradient text: `bg-gradient-to-r from-[#00d4c8] to-[#7c3aed] bg-clip-text text-transparent`
- Micro-organism inspired circular/organic shapes
- Use stock images of microscopic life (bacteria, cells, plankton, fungi)

## Do's
- Use dark backgrounds throughout — this is a dark-mode-only site
- Use teal (#00d4c8) as the primary interactive color
- Keep text contrast high — always use `#e2f0ff` or `#7ba7cc` on dark backgrounds
- Use rounded corners generously (`rounded-2xl`, `rounded-full`)
- Add subtle hover transitions on all interactive elements

## Don'ts
- Never use white backgrounds
- Never use black text on dark backgrounds
- Don't use harsh pure white (#ffffff) for body text — use `#e2f0ff`
- Don't use more than 3 accent colors per section
- Avoid flat, unstyled layouts — always add depth with borders and subtle shadows
