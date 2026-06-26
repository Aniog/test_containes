# ARTITECT MACHINERY — Visual Style Guide

## Brand
- Name: ARTITECT MACHINERY
- Positioning: Precision industrial machinery for sheet metal folding
- Voice: Confident, precise, engineering-forward, elegant

## Color Palette
- Ink (primary deep): #0E1A2B — used for headings, dark surfaces, footer
- Steel (secondary): #1A2230 — secondary dark surface
- Brass (accent): #C9A961 — CTAs, accents, highlights, hairlines
- Brass deep (accent dark): #A88A4D — accent borders, hover states
- Paper (warm white): #F7F5F0 — light page background
- Sand (warm muted): #EDE7DA — alt sections, cards
- Smoke (text secondary): #5B6470 — body text, captions
- Mist (subtle border): #D9D2C2 — borders, dividers

## Typography
- Display serif: Playfair Display (700/600) — H1/H2 hero headings, brand wordmark "ARTITECT"
- Sans: Inter (300/400/500/600/700) — body, navigation, buttons
- Eyebrow / label: Inter uppercase, tracking-[0.3em], text-xs, brass color

## Spacing & Layout
- Page max width: 1280px (7xl)
- Generous vertical rhythm: sections py-24 md:py-32
- Section padding x: px-6 md:px-10

## Components
- Buttons:
  - Primary: bg-brass text-ink hover:bg-brass-deep, rounded-none (sharp, industrial)
  - Secondary: border border-ink text-ink hover:bg-ink hover:text-paper
  - Ghost: text-ink hover:text-brass
- Cards: bg-paper border border-mist, hover shadow + slight brass accent line on hover
- Dividers: 1px brass lines used as section transitions
- Eyebrow line: short 32px brass horizontal line before section labels

## Tone of Voice (do)
- Engineering-precise language
- Active verbs ("engineered", "folded", "shaped")
- Reference specific capabilities (tonnage, length, automation)

## Avoid
- Bright primary colors (red/blue/green)
- Cartoon / overly playful illustration
- Tailwind default blue/purple
- Emoji in copy
- Hardcoded hex outside the Tailwind config tokens
