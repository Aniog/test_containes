import { Link } from 'react-router-dom'
import {
  Search, Shield, Eye, Truck, CheckCircle, Globe,
  Factory, BarChart3, Package, FileCheck, Users, Clock,
  AlertTriangle, XCircle, DollarSign, Zap, ChevronRight,
  Star, Quote, ArrowRight, Phone, Mail, MessageSquare,
  Boxes, Wrench, Shirt, Monitor, Sofa, Cog, Leaf, Heart
} from 'lucide-react'

/* ============================
   HERO SECTION
   ============================ */
export function HeroSection() {
  return (
    <section className="relative bg-primary-dark overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Globe className="w-4 h-4" />
              Trusted by 500+ International Buyers
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold text-white leading-[1.1] mb-6">
              China Sourcing Agent
              <br />
              <span className="text-accent">for Global Buyers</span>
            </h1>
            <p className="text-lg text-blue-200 leading-relaxed mb-8 max-w-lg">
              Find reliable suppliers, verify factories, inspect quality, and manage shipping &mdash; 
              all with a local team on the ground in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors text-base"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-colors text-base"
              >
                See How It Works
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/10">
              {[
                { num: '500+', label: 'Buyers Served' },
                { num: '2,000+', label: 'Factories Vetted' },
                { num: '98%', label: 'Satisfaction Rate' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.num}</div>
                  <div className="text-sm text-blue-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <img
                data-strk-img-id="hero-factory-img-7a3b9c"
                data-strk-img="[hero-alt-text]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Modern Chinese factory production line with quality inspection"
                id="hero-alt-text"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-primary">Quality Verified</div>
                  <div className="text-xs text-text-muted">Every supplier pre-screened</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================
   SERVICES SECTION
   ============================ */
const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and evaluate manufacturers that match your exact product requirements, budget, and quality standards.',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    desc: 'On-site factory audits to confirm legitimacy, production capacity, certifications, and compliance with international standards.',
  },
  {
    icon: Eye,
    title: 'Quality Inspection',
    desc: 'In-line and pre-shipment inspections using AQL standards to catch defects before goods leave the factory.',
  },
  {
    icon: BarChart3,
    title: 'Production Monitoring',
    desc: 'Regular progress updates and on-site visits to ensure your order stays on schedule and meets specifications.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics management including freight forwarding, customs clearance, and door-to-door delivery.',
  },
  {
    icon: FileCheck,
    title: 'Sample Management',
    desc: 'We collect, review, and ship product samples so you can evaluate quality before committing to full orders.',
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mt-3 mb-4">
            End-to-End Sourcing Solutions
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From finding the right supplier to delivering goods to your door, we handle every step of the sourcing process in China.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="bg-surface-light rounded-xl p-8 border border-border hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-accent-light rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">{service.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{service.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center text-accent hover:text-accent-hover font-semibold text-sm transition-colors"
          >
            View All Services <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ============================
   HOW IT WORKS SECTION
   ============================ */
const processSteps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Tell Us What You Need',
    desc: 'Share your product specifications, target price, quantity, and quality requirements through our inquiry form.',
  },
  {
    step: '02',
    icon: Search,
    title: 'We Source & Verify Suppliers',
    desc: 'Our team identifies suitable factories, conducts background checks, and verifies certifications and capabilities.',
  },
  {
    step: '03',
    icon: Package,
    title: 'Samples & Negotiation',
    desc: 'We arrange product samples, negotiate pricing on your behalf, and help finalize contract terms.',
  },
  {
    step: '04',
    icon: Eye,
    title: 'Production & QC',
    desc: 'We monitor production progress, conduct quality inspections, and send you detailed reports with photos.',
  },
  {
    step: '05',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We arrange freight, handle customs documentation, and coordinate delivery to your warehouse or port.',
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 bg-surface-light" id="process">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mt-3 mb-4">
            Our 5-Step Sourcing Process
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A clear, structured approach to sourcing from China. No surprises, no shortcuts.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.step} className="text-center relative">
                  <div className="relative z-10 w-16 h-16 bg-white border-2 border-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                    Step {step.step}
                  </div>
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
            className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors"
          >
            Learn More About Our Process
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ============================
   PRODUCTS SECTION
   ============================ */
const productCategories = [
  {
    icon: Monitor,
    title: 'Electronics & Gadgets',
    desc: 'Consumer electronics, LED lighting, phone accessories, smart devices, and power tools.',
    imgId: 'products-electronics-3f8a1b',
    altId: 'products-electronics-alt',
  },
  {
    icon: Sofa,
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, home decor, garden tools, storage solutions, and bathroom fixtures.',
    imgId: 'products-home-garden-9c2d4e',
    altId: 'products-home-alt',
  },
  {
    icon: Shirt,
    title: 'Apparel & Textiles',
    desc: 'Clothing, bags, shoes, sportswear, workwear, and custom fabric manufacturing.',
    imgId: 'products-apparel-5a7b8c',
    altId: 'products-apparel-alt',
  },
  {
    icon: Cog,
    title: 'Industrial & Machinery',
    desc: 'CNC parts, molds, auto components, packaging machines, and custom metal fabrication.',
    imgId: 'products-industrial-1e4f6a',
    altId: 'products-industrial-alt',
  },
  {
    icon: Heart,
    title: 'Health & Beauty',
    desc: 'Cosmetics packaging, personal care products, fitness equipment, and wellness accessories.',
    imgId: 'products-health-beauty-7b9d2c',
    altId: 'products-health-alt',
  },
  {
    icon: Boxes,
    title: 'Promotional & Custom',
    desc: 'Branded merchandise, custom packaging, corporate gifts, event materials, and private-label goods.',
    imgId: 'products-promotional-4c6e8f',
    altId: 'products-promo-alt',
  },
]

export function ProductsSection() {
  return (
    <section className="py-20 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Source</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mt-3 mb-4">
            Products We Source
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            We work across a wide range of industries, connecting you with vetted manufacturers for virtually any product category.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((cat) => {
            const Icon = cat.icon
            return (
              <Link
                key={cat.title}
                to="/products"
                className="group bg-surface-light rounded-xl overflow-hidden border border-border hover:shadow-md transition-shadow"
              >
                <div className="h-48 overflow-hidden bg-surface-gray">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.altId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    id={cat.altId}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-accent" />
                    <h3 className="text-base font-semibold text-text-primary">{cat.title}</h3>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{cat.desc}</p>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center text-accent hover:text-accent-hover font-semibold text-sm transition-colors"
          >
            View All Product Categories <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ============================
   PROBLEMS SECTION
   ============================ */
const problems = [
  {
    icon: XCircle,
    problem: 'Unreliable Suppliers',
    solution: 'We verify every factory on-site, checking licenses, production capacity, and trade history before recommending them.',
  },
  {
    icon: AlertTriangle,
    problem: 'Quality Issues',
    solution: 'Our QC team performs inspections at multiple production stages using international AQL standards.',
  },
  {
    icon: DollarSign,
    problem: 'Overpaying for Products',
    solution: 'We leverage local market knowledge and multiple supplier quotes to negotiate competitive pricing.',
  },
  {
    icon: Clock,
    problem: 'Production Delays',
    solution: 'Regular on-site monitoring and milestone tracking keep your orders on schedule.',
  },
  {
    icon: Globe,
    problem: 'Language & Cultural Barriers',
    solution: 'Our bilingual team bridges communication gaps between you and Chinese manufacturers.',
  },
  {
    icon: Package,
    problem: 'Shipping Complications',
    solution: 'We handle freight, customs documentation, and logistics coordination for smooth delivery.',
  },
]

export function ProblemsSection() {
  return (
    <section className="py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mt-3 mb-4">
              Problems We Solve for Global Buyers
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Sourcing from China comes with real challenges. We have spent over a decade building systems and relationships to solve them.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors"
            >
              Discuss Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="space-y-4">
            {problems.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.problem} className="bg-white rounded-xl p-6 border border-border shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">{item.problem}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        <span className="text-green-700 font-medium">Solution:</span> {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================
   TRUST POINTS SECTION
   ============================ */
const trustPoints = [
  {
    icon: Factory,
    title: 'On-the-Ground Team',
    desc: 'Our staff is based in Shenzhen and Guangzhou, with direct access to China\'s largest manufacturing hubs.',
  },
  {
    icon: Shield,
    title: 'Verified Supplier Network',
    desc: 'Every factory in our network has been personally audited. We verify licenses, certifications, and capabilities.',
  },
  {
    icon: Users,
    title: '500+ International Clients',
    desc: 'We have sourced products for businesses across North America, Europe, Australia, and the Middle East.',
  },
  {
    icon: FileCheck,
    title: 'Transparent Reporting',
    desc: 'Receive detailed inspection reports with photos, videos, and measurements at every stage of production.',
  },
  {
    icon: Clock,
    title: 'Fast Response Times',
    desc: 'We respond to all inquiries within 24 hours. Urgent matters are handled within the same business day.',
  },
  {
    icon: Zap,
    title: 'No Hidden Fees',
    desc: 'Clear, upfront pricing with no surprise charges. You know exactly what you pay for sourcing and QC services.',
  },
]

export function TrustSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Trust SSourcing China</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mt-3 mb-4">
            Built on Reliability and Transparency
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            We earn trust through consistent results, clear communication, and a commitment to protecting your interests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((point) => {
            const Icon = point.icon
            return (
              <div key={point.title} className="flex items-start gap-4 p-6 rounded-xl hover:bg-surface-light transition-colors">
                <div className="w-11 h-11 bg-accent-light rounded-lg flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1.5">{point.title}</h3>
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

/* ============================
   CASE STUDIES SECTION
   ============================ */
const caseStudies = [
  {
    title: 'Electronics Retailer Cuts Costs by 32%',
    industry: 'Consumer Electronics',
    region: 'United States',
    desc: 'A US-based electronics retailer needed to reduce procurement costs without sacrificing product quality. We identified three alternative suppliers in Shenzhen, conducted factory audits, and negotiated a 32% cost reduction.',
    result: '32% cost savings',
    imgId: 'case-electronics-8f2a4c',
    altId: 'case-electronics-alt',
  },
  {
    title: 'Home Goods Brand Launches Private Label',
    industry: 'Home & Garden',
    region: 'Australia',
    desc: 'An Australian home goods brand wanted to launch a private-label product line. We managed the entire process from supplier selection and sample approval to production monitoring and quality inspection.',
    result: '15 SKUs launched',
    imgId: 'case-home-goods-1b3d5e',
    altId: 'case-home-alt',
  },
  {
    title: 'Retail Chain Restores Supply Chain',
    industry: 'Apparel',
    region: 'United Kingdom',
    desc: 'A UK retail chain faced recurring quality issues with their existing supplier. We performed a factory audit, identified the root cause, and transitioned production to a verified manufacturer with improved QC processes.',
    result: '98% defect-free rate',
    imgId: 'case-apparel-6a8c2f',
    altId: 'case-apparel-alt',
  },
]

export function CaseStudiesSection() {
  return (
    <section className="py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Case Studies</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mt-3 mb-4">
            Real Results for Real Businesses
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            See how we have helped international buyers solve sourcing challenges and achieve measurable outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs) => (
            <Link
              key={cs.title}
              to="/case-studies"
              className="group bg-white rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-48 overflow-hidden bg-surface-gray">
                <img
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.altId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cs.title}
                  id={cs.altId}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-accent bg-accent-light px-2.5 py-1 rounded-full">
                    {cs.industry}
                  </span>
                  <span className="text-xs text-text-muted">{cs.region}</span>
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {cs.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{cs.desc}</p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">{cs.result}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-accent hover:text-accent-hover font-semibold text-sm transition-colors"
          >
            View All Case Studies <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ============================
   TESTIMONIALS SECTION
   ============================ */
const testimonials = [
  {
    quote: 'SSourcing China helped us find a reliable electronics supplier in just two weeks. Their factory audit report was thorough and saved us from a potentially bad partnership.',
    name: 'James Mitchell',
    role: 'Procurement Director',
    company: 'TechFlow Electronics, USA',
  },
  {
    quote: 'We were struggling with quality issues from our existing supplier. The SSourcing team conducted a full audit and helped us transition to a better manufacturer. Defect rates dropped to under 2%.',
    name: 'Sarah Lindberg',
    role: 'Supply Chain Manager',
    company: 'NordHome AB, Sweden',
  },
  {
    quote: 'Their production monitoring service gives us peace of mind. We get regular photo and video updates, and the team catches issues before they become expensive problems.',
    name: 'David Tanaka',
    role: 'CEO',
    company: 'Pacific Goods Pty Ltd, Australia',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Client Testimonials</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3 mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <Quote className="w-8 h-8 text-accent mb-4" />
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{t.name}</div>
                  <div className="text-blue-300 text-xs">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================
   FAQ SECTION
   ============================ */
const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'We offer flexible pricing based on project scope. For single-product sourcing, we typically charge a flat fee or a percentage of the order value. Contact us for a customized quote based on your specific needs.',
  },
  {
    q: 'What types of products can you source?',
    a: 'We source virtually any manufactured product from China, including electronics, home goods, apparel, industrial equipment, promotional items, and more. Our network covers over 2,000 verified factories across all major manufacturing regions.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'Our verification process includes on-site factory visits, license and certification checks, production capacity assessment, trade reference verification, and compliance audits. Every factory must pass our evaluation before we recommend them.',
  },
  {
    q: 'What is your typical sourcing timeline?',
    a: 'Initial supplier shortlists are typically provided within 5-7 business days. Sample production takes 7-15 days depending on the product. Production timelines vary by product complexity and order size, usually ranging from 15-45 days.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes. We coordinate the entire shipping process, including freight forwarding (sea, air, or rail), customs documentation, import compliance, and door-to-door delivery to your specified location.',
  },
  {
    q: 'Can you help with small order quantities?',
    a: 'We work with businesses of all sizes. While some factories have minimum order quantities, we maintain relationships with suppliers who accommodate smaller runs, especially for initial orders and product testing.',
  },
]

export function FAQSection() {
  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mt-3 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group bg-surface-light rounded-xl border border-border">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-text-primary font-semibold text-base hover:text-accent transition-colors list-none">
                {faq.q}
                <ChevronRight className="w-5 h-5 text-text-muted group-open:rotate-90 transition-transform shrink-0 ml-4" />
              </summary>
              <div className="px-6 pb-6 -mt-2">
                <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================
   CTA SECTION
   ============================ */
export function CTASection() {
  return (
    <section className="py-20 bg-accent">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Ready to Source Products from China?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Tell us what you need and get a free sourcing quote within 24 hours. No obligation, no hidden fees.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent hover:bg-gray-100 font-semibold rounded-lg transition-colors text-base"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          <a
            href="mailto:info@ssourcingchina.com"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 hover:border-white text-white font-semibold rounded-lg transition-colors text-base"
          >
            <Mail className="w-5 h-5 mr-2" />
            info@ssourcingchina.com
          </a>
        </div>
      </div>
    </section>
  )
}
