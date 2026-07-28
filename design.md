# SSourcing China - Design System

## Brand Identity
- **Company**: SSourcing China
- **Industry**: B2B Sourcing / Supply Chain
- **Tone**: Professional, trustworthy, clear, practical — no exaggerated claims

## Color Palette

### Primary Colors
- **Navy Blue** (primary): `#1e3a5f` — trust, professionalism, authority
- **Deep Blue** (primary dark): `#152d4a` — hover states, emphasis
- **Sky Blue** (primary light): `#3b6fa0` — secondary accents
- **Accent Blue** (CTA): `#2563eb` — call-to-action buttons, links

### Neutral Colors
- **White**: `#ffffff` — backgrounds, cards
- **Light Gray**: `#f8fafc` — section backgrounds
- **Medium Gray**: `#e2e8f0` — borders, dividers
- **Slate**: `#64748b` — secondary text
- **Dark Slate**: `#334155` — body text
- **Near Black**: `#0f172a` — headings

### Accent Colors
- **Green** (success/trust): `#16a34a` — trust badges, verification icons
- **Amber** (warning/attention): `#d97706` — highlights
- **Red** (alert): `#dc2626` — error states

## Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: font-weight 700-800, tracking tight
- **Body**: font-weight 400, line-height 1.6-1.75
- **H1**: text-4xl md:text-5xl lg:text-6xl, font-extrabold
- **H2**: text-3xl md:text-4xl, font-bold
- **H3**: text-xl md:text-2xl, font-semibold
- **Body Large**: text-lg, leading-relaxed
- **Body**: text-base, leading-normal
- **Small**: text-sm, text-slate-500

## Spacing & Layout
- **Section padding**: py-16 md:py-24
- **Container**: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- **Card padding**: p-6 md:p-8
- **Grid gaps**: gap-6 md:gap-8
- **Border radius**: rounded-lg (cards), rounded-xl (hero), rounded-full (buttons/badges)

## Visual Style
- Clean white backgrounds with subtle gray alternating sections
- Cards with subtle shadows (shadow-sm to shadow-md)
- No heavy gradients — use solid colors or very subtle gradients
- Professional iconography using Lucide React
- Generous whitespace for readability
- Subtle hover transitions (transition-all duration-200)

## Components
- **Buttons**: 
  - Primary: bg-accent-blue text-white rounded-lg px-6 py-3 font-semibold hover:bg-deep-blue
  - Secondary: border-2 border-navy text-navy rounded-lg px-6 py-3 font-semibold hover:bg-navy hover:text-white
  - Ghost: text-accent-blue font-semibold hover:underline
- **Cards**: bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition
- **Badges**: rounded-full px-3 py-1 text-xs font-medium
- **Section headers**: Centered with subtitle in slate color below

## Do's
- Use plenty of whitespace
- Keep text concise and scannable
- Use icons alongside text for services/features
- Use realistic factory/QC/shipping imagery
- Maintain consistent spacing between sections
- Use data and specifics over vague claims

## Don'ts
- Don't use dark backgrounds for content sections (only hero)
- Don't use exaggerated marketing language ("#1", "best in the world")
- Don't use cartoon or clip-art style imagery
- Don't crowd sections with too much text
- Don't use more than 2 CTA buttons per section
- Don't use auto-playing animations or videos
