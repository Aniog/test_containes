export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF && cat > /workspace/my-app/jsconfig.json <<EOF
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
EOF && cat > /workspace/my-app/components.json <<EOF
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": false,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
EOF && cat > /workspace/my-app/.env <<EOF
VITE_APP_TITLE=Velmora Fine Jewelry
VITE_PORT=8080
EOF && cat > /workspace/my-app/index.html <<EOF
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <title>Velmora Fine Jewelry</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
EOF && cat > /workspace/my-app/design.md <<EOF
# Design Guidelines - Velmora Fine Jewelry

## Visual Style
- **Mood**: Quiet luxury, warm, editorial, premium.
- **Palette**:
  - Background: #FAF9F6 (Off-white/Alabaster) - bg-background
  - Primary Text: #1A1A1A (Rich Black) - text-foreground
  - Accent/Metallic: #D4AF37 (Gold) - text-accent
  - Muted/Dividers: #E5E5E5 - border-muted
- **Typography**:
  - Headings: Cormorant Garamond (Serif)
  - Body/UI: Inter (Sans-serif)
  - Product Names: UPPERCASE with wide letter-spacing (tracking-widest)

## Spacing & Layout
- Generous whitespace (py-12 to py-24).
- Thin hairline dividers (border-t border-muted/30).
- Grid layout with large editorial images.

## Components
- **Buttons**:
  - Primary: Solid #1A1A1A with white text or #8C7E6A for softer look.
  - Outlined: #1A1A1A border with transparent background.
- **Inputs**: Clean, minimal borders.
- **Transitions**: Subtle hover effects (opacity-80, scale-102).
