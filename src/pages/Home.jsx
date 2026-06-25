import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Search,
  ClipboardCheck,
  Factory,
  Eye,
  Truck,
  ShieldCheck,
  Users,
  Globe,
  Award,
  TrendingDown,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Star,
  ChevronRight,
  Quote,
  Package,
} from 'lucide-react'

// ── Hero Section ──
function HeroSection() {
  return (
    <section className="relative bg-primary-dark overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-home-bg"
        data-strk-bg="China shipping port container yard industrial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-primary-dark/85" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <ShieldCheck className="w-3.5 h-3.5" />
              Trusted by 500+ Global Buyers
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all on the ground in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-medium px-8 py-4 rounded-lg transition-colors text-base"
              >
                See How It Works
              </Link>
            </div>
            {/* Trust badges */}
            <div className="flex items-center gap-8 mt-10 pt-8 border-t border-white/10">
              {[
                { value: '500+', label: 'Projects Delivered' },
                { value: '12+', label: 'Years Experience' },
                { value: '30+', label: 'Countries Served' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/50 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Right side - Image */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="hero-home-img"
                data-strk-img="[hero-home-title] China factory warehouse"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China factory and warehouse operations"
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Factory Verified</div>
                    <div className="text-white/70 text-xs">On-site inspection completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span id="hero-home-title" className="hidden">China Sourcing Agent for Global Buyers</span>
    </section>
  )
}

// ── Services Section ──
const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified suppliers from our verified network across China\'s major manufacturing regions.',
  },
  {
    icon: ClipboardCheck,
    title: 'Factory Verification',
    desc: 'On-site factory visits to verify legitimacy, production capacity, certifications, and compliance with international standards.',
  },
  {
    icon: Eye,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections using AQL standards to catch defects before goods leave the factory.',
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    desc: 'Regular check-ins during manufacturing to ensure timelines, specifications, and quality benchmarks are met.',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'Freight forwarding, customs clearance, and door-to-door delivery coordination for sea, air, and rail shipments.',
  },
  {
    icon: ShieldCheck,
    title: 'Supplier Audits',
    desc: 'Comprehensive audits covering financial health, legal compliance, social responsibility, and quality management systems.',
  },
]

function ServicesSection() {
  return (
    <section className="bg-white py-20 lg:py-28" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            End-to-End Sourcing Services in China
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            From initial supplier search to final delivery, we handle every step of the sourcing process so you can focus on growing your business.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-surface border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{service.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{service.desc}</p>
              </div>
            )
          })}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── Process Section ──
const processSteps = [
  {
    step: '01',
    title: 'Tell Us What You Need',
    desc: 'Share product specs, target price, quantity, and delivery timeline. We review your requirements within 24 hours.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Supplier Matching',
    desc: 'We shortlist qualified suppliers from our vetted network and send you detailed profiles for comparison.',
    icon: Users,
  },
  {
    step: '03',
    title: 'Samples & Negotiation',
    desc: 'We arrange samples, negotiate pricing on your behalf, and help you finalize the best supplier.',
    icon: ClipboardCheck,
  },
  {
    step: '04',
    title: 'Production & QC',
    desc: 'We monitor production progress and conduct inspections at key milestones to ensure quality standards.',
    icon: Factory,
  },
  {
    step: '05',
    title: 'Shipping & Delivery',
    desc: 'We handle packing, customs documentation, freight booking, and track your shipment to destination.',
    icon: Truck,
  },
]

