# SSourcing China - Design System

## Brand Identity

### Logo
- Company name: SSourcing China
- Use as text-based logo in Navbar with bold styling

### Color Palette

**Primary (Brand Blue)**
- Background: `bg-brand-50` (#eff6ff)
- Light accent: `bg-brand-100` (#dbeafe)
- Mid tone: `bg-brand-600` (#1d4ed8)
- Dark: `bg-brand-800` (#1e3a8a)
- Darkest: `bg-brand-950` (#0f172a)

**Accent (Warm Orange)**
- Light: `bg-accent-100` (#ffedd5)
- Primary: `bg-accent-500` (#f97316)
- Dark: `bg-accent-600` (#ea580c)

**Neutral (Slate)**
- Backgrounds: `bg-slate-50`, `bg-slate-100`
- Borders: `border-slate-200`, `border-slate-300`
- Text: `text-slate-600`, `text-slate-700`, `text-slate-800`
- Dark text: `text-slate-900`

### Typography

**Headings**
- Font: Inter (700 weight)
- H1: `text-4xl md:text-5xl lg:text-6xl font-bold`
- H2: `text-3xl md:text-4xl font-bold`
- H3: `text-xl md:text-2xl font-semibold`
- Color: `text-slate-900`

**Body**
- Font: Inter (400 weight)
- Large body: `text-lg text-slate-600`
- Regular body: `text-base text-slate-700`
- Small: `text-sm text-slate-500`

### Spacing & Layout

- Section padding: `px-4 py-16 sm:px-6 lg:px-8 lg:py-24`
- Container max-width: `max-w-7xl mx-auto`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`
- Section gap: `space-y-16`

### Components

**Buttons**
- Primary: Blue background, white text, rounded-lg, shadow
- Secondary: White background, blue border, blue text
- Accent: Orange background, white text (for CTAs)
- All have hover/focus states with transitions

**Cards**
- White background (`bg-white`)
- Rounded corners (`rounded-xl`)
- Shadow (`shadow-sm` or `shadow-md`)
- Border (`border border-slate-200`)
- Hover: `hover:shadow-lg transition-shadow`

**Sections**
- White background: Default for most sections
- Light gray: `bg-slate-50` for alternating sections
- Dark: `bg-brand-900 text-white` for CTAs
- Blue gradient: `bg-gradient-to-br from-brand-600 to-brand-800`

### Icons

Use Lucide React icons consistently:
- Services: Shield, Search, Eye, Truck, Package, FileCheck
- Process: Numbered steps with icons
- Trust: CheckCircle, Award, Globe, Users
- Social: Mail, Phone, MapPin

### Images

Stock image tags via data-strk-img / data-strk-bg:
- Hero: Factory/sourcing/shipping imagery
- Services: Quality inspection, factory visits
- Products: Electronics, textiles, machinery
- Case studies: Business meeting, warehouse

### Do's
- Use white space generously
- Keep text readable with good contrast
- Use consistent button styles
- Alternate section backgrounds for visual rhythm
- Use rounded corners consistently (rounded-lg, rounded-xl)
- Apply shadow-sm to cards, shadow-md to hover states

### Don'ts
- Don't use low contrast text (light text on light bg)
- Don't mix too many accent colors
- Don't use overly complex gradients
- Don't crowd elements together
- Don't use decorative fonts for body text
