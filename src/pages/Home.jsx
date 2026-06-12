import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Shield, Search, ClipboardCheck, Truck, Factory, Users,
  CheckCircle, ArrowRight, Star, Globe, Award, TrendingUp,
  Package, AlertTriangle, Clock, DollarSign, HelpCircle, ChevronDown
} from 'lucide-react'
import { useState } from 'react'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <CaseStudiesSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}

const HeroSection = () => {
  return (
    <section className="relative bg-slate-900 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-9f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-600/20 rounded-full px-4 py-1.5 mb-6">
            <Globe className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Trusted by 500+ Global Buyers</span>
          </div>
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can import with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const TrustBar = () => {
  const stats = [
    { value: '500+', label: 'Clients Served' },
    { value: '2,000+', label: 'Suppliers Verified' },
    { value: '15+', label: 'Years Experience' },
    { value: '98%', label: 'On-Time Delivery' },
  ]

  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      desc: 'We identify and shortlist qualified manufacturers matching your product specs, MOQ, and budget requirements.',
    },
    {
      icon: Factory,
      title: 'Factory Verification',
      desc: 'On-site factory audits to verify production capacity, certifications, equipment, and business legitimacy.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      desc: 'Pre-production, during-production, and pre-shipment inspections following AQL standards.',
    },
    {
      icon: TrendingUp,
      title: 'Production Follow-up',
      desc: 'Regular progress reports, timeline tracking, and issue resolution throughout the manufacturing process.',
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      desc: 'End-to-end logistics management including freight booking, customs documentation, and delivery tracking.',
    },
    {
      icon: Shield,
      title: 'Contract & Payment Protection',
      desc: 'We help structure supplier agreements and manage payment milestones to protect your interests.',
    },
  ]

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
            End-to-End Sourcing Support
          </h2>
          <p className="text-slate-500 mt-4 text-lg">
            From finding the right supplier to delivering goods at your door — we manage every step.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

const ProcessSection = () => {
  const steps = [
    { num: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
    { num: '02', title: 'We Find & Verify Suppliers', desc: 'Our team identifies potential suppliers and conducts factory audits.' },
    { num: '03', title: 'Sample & Negotiate', desc: 'We arrange samples, negotiate pricing, and finalize terms on your behalf.' },
    { num: '04', title: 'Production & QC', desc: 'We monitor production progress and conduct quality inspections.' },
    { num: '05', title: 'Ship & Deliver', desc: 'We coordinate logistics and ensure your goods arrive safely and on time.' },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
            Our Sourcing Process
          </h2>
          <p className="text-slate-500 mt-4 text-lg">
            A clear, structured approach to sourcing from China — no guesswork involved.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <div key={step.num} className="relative text-center p-4">
              <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-sm">{step.num}</span>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/how-it-works" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            Learn More About Our Process <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

const ProductsSection = () => {
  const categories = [
    'Electronics & Components',
    'Textiles & Apparel',
    'Home & Garden',
    'Industrial Equipment',
    'Packaging Materials',
    'Auto Parts & Accessories',
    'Health & Beauty',
    'Building Materials',
  ]

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Product Categories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
            Products We Source
          </h2>
          <p className="text-slate-500 mt-4 text-lg">
            We source across a wide range of industries. If it's made in China, we can find it for you.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div key={cat} className="bg-white rounded-lg p-5 border border-slate-200 text-center hover:border-blue-600/30 hover:shadow-sm transition-all">
              <Package className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <span className="text-sm font-medium text-slate-900">{cat}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            See Full Product List <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

const ProblemsSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Unreliable Suppliers',
      desc: 'We pre-screen and audit every factory so you only work with verified, legitimate manufacturers.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Issues',
      desc: 'Our multi-stage inspection process catches defects before goods leave the factory.',
    },
    {
      icon: Clock,
      title: 'Delayed Shipments',
      desc: 'We track production timelines and coordinate logistics to keep your orders on schedule.',
    },
    {
      icon: DollarSign,
      title: 'Overpaying',
      desc: 'We negotiate competitive pricing and help you understand true landed costs.',
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
            Problems We Solve
          </h2>
          <p className="text-slate-500 mt-4 text-lg">
            Sourcing from China comes with real risks. Here's how we mitigate them for you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem) => (
            <div key={problem.title} className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center shrink-0">
                <problem.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{problem.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{problem.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CaseStudiesSection = () => {
  const cases = [
    {
      id: 'case-electronics',
      title: 'Electronics Manufacturer for EU Brand',
      category: 'Electronics',
      result: 'Reduced unit cost by 22% while improving quality consistency.',
      imgId: 'case-electronics-img-4b2c1a',
    },
    {
      id: 'case-textiles',
      title: 'Textile Supplier for US Retailer',
      category: 'Textiles',
      result: 'Found a certified organic cotton supplier with 30-day lead time.',
      imgId: 'case-textiles-img-7d5e3f',
    },
    {
      id: 'case-industrial',
      title: 'Industrial Parts for Australian Distributor',
      category: 'Industrial',
      result: 'Verified 5 factories and secured ISO-certified supplier in 2 weeks.',
      imgId: 'case-industrial-img-9a8b6c',
    },
  ]

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Case Studies</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
            Real Results for Real Businesses
          </h2>
          <p className="text-slate-500 mt-4 text-lg">
            See how we've helped buyers around the world source successfully from China.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-md transition-shadow">
              <div className="aspect-video relative">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.id}-title] [${item.id}-category]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span id={`${item.id}-category`} className="text-xs font-medium text-blue-600 uppercase">{item.category}</span>
                <h3 id={`${item.id}-title`} className="text-base font-semibold text-slate-900 mt-1 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.result}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

const FAQSection = () => {
  const faqs = [
    {
      q: 'What is the minimum order quantity (MOQ)?',
      a: 'MOQ varies by product and supplier. We work with factories that accommodate both small trial orders and large-volume production runs.',
    },
    {
      q: 'How long does the sourcing process take?',
      a: 'Typically 1–2 weeks to identify and verify suppliers, plus 1–2 weeks for sampling. Production timelines depend on the product complexity.',
    },
    {
      q: 'Do you charge a service fee?',
      a: 'We offer transparent pricing based on the scope of services required. Contact us for a free quote tailored to your project.',
    },
    {
      q: 'Can you source custom or OEM products?',
      a: 'Yes. We regularly help clients develop custom products, including OEM/ODM manufacturing with private labeling.',
    },
    {
      q: 'How do you ensure supplier quality?',
      a: 'We conduct on-site factory audits, verify certifications, check production capacity, and perform multi-stage quality inspections.',
    },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="text-sm font-medium text-slate-900 pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-500 shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CTASection = () => {
  return (
    <section className="bg-slate-900 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          Ready to Source from China with Confidence?
        </h2>
        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
          Tell us what you're looking for and get a free, no-obligation sourcing quote within 24 hours.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
        >
          Get a Free Sourcing Quote
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}

export default Home
