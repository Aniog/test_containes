import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import loadStrkImgConfig from '../strk-img-config.js'
import { Shield, ClipboardCheck, Ship, Search, CheckCircle, TrendingUp, HeadphonesIcon, Trophy, Users, Building2, FileCheck, ChevronDown, Loader2, Send } from 'lucide-react'
import { client, getErrorMessage } from '../api/postgrest-client.js'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable suppliers that match your product requirements, pricing, and quality standards.',
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify capabilities, production capacity, certifications, and compliance with international standards.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections, during-production checks, and detailed quality control reports with photos and measurements.',
  },
  {
    icon: TrendingUp,
    title: 'Production Monitoring',
    description: 'Regular follow-up on your orders to ensure production stays on schedule and any issues are addressed promptly.',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    description: 'Coordinate freight, customs documentation, and international shipping from factory to your destination port.',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Protect your business with supplier background checks, contract reviews, and dispute resolution support.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Share Your Requirements',
    description: 'Tell us about the products you need, target price, quality standards, and any certifications required.',
  },
  {
    step: '02',
    title: 'Supplier Matching',
    description: 'We research and shortlist qualified suppliers that match your criteria, with factory profiles and capability assessments.',
  },
  {
    step: '03',
    title: 'Verification & Audits',
    description: 'Our team visits shortlisted factories to verify credentials, production capacity, and quality control processes.',
  },
  {
    step: '04',
    title: 'Sampling & Negotiation',
    description: 'We coordinate sample production, negotiate pricing and terms, and review contracts on your behalf.',
  },
  {
    step: '05',
    title: 'Production & QC',
    description: 'During production, we conduct inspections at key milestones and provide regular progress updates with photos.',
  },
  {
    step: '06',
    title: 'Shipping & Delivery',
    description: 'We handle cargo collection, export documentation, freight booking, and tracking until delivery is complete.',
  },
]

const productCategories = [
  { name: 'Electronics & Components', image: 'electronics' },
  { name: 'Home & Kitchen Products', image: 'home-kitchen' },
  { name: 'Apparel & Textiles', image: 'apparel' },
  { name: 'Industrial Machinery', image: 'machinery' },
  { name: 'Packaging & Materials', image: 'packaging' },
  { name: 'Furniture & Decor', image: 'furniture' },
  { name: 'Auto Parts & Accessories', image: 'auto-parts' },
  { name: 'Medical & Healthcare', image: 'medical' },
  { name: 'Toys & Sporting Goods', image: 'toys' },
  { name: 'Beauty & Personal Care', image: 'beauty' },
  { name: 'Building & Construction', image: 'construction' },
  { name: 'Food & Beverage Equipment', image: 'food' },
]

const problems = [
  {
    icon: Search,
    problem: 'Finding reliable suppliers',
    solution: 'We maintain a curated database of verified factories and conduct fresh supplier research for every client.',
  },
  {
    icon: Shield,
    problem: 'Worrying about product quality',
    solution: 'Our rigorous inspection process at multiple production stages ensures products meet your specifications.',
  },
  {
    icon: TrendingUp,
    problem: 'Production delays and missed deadlines',
    solution: 'We monitor production schedules weekly and address bottlenecks before they become delays.',
  },
  {
    icon: Building2,
    problem: 'Communication barriers with Chinese suppliers',
    solution: 'Our bilingual team handles all communications, translating technical requirements accurately.',
  },
  {
    icon: FileCheck,
    problem: 'Complex shipping and customs procedures',
    solution: 'We manage all export documentation, customs clearance, and freight arrangements end to end.',
  },
  {
    icon: HeadphonesIcon,
    problem: 'Lack of local support in China',
    solution: 'Our team is based in Guangzhou with access to major manufacturing hubs across China.',
  },
]

const trustPoints = [
  { icon: Users, number: '500+', label: 'Suppliers Vetted' },
  { icon: Trophy, number: '98%', label: 'On-Time Delivery' },
  { icon: CheckCircle, number: '1,200+', label: 'Orders Managed' },
  { icon: Building2, number: '15+', label: 'Years Experience' },
]

const caseStudies = [
  {
    title: 'European Retail Chain Expands Product Line',
    industry: 'Home & Kitchen',
    result: '42% cost reduction',
    description: 'Sourced 15 new SKUs from verified Chinese manufacturers. Pre-shipment inspections ensured consistent quality across all suppliers.',
  },
  {
    title: 'US Startup Launches Electronics Brand',
    industry: 'Consumer Electronics',
    result: '3-month lead time',
    description: 'From concept to first shipment in 90 days. Factory audit and production monitoring ensured CE/FCC compliance.',
  },
  {
    title: 'Australian Distributor Optimizes Supply Chain',
    industry: 'Industrial Parts',
    result: '35% savings',
    description: 'Consolidated 8 suppliers into 3 high-performing factories. Quality improved and logistics costs reduced significantly.',
  },
]

const faqs = [
  {
    q: 'What is the typical cost of your sourcing services?',
    a: 'Our fee structure depends on the scope of work. We offer project-based pricing and commission models. Contact us for a customized quote based on your specific needs.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'We conduct on-site factory audits including capability assessment, production line inspection, quality control system review, and business license verification. We also check export records and client references.',
  },
  {
    q: 'What is the minimum order quantity?',
    a: 'MOQ varies by supplier and product category. We work with factories that accommodate both small and large orders. We can help negotiate favorable terms for your specific volume.',
  },
  {
    q: 'How do you handle quality control?',
    a: 'We offer pre-production inspections, during-production checks, and pre-shipment inspection. Each inspection includes detailed reports with photos, measurements, and test results.',
  },
  {
    q: 'Can you source any type of product?',
    a: 'We have experience across a wide range of industries including electronics, home goods, apparel, machinery, packaging, and more. If you need a product manufactured in China, we can help find the right supplier.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typical timelines: supplier identification 1-2 weeks, factory verification 1 week, sampling 2-4 weeks, production 4-8 weeks depending on product complexity. We will provide a detailed timeline for your project.',
  },
]

