import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  CheckCircle, 
  Factory, 
  Shield, 
  Truck, 
  Search, 
  ClipboardCheck, 
  Package, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Star,
  MapPin,
  Clock,
  Mail,
  Phone
} from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#1E3A5F] via-[#2D5A87] to-[#1E3A5F] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm mb-6">
              <Shield className="w-4 h-4 mr-2" />
              <span>Professional China Sourcing Since 2015</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
              We help overseas businesses find reliable suppliers, verify factories, 
              inspect quality, and coordinate shipping. Your trusted partner for 
              seamless China procurement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#E67E22] text-white font-semibold rounded-lg hover:bg-[#D35400] transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/30"
              >
                See How It Works
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-[#10B981]" />
                <span>500+ Clients Served</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-[#10B981]" />
                <span>98% Success Rate</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-[#10B981]" />
                <span>ISO 9001 Certified</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image/Illustration */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600' fill='%232D5A87'%3E%3Crect width='800' height='600'/%3E%3Crect x='100' y='100' width='600' height='400' rx='8' fill='%231E3A5F'/%3E%3Crect x='150' y='150' width='200' height='150' rx='4' fill='%234A5568'/%3E%3Crect x='400' y='150' width='250' height='150' rx='4' fill='%234A5568'/%3E%3Crect x='150' y='350' width='500' height='100' rx='4' fill='%234A5568'/%3E%3Ccircle cx='250' cy='225' r='30' fill='%23E67E22'/%3E%3Ccircle cx='525' cy='225' r='30' fill='%23E67E22'/%3E%3Ctext x='400' y='320' text-anchor='middle' fill='white' font-size='24'%3EFactory Floor%3C/text%3E%3C/svg%3E"
                alt="China Factory"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-medium">Factory Verification & Quality Control</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ServicesOverview = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We verify factory credentials, business licenses, production capacity, and certifications to ensure legitimacy.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Pre-shipment inspections, during-production checks, and final QC reports to guarantee product quality.',
    },
    {
      icon: Factory,
      title: 'Production Follow-up',
      description: 'Regular factory visits and progress updates to keep your order on track and address issues promptly.',
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics support including freight forwarding, customs clearance, and documentation.',
    },
  ]

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            Our Sourcing Services
          </h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            Comprehensive solutions to help you source from China with confidence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="w-14 h-14 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-[#1E3A5F]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A2E] mb-2">
                {service.title}
              </h3>
              <p className="text-[#4A5568] text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center text-[#1E3A5F] font-semibold hover:text-[#E67E22] transition-colors"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Request',
      description: 'Tell us what you need - product specifications, quantity, target price, and timeline.',
    },
    {
      number: '02',
      title: 'We Find Suppliers',
      description: 'We research and vet manufacturers, then present you with qualified options.',
    },
    {
      number: '03',
      title: 'Verify & Select',
      description: 'We conduct factory audits and help you choose the best supplier for your needs.',
    },
    {
      number: '04',
      title: 'Production & QC',
      description: 'We monitor production and perform quality inspections before shipment.',
    },
    {
      number: '05',
      title: 'Shipping & Delivery',
      description: 'We coordinate logistics and ensure smooth customs clearance to your door.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            Our Sourcing Process
          </h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            A proven 5-step process to ensure successful sourcing from China
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm h-full">
                <span className="text-5xl font-bold text-[#E67E22]/20 absolute top-4 right-4">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-[#1A1A2E] mb-3 relative z-10">
                  {step.title}
                </h3>
                <p className="text-[#4A5568] text-sm relative z-10">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                  <ArrowRight className="w-6 h-6 text-[#E67E22]" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="inline-flex items-center px-6 py-3 bg-[#1E3A5F] text-white font-semibold rounded-lg hover:bg-[#2D5A87] transition-colors"
          >
            Learn More About Our Process
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

const ProductsSection = () => {
  const products = [
    { name: 'Electronics', icon: '📱' },
    { name: 'Textiles & Garments', icon: '👕' },
    { name: 'Machinery', icon: '⚙️' },
    { name: 'Furniture', icon: '🪑' },
    { name: 'Packaging', icon: '📦' },
    { name: 'Automotive Parts', icon: '🚗' },
    { name: 'Home & Garden', icon: '🏡' },
    { name: 'Sports & Outdoors', icon: '⚽' },
  ]

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            Products We Source
          </h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            We have expertise across a wide range of industries and product categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <span className="text-4xl mb-3 block">{product.icon}</span>
              <h3 className="font-semibold text-[#1A1A2E]">{product.name}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center text-[#1E3A5F] font-semibold hover:text-[#E67E22] transition-colors"
          >
            View All Product Categories
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

const ProblemsWeSolve = () => {
  const problems = [
    {
      title: 'Language Barriers',
      description: 'We bridge the communication gap between you and Chinese suppliers, ensuring clear understanding of requirements.',
    },
    {
      title: 'Supplier Verification',
      description: 'Avoid scams and fraudulent suppliers with our thorough factory verification and background checks.',
    },
    {
      title: 'Quality Control',
      description: 'Ensure product quality meets your standards with professional inspection services at every production stage.',
    },
    {
      title: 'Logistics Complexity',
      description: 'Navigate international shipping, customs, and documentation with our end-to-end logistics support.',
    },
    {
      title: 'Cultural Differences',
      description: 'Navigate Chinese business culture and negotiation practices with our experienced team.',
    },
    {
      title: 'Time Zone Challenges',
      description: 'We act as your local representative, available during Chinese business hours to resolve issues quickly.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            Problems We Solve
          </h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            Common challenges when sourcing from China - and how we help overcome them
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-[#F8FAFC] rounded-xl border border-gray-100"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-[#E67E22]/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-[#E67E22]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1A1A2E] mb-2">{problem.title}</h3>
                <p className="text-[#4A5568] text-sm">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const TrustPoints = () => {
  const trustPoints = [
    {
      number: '500+',
      label: 'Clients Worldwide',
    },
    {
      number: '8+',
      label: 'Years Experience',
    },
    {
      number: '2000+',
      label: 'Factories Verified',
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
    },
  ]

  return (
    <section className="py-16 bg-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#E67E22] mb-2">
                {point.number}
              </div>
              <div className="text-gray-300">{point.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CaseStudiesPreview = () => {
  const cases = [
    {
      client: 'European Retailer',
      industry: 'Home Goods',
      result: '40% cost reduction',
      description: 'Sourced kitchenware from verified factories, reducing costs while maintaining quality.',
    },
    {
      client: 'US Tech Company',
      industry: 'Electronics',
      result: '3 weeks faster delivery',
      description: 'Coordinated production and shipping for electronic components with tight deadlines.',
    },
    {
      client: 'Australian Distributor',
      industry: 'Textiles',
      result: '100% QC pass rate',
      description: 'Implemented rigorous quality control for garment orders, achieving zero defects.',
    },
  ]

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            Real results from our clients who trusted us with their China sourcing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="text-sm text-[#E67E22] font-semibold mb-2">
                {caseStudy.industry}
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A2E] mb-2">
                {caseStudy.client}
              </h3>
              <p className="text-[#4A5568] text-sm mb-4">{caseStudy.description}</p>
              <div className="pt-4 border-t border-gray-100">
                <span className="text-[#10B981] font-semibold">{caseStudy.result}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/case-studies"
            className="inline-flex items-center px-6 py-3 bg-[#1E3A5F] text-white font-semibold rounded-lg hover:bg-[#2D5A87] transition-colors"
          >
            View All Case Studies
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'How do you verify factories?',
      answer: 'We conduct comprehensive factory audits including business license verification, production capacity assessment, quality management systems review, and on-site inspections. We check factory registration, export licenses, certifications (ISO, CE, etc.), and verify they have the capability to meet your requirements.',
    },
    {
      question: 'What are your fees?',
      answer: 'Our fee structure depends on the services you need. We offer transparent pricing with no hidden costs. Contact us for a free consultation and quote tailored to your specific sourcing requirements.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'The timeline varies based on product complexity and availability of suppliers. Typically, supplier identification takes 1-2 weeks, verification takes 1-2 weeks, and production depends on order size. We provide detailed timelines for each project.',
    },
    {
      question: 'Do you only work with large orders?',
      answer: 'We work with businesses of all sizes, from startups to large enterprises. Our minimum order requirements are flexible, and we can help you find suppliers suitable for your volume needs.',
    },
    {
      question: 'How do you ensure quality?',
      answer: 'We offer multiple quality control touchpoints: pre-production material verification, during-production inspections, pre-shipment inspections, and container loading supervision. We provide detailed QC reports with photos and videos.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#4A5568]">
            Common questions about our China sourcing services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-[#1A1A2E]">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#4A5568]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#4A5568]" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-[#4A5568]">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will get back to you within 24 hours.')
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              Get a Free Sourcing Quote
            </h2>
            <p className="text-lg text-[#4A5568]">
              Tell us about your sourcing needs and we'll get back to you within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1A1A2E] mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[#1A1A2E] mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:border-transparent"
                  placeholder="Your Company Ltd"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1A1A2E] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:border-transparent"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#1A1A2E] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:border-transparent"
                  placeholder="+1 234 567 8900"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="product" className="block text-sm font-medium text-[#1A1A2E] mb-2">
                  Product Category *
                </label>
                <select
                  id="product"
                  name="product"
                  required
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:border-transparent"
                >
                  <option value="">Select a category</option>
                  <option value="electronics">Electronics</option>
                  <option value="textiles">Textiles & Garments</option>
                  <option value="machinery">Machinery</option>
                  <option value="furniture">Furniture</option>
                  <option value="packaging">Packaging</option>
                  <option value="automotive">Automotive Parts</option>
                  <option value="home">Home & Garden</option>
                  <option value="sports">Sports & Outdoors</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-[#1A1A2E] mb-2">
                  Estimated Quantity
                </label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:border-transparent"
                  placeholder="e.g., 5000 units"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#1A1A2E] mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:border-transparent"
                placeholder="Describe your product requirements, target price, timeline, and any specific needs..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#E67E22] text-white font-semibold rounded-lg hover:bg-[#D35400] transition-colors"
            >
              Submit Inquiry
            </button>

            <p className="text-center text-sm text-[#718096]">
              By submitting this form, you agree to our privacy policy. We typically respond within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Process />
      <ProductsSection />
      <ProblemsWeSolve />
      <TrustPoints />
      <CaseStudiesPreview />
      <FAQ />
      <InquiryForm />
    </>
  )
}

export default Home