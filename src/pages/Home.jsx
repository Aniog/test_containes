import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Shield, Search, CheckCircle, Truck, BarChart3, Factory, ClipboardCheck, TrendingUp, Package, Clock, Star, Users, ArrowRight, Phone, Mail, MapPin, Send } from 'lucide-react'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    id: 'supplier-verification',
    icon: Search,
    title: 'Supplier Verification',
    desc: 'Thorough background checks on potential suppliers, including business licenses, export history, and client references.',
    imgId: 'service-supplier-verif-8f3a1c',
    color: 'text-brand-500',
    bgColor: 'bg-brand-50',
  },
  {
    id: 'factory-audits',
    icon: Factory,
    title: 'Factory Audits',
    desc: 'On-site inspections to assess production capacity, quality control systems, working conditions, and compliance.',
    imgId: 'service-factory-audit-7b2d4e',
    color: 'text-brand-500',
    bgColor: 'bg-brand-50',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment inspections, during-production checks, and product testing against your specifications.',
    imgId: 'service-quality-insp-9c1e5f',
    color: 'text-brand-500',
    bgColor: 'bg-brand-50',
  },
  {
    id: 'production-monitoring',
    icon: BarChart3,
    title: 'Production Monitoring',
    desc: 'Regular progress updates, milestone tracking, and real-time communication with factory management.',
    imgId: 'service-prod-monitor-6a3d2b',
    color: 'text-brand-500',
    bgColor: 'bg-brand-50',
  },
  {
    id: 'shipping-logistics',
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'End-to-end freight coordination, customs documentation, and door-to-door delivery management.',
    imgId: 'service-shipping-4f8c1a',
    color: 'text-brand-500',
    bgColor: 'bg-brand-50',
  },
  {
    id: 'product-sourcing',
    icon: Package,
    title: 'Product Sourcing',
    desc: 'Market research, supplier shortlisting, price negotiation, and sample coordination for new products.',
    imgId: 'service-product-src-5e9b2d',
    color: 'text-brand-500',
    bgColor: 'bg-brand-50',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Submit Your Requirements',
    desc: 'Tell us about the products you need, quantities, quality standards, and budget. We review and clarify within 24 hours.',
  },
  {
    step: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'We identify and vet potential suppliers using our database, trade records, and industry networks. You receive a curated shortlist.',
  },
  {
    step: '03',
    title: 'Factory Verification',
    desc: 'We conduct on-site audits or remote verification of shortlisted factories, checking capacity, certifications, and quality systems.',
  },
  {
    step: '04',
    title: 'Sampling & Negotiation',
    desc: 'We coordinate samples, facilitate price negotiations, and help finalize terms that protect your interests.',
  },
  {
    step: '05',
    title: 'Production & QC Monitoring',
    desc: 'During production, we perform regular inspections, track milestones, and provide detailed progress reports.',
  },
  {
    step: '06',
    title: 'Shipping & Delivery',
    desc: 'We handle cargo consolidation, export documentation, freight booking, and last-mile delivery to your door.',
  },
]

const productCategories = [
  {
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, semiconductors, cables, and electronic components.',
    imgId: 'prod-electronics-3a7f8b',
  },
  {
    title: 'Home & Kitchen',
    desc: 'Household appliances, kitchenware, furniture, home decor, and storage solutions.',
    imgId: 'prod-home-kitchen-9b2c4d',
  },
  {
    title: 'Apparel & Textiles',
    desc: 'Garments, fabrics, accessories, footwear, and technical textiles.',
    imgId: 'prod-apparel-6e1f3a',
  },
  {
    title: 'Industrial Equipment',
    desc: 'Machinery, tools, industrial components, automation equipment, and spare parts.',
    imgId: 'prod-industrial-8d4a2c',
  },
  {
    title: 'Packaging & Materials',
    desc: 'Custom packaging, raw materials, labels, and sustainable packaging solutions.',
    imgId: 'prod-packaging-5f9b1e',
  },
  {
    title: 'Auto Parts & Accessories',
    desc: 'Automotive components, aftermarket parts, accessories, and EV components.',
    imgId: 'prod-auto-2c6e8a',
  },
]

const problems = [
  {
    icon: Shield,
    title: 'Worried about supplier reliability?',
    desc: 'We verify every supplier\'s credentials, past performance, and legal standing before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality concerns with overseas manufacturing?',
    desc: 'Our QC inspectors check production at every stage against your agreed specifications.',
  },
  {
    icon: Clock,
    title: 'Delays and missed deadlines?',
    desc: 'We monitor production schedules and keep you updated with weekly progress reports.',
  },
  {
    icon: BarChart3,
    title: 'Hidden costs and communication gaps?',
    desc: 'Transparent pricing, no hidden fees, and dedicated English-speaking account managers.',
  },
]

