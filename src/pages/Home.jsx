import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  CheckCircle, 
  ArrowRight, 
  Shield, 
  Factory, 
  ClipboardCheck, 
  Truck,
  Star,
  ChevronDown,
  ChevronUp,
  Send,
  Phone,
  Mail
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

// Trust badges data
const trustBadges = [
  { number: '500+', label: 'Clients Served' },
  { number: '10+', label: 'Years Experience' },
  { number: '2000+', label: 'Factories Verified' },
  { number: '98%', label: 'Client Satisfaction' },
]

// Services overview
const services = [
  {
    icon: Shield,
    title: 'Supplier Verification',
    description: 'We verify factory legitimacy, production capacity, certifications, and financial stability to ensure you work with trustworthy partners.',
    href: '/services#verification',
  },
  {
    icon: Factory,
    title: 'Factory Sourcing',
    description: 'We find the right manufacturers based on your product specifications, quality requirements, and budget constraints.',
    href: '/services#sourcing',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Professional QC inspections at any production stage. We check product quality, packaging, and compliance with your specifications.',
    href: '/services#inspection',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'We coordinate freight forwarding, customs clearance, and door-to-door delivery to ensure smooth logistics.',
    href: '/services#shipping',
  },
]

// Sourcing process steps
const processSteps = [
  {
    step: '01',
    title: 'Submit Your Request',
    description: 'Tell us what you need - product details, quantity, target price, and any special requirements.',
  },
  {
    step: '02',
    title: 'We Find Suppliers',
    description: 'We research and vet manufacturers, then present you with qualified options that match your criteria.',
  },
  {
    step: '03',
    title: 'Sample & Negotiation',
    description: 'We request samples, negotiate terms, and help you make an informed decision on the best supplier.',
  },
  {
    step: '04',
    title: 'Production & QC',
    description: 'We monitor production progress and conduct quality inspections to ensure everything meets standards.',
  },
  {
    step: '05',
    title: 'Shipping & Delivery',
    description: 'We coordinate shipping, handle customs documentation, and track your order until delivery.',
  },
]

// Products we source
const productCategories = [
  { name: 'Electronics', image: 'electronics manufacturing factory' },
  { name: 'Textiles & Apparel', image: 'textile factory manufacturing' },
  { name: 'Furniture', image: 'furniture manufacturing factory' },
  { name: 'Machinery', image: 'industrial machinery manufacturing' },
  { name: 'Packaging', image: 'packaging factory production' },
  { name: 'Home & Garden', image: 'home products factory' },
  { name: 'Toys & Gifts', image: 'toy manufacturing factory' },
  { name: 'Automotive Parts', image: 'auto parts manufacturing' },
]

// Problems we solve
const problems = [
  {
    problem: 'Language barriers',
    solution: 'Native English and Mandarin speakers bridge communication gaps',
  },
  {
    problem: 'Quality issues',
    solution: 'On-site inspections ensure products meet your standards',
  },
  {
    problem: 'Supplier scams',
    solution: 'Thorough verification protects you from fraudulent suppliers',
  },
  {
    problem: 'Logistics complexity',
    solution: 'End-to-end shipping coordination from factory to your door',
  },
  {
    problem: 'Cultural differences',
    solution: 'Local expertise helps navigate Chinese business practices',
  },
]

// Case studies preview
const caseStudies = [
  {
    company: 'TechStart Inc.',
    industry: 'Electronics',
    challenge: 'Needed reliable supplier for 50,000 smart home devices',
    result: 'Found verified manufacturer, saved 30% costs, zero quality issues',
    category: 'Electronics',
  },
  {
    company: 'Fashion Forward',
    industry: 'Apparel',
    challenge: 'Sourcing sustainable fabrics from Chinese suppliers',
    result: 'Connected with GOTS-certified factory, 20% faster lead times',
    category: 'Textiles',
  },
  {
    company: 'BuildRight Co.',
    industry: 'Construction',
    challenge: 'Finding manufacturer for custom hardware components',
    result: 'Verified supplier with ISO 9001 certification, 40% cost reduction',
    category: 'Machinery',
  },
]

// FAQ items
const faqItems = [
  {
    question: 'How much does your sourcing service cost?',
    answer: 'Our fees vary based on project scope and service requirements. We offer transparent pricing with no hidden costs. Contact us for a free consultation and quote tailored to your needs.',
  },
  {
    question: 'How do you verify factories?',
    answer: 'We conduct comprehensive factory audits including business license verification, production capacity assessment, quality management systems review, and on-site inspections.',
  },
  {
    question: 'Can you help with small orders?',
    answer: 'Yes, we work with businesses of all sizes. While some services are more cost-effective for larger orders, we can tailor our approach to meet your specific requirements.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Timeline varies based on product complexity and supplier availability. Typically, initial supplier shortlist takes 1-2 weeks, with sample evaluation and negotiation adding 2-4 weeks.',
  },
  {
    question: 'Do you provide quality inspections?',
    answer: 'Yes, we offer comprehensive QC services including pre-production, during-production, and pre-shipment inspections. All inspections include detailed reports with photos.',
  },
]

