import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  CheckCircle, 
  Factory, 
  Search, 
  ClipboardCheck, 
  Truck, 
  Shield, 
  Users, 
  Clock,
  ChevronRight,
  Star
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Home = () => {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const processRef = useRef(null)
  const productsRef = useRef(null)
  const casesRef = useRef(null)

  useEffect(() => {
    const loadImages = (ref) => {
      if (ref.current) {
        return ImageHelper.loadImages(strkImgConfig, ref.current)
      }
      return undefined
    }

    const cleanups = [
      loadImages(heroRef),
      loadImages(servicesRef),
      loadImages(processRef),
      loadImages(productsRef),
      loadImages(casesRef),
    ].filter(Boolean)

    return () => cleanups.forEach(cleanup => cleanup())
  }, [])

  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Supplier Sourcing',
      description: 'Find reliable Chinese suppliers that match your requirements, budget, and quality standards.',
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: 'Factory Audit',
      description: 'Verify factory capabilities, certifications, and production capacity before placing orders.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Inspection',
      description: 'Comprehensive quality checks during and after production to ensure product standards.',
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: 'Production Monitoring',
      description: 'Regular updates and oversight during manufacturing to ensure timeline and quality.',
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Shipping Coordination',
      description: 'Handle logistics, customs clearance, and delivery to your doorstep.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Negotiation Support',
      description: 'Leverage our expertise to get the best prices and terms from suppliers.',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Requirements Analysis',
      description: 'Share your product specifications, target price, and quality requirements with us.',
    },
    {
      step: '02',
      title: 'Supplier Identification',
      description: 'We search our network to find suppliers that match your needs and budget.',
    },
    {
      step: '03',
      title: 'Factory Verification',
      description: 'Our team conducts on-site audits to verify manufacturer capabilities and credentials.',
    },
    {
      step: '04',
      title: 'Sample & Quotation',
      description: 'Get product samples and detailed quotations from verified suppliers.',
    },
    {
      step: '05',
      title: 'Order & Production',
      description: 'We manage the order placement and monitor production progress.',
    },
    {
      step: '06',
      title: 'QC & Shipping',
      description: 'Final quality inspection and coordination of shipping to your location.',
    },
  ]

  const products = [
    { name: 'Electronics & Gadgets', count: '500+' },
    { name: 'Home & Garden', count: '400+' },
    { name: 'Fashion & Accessories', count: '350+' },
    { name: 'Industrial Equipment', count: '300+' },
    { name: 'Toys & Gifts', count: '250+' },
    { name: 'Automotive Parts', count: '200+' },
  ]

  const problems = [
    {
      problem: 'Unreliable Suppliers',
      solution: 'We verify factories and check their track record before introduction.',
    },
    {
      problem: 'Quality Issues',
      solution: 'Multi-stage quality inspections ensure products meet your standards.',
    },
    {
      problem: 'Communication Barriers',
      solution: 'Our bilingual team bridges the language and cultural gaps.',
    },
    {
      problem: 'Hidden Costs',
      solution: 'Transparent pricing with no hidden fees or surprise charges.',
    },
    {
      problem: 'Shipping Delays',
      solution: 'Experienced logistics team ensures timely delivery worldwide.',
    },
  ]

  const trustPoints = [
    { icon: <Clock className="w-6 h-6" />, text: '5+ Years Experience' },
    { icon: <Users className="w-6 h-6" />, text: '500+ Clients Served' },
    { icon: <CheckCircle className="w-6 h-6" />, text: '98% Client Satisfaction' },
    { icon: <Shield className="w-6 h-6" />, text: 'Verified Suppliers Only' },
  ]

  const caseStudies = [
    {
      title: 'Electronics Retailer Reduces Costs by 35%',
      client: 'US-based Electronics Retailer',
      result: 'Found reliable supplier, reduced sourcing costs by 35%, improved quality consistency.',
      image: 'electronics-sourcing-success',
    },
    {
      title: 'Furniture Brand Ensures Quality Standards',
      client: 'European Home Furniture Brand',
      result: 'Implemented QC process, reduced defect rate from 12% to 2%.',
      image: 'furniture-quality-control',
    },
    {
      title: 'Fashion Accessories Scale Production',
      client: 'Australian Fashion Brand',
      result: 'Scaled from 1,000 to 10,000 units/month with consistent quality.',
      image: 'fashion-production-scale',
    },
  ]

  const faqs = [
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct on-site factory audits, check business licenses, review past client references, and verify production capabilities before recommending any supplier.',
    },
    {
      question: 'What are your service fees?',
      answer: 'Our fees are transparent and based on the scope of service. We offer both project-based and retainer models. Contact us for a customized quote.',
    },
    {
      question: 'Do you handle small orders?',
      answer: 'Yes, we work with businesses of all sizes. Our minimum order requirements depend on the product and supplier, but we strive to accommodate smaller buyers.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Typically 2-4 weeks for supplier identification and verification, plus production time which varies by product. We provide timeline estimates for each project.',
    },
    {
      question: 'Do you provide quality inspection reports?',
      answer: 'Yes, we provide detailed inspection reports with photos and videos. We can conduct inspections during production and before shipment.',
    },
  ]

  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center" ref={heroRef}>
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            data-strk-bg-id="hero-bg-8f3a2b"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories, 
              inspect products, and coordinate shipping from China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="text-blue-600">{point.icon}</div>
                <span className="font-medium text-gray-900">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sourcing Services
            </h2>
            <p id="services-subtitle" className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end sourcing solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              View All Services
              <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white" ref={processRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p id="process-subtitle" className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, transparent process from inquiry to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-blue-50 p-8 rounded-xl">
                  <div className="text-5xl font-bold text-blue-100 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-300">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Learn More About Our Process
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-gray-50" ref={productsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Products We Source
            </h2>
            <p id="products-subtitle" className="text-lg text-gray-600 max-w-2xl mx-auto">
              Extensive experience across diverse product categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <span className="text-blue-600 font-semibold">{product.count}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              View All Product Categories
              <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Problems We Solve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common sourcing challenges and how we address them
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problems.map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-red-600 font-bold text-lg">!</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.problem}</h3>
                    <p className="text-gray-600">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-blue-50" ref={casesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    data-strk-img-id={`case-study-${index}`}
                    data-strk-img={`[case-title-${index}] [case-client-${index}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={study.title}
                  />
                </div>
                <div className="p-6">
                  <h3 id={`case-title-${index}`} className="text-lg font-semibold text-gray-900 mb-2">
                    {study.title}
                  </h3>
                  <p id={`case-client-${index}`} className="text-sm text-gray-600 mb-3">{study.client}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{study.result}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Case Studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-left font-semibold text-gray-900">{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Sourcing from China?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free sourcing quote today. No obligations, no hidden fees.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
