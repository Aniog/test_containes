# Design Guidelines - MicroCosmos

## Visual Style
The MicroCosmos website follows a deep, immersive, and scientific aesthetic, emphasizing the contrast between the dark "unknown" and the vibrant "visible" details of the microscopic world.

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Headings**: Extra bold, tracking-tight, with gradient text for the hero.
- **Body**: Regular/Medium weight, high legibility.

### Colors
- **Background**: `bg-slate-900` (#0f172a) for a deep space/mystery feel.
- **Secondary Background**: `bg-slate-800` (#1e293b) for section separation.
- **Primary Accent**: `text-cyan-400` (#22d3ee) and `bg-cyan-500` (#06b6d4) - represents scientific precision and light.
- **Secondary Accent**: `text-blue-500` (#3b82f6) - adds depth to gradients.
- **Foreground Text**: `text-slate-100` (#f1f5f9) and `text-slate-400` (#94a3b8) for muted secondary text.

### Components
- **Navigation**: Persistent, semi-transparent backdrop blur (`backdrop-blur-md`).
- **Cards**: Dark background (`bg-slate-800`), subtle borders (`border-slate-700`), with hover effects (border color change and image scale).
- **Hero**: Full-screen immersive background image with a dark overlay to maintain text readability.
- **Buttons**: Rounded-full, high contrast (`bg-cyan-500`), with scale-on-hover animations.

### Spacing & Layout
- **Containers**: Max width of `7xl` (1280px) for consistent alignment.
- **Padding**: Generous vertical padding (`py-24`) to give content room to breathe.
- **Grid**: Responsive grid layouts (`grid-cols-1`, `md:grid-cols-2`, `lg:grid-cols-3`).

### Do's & Don'ts
- **Do**: Use high-quality stock images via the `data-strk-img` system.
- **Do**: Ensure high contrast for all text elements.
- **Do**: Use Lucide icons for visual interest.
- **Don't**: Use bright backgrounds that distract from the microscopic imagery.
- **Don't**: Overcrowd the mobile view; ensure proper stacking.
