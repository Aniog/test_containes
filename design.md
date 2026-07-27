# SSourcing China - Design Guidelines

## Brand Identity
- **Company**: SSourcing China
- **Industry**: B2B Sourcing Agent / Supply Chain Services
- **Tone**: Professional, trustworthy, clear, practical — no exaggerated claims
- **Goal**: Generate qualified sourcing inquiries from overseas buyers

## Color Palette

### Primary Colors
- **Navy Blue** (`navy-700` / `#1B3A5C`): Headers, primary buttons, trust elements — conveys authority and reliability
- **Navy Dark** (`navy-800` / `#0F2740`): Footer, deep backgrounds
- **Navy Light** (`navy-50` / `#EEF2F7`): Light section backgrounds, card hover states

### Accent Colors
- **Amber** (`amber-500` / `#E87722`): CTAs, highlights, important actions — energy and urgency
- **Amber Hover** (`amber-600` / `#D06A1B`): Button hover states

### Neutral Colors
- **Slate 900** (`#0F172A`): Primary text
- **Slate 700** (`#334155`): Secondary text, descriptions
- **Slate 500** (`#64748B`): Muted text, captions
- **Slate 300** (`#CBD5E1`): Borders, dividers
- **Slate 100** (`#F1F5F9`): Light backgrounds
- **White** (`#FFFFFF`): Card backgrounds, main content areas

### Semantic Colors
- **Green** (`emerald-600` / `#059669`): Success, checkmarks, trust indicators
- **Red** (`red-600` / `#DC2626`): Error states

## Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: font-weight 700 (bold), tracking tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
- **Body**: font-weight 400, text-base (1rem), leading-relaxed
- **Small/Caption**: text-sm, text-slate-500
- **CTA Buttons**: font-weight 600, text-base

## Spacing & Layout
- **Section padding**: py-16 md:py-24
- **Container max-width**: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- **Card padding**: p-6 md:p-8
- **Grid gaps**: gap-6 md:gap-8
- **Border radius**: rounded-lg for cards, rounded-xl for larger sections, rounded-full for buttons/pills

## Visual Style
- Clean, minimal design with generous white space
- Subtle shadows: `shadow-sm` to `shadow-md` for cards
- Borders: `border border-slate-200` for cards and dividers
- Hover effects: subtle scale or shadow transitions
- No gradients on backgrounds — solid colors only
- Icons: Lucide React, stroke width 1.5-2, slate or navy colors
- Images: Realistic factory/QC/shipping visuals via data-strk-img system

## Component Patterns

### Buttons
- **Primary CTA**: `bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg`
- **Secondary**: `bg-navy-700 hover:bg-navy-800 text-white font-semibold px-6 py-3 rounded-lg`
- **Outline**: `border-2 border-navy-700 text-navy-700 hover:bg-navy-50 font-semibold px-6 py-3 rounded-lg`

### Cards
- `bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md transition-shadow`

### Sections
- Alternate between white (`bg-white`) and light (`bg-slate-50` or `bg-navy-50`) backgrounds
- Each section has a heading + optional subtitle centered above content

### Navigation
- Sticky top nav with white background and subtle shadow
- Logo left, nav links center/right, CTA button right
- Mobile: hamburger menu with slide-out drawer

## Do's
- Use ample white space for a clean, professional feel
- Use navy blue for trust and authority
- Use amber sparingly for CTAs and key highlights
- Keep copy concise and action-oriented
- Use realistic, professional imagery
- Ensure all text is clearly readable against backgrounds
- Use consistent spacing and alignment

## Don'ts
- Don't use dark backgrounds with dark text
- Don't use more than 2 accent colors
- Don't use cartoon or overly casual imagery
- Don't use exaggerated marketing language
- Don't crowd sections with too much content
- Don't use light text on light backgrounds
