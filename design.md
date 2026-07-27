# Visual Style Guide - SSourcing China

## Typography
- **Primary Font**: Inter (Sans-serif) - Used for body text, navigation, and most UI elements.
- **Display Font**: Playfair Display (Serif) - Used for primary headings (h1, h2) to convey authority and professionalism.
- **Font Sizes**:
  - H1: 3.5rem (56px) / 2.5rem (40px) on mobile
  - H2: 2.5rem (40px) / 2rem (32px) on mobile
  - Body: 1rem (16px)

## Colors
- **Primary**: #004B91 (Deep Navy Blue) - Trust, reliability, corporate.
- **Accent**: #E63946 (Professional Red) - Professional attention-grabbing color for CTAs.
- **Background**: #FFFFFF (White) / #F4F7FA (Light Grey/Blue) for sections.
- **Text**: #1A1A1A (Dark Charcoal) for headings, #4A4A4A for body text.

## UI Components
- **Buttons**: Rounded (4px to 8px), solid colors with subtle hover transitions.
- **Cards**: Minimalist with subtle shadows (`shadow-sm`) and clear borders (`border-slate-100`).
- **Spacing**: Generous padding (`py-20`) for main sections to maintain a clean, high-end B2B feel.

## Visuals
- Realistic, high-quality stock images of:
  - Professional factory inspections.
  - Sourcing professionals at work.
  - Shipping containers/logistics.
  - Product quality control checks.
EOF && cat <<EOF > /workspace/my-app/src/lib/utils.js
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
EOF && cat <<EOF > /workspace/my-app/src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
}

body {
  @apply bg-background text-zinc-900 antialiased;
}

h1, h2, h3, h4, h5, h6 {
  @apply font-semibold tracking-tight;
}

.section-padding {
  @apply py-16 md:py-24;
}

.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
EOF && cat <<EOF > /workspace/my-app/src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
EOF > /workspace/my-app/design.md
# Visual Style Guide - SSourcing China

## Typography
- **Primary Font**: Inter (Sans-serif) - Used for body text, navigation, and most UI elements.
- **Display Font**: Playfair Display (Serif) - Used for primary headings (h1, h2) to convey authority and professionalism.
- **Font Sizes**:
  - H1: 3.5rem (56px) / 2.5rem (40px) on mobile
  - H2: 2.5rem (40px) / 2rem (32px) on mobile
  - Body: 1rem (16px)

## Colors
- **Primary**: #004B91 (Deep Navy Blue) - Trust, reliability, corporate.
- **Accent**: #E63946 (Professional Red) - Professional attention-grabbing color for CTAs.
- **Background**: #FFFFFF (White) / #F4F7FA (Light Grey/Blue) for sections.
- **Text**: #1A1A1A (Dark Charcoal) for headings, #4A4A4A for body text.

## UI Components
- **Buttons**: Rounded (4px to 8px), solid colors with subtle hover transitions.
- **Cards**: Minimalist with subtle shadows (`shadow-sm`) and clear borders (`border-slate-100`).
- **Spacing**: Generous padding (`py-20`) for main sections to maintain a clean, high-end B2B feel.

## Visuals
- Realistic, high-quality stock images of:
  - Professional factory inspections.
  - Sourcing professionals at work.
  - Shipping containers/logistics.
  - Product quality control checks.
EOF && cat <<EOF > /workspace/my-app/src/lib/utils.js
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
EOF && cat <<EOF > /workspace/my-app/src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
}

body {
  @apply bg-background text-zinc-900 antialiased;
}

h1, h2, h3, h4, h5, h6 {
  @apply font-semibold tracking-tight;
}

.section-padding {
  @apply py-16 md:py-24;
}

.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
EOF && cat <<EOF > /workspace/my-app/src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
