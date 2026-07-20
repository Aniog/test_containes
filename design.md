# Velmora Fine Jewelry Design System

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial, premium.
- **Atmosphere**: Minimalist but soft, focusing on high-quality craft and elegance.

## Color Palette
- **Primary (Dark)**: `#1A1A1A` (velmora-dark) - Used for text and high-contrast sections.
- **Accent (Gold)**: `#C5A059` (velmora-gold) - Used for buttons, highlights, and icons.
- **Background**: `#FDFCFB` (velmora-beige) - Main background color.
- **Warm Neutral**: `#FAF7F2` (velmora-warm) - Secondary backgrounds and sections.
- **Dividers**: Thin hairlines in soft grey or muted gold.

## Typography
- **Headings**: Cormorant Garamond (Serif). Elegant and high-fashion.
- **UI & Body**: Inter or Manrope (Sans-serif). Clean and readable.
- **Product Names**: Uppercase with widest letter-spacing (`tracking-widest`).

## UI Elements
- **Buttons**:
  - Primary: Solid `#1A1A1A` with white text.
  - Secondary: Outlined `#1A1A1A` or solid Gold.
- **Cards**: Minimalist, no borders, subtle hover transitions.
- **Animations**: Soft fades and transforms using Framer Motion.
- **Imagery**: Large editorial pieces, warm lighting, close-ups.

## Do's & Don'ts
- **Do**: Use generous whitespace.
- **Do**: Keep dividers thin and subtle.
- **Do**: Use serif for focus points.
- **Don't**: Use loud colors or heavy drop shadows.
- **Don't**: Use aggressive sales banners or "discount" looking UI.
EOF && cat > index.html <<EOF
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <title>Velmora Fine Jewelry | Crafted to be Treasured</title>
  </head>
  <body class="bg-[#FDFCFB] text-[#1A1A1A]">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
EOF && cat > src/index.css <<EOF
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 10%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 10%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 10%;
    --primary: 0 0% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 40 45% 56%;
    --secondary-foreground: 0 0% 100%;
    --muted: 33 20% 96%;
    --muted-foreground: 0 0% 45%;
    --accent: 40 45% 56%;
    --accent-foreground: 0 0% 10%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89%;
    --input: 0 0% 89%;
    --ring: 40 45% 56%;
    --radius: 0.5rem;
  }
}

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  background-color: #FDFCFB;
  color: #1A1A1A;
}

h1, h2, h3, h4, .serif {
  font-family: 'Cormorant Garamond', serif;
}

.thin-divider {
  @apply h-px bg-[#1A1A1A]/10 w-full;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
EOF && cat > src/main.jsx <<EOF
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
EOF && cat > src/lib/utils.js <<EOF
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
