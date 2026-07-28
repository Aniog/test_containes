import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, Eye, Truck, PackageCheck, Clock, Globe, Users,
  CheckCircle, AlertTriangle, Star, ArrowRight, Factory, BarChart3,
  DollarSign, TrendingUp, Shield, Zap, ChevronDown, ChevronUp, Quote
} from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import InquiryForm from '@/components/shared/InquiryForm'
import { useState } from 'react'

/* ── Hero ── */
function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 overflow-hidden" ref={containerRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cta-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-royal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block bg-cta-500/20 text-cta-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Trusted by 500+ Global Buyers
            </span>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6">
              China Sourcing Agent for{' '}
              <span className="text-cta-400">Global Buyers</span>
            </h1>

            <p className="text-lg text-navy-200 leading-relaxed mb-8 max-w-xl">
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping — 
              all from one trusted partner in China. We handle the complexity so you can focus on growing your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-cta-500 hover:bg-cta-600 text-white px-8 py-4 rounded-xl text-base font-semibold transition-colors shadow-lg shadow-cta-500/30"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl text-base font-semibold transition-colors"
              >
                See How It Works
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-navy-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-trust-400" />
                <span>No upfront fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-trust-400" />
                <span>100% verified suppliers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-trust-400" />
                <span>24hr response time</span>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="hero-main-img"
                data-strk-img="[hero-subtitle-text] [hero-title-text] China sourcing factory warehouse"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="SSourcing China team working in factory warehouse"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-trust-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-trust-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-navy-900">$2.8M+</p>
                  <p className="text-sm text-gray-500">Saved for clients</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-royal-100 rounded-lg flex items-center justify-center">
                  <Factory className="w-6 h-6 text-royal-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-navy-900">2,400+</p>
                  <p className="text-sm text-gray-500">Verified factories</p>
                </div>
              </div>
            </div>
            {/* Hidden reference texts */}
            <span id="hero-title-text" className="hidden">China Sourcing Agent for Global Buyers</span>
            <span id="hero-subtitle-text" className="hidden">Find reliable suppliers verify factories inspect quality coordinate shipping</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Stats Bar ── */