const Home = () => {
  const [faqOpen, setFaqOpen] = useState({})
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState('idle')
  const heroRef = useRef(null)

  useEffect(() => {
    // Load images when component mounts
    if (heroRef.current) {
      try {
        ImageHelper.loadImages(strkImgConfig, heroRef.current)
      } catch (e) {
        console.log('Image helper not available')
      }
    }
  }, [])

  const toggleFaq = (index) => {
    setFaqOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        product: '',
        quantity: '',
        message: '',
      })
    }, 1500)
  }

  return (
    <div>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-600/30 border border-blue-500/50 rounded-full px-4 py-2 text-sm mb-6">
                <Shield className="w-4 h-4 mr-2 text-blue-300" />
                Trusted by 500+ Global Buyers
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                We help you find reliable suppliers, verify factories, inspect quality, 
                and coordinate shipping. Your trusted partner for seamless China sourcing.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-white/20"
                >
                  See How It Works
                </Link>
              </div>
              
              {/* Trust badges */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {trustBadges.map((badge) => (
                  <div key={badge.label} className="text-center">
                    <div className="text-3xl font-bold text-blue-400">{badge.number}</div>
                    <div className="text-sm text-gray-400 mt-1">{badge.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero image/illustration */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  data-strk-img-id="hero-img-001"
                  data-strk-img="[hero-title] [hero-subtitle]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect fill='%231e293b' width='800' height='600'/%3E%3Ctext x='400' y='300' text-anchor='middle' fill='%2364748b' font-size='24'%3EChina Factory Sourcing%3C/text%3E%3C/svg%3E"
                  alt="China sourcing operations"
                  className="w-full h-auto"
                />
                {/* Floating cards */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Factory Verified</div>
                      <div className="text-xs text-gray-500">ISO 9001 Certified</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <ClipboardCheck className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Quality Inspected</div>
                      <div className="text-xs text-gray-500">AQL Standards</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Sourcing Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to ensure your China sourcing is successful, 
              from supplier discovery to final delivery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors border border-gray-100 hover:border-blue-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              How Our Sourcing Works
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              A proven 5-step process to connect you with the right Chinese suppliers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
                  <div className="text-5xl font-bold text-blue-100 mb-4">{step.step}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Products We Source
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We have expertise across a wide range of industries and product categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {productCategories.map((category) => (
              <Link
                key={category.name}
                to="/products"
                className="group relative overflow-hidden rounded-xl aspect-square bg-gray-100"
              >
                <img
                  data-strk-img-id={`product-${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  data-strk-img={`[product-name-${category.name.toLowerCase().replace(/\s+/g, '-')}] sourcing`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23e2e8f0' width='400' height='400'/%3E%3Ctext x='200' y='200' text-anchor='middle' fill='%2394a3b8' font-size='18'%3EProduct Image%3C/text%3E%3C/svg%3E"
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span id={`product-name-${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-white font-semibold">
                    {category.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center text-blue-900 font-medium hover:text-blue-700"
            >
              View All Product Categories <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              We Solve Your Sourcing Challenges
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Common problems overseas buyers face when sourcing from China - and how we help
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((item, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="text-sm text-blue-400 font-medium mb-2">Problem</div>
                <h3 className="text-lg font-semibold mb-4">{item.problem}</h3>
                <div className="border-t border-slate-700 my-4"></div>
                <div className="text-sm text-green-400 font-medium mb-2">Solution</div>
                <p className="text-gray-300">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Success Stories
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from our clients who trusted us with their China sourcing
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                  <span className="text-white/30 text-6xl font-bold">{study.category[0]}</span>
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">{study.industry}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{study.company}</h3>
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">Challenge:</div>
                    <p className="text-gray-700 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="text-sm text-green-600 font-medium mb-1">Result:</div>
                    <p className="text-gray-700 text-sm">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Quick answers to common questions about our sourcing services
            </p>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{item.question}</span>
                  {faqOpen[index] ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {faqOpen[index] && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Quote Form Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get Your Free Sourcing Quote
              </h2>
              <p className="text-lg text-blue-200 mb-8">
                Tell us about your sourcing needs and we'll provide a comprehensive quote 
                within 24 hours. No obligation, no hidden fees.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-blue-100">Response within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-blue-100">Tailored sourcing strategy</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-blue-100">Transparent pricing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-blue-100">Dedicated account manager</span>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-blue-800">
                <p className="text-blue-200 mb-4">Prefer to talk directly?</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+8675588888888" 
                    className="inline-flex items-center text-white hover:text-blue-200"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    +86 755 8888 8888
                  </a>
                  <a 
                    href="mailto:info@ssourcingchina.com" 
                    className="inline-flex items-center text-white hover:text-blue-200"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    info@ssourcingchina.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8">
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
                  <p className="text-gray-600">
                    Thank you for your inquiry. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Company Ltd"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g. 10,000 units"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
                      Product You Want to Source *
                    </label>
                    <input
                      type="text"
                      id="product"
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Describe your product requirements"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Any specific requirements, target price, timeline, etc."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 px-6 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Get Free Quote
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
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