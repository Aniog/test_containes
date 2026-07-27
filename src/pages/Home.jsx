import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Shield,
  Search,
  ClipboardCheck,
  Truck,
  Factory,
  Star,
  CheckCircle,
  ChevronRight,
  Building2,
  Package,
  Shirt,
  Cpu,
  HardHat,
  ArrowRight,
  Users,
  Globe,
  Clock,
  FileCheck,
  Phone,
  Mail,
  MessageSquare,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Verification',
    desc: 'Thorough background checks, business license verification, and capability assessments to ensure you partner with reliable suppliers.',
  },
  {
    icon: Factory,
    title: 'Factory Audits',
    desc: 'On-site factory evaluations covering production capacity, quality systems, working conditions, and compliance with international standards.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment inspections, during-production checks, and random sampling to ensure products meet your specifications.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics management including freight forwarding, customs documentation, and consolidated shipping to reduce costs.',
  },
  {
    icon: Shield,
    title: 'Production Follow-Up',
    desc: 'Regular progress tracking, material verification, and real-time updates to keep your production on schedule.',
  },
  {
    icon: Star,
    title: 'Product Sourcing',
    desc: 'Market research, competitive pricing analysis, and identification of the best suppliers for your specific product requirements.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Submit Your Requirements',
    desc: 'Tell us about your product, budget, quantity, and quality standards. We review and plan the best sourcing strategy.',
  },
  {
    step: '02',
    title: 'Supplier Identification',
    desc: 'We research and shortlist qualified suppliers that match your criteria, including factory audits and capability checks.',
  },
  {
    step: '03',
    title: 'Negotiation & Samples',
    desc: 'We negotiate pricing, payment terms, and lead times on your behalf. Sample evaluation ensures quality before production.',
  },
  {
    step: '04',
    title: 'Production Management',
    desc: 'We monitor production progress, conduct quality inspections at key stages, and provide regular status reports.',
  },
  {
    step: '05',
    title: 'Quality Control',
    desc: 'Final inspection before shipment. We check product quality, packaging, labeling, and quantity against your specifications.',
  },
  {
    step: '06',
    title: 'Logistics & Delivery',
    desc: 'We arrange shipping, handle customs documentation, and track delivery until your goods arrive safely.',
  },
]

const productCategories = [
  { icon: Cpu, name: 'Electronics & Components', desc: 'Consumer electronics, PCBs, sensors, and industrial electronic components.' },
  { icon: Package, name: 'Home & Living', desc: 'Furniture, kitchenware, home decor, storage solutions, and household goods.' },
  { icon: Shirt, name: 'Apparel & Accessories', desc: 'Garments, textiles, bags, shoes, and fashion accessories.' },
  { icon: HardHat, name: 'Industrial Parts', desc: 'Machinery parts, hardware tools, automotive components, and metal fabrication.' },
  { icon: Building2, name: 'Packaging Materials', desc: 'Custom packaging, boxes, labels, and sustainable packaging solutions.' },
  { icon: Globe, name: 'Specialty Products', desc: 'Pet supplies, sporting goods, baby products, and promotional items.' },
]

const problems = [
  {
    problem: 'Finding reliable suppliers online is risky.',
    solution: 'We verify every supplier through business license checks, factory visits, and capability assessments before you commit.',
  },
  {
    problem: 'Language and cultural barriers cause misunderstandings.',
    solution: 'Our bilingual team manages all communications, translating your requirements clearly to suppliers.',
  },
  {
    problem: 'Quality often does not match samples.',
    solution: 'We conduct during-production and pre-shipment inspections to ensure finished products match approved samples.',
  },
  {
    problem: 'Production delays disrupt your supply chain.',
    solution: 'We track production schedules weekly and flag potential delays early, keeping you informed at every step.',
  },
  {
    problem: 'Shipping costs and customs are confusing.',
    solution: 'We handle all logistics, from freight booking to customs clearance, optimizing routes to save you money.',
  },
]

const trustPoints = [
  { icon: Users, stat: '500+', label: 'Suppliers Verified' },
  { icon: Globe, stat: '30+', label: 'Countries Served' },
  { icon: CheckCircle, stat: '98%', label: 'Client Satisfaction' },
  { icon: Clock, stat: '8+', label: 'Years Experience' },
  { icon: FileCheck, stat: '2,000+', label: 'Inspections Completed' },
  { icon: Shield, stat: '$50M+', label: 'Procurement Value' },
]

const caseStudies = [
  {
    title: 'European Retail Chain Saves 35% on Home Goods',
    result: 'Reduced supplier costs by 35% while improving product quality through factory audits and consolidated shipping.',
    industry: 'Home & Living',
  },
  {
    title: 'US Tech Startup Sources Custom Electronics',
    result: 'Found a certified electronics manufacturer, passed FCC compliance, and delivered 10,000 units within 8 weeks.',
    industry: 'Electronics',
  },
  {
    title: 'Australian Brand Launches Sustainable Packaging',
    result: 'Sourced eco-friendly packaging materials from verified green factories, reducing carbon footprint by 40%.',
    industry: 'Packaging',
  },
]

