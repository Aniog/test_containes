# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Formed.
- **Tone:** Authoritative, precise, trustworthy — yet approachable and modern.

## Color Palette
All hex values are added to Tailwind config as named tokens.

| Token | Hex | Usage |
|---|---|---|
| `brand-navy` | `#0D1B2A` | Primary dark background, nav, footer |
| `brand-steel` | `#1C3A5E` | Secondary dark, card backgrounds |
| `brand-blue` | `#2563EB` | Primary accent, CTAs, highlights |
| `brand-sky` | `#38BDF8` | Secondary accent, hover states |
| `brand-silver` | `#CBD5E1` | Muted text, borders |
| `brand-light` | `#F1F5F9` | Light section backgrounds |
| `brand-white` | `#FFFFFF` | Text on dark, card surfaces |

## Typography
- **Font Family:** Inter (Google Fonts)
- **Headings:** font-bold, tracking-tight
  - H1: `text-5xl md:text-7xl font-bold`
  - H2: `text-3xl md:text-4xl font-bold`
  - H3: `text-xl md:text-2xl font-semibold`
- **Body:** `text-base text-brand-silver` on dark, `text-slate-600` on light
- **Labels/Caps:** `text-xs uppercase tracking-widest font-semibold`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-6 lg:px-8`
- Section padding: `py-20 md:py-28`
- Card padding: `p-8`
- Border radius: `rounded-2xl` for cards, `rounded-full` for pills/badges

## Component Styles

### Buttons
- **Primary:** `bg-brand-blue hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all`
- **Outline:** `border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-3 rounded-full transition-all`
- **Ghost (on dark):** `border border-brand-silver/40 text-brand-white hover:border-brand-sky hover:text-brand-sky px-8 py-3 rounded-full transition-all`

### Cards
- Dark cards: `bg-brand-steel border border-white/10 rounded-2xl p-8 hover:border-brand-sky/40 transition-all`
- Light cards: `bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all`

### Navigation
- Sticky, dark background `bg-brand-navy/95 backdrop-blur`
- Logo: bold, uppercase, letter-spaced
- Links: `text-brand-silver hover:text-white transition-colors`

### Sections
- Dark sections: `bg-brand-navy text-white`
- Light sections: `bg-brand-light text-slate-800`
- Accent dividers: thin `border-brand-blue/30`

## Do's
- Use generous whitespace between sections
- Use subtle gradients on hero backgrounds
- Use icons alongside feature text for scannability
- Keep CTAs prominent with high-contrast colors
- Use grid layouts for product cards (2-3 columns on desktop)

## Don'ts
- Don't use light text on light backgrounds
- Don't use more than 2 accent colors per section
- Don't crowd navigation with too many items
- Don't use decorative fonts — keep it clean and industrial
