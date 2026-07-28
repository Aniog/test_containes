# SSourcing China - B2B Sourcing Agent Website Specification

## 1. Concept & Vision

A professional, trustworthy B2B website for SSourcing China, a China-based sourcing agent helping overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping. The site should feel like a premium B2B service—clean, international, and reassuring to decision-makers who need to trust a stranger with their supply chain. Every element communicates reliability and competence.

## 2. Design Language

### Aesthetic Direction
Corporate professional with warm accessibility. Think: international consulting firm meets modern logistics company. Clean lines, generous whitespace, subtle geometric accents, and professional photography-style imagery placeholders.

### Color Palette
- **Primary**: `#1B365D` (Deep Navy) - Trust, professionalism, authority
- **Secondary**: `#2C5282` (Medium Blue) - Supporting depth, buttons, links
- **Accent**: `#E67E22` (Warm Orange) - CTAs, highlights, energy
- **Background Light**: `#F8FAFC` (Off-white)
- **Background White**: `#FFFFFF` (Pure white for cards)
- **Background Alt**: `#EDF2F7` (Light gray for alternating sections)
- **Text Primary**: `#1A202C` (Near black)
- **Text Secondary**: `#4A5568` (Gray)
- **Text Muted**: `#718096` (Light gray)
- **Success**: `#38A169` (Green for trust indicators)
- **Border**: `#E2E8F0` (Light border)

### Typography
- **Headings**: Inter (600, 700 weights) - Modern, professional, highly legible
- **Body**: Inter (400, 500 weights) - Clean reading experience
- **Fallback**: system-ui, -apple-system, sans-serif
- **Scale**: 
  - Hero H1: 48px/56px (mobile: 32px/40px)
  - H2 Section: 36px/44px (mobile: 28px/36px)
  - H3 Card: 24px/32px (mobile: 20px/28px)
  - Body Large: 18px/28px
  - Body: 16px/24px
  - Small: 14px/20px

### Spatial System
- **Base unit**: 4px
- **Section padding**: 96px vertical (mobile: 64px)
- **Container max-width**: 1280px
- **Card padding**: 32px
- **Grid gap**: 32px (mobile: 24px)
- **Component spacing**: 8px, 16px, 24px, 32px, 48px scale

### Motion Philosophy
- **Entrance**: Subtle fade-up (20px translate, 600ms ease-out)
- **Hover**: Scale 1.02-1.05, shadow lift, 200ms ease
- **Transitions**: 200-300ms for interactions, 400ms for page transitions
- **Scroll reveals**: Staggered 100ms between items

### Visual Assets
- **Icons**: Lucide React - clean, consistent stroke icons
- **Images**: Placeholder divs with descriptive IDs for dynamic image loading
- **Decorative**: Subtle gradient overlays, geometric accent shapes
- **Patterns**: Light diagonal lines or dot patterns for section backgrounds

## 3. Layout & Structure

### Site Architecture
```
├── Home (/)
├── Services (/services)
├── How It Works (/how-it-works)
├── Products We Source (/products)
├── Case Studies (/case-studies)
├── Blog (/blog)
└── Contact (/contact)
```

### Page Structure
- **Navbar**: Fixed, transparent on hero → solid on scroll
- **Hero**: Full viewport height on home, 60vh on inner pages
- **Content**: Alternating light/white sections
- **Footer**: Dark navy, comprehensive links, newsletter signup

### Responsive Strategy
- **Desktop**: 1280px max-width, multi-column layouts
- **Tablet**: 768px breakpoint, 2-column grids
- **Mobile**: Single column, stacked layouts, hamburger menu

## 4. Features & Interactions

### Global Features
- **Navigation**: Smooth scroll, active state highlighting, mobile hamburger menu
- **Back to Top**: Appears after scrolling 400px
- **Form Validation**: Real-time validation, clear error states
- **Loading States**: Skeleton loaders for dynamic content

### Homepage Sections
1. **Hero**: Full-height, headline + subheadline + CTA + trust badges
2. **Trust Bar**: Client logos, years of experience, factories verified
3. **Services Grid**: 6 service cards with icons
4. **Problems We Solve**: 4 pain points with solutions
5. **Process Timeline**: 5-step sourcing process
6. **Products Grid**: Categories of products sourced
7. **Case Studies Preview**: 3 featured case studies
8. **FAQ Accordion**: 6 common questions
9. **Inquiry Form**: Full lead capture form
10. **Blog Preview**: Latest 3 articles

### Services Page
- Detailed service descriptions
- Pricing model explanation
- FAQ specific to services

### How It Works Page
- Visual step-by-step process
- Timeline visualization
- FAQ section

### Products Page
- Category grid with descriptions
- Request quote per category

### Case Studies Page
- Filterable by industry
- Detailed project cards
- Results metrics

### Blog Page
- Article grid
- Category filters
- Search

### Contact Page
- Contact form (name, email, company, phone, inquiry type, message)
- Office location
- Response time promise

## 5. Component Inventory

### Button
- **Primary**: Orange background, white text, rounded-lg, hover: darken 10%
- **Secondary**: Navy outline, navy text, hover: navy fill, white text
- **Ghost**: Transparent, navy text, hover: light background
- **States**: Default, hover, active, disabled, loading

### Card
- White background, subtle shadow, rounded-xl, hover: lift effect
- **Variants**: Service card, case study card, blog card, product card

### Input Fields
- Rounded-lg border, focus: primary color ring
- **States**: Default, focus, error, disabled
- Labels above, helper text below

### Navigation
- Logo left, links center, CTA right
- Mobile: hamburger menu with slide-out drawer

### Accordion/FAQ
- Clean borders, chevron animation
- One open at a time

### Hero Section
- Large headline, supporting text, primary CTA
- Optional secondary CTA
- Trust indicators below

### Section Headers
- Eyebrow text (uppercase, accent color)
- H2 headline
- Optional subheadline
- Centered or left-aligned variants

## 6. Technical Approach

### Framework & Build
- React 18 with Vite
- React Router v6 for navigation
- Tailwind CSS for styling
- Lucide React for icons

### Project Structure
```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── layout/       # Navbar, Footer, Layout
│   ├── home/         # Homepage section components
│   └── sections/     # Shared section components
├── pages/            # Page-level components
├── lib/              # Utilities
└── assets/           # Static assets
```

### Key Implementation Details
- CSS custom properties for theme colors
- Component composition for flexibility
- Semantic HTML throughout
- Accessible: ARIA labels, keyboard navigation, focus management

## 7. Content Strategy

### Voice & Tone
- Professional but approachable
- First-person plural ("we") for the company
- Second-person ("you") for the reader
- Action-oriented CTAs
- Specific numbers and metrics over vague claims

### Key Messages
1. "China Sourcing Agent for Global Buyers"
2. "Find reliable suppliers. Protect your quality. Simplify shipping."
3. "We handle the complexity so you can focus on your business."
4. "Your trusted partner in China sourcing"

### Trust Indicators
- Years of experience
- Factories verified
- Countries served
- Client satisfaction rate
