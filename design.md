# ARTITECT MACHINERY — Design System

## Brand Identity
- Industrial precision meets elegant craftsmanship
- Professional, trustworthy, modern
- Target: sheet metal fabrication professionals

## Color Palette
- **Primary (Navy):** `navy-900` (#0f172a), `navy-800` (#1e293b), `navy-700` (#334155)
- **Accent (Brass/Gold):** `brass-500` (#c9a227), `brass-400` (#d4b44a), `brass-600` (#a8861e)
- **Neutral:** `slate-50` (#f8fafc), `slate-100` (#f1f5f9), `slate-200` (#e2e8f0), `slate-600` (#475569), `slate-800` (#1e293b)
- **White:** #ffffff
- **Background:** slate-50 for light sections, navy-900 for dark sections

## Typography
- **Font Family:** Inter (headings + body)
- **Headings:** font-bold, tracking-tight
  - H1: text-5xl lg:text-6xl
  - H2: text-3xl lg:text-4xl
  - H3: text-xl lg:text-2xl
- **Body:** text-base, text-slate-600 (light bg) or text-slate-300 (dark bg)
- **Small/Caption:** text-sm, text-slate-500

## Spacing
- Section padding: py-20 lg:py-28
- Container: max-w-7xl mx-auto px-6 lg:px-8
- Card padding: p-6 lg:p-8
- Component gaps: gap-6 or gap-8

## Borders & Shadows
- Cards: rounded-2xl, shadow-sm, border border-slate-200
- Buttons: rounded-lg
- Hover cards: shadow-lg transition-shadow duration-300

## Buttons
- Primary: bg-brass-500 text-navy-900 font-semibold rounded-lg px-6 py-3 hover:bg-brass-400
- Secondary: border-2 border-brass-500 text-brass-500 rounded-lg px-6 py-3 hover:bg-brass-500 hover:text-navy-900
- On dark bg: same brass accent

## Do's
- Use generous whitespace between sections
- Keep text readable with proper contrast
- Use subtle animations (transition-all duration-300)
- Maintain consistent section structure (heading + subtitle + content)

## Don'ts
- No neon or overly bright colors
- No cramped layouts
- No more than 2 font weights per element
- No hardcoded hex in class strings (use Tailwind config names)
