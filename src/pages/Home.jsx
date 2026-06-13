import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search,
  Shield,
  ClipboardCheck,
  Factory,
  Ship,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Users,
  Clock,
  DollarSign,
  Star,
  MessageSquare,
  FileText,
  Globe,
  Award,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    icon: Search,
    title: 'Product Sourcing',
    description: 'We find reliable manufacturers matching your product requirements, quality standards, and budget.',
  },
  {
    icon: Shield,
    title: 'Supplier Verification',
    description: 'On-site factory audits to verify business licenses, production capacity, and quality management systems.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure product quality meets your standards.',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    description: 'Regular production monitoring and progress reports to keep your orders on schedule.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including freight forwarding, customs documentation, and delivery tracking.',
  },
]

const processSteps = [
  { step: 1, title: 'Submit Your Request', description: 'Share your product requirements, specifications, and target price.' },
  { step: 2, title: 'Supplier Matching', description: 'We identify and vet suitable manufacturers from our verified network.' },
  { step: 3, title: 'Quotation & Sampling', description: 'Receive competitive quotes and request samples for evaluation.' },
  { step: 4, title: 'Order Confirmation', description: 'Finalize terms, place your order, and we begin production monitoring.' },
  { step: 5, title: 'Quality Control', description: 'Our inspectors check quality at key production stages.' },
  { step: 6, title: 'Shipping & Delivery', description: 'We coordinate logistics and handle all export documentation.' },
]

const productCategories = [
  { title: 'Electronics & Components', description: 'Consumer electronics, PCBs, cables, and electronic accessories.' },
  { title: 'Machinery & Industrial', description: 'Manufacturing equipment, tools, and industrial components.' },
  { title: 'Textiles & Apparel', description: 'Garments, fabrics, accessories, and custom clothing manufacturing.' },
  { title: 'Home & Garden', description: 'Furniture, decor, kitchenware, and outdoor products.' },
  { title: 'Packaging & Printing', description: 'Custom packaging, labels, boxes, and printed materials.' },
  { title: 'Auto Parts & Accessories', description: 'Vehicle components, aftermarket parts, and accessories.' },
]

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    description: 'We verify every factory before you commit, reducing the risk of fraud and poor quality.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    description: 'Transparent pricing with no surprise fees. You know exactly what you are paying for.',
  },
  {
    icon: Clock,
    title: 'Communication Barriers',
    description: 'Bilingual team bridging the language gap between you and Chinese manufacturers.',
  },
  {
    icon: Users,
    title: 'Quality Inconsistency',
    description: 'Professional QC inspections at every stage ensure consistent product quality.',
  },
]

const trustPoints = [
  { icon: Globe, label: '15+ Countries Served' },
  { icon: Award, label: '10+ Years Experience' },
  { icon: Factory, label: '500+ Verified Factories' },
  { icon: ClipboardCheck, label: '2,000+ Inspections Completed' },
]

const caseStudies = [
  {
    title: 'Electronics Manufacturer in Shenzhen',
    industry: 'Consumer Electronics',
    challenge: 'A US retailer needed a reliable factory for custom Bluetooth speakers with strict quality requirements.',
    solution: 'We audited 8 factories, selected the best match, and managed production with weekly QC reports.',
    result: 'Delivered 50,000 units on time with a 98.5% pass rate on pre-shipment inspection.',
  },
  {
    title: 'Apparel Sourcing for European Brand',
    industry: 'Textiles & Apparel',
    challenge: 'A German fashion brand wanted to move production to China but lacked local contacts and quality control.',
    solution: 'We identified 3 suitable garment factories, negotiated pricing, and provided ongoing production monitoring.',
    result: 'Reduced unit cost by 35% while maintaining quality standards across 4 seasonal collections.',
  },
  {
    title: 'Industrial Equipment for Australian Buyer',
    industry: 'Machinery',
    challenge: 'An Australian construction company needed custom hydraulic components with specific certifications.',
    solution: 'We sourced certified manufacturers, arranged factory visits, and coordinated third-party testing.',
    result: 'Successfully delivered ISO-certified components 2 weeks ahead of schedule.',
  },
]

