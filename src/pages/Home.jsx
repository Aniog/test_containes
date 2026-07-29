import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search,
  Shield,
  ClipboardCheck,
  Truck,
  TrendingUp,
  AlertTriangle,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Globe,
  Award,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'
import SourcingInquiryForm from '@/components/SourcingInquiryForm'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate reliable manufacturers across China based on your product specifications and requirements.',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site audits to verify business licenses, production capacity, quality systems, and social compliance.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your standards.',
  },
  {
    icon: TrendingUp,
    title: 'Production Follow-up',
    description: 'Regular progress monitoring and reporting to keep your orders on schedule and on track.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including freight forwarding, customs clearance, and delivery tracking.',
  },
]

const products = [
  'Electronics & Components',
  'Machinery & Industrial Equipment',
  'Textiles & Apparel',
  'Home & Garden Products',
  'Automotive Parts',
  'Packaging Materials',
  'Consumer Goods',
  'Building Materials',
]

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    description: 'We verify every supplier before you commit, reducing the risk of fraud and poor quality.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    description: 'Transparent pricing with no surprises. We help you understand the true cost of sourcing from China.',
  },
  {
    icon: Clock,
    title: 'Communication Barriers',
    description: 'Our bilingual team bridges the language gap and ensures clear communication throughout the process.',
  },
  {
    icon: Shield,
    title: 'Quality Concerns',
    description: 'Multi-stage inspections catch issues early, before products leave the factory.',
  },
]

const trustPoints = [
  { icon: Globe, stat: '50+', label: 'Countries Served' },
  { icon: Users, stat: '2,000+', label: 'Suppliers Verified' },
  { icon: Award, stat: '15+', label: 'Years Experience' },
  { icon: Star, stat: '98%', label: 'Client Satisfaction' },
]

const caseStudies = [
  {
    title: 'Electronics Manufacturer Sourcing',
    industry: 'Consumer Electronics',
    challenge: 'A US-based startup needed a reliable manufacturer for custom PCB assemblies with strict quality requirements.',
    solution: 'We identified 5 qualified suppliers, conducted on-site audits, and negotiated favorable terms.',
    result: 'Client reduced unit cost by 22% and achieved consistent quality across 50,000+ units.',
  },
  {
    title: 'Textile Supply Chain Optimization',
    industry: 'Apparel & Textiles',
    challenge: 'A European fashion brand faced recurring quality issues and delayed shipments from their existing supplier.',
    solution: 'We sourced alternative factories, implemented pre-shipment inspections, and set up production monitoring.',
    result: 'Defect rate dropped from 8% to under 1%, and on-time delivery improved to 96%.',
  },
  {
    title: 'Industrial Equipment Procurement',
    industry: 'Manufacturing',
    challenge: 'An Australian company needed custom CNC machines with specific technical specifications.',
    solution: 'We verified factory capabilities, supervised production, and arranged specialized freight forwarding.',
    result: 'Equipment delivered on spec, 15% below initial budget, with full documentation and warranty.',
  },
]

const faqs = [
  {
    question: 'How do you find and verify suppliers?',
    answer: 'We use a multi-step verification process that includes business license checks, on-site factory audits, production capacity assessment, quality system evaluation, and reference checks with existing clients. Every supplier in our network has been thoroughly vetted before we recommend them.',
  },
  {
    question: 'What types of products can you source?',
    answer: 'We source a wide range of products including electronics, machinery, textiles, home goods, automotive parts, packaging materials, consumer goods, and building materials. If you have a specific product in mind, contact us and we will let you know if we can help.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Typical sourcing timelines range from 2-4 weeks for supplier identification and verification. Production lead times vary by product complexity and order volume. We provide realistic timelines upfront and keep you informed throughout the process.',
  },
  {
    question: 'What are your fees?',
    answer: 'Our pricing depends on the scope and complexity of your sourcing needs. We offer transparent pricing with no hidden costs. Contact us for a free quote tailored to your specific requirements.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we provide end-to-end shipping coordination including freight forwarding, customs documentation, and delivery tracking. We work with trusted logistics partners to ensure your goods arrive safely and on time.',
  },
  {
    question: 'Can I visit the factories myself?',
    answer: 'Absolutely. We encourage factory visits and can arrange everything from transportation to translation services. Many of our clients visit their suppliers before placing orders, and we are happy to facilitate this.',
  },
]

export default function Home() {
  const containerRef = useRef(null)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-slate-800"
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
              We handle the complexity so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg text-base font-semibold text-center transition-colors"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="border border-slate-500 hover:border-white text-white px-8 py-3.5 rounded-lg text-base font-semibold text-center transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {trustPoints.map((point, i) => (
              <div key={i} className="text-center">
                <point.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-slate-900">{point.stat}</div>
                <div className="text-sm text-slate-500 mt-1">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Our Sourcing Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              End-to-end sourcing support from supplier discovery to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <service.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A clear, structured process from your initial inquiry to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need. Share product specs, quantities, and target pricing.' },
              { step: '02', title: 'Supplier Matching', desc: 'We identify and verify qualified suppliers that match your requirements.' },
              { step: '03', title: 'Quality Assurance', desc: 'Inspections and production monitoring ensure your standards are met.' },
              { step: '04', title: 'Delivery', desc: 'We coordinate shipping and customs clearance to get your goods to you.' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-5xl font-bold text-blue-100 mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors">
              Learn More About Our Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Products We Source</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We source across multiple industries. Here are some of the product categories we handle regularly.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product, i) => (
              <div key={i} className="bg-white rounded-lg p-4 text-center border border-slate-200 hover:border-blue-300 transition-colors">
                <span className="text-sm font-medium text-slate-700">{product}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products-we-source" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors">
              See All Product Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Problems We Solve</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Sourcing from China can be challenging. We address the most common issues buyers face.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-xl border border-slate-200 bg-white">
                <problem.icon className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{problem.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Case Studies</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Real results from real clients. See how we have helped businesses source from China successfully.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-slate-200">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{cs.industry}</span>
                <h3 className="text-lg font-semibold text-slate-900 mt-2 mb-3">{cs.title}</h3>
                <p className="text-sm text-slate-600 mb-3"><strong>Challenge:</strong> {cs.challenge}</p>
                <p className="text-sm text-slate-600 mb-3"><strong>Result:</strong> {cs.result}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">
              Answers to common questions about our sourcing services.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-slate-900 pr-4">{faq.question}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Inquiry Form */}
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Source from China?</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Tell us what you need and we will get back to you with a free sourcing quote.
                No commitment, no obligation.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Free initial consultation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Transparent pricing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Response within 24 hours
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 text-slate-800">
              <SourcingInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
