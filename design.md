# SSourcing China - Design Specification

## Project Overview
- **Project Name**: SSourcing China Website
- **Type**: B2B Corporate Website
- **Purpose**: Generate qualified sourcing inquiries for China sourcing agent services
- **Target Audience**: Overseas buyers seeking reliable Chinese suppliers

## Visual Style
- **Tone**: Professional, trustworthy, clean, international B2B
- **Aesthetic**: Modern corporate with realistic factory/QC/shipping visuals

## Color Palette
- **Primary**: `#1E3A5F` (Deep Navy Blue - trust, professionalism)
- **Secondary**: `#2D5A87` (Medium Blue - headers, accents)
- **Accent**: `#E67E22` (Warm Orange - CTAs, highlights)
- **Success**: `#27AE60` (Green - trust indicators)
- **Background Light**: `#F8FAFC` (Off-white)
- **Background Dark**: `#0F172A` (Dark navy for footer)
- **Text Primary**: `#1E293B` (Dark slate)
- **Text Secondary**: `#64748B` (Muted gray)
- **Border**: `#E2E8F0` (Light gray)

## Typography
- **Font Family**: "Inter", system-ui, sans-serif
- **Headings**: 
  - H1: 48px/56px, font-weight 700
  - H2: 36px/44px, font-weight 600
  - H3: 24px/32px, font-weight 600
  - H4: 20px/28px, font-weight 500
- **Body**: 16px/24px, font-weight 400
- **Small**: 14px/20px, font-weight 400

## Layout
- **Max Width**: 1280px centered
- **Spacing Scale**: 4px base (4, 8, 12, 16, 24, 32, 48, 64, 96)
- **Responsive Breakpoints**:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

## Components

### Header
- Fixed position, white background with subtle shadow
- Logo (left), Navigation (center), CTA button (right)
- Mobile: hamburger menu

### Hero Section
- Full-width, light background
- Headline + subheadline + primary CTA
- Optional background image with overlay

### Service Cards
- White background, subtle shadow
- Icon, title, description
- Hover: slight lift effect

### Process Steps
- Numbered steps with connecting line
- Icon + title + description per step

### Trust Indicators
- Stats with numbers and labels
- Client logos (grayscale)
- Certifications

### Case Study Cards
- Image, title, description, metrics
- Link to full case study

### FAQ Accordion
- Expandable questions
- Clean plus/minus icons

### Contact Form
- Clean input fields with labels
- Required field indicators
- Submit button with loading state

### Footer
- Dark background (#0F172A)
- Multiple columns: About, Services, Resources, Contact
- Social links, copyright

## Visual Effects
- **Shadows**: `0 4px 6px -1px rgba(0,0,0,0.1)` for cards
- **Border Radius**: 8px for cards, 6px for buttons, 4px for inputs
- **Transitions**: 200ms ease for hover states
- **Hover Effects**: Slight lift (translateY -2px) on cards

## Do's and Don'ts
- **DO**: Use professional imagery, clear typography, ample whitespace
- **DO**: Keep CTAs prominent and consistent
- **DO**: Use blue tones for trust, orange for action
- **DON'T**: Use overly flashy animations
- **DON'T**: Use stock photos that look obviously staged
- **DON'T**: Make exaggerated claims
- **DON'T**: Clutter the design with too many elements

## Page Structure

### Homepage Sections
1. Hero (headline, subheadline, CTA)
2. Trust bar (stats, certifications)
3. Services overview (6 services)
4. Sourcing process (5-6 steps)
5. Products we source (categories)
6. Problems we solve (pain points)
7. Case studies preview (3 cases)
8. FAQ (6-8 questions)
9. Inquiry form CTA
10. Footer

### Pages
- Home
- Services (detailed)
- How It Works
- Products We Source
- Case Studies
- Blog
- Contact