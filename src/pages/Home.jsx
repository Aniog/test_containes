import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Truck, Users,
  CheckCircle2, ArrowRight, Star, Globe2, Award, Clock,
  ChevronRight, Zap, Eye, BarChart3, MessageSquare, Package
} from 'lucide-react'

// Services data
const services = [
  {
    icon: Search,
    title: 'Supplier Verification',
    desc: 'We verify supplier credentials, business licenses, and production capabilities before you commit.',
    id: 'supplier-verification',
  },
  {
    icon: Factory,
    title: 'Factory Audits',
    desc: 'On-site factory inspections to assess facilities, equipment, quality systems, and working conditions.',
    id: 'factory-audits',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections to ensure your products meet specifications and standards.',
    id: 'quality-inspection',
  },
  {
    icon: Eye,
    title: 'Production Monitoring',
    desc: 'Regular progress updates and on-site monitoring throughout the manufacturing process.',
    id: 'production-monitoring',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics management including customs clearance, warehousing, and delivery.',
    id: 'shipping',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Support',
    desc: 'Ensure products meet destination country regulations, certifications, and labeling requirements.',
    id: 'compliance',
  },
]

// Sourcing process steps
const processSteps = [
  {
    step: '01',
    title: 'Tell Us What You Need',
    desc: 'Share your product specifications, target price, and quantity requirements.',
    icon: MessageSquare,
  },
  {
    step: '02',
    title: 'We Find & Verify Suppliers',
    desc: 'Our team identifies and verifies qualified suppliers matching your criteria.',
    icon: Search,
  },
  {
    step: '03',
    title: 'Samples & Negotiation',
    desc: 'We arrange samples, negotiate pricing, and finalize contract terms.',
    icon: Package,
  },
  {
    step: '04',
    title: 'Production & QC',
    desc: 'We monitor production and conduct quality inspections at key stages.',
    icon: ClipboardCheck,
  },
  {
    step: '05',
    title: 'Shipping & Delivery',
    desc: 'We coordinate logistics and ensure your goods arrive safely and on time.',
    icon: Truck,
  },
]

// Product categories
const productCategories = [
  { name: 'Electronics & Accessories', id: 'electronics', titleId: 'product-electronics-title', descId: 'product-electronics-desc', desc: 'Consumer electronics, cables, chargers, phone accessories, and smart devices.' },
  { name: 'Home & Garden', id: 'home-garden', titleId: 'product-home-garden-title', descId: 'product-home-garden-desc', desc: 'Furniture, kitchenware, decor, garden tools, and household items.' },
  { name: 'Apparel & Textiles', id: 'apparel', titleId: 'product-apparel-title', descId: 'product-apparel-desc', desc: 'Clothing, fabrics, bags, shoes, and fashion accessories.' },
  { name: 'Industrial Equipment', id: 'industrial', titleId: 'product-industrial-title', descId: 'product-industrial-desc', desc: 'Machinery, tools, spare parts, and manufacturing equipment.' },
  { name: 'Health & Beauty', id: 'health-beauty', titleId: 'product-health-title', descId: 'product-health-desc', desc: 'Cosmetics, personal care products, fitness equipment, and wellness items.' },
  { name: 'Automotive Parts', id: 'automotive', titleId: 'product-auto-title', descId: 'product-auto-desc', desc: 'Auto parts, accessories, tires, and vehicle electronics.' },
]

// Trust points
const trustPoints = [
  { icon: Globe2, value: '15+', label: 'Years of Experience', desc: 'Deep expertise in China sourcing' },
  { icon: Users, value: '500+', label: 'Verified Suppliers', desc: 'Pre-screened supplier network' },
  { icon: Award, value: '98%', label: 'Client Satisfaction', desc: 'Based on client feedback' },
  { icon: Clock, value: '24h', label: 'Response Time', desc: 'Quick quote turnaround' },
]

// Problems we solve
const problems = [
  {
    problem: 'Unreliable suppliers who miss deadlines or deliver substandard products',
    solution: 'We verify every supplier with on-site audits and maintain a vetted supplier database.',
  },
  {
    problem: 'Language and cultural barriers making communication difficult',
    solution: 'Our bilingual team bridges the communication gap between you and Chinese manufacturers.',
  },
  {
    problem: 'Quality issues discovered only after goods arrive at destination',
    solution: 'We conduct multi-stage quality inspections during and after production.',
  },
  {
    problem: 'Complex shipping and customs procedures',
    solution: 'We handle all logistics, documentation, and customs clearance end-to-end.',
  },
]

// Case studies data
const caseStudies = [
  {
    company: 'US Electronics Retailer',
    industry: 'Consumer Electronics',
    result: 'Reduced sourcing costs by 32% while improving product quality scores by 15%.',
    quote: 'SSourcing China transformed our supply chain. Their factory audits alone saved us from two potentially costly supplier mistakes.',
    author: 'James M., Procurement Director',
    imgId: 'case-study-electronics-8f2a9c',
    titleId: 'case-study-electronics-title',
  },
  {
    company: 'European Fashion Brand',
    industry: 'Apparel & Textiles',
    result: 'Reduced lead times by 25% and achieved 99.2% quality acceptance rate on shipments.',
    quote: 'Their production monitoring service gives us complete visibility into our manufacturing process in China.',
    author: 'Sophie L., Sourcing Manager',
    imgId: 'case-study-fashion-4d7e2b',
    titleId: 'case-study-fashion-title',
  },
  {
    company: 'Australian Home Goods Chain',
    industry: 'Home & Garden',
    result: 'Scaled from 5 to 45 product lines with consistent quality across all categories.',
    quote: 'Working with SSourcing China allowed us to confidently expand our product range with reliable Chinese suppliers.',
    author: 'David K., CEO',
    imgId: 'case-study-homegoods-9c1f3a',
    titleId: 'case-study-homegoods-title',
  },
]