function StatsBar() {
  const stats = [
    { value: '2,400+', label: 'Verified Factories', icon: Factory },
    { value: '500+', label: 'Global Clients', icon: Users },
    { value: '98.5%', label: 'Quality Pass Rate', icon: CheckCircle },
    { value: '15+', label: 'Years Experience', icon: Clock },
  ]

  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-navy-600" />
              </div>
              <p className="text-3xl font-bold text-navy-900">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Services Section ── */
function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We identify and shortlist the best suppliers for your product requirements from our verified network of 2,400+ factories.',
      color: 'bg-royal-100 text-royal-600',
    },
    {
      icon: ShieldCheck,
      title: 'Factory Verification',
      description: 'On-site factory audits including license verification, production capability assessment, and compliance checks.',
      color: 'bg-trust-100 text-trust-600',
    },
    {
      icon: Eye,
      title: 'Quality Control',
      description: 'Pre-production, in-line, and pre-shipment inspections to ensure your products meet specifications and quality standards.',
      color: 'bg-cta-100 text-cta-600',
    },
    {
      icon: PackageCheck,
      title: 'Production Follow-up',
      description: 'Regular progress updates, timeline tracking, and issue resolution throughout the manufacturing process.',
      color: 'bg-navy-100 text-navy-600',
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics management including customs clearance, documentation, and freight forwarding.',
      color: 'bg-royal-100 text-royal-600',
    },
    {
      icon: Globe,
      title: 'Trade Consulting',
      description: 'Expert guidance on China trade regulations, tariffs, and best practices for international procurement.',
      color: 'bg-trust-100 text-trust-600',
    },
  ]

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="End-to-End Sourcing Solutions"
          subtitle="From initial supplier discovery to final delivery, we manage every step of your China sourcing journey."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-5`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-cta-500 hover:text-cta-600 font-semibold transition-colors"
          >
            View all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── Sourcing Process ── */
function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Tell Us What You Need',
      description: 'Submit your product requirements, specifications, and target price. We review within 24 hours.',
      icon: Search,
    },
    {
      number: '02',
      title: 'We Find & Verify Suppliers',
      description: 'Our team identifies qualified suppliers and conducts on-site factory verification and audits.',
      icon: ShieldCheck,
    },
    {
      number: '03',
      title: 'Samples & Negotiation',
      description: 'We arrange samples, negotiate pricing, and finalize terms on your behalf with the supplier.',
      icon: PackageCheck,
    },
    {
      number: '04',
      title: 'Production & QC',
      description: 'We monitor production progress and conduct quality inspections at key manufacturing stages.',
      icon: Eye,
    },
    {
      number: '05',
      title: 'Shipping & Delivery',
      description: 'We handle all logistics, customs documentation, and coordinate delivery to your destination.',
      icon: Truck,
    },
  ]

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How It Works"
          title="Simple, Transparent Sourcing Process"
          subtitle="Our proven 5-step process ensures quality, transparency, and cost savings at every stage."
        />

        {/* Process steps */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-royal-200 via-cta-200 to-trust-200" style={{ left: '10%', right: '10%' }}></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {/* Step number circle */}
                <div className="relative z-10 w-16 h-16 bg-white border-4 border-royal-200 rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                  <step.icon className="w-7 h-7 text-royal-500" />
                </div>
                {/* Step number badge */}
                <span className="absolute top-0 right-1/2 translate-x-8 -translate-y-1 bg-cta-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 bg-cta-500 hover:bg-cta-600 text-white px-8 py-3.5 rounded-xl text-base font-semibold transition-colors shadow-sm"
          >
            Learn More About Our Process
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── Products We Source ── */
function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const products = [
    { name: 'Electronics & Components', icon: Zap, count: '320+ suppliers', color: 'bg-royal-50 border-royal-100' },
    { name: 'Machinery & Equipment', icon: Factory, count: '180+ suppliers', color: 'bg-cta-50 border-cta-100' },
    { name: 'Textiles & Apparel', icon: PackageCheck, count: '450+ suppliers', color: 'bg-trust-50 border-trust-100' },
    { name: 'Home & Garden', icon: Globe, count: '280+ suppliers', color: 'bg-navy-50 border-navy-100' },
    { name: 'Automotive Parts', icon: TrendingUp, count: '150+ suppliers', color: 'bg-royal-50 border-royal-100' },
    { name: 'Medical Supplies', icon: Shield, count: '120+ suppliers', color: 'bg-trust-50 border-trust-100' },
    { name: 'Packaging & Printing', icon: PackageCheck, count: '200+ suppliers', color: 'bg-cta-50 border-cta-100' },
    { name: 'Custom Products', icon: BarChart3, count: '500+ suppliers', color: 'bg-navy-50 border-navy-100' },
  ]

  return (
    <section className="bg-gray-50 py-16 lg:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Product Categories"
          title="Products We Source"
          subtitle="We source a wide range of products across major industries. Our network covers everything from consumer goods to industrial equipment."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <div
              key={product.name}
              className={`${product.color} border rounded-xl p-6 hover:shadow-md transition-all cursor-pointer group`}
            >
              <div className="flex items-center gap-3 mb-3">
                <product.icon className="w-6 h-6 text-navy-700" />
                <h3 className="font-bold text-navy-900 group-hover:text-cta-500 transition-colors">{product.name}</h3>
              </div>
              <p className="text-sm text-gray-600">{product.count}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-cta-500 hover:text-cta-600 font-semibold transition-colors"
          >
            View all product categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── Problems We Solve ── */
function ProblemsSection() {
  const problems = [
    {
      problem: 'Unreliable suppliers who disappear after receiving payment',
      solution: 'We verify every supplier with on-site factory audits and maintain ongoing relationships to ensure accountability.',
      icon: ShieldCheck,
    },
    {
      problem: 'Poor product quality that leads to returns and customer complaints',
      solution: 'Multi-stage quality inspections at pre-production, during production, and before shipping catch defects early.',
      icon: Eye,
    },
    {
      problem: 'Language and cultural barriers causing miscommunication',
      solution: 'Our bilingual team bridges the communication gap and ensures your specifications are clearly understood.',
      icon: Globe,
    },
    {
      problem: 'Hidden costs and unexpected delays in production and shipping',
      solution: 'Transparent pricing with no hidden fees, plus real-time production tracking and proactive timeline management.',
      icon: Clock,
    },
  ]

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Problems We Solve"
          subtitle="Sourcing from China comes with challenges. We help you avoid common pitfalls and ensure a smooth procurement process."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 lg:p-8 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900 mb-2">{item.problem}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mt-4">
                <div className="w-12 h-12 bg-trust-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-trust-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Trust Points ── */
function TrustSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const trustPoints = [
    { title: 'Licensed & Registered', description: 'Fully licensed sourcing company registered in Shenzhen with verified business credentials.' },
    { title: 'On-Ground Team', description: 'Local team of 50+ sourcing specialists, QC inspectors, and logistics coordinators in China.' },
    { title: 'Verified Supplier Network', description: 'Over 2,400 pre-vetted factories across major manufacturing regions in China.' },
    { title: 'Transparent Pricing', description: 'Clear fee structure with no hidden costs. You know exactly what you pay for.' },
    { title: 'Quality Guarantee', description: 'We stand behind our quality inspections with a money-back guarantee on QC services.' },
    { title: 'Fast Communication', description: '24-hour response time with dedicated account managers for each client.' },
  ]

  return (
    <section className="bg-gradient-to-br from-navy-900 to-navy-950 py-16 lg:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Trust & Credibility"
          title="Why Global Buyers Trust Us"
          subtitle="We've built our reputation on reliability, transparency, and results."
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {trustPoints.map((point) => (
            <div key={point.title} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-10 h-10 bg-trust-500/20 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-trust-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{point.title}</h3>
              <p className="text-navy-300 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Case Studies ── */
function CaseStudiesSection() {
  const caseStudies = [
    {
      client: 'US Electronics Retailer',
      industry: 'Consumer Electronics',
      result: 'Reduced sourcing costs by 32%',
      description: 'Helped a mid-size US retailer switch from multiple unreliable suppliers to a consolidated sourcing solution with verified factories.',
      metric: '$480K saved',
      color: 'bg-royal-50 border-royal-200',
    },
    {
      client: 'European Fashion Brand',
      industry: 'Textiles & Apparel',
      result: 'Improved quality pass rate to 99.2%',
      description: 'Implemented multi-stage QC process for a European fashion brand, eliminating quality issues that plagued their previous sourcing.',
      metric: '99.2% quality',
      color: 'bg-trust-50 border-trust-200',
    },
    {
      client: 'Australian Hardware Company',
      industry: 'Hardware & Tools',
      result: 'Reduced lead time by 18 days',
      description: 'Streamlined the supply chain for an Australian hardware importer by optimizing production scheduling and shipping routes.',
      metric: '18 days faster',
      color: 'bg-cta-50 border-cta-200',
    },
  ]

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Case Studies"
          title="Real Results for Real Clients"
          subtitle="See how we've helped businesses around the world optimize their China sourcing operations."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study) => (
            <div key={study.client} className={`${study.color} border rounded-xl p-6 lg:p-8`}>
              <span className="inline-block bg-white/80 text-navy-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {study.industry}
              </span>
              <h3 className="text-xl font-bold text-navy-900 mb-2">{study.client}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{study.description}</p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-2xl font-bold text-cta-500">{study.metric}</p>
                <p className="text-sm text-gray-500">{study.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-cta-500 hover:text-cta-600 font-semibold transition-colors"
          >
            View all case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── Testimonials ── */
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "SSourcing China transformed our supply chain. Their factory verification process saved us from a potentially disastrous partnership with a fraudulent supplier.",
      name: "Michael Chen",
      title: "Procurement Director, TechParts Inc.",
      country: "United States",
    },
    {
      quote: "We've been working with them for 3 years now. Their QC team catches issues that we would never have found until products arrived. Highly recommended.",
      name: "Sarah Williams",
      title: "Operations Manager, EuroTrade GmbH",
      country: "Germany",
    },
    {
      quote: "The communication is excellent. Our account manager responds within hours, and the production tracking updates keep us informed at every step.",
      name: "James Morrison",
      title: "CEO, Pacific Imports Ltd.",
      country: "Australia",
    },
  ]

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Testimonials"
          title="What Our Clients Say"
          subtitle="Hear from businesses that have successfully sourced products through SSourcing China."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-gray-50 rounded-xl p-6 lg:p-8 border border-gray-100">
              <Quote className="w-8 h-8 text-cta-300 mb-4" />
              <p className="text-gray-700 leading-relaxed mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy-100 rounded-full flex items-center justify-center">
                    <span className="text-navy-700 font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── FAQ ── */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'How much does your sourcing service cost?',
      answer: 'We charge a transparent sourcing fee based on the order value, typically ranging from 5-10%. There are no upfront fees, and you only pay once we successfully match you with a supplier. Factory verification and QC services are quoted separately based on scope.',
    },
    {
      question: 'How do you verify suppliers and factories?',
      answer: 'Our verification process includes: business license verification, on-site factory audits, production capability assessment, quality management system review, compliance checks, and reference checks from existing clients. We visit every factory in person.',
    },
    {
      question: 'What is your typical lead time?',
      answer: 'Lead times vary by product and order size. Supplier sourcing typically takes 3-7 business days. Sample production takes 7-14 days. Mass production lead times depend on the product complexity and quantity, usually 15-45 days. Shipping adds 15-35 days by sea or 5-10 days by air.',
    },
    {
      question: 'Do you handle small orders?',
      answer: 'Yes, we work with businesses of all sizes. While minimum order quantities vary by factory and product, we can often find suppliers willing to accept smaller orders, especially for initial trial runs. Contact us with your specific requirements.',
    },
    {
      question: 'What happens if there are quality issues?',
      answer: 'If our QC inspection identifies issues, we work with the factory to resolve them before shipping. If issues are found after delivery, we help negotiate with the supplier for replacement or refund. Our quality guarantee covers our inspection services.',
    },
    {
      question: 'Which countries do you serve?',
      answer: 'We serve clients worldwide, with primary markets in North America, Europe, Australia, and the Middle East. Our team is experienced with export requirements and customs regulations for most major markets.',
    },
  ]

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Get answers to common questions about our China sourcing services."
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-navy-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Inquiry CTA Section ── */
function InquirySection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block text-cta-500 text-sm font-semibold uppercase tracking-widest mb-3">
              Start Sourcing Today
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Ready to Source Products from China?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Tell us what you need and our sourcing team will get back to you within 24 hours
              with supplier options, pricing estimates, and a clear action plan.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-trust-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-trust-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900">Free Initial Consultation</h4>
                  <p className="text-sm text-gray-600">No commitment required. We&apos;ll discuss your needs and provide honest advice.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-trust-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-trust-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900">Detailed Supplier Report</h4>
                  <p className="text-sm text-gray-600">Receive a comprehensive report with 3-5 qualified supplier options.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-trust-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-trust-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900">Transparent Pricing</h4>
                  <p className="text-sm text-gray-600">Clear breakdown of product cost, sourcing fee, and logistics expenses.</p>
                </div>
              </div>
            </div>
          </div>

          <InquiryForm />
        </div>
      </div>
    </section>
  )
}

/* ── Main Home Page ── */
export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <FAQSection />
      <InquirySection />
    </div>
  )
}
