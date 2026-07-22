# Velmora Fine Jewelry — Design System

## Color Palette

### Primary Colors
- **Background (ivory):** `#FAF6F0` — warm cream base, light and editorial
- **Background Alt (sand):** `#F3EDE4` — slightly deeper warm tone for alternating sections
- **Text Primary (charcoal):** `#1C1917` — deep warm black for headings and body
- **Text Secondary (stone):** `#78716C` — warm muted gray for subtitles and secondary info
- **Accent (gold):** `#B08D57` — warm 18K gold accent for CTAs, links, highlights
- **Accent Dark (deep gold):** `#8B6F3C` — hover state for gold elements
- **Border (linen):** `#E7E0D8` — warm hairline dividers and card borders
- **Card Background:** `#FFFFFF` — pure white for product cards and content areas
- **Dark Section (espresso):** `#1C1917` — for trust bar, footer, dark accent sections

### Semantic Tokens
- `foreground` → `#1C1917` (charcoal)
- `background` → `#FAF6F0` (ivory)
- `muted-foreground` → `#78716C` (stone)
- `border` → `#E7E0D8` (linen)
- `primary` → `#B08D57` (gold)
- `primary-foreground` → `#FFFFFF` (white)
- `card` → `#FFFFFF`
- `card-foreground` → `#1C1917`
- `popover` → `#FFFFFF`
- `popover-foreground` → `#1C1917`
- `destructive` → `#DC2626`

## Typography

### Font Families
- **Serif (headings):** Cormorant Garamond — elegant, refined, luxury feel
- **Sans (body/UI):** Inter — clean, readable, modern

### Heading Styles
- H1: Cormorant Garamond, 48px/56px, font-weight 300, letter-spacing 0.02em
- H2: Cormorant Garamond, 36px/44px, font-weight 400, letter-spacing 0.02em
- H3: Cormorant Garamond, 24px/32px, font-weight 500
- Product names: UPPERCASE, Inter, letter-spacing 0.15em, font-weight 500, 13px

### Body Styles
- Body: Inter, 16px/24px, font-weight 400
- Small: Inter, 14px/20px, font-weight 400
- Caption: Inter, 12px/16px, font-weight 500, letter-spacing 0.05em, UPPERCASE

## Spacing & Layout
- Section padding: 80px vertical on desktop, 48px on mobile
- Container max-width: 1280px, padding 24px sides
- Card gap: 24px on desktop, 16px on mobile
- Generous whitespace — content should breathe

## Components

### Buttons
- **Primary (filled):** Gold background `#B08D57`, white text, padding 14px 32px, no rounded corners (2px radius), uppercase, letter-spacing 0.1em, font-size 13px, Inter font
- **Primary hover:** Darken to `#8B6F3C`
- **Secondary (outlined):** Transparent bg, 1px gold border, gold text, same dimensions
- **Secondary hover:** Fill with gold, text turns white

### Cards
- White background, 1px linen border, subtle shadow on hover, 2px border-radius
- Product image: aspect ratio 3:4, overflow hidden
- Hover: lift slightly (translateY -4px), shadow deepens, reveal second image

### Dividers
- 1px solid `#E7E0D8` (linen), used between sections and content blocks

### Navigation
- Sticky, transparent over hero, solid ivory bg on scroll
- Height: 72px desktop, 64px mobile
- Logo: Cormorant Garamond, 24px, font-weight 600, letter-spacing 0.08em

## Animations
- Transitions: 200ms ease for hover states, 300ms ease for layout changes
- Scroll reveal: subtle fade-up (translate 20px → 0, opacity 0 → 1)
- Cart drawer: slide in from right, 300ms ease-out

## Do's
- Use generous whitespace — luxury needs breathing room
- Keep consistent warm tones throughout
- Use thin hairline dividers (1px) generously
- Product names always UPPERCASE with wide letter-spacing
- Use editorial image layouts — large, atmospheric
- Gold accent should feel intentional, not overwhelming

## Don'ts
- No bright or neon colors
- No heavy shadows or 3D effects
- No rounded corners larger than 4px
- No busy backgrounds or patterns
- No discount badges or sale language — this is quiet luxury
- No harsh color contrasts (e.g., pure black on pure white is too stark — use charcoal on ivory)
