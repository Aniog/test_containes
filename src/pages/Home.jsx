import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { SectionHeader, CTAButton, StatCard, TestimonialCard } from '@/components/common/SharedComponents'
import {
  Search, Shield, ClipboardCheck, Factory, Truck, FileCheck,
  Globe, Users, TrendingUp, Clock, DollarSign, Award,
  Package, BarChart3, Heart, Zap, Eye, Phone
} from 'lucide-react'

/* ─────────────────────────────────────────────
   HERO
   ───────────────────────────────────────────── */
function Hero() {
  const trustPoints = [
    '500+ verified suppliers',
    '10,000+ orders completed',
    'Clients in 40+ countries',
  ]

  return (
    <section className="relative bg-brand-navy overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px'}} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-brand-orange/20 text-brand-orange text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-6">
              Trusted by Global Buyers Since 2012
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent{' '}
              <span className="text-brand-orange">for Global Buyers</span>
            </h1>
            <p className="text-blue-200 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              We help businesses worldwide find reliable suppliers, verify factories, inspect product quality, and manage shipping from China — all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <CTAButton className="text-base px-8 py-4">
                Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
              </CTAButton>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-base"
              >
                See How It Works
              </Link>
            </div>

            <ul className="space-y-2">
              {trustPoints.map((tp) => (
                <li key={tp} className="flex items-center gap-2 text-blue-200 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                  {tp}
                </li>
              ))}
            </ul>
          </div>

          {/* Hero image area */}
          <div className="hidden lg:block relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="Factory quality inspection"
                className="w-full h-auto object-cover"
                data-strk-img-id="hero-factory-inspection"
                data-strk-img="[hero-sub] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            {/* Floating stat cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-trust-green-bg rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-trust-green" />
              </div>
              <div>
                <div className="font-bold text-content-primary text-sm">100% Verified</div>
                <div className="text-content-muted text-xs">Factory Audited</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-orange-light rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-brand-orange" />
              </div>
              <div>
                <div className="font-bold text-content-primary text-sm">30% Cost Savings</div>
                <div className="text-content-muted text-xs">Average for Clients</div>
              </div>
            </div>
            <h2 id="hero-title" className="sr-only">Factory Quality Inspection</h2>
            <p id="hero-sub" className="sr-only">China sourcing agent global buyers</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   TRUST BAR (logos / stats strip)
   ───────────────────────────────────────────── */
function TrustBar() {
  const stats = [
    { value: '500+', label: 'Verified Suppliers' },
    { value: '10,000+', label: 'Orders Completed' },
    { value: '40+', label: 'Countries Served' },
    { value: '98%', label: 'Client Satisfaction' },
  ]

  return (
    <section className="bg-white border-y border-border-light py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   SERVICES OVERVIEW
   ───────────────────────────────────────────── */
function ServicesOverview() {
  const services = [
    {
      icon: Search,
      title: 'Product Sourcing',
      desc: 'We find the right suppliers for your specific products from our network of 500+ verified factories across China.',
    },
    {
      icon: Shield,
      title: 'Supplier Verification',
      desc: 'Comprehensive background checks, license verification, and on-site factory audits to ensure legitimacy.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control',
      desc: 'Pre-production, in-line, and pre-shipment inspections to ensure your products meet specifications.',
    },
    {
      icon: Factory,
      title: 'Factory Audit',
      desc: 'Detailed assessments of production capabilities, equipment, certifications, and working conditions.',
    },
    {
      icon: FileCheck,
      title: 'Production Follow-up',
      desc: 'Real-time monitoring of production progress with weekly updates, photos, and milestone reports.',
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      desc: 'Door-to-door shipping coordination via sea, air, or rail with customs clearance assistance.',
    },
  ]

  return (
    <section className="bg-surface-light py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="What We Do"
          title="End-to-End China Sourcing Services"
          description="From finding the right supplier to delivering products to your warehouse, we handle every step of the sourcing process."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-border-light hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-navy/10 transition-colors">
                <s.icon className="w-6 h-6 text-brand-navy" />
              </div>
              <h3 className="text-lg font-semibold text-content-primary mb-3">{s.title}</h3>
              <p className="text-content-secondary text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <CTAButton to="/services" variant="secondary">
            View All Services <ArrowRight className="ml-2 w-4 h-4" />
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   SOURCING PROCESS
   ───────────────────────────────────────────── */
function SourcingProcess() {
  const steps = [
    { num: '01', title: 'Tell Us What You Need', desc: 'Share your product specifications, target price, quantity, and timeline. We review your requirements within 24 hours.' },
    { num: '02', title: 'Supplier Matching', desc: 'We identify and shortlist suitable suppliers from our verified network, presenting you with options including pricing.' },
    { num: '03', title: 'Sample & Verification', desc: 'We arrange samples, verify supplier credentials, and conduct factory audits so you can make informed decisions.' },
    { num: '04', title: 'Order & Production', desc: 'We negotiate pricing, manage contracts, and monitor production with weekly progress reports and quality checks.' },
    { num: '05', title: 'QC & Shipping', desc: 'Final inspection before shipment, then we coordinate sea/air freight, customs documentation, and door-to-door delivery.' },
  ]

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Process"
          title="How We Work"
          description="A streamlined, transparent 5-step process that removes the complexity from sourcing in China."
        />

        <div className="relative">
          {/* Vertical line connector */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border-light -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className={`relative lg:flex items-center gap-12 ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'} lg:py-8`}
              >
                <div className={`lg:w-5/12 ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-border-light">
                    <span className="inline-block text-brand-orange font-bold text-sm mb-2">Step {step.num}</span>
                    <h3 className="text-xl font-semibold text-content-primary mb-3">{step.title}</h3>
                    <p className="text-content-secondary text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-sm shadow-md">
                    {step.num}
                  </div>
                </div>

                <div className="lg:w-5/12" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <CTAButton>
            Start Your Sourcing Project <ArrowRight className="ml-2 w-4 h-4" />
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   PRODUCTS WE SOURCE
   ───────────────────────────────────────────── */
function ProductsSection() {
  const categories = [
    { icon: Package, title: 'Consumer Electronics', desc: 'Phone accessories, audio equipment, smart devices, and chargers' },
    { icon: Heart, title: 'Home & Garden', desc: 'Furniture, lighting, kitchenware, storage solutions, and decor' },
    { icon: Zap, title: 'Industrial Equipment', desc: 'Machinery, tools, parts, automation components, and safety gear' },
    { icon: BarChart3, title: 'Health & Beauty', desc: 'Skincare, cosmetics, personal care, wellness products, and supplements' },
    { icon: Globe, title: 'Apparel & Textiles', desc: 'Clothing, fabrics, bags, shoes, accessories, and sportswear' },
    { icon: Award, title: 'Promotional Products', desc: 'Custom branded items, corporate gifts, trade show displays, and packaging' },
  ]

  return (
    <section className="bg-surface-light py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Product Categories"
          title="Products We Source"
          description="We source across a wide range of industries and product categories. If it's manufactured in China, we can find it."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              to="/products"
              className="group bg-white rounded-xl p-6 shadow-sm border border-border-light hover:shadow-md hover:border-brand-orange/30 transition-all"
            >
              <div className="w-11 h-11 bg-brand-navy/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-orange/10 transition-colors">
                <cat.icon className="w-5 h-5 text-brand-navy group-hover:text-brand-orange transition-colors" />
              </div>
              <h3 className="font-semibold text-content-primary mb-2 group-hover:text-brand-navy transition-colors">{cat.title}</h3>
              <p className="text-content-secondary text-sm leading-relaxed">{cat.desc}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <CTAButton to="/products" variant="ghost">
            View All Product Categories <ArrowRight className="ml-2 w-4 h-4" />
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   PROBLEMS WE SOLVE
   ───────────────────────────────────────────── */
function ProblemsSolved() {
  const problems = [
    {
      problem: 'Hard to find reliable suppliers in China',
      solution: 'We maintain a vetted network of 500+ verified factories with proven track records.',
      icon: Search,
    },
    {
      problem: 'Language and cultural barriers',
      solution: 'Our bilingual team handles all supplier communications in Mandarin and English.',
      icon: Globe,
    },
    {
      problem: 'Quality issues discovered after shipping',
      solution: 'Multi-stage quality inspections throughout production, before goods leave the factory.',
      icon: Eye,
    },
    {
      problem: 'Unclear production timelines',
      solution: 'Weekly production updates with photos and milestone tracking on every order.',
      icon: Clock,
    },
    {
      problem: 'Uncompetitive pricing from middlemen',
      solution: 'Direct factory relationships mean transparent pricing without unnecessary markups.',
      icon: DollarSign,
    },
    {
      problem: 'Complicated shipping and customs',
      solution: 'We handle all logistics, documentation, customs clearance, and door-to-door delivery.',
      icon: Truck,
    },
  ]

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Why Choose Us"
          title="Problems We Solve"
          description="Sourcing from China comes with real challenges. Here is how we address the most common ones."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((p) => (
            <div key={p.problem} className="flex gap-4 p-5 rounded-xl border border-border-light bg-surface-light/50">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                <p.icon className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <div className="text-sm font-medium text-red-600 mb-1">Challenge: {p.problem}</div>
                <div className="text-sm text-trust-green font-medium flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  {p.solution}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   TRUST POINTS
   ───────────────────────────────────────────── */
function TrustPoints() {
  const points = [
    { icon: Shield, title: 'Licensed & Registered', desc: 'Officially registered sourcing company in Shenzhen, China, with full business licensing.' },
    { icon: Users, title: 'English-Speaking Team', desc: 'Our project managers are fluent in English and experienced in international trade.' },
    { icon: Award, title: 'ISO-Certified Processes', desc: 'Our quality management processes follow ISO 9001 standards for consistent results.' },
    { icon: Eye, title: 'Transparent Operations', desc: 'Full visibility at every stage — no hidden fees, no middlemen, direct communication.' },
  ]

  return (
    <section className="bg-brand-navy py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Why Trust SSourcing China"
          title="Built on Reliability and Transparency"
          description="We know trust is earned. Here is what makes us a dependable sourcing partner."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div key={p.title} className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center mb-5">
                <p.icon className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{p.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   CASE STUDIES PREVIEW
   ───────────────────────────────────────────── */
function CaseStudiesPreview() {
  const cases = [
    {
      title: 'Australian Retailer Reduces Costs by 35%',
      industry: 'Consumer Electronics',
      quote: 'SSourcing helped us consolidate suppliers from 12 to 3, reducing our unit costs by 35% while improving quality consistency.',
      name: 'James Mitchell',
      role: 'Procurement Director',
      company: 'TechMart Australia',
      imgId: 'home-case-electronics',
    },
    {
      title: 'German Brand Launches Product Line in 8 Weeks',
      industry: 'Home & Garden',
      quote: 'From initial sourcing to the first container arriving in Hamburg, the entire process took just 8 weeks. Exceptional coordination.',
      name: 'Anna Schmidt',
      role: 'CEO',
      company: 'HeimDesign GmbH',
      imgId: 'home-case-furniture',
    },
    {
      title: 'US Importer Eliminates Quality Issues',
      industry: 'Health & Beauty',
      quote: 'After switching to SSourcing, our defect rate dropped from 8% to under 1%. Their QC process is thorough and reliable.',
      name: 'Sarah Chen',
      role: 'Operations Manager',
      company: 'PureLife Imports',
      imgId: 'home-case-beauty',
    },
  ]

  return (
    <section className="bg-surface-light py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Success Stories"
          title="Case Studies"
          description="See how we have helped businesses around the world source products from China more effectively."
        />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((c) => (
            <div key={c.title} className="bg-white rounded-xl overflow-hidden shadow-sm border border-border-light">
              <div className="h-48 bg-surface-muted">
                <img
                  alt={c.title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[cs-${c.imgId}-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <span id={`cs-${c.imgId}-title`} className="sr-only">{c.industry} {c.title}</span>
              </div>
              <div className="p-6">
                <span className="inline-block text-brand-orange text-xs font-semibold tracking-wide uppercase mb-2">{c.industry}</span>
                <h3 className="font-semibold text-content-primary mb-3 leading-snug">{c.title}</h3>
                <blockquote className="text-content-secondary text-sm leading-relaxed mb-4">
                  &ldquo;{c.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-border-light">
                  <div className="w-8 h-8 rounded-full bg-brand-navy/10 flex items-center justify-center text-brand-navy font-bold text-xs">
                    {c.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-medium text-xs text-content-primary">{c.name}</div>
                    <div className="text-content-muted text-xs">{c.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <CTAButton to="/case-studies" variant="secondary">
            Read More Case Studies <ArrowRight className="ml-2 w-4 h-4" />
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   FAQ
   ───────────────────────────────────────────── */
function FAQ() {
  const faqs = [
    {
      q: 'How much does your sourcing service cost?',
      a: 'We charge a transparent sourcing fee that typically ranges from 5-10% of the order value, depending on product complexity and volume. There are no hidden charges. We provide a detailed quote before any commitment.',
    },
    {
      q: 'What is the minimum order quantity (MOQ)?',
      a: 'MOQs vary by product and supplier. We work with factories that accept orders as low as 100-500 units for standard products. For custom or specialized items, MOQs may be higher. We always negotiate the lowest possible MOQ for your needs.',
    },
    {
      q: 'How long does the sourcing process take?',
      a: 'Initial supplier shortlisting takes 3-5 business days. Samples typically arrive in 7-14 days. Production lead times vary by product — usually 15-45 days. Total timeline from inquiry to delivery is typically 6-12 weeks.',
    },
    {
      q: 'Do you handle shipping and customs?',
      a: 'Yes. We coordinate the entire shipping process including sea freight, air freight, or rail transport. We handle all customs documentation, export declarations, and can arrange door-to-door delivery to your warehouse.',
    },
    {
      q: 'How do you ensure product quality?',
      a: 'We implement a multi-stage QC process: pre-production sample approval, in-line inspections during manufacturing, and a final pre-shipment inspection with detailed reports and photos. We follow AQL 2.5 standards by default.',
    },
    {
      q: 'Can you sign a Non-Disclosure Agreement (NDA)?',
      a: 'Absolutely. We sign NDAs with all our clients to protect proprietary product designs, business strategies, and supplier relationships. Your intellectual property is treated with the highest confidentiality.',
    },
  ]

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Common Questions"
          title="Frequently Asked Questions"
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-border-light rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-surface-light/50 transition-colors"
      >
        <span className="font-semibold text-sm text-content-primary pr-4">{faq.q}</span>
        <span className="text-content-muted text-xl shrink-0">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="px-5 pb-5 -mt-1">
          <p className="text-content-secondary text-sm leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  )
}

/* ─────────────────────────────────────────────
   FINAL CTA
   ───────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="bg-brand-navy py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
          Ready to Source Products from China?
        </h2>
        <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
          Tell us what you need. We will provide a free, no-obligation sourcing quote within 24 hours, including supplier options and estimated pricing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton className="text-base px-8 py-4">
            Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
          </CTAButton>
          <a
            href="tel:+8675588889999"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-base"
          >
            <Phone className="mr-2 w-5 h-5" />
            Call +86 755 8888 9999
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   HOME PAGE
   ───────────────────────────────────────────── */
export default function Home() {
  return (
    <div>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <SourcingProcess />
      <ProductsSection />
      <ProblemsSolved />
      <TrustPoints />
      <CaseStudiesPreview />
      <FAQ />
      <FinalCTA />
    </div>
  )
}
