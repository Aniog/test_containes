# ARTITECT MACHINERY — Design System

## Brand
- **Name:** ARTITECT MACHINERY
- **Industry:** Industrial sheet metal folding / folder machinery
- **Tone:** Elegant, engineering-grade, confident, modern yet user-friendly
- **Tagline:** "Engineered Precision. Built to Fold."

## Visual Direction
- Style: editorial-industrial hybrid. Generous whitespace paired with bold product imagery.
- Feels like a premium machinery catalog: large display headlines, careful typography, restrained color.

## Color Palette (named, used as Tailwind config)
- **steel-900** `#0F1419` — primary deep / base (background sections, dark mode)
- **steel-800** `#1A212B` — secondary dark
- **steel-700** `#2B3441` — card dark / dividers on dark
- **steel-600** `#475569` — text muted on light
- **steel-500** `#64748B` — secondary text
- **steel-300** `#CBD5E1` — borders, hairlines
- **steel-200** `#E2E8F0` — light dividers
- **steel-100** `#F1F5F9` — light surface
- **steel-50**  `#F8FAFC` — page background
- **accent-500** `#C8A24A` — warm brass / gold (industrial accent)
- **accent-600** `#A8842F` — darker accent
- **accent-100** `#F5EBD3` — soft accent surface
- **signal-500** `#D14343` — error / call-out (used sparingly)
- **ink-900** `#0A0F18` — primary text on light surfaces
- **ink-700** `#1F2937` — body text on light surfaces
- **ink-500** `#475569` — secondary body text
- **paper** `#FFFFFF` — pure white surface

## Typography
- **Display / Headlines:** Manrope (700, 800) — modern geometric sans, engineering feel
- **Body / UI:** Inter (400, 500, 600)
- **Mono / Specs:** JetBrains Mono (400, 500) — for technical specifications
- All loaded from Google Fonts.

## Type Scale
- Hero display: `text-6xl md:text-7xl lg:text-8xl` tracking-tight font-extrabold
- Section title: `text-4xl md:text-5xl lg:text-6xl` font-bold
- Sub-section: `text-2xl md:text-3xl` font-semibold
- Body: `text-base md:text-lg` font-normal leading-relaxed
- Caption / label: `text-xs md:text-sm uppercase tracking-[0.18em] font-medium`

## Layout
- Container max width: `max-w-7xl` (1280px)
- Section vertical padding: `py-20 md:py-28 lg:py-32`
- Grid: 12-col with `gap-6 md:gap-8 lg:gap-12`
- Breakpoints follow Tailwind defaults (sm/md/lg/xl/2xl)

## Buttons
- **Primary:** bg-ink-900 text-paper hover:bg-ink-700 — px-7 py-3.5 text-sm tracking-wide
- **Accent:** bg-accent-500 text-ink-900 hover:bg-accent-600
- **Outline:** border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-paper
- All buttons: `rounded-none` (sharp industrial edges), uppercase tracking, transition 300ms
- Subtle hover lift: `hover:-translate-y-0.5`

## Cards
- Sharp edges (`rounded-none` or `rounded-sm`) to keep industrial feel
- 1px hairline borders in steel-200
- Subtle hover: shadow grows + 2px lift
- Optional corner-bracket decoration for hero / featured cards

## Icons
- Lucide React, 1.5px stroke (`strokeWidth={1.5}`)
- Icon size: 20–24px inline, 32–48px feature
- Accent color for icon highlights

## Visual Decorations
- Thin hairlines (1px) used as section dividers
- Numeric product codes in JetBrains Mono
- Brass accent bar above section titles (16px wide, 2px tall)
- Product cards: minimal frame, large image, monospace model number

## Imagery
- Use stock images via `data-strk-img` for product, factory, and team shots
- Product categories get distinct, large square images (3:2 or 4:3)
- Hero uses a 16:9 background image with subtle dark gradient overlay

## Do
- Maintain strict typographic hierarchy
- Pair bold display type with generous whitespace
- Use brass accent sparingly for emphasis only
- Keep product model numbers in monospace
- Show engineering-grade accuracy in copy and specs

## Don't
- Don't use bright playful colors — keep palette restrained
- Don't use soft rounded shapes (avoid `rounded-2xl` etc.) — industrial needs sharp edges
- Don't use emoji
- Don't use busy multi-color gradients
- Don't use 3D icons or skeuomorphism
- Don't use generic stock-photo vibe — keep imagery grounded in factory / metal
