# MicroCosmos Design System

## Brand Identity
MicroCosmos is a science-focused website exploring the microscopic world. The visual style is dark, immersive, and scientific — evoking the feeling of peering through a microscope into an unseen universe.

## Color Palette
- **Background (primary):** `#050d1a` — deep navy black
- **Background (secondary):** `#0a1628` — dark navy
- **Background (card):** `#0f1f38` — slightly lighter navy
- **Accent (teal/cyan):** `#00d4aa` — vibrant teal, used for highlights and CTAs
- **Accent (purple):** `#7c3aed` — deep purple, used for secondary accents
- **Accent (blue):** `#0ea5e9` — sky blue, used for links and info
- **Text (primary):** `#f0f9ff` — near-white
- **Text (secondary):** `#94a3b8` — muted slate
- **Text (muted):** `#475569` — dimmer slate
- **Border:** `#1e3a5f` — subtle dark blue border

## Typography
- **Font family:** `'Inter', sans-serif` (loaded via Google Fonts)
- **Display headings:** `font-bold`, large sizes (`text-5xl`, `text-6xl`, `text-7xl`)
- **Section headings:** `text-3xl` or `text-4xl`, `font-bold`
- **Body text:** `text-base` or `text-lg`, `font-normal`
- **Labels/captions:** `text-sm`, `font-medium`, uppercase tracking

## Spacing
- Section padding: `py-20` or `py-24`
- Container max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6` or `p-8`
- Gap between grid items: `gap-6` or `gap-8`

## Borders & Shadows
- Cards: `border border-[#1e3a5f] rounded-2xl`
- Glow effects: `shadow-[0_0_30px_rgba(0,212,170,0.15)]`
- Image overlays: gradient from transparent to `#050d1a`

## Components

### Navbar
- Dark background `bg-[#050d1a]/90 backdrop-blur`
- Logo in teal accent
- Nav links in `text-slate-300 hover:text-[#00d4aa]`
- Active link: `text-[#00d4aa]`

### Buttons
- Primary: `bg-[#00d4aa] text-[#050d1a] font-semibold rounded-full px-6 py-3 hover:bg-[#00bfa0]`
- Secondary: `border border-[#00d4aa] text-[#00d4aa] rounded-full px-6 py-3 hover:bg-[#00d4aa]/10`
- Ghost: `text-slate-300 hover:text-white`

### Cards
- Background: `bg-[#0f1f38]`
- Border: `border border-[#1e3a5f]`
- Rounded: `rounded-2xl`
- Hover: `hover:border-[#00d4aa]/50 transition-all duration-300`

### Images
- Always use `object-cover` with defined aspect ratios
- Overlay gradient on hero images
- Rounded corners: `rounded-xl` or `rounded-2xl`

## Do's
- Use dark backgrounds throughout
- Use teal (#00d4aa) as the primary accent color
- Include lots of microscopic imagery
- Use subtle glow effects on accent elements
- Use grid layouts for image-heavy sections

## Don'ts
- Don't use white or light backgrounds
- Don't use harsh red/orange colors
- Don't use small font sizes for body text
- Don't use flat, colorless designs
