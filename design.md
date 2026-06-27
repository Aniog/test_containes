# Strikingly /generators Hub Page - Design Specification

## Overview
A polished marketing hub page for Strikingly's AI website generator network. This page fronts a network of keyword-targeted landing pages at `/generators/{slug}`.

## Brand Tokens

### Fonts
- **Headings**: Brandon Grotesque (weight 700, ALL UPPERCASE, line-height 1.2)
  - Fallback: Josefin Sans (free on Google Fonts, weight 700)
  - Secondary fallback: Poppins
  - Never use: Inter or system-default sans for headings
- **Body**: Open Sans, weight 400, 14px base, line-height 1.5
- **Buttons**: Same heading font, weight 700, uppercase

### Font Sizes
- H1: 40-48px desktop, 28-32px mobile
- H2: 26-32px desktop
- H3: 20-24px
- Body: 14px
- Small/Tags: 11px

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Brand Purple | `#8159BB` | Badges, accents, breadcrumb separator |
| AI Gradient Start | `#7671FF` | Primary CTA gradient start (blue-AI) |
| AI Gradient End | `#CB0C9F` | Primary CTA gradient end (pink-AI) |
| Body Text | `#636972` | Paragraphs, descriptions |
| Heading Dark | `#4B5056` | Section headings |
| Heading Hero | `#2E2E2F` | Hero H1 line 1 |
| Card Border | `#C6C9CD` | Card outlines |
| Subtle Divider | `#E2E4E7` | Section dividers |
| Light Background | `#F4F6F8` | Alternate section backgrounds |
| White | `#FFFFFF` | Default page background |

### AI Gradient
```
linear-gradient(135deg, #7671FF 0%, #CB0C9F 100%)
```
Used for:
- Primary CTAs (filled buttons with white text)
- Second line of H1 (background-clip: text)

### Buttons
| Type | Background | Border | Text | Height |
|------|------------|--------|------|--------|
| Primary | AI Gradient | None | White | 44px (large), 36px (standard) |
| Ghost | Transparent | 1px brand-purple | Brand-purple | 36px |

- Border-radius: 4px
- Padding: 9px 15px
- Font: 14px heading font, uppercase

### Cards
- Background: white
- Border: 1px `#C6C9CD`
- Border-radius: 3px
- Padding: 20px
- Hover: subtle box-shadow elevation, 1px brand-purple border
- No scale or rotation transforms on hover

### Tags (Category Badges)
- Font: 11px heading font, uppercase
- Padding: 2px 6px
- Border-radius: 3px
- Style: Ghost (brand-purple text, 1px brand-purple border, no fill)

### Spacing
- Section padding: 40px top/bottom
- Hero padding: 60-80px top/bottom
- Content max-width: 1200px, centered
- Block margins: 20px
- Adjacent button gap: 10px
- All multiples of 5px

## Section Structure

### Section 0: Top Bar
- Strikingly AI logo (left)
- White background
- Thin bottom border
- No nav links

### Section 1: Breadcrumb
- Nav: `Strikingly` (link to `/`) `>` `AI Generators` (plain text)
- Small body-gray text
- No card or background
- Semantic `<nav aria-label="Breadcrumb">`
- BreadcrumbList JSON-LD in head

### Section 2: Hero
**Layout**: Two columns desktop, stacked mobile

**Left column**:
- H1 line 1: "BUILD ANY KIND OF SITE" (dark gray, uppercase)
- H1 line 2: "WITH AI, IN AN INSTANT" (AI gradient text, uppercase)
- Subheadline: "Browse the right generator for what you're building, or jump straight into our AI site builder."
- Two CTAs side by side (stacked mobile)

**Right column**:
- Soft purple line-art illustration (inline SVG)
- Explicit width/height to prevent CLS

**CTAs**:
- Primary: "START BUILDING - IT'S FREE" → `/s/ai_site_builder` (gradient fill)
- Secondary: "BROWSE GENERATORS" → `#all-generators` (ghost)

### Section 3: Featured Generators
- Heading: "FEATURED GENERATORS"
- Subheading: "A few common starting points."
- 3×3 grid (3-col desktop, 2-col tablet, 1-col mobile)
- Each tile: name, one-line description, ghost category tag
- Whole tile is link to `/generators/{slug}`
- Tag included here (mixed categories)

**Sample data (9 items)**:
1. AI Website Generator: Describe your business, get a full site (Website)
2. Free Portfolio Generator: For creatives, in minutes, no fee (Portfolio)
3. AI Landing Page Maker: One-page sites built to convert (Landing Page)
4. Online Store Builder: Start selling without writing code (Store)
5. Link-in-Bio Generator: One link for all your channels (Link-in-Bio)
6. One-Page Website Builder: Simple sites, single scroll (Website)
7. Wedding Website Generator: Share your day with guests (Website)
8. Restaurant Website Builder: Menu, hours, reservations, done (Website)
9. Blog Generator for Beginners: Publish-ready in minutes (Blog)

