# SSourcing China - B2B Website Specification

## 1. Concept & Vision

SSourcing China is a professional B2B website for a China-based sourcing agent helping overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping. The website should feel like a trustworthy, international business partner—clean, professional, and practical. No exaggerated claims, just clear value propositions backed by real process transparency.

**Brand Personality:** Professional, trustworthy, international, practical, transparent.

---

## 2. Design Language

### Aesthetic Direction
Clean corporate B2B with subtle industrial undertones. Think: modern logistics company meets professional consulting firm. White space is generous, typography is confident, and imagery conveys real factory/QC operations.

### Color Palette
- **Primary:** `#1E3A5F` (Deep Navy Blue) - Trust, professionalism
- **Secondary:** `#2D5A87` (Medium Blue) - Supporting actions
- **Accent:** `#E67E22` (Warm Orange) - CTAs, highlights, energy
- **Background:** `#FFFFFF` (White) - Clean base
- **Surface:** `#F8FAFC` (Light Gray) - Cards, sections
- **Text Primary:** `#1F2937` (Dark Gray)
- **Text Secondary:** `#6B7280` (Medium Gray)
- **Success:** `#059669` (Green) - Trust indicators
- **Border:** `#E5E7EB` (Light Border)

### Typography
- **Headings:** Inter (700, 600) - Clean, professional, highly legible
- **Body:** Inter (400, 500) - Consistent reading experience
- **Fallback:** system-ui, -apple-system, sans-serif

### Spatial System
- Base unit: 4px
- Section padding: 80px (desktop), 48px (mobile)
- Container max-width: 1280px
- Grid gap: 24px (desktop), 16px (mobile)
- Card padding: 24px-32px

### Motion Philosophy
- Subtle entrance animations on scroll (fade-up, 400ms ease-out)
- Hover states with smooth transitions (200ms)
- No flashy animations - professional restraint
- Staggered reveals for lists/grids

### Visual Assets
- **Icons:** Lucide React - consistent stroke weight, professional feel
- **Images:** Stock imagery depicting factory operations, quality inspection, shipping/logistics
- **Decorative:** Subtle geometric patterns, thin borders, soft shadows

---

## 3. Layout & Structure

### Page Structure
All pages follow a consistent layout:
1. **Header** - Sticky navigation with logo, nav links, CTA button
2. **Page Content** - Unique content per page
3. **Footer** - Company info, quick links, contact details, trust badges

### Navigation
- Logo (left)
- Nav links: Home, Services, How It Works, Products, Case Studies, Blog, Contact
- CTA button: "Get a Free Quote" (accent color)
- Mobile: Hamburger menu with slide-out drawer

### Responsive Strategy
- Desktop: Full navigation, multi-column layouts
- Tablet (768px): Adjusted spacing, 2-column grids
- Mobile (640px): Single column, hamburger menu, stacked elements

### Page Flow
- Homepage: Hero → Services overview → Process → Products → Problems → Trust → Case Studies → FAQ → CTA → Footer
- Services: Hero → Service cards → Detailed sections → CTA
- How It Works: Hero → Step-by-step process → FAQ → CTA
- Products: Hero → Product categories grid → CTA
- Case Studies: Hero → Case study cards → Testimonials
- Blog: Hero → Blog post grid → Newsletter CTA
- Contact: Hero → Contact form → Map/info → FAQ

---

## 4. Features & Interactions

### Core Features

#### Navigation
- Sticky header that becomes compact on scroll
- Active page highlighting
- Smooth scroll to sections on homepage
- Mobile hamburger menu with overlay

#### Homepage Sections
1. **Hero** - Headline, subheadline, dual CTAs, hero image
2. **Services Grid** - 6 service cards with icons and descriptions
3. **Sourcing Process** - 5-step visual timeline
4. **Products We Source** - Category grid with images
5. **Problems We Solve** - Pain points and solutions
6. **Trust Points** - Stats, certifications, client logos
7. **Case Studies Preview** - 3 featured case studies
8. **FAQ Accordion** - Common questions
9. **CTA Banner** - Final conversion push
10. **Footer** - Full site links and info

#### Inquiry Form
- Fields: Name, Company, Email, Phone, Product Interest, Quantity, Message
- Validation: Required fields, email format, phone format
- States: Default, focused, error, success
- Submission: Loading state, success message, error handling

#### FAQ Accordion
- Click to expand/collapse
- Smooth height animation
- Only one open at a time
- Plus/minus icon indicator

### Interaction Details
- **Buttons:** Scale slightly on hover (1.02), color shift
- **Cards:** Subtle shadow lift on hover
- **Links:** Underline on hover
- **Form inputs:** Border color change on focus
- **Mobile menu:** Slide in from right with overlay

### Error Handling
- Form validation with inline error messages
- Network error handling with retry option
- Empty states for blog/case studies if needed

---

## 5. Component Inventory

### Header
- **Default:** White background, full nav visible
- **Scrolled:** Slightly reduced height, subtle shadow
- **Mobile:** Hamburger icon, collapsed nav

### Footer
- Dark background (`#1E3A5F`)
- 4-column layout (desktop)
- Social links, contact info, quick links
- Copyright and legal links

### Button
- **Primary:** Accent background, white text
- **Secondary:** Navy outline, navy text
- **Ghost:** Transparent, text only
- **States:** Default, hover (darker), active (pressed), disabled (grayed)
- **Sizes:** Small, medium, large

### Card
- White background, subtle border
- Rounded corners (8px)
- Hover: Shadow lift
- Content: Icon, title, description

### Service Card
- Icon (accent color)
- Title (navy, bold)
- Description (gray)
- Optional link

### Process Step
- Number indicator
- Title and description
- Connecting line between steps
- Icon illustration

### Product Category Card
- Image background
- Overlay with category name
- Hover: Slight zoom, darker overlay

### Case Study Card
- Image thumbnail
- Industry tag
- Title and excerpt
- "Read more" link

### FAQ Item
- Question text (clickable)
- Expand/collapse icon
- Answer content (hidden by default)
- Smooth animation

### Form Input
- Label
- Input field
- Helper text (optional)
- Error message (red)
- Focus ring

### Testimonial
- Quote text
- Author name and company
- Optional avatar

---

## 6. Technical Approach

### Framework & Libraries
- **React 18** with functional components and hooks
- **React Router v6** for client-side routing
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vite** for build tooling

### Project Structure
```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── layout/       # Header, Footer, Layout
│   ├── home/         # Homepage section components
│   ├── services/     # Services page components
│   ├── how-it-works/ # How It Works components
│   ├── products/     # Products page components
│   ├── case-studies/ # Case Studies components
│   ├── blog/         # Blog components
│   └── contact/      # Contact page components
├── pages/            # Page-level components
├── lib/              # Utilities
└── data/             # Static data (mock content)
```

### Routing
```
/                   - Homepage
/services           - Services
/how-it-works       - How It Works
/products           - Products We Source
/case-studies       - Case Studies
/blog               - Blog
/contact            - Contact
```

### Database Schema
For inquiry submissions, create a schema for `SourcingInquiries`:
- id (UUID)
- name (string)
- company (string)
- email (string)
- phone (string)
- product_interest (string)
- quantity (string)
- message (text)
- created_at (timestamp)

### API Integration
- Form submissions use database_entity_tool for create operations
- No external API calls needed for static content

### SEO
- Meta title: "China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China"
- Meta description: Professional description of services
- Semantic HTML throughout
- Proper heading hierarchy

---

## 7. Content Strategy

### Homepage Headline
"China Sourcing Agent for Global Buyers"

### Main CTA
"Get a Free Sourcing Quote"

### Service Categories
1. Supplier Identification & Verification
2. Factory Audits & Compliance Checks
3. Quality Control & Inspection
4. Production Follow-up & Management
5. Shipping & Logistics Coordination
6. Custom Sourcing Solutions

### Products We Source
- Electronics & Components
- Home Goods & Appliances
- Furniture & Furnishings
- Textile & Apparel
- Industrial Equipment
- Packaging Materials
- Medical Supplies
- Automotive Parts

### Trust Indicators
- Years of Experience
- Suppliers Verified
- Quality Inspections Completed
- Countries Served
- Client Satisfaction Rate

### FAQ Topics
- How do you verify suppliers?
- What are your inspection standards?
- How do you handle quality issues?
- What are your fees?
- How long does the process take?
- Do you offer guarantees?
