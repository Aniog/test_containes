# Hoover Dam Feature Website — Design System

## Visual Style
A dramatic, authoritative documentary aesthetic inspired by the scale and history of the Hoover Dam. Dark stone-grey backgrounds contrast with warm amber/gold accents evoking the desert Southwest and the dam's Art Deco architecture.

## Color Palette
- **Primary Background**: `#0f1923` (deep navy-black)
- **Surface / Card**: `#1a2535` (dark slate)
- **Border / Divider**: `#2a3a50` (muted steel blue)
- **Accent Gold**: `#c9a84c` (warm amber gold — Art Deco)
- **Accent Light**: `#e8c97a` (light gold for hover states)
- **Text Primary**: `#f0ece4` (warm off-white)
- **Text Secondary**: `#9aabb8` (muted blue-grey)
- **Text Muted**: `#5a7080` (dim grey-blue)
- **Hero Overlay**: `rgba(15,25,35,0.65)`
- **Danger / Highlight**: `#e05c3a` (terracotta red)

In `tailwind.config.js`, add these as named colors:
```js
navyBlack: '#0f1923'
darkSlate: '#1a2535'
steelBorder: '#2a3a50'
accentGold: '#c9a84c'
accentLight: '#e8c97a'
warmWhite: '#f0ece4'
mutedBlue: '#9aabb8'
dimGrey: '#5a7080'
terracotta: '#e05c3a'
```

## Typography
- **Font Family**: `Playfair Display` (headings) + `Inter` (body)
- **H1**: `text-5xl md:text-7xl font-bold font-serif tracking-tight text-warmWhite`
- **H2**: `text-3xl md:text-4xl font-bold font-serif text-warmWhite`
- **H3**: `text-xl md:text-2xl font-semibold font-serif text-accentGold`
- **Body**: `text-base text-mutedBlue leading-relaxed`
- **Caption / Label**: `text-sm text-dimGrey uppercase tracking-widest`

## Spacing & Layout
- Max content width: `max-w-6xl mx-auto px-4 md:px-8`
- Section padding: `py-20 md:py-28`
- Card padding: `p-6 md:p-8`
- Border radius: `rounded-xl` for cards, `rounded-full` for badges

## Components

### Navigation
- Fixed top bar, `bg-navyBlack/90 backdrop-blur-md`
- Logo text in `text-accentGold font-serif`
- Nav links: `text-mutedBlue hover:text-accentGold transition-colors`

### Hero Section
- Full-viewport height with background image overlay
- Large centered title + subtitle
- Scroll-down indicator

### Stat Cards
- Dark surface `bg-darkSlate border border-steelBorder`
- Large number in `text-accentGold font-bold text-4xl`
- Label in `text-mutedBlue text-sm uppercase tracking-widest`

### Timeline Items
- Left border accent `border-l-2 border-accentGold`
- Year badge in `bg-accentGold text-navyBlack`

### Section Dividers
- Thin gold line: `border-t border-accentGold/30`

## Do's
- Use serif fonts for all headings to evoke historical gravitas
- Use gold accents sparingly for emphasis
- Maintain high contrast between text and backgrounds
- Use full-bleed images with dark overlays for visual impact

## Don'ts
- Don't use pure white (`#ffffff`) — use `warmWhite` instead
- Don't use bright saturated colors — keep palette muted and earthy
- Don't use rounded corners larger than `rounded-xl`
- Don't stack multiple gold elements without breathing room
