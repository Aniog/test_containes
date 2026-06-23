# Visual Style Guide: SSourcing China

## Brand Identity
SSourcing China is a professional, trustworthy, and international B2B sourcing agent. The tone is clean, practical, and devoid of exaggerated claims.

## Colors
- **Primary Brand**: `#c2182b` (Deep Red) - Used for primary actions, accents, and brand recognition.
  - Hover state: `#a01423`
  - Light background version: `bg-[#c2182b]/10` (for icon backgrounds)
- **Backgrounds**:
  - `bg-white` (Main surfaces)
  - `bg-slate-50` (Secondary sections, alternating bands)
  - `bg-slate-100` (Subtle highlights, cards)
  - `bg-slate-900` (Dark sections like hero, footer, and specialized headers)
- **Text**:
  - `text-slate-900` (Primary headings)
  - `text-slate-800` (Main body text)
  - `text-slate-600` (Secondary body text, descriptions)
  - `text-slate-400` / `text-slate-300` (Dark section muted text)
- **Status/Accents**:
  - `text-green-600` / `text-green-500` (Success, verification marks)
  - `text-red-500` (Required form fields, errors)

## Typography
- **Font Family**: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif (Standard Tailwind sans)
- **Headings**: Bold, well-spaced. Usually `text-slate-900`.
- **Body**: Clean, readable, line-height 1.5.

## UI Elements
- **Buttons**:
  - Primary: `bg-[#c2182b] hover:bg-[#a01423] text-white`
  - Outline: `border-transparent hover:bg-slate-100` (on dark/special backgrounds) OR `border-slate-300 text-slate-600` for standard outlines.
- **Cards & Containers**:
  - Slightly rounded corners: `rounded-xl`, `rounded-2xl`
  - Subtle borders: `border border-slate-100` or `border-slate-200`
  - Shadows: `shadow-sm`, `shadow-lg`, or structural separation.

## Spacing & Layout
- Generous padding to let the content breathe. Primary sections use `py-20` (80px).
- Internal row/grid gaps typically `gap-8` or `gap-12`.
- Center alignment for section headers, left alignment for content blocks.

## Imagery
- Uses the `data-strk-img` system for stock images.
- Images represent real factory settings, quality control inspections, port logistics, and product examples.
- Standard image ratios: `4x3`, `16x9`, `3x2` depending on layout context.