const faqs = [
  {
    question: 'How do you find and verify suppliers?',
    answer: 'We use a multi-step verification process including business license checks, on-site factory audits, production capacity assessment, and reference checks with existing clients. Only factories that pass our criteria are added to our verified network.',
  },
  {
    question: 'What are your service fees?',
    answer: 'Our fees depend on the scope of services required. Product sourcing typically ranges from 5-10% of order value. Quality inspections and factory audits are charged per visit. We provide a detailed quote before any work begins.',
  },
  {
    question: 'Can I visit the factory before placing an order?',
    answer: 'Yes. We can arrange factory visits either in person or via video call. Many of our clients visit shortlisted factories before making a final decision.',
  },
  {
    question: 'How do you handle quality issues?',
    answer: 'If defects are found during inspection, we work with the factory to correct the issues before shipment. We provide detailed inspection reports with photos and recommend corrective actions. Our goal is to catch problems before products leave the factory.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes. We coordinate with freight forwarders to arrange sea, air, or express shipping. We also prepare all necessary export documentation including commercial invoices, packing lists, and certificates of origin.',
  },
  {
    question: 'What is the typical timeline for sourcing a new product?',
    answer: 'Initial supplier identification and quotation usually takes 1-2 weeks. Sampling adds another 2-4 weeks depending on product complexity. Full production timelines vary by order size and factory capacity.',
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-medium text-slate-900 pr-4">{question}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-4 text-slate-600 leading-relaxed">{answer}</div>
      )}
    </div>
  )
}

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Find reliable suppliers, verify factories, inspect quality, and manage shipping — all from one trusted partner based in China.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors text-base"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-500 text-white font-medium rounded-md hover:bg-white/10 transition-colors text-base"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points Bar */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, i) => (
              <div key={i} className="flex items-center gap-3">
                <point.icon className="w-6 h-6 text-blue-700 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-700">{point.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Sourcing Services</h2>
            <p className="mt-4 text-lg text-slate-600">
              End-to-end support for importing from China, from finding suppliers to delivering products to your door.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <div key={i} className="p-6 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                <service.icon className="w-10 h-10 text-blue-700 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors">
              View all services <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">How It Works</h2>
            <p className="mt-4 text-lg text-slate-600">
              A clear, step-by-step process from your initial inquiry to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors">
              Learn more about our process <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Products We Source</h2>
            <p className="mt-4 text-lg text-slate-600">
              We work across a wide range of product categories and industries.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat, i) => (
              <div key={i} className="p-6 rounded-lg bg-slate-50 border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-2">{cat.title}</h3>
                <p className="text-sm text-slate-600">{cat.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors">
              See all product categories <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Problems We Solve</h2>
            <p className="mt-4 text-lg text-slate-300">
              Sourcing from China can be challenging. We remove the common risks and frustrations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {problems.map((problem, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-lg bg-slate-800/50 border border-slate-700">
                <problem.icon className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">{problem.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Case Studies</h2>
            <p className="mt-4 text-lg text-slate-600">
              Real examples of how we have helped buyers source successfully from China.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {caseStudies.map((cs, i) => (
              <div key={i} className="p-6 rounded-lg border border-slate-200 hover:shadow-md transition-all">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded mb-3">
                  {cs.industry}
                </span>
                <h3 className="font-semibold text-slate-900 mb-3">{cs.title}</h3>
                <p className="text-sm text-slate-600 mb-3"><strong>Challenge:</strong> {cs.challenge}</p>
                <p className="text-sm text-slate-600 mb-3"><strong>Result:</strong> {cs.result}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors">
              View all case studies <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-slate-600">
              Common questions about our sourcing services and process.
            </p>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Source from China?</h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Tell us what you need and we will find the right suppliers, verify quality, and manage the entire process for you.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-700 font-semibold rounded-md hover:bg-blue-50 transition-colors text-base"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
