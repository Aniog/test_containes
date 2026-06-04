# MicroCosmos Design System — Flat Edition

## Brand Identity
MicroCosmos uses a bold flat design language: solid colors, hard edges, no shadows, no gradients, no blur. The aesthetic is clean, geometric, and high-contrast — inspired by Swiss graphic design and modern editorial layouts.

## Color Palette
- **Background:** `#F5F4F0` — warm off-white (bg-[#F5F4F0])
- **White surface:** `#FFFFFF` — pure white cards (bg-white)
- **Black:** `#0A0A0A` — near-black for text and borders (text-[#0A0A0A])
- **Primary blue:** `#1A56FF` — bold flat blue (bg-[#1A56FF], text-[#1A56FF])
- **Green:** `#00C875` — flat green accent (bg-[#00C875], text-[#00C875])
- **Red:** `#FF2D55` — flat red/pink accent (bg-[#FF2D55], text-[#FF2D55])
- **Yellow:** `#FFD600` — flat yellow accent (bg-[#FFD600])
- **Purple:** `#7B2FFF` — flat purple accent (bg-[#7B2FFF], text-[#7B2FFF])
- **Text primary:** `#0A0A0A` (text-[#0A0A0A])
- **Text secondary:** `#555555` (text-[#555555])
- **Border:** `#0A0A0A` — solid black borders (border-[#0A0A0A])
- **Border light:** `#E0E0E0` — light gray dividers (border-[#E0E0E0])

## Typography
- **Font family:** Inter (Google Fonts)
- **Display headings (h1):** `text-5xl md:text-7xl font-black tracking-tight text-[#0A0A0A]`
- **Section headings (h2):** `text-3xl md:text-4xl font-black text-[#0A0A0A]`
- **Card headings (h3):** `text-lg font-bold text-[#0A0A0A]`
- **Body text:** `text-base font-normal leading-relaxed text-[#555555]`
- **Label / tag:** `text-xs font-bold uppercase tracking-widest`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-20 md:py-24`
- Card padding: `p-6`
- Grid gaps: `gap-4 md:gap-6`

## Components

### Navigation
- Fixed top bar, white background, solid bottom border: `fixed top-0 w-full bg-white border-b-2 border-[#0A0A0A] z-50`
- Logo: bold black text
- Nav links: `text-[#555555] hover:text-[#0A0A0A] font-medium transition-colors`
- Active link: `text-[#0A0A0A] font-bold`
- Mobile: hamburger menu

### Buttons
- **Primary:** `bg-[#1A56FF] text-white font-bold px-6 py-3 border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] transition-colors`
- **Secondary:** `bg-white text-[#0A0A0A] font-bold px-6 py-3 border-2 border-[#0A0A0A] hover:bg-[#F5F4F0] transition-colors`
- **Accent:** `bg-[#FFD600] text-[#0A0A0A] font-bold px-6 py-3 border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors`
- No rounded corners on buttons — use `rounded-none` or `rounded-sm`

### Cards
- Background: `bg-white border-2 border-[#0A0A0A]`
- Hover: `hover:bg-[#F5F4F0] transition-colors`
- No shadows, no rounded corners (use `rounded-none`)
- Flat color top accent bar for category color

### Hero Section
- Full-viewport height with solid color background block
- Bold oversized typography
- No gradients, no glow — use solid color shapes

### Badges / Tags
- `bg-[#1A56FF] text-white text-xs font-bold px-3 py-1` — no border-radius
- Category-specific solid color fills

### Dividers
- `border-t-2 border-[#0A0A0A]` — bold black dividers

## Do's
- Use solid, flat colors only — no gradients, no shadows
- Use bold black borders (2px) on all cards and interactive elements
- Keep backgrounds light (white or off-white)
- Use uppercase bold labels for categories
- Use geometric, rectangular shapes

## Don'ts
- No box-shadow of any kind
- No backdrop-blur or filter effects
- No gradient backgrounds
- No rounded-full or rounded-2xl — keep corners sharp or very slightly rounded
- No glow effects or text-shadow
