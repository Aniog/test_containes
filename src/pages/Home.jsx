import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Search, CheckCircle, Truck, Clock, Users, Award, ArrowRight, Star, ChevronDown } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable manufacturers across China, matching your product requirements with verified suppliers.',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site audits to confirm business licenses, production capacity, quality systems, and social compliance.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure your products meet specifications.',
  },
  {
    icon: Clock,
    title: 'Production Monitoring',
    description: 'Regular factory visits and progress reports to keep your production on schedule and on track.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including freight forwarding, customs clearance, and delivery tracking.',
  },
]

const processSteps = [
  { step: '01', title: 'Submit Your Request', description: 'Tell us what you need — product details, quantities, target price, and timeline.' },
  { step: '02', title: 'Supplier Matching', description: 'We identify and shortlist qualified manufacturers from our verified network.' },
  { step: '03', title: 'Quotation & Sampling', description: 'Receive competitive quotes and request samples for quality evaluation.' },
  { step: '04', title: 'Production & QC', description: 'We monitor production and conduct inspections at every critical stage.' },
  { step: '05', title: 'Shipping & Delivery', description: 'Coordinate logistics and handle documentation for smooth delivery to your door.' },
]

const productCategories = [
  'Electronics & Components',
  'Home & Garden Products',
  'Apparel & Textiles',
  'Machinery & Industrial',
  'Packaging & Printing',
  'Sports & Outdoor',
  'Toys & Gifts',
  'Auto Parts & Accessories',
]

const problems = [
  {
    title: 'Unreliable Suppliers',
    description: 'We verify every factory before you commit, reducing the risk of fraud and poor quality.',
  },
  {
    title: 'Quality Issues',
    description: 'Our QC team inspects products at multiple stages, catching defects before shipment.',
  },
  {
    title: 'Communication Barriers',
    description: 'We bridge the language and cultural gap, ensuring clear communication throughout.',
  },
  {
    title: 'Hidden Costs',
    description: 'Transparent pricing with no surprises. You know exactly what you are paying for.',
  },
  {
    title: 'Shipping Delays',
    description: 'We coordinate logistics proactively and keep you informed at every step.',
  },
  {
    title: 'IP Protection',
    description: 'We help you protect your designs and intellectual property with proper agreements.',
  },
]

const trustPoints = [
  { icon: Users, stat: '500+', label: 'Clients Served' },
  { icon: Award, stat: '10+', label: 'Years Experience' },
  { icon: CheckCircle, stat: '2,000+', label: 'Orders Completed' },
  { icon: Star, stat: '98%', label: 'Client Satisfaction' },
]

const caseStudies = [
  {
    title: 'Electronics Manufacturer Sourcing',
    industry: 'Consumer Electronics',
    challenge: 'A US startup needed a reliable manufacturer for custom Bluetooth speakers with strict quality requirements.',
    solution: 'We identified 3 qualified factories, conducted on-site audits, and managed the entire production process.',
    result: 'Delivered 10,000 units on time with a 99.2% pass rate on quality inspection.',
  },
  {
    title: 'Apparel Supply Chain Setup',
    industry: 'Fashion & Apparel',
    challenge: 'A European brand wanted to shift production to China but lacked local contacts and quality control.',
    solution: 'We sourced 5 garment factories, verified certifications, and set up a QC protocol for each order.',
    result: 'Reduced production costs by 35% while maintaining quality standards across 50+ SKUs.',
  },
]

const faqs = [
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory audits that cover business licenses, production capacity, quality management systems, equipment, and working conditions. We also check references and past performance.',
  },
  {
    question: 'What is your minimum order quantity?',
    answer: 'MOQ depends on the product and factory. We work with suppliers who can accommodate both small and large orders. We will advise you on realistic MOQs during the sourcing process.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier identification typically takes 1-2 weeks. Sampling adds another 2-4 weeks. Full production timelines vary by product complexity and order size.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes. We coordinate the entire logistics process including freight forwarding, customs documentation, and delivery to your specified destination.',
  },
  {
    question: 'What are your fees?',
    answer: 'Our fees depend on the scope of services required. We offer transparent pricing and provide a detailed quote after understanding your needs. Contact us for a free consultation.',
  },
  {
    question: 'Can you help with product development?',
    answer: 'Yes. We can assist with product design refinement, material selection, prototyping, and packaging design to ensure your product is optimized for manufacturing.',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] bg-repeat" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center py-20 md:py-32">
            <div className="inline-flex items-center gap-2 bg-blue-800/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <Shield className="w-4 h-4" />
              <span>Trusted by 500+ Global Buyers</span>
            </div>
            <h1 className="heading-xl text-white mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping — all through one trusted partner in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-4">
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary border-white text-white hover:bg-white/10 text-lg px-8 py-4">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Trust Points */}
      <section className="bg-white py-12 border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <point.icon className="w-8 h-8 text-blue-700 mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-bold text-blue-900">{point.stat}</div>
                <div className="text-gray-600 text-sm mt-1">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="heading-lg text-blue-900 mt-3 mb-4">Comprehensive Sourcing Services</h2>
            <p className="text-gray-600 text-lg">From supplier identification to final delivery, we handle every step of your China sourcing journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="heading-sm text-blue-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-secondary">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="heading-lg text-blue-900 mt-3 mb-4">How We Source for You</h2>
            <p className="text-gray-600 text-lg">A clear, transparent process that keeps you informed at every stage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-blue-50 rounded-xl p-6 h-full">
                  <div className="text-4xl font-bold text-blue-200 mb-3">{step.step}</div>
                  <h3 className="font-semibold text-blue-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works" className="btn-primary">
              Learn More About Our Process
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Product Categories</span>
            <h2 className="heading-lg text-blue-900 mt-3 mb-4">Products We Source</h2>
            <p className="text-gray-600 text-lg">We source across a wide range of product categories from verified Chinese manufacturers.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow border border-gray-100 group">
                <h3 className="font-medium text-blue-900 group-hover:text-blue-700 transition-colors">{category}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products-we-source" className="btn-secondary">
              View All Product Categories
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="heading-lg text-blue-900 mt-3 mb-4">Problems We Solve</h2>
            <p className="text-gray-600 text-lg">Sourcing from China can be challenging. We remove the risks and complexities so you can focus on your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">{problem.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">Success Stories</span>
            <h2 className="heading-lg text-white mt-3 mb-4">Case Studies</h2>
            <p className="text-blue-200 text-lg">See how we have helped businesses like yours source successfully from China.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-700">
                <div className="inline-block bg-blue-700 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {study.industry}
                </div>
                <h3 className="heading-sm text-white mb-4">{study.title}</h3>
                <div className="space-y-3 text-blue-200 text-sm">
                  <p><span className="font-semibold text-white">Challenge:</span> {study.challenge}</p>
                  <p><span className="font-semibold text-white">Solution:</span> {study.solution}</p>
                  <p><span className="font-semibold text-white">Result:</span> {study.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/case-studies" className="btn-secondary border-white text-white hover:bg-white/10">
              View All Case Studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="heading-lg text-blue-900 mt-3 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Answers to common questions about our sourcing services.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg text-white mb-4">Ready to Source from China?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Tell us what you need and we will provide a free, no-obligation sourcing quote within 24 hours.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-blue-900 hover:bg-blue-50 text-lg px-10 py-4">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-blue-900 pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-blue-700 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  )
}
