# Design System for ARTITECT MACHINERY

## Visual Style
- **Style:** Elegant but user-friendly
- **Typography:**
  - Headings: Bold, clean, sans-serif (e.g., Inter, Montserrat)
  - Body Text: Clean, legible sans-serif for readability (e.g., Inter)
- **Vibe:** Professional, industrial yet refined, trustworthy, modern.

## Color Palette
- **Primary Color:** Deep Steel Blue (`#1E3A8A`) - Represents stability, machinery, and elegance. Tailwind class: `bg-blue-900`, `text-blue-900`.
- **Secondary Color:** Slate Gray (`#64748B`) - Represents the sheet metal aspect. Tailwind class: `text-slate-500`, `bg-slate-500`.
- **Accent Color:** Warm Amber (`#F59E0B`) - Adds an elegant, eye-catching touch for buttons and call-to-actions. Tailwind class: `bg-amber-500`, `text-amber-500`.
- **Background Colors:** 
  - Primary Background: White (`#FFFFFF`) or very light gray (`#F8FAFC`). Tailwind: `bg-white`, `bg-slate-50`.
  - Secondary Background: Soft Blue/Gray (`#F1F5F9`). Tailwind: `bg-slate-100`.
- **Text Color:** 
  - Main Body: Dark Gray (`#1E293B`). Tailwind class: `text-slate-800`.
  - Muted Text: Gray (`#475569`). Tailwind class: `text-slate-600`.

## UI Elements
- **Buttons:** 
  - Primary: Solid background (Amber or Deep Blue) with white text, rounded corners (`rounded-md` or `rounded-lg`), subtle shadow on hover (`hover:shadow-md`). `px-6 py-2` or similar.
  - Secondary: Outline style with deep blue text and border.
- **Cards:** White background, subtle border or soft drop shadow (`shadow-md`), rounded corners (`rounded-xl`), neat padding.
- **Spacing (Padding/Margin):** Generous whitespace (e.g., `py-16`, `py-24`) to ensure an elegant, uncluttered feel.
- **Borders:** Thin, soft borders (`border-slate-200`) where necessary to separate elements cleanly.

## Responsive Design
- Use Tailwind breakpoints (`md:`, `lg:`) to adjust layouts from stacked (mobile) to multi-column grids or side-by-side flex layouts for larger screens.
