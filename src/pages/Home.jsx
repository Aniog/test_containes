import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  CheckCircle, 
  Shield, 
  Factory, 
  Truck, 
  Search, 
  ClipboardCheck, 
  Package, 
  ArrowRight,
  ChevronDown,
  Star,
  Clock,
  Users,
  TrendingUp,
  Globe,
  MessageCircle
} from 'lucide-react'

const Home = () => {
  const [activeFaq, setActiveFaq] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState('idle')

  const faqs = [
    {
      question: "How do you verify suppliers in China?",
      answer: "We conduct comprehensive factory audits including business license verification, production capacity assessment, quality management systems review, and on-site inspections. We verify the factory's legal status, production capabilities, certifications, and financial stability before recommending any supplier."
    },
    {
      question: "What quality control services do you offer?",
      answer: "We offer pre-shipment inspections, during-production inspections, and initial production inspections. Our QC team follows AQL standards and provides detailed reports with photos and videos. We check product quality, packaging, labeling, and compliance with your specifications."
    },
    {
      question: "How do you handle shipping and logistics?",
      answer: "We coordinate with reliable freight forwarders to handle all aspects of shipping including customs clearance, documentation, and door-to-door delivery. We work with sea, air, and express shipping options to match your timeline and budget requirements."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our fees are transparent and based on the services you need. We offer competitive rates for supplier verification, quality inspection, and sourcing services. Contact us for a customized quote based on your specific requirements."
    },
    {
      question: "How long does the sourcing process take?",
      answer: "The timeline varies depending on product complexity and availability. Typically, supplier identification takes 1-2 weeks, verification takes 1 week, and production follow-up varies by order size. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you work with small orders?",
      answer: "Yes, we work with businesses of all sizes, from startups to large enterprises. While our expertise is particularly valuable for medium to large orders, we can also assist with smaller quantities and help you scale up over time."
    }
  ]

  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'Comprehensive factory audits to verify legitimacy, production capacity, and quality standards.',
      link: '/services#verification'
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control',
      description: 'Professional inspection services at every production stage to ensure your standards are met.',
      link: '/services#quality'
    },
    {
      icon: Factory,
      title: 'Production Follow-up',
      description: 'Regular factory visits and progress monitoring to keep your order on track.',
      link: '/services#production'
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end shipping coordination from factory to your doorstep.',
      link: '/services#shipping'
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Submit Your Request',
      description: 'Tell us what product you need, quantity, target price, and any specific requirements.'
    },
    {
      step: 2,
      title: 'We Find Suppliers',
      description: 'Our team researches and identifies verified manufacturers matching your criteria.'
    },
    {
      step: 3,
      title: 'Factory Verification',
      description: 'We conduct on-site audits to verify capabilities, certifications, and reliability.'
    },
    {
      step: 4,
      title: 'Sample & Quote',
      description: 'You receive samples and competitive quotes for comparison and decision-making.'
    },
    {
      step: 5,
      title: 'Production & QC',
      description: 'We monitor production and conduct quality inspections before shipment.'
    },
    {
      step: 6,
      title: 'Shipping & Delivery',
      description: 'We coordinate logistics and ensure smooth customs clearance and delivery.'
    }
  ]

  const products = [
    { name: 'Electronics', image: 'electronics manufacturing factory', count: '2,500+ suppliers' },
    { name: 'Textiles & Apparel', image: 'textile factory manufacturing', count: '3,200+ suppliers' },
    { name: 'Machinery', image: 'industrial machinery factory', count: '1,800+ suppliers' },
    { name: 'Packaging', image: 'packaging factory production', count: '1,200+ suppliers' },
    { name: 'Home & Garden', image: 'home products factory', count: '2,100+ suppliers' },
    { name: 'Automotive Parts', image: 'auto parts manufacturing', count: '950+ suppliers' }
  ]

  const problems = [
    {
      title: 'Language Barriers',
      description: 'Communication challenges with suppliers who don\'t speak English fluently.'
    },
    {
      title: 'Quality Issues',
      description: 'Receiving products that don\'t match your specifications or quality standards.'
    },
    {
      title: 'Supplier Scams',
      description: 'Risk of working with fraudulent or non-existent factories.'
    },
    {
      title: 'Shipping Delays',
      description: 'Complications with customs, documentation, and logistics coordination.'
    },
    {
      title: 'Cultural Differences',
      description: 'Misunderstandings due to different business practices and expectations.'
    },
    {
      title: 'Quality Control',
      description: 'Difficulty ensuring consistent quality without being physically present.'
    }
  ]

  const trustPoints = [
    { icon: Shield, value: '500+', label: 'Verified Suppliers' },
    { icon: ClipboardCheck, value: '2,000+', label: 'QC Inspections Completed' },
    { icon: Users, value: '15+', label: 'Years Experience' },
    { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' }
  ]

  const caseStudies = [
    {
      company: 'TechStart Inc.',
      industry: 'Electronics',
      challenge: 'Needed to source 10,000 smart home devices from China within 60 days.',
      solution: 'We identified 3 verified manufacturers, conducted factory audits, and performed pre-shipment inspections.',
      result: 'Delivered on time with 99.2% quality pass rate. Saved 25% compared to their previous supplier.',
      image: 'electronics manufacturing'
    },
    {
      company: 'FashionLine GmbH',
      industry: 'Apparel',
      challenge: 'Required reliable textile supplier for sustainable fashion line.',
      solution: 'We verified factories for eco-certifications and conducted quarterly quality audits.',
      result: 'Established 3-year partnership. Reduced defect rate from 8% to 1.5%.',
      image: 'textile factory'
    },
    {
      company: 'BuildRight Co.',
      industry: 'Construction',
      challenge: 'Sourcing custom machinery parts with precise specifications.',
      solution: 'We worked with engineering team to match specifications and performed during-production inspections.',
      result: 'Zero defects on first shipment. 40% cost reduction from previous supplier.',
      image: 'machinery manufacturing'
    }
  ]

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setFormStatus('success')
    setFormData({ name: '', email: '', company: '', product: '', quantity: '', message: '' })
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm mb-6">
                <Globe className="w-4 h-4 mr-2" />
                Trusted by 500+ Global Buyers
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-xl">
                We help overseas businesses find reliable suppliers, verify factories, inspect quality, and coordinate seamless shipping. Turn your China sourcing into a competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
                >
                  See How It Works
                </Link>
              </div>
              
              {/* Trust Badges */}
              <div className="mt-10 flex items-center gap-8 text-sm text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Verified Suppliers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Quality Guaranteed</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image/Visual */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  data-strk-img-id="hero-factory-001"
                  data-strk-img="[hero-title] [hero-subtitle]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="China manufacturing facility"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p id="hero-title" className="text-white font-semibold text-lg">Professional Factory Verification</p>
                  <p id="hero-subtitle" className="text-gray-300 text-sm">Ensuring supplier reliability since 2009</p>
                </div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">98%</p>
                    <p className="text-sm text-gray-600">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sourcing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to ensure your China sourcing is smooth, reliable, and cost-effective.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-700"
                >
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Sourcing Process Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A transparent, step-by-step approach to find the right suppliers for your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div className="ml-4 h-px bg-gray-200 flex-1 lg:hidden"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn More About Our Process
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-gray-50" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Extensive network of verified manufacturers across multiple industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div 
                key={product.name}
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                  <img
                    data-strk-img-id={`product-${index + 1}`}
                    data-strk-img={`[product-name-${index + 1}] [product-count-${index + 1}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 id={`product-name-${index + 1}`} className="text-white font-semibold text-lg">{product.name}</h3>
                  <p id={`product-count-${index + 1}`} className="text-gray-300 text-sm">{product.count}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-white" id="problems">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Sourcing Challenges We Solve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Focus on your core business while we handle the complexities of China sourcing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <div 
                key={problem.title}
                className="flex items-start p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-red-600 font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{problem.title}</h3>
                  <p className="text-gray-600 text-sm">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <point.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl font-bold text-white mb-1">{point.value}</p>
                <p className="text-blue-200">{point.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50" id="case-studies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from our partnership with global buyers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={study.company}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200">
                  <img
                    data-strk-img-id={`case-${index + 1}`}
                    data-strk-img={`[case-company-${index + 1}] [case-industry-${index + 1}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={study.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 id={`case-company-${index + 1}`} className="text-lg font-semibold text-gray-900">{study.company}</h3>
                    <span id={`case-industry-${index + 1}`} className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">{study.industry}</span>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1"><span className="font-medium text-gray-700">Challenge:</span> {study.challenge}</p>
                    <p className="text-sm text-gray-500 mb-1"><span className="font-medium text-gray-700">Solution:</span> {study.solution}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-green-600">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
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
      <section className="py-20 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our sourcing services.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {activeFaq === index && (
                  <div className="p-4 pt-0 text-gray-600 text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Sourcing?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Get a free sourcing quote tailored to your specific requirements. Our team typically responds within 24 hours.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Competitive pricing</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Fast response time</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-2xl">
              {formStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">We've received your inquiry and will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g. 10,000 units"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Interested In *</label>
                    <input
                      type="text"
                      name="product"
                      value={formData.product}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="What product do you need?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us more about your requirements..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Get Your Free Quote'}
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