# SSourcing China - Design Guidelines

## Visual Style
* **Theme:** Clean, Trustworthy, International, B2B Professional
* **Tone:** Professional, clear, practical, authoritative
* **Imagery:** Realistic factory, Quality Control (QC), and shipping visuals. Avoid overly abstract or cartoony illustrations. Use strategic `data-strk-img` queries to pull professional stock photos of manufacturing, shipping, and business interactions.

## Color Palette
* **Primary (Trust Blue):** `#0f172a` (slate-900) - For clear contrast, headings, primary buttons.
* **Secondary (Highlight Blue):** `#2563eb` (blue-600) - For accents, links, and secondary buttons.
* **Background (Base):** `#ffffff` (white) - Main background for a clean look.
* **Background (Muted):** `#f8fafc` (slate-50) - For alternating sections to create visual separation.
* **Text (Primary):** `#334155` (slate-700) - Main body text for readability.
* **Text (Secondary/Muted):** `#64748b` (slate-500) - Subtitles, fine print.
* **Accent (Success/Trust):** `#16a34a` (green-600) - For verification marks, success indicators.

## Typography
* **Font Family:** Inter (Sans-serif) - the default standard for clean, modern readability.
* **Headings:** Bold, high contrast (slate-900), clean spacing.
* **Body:** Base size `text-base` for general readability, `text-lg` for intros/lead text.

## Tailwind Configuration (do's and don'ts)
* **Do:** Use standard tailwind spacing classes (e.g., `py-16`, `px-4`, `gap-8`).
* **Do:** Use semantic colors and ensure high contrast.
* **Do:** Ensure responsive layouts using `md:`, `lg:` prefixes. Use Grid and Flexbox for structured, B2B-friendly layouts.
* **Don't:** Use extreme border radii (prefer standard `rounded`, `rounded-md`, or `rounded-lg` for a more serious tone).
* **Don't:** Use excessive shadows (stick to subtle `shadow-sm` or `shadow-md` for cards to keep it clean).
* **Don't:** Use low contrast text (`text-slate-300` on white).

## Component Styling (Examples)
* **Cards:** `bg-white rounded-lg border border-slate-200 shadow-sm p-6`
* **Primary Button:** `inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-slate-900 text-white hover:bg-slate-800 h-10 px-4 py-2`
* **Section Container:** `w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32`