### Section 4: Browse by Category
- Heading: "BROWSE BY CATEGORY"
- 6 cards in 3-column grid
- Each card: category illustration, uppercase name, one-line description, right-arrow icon
- Whole card links to `/generators#{category-slug}`
- Cards are jump anchors (hash navigation works without JS)

**Categories**:
1. Websites (#websites): "AI-built business and personal sites for any goal."
2. Landing Pages (#landing-pages): "Single-page sites built to convert visitors fast."
3. Portfolios (#portfolios): "Showcase your work with a clean, focused site."
4. Blogs (#blogs): "Publish-ready blogs with built-in SEO basics."
5. Online Stores (#stores): "Sell products online with payments built in."
6. Link-in-Bio (#link-in-bio): "One link, all your places. Made for creators."

### Section 5: All Generators Directory
**Outer container**: `id="all-generators"`
- Heading: "ALL GENERATORS"
- Subheading: "Sixty-plus generators, organized by what you're building."

**Search input**:
- Magnifying glass icon (left)
- Placeholder: "Search generators..."
- `aria-label="Search generators"`
- Match: generator name, description, category (case-insensitive)
- Show result count: "X generators match"
- Empty state: "No results" + "Clear search" button + "Can't find it? Start with our AI builder." link

**Subsections** (6 total):
Each with:
- `id` matching hash anchors
- `<h3>` category heading
- One-line section description
- Grid of cards (3-col desktop, 2-col tablet, 1-col mobile)
- Cards visible by default; JS may add "Show all X generators" toggle
- CSS height transition for collapse/expand (no instant display swap)

**Card structure**:
- Small category illustration (shared per subsection)
- Bold generator name
- One-line description
- Link to `/generators/{slug}`
- No category tag (subsection heading provides context)

**8-12 items per subsection**

### Section 6: How It Works
- Heading: "HOW IT WORKS"
- 3 numbered steps (horizontal desktop, stacked mobile)
- Each step: numbered purple circle, uppercase title, body sentence

**Steps**:
1. PICK A GENERATOR: Browse by category or search to find one that fits your goal.
2. DESCRIBE YOUR SITE: Tell our AI builder about your business in a sentence or two.
3. GENERATE AND PUBLISH: Get a fully built site in seconds. Customize anything, then go live.

### Section 7: Why Strikingly
- Heading: "WHY STRIKINGLY"
- 3-up grid (3 desktop/tablet, 1 mobile)
- Each cell: line icon, bold uppercase claim, body sentence

**Claims**:
1. LIVE IN SECONDS: Describe your site, we build it. No setup, no learning curve.
2. MOBILE BY DEFAULT: Every generator produces responsive sites that work on any device.
3. FREE TO START: Generate, customize, and publish without a credit card.

### Section 8: FAQ
- Heading: "FREQUENTLY ASKED QUESTIONS"
- Accordion (first expanded, rest collapsed)
- `aria-expanded` and `aria-controls` on buttons

**Questions**:
1. What is an AI site generator?
2. How is a generator different from a template?
3. Are these generators free to use?
4. What kinds of sites can I build?
5. Can I customize what the generator produces?
6. Do generated sites work on mobile?

### Section 9: Closing CTA
- Centered
- Heading: "READY TO BUILD?"
- Sub: "Pick a generator above, or jump straight into our AI builder."
- CTA: "START WITH AI BUILDER" (44px, gradient fill) → `/s/ai_site_builder`
- White background

### Section 10: Footer
- Logo
- Four columns of links (real Strikingly URLs)
- Copyright line

## SEO & Head Requirements

```html
<title>AI Website Generators - Build Any Site in Seconds | Strikingly</title>
<meta name="description" content="Browse Strikingly's AI-powered website generators...">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="canonical" href="https://www.strikingly.com/generators">
<html lang="en">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:url" content="https://www.strikingly.com/generators">
```

**JSON-LD**: BreadcrumbList only (no FAQPage, ItemList, WebApplication)

## i18n Readiness
- All strings in `strings.en` object
- CSS logical properties where practical
- Reserve `/es/generators`, `/ja/generators` paths

## Accessibility
- All interactive controls keyboard usable
- Visible focus states
- `aria-expanded` and `aria-controls` on accordions/toggles
- Decorative SVGs: `aria-hidden="true"`
- Card links: unique descriptive names
- WCAG AA contrast (4.5:1 normal, 3:1 large)
- White text on AI gradient passes

## Performance
- Vanilla JS only (search, toggles, accordions)
- Inline SVG illustrations (no external images)
- Explicit width/height on images
- Target CLS < 0.1, INP < 200ms

## Responsive Breakpoints
- Mobile: < 768px (1 column)
- Tablet: 768px - 1024px (2 columns)
- Desktop: > 1024px (3 columns)