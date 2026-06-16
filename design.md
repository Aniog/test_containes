# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Folded.
- **Tone:** Elegant, professional, trustworthy, industrial yet refined

## Color Palette
- **Primary (Deep Steel Blue):** `#1B2A4A` — `bg-[#1B2A4A]` — used for navbar, headings, dark sections
- **Accent (Metallic Gold):** `#C9A84C` — `text-[#C9A84C]` — used for highlights, CTAs, borders
- **Secondary (Slate Gray):** `#4A5568` — `text-slate-600` — body text, secondary labels
- **Light Background:** `#F7F8FA` — `bg-[#F7F8FA]` — page background, card backgrounds
- **White:** `#FFFFFF` — `bg-white` — cards, modals
- **Dark Section:** `#0F1C33` — `bg-[#0F1C33]` — footer, dark CTA sections
- **Border/Divider:** `#E2E8F0` — `border-slate-200`

## Typography
- **Font Family:** Inter (Google Fonts) — already loaded in index.html
- **Display / Hero Heading:** `text-5xl md:text-6xl font-bold tracking-tight text-[#1B2A4A]`
- **Section Heading:** `text-3xl md:text-4xl font-bold text-[#1B2A4A]`
- **Card Heading:** `text-xl font-semibold text-[#1B2A4A]`
- **Body Text:** `text-base text-slate-600 leading-relaxed`
- **Small / Caption:** `text-sm text-slate-500`
- **Accent Text:** `text-[#C9A84C] font-semibold`

## Spacing & Layout
- **Max Content Width:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section Padding:** `py-20 md:py-28`
- **Card Padding:** `p-6 md:p-8`
- **Gap between cards:** `gap-6 md:gap-8`

## Components

### Buttons
- **Primary CTA:** `bg-[#C9A84C] hover:bg-[#b8963e] text-white font-semibold px-8 py-3 rounded-sm transition-all duration-200 tracking-wide`
- **Secondary Outline:** `border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white font-semibold px-8 py-3 rounded-sm transition-all duration-200`
- **Ghost/Nav:** `text-white hover:text-[#C9A84C] transition-colors duration-200`

### Cards
- `bg-white rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-100`
- Subtle top border accent: `border-t-2 border-t-[#C9A84C]`

### Navbar
- Background: `bg-[#1B2A4A]` with subtle bottom border `border-b border-[#C9A84C]/20`
- Logo: white text with gold accent
- Links: white, hover gold

### Dividers / Accents
- Gold underline on section titles: `w-16 h-1 bg-[#C9A84C] mt-3 mb-6`
- Subtle section separators using `border-slate-200`

## Do's
- Use generous whitespace to convey premium quality
- Use the gold accent sparingly for maximum impact
- Keep card layouts clean with clear hierarchy
- Use uppercase tracking for labels and badges: `uppercase tracking-widest text-xs`
- Use `rounded-sm` (not `rounded-full`) for an industrial, precise feel

## Don'ts
- Don't use bright/neon colors
- Don't use rounded-full on buttons or cards
- Don't crowd sections — maintain breathing room
- Don't use more than 2 font weights in a single component
- Don't use dark text on dark backgrounds without sufficient contrast
