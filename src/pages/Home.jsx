import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, ShieldCheck, ClipboardCheck, Truck, 
  ArrowRight, CheckCircle, Star, ChevronDown,
  Factory, Package, Users, Award
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Verification',
    description: 'We verify factory credentials, business licenses, production capacity, and certifications to ensure you work with legitimate suppliers.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Audits',
    description: 'Comprehensive on-site audits including facility inspections, quality management systems review, and capability assessments.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections at key production stages. We check product quality, specifications, packaging, and compliance.',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'End-to-end logistics coordination including freight forwarding, customs clearance, and door-to-door delivery.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Submit Your Request',
    description: 'Tell us what you need - product specifications, quantity, target price, and any special requirements.',
  },
  {
    number: '02',
    title: 'We Find Suppliers',
    description: 'We research, vet, and shortlist 3-5 qualified suppliers that match your criteria.',
  },
  {
    number: '03',
    title: 'Factory Verification',
    description: 'We visit factories, verify credentials, and conduct quality audits before you commit.',
  },
  {
    number: '04',
    title: 'Production Monitoring',
    description: 'Regular updates during production with photos, videos, and quality checkpoints.',
  },
  {
    number: '05',
    title: 'Inspection & Shipping',
    description: 'Final inspection before shipment. We handle all logistics and ensure safe delivery.',
  },
]

const products = [
  { name: 'Electronics', image: 'electronics manufacturing' },
  { name: 'Textiles & Apparel', image: 'textile factory' },
  { name: 'Machinery', image: 'industrial machinery' },
  { name: 'Furniture', image: 'furniture manufacturing' },
  { name: 'Packaging', image: 'packaging factory' },
  { name: 'Home & Garden', image: 'home products' },
  { name: 'Automotive Parts', image: 'auto parts manufacturing' },
  { name: 'Health & Beauty', image: 'beauty product manufacturing' },
]

const problems = [
  {
    problem: 'Language barriers and cultural differences',
    solution: 'Our bilingual team bridges communication gaps and ensures clear understanding between you and suppliers.',
  },
  {
    problem: 'Unreliable or fraudulent suppliers',
    solution: 'We verify every supplier through factory visits, license checks, and background verification.',
  },
  {
    problem: 'Quality issues and production delays',
    solution: 'Regular production monitoring and pre-shipment inspections catch problems early.',
  },
  {
    problem: 'Complex shipping and customs',
    solution: 'We handle all logistics, documentation, and customs clearance for hassle-free delivery.',
  },
]

const stats = [
  { value: '500+', label: 'Clients Served' },
  { value: '8+', label: 'Years Experience' },
  { value: '2000+', label: 'Factories Verified' },
  { value: '98%', label: 'Client Satisfaction' },
]

const caseStudies = [
  {
    client: 'European Retailer',
    category: 'Home Goods',
    challenge: 'Needed reliable supplier for 50,000 units of kitchenware with strict quality standards.',
    result: 'We verified 12 factories, conducted 3 factory audits, and delivered on-time with 99.2% quality pass rate.',
    image: 'factory inspection',
  },
  {
    client: 'US E-commerce Brand',
    category: 'Electronics',
    challenge: 'First-time importer worried about supplier reliability and product quality.',
    result: 'Full supplier verification, production monitoring, and pre-shipment inspection resulted in zero defects.',
    image: 'electronics manufacturing',
  },
  {
    client: 'Australian Distributor',
    category: 'Furniture',
    challenge: 'Sourcing custom furniture with specific designs and materials.',
    result: 'We identified suitable factories, managed sample development, and coordinated 40ft container shipment.',
    image: 'furniture warehouse',
  },
]