export default function Home() {
  const containerRef = useRef(null)
  const [formStatus, setFormStatus] = useState('idle')
  const [formError, setFormError] = useState(null)
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    let cancelled = false
    loadStrkImgConfig().then((cfg) => {
      if (!cancelled && containerRef.current) {
        return ImageHelper.loadImages(cfg, containerRef.current)
      }
    })
    return () => { cancelled = true }
  }, [])

  const handleInquirySubmit = async (e) => {
    e.preventDefault()
    setFormError(null)
    setFormStatus('submitting')

    const form = e.target
    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      company: form.company.value.trim() || undefined,
      country: form.country.value.trim(),
      product_description: form.product.value.trim(),
    }

    try {
      const { data: response, error: submitError } = await client
        .from('Sourcing Inquiries')
        .insert({ data: formData })
        .select()
        .single()

      if (submitError || response?.success === false) {
        throw new Error(getErrorMessage(response, submitError))
      }

      setFormSubmitted(true)
      setFormStatus('success')
    } catch (err) {
      console.error('Inquiry submission failed:', err)
      setFormError(err.message || 'Failed to submit inquiry. Please try again.')
      setFormStatus('error')
    }
  }

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div
            data-strk-bg-id="hero-bg-8f2a9c"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            className="w-full h-full opacity-30 bg-cover bg-center"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, monitor production, and coordinate shipping from China. One partner, end-to-end.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-red-600 text-white px-8 py-3.5 rounded-md text-base font-semibold hover:bg-red-700 transition-colors text-center"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-md text-base font-medium hover:bg-white/20 transition-colors text-center"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustPoints.map((point, i) => (
              <div key={i} className="text-center">
                <point.icon className="w-6 h-6 text-brand-600 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-slate-900">{point.number}</div>
                <div className="text-sm text-slate-500 mt-1">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Our Services</h2>
            <p className="mt-4 text-lg text-slate-600">
              Comprehensive sourcing support from supplier identification to final delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <service.icon className="w-8 h-8 text-brand-600 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700"
            >
              View All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">How It Works</h2>
            <p className="mt-4 text-lg text-slate-600">
              A structured process designed to deliver results efficiently
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="relative bg-white border border-slate-200 rounded-lg p-6">
                <span className="text-brand-600 font-bold text-3xl">{step.step}</span>
                <h3 className="text-lg font-semibold text-slate-900 mt-2 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700"
            >
              Learn More About Our Process &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Products We Source</h2>
            <p className="mt-4 text-lg text-slate-600">
              We source across a wide range of industries and product categories
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productCategories.map((cat, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center hover:border-brand-300 hover:bg-brand-50 transition-colors"
              >
                <div className="text-sm font-medium text-slate-800">{cat.name}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products-we-source"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700"
            >
              View All Categories &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Problems We Solve</h2>
            <p className="mt-4 text-lg text-slate-600">
              Common challenges importers face, and how we address them
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-lg p-6">
                <item.icon className="w-6 h-6 text-brand-600 mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">{item.problem}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Case Studies</h2>
            <p className="mt-4 text-lg text-slate-600">
              Real results from real partnerships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-2.5 py-1 rounded mb-4">
                  {cs.industry}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{cs.title}</h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{cs.description}</p>
                <div className="text-brand-600 font-bold text-sm">{cs.result}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700"
            >
              View All Case Studies &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-white border border-slate-200 rounded-lg group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer text-slate-900 font-medium hover:bg-slate-50 rounded-lg [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform shrink-0" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Inquiry Form Section */}
      <section className="section-padding bg-brand-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Ready to Start Sourcing?</h2>
              <p className="mt-4 text-lg text-blue-200">
                Tell us about your project and we will get back to you within 24 hours with a free assessment.
              </p>
            </div>
            {formSubmitted ? (
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-600">
                  Your inquiry has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
                {formStatus === 'error' && formError && (
                  <div className="mb-5 bg-red-50 border border-red-200 rounded-md p-4 text-sm text-red-700" role="alert">
                    {formError}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                    <input type="text" id="name" required disabled={formStatus === 'submitting'} className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 disabled:opacity-60 disabled:cursor-not-allowed" placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                    <input type="email" id="email" required disabled={formStatus === 'submitting'} className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 disabled:opacity-60 disabled:cursor-not-allowed" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                    <input type="text" id="company" disabled={formStatus === 'submitting'} className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 disabled:opacity-60 disabled:cursor-not-allowed" placeholder="Your company" />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1">Country *</label>
                    <input type="text" id="country" required disabled={formStatus === 'submitting'} className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 disabled:opacity-60 disabled:cursor-not-allowed" placeholder="Your country" />
                  </div>
                </div>
                <div className="mt-5">
                  <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1">Product Description *</label>
                  <textarea id="product" rows={4} required disabled={formStatus === 'submitting'} className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 disabled:opacity-60 disabled:cursor-not-allowed" placeholder="Describe the products you want to source, target quantity, budget, and any specific requirements..." />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="mt-6 w-full bg-red-600 text-white px-8 py-3.5 rounded-md text-base font-semibold hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Get a Free Sourcing Quote'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}