const trustPoints = [
  { icon: Users, value: '500+', label: 'Suppliers Vetted' },
  { icon: CheckCircle, value: '98%', label: 'On-Time Delivery Rate' },
  { icon: Star, value: '4.9/5', label: 'Client Satisfaction Score' },
  { icon: TrendingUp, value: '200+', label: 'Successful Projects' },
]

const caseStudies = [
  {
    title: 'Electronics Component Sourcing for European Distributor',
    desc: 'Sourced 15 SKUs of electronic components from 8 verified factories, reducing procurement costs by 22% and ensuring RoHS compliance.',
    result: '22% cost reduction',
    industry: 'Electronics',
    imgId: 'case-electronics-4f8d2b',
  },
  {
    title: 'Home Textile Line for US Retail Chain',
    desc: 'Identified and audited 12 textile factories, shortlisted 3, managed sampling and production for a 50,000-unit order with strict quality standards.',
    result: '50,000 units delivered on time',
    industry: 'Home Textiles',
    imgId: 'case-textiles-7a3c1e',
  },
  {
    title: 'Industrial Equipment Parts for Australian Manufacturer',
    desc: 'Found replacement parts suppliers for legacy equipment, conducted factory audits, and set up regular QC inspection protocols.',
    result: '30% savings on parts',
    industry: 'Industrial',
    imgId: 'case-industrial-9b5e2d',
  },
]

