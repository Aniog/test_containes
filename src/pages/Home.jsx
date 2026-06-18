import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Shield, Factory, Truck, Search, Eye, ClipboardCheck, Package, Globe, Users, Star, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: "How do you verify suppliers in China?",
    answer: "We conduct comprehensive factory verification including business license checks, on-site inspections, production capacity assessment, quality management systems review, and financial stability checks. We provide detailed reports with photos and videos."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We source across multiple industries including electronics, machinery, textiles, packaging, furniture, automotive parts, medical devices, and consumer goods. Our team has expertise in various manufacturing sectors."
  },
  {
    question: "How does quality inspection work?",
    answer: "We offer pre-shipment inspections at any stage of production. Our inspectors check product quality, specifications, packaging, and labeling. We provide detailed inspection reports with photos and a pass/fail assessment."
  },
  {
    question: "What are your service fees?",
    answer: "Our fees vary based on project scope and requirements. We offer transparent pricing with no hidden costs. Contact us for a free consultation and quote tailored to your specific needs."
  },
  {
    question: "Do you handle shipping and logistics?",
    answer: "Yes, we coordinate the entire shipping process including freight forwarding, customs clearance documentation, and delivery to your specified location. We work with reliable logistics partners."
  },
  {
    question: "How long does the sourcing process take?",
    answer: "Timeline varies based on product complexity and search scope. Typically, supplier identification takes 1-2 weeks, verification 1 week, and production follow-up depends on order size. We'll provide a detailed timeline for your project."
  }
]

const trustPoints = [
  {
    icon: Shield,
    title: "Verified Suppliers",
    description: "Every supplier undergoes rigorous verification including factory audits, business license checks, and financial stability assessment."
  },
  {
    icon: Eye,
    title: "Quality Assurance",
    description: "Professional QC inspectors ensure your products meet specifications through pre-shipment inspections and production monitoring."
  },
  {
    icon: Globe,
    title: "Local Expertise",
    description: "Our team based in China has deep knowledge of local business practices, manufacturing capabilities, and market conditions."
  },
  {
    icon: Users,
    title: "Transparent Communication",
    description: "Regular updates and detailed reports keep you informed throughout the sourcing and production process."
  }
]

const problems = [
  {
    title: "Language Barriers",
    description: "Navigate Chinese business culture and communicate effectively with suppliers in their native language."
  },
  {
    title: "Quality Risks",
    description: "Ensure consistent product quality through professional inspections and production monitoring."
  },
  {
    title: "Supplier Scams",
    description: "Verify supplier legitimacy and protect yourself from fraudulent companies and middlemen."
  },
  {
    title: "Logistics Complexity",
    description: "Streamline shipping and customs clearance with coordinated logistics support."
  }
]

const caseStudiesPreview = [
  {
    industry: "Electronics",
    title: "Smart Home Device Sourcing",
    result: "Saved 35% on manufacturing costs",
    description: "Helped a European retailer source smart home controllers from verified manufacturers in Shenzhen."
  },
  {
    industry: "Furniture",
    title: "Office Furniture Batch Order",
    result: "Delivered on time with zero defects",
    description: "Coordinated a large-scale order of office furniture with rigorous quality control throughout production."
  },
  {
    industry: "Packaging",
    title: "Custom Packaging Solutions",
    result: "Achieved 40% cost reduction",
    description: "Found suitable packaging suppliers for a US e-commerce brand, optimizing cost and quality."
  }
]

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState('idle')

  const handleFaqToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        product: '',
        quantity: '',
        message: ''
      })
    }, 1500)
  }

  return (
    <div>
      <Helmet>
        <title>China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China</title>
        <meta name="description" content="SSourcing China is a professional China sourcing agent helping overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-slate-100/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Trusted by 500+ Global Buyers
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                China Sourcing Agent for{' '}
                <span className="text-blue-600">Global Buyers</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, and coordinate seamless shipping. Your trusted partner for hassle-free China sourcing.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
                >
                  See How It Works
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white flex items-center justify-center text-xs font-medium text-slate-600">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 mt-1">5.0 from 200+ reviews</p>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Search className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Supplier Discovery</h3>
                        <p className="text-sm text-slate-600">Find verified manufacturers</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Factory Verification</h3>
                        <p className="text-sm text-slate-600">Background checks & audits</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <ClipboardCheck className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Quality Control</h3>
                        <p className="text-sm text-slate-600">Pre-shipment inspections</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                        <Truck className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Shipping & Logistics</h3>
                        <p className="text-sm text-slate-600">End-to-end delivery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Why Choose SSourcing China
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We bridge the gap between overseas buyers and Chinese manufacturers, ensuring transparency, quality, and reliability at every step.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <point.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{point.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Our Sourcing Services
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Comprehensive solutions to streamline your China sourcing operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Supplier Identification",
                description: "Find and match you with verified manufacturers based on your product requirements, budget, and quality standards."
              },
              {
                icon: Factory,
                title: "Factory Verification",
                description: "Comprehensive on-site audits including business license verification, production capacity assessment, and quality systems review."
              },
              {
                icon: Eye,
                title: "Quality Inspection",
                description: "Pre-shipment inspections at any production stage. Detailed reports with photos, measurements, and pass/fail assessment."
              },
              {
                icon: ClipboardCheck,
                title: "Production Monitoring",
                description: "Regular factory visits during production to ensure timeline adherence and quality consistency."
              },
              {
                icon: Package,
                title: "Sample Management",
                description: "Coordinate sample requests, evaluate quality, and manage approval process for mass production."
              },
              {
                icon: Truck,
                title: "Shipping & Logistics",
                description: "End-to-end logistics coordination including freight forwarding, customs documentation, and delivery."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
                <Link to="/services" className="inline-flex items-center mt-4 text-blue-600 font-medium hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                We Solve Your China Sourcing Challenges
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Sourcing from China comes with unique challenges. We help you navigate them effectively.
              </p>
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{problem.title}</h3>
                      <p className="text-slate-600 text-sm mt-1">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Start Sourcing?</h3>
                <p className="text-blue-100 mb-8">
                  Get expert assistance for your next China sourcing project. Our team is ready to help you find the right suppliers.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Success Stories
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              See how we've helped businesses worldwide source from China successfully
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudiesPreview.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <Factory className="w-16 h-16 text-slate-400" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mb-3">
                    {study.industry}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{study.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{study.description}</p>
                  <div className="flex items-center gap-2 text-green-600 font-medium text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    {study.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Case Studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Get answers to common questions about our China sourcing services
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                  onClick={() => handleFaqToggle(index)}
                >
                  <span className="font-medium text-slate-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Get Your Free Sourcing Quote
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Tell us about your sourcing needs and we'll connect you with verified Chinese suppliers within 48 hours.
              </p>
              <div className="space-y-4">
                {[
                  "Free supplier matching",
                  "No upfront fees",
                  "Verified manufacturers only",
                  "Quality inspection included"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 text-slate-900">
              {formStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-slate-600">We've received your inquiry and will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Company name"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1">Product *</label>
                      <input
                        type="text"
                        id="product"
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="What do you need?"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1">Quantity</label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Estimated quantity"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us more about your requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Get Free Quote'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home