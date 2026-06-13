import React from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  Shield,
  ClipboardCheck,
  TrendingUp,
  Ship,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Globe,
  Award,
  Clock,
  AlertTriangle,
  XCircle,
  Package,
  FileText,
  MessageSquare,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#0f2b46] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f2b46] via-[#0f2b46]/95 to-[#0f2b46]/70" />

      <div className="container-custom relative z-10 py-32 md:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Globe className="w-4 h-4 text-[#c8963e]" />
            <span className="text-white/90 text-sm font-medium">Trusted by 500+ Global Buyers</span>
          </div>

          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            China Sourcing Agent for Global Buyers
          </h1>

          <p id="hero-subtitle" className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl">
            We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/how-it-works" className="btn-secondary text-lg px-8 py-4">
              See How It Works
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#c8963e]" />
              <span className="text-white/70 text-sm">Verified Suppliers</span>
            </div>
            <div className="flex items-center gap-2">
              <ClipboardCheck className="w-5 h-5 text-[#c8963e]" />
              <span className="text-white/70 text-sm">Quality Inspections</span>
            </div>
            <div className="flex items-center gap-2">
              <Ship className="w-5 h-5 text-[#c8963e]" />
              <span className="text-white/70 text-sm">End-to-End Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We identify and evaluate reliable manufacturers across China based on your product requirements, budget, and quality standards.',
    },
    {
      icon: Shield,
      title: 'Factory Verification',
      description: 'On-site audits to verify business licenses, production capacity, quality management systems, and social compliance.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Pre-production, during-production, and pre-shipment inspections to ensure your products meet specifications.',
    },
    {
      icon: TrendingUp,
      title: 'Production Monitoring',
      description: 'Regular factory visits and progress reports to keep your production on schedule and address issues early.',
    },
    {
      icon: Ship,
      title: 'Shipping Coordination',
      description: 'Complete logistics support including freight forwarding, customs documentation, and door-to-door delivery.',
    },
    {
      icon: FileText,
      title: 'Sample Management',
      description: 'We collect, evaluate, and ship product samples so you can verify quality before placing bulk orders.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-[#c8963e] font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="section-title mt-3">Our Sourcing Services</h2>
          <p className="section-subtitle">
            End-to-end sourcing support from supplier discovery to final delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="card group">
              <div className="w-14 h-14 bg-[#0f2b46]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#c8963e]/10 transition-colors">
                <service.icon className="w-7 h-7 text-[#0f2b46] group-hover:text-[#c8963e] transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-[#4a5568] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Requirements',
      description: 'Tell us what products you need, your target price, quantity, and quality standards.',
    },
    {
      number: '02',
      title: 'Supplier Matching',
      description: 'We identify and shortlist qualified manufacturers that match your specifications.',
    },
    {
      number: '03',
      title: 'Verification & Sampling',
      description: 'We verify factories, collect samples, and send them to you for approval.',
    },
    {
      number: '04',
      title: 'Production & QC',
      description: 'We monitor production and conduct quality inspections at key stages.',
    },
    {
      number: '05',
      title: 'Shipping & Delivery',
      description: 'We handle all logistics, customs documentation, and coordinate delivery to your door.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-[#f5f7fa]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-[#c8963e] font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="section-title mt-3">How It Works</h2>
          <p className="section-subtitle">
            A clear, transparent process from inquiry to delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              <div className="w-16 h-16 bg-[#0f2b46] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#c8963e] font-bold text-lg">{step.number}</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-[#4a5568] text-sm leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-[#c8963e]/30" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/how-it-works" className="text-[#0f2b46] font-semibold inline-flex items-center gap-2 hover:text-[#c8963e] transition-colors">
            Learn more about our process
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// Products We Source Section
function ProductsSection() {
  const products = [
    { title: 'Electronics & Components', icon: 'electronics' },
    { title: 'Home & Garden Products', icon: 'home' },
    { title: 'Apparel & Textiles', icon: 'apparel' },
    { title: 'Industrial Equipment', icon: 'industrial' },
    { title: 'Packaging & Printing', icon: 'packaging' },
    { title: 'Toys & Gifts', icon: 'toys' },
    { title: 'Automotive Parts', icon: 'automotive' },
    { title: 'Building Materials', icon: 'building' },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-[#c8963e] font-semibold text-sm uppercase tracking-wider">Product Categories</span>
          <h2 className="section-title mt-3">Products We Source</h2>
          <p className="section-subtitle">
            We source virtually any product manufactured in China. Here are some of our most common categories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="card text-center group cursor-pointer hover:bg-[#0f2b46] hover:text-white transition-all"
            >
              <div className="w-16 h-16 bg-[#f5f7fa] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/10 transition-colors">
                <Package className="w-7 h-7 text-[#0f2b46] group-hover:text-[#c8963e] transition-colors" />
              </div>
              <h3 className="text-sm font-semibold">{product.title}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products" className="btn-primary">
            View All Categories
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// Problems We Solve Section
function ProblemsSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Unreliable Suppliers',
      description: 'We verify every supplier before you commit, reducing the risk of fraud and poor quality.',
    },
    {
      icon: XCircle,
      title: 'Quality Issues',
      description: 'Our inspection process catches defects before products leave the factory, saving you costly returns.',
    },
    {
      icon: Clock,
      title: 'Communication Barriers',
      description: 'We bridge the language and cultural gap, ensuring clear communication between you and your suppliers.',
    },
    {
      icon: FileText,
      title: 'Complex Logistics',
      description: 'We handle customs, documentation, and freight forwarding so you can focus on your business.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-[#0f2b46] text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-[#c8963e] font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="section-title mt-3 text-white">Problems We Solve</h2>
          <p className="section-subtitle text-white/70">
            Sourcing from China can be challenging. We remove the risks and complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem) => (
            <div key={problem.title} className="bg-white/5 rounded-xl p-8 border border-white/10">
              <problem.icon className="w-10 h-10 text-[#c8963e] mb-6" />
              <h3 className="text-xl font-semibold mb-3 text-white">{problem.title}</h3>
              <p className="text-white/70 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Trust Points Section
function TrustSection() {
  const stats = [
    { value: '10+', label: 'Years of Experience' },
    { value: '500+', label: 'Global Clients' },
    { value: '2,000+', label: 'Suppliers Verified' },
    { value: '98%', label: 'Client Satisfaction' },
  ]

  const trustPoints = [
    { icon: Shield, text: 'All suppliers verified with on-site audits' },
    { icon: CheckCircle, text: 'Transparent pricing with no hidden fees' },
    { icon: Users, text: 'Dedicated sourcing agent for every client' },
    { icon: Award, text: 'ISO 9001 quality management standards' },
  ]

  return (
    <section className="py-20 md:py-28 bg-[#f5f7fa]">
      <div className="container-custom">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#c8963e] mb-2">{stat.value}</div>
              <div className="text-[#4a5568] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust points */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <h3 className="text-2xl font-semibold text-center mb-8">Why Buyers Trust Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trustPoints.map((point) => (
              <div key={point.text} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#c8963e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-5 h-5 text-[#c8963e]" />
                </div>
                <p className="text-[#4a5568] pt-2">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Case Studies Section
function CaseStudiesSection() {
  const cases = [
    {
      title: 'Electronics Manufacturer Sources PCB Components',
      category: 'Electronics',
      description: 'A US-based electronics company needed reliable PCB manufacturers in Shenzhen. We verified 5 factories, negotiated pricing, and managed quality control for a 50,000-unit order.',
      result: '25% cost savings, zero defect rate',
    },
    {
      title: 'Retailer Launches Private Label Home Products',
      category: 'Home & Garden',
      description: 'A European retailer wanted to launch a private label home goods line. We sourced manufacturers, managed sampling, and coordinated production for 200+ SKUs.',
      result: 'Launched on time, 40% margin improvement',
    },
    {
      title: 'Startup Navigates First China Order',
      category: 'Apparel',
      description: 'A UK fashion startup needed help with their first bulk order from China. We handled everything from supplier selection to final delivery.',
      result: 'Successful launch, repeat orders within 3 months',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-[#c8963e] font-semibold text-sm uppercase tracking-wider">Success Stories</span>
          <h2 className="section-title mt-3">Case Studies</h2>
          <p className="section-subtitle">
            Real results from real clients who trusted us with their China sourcing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item) => (
            <div key={item.title} className="card flex flex-col">
              <span className="text-[#c8963e] text-sm font-semibold mb-3">{item.category}</span>
              <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
              <p className="text-[#4a5568] leading-relaxed flex-1 mb-6">{item.description}</p>
              <div className="bg-[#f5f7fa] rounded-lg p-4 mb-6">
                <span className="text-sm font-semibold text-[#0f2b46]">Result: </span>
                <span className="text-sm text-[#4a5568]">{item.result}</span>
              </div>
              <Link to="/case-studies" className="text-[#0f2b46] font-semibold inline-flex items-center gap-2 hover:text-[#c8963e] transition-colors">
                Read full case study
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState(0)

  const faqs = [
    {
      question: 'How do you find and verify suppliers?',
      answer: 'We use a multi-step verification process that includes checking business licenses, conducting on-site factory audits, reviewing production capabilities, and assessing quality management systems. We only recommend suppliers that pass our verification criteria.',
    },
    {
      question: 'What are your fees?',
      answer: 'Our fees depend on the scope of services required. We offer transparent pricing with no hidden costs. Contact us for a free quote tailored to your specific sourcing needs.',
    },
    {
      question: 'Can you help with small orders?',
      answer: 'Yes, we work with businesses of all sizes. While larger orders may benefit from better pricing, we can help with small and medium orders as well. Minimum order quantities depend on the supplier and product type.',
    },
    {
      question: 'How do you handle quality issues?',
      answer: 'We conduct inspections at multiple stages of production. If quality issues are found, we work with the supplier to resolve them before shipment. Our goal is to catch problems early so you receive products that meet your standards.',
    },
    {
      question: 'Do you handle shipping and customs?',
      answer: 'Yes, we provide complete logistics support including freight forwarding, customs documentation, and coordination with shipping lines. We can arrange door-to-door delivery or port-to-port, depending on your preference.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Typical timelines range from 2-4 weeks for supplier identification and sampling, plus production time which varies by product and order size. We provide realistic timelines upfront and keep you updated throughout the process.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-[#f5f7fa]">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-[#c8963e] font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="section-title mt-3">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Answers to common questions about our sourcing services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#c8963e] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#4a5568] flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-[#4a5568] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-[#0f2b46]">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Source from China?
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
          Tell us what you need and we will find the right suppliers, verify quality, and manage the entire process for you.
        </p>
        <Link to="/contact" className="btn-primary text-lg px-10 py-4">
          Get a Free Sourcing Quote
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </section>
  )
}

// Inquiry Form Section
function InquiryFormSection() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [status, setStatus] = React.useState('idle')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', product: '', quantity: '', message: '' })
    }, 1500)
  }

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-[#c8963e] font-semibold text-sm uppercase tracking-wider">Get Started</span>
          <h2 className="section-title mt-3">Request a Free Sourcing Quote</h2>
          <p className="section-subtitle">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#f5f7fa] rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#c8963e]/50 focus:border-[#c8963e] transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#c8963e]/50 focus:border-[#c8963e] transition-colors"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-semibold mb-2">
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#c8963e]/50 focus:border-[#c8963e] transition-colors"
                placeholder="Your company"
              />
            </div>
            <div>
              <label htmlFor="product" className="block text-sm font-semibold mb-2">
                Product Category *
              </label>
              <input
                id="product"
                name="product"
                type="text"
                required
                value={formData.product}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#c8963e]/50 focus:border-[#c8963e] transition-colors"
                placeholder="e.g., Electronics, Apparel"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="quantity" className="block text-sm font-semibold mb-2">
                Estimated Quantity
              </label>
              <input
                id="quantity"
                name="quantity"
                type="text"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#c8963e]/50 focus:border-[#c8963e] transition-colors"
                placeholder="e.g., 1,000 units"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#c8963e]/50 focus:border-[#c8963e] transition-colors resize-none"
                placeholder="Describe your product requirements, target price, quality standards, and any other details..."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="btn-primary w-full md:w-auto text-lg px-10 py-4 disabled:opacity-50"
          >
            {status === 'submitting' ? 'Sending...' : 'Get a Free Sourcing Quote'}
          </button>

          {status === 'success' && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
              Thank you! We have received your inquiry and will contact you within 24 hours.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

// Home Page
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquiryFormSection />
      <CTASection />
    </>
  )
}
