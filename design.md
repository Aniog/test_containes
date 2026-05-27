# MicroCosmos Design System

## Brand Identity
MicroCosmos is a science-forward website exploring the hidden world of microorganisms. The visual style is dark, immersive, and scientific — evoking deep-sea bioluminescence and microscope imagery.

## Color Palette
- **Background (deep dark):** `#050d1a` — `bg-[#050d1a]`
- **Surface (card/panel):** `#0d1f35` — `bg-[#0d1f35]`
- **Surface elevated:** `#112540` — `bg-[#112540]`
- **Primary accent (cyan/teal):** `#00d4ff` — `text-[#00d4ff]`, `border-[#00d4ff]`
- **Secondary accent (violet):** `#7c3aed` — `text-violet-600`
- **Glow accent:** `#00ffcc` — `text-[#00ffcc]`
- **Text primary:** `#e8f4f8` — `text-[#e8f4f8]`
- **Text secondary:** `#8ab4c8` — `text-[#8ab4c8]`
- **Text muted:** `#4a7a94` — `text-[#4a7a94]`
- **Border subtle:** `rgba(0,212,255,0.15)` — `border-[rgba(0,212,255,0.15)]`

## Typography
- **Font family:** Inter (loaded via Google Fonts)
- **Display / Hero headings:** `text-5xl md:text-7xl font-black tracking-tight`
- **Section headings (h2):** `text-3xl md:text-4xl font-bold`
- **Card headings (h3):** `text-xl font-semibold`
- **Body text:** `text-base font-normal leading-relaxed`
- **Caption / label:** `text-sm font-medium tracking-widest uppercase`

## Spacing
- Section vertical padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card padding: `p-6 md:p-8`
- Gap between grid items: `gap-6 md:gap-8`

## Borders & Radius
- Cards: `rounded-2xl border border-[rgba(0,212,255,0.15)]`
- Buttons: `rounded-full`
- Badges/tags: `rounded-full px-3 py-1`

## Shadows & Glow Effects
- Card hover glow: `hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]`
- Hero glow: `drop-shadow-[0_0_40px_rgba(0,212,255,0.4)]`
- Accent glow text: `drop-shadow-[0_0_12px_rgba(0,212,255,0.6)]`

## Buttons
- **Primary:** `bg-[#00d4ff] text-[#050d1a] font-bold rounded-full px-8 py-3 hover:bg-[#00ffcc] transition-colors`
- **Secondary/outline:** `border border-[#00d4ff] text-[#00d4ff] rounded-full px-8 py-3 hover:bg-[rgba(0,212,255,0.1)] transition-colors`
- **Ghost:** `text-[#8ab4c8] hover:text-[#00d4ff] transition-colors`

## Navigation
- Sticky top navbar with `bg-[#050d1a]/90 backdrop-blur-md`
- Logo: bold, cyan accent color
- Nav links: ghost style, active state with cyan underline

## Cards
- Background: `bg-[#0d1f35]`
- Border: `border border-[rgba(0,212,255,0.15)]`
- Hover: lift + glow `hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-300`
- Image area: `rounded-xl overflow-hidden`

## Backgrounds & Decorative Elements
- Page background: deep dark `#050d1a`
- Subtle radial gradients for section depth
- Dot grid or subtle noise texture for scientific feel
- Floating orb/blob decorations using `absolute` positioned divs with blur

## Do's
- Use cyan (#00d4ff) as the primary interactive color
- Keep text contrast high — always use `text-[#e8f4f8]` or `text-[#8ab4c8]` on dark backgrounds
- Use `tracking-widest uppercase text-sm` for section labels/eyebrows
- Add subtle glow effects to hero elements and CTAs
- Use grid layouts for organism cards (3-4 columns on desktop, 1-2 on mobile)

## Don'ts
- Never use white backgrounds — this is a dark-theme site
- Don't use low-contrast text (e.g., gray on dark gray)
- Don't use rounded-lg for primary cards — use rounded-2xl
- Don't use default blue links — override with cyan
- Don't stack everything in a single column on desktop
