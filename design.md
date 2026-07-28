# Design System: SSourcing China

## Visual Style
*   **Tone:** Professional, clear, trustworthy, B2B-focused, international, practical.
*   **Theme:** Clean, modern, avoiding exaggeration, industrial but sophisticated.

## Colors
*   **Primary:** `#1E3A8A` (Deep Blue - Trust, professionalism, corporate) - Tailwind: `bg-blue-900`, `text-blue-900`
*   **Secondary:** `#0284C7` (Sky Blue - Clarity, international, action) - Tailwind: `bg-sky-600`, `text-sky-600`
*   **Accent:** `#F59E0B` (Amber - Action, highlight, caution/quality control) - Tailwind: `bg-amber-500`, `text-amber-500`
*   **Background (Light):** `#F8FAFC` (Slate 50 - clean, readable) - Tailwind: `bg-slate-50`
*   **Background (Card/Surface):** `#FFFFFF` (White) - Tailwind: `bg-white`
*   **Text (Primary):** `#1E293B` (Slate 800 - Highly readable) - Tailwind: `text-slate-800`
*   **Text (Secondary/Muted):** `#64748B` (Slate 500) - Tailwind: `text-slate-500`

## Typography
*   **Font Family:** `Inter`, sans-serif (Clean, readable, modern corporate).
*   **Headings:** Bold, clear, authoritative. `lg:text-5xl font-bold tracking-tight text-blue-900`
*   **Subheadings:** Clear, supportive. `text-xl font-medium text-slate-600`
*   **Body Copy:** Readable, well-spaced. `text-base leading-relaxed text-slate-700`

## Spacing & Layout
*   **Container Width:** Max width 1280px (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`).
*   **Section Padding:** Generous padding (`py-16 md:py-24`).
*   **Gap/Spacing:** Use `gap-6` or `gap-8` for grids.

## Components

### Buttons
*   **Primary Button:** `bg-sky-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-sky-700 transition-colors shadow-sm`
*   **Secondary Button:** `bg-white text-blue-900 border border-blue-900 font-semibold py-3 px-6 rounded-md hover:bg-slate-50 transition-colors`

### Cards
*   **Base:** `bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden`
*   **Hover effect (optional):** `hover:shadow-md transition-shadow`
*   **Padding:** `p-6` or `p-8`.

### Navigation
*   **Header:** `bg-white border-b border-slate-200 sticky top-0 z-50`

### Images & Badges
*   Images should look realistic (factories, QC inspections, shipping containers).
*   Use `rounded-md` or `rounded-lg` for images to soften industrial subjects slightly.
*   Badges: `bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded`

## Do's and Don'ts
*   **Do:** Use high contrast for readability (dark text on light backgrounds).
*   **Do:** Use generous white space between sections.
*   **Do:** Use structural layouts (grids) for services and processes.
*   **Don't:** Use overly flashy animations.
*   **Don't:** Use thin, hard-to-read fonts.
*   **Don't:** Center long blocks of text (left-align for readability).
