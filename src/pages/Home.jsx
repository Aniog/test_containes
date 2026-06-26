import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Search, ClipboardCheck, Ship, Factory, Globe, ArrowRight, CheckCircle, Star, Package, Truck, BarChart3, HeadphonesIcon } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and vet qualified suppliers that match your product specifications, budget, and quality standards across Chinese manufacturing hubs.',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'Our team visits supplier facilities in person to verify capabilities, production capacity, certifications, and working conditions before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Comprehensive pre-shipment inspections, during-production checks, and product testing to ensure your goods meet agreed specifications.',
  },
  {
    icon: BarChart3,
    title: 'Production Monitoring',
    desc: 'Real-time updates on production progress, raw material tracking, and proactive issue resolution to keep your orders on schedule.',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'End-to-end freight coordination including consolidation, customs documentation, insurance, and door-to-door delivery worldwide.',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    desc: 'We help protect your interests with clear contracts, payment terms guidance, IP protection advice, and dispute mediation when needed.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Submit Your Requirements',
    desc: 'Tell us about your product, quantity, budget, and quality expectations through our simple inquiry form.',
  },
  {
    num: '02',
    title: 'Supplier Matching',
    desc: 'We search our verified network and identify 3-5 qualified suppliers that best fit your specific needs.',
  },
  {
    num: '03',
    title: 'Factory Audit & Samples',
    desc: 'We audit shortlisted factories, request product samples, and provide detailed reports with photos and findings.',
  },
  {
    num: '04',
    title: 'Order & Production',
    desc: 'Once you select a supplier, we help negotiate terms, place the order, and monitor production closely.',
  },
  {
    num: '05',
    title: 'Quality Control',
    desc: 'Our QC team conducts inspections at critical stages to catch issues before shipment.',
  },
  {
    num: '06',
    title: 'Shipping & Delivery',
    desc: 'We handle logistics, documentation, and tracking so your products arrive safely and on time.',
  },
]

const productCategories = [
  {
    icon: Package,
    title: 'Consumer Electronics',
    desc: 'Smartphones, accessories, audio devices, wearables, and smart home products.',
  },
  {
    icon: Package,
    title: 'Home & Kitchen',
    desc: 'Household appliances, kitchen tools, storage solutions, and home decor items.',
  },
  {
    icon: Package,
    title: 'Apparel & Textiles',
    desc: 'Garments, fabrics, accessories, footwear, and custom apparel manufacturing.',
  },
  {
    icon: Package,
    title: 'Industrial Equipment',
    desc: 'Machinery parts, tools, automation components, and industrial supplies.',
  },
  {
    icon: Package,
    title: 'Health & Beauty',
    desc: 'Personal care products, cosmetics, supplements, and wellness items.',
  },
  {
    icon: Package,
    title: 'Auto Parts',
    desc: 'Automotive components, accessories, tools, and aftermarket parts.',
  },
  {
    icon: Package,
    title: 'Packaging Materials',
    desc: 'Custom boxes, labels, bags, and sustainable packaging solutions.',
  },
  {
    icon: Package,
    title: 'Sports & Outdoor',
    desc: 'Fitness equipment, camping gear, sports apparel, and outdoor accessories.',
  },
]

const problems = [
  {
    icon: Search,
    title: 'Finding Reliable Suppliers',
    desc: 'Not sure which suppliers are legitimate? We verify factories firsthand so you avoid scams and low-quality vendors.',
  },
  {
    icon: Globe,
    title: 'Language & Cultural Barriers',
    desc: 'Communication challenges can derail deals. Our bilingual team handles all negotiations and correspondence for you.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Uncertainty',
    desc: 'Worried about product quality? Our on-site inspections catch defects before they reach your customers.',
  },
  {
    icon: Ship,
    title: 'Complex Logistics',
    desc: 'International shipping, customs clearance, and documentation are complicated. We manage the entire process end-to-end.',
  },
  {
    icon: Shield,
    title: 'Payment & Contract Risks',
    desc: 'Unsure about payment terms or contracts? We guide you through safe transaction methods and help negotiate fair terms.',
  },
  {
    icon: HeadphonesIcon,
    title: 'No Local Support',
    desc: 'Without someone on the ground in China, resolving issues is slow. We are your local presence, ready to act quickly.',
  },
]

const trustPoints = [
  { icon: Star, stat: '8+', label: 'Years in China Sourcing' },
  { icon: Factory, stat: '500+', label: 'Factories Verified' },
  { icon: Ship, stat: '1,200+', label: 'Shipments Managed' },
  { icon: Globe, stat: '30+', label: 'Countries Served' },
]