const faqs = [
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory visits to verify business licenses, production capacity, quality management systems, and certifications. We also check references and verify company backgrounds through multiple channels.',
  },
  {
    question: 'What is included in quality inspection?',
    answer: 'Our quality inspections include visual checks, functional testing, measurement verification, packaging assessment, and compliance checking against your specifications. We provide detailed photo and video reports.',
  },
  {
    question: 'How do you charge for your services?',
    answer: 'We offer flexible pricing models including project-based fees, retainer arrangements, and commission-based sourcing. Each project is quoted based on scope, complexity, and duration. We provide transparent quotes with no hidden fees.',
  },
  {
    question: 'Can you handle shipping and logistics?',
    answer: 'Yes, we coordinate end-to-end logistics including freight forwarding, customs documentation, and door-to-door delivery. We work with established shipping partners to ensure competitive rates and reliable delivery.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'We have experience across multiple industries including electronics, textiles, machinery, furniture, packaging, automotive parts, health & beauty products, and more. Contact us to discuss your specific requirements.',
  },
]

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#F8FAFC] to-[#EDF2F7] pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-5"
            data-strk-bg-id="hero-bg-001"
            data-strk-bg="China factory manufacturing"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#1E3A5F]/10 text-[#1E3A5F] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <ShieldCheck size={18} />
                <span>Trusted by 500+ Global Buyers</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3A5F] leading-tight mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="text-lg text-[#4A5568] mb-8 max-w-xl">
                We help you find reliable suppliers, verify factories, inspect quality, and coordinate shipping. Eliminate risks and streamline your China sourcing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A227] text-[#1E3A5F] font-semibold rounded-lg hover:bg-[#B8911F] transition-colors"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#1E3A5F] text-[#1E3A5F] font-semibold rounded-lg hover:bg-[#1E3A5F] hover:text-white transition-colors"
                >
                  See How It Works
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[#E2E8F0]">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-[#1E3A5F] border-2 border-white flex items-center justify-center text-white text-xs font-medium">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={16} className="text-[#C9A227] fill-[#C9A227]" />
                    ))}
                  </div>
                  <p className="text-sm text-[#4A5568]">98% Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative">
                <img
                  data-strk-img-id="hero-img-001"
                  data-strk-img="factory inspection quality control"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Factory inspection"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#38A169]/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="text-[#38A169]" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1E3A5F]">2,000+</p>
                      <p className="text-sm text-[#4A5568]">Factories Verified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1E3A5F] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#C9A227]">{stat.value}</p>
                <p className="text-[#A0AEC0] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Our Sourcing Services
            </h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
              Comprehensive solutions to de-risk your China sourcing and ensure quality delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-[#F8FAFC] rounded-xl p-6 hover:shadow-lg transition-shadow border border-[#E2E8F0]"
              >
                <div className="w-14 h-14 bg-[#1E3A5F] rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">{service.title}</h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[#1E3A5F] font-semibold hover:text-[#C9A227] transition-colors"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Our Sourcing Process
            </h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
              A proven 5-step process that ensures quality suppliers and successful deliveries.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 h-full border border-[#E2E8F0] hover:shadow-lg transition-shadow">
                  <span className="text-5xl font-bold text-[#C9A227]/20 absolute top-4 right-4">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#4A5568] relative z-10">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-20">
                    <ArrowRight className="text-[#C9A227]" size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
              We have expertise across a wide range of product categories.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Link
                key={index}
                to="/contact"
                className="group relative overflow-hidden rounded-xl aspect-square bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#C9A227] transition-colors"
              >
                <img
                  data-strk-img-id={`product-img-${index}`}
                  data-strk-img={product.image}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-center">{product.name}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E3A5F] text-white font-semibold rounded-lg hover:bg-[#2C5282] transition-colors"
            >
              View All Categories
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 lg:py-28 bg-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Problems We Solve
            </h2>
            <p className="text-lg text-[#A0AEC0] max-w-2xl mx-auto">
              Common challenges when sourcing from China, and how we help you overcome them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((item, index) => (
              <div 
                key={index}
                className="bg-[#2C5282] rounded-xl p-6 hover:bg-[#2A4365] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C9A227] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1E3A5F] font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{item.problem}</h3>
                    <p className="text-[#A0AEC0] text-sm">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
              Real results from our clients who trusted us with their China sourcing.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-[#E2E8F0]"
              >
                <div className="aspect-video bg-[#E2E8F0]">
                  <img
                    data-strk-img-id={`case-img-${index}`}
                    data-strk-img={study.image}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={study.client}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-[#C9A227] bg-[#C9A227]/10 px-2 py-1 rounded">
                      {study.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">{study.client}</h3>
                  <p className="text-sm text-[#4A5568] mb-3">{study.challenge}</p>
                  <p className="text-sm text-[#38A169] font-medium">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E3A5F] text-white font-semibold rounded-lg hover:bg-[#2C5282] transition-colors"
            >
              View All Case Studies
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#4A5568]">
              Quick answers to common questions about our sourcing services.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details 
                key={index}
                className="group bg-[#F8FAFC] rounded-lg border border-[#E2E8F0] overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-medium text-[#1E3A5F] pr-4">{faq.question}</span>
                  <ChevronDown 
                    size={20} 
                    className="text-[#4A5568] group-open:rotate-180 transition-transform flex-shrink-0" 
                  />
                </summary>
                <div className="px-5 pb-5 text-[#4A5568] text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1E3A5F] to-[#2C5282]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Streamline Your China Sourcing?
          </h2>
          <p className="text-lg text-[#A0AEC0] mb-8 max-w-2xl mx-auto">
            Get a free sourcing quote tailored to your requirements. No commitment, no hidden fees.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A227] text-[#1E3A5F] font-semibold rounded-lg hover:bg-[#B8911F] transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}