const faqs = [
  {
    q: 'What makes SSourcing China different from other sourcing agents?',
    a: 'We combine deep local manufacturing knowledge with transparent communication. Every client gets a dedicated account manager, regular inspection reports, and real-time production updates. We do not mark up factory prices - our fee structure is clear from the start.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'We conduct comprehensive checks including business license verification, factory site inspections, production capacity assessment, quality management system review, and client reference checks. We also verify export history and compliance with international standards.',
  },
  {
    q: 'What is the typical cost of your services?',
    a: 'Our fees depend on the scope of work, product complexity, and project duration. We offer flexible engagement models: per-project fees, commission-based, or retainer arrangements. Contact us for a customized quote with no obligation.',
  },
  {
    q: 'How do you handle quality control?',
    a: 'We follow a multi-stage QC process: raw material inspection, in-production checks, pre-shipment inspection, and final quality audit. Inspections are conducted against your approved samples and specifications, with detailed photo reports and test results.',
  },
  {
    q: 'What industries do you specialize in?',
    a: 'We work across multiple industries including electronics, home goods, apparel, industrial equipment, packaging, automotive parts, and consumer products. Our network of verified suppliers covers most manufacturing sectors in China.',
  },
  {
    q: 'What is the minimum order quantity you handle?',
    a: 'We handle projects of all sizes, from small-batch production runs to large-volume manufacturing. MOQ requirements vary by product category and factory capability. We\'ll help you find suppliers that match your volume needs.',
  },
  {
    q: 'How long does the sourcing process typically take?',
    a: 'Initial supplier shortlisting takes 1-2 weeks. Factory verification and sampling can take 2-4 weeks. Production time depends on product complexity, typically 4-12 weeks. We provide timeline estimates during the initial consultation.',
  },
  {
    q: 'Do you handle shipping and customs documentation?',
    a: 'Yes, we manage the entire logistics process including freight booking, export documentation, customs clearance, and delivery to your specified destination. We work with major freight forwarders to offer competitive shipping rates.',
  },
]

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-neutral-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-sm font-medium text-neutral-900 pr-4">{question}</span>
        <ChevronRight className={cn(
          'h-4 w-4 text-neutral-400 flex-shrink-0 transition-transform duration-200',
          isOpen && 'rotate-90'
        )} />
      </button>
      <div className={cn(
        'overflow-hidden transition-all duration-300',
        isOpen ? 'max-h-96 pb-5' : 'max-h-0'
      )}>
        <p className="text-sm text-neutral-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState(null)
  const containerRef = useRef(null)
  const heroRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-neutral-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="hero-bg-home-8f2a9c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/70 to-neutral-900/60" />
        <div className="relative container-page py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <span className="inline-block text-brand-300 text-sm font-medium mb-4 tracking-wider uppercase">
              China-Based Sourcing Agent
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-10 max-w-xl">
              We help international businesses find reliable Chinese suppliers, verify factories, control quality, and manage shipping — so you can source with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="xl" variant="accent">
                  Get a Free Sourcing Quote
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="xl" variant="secondary">
                  How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-neutral-100">
        <div className="container-page py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <div className="flex justify-center mb-2">
                  <point.icon className="h-6 w-6 text-brand-500" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-neutral-900">{point.value}</div>
                <div className="text-sm text-neutral-500 mt-1">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container-page">
          <div className="text-center mb-14">
            <h2 className="section-title">Sourcing Services</h2>
            <p className="section-subtitle">End-to-end support from supplier discovery to final delivery</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.id} className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-lg transition-shadow">
                  <div className={cn('w-12 h-12 rounded-lg flex items-center justify-center mb-4', service.bgColor)}>
                    <Icon className={cn('h-6 w-6', service.color)} />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{service.desc}</p>
                </div>
              )
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button size="lg">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-page">
          <div className="text-center mb-14">
            <h2 className="section-title">Problems We Solve</h2>
            <p className="section-subtitle">Common challenges importers face when sourcing from China</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem) => {
              const Icon = problem.icon
              return (
                <div key={problem.title} className="flex gap-5 p-6 rounded-xl border border-neutral-100 bg-neutral-50">
                  <div className="w-12 h-12 rounded-lg bg-accent-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-accent-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">{problem.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{problem.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container-page">
          <div className="text-center mb-14">
            <h2 className="section-title">How Sourcing Works</h2>
            <p className="section-subtitle">A structured, transparent process from inquiry to delivery</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 -translate-x-1/2" />
            <div className="space-y-8 lg:space-y-12">
              {processSteps.map((step, index) => (
                <div key={step.step} className={cn(
                  'flex flex-col lg:flex-row items-center gap-6 lg:gap-10',
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                )}>
                  <div className={cn(
                    'flex-1 bg-white rounded-xl border border-neutral-200 p-6 lg:p-8',
                    index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                  )}>
                    <span className="text-brand-500 text-sm font-bold tracking-wider">{step.step}</span>
                    <h3 className="text-lg font-semibold text-neutral-900 mt-1 mb-2">{step.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-brand-500 text-white text-sm font-bold flex-shrink-0 z-10 shadow-md">
                    {step.step}
                  </div>
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button size="lg" variant="outline">
                View Detailed Process
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-page">
          <div className="text-center mb-14">
            <h2 className="section-title">Products We Source</h2>
            <p className="section-subtitle">Across major manufacturing categories in China</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category) => (
              <div key={category.title} className="group relative rounded-xl overflow-hidden border border-neutral-200 bg-neutral-50 p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-brand-500" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{category.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{category.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products">
              <Button size="lg" variant="outline">
                View All Categories
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container-page">
          <div className="text-center mb-14">
            <h2 className="section-title">Recent Case Studies</h2>
            <p className="section-subtitle">Real results from our sourcing engagements</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <div key={study.title} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-neutral-100 relative overflow-hidden">
                  <div
                    className="absolute inset-0"
                    data-strk-bg-id={study.imgId}
                    data-strk-bg={`[${study.imgId}-title] [${study.imgId}-desc]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="600"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-brand-500 uppercase tracking-wider">{study.industry}</span>
                  <h3 id={`${study.imgId}-title`} className="text-base font-semibold text-neutral-900 mt-1 mb-2">
                    {study.title}
                  </h3>
                  <p id={`${study.imgId}-desc`} className="text-sm text-neutral-500 leading-relaxed mb-4">
                    {study.desc}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-500">
                    <CheckCircle className="h-4 w-4" />
                    {study.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies">
              <Button size="lg" variant="outline">
                View All Case Studies
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">Common questions about sourcing from China with our help</p>
            </div>
            <div className="bg-neutral-50 rounded-xl border border-neutral-200 px-6">
              {faqs.map((faq) => (
                <FAQItem
                  key={faq.q}
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openFAQ === faq.q}
                  onClick={() => setOpenFAQ(openFAQ === faq.q ? null : faq.q)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Inquiry Form */}
      <section className="py-16 md:py-24 bg-neutral-900">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Sourcing?
              </h2>
              <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
                Tell us about your project and get a free, no-obligation quote within 24 hours.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder-neutral-400"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder-neutral-400"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1.5">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder-neutral-400"
                    placeholder="Your company name"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="product" className="block text-sm font-medium text-neutral-700 mb-1.5">Product Description *</label>
                  <textarea
                    id="product"
                    name="product"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder-neutral-400"
                    placeholder="Describe the products you want to source, estimated quantities, target price range, and any specific requirements..."
                  />
                </div>
                <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <Button type="submit" size="xl" variant="accent">
                    <Send className="h-5 w-5" />
                    Submit Inquiry
                  </Button>
                  <span className="text-sm text-neutral-400">We respond within 24 hours</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}