const faqs = [
  {
    q: 'How do I know if a supplier is reliable?',
    a: 'We conduct on-site factory audits to verify business licenses, production capabilities, existing certifications, and quality control processes. You receive a detailed report with photos and our assessment before making any commitments.',
  },
  {
    q: 'What are your fees?',
    a: 'Our fee structure depends on the scope of work. We offer flexible options including project-based fees, commission models, or hourly consulting. Contact us for a free quote tailored to your needs.',
  },
  {
    q: 'What is the minimum order quantity (MOQ)?',
    a: 'MOQs vary by product and supplier. While many Chinese factories have high MOQs, we have relationships with suppliers who accommodate smaller orders, especially for first-time trials. Let us know your requirements and we will find suitable options.',
  },
  {
    q: 'How do you handle quality control?',
    a: 'We offer multiple inspection stages: during production (DUPRO), pre-shipment (PSI), and container loading supervision. Inspections follow AQL (Acceptable Quality Limit) standards with detailed reports including photos and measurements.',
  },
  {
    q: 'Can you help with product samples?',
    a: 'Yes, we coordinate sample requests with suppliers, track delivery, and review samples against your specifications. We help ensure samples accurately represent what will be produced at scale.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'A typical sourcing engagement takes 4-8 weeks from requirements to sample approval, depending on product complexity and supplier availability. Production time varies by product. We provide realistic timelines at each stage.',
  },
]