// FAQ data
const faqs = [
  {
    q: 'How do you verify suppliers?',
    a: 'We conduct comprehensive verification including business license checks, on-site factory audits, production capability assessment, quality management system reviews, and reference checks with existing clients.',
  },
  {
    q: 'What are your fees?',
    a: 'We offer flexible pricing based on project scope. Initial consultations and supplier matching are free. We charge a transparent sourcing fee that is typically 5-10% of the order value, with no hidden costs.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typical timelines: Supplier identification takes 5-10 business days. Sample production takes 7-15 days depending on the product. Mass production timelines vary by product complexity and quantity.',
  },
  {
    q: 'Do you handle small orders?',
    a: 'Yes, we work with businesses of all sizes. We can source MOQs as low as 100 units for standard products. Contact us to discuss your specific requirements.',
  },
  {
    q: 'What quality control measures do you use?',
    a: 'We implement a multi-stage QC process: pre-production material inspection, in-line production checks, pre-shipment random sampling, and container loading supervision. All inspections follow AQL standards.',
  },
  {
    q: 'Can you help with product development?',
    a: 'Yes, we assist with product design refinement, material selection, prototyping, and production optimization. Our team works closely with factories to bring your product concepts to life.',
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
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative bg-primary-800 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          data-strk-bg-id="hero-bg-6d34fa"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 to-primary-700/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Trusted by 300+ Global Buyers</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-primary-100 mb-8 leading-relaxed">
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping
              from China. One partner for your entire sourcing process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors no-underline shadow-lg"
              >
                Get a Free Sourcing Quote
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-colors no-underline"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TRUST BAR ==================== */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <div className="flex justify-center mb-3">
                  <point.icon className="w-8 h-8 text-primary-500" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-primary-800 mb-1">
                  {point.value}
                </div>
                <div className="text-sm font-semibold text-gray-700 mb-1">{point.label}</div>
                <div className="text-xs text-gray-500">{point.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section id="services" className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-primary-50 text-primary-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              End-to-End China Sourcing Solutions
            </h2>
            <p id="services-subtitle" className="text-gray-600 text-lg">
              We manage every step of your supply chain, from supplier identification to doorstep delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-primary-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-700 font-semibold no-underline"
            >
              View All Services <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS SECTION ==================== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-primary-50 text-primary-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Simple, Transparent Sourcing Process
            </h2>
            <p className="text-gray-600 text-lg">
              Five straightforward steps from inquiry to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="relative text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-5 text-white text-xl font-bold">
                  {step.step}
                </div>
                <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-5 h-5 text-primary-500" />
                </div>
                <h3 className="text-lg font-bold text-primary-800 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-primary-200" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-700 font-semibold no-underline"
            >
              Learn More <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== PRODUCTS WE SOURCE ==================== */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-primary-50 text-primary-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              What We Source
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Products We Source
            </h2>
            <p className="text-gray-600 text-lg">
              We source across a wide range of product categories from vetted Chinese manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="h-48 bg-primary-100 relative overflow-hidden">
                  <img
                    data-strk-img-id={`product-cat-${cat.id}`}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-lg font-bold text-primary-800 mb-2">{cat.name}</h3>
                  <p id={cat.descId} className="text-gray-600 text-sm leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors no-underline"
            >
              View All Product Categories <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== PROBLEMS WE SOLVE ==================== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-warning/10 text-warning px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Problems We Solve
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
                Sourcing from China Shouldn't Be a Risk
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                International buyers face real challenges when sourcing from China. We address each one directly.
              </p>
            </div>

            <div className="space-y-6">
              {problems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Zap className="w-5 h-5 text-warning" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">{item.problem}</p>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <p className="text-gray-600 text-sm">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CASE STUDIES SECTION ==================== */}
      <section id="case-studies" className="bg-primary-800 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results for Global Buyers
            </h2>
            <p className="text-primary-200 text-lg">
              Real outcomes from companies we have helped source from China.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-xl"
              >
                <div className="h-48 bg-primary-100 relative overflow-hidden">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.titleId}] case study factory production`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold bg-primary-50 text-primary-600 px-2 py-0.5 rounded-full">
                      {cs.industry}
                    </span>
                  </div>
                  <h3 id={cs.titleId} className="text-lg font-bold text-primary-800 mb-2">{cs.company}</h3>
                  <p className="text-success font-semibold text-sm mb-3">{cs.result}</p>
                  <blockquote className="text-gray-600 text-sm italic border-l-2 border-primary-200 pl-3 mb-3">
                    "{cs.quote}"
                  </blockquote>
                  <p className="text-gray-500 text-xs font-medium">- {cs.author}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 bg-white text-primary-800 hover:bg-primary-50 px-6 py-3 rounded-lg font-semibold transition-colors no-underline"
            >
              View All Case Studies <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section id="faq" className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-50 text-primary-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Answers to common questions about our China sourcing services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-bold text-primary-800 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="bg-gradient-to-br from-accent to-primary-700 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Source Products from China?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Tell us what you need. We will provide a free sourcing assessment and quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-800 hover:bg-primary-50 px-8 py-4 rounded-lg font-bold text-lg transition-colors no-underline shadow-lg"
            >
              Get a Free Sourcing Quote
              <ArrowRight size={20} />
            </Link>
            <a
              href="mailto:info@ssourcingchina.com"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-colors no-underline"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
