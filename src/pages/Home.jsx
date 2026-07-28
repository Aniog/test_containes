import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  Shield, Search, ClipboardCheck, Truck, Factory, 
  CheckCircle, Star, ArrowRight, ChevronRight, 
  Package, Globe, HeadphonesIcon, BarChart3,
  Building2, Ship, HardHat, FileSearch, Users,
  ChevronDown, Phone, Mail
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Verification',
    desc: 'We vet and verify Chinese suppliers through business licenses, trade records, and background checks to ensure you work with reliable partners.',
  },
  {
    icon: Building2,
    title: 'Factory Audits',
    desc: 'On-site factory audits assess production capacity, quality control systems, working conditions, and compliance with international standards.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment inspections, during-production checks, and lab testing to ensure products meet your specifications and quality requirements.',
  },
  {
    icon: HardHat,
    title: 'Production Monitoring',
    desc: 'Dedicated project managers track your production progress, resolve issues, and provide regular updates throughout the manufacturing process.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics support including freight forwarding, customs documentation, consolidation, and door-to-door delivery arrangements.',
  },
  {
    icon: FileSearch,
    title: 'Product Sourcing',
    desc: 'Comprehensive market research and supplier matching to find the best manufacturers for your specific product requirements and budget.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Submit Your Requirements',
    desc: 'Tell us about your product, budget, quality standards, and target market. We\'ll review and prepare a tailored sourcing plan.',
  },
  {
    step: '02',
    title: 'Supplier Matching',
    desc: 'We research and shortlist qualified suppliers that match your criteria. You receive detailed profiles and recommendations.',
  },
  {
    step: '03',
    title: 'Verification & Sampling',
    desc: 'We conduct factory audits, verify credentials, and coordinate sample production. You evaluate samples before committing.',
  },
  {
    step: '04',
    title: 'Order & Production',
    desc: 'Once approved, we negotiate terms, manage contracts, and monitor production to ensure quality and timeline adherence.',
  },
  {
    step: '05',
    title: 'Inspection & Shipping',
    desc: 'We perform quality inspections, arrange packaging, handle customs documentation, and coordinate shipping to your destination.',
  },
  {
    step: '06',
    title: 'Delivery & Support',
    desc: 'After delivery, we remain available for warranty issues, repeat orders, and ongoing supplier relationship management.',
  },
]

const productCategories = [
  { name: 'Electronics & Components', desc: 'Consumer electronics, PCBs, semiconductors, IoT devices' },
  { name: 'Home & Living', desc: 'Furniture, kitchenware, home decor, lighting, bedding' },
  { name: 'Apparel & Textiles', desc: 'Garments, fabrics, accessories, footwear, technical textiles' },
  { name: 'Industrial Parts', desc: 'Machinery components, hardware, tools, automotive parts' },
  { name: 'Packaging Materials', desc: 'Boxes, labels, containers, sustainable packaging' },
  { name: 'Health & Beauty', desc: 'Cosmetics, supplements, personal care, medical supplies' },
]

const problems = [
  {
    icon: Users,
    title: 'Unreliable Suppliers',
    desc: 'Many Chinese suppliers are not what they claim. We verify credentials, conduct factory visits, and check trade records to ensure you partner with legitimate manufacturers.',
  },
  {
    icon: BarChart3,
    title: 'Quality Inconsistency',
    desc: 'Products that look great in samples can arrive with defects. Our on-site QC inspectors catch issues before shipments leave the factory.',
  },
  {
    icon: Globe,
    title: 'Language & Culture Barriers',
    desc: 'Miscommunication leads to costly mistakes. Our bilingual team bridges the gap between you and Chinese suppliers with clear, accurate communication.',
  },
  {
    icon: Shield,
    title: 'Payment & IP Risks',
    desc: 'Advance payments and unprotected designs are common risks. We help structure secure payment terms and protect your intellectual property.',
  },
]

const trustPoints = [
  { icon: Building2, stat: '500+', label: 'Factories Verified' },
  { icon: Ship, stat: '2,000+', label: 'Shipments Coordinated' },
  { icon: ClipboardCheck, stat: '98%', label: 'Client Satisfaction' },
  { icon: Star, stat: '8+ Years', label: 'Industry Experience' },
]