const faqs = [
  {
    q: 'What types of products do you source from China?',
    a: 'We source a wide range of products including electronics, home goods, apparel, industrial parts, packaging materials, and specialty items. If you have a specific product in mind, contact us and we will assess feasibility.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'We conduct comprehensive verification including business license validation, on-site factory audits, production capability assessment, quality system evaluation, and reference checks with existing clients.',
  },
  {
    q: 'What are your fees and how do you charge?',
    a: 'Our fee structure is transparent and depends on the scope of services required. We offer service packages starting from supplier verification to full turnkey sourcing management. Contact us for a customized quote.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typical timelines range from 4 to 12 weeks depending on product complexity, supplier selection, sample approval, and production lead time. We provide a detailed timeline at the start of each project.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes, we manage the entire logistics process including freight forwarding, customs documentation, and last-mile delivery. We can arrange sea, air, or express shipping based on your needs and budget.',
  },
  {
    q: 'What quality control measures do you provide?',
    a: 'We offer multi-stage quality control including raw material inspection, during-production checks, pre-shipment inspection, and container loading supervision. Inspections follow AQL (Acceptable Quality Level) standards.',
  },
]

export default function Home() {
  const containerRef = useRef(null)
  const [expandedFaq, setExpandedFaq] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-primary-900 min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="hero-bg-8f2a9c"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/80 to-primary-900/60" />
        <div className="section-container relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent-500/10 border border-accent-500/20 rounded-full px-4 py-1.5 mb-6">
              <Shield className="w-4 h-4 text-accent-500" />
              <span className="text-accent-300 text-sm font-medium">Trusted by importers in 30+ countries</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping. End-to-end sourcing services with complete transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-center text-lg">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/how-it-works" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-primary-900 text-center">
                How It Works
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-10 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent-500" />
                <span>No minimum order</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent-500" />
                <span>Transparent pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent-500" />
                <span>Dedicated account manager</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-neutral-100 py-6">
        <div className="section-container">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-sm text-neutral-500">
            <span className="font-medium text-neutral-400">Trusted by buyers from:</span>
            <span className="font-semibold text-primary-900">United States</span>
            <span className="font-semibold text-primary-900">United Kingdom</span>
            <span className="font-semibold text-primary-900">Germany</span>
            <span className="font-semibold text-primary-900">Australia</span>
            <span className="font-semibold text-primary-900">Canada</span>
            <span className="font-semibold text-primary-900">France</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white" id="services">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our Sourcing Services
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Comprehensive support from supplier discovery to delivery. We manage every step so you can focus on growing your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="card group">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                  <service.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-outline inline-flex items-center gap-2">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-primary-50" id="process">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How We Work
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              A structured, transparent process designed to deliver results. From your initial inquiry to goods arriving at your door.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative pl-14">
                <div className="absolute left-0 top-0 w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step.step}</span>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="absolute left-[18px] top-12 bottom-0 w-0.5 bg-primary-200 hidden md:block" />
                )}
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section-padding bg-white" id="products">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              We source across multiple industries. Our supplier network covers thousands of verified factories throughout China.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat, i) => (
              <div key={i} className="card flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <cat.icon className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{cat.name}</h3>
                  <p className="text-neutral-600 text-sm">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="btn-outline inline-flex items-center gap-2">
              See All Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section-padding bg-primary-900 text-white" id="problems">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Common Sourcing Challenges
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed">
              We resolve the most frequent issues buyers face when sourcing from China.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {problems.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-400 text-xs font-bold">X</span>
                  </div>
                  <p className="text-neutral-200 font-medium">{item.problem}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <p className="text-neutral-400 text-sm">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="section-padding bg-white" id="trust">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {trustPoints.map((point, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <point.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary-900 mb-1">{point.stat}</div>
                <div className="text-sm text-neutral-500">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-primary-50" id="case-studies">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Case Studies
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Real results from real partnerships. See how we have helped businesses source successfully from China.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <div key={i} className="card flex flex-col">
                <div className="mb-4">
                  <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-3">{study.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed flex-1">{study.result}</p>
                <Link to="/case-studies" className="inline-flex items-center gap-1 text-accent-600 font-medium text-sm mt-4 hover:text-accent-700 transition-colors">
                  Read full case study <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/case-studies" className="btn-outline inline-flex items-center gap-2">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white" id="faq">
        <div className="section-container max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Answers to common questions about working with a China sourcing agent.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-neutral-200 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-primary-50 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                >
                  <span className="font-medium text-primary-900 pr-4">{faq.q}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-200 ${
                      expandedFaq === i ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {expandedFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-neutral-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Sourcing from China?
            </h2>
            <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
              Tell us about your product requirements and we will get back to you within 24 hours with a free sourcing assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-lg text-center">
                Get a Free Sourcing Quote
              </Link>
              <a href="mailto:info@ssourcingchina.com" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-primary-900 text-center inline-flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                info@ssourcingchina.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}