export default function Home() {
  const heroRef = useRef(null)
  const [expandedFaq, setExpandedFaq] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, heroRef.current)
  }, [])

  return (
    <div ref={heroRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F2B44] to-[#1B4A7A] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-7a3f1c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl">
              We help international businesses find reliable Chinese suppliers, verify factories, 
              control product quality, and manage shipping — so you can source with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent-red text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-accent-red-hover transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-md font-semibold text-lg hover:bg-white/20 transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
        {/* Stats strip */}
        <div className="relative bg-white/5 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {trustPoints.map((point) => (
                <div key={point.label}>
                  <div className="text-2xl lg:text-3xl font-bold text-white">{point.stat}</div>
                  <div className="text-sm text-blue-200 mt-1">{point.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-text mb-4">Our Services</h2>
            <p className="text-lg text-medium-text">
              End-to-end sourcing support from supplier discovery to final delivery. 
              We handle every step so you can focus on growing your business.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <service.icon className="w-10 h-10 text-primary-blue mb-4" />
                <h3 className="text-lg font-semibold text-dark-text mb-2">{service.title}</h3>
                <p className="text-medium-text text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary-blue font-semibold hover:text-primary-blue-hover transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-text mb-4">Problems We Solve</h2>
            <p className="text-lg text-medium-text">
              Sourcing from China comes with real challenges. Here is how we help you overcome them.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem) => (
              <div key={problem.title} className="bg-white border border-border rounded-lg p-6 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-blue/10 rounded flex items-center justify-center">
                  <problem.icon className="w-5 h-5 text-primary-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-text mb-1">{problem.title}</h3>
                  <p className="text-medium-text text-sm">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-text mb-4">How It Works</h2>
            <p className="text-lg text-medium-text">
              A straightforward process from your inquiry to delivered goods.
            </p>
          </div>
          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
            <div className="space-y-12 lg:space-y-0">
              {steps.map((step, i) => (
                <div key={step.num} className={`lg:flex items-center gap-12 ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : ''}`}>
                    <div className={`p-6 lg:p-8 ${i % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      <span className="inline-block text-4xl font-extrabold text-primary-blue/20 mb-2">{step.num}</span>
                      <h3 className="text-xl font-semibold text-dark-text mb-2">{step.title}</h3>
                      <p className="text-medium-text">{step.desc}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center justify-center w-12 flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-primary-blue border-4 border-white shadow" />
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-primary-blue font-semibold hover:text-primary-blue-hover transition-colors"
            >
              Learn More About Our Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-text mb-4">Products We Source</h2>
            <p className="text-lg text-medium-text">
              We work across a wide range of industries and product categories. 
              If it is manufactured in China, we can help source it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((cat) => (
              <div key={cat.title} className="bg-white border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <cat.icon className="w-6 h-6 text-primary-blue" />
                </div>
                <h3 className="font-semibold text-dark-text mb-1">{cat.title}</h3>
                <p className="text-sm text-medium-text">{cat.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products-we-source"
              className="inline-flex items-center gap-2 text-primary-blue font-semibold hover:text-primary-blue-hover transition-colors"
            >
              View All Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust / Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-text mb-4">Why Choose SSourcing China</h2>
            <p className="text-lg text-medium-text">
              We are not just middlemen. We are your on-the-ground partner in China with a track record of results.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <Factory className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-lg font-semibold text-dark-text mb-2">On-the-Ground Presence</h3>
              <p className="text-medium-text text-sm">Based in Guangzhou with easy access to all major manufacturing regions including Guangdong, Zhejiang, Jiangsu, and Fujian.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-lg font-semibold text-dark-text mb-2">Independent Inspections</h3>
              <p className="text-medium-text text-sm">We work for you, not the supplier. Our assessments are unbiased and our recommendations prioritize your interests.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <Globe className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-lg font-semibold text-dark-text mb-2">Bilingual Team</h3>
              <p className="text-medium-text text-sm">Native English and Chinese speakers who understand both Western business expectations and Chinese manufacturing culture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-text mb-4">Case Studies</h2>
            <p className="text-lg text-medium-text">
              Real results from real clients. See how we have helped businesses source successfully from China.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-border rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-100">
                <img
                  data-strk-img-id="case-study-electronics-d4f2b8"
                  data-strk-img="[case-study-1-desc] [case-study-1-title]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Electronics sourcing case study"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary-blue uppercase tracking-wider">Electronics</span>
                <h3 id="case-study-1-title" className="text-lg font-semibold text-dark-text mt-1 mb-2">Saving 30% on Consumer Electronics</h3>
                <p id="case-study-1-desc" className="text-sm text-medium-text">An Australian retailer needed to diversify suppliers for Bluetooth speakers. We sourced, vetted, and onboarded three new factories, reducing costs by 30%.</p>
              </div>
            </div>
            <div className="bg-white border border-border rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-100">
                <img
                  data-strk-img-id="case-study-textiles-e7c3a9"
                  data-strk-img="[case-study-2-desc] [case-study-2-title]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Textile sourcing case study"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary-blue uppercase tracking-wider">Textiles</span>
                <h3 id="case-study-2-title" className="text-lg font-semibold text-dark-text mt-1 mb-2">Scaling Apparel Production</h3>
                <p id="case-study-2-desc" className="text-sm text-medium-text">A US fashion brand needed to scale from small-batch to full production. We audited factories in Jiangsu and managed QC across 12 production runs.</p>
              </div>
            </div>
            <div className="bg-white border border-border rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-100">
                <img
                  data-strk-img-id="case-study-machinery-f1a4b5"
                  data-strk-img="[case-study-3-desc] [case-study-3-title]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Industrial equipment case study"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary-blue uppercase tracking-wider">Industrial Equipment</span>
                <h3 id="case-study-3-title" className="text-lg font-semibold text-dark-text mt-1 mb-2">Verifying a Critical Supplier</h3>
                <p id="case-study-3-desc" className="text-sm text-medium-text">A German manufacturer needed to verify a new casting supplier for precision parts. Our on-site audit revealed capacity gaps that were corrected before production.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-primary-blue font-semibold hover:text-primary-blue-hover transition-colors"
            >
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-text mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-dark-text pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-medium-text flex-shrink-0 transition-transform ${
                      expandedFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-medium-text text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-20 bg-primary-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Start Your Sourcing Project</h2>
            <p className="text-lg text-blue-100">
              Tell us about your product requirements and we will get back to you within 24 hours 
              with a free assessment and quote.
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-lg">
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  )
}

function InquiryForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', product: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-success-green mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-dark-text mb-2">Thank You!</h3>
        <p className="text-medium-text">
          We have received your inquiry and will get back to you within 24 hours with a free sourcing assessment.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark-text mb-1.5">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-border rounded-md text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark-text mb-1.5">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-border rounded-md text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            placeholder="john@company.com"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-dark-text mb-1.5">Company Name</label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-border rounded-md text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            placeholder="Your Company Ltd."
          />
        </div>
        <div>
          <label htmlFor="product" className="block text-sm font-medium text-dark-text mb-1.5">Product Interested In *</label>
          <input
            id="product"
            name="product"
            type="text"
            required
            value={form.product}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-border rounded-md text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            placeholder="e.g., Bluetooth speakers"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark-text mb-1.5">Tell Us About Your Needs *</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-border rounded-md text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent resize-none"
          placeholder="Describe your product, target quantity, budget range, quality requirements, and any other details..."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-accent-red text-white py-3 rounded-md font-semibold text-base hover:bg-accent-red-hover transition-colors"
      >
        Submit Inquiry — Get Free Quote
      </button>
      <p className="text-xs text-light-text text-center">
        Your information is confidential. We will never share your details with third parties.
      </p>
    </form>
  )
}