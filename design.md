# SSourcing China - Design System

## Vibe & Goal
**Goal:** Generate B2B sourcing inquiries by establishing a highly trustworthy, clear, and professional brand image.
**Vibe:** Professional, clean, and reliable. An international standard B2B style that emphasizes realistic processes, factory floor scenes, quality control, and successful shipments.

## Colors
- **Primary Brand Color (Trust & Stability):** Deep Navy (`bg-blue-900`, `text-blue-900`) and Vibrant Blue (`bg-blue-600`, `text-blue-600`) as strong action colors.
- **Secondary Accent (Energy & Alertness):** Subtle Orange/Amber (`bg-orange-500`, `text-orange-600`) to draw attention to CTAs.
- **Backgrounds:** Clean White (`bg-white`), Off-White/Light Gray (`bg-slate-50`) for section contrasts.
- **Text:** Dark Gray (`text-slate-800`, `text-slate-900`) for primary text, Medium Gray (`text-slate-500`, `text-slate-600`) for secondary text.

## Typography
- **Font Family:** Inter (or similar Sans-Serif system font) for high legibility.
- **Headings:** Bold and clean. (`font-bold`, `tracking-tight`)
   - H1: `text-4xl md:text-5xl lg:text-6xl text-slate-900 font-extrabold tracking-tight`
   - H2: `text-3xl md:text-4xl text-slate-900 font-bold tracking-tight mb-4`
   - H3: `text-xl md:text-2xl text-slate-800 font-semibold mb-3`
- **Body Text:** Easy to read across devices.
   - P: `text-base text-slate-600 leading-relaxed max-w-3xl`
   - Large P: `text-lg md:text-xl text-slate-600 font-normal leading-relaxed`

## UI Elements
- **Buttons (CTAs):**
   - Primary: `bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200 shadow-md`
   - Secondary: `bg-white hover:bg-slate-50 text-blue-900 font-semibold py-3 px-8 border border-slate-200 rounded-md transition-colors duration-200`
- **Cards/Containers:**
   - Standard Service/Process Card: `bg-white border border-slate-100 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-start`
- **Badges/Tags:**
   - `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800`

## Spacing & Layout
- **Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section Padding:** `py-16 md:py-24`
- **Grid Layouts:** Standard responsive grids (e.g., `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12`)

## Imagery Guidelines
- Use realistic, well-lit stock photography showing actual sourcing activities: inspectors wearing vests or holding clipboards, modern shipping containers at ports, neat factory lines, and business handshakes.
- Avoid gimmicky illustrations; prefer high-quality photo representations.
- Utilize the `data-strk-img` system to dynamically load matching images based on text elements.

