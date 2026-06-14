import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Shield, CheckCircle, Factory, Truck, Search, FileCheck, 
  ClipboardCheck, Package, Users, Clock, Globe, ArrowRight,
  ChevronDown, ChevronUp, Star, MessageSquare, Send
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Globe className="h-4 w-4" />
              Trusted by 500+ Global Buyers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-xl mx-auto lg:mx-0">
              Find reliable suppliers, verify factories, inspect quality, follow production, 
              and coordinate shipping — all with one trusted partner in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
                  How It Works
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Hero Image/Visual */}
          <div className="hidden lg:block relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <Factory className="h-8 w-8 text-primary mb-2" />
                  <p className="font-semibold text-gray-900 text-sm">Factory Verification</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <ClipboardCheck className="h-8 w-8 text-success mb-2" />
                  <p className="font-semibold text-gray-900 text-sm">Quality Inspection</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <Package className="h-8 w-8 text-secondary mb-2" />
                  <p className="font-semibold text-gray-900 text-sm">Production Follow-up</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <Truck className="h-8 w-8 text-accent mb-2" />
                  <p className="font-semibold text-gray-900 text-sm">Shipping Coordination</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Trust Stats Section
const TrustStats = () => {
  const stats = [
    { value: '500+', label: 'Clients Worldwide' },
    { value: '10+', label: 'Years Experience' },
    { value: '2000+', label: 'Factory Partners' },
    { value: '98%', label: 'Client Satisfaction' },
  ]

  return (
    <section className="bg-surface py-12 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Services Section
const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We verify factory existence, business licenses, production capacity, and certifications to ensure you work with legitimate suppliers.',
    },
    {
      icon: FileCheck,
      title: 'Quality Inspection',
      description: 'Professional QC inspections at any production stage. We check materials, workmanship, packaging, and compliance with your specifications.',
    },
    {
      icon: ClipboardCheck,
      title: 'Production Follow-up',
      description: 'Regular updates on production progress, scheduling, and quality checkpoints. We ensure timelines are met and quality is maintained.',
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      description: 'We handle documentation, customs clearance, and logistics coordination. From FOB to door delivery, we manage the process.',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Sourcing Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive support at every stage of your China sourcing journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group bg-surface rounded-xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon className="h-6 w-6 text-primary group-hover:text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services">
            <Button variant="outline">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Problems We Solve Section
const ProblemsSection = () => {
  const problems = [
    {
      title: 'Language & Communication Barriers',
      solution: 'Native English speakers with fluent Mandarin. We translate technical requirements, negotiate with suppliers, and ensure clear communication.',
    },
    {
      title: 'Quality Control Concerns',
      solution: 'Professional inspectors with industry experience. We catch issues early, provide detailed reports, and ensure your standards are met.',
    },
    {
      title: 'Supplier Reliability Issues',
      solution: 'Thorough verification process before any engagement. We check licenses, visit factories, and verify production capabilities.',
    },
    {
      title: 'Shipping & Logistics Complexity',
      solution: 'End-to-end logistics support. We handle documentation, coordinate with freight forwarders, and track shipments to your door.',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Solve Your China Sourcing Challenges
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Sourcing from China doesn't have to be complicated or risky. We handle the complexities so you can focus on your business.
            </p>
            <Link to="/contact">
              <Button>Get Started Today</Button>
            </Link>
          </div>

          <div className="space-y-4">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  {problem.title}
                </h3>
                <p className="text-sm text-gray-600 pl-8">{problem.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Sourcing Process Section
const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Request',
      description: 'Tell us what you need — product specifications, quantity, target price, and timeline.',
    },
    {
      number: '02',
      title: 'Supplier Matching',
      description: 'We identify and verify suitable factories from our network of 2000+ partners.',
    },
    {
      number: '03',
      title: 'Sample & Negotiation',
      description: 'We request samples, negotiate terms, and help you make informed decisions.',
    },
    {
      number: '04',
      title: 'Production & QC',
      description: 'Regular production monitoring and quality inspections throughout the process.',
    },
    {
      number: '05',
      title: 'Shipping & Delivery',
      description: 'We coordinate logistics, handle documentation, and ensure smooth delivery.',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Sourcing Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A clear, transparent process from inquiry to delivery
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-surface rounded-xl p-6 border border-gray-100 h-full">
                <div className="text-4xl font-bold text-primary-200 mb-4">{step.number}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ArrowRight className="h-5 w-5 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/how-it-works">
            <Button variant="outline">
              Learn More About Our Process
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Products We Source Section
const ProductsSection = () => {
  const categories = [
    { name: 'Electronics & Components', examples: 'PCBs, connectors, cables, consumer electronics' },
    { name: 'Home & Garden', examples: 'Furniture, decor, kitchenware, outdoor equipment' },
    { name: 'Textiles & Apparel', examples: 'Garments, fabrics, accessories, footwear' },
    { name: 'Industrial Parts', examples: 'Machinery parts, metal components, tools' },
    { name: 'Packaging & Printing', examples: 'Boxes, labels, bags, promotional materials' },
    { name: 'Sports & Recreation', examples: 'Fitness equipment, outdoor gear, toys' },
  ]

  return (
    <section className="py-16 lg:py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Products We Source
          </h2>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            We have experience across diverse product categories and industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.name}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors"
            >
              <h3 className="font-semibold text-white mb-2">{category.name}</h3>
              <p className="text-sm text-primary-200">{category.examples}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/products">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              View All Product Categories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Trust Points Section
const TrustPointsSection = () => {
  const trustPoints = [
    { icon: Shield, title: 'Verified Factories', description: 'All suppliers are verified through site visits and license checks.' },
    { icon: CheckCircle, title: 'Quality Assurance', description: 'Professional inspectors with industry-specific expertise.' },
    { icon: Users, title: 'Dedicated Support', description: 'Your personal sourcing agent available during business hours.' },
    { icon: Clock, title: 'Transparent Process', description: 'Regular updates and detailed reports at every stage.' },
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose SSourcing China
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We bring expertise, transparency, and reliability to your China sourcing operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point) => (
            <div key={point.title} className="text-center">
              <div className="w-16 h-16 bg-success-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <point.icon className="h-8 w-8 text-success" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{point.title}</h3>
              <p className="text-sm text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Case Studies Preview Section
const CaseStudiesPreview = () => {
  const cases = [
    {
      client: 'European Retailer',
      industry: 'Home Decor',
      challenge: 'Needed to source 20,000 ceramic vases from verified factories with strict quality requirements.',
      result: 'Delivered on time with 99.2% quality pass rate. Saved 35% compared to previous supplier.',
    },
    {
      client: 'US Electronics Brand',
      industry: 'Consumer Electronics',
      challenge: 'Required custom PCBs and connectors with tight tolerances and certification requirements.',
      result: 'Found certified factory, passed all quality tests, established ongoing partnership.',
    },
    {
      client: 'Australian Fitness Company',
      industry: 'Sports Equipment',
      challenge: 'Sourcing gym equipment with specific safety standards for the Australian market.',
      result: 'Completed full compliance testing, delivered 40ft container on schedule.',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how we've helped businesses overcome their China sourcing challenges
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-medium text-primary bg-primary-50 px-2 py-1 rounded">
                  {caseItem.industry}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{caseItem.client}</h3>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2"><strong>Challenge:</strong> {caseItem.challenge}</p>
                <p className="text-sm text-gray-600"><strong>Result:</strong> {caseItem.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/case-studies">
            <Button variant="outline">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// FAQ Section
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'How do I start a sourcing request?',
      answer: 'Simply fill out our inquiry form with your product requirements, quantity, target price, and timeline. We will review your request and get back to you within 24 hours with initial feedback.',
    },
    {
      question: 'What are your service fees?',
      answer: 'Our fees vary based on the scope of services required. We offer transparent pricing with no hidden costs. Contact us for a customized quote based on your specific needs.',
    },
    {
      question: 'How do you verify factories?',
      answer: 'We conduct site visits to verify factory existence, check business licenses, assess production capacity, review quality control systems, and verify worker conditions.',
    },
    {
      question: 'Can you handle sample requests?',
      answer: 'Yes, we can request samples on your behalf, coordinate shipping, and provide detailed feedback on quality, packaging, and compliance with your specifications.',
    },
    {
      question: 'What quality inspection standards do you use?',
      answer: 'We follow internationally recognized standards including AQL sampling, and can customize inspection criteria based on your product requirements and industry standards.',
    },
    {
      question: 'How do you handle shipping and logistics?',
      answer: 'We work with established freight forwarders to coordinate shipping via sea or air. We handle documentation, customs clearance coordination, and provide tracking updates throughout delivery.',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our sourcing services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Quick Inquiry Form Section
const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <section className="py-16 lg:py-24 bg-surface" id="inquiry">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-16 h-16 bg-success-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              Your inquiry has been received. We will review your requirements and get back to you within 24 hours.
            </p>
            <Button onClick={() => setSubmitted(false)} variant="outline">
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 lg:py-24 bg-surface" id="inquiry">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get a Free Sourcing Quote
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Tell us about your sourcing needs and we'll provide a detailed quote within 24 hours. No obligation, no commitment required.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Free Initial Consultation</p>
                  <p className="text-sm text-gray-600">We'll review your requirements and provide expert feedback.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Transparent Pricing</p>
                  <p className="text-sm text-gray-600">Clear breakdown of all costs with no hidden fees.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Quick Response</p>
                  <p className="text-sm text-gray-600">Receive your quote within 24 hours of submitting.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    placeholder="Your Company Ltd"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Category</label>
                  <input
                    type="text"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    placeholder="e.g., Electronics, Furniture"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                  placeholder="e.g., 5,000 units"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
                  placeholder="Describe your product requirements, specifications, target price, timeline, etc."
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                <Send className="mr-2 h-4 w-4" />
                Submit Inquiry
              </Button>
              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to be contacted by our team regarding your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// Main Home Page Component
const Home = () => {
  return (
    <div>
      <HeroSection />
      <TrustStats />
      <ServicesSection />
      <ProblemsSection />
      <ProcessSection />
      <ProductsSection />
      <TrustPointsSection />
      <CaseStudiesPreview />
      <FAQSection />
      <InquiryForm />
    </div>
  )
}

export default Home