function ProcessSection() {
  return (
    <section className="bg-surface-alt py-20 lg:py-28" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Our 5-Step Sourcing Process
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            A proven, transparent process that minimizes risk and ensures you get the right product at the right price.
          </p>
        </div>
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-border" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.step} className="relative text-center">
                  <div className="relative z-10 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Step {step.step}</div>
                  <h3 className="text-base font-semibold text-text-primary mb-2">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Learn More About Our Process
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── Products We Source Section ──
const productCategories = [
  { name: 'Electronics & Components', desc: 'Consumer electronics, PCBs, LED products, cables, and accessories.' },
  { name: 'Home & Garden', desc: 'Furniture, kitchenware, storage solutions, garden tools, and decor.' },
  { name: 'Apparel & Textiles', desc: 'Clothing, bags, fabrics, shoes, and fashion accessories.' },
  { name: 'Machinery & Parts', desc: 'Industrial equipment, CNC parts, molds, and custom metal components.' },
  { name: 'Promotional Products', desc: 'Custom branded merchandise, trade show giveaways, and corporate gifts.' },
  { name: 'Packaging & Materials', desc: 'Custom boxes, labels, eco-friendly packaging, and packaging machinery.' },
]

function ProductsSection() {
  return (
    <section className="bg-white py-20 lg:py-28" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">What We Source</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Products We Source
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            We source a wide range of products across major manufacturing categories. Don't see your product? Contact us — we can likely help.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((cat) => (
            <div
              key={cat.name}
              className="flex items-start gap-4 bg-surface border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/20 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                <Package className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-text-primary mb-1">{cat.name}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors"
          >
            View All Product Categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── Problems We Solve Section ──
const problems = [
  {
    problem: 'Unreliable suppliers who disappear after payment',
    solution: 'We verify every supplier on-site before you place an order, checking licenses, facilities, and references.',
  },
  {
    problem: 'Quality defects discovered only after goods arrive',
    solution: 'Our QC inspectors check products during and after production, following AQL sampling standards.',
  },
  {
    problem: 'Language and cultural barriers with Chinese factories',
    solution: 'Our bilingual team communicates directly with factories in Mandarin, eliminating misunderstandings.',
  },
  {
    problem: 'Production delays with no visibility or updates',
    solution: 'We provide regular production status reports and intervene early when timelines slip.',
  },
  {
    problem: 'Shipping complications and customs issues',
    solution: 'We handle all logistics documentation, customs clearance, and freight coordination end to end.',
  },
]

function ProblemsSection() {
  return (
    <section className="bg-primary-dark py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">Why Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Common Sourcing Problems We Solve
          </h2>
          <p className="text-white/60 text-base leading-relaxed">
            International sourcing is full of risks. Here's how we protect your business at every step.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-white/80 font-medium text-sm">{item.problem}</p>
              </div>
              <div className="flex items-start gap-3 pl-8">
                <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <p className="text-white/60 text-sm leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Trust Points Section ──
const trustPoints = [
  {
    icon: Globe,
    title: 'On-the-Ground Team',
    desc: 'Our team is based in Guangzhou — China\'s manufacturing hub. We visit factories in person, not remotely.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Supplier Network',
    desc: 'Every supplier in our network has been personally vetted through factory visits and background checks.',
  },
  {
    icon: Users,
    title: '500+ Global Clients',
    desc: 'We\'ve served businesses across 30+ countries, from startups to established brands and retailers.',
  },
  {
    icon: Award,
    title: 'Transparent Reporting',
    desc: 'You receive detailed reports with photos and videos at every stage — no black boxes, no surprises.',
  },
  {
    icon: TrendingDown,
    title: 'Cost Savings',
    desc: 'Our local knowledge and supplier relationships help you negotiate better prices without sacrificing quality.',
  },
  {
    icon: Clock,
    title: 'Fast Response Time',
    desc: 'We respond to all inquiries within 24 hours and provide sourcing quotes within 2-3 business days.',
  },
]

function TrustSection() {
  return (
    <section className="bg-white py-20 lg:py-28" id="trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Built on Trust, Proven by Results
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            We earn your trust through transparency, local expertise, and consistent delivery.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point) => {
            const Icon = point.icon
            return (
              <div key={point.title} className="flex items-start gap-4 p-5">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-text-primary mb-1">{point.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ── Case Studies Section ──
const caseStudies = [
  {
    id: 'electronics-brand',
    title: 'US Electronics Brand',
    subtitle: 'Reduced sourcing costs by 22%',
    desc: 'A mid-size US electronics brand needed to consolidate suppliers for LED lighting products. We identified 3 qualified factories, negotiated pricing, and established a QC process that reduced defect rates from 8% to under 1.5%.',
    tags: ['Electronics', 'Supplier Consolidation', 'Cost Reduction'],
  },
  {
    id: 'european-retailer',
    title: 'European Home Goods Retailer',
    subtitle: 'Launched product line in 12 weeks',
    desc: 'A European retailer wanted to launch a private-label kitchenware line. We sourced 15 SKUs from verified factories, managed samples, oversaw production, and coordinated shipping — all within 12 weeks.',
    tags: ['Home & Garden', 'Private Label', 'Fast Turnaround'],
  },
  {
    id: 'australian-startup',
    title: 'Australian Startup',
    subtitle: 'First-time China sourcing without risk',
    desc: 'An Australian startup with no China sourcing experience needed custom packaging and promotional products. We guided them through every step — supplier selection, sample approval, production monitoring, and shipping.',
    tags: ['Promotional Products', 'First-Time Sourcing', 'Custom Packaging'],
  },
]

function CaseStudiesSection() {
  return (
    <section className="bg-surface-alt py-20 lg:py-28" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">Results</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Case Studies
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            Real projects, real results. See how we've helped businesses source successfully from China.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-md transition-all flex flex-col">
              <div className="h-48 relative">
                <img
                  data-strk-img-id={`case-study-home-${cs.id}`}
                  data-strk-img={`[case-${cs.id}-title] [case-${cs.id}-subtitle]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cs.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">{cs.tags[0]}</span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 id={`case-${cs.id}-title`} className="text-lg font-semibold text-text-primary mb-1">{cs.title}</h3>
                <p id={`case-${cs.id}-subtitle`} className="text-accent font-medium text-sm mb-3">{cs.subtitle}</p>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">{cs.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {cs.tags.slice(1).map((tag) => (
                    <span key={tag} className="bg-surface text-text-muted text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── FAQ Section ──
const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'We offer flexible pricing depending on the scope of work. For supplier sourcing and verification, we charge a flat project fee. For ongoing sourcing and QC, we offer monthly retainer packages. Contact us for a free quote based on your specific needs.',
  },
  {
    q: 'Do I need to visit China to work with you?',
    a: 'No. Our team handles everything on the ground in China — factory visits, inspections, production monitoring, and shipping. We provide detailed reports with photos and videos so you always know what\'s happening.',
  },
  {
    q: 'What industries or products do you specialize in?',
    a: 'We work across a wide range of industries including electronics, home goods, apparel, machinery, packaging, and promotional products. If we don\'t have direct experience in your category, we\'ll be upfront about it.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'Our verification process includes on-site factory visits, business license checks, production capacity assessment, quality management system review, and reference checks with existing clients.',
  },
  {
    q: 'What if there are quality issues with my order?',
    a: 'Our QC inspections catch most issues before shipment. If defects are found during inspection, we work with the factory to rework or replace defective items. We also help negotiate compensation terms in supplier contracts.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Initial supplier shortlisting typically takes 5-7 business days. Sample production takes 7-15 days depending on the product. Full production timelines vary by product complexity and order quantity — we provide detailed timelines upfront.',
  },
]

function FAQSection() {
  return (
    <section className="bg-white py-20 lg:py-28" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group border border-border rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between gap-4 cursor-pointer p-5 text-text-primary font-semibold text-base hover:bg-surface transition-colors list-none">
                {faq.q}
                <ChevronRight className="w-5 h-5 text-text-muted shrink-0 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-5 pb-5 text-text-secondary text-sm leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── CTA / Inquiry Form Section ──
function CTASection() {
  return (
    <section className="bg-surface-alt py-20 lg:py-28" id="inquiry">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg border border-border p-8 lg:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-text-primary mb-3">Get a Free Sourcing Quote</h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Tell us what you need and our team will respond within 24 hours with a sourcing plan and cost estimate.
            </p>
          </div>
          <form className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">Full Name *</label>
              <input type="text" placeholder="John Smith" className="w-full border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">Company Name</label>
              <input type="text" placeholder="Acme Corp" className="w-full border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">Email Address *</label>
              <input type="email" placeholder="john@acmecorp.com" className="w-full border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">Phone / WhatsApp</label>
              <input type="tel" placeholder="+1 234 567 8900" className="w-full border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-text-primary mb-1.5">Product Description *</label>
              <textarea rows={4} placeholder="Describe the product you want to source, including material, size, quantity, and target price." className="w-full border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none" />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-white font-semibold py-4 rounded-lg transition-colors text-base">
                Submit Inquiry
              </button>
              <p className="text-xs text-text-muted text-center mt-3">We'll respond within 24 hours. Your information is kept confidential.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

// ── Main Home Page ──
export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