const caseStudies = [
  {
    title: 'European Electronics Brand',
    category: 'Consumer Electronics',
    result: '40% cost reduction',
    desc: 'Sourced PCB components and established quality control protocols for a German electronics company, reducing their production costs while maintaining EU quality standards.',
    imgId: 'case-study-electronics-7a3b2c',
  },
  {
    title: 'US Home Goods Retailer',
    category: 'Home & Living',
    result: '3x product range',
    desc: 'Expanded product categories from 20 to 60 SKUs by connecting a US retailer with specialized Chinese manufacturers, with full QC and logistics support.',
    imgId: 'case-study-homegoods-8d4e1f',
  },
  {
    title: 'Australian Fashion Label',
    category: 'Apparel',
    result: 'On-time delivery 95%',
    desc: 'Managed end-to-end production of a seasonal apparel line across 5 factories, achieving 95% on-time delivery rate through rigorous production monitoring.',
    imgId: 'case-study-apparel-5f9g2h',
  },
]

const faqs = [
  {
    q: 'What types of products do you source?',
    a: 'We source a wide range of products including electronics, home goods, apparel, industrial parts, packaging materials, and more. If you have a specific product in mind, contact us and we\'ll assess feasibility.',
  },
  {
    q: 'How much do your services cost?',
    a: 'Our fees are transparent and based on the scope of work. We offer free initial consultations and customized quotes. Contact us for a detailed proposal tailored to your project.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'We conduct comprehensive verification including business license checks, factory site visits, trade record analysis, production capacity assessment, and reference checks with existing clients.',
  },
  {
    q: 'What is the typical timeline?',
    a: 'Timelines vary by product complexity. Initial supplier matching takes 1-2 weeks, sampling 2-4 weeks, and production 4-12 weeks depending on order size and product type.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes, we coordinate all shipping arrangements including freight forwarding, customs documentation, insurance, and door-to-door delivery. We work with major logistics providers.',
  },
  {
    q: 'What if there\'s a quality issue?',
    a: 'Our inspection protocols catch issues before shipment. If problems arise, we mediate between you and the supplier to resolve them, including facilitating returns or replacements.',
  },
]

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-brand-600 overflow-hidden">
        <div className="absolute inset-0">
          <div
            data-strk-bg-id="hero-bg-a1b2c3"
            data-strk-bg="[hero-heading] [hero-subtitle]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            className="absolute inset-0 bg-cover bg-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-200">Trusted by buyers in 30+ countries</span>
            </div>
            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories, 
              inspect quality, monitor production, and coordinate shipping — so you 
              can source from China with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="accent" size="lg" className="text-base">
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="text-base border-white/30 text-white hover:bg-white/10 hover:text-white">
                  How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <div className="flex justify-center mb-2">
                  <point.icon className="w-6 h-6 text-accent-500" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-brand-500">{point.stat}</div>
                <div className="text-sm text-gray-500 mt-1">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              End-to-end sourcing support from supplier discovery to final delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-brand-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Problems We Solve</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Common challenges of sourcing from China — and how we address them
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {problems.map((problem) => (
              <div key={problem.title} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                  <problem.icon className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              A clear, structured process from your initial inquiry to final delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="relative p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                <span className="text-4xl font-bold text-brand-100 absolute top-4 right-4 leading-none">
                  {step.step}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 relative">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed relative">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Products We Source</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              We source across a wide range of industries and product categories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {productCategories.map((cat) => (
              <div key={cat.name} className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <Package className="w-5 h-5 text-accent-500 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{cat.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{cat.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products">
              <Button variant="outline">
                View All Categories
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Case Studies</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Real results from real partnerships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[cs-title-${cs.imgId}] [cs-category-${cs.imgId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span id={`cs-category-${cs.imgId}`} className="text-xs font-medium text-accent-500 uppercase tracking-wider">{cs.category}</span>
                  <h3 id={`cs-title-${cs.imgId}`} className="text-base font-semibold text-gray-900 mt-1 mb-2">{cs.title}</h3>
                  <p className="text-sm text-green-600 font-medium mb-2">{cs.result}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{cs.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/case-studies">
              <Button variant="outline">
                View All Case Studies
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-lg border border-gray-100 shadow-sm">
                <summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-medium text-gray-900 hover:text-brand-500">
                  {faq.q}
                  <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-2" />
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-lg text-brand-200 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation consultation. Tell us about your project and we'll create a tailored sourcing plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="accent" size="lg" className="text-base">
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+86-1234567890" className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md text-base font-medium border border-white/30 text-white hover:bg-white/10 transition-colors">
              <Phone className="w-5 h-5" />
              Call +86 123 4567 890
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}