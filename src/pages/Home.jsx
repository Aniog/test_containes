import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  CheckCircle, 
  Factory, 
  Shield, 
  Truck, 
  Search, 
  ClipboardCheck, 
  Package, 
  ArrowRight,
  Star,
  Clock,
  Users,
  Globe,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

const fadeInUp = {
  animation: 'fadeInUp 0.6s ease-out forwards',
}

const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }
  .animate-delay-100 { animation-delay: 0.1s; }
  .animate-delay-200 { animation-delay: 0.2s; }
  .animate-delay-300 { animation-delay: 0.3s; }
  .animate-delay-400 { animation-delay: 0.4s; }
`

const services = [
  {
    icon: Search,
    title: 'Supplier Verification',
    description: 'We verify factory existence, business license, production capacity, and certifications to ensure you work with legitimate suppliers.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Our QC team performs pre-shipment inspections, during-production checks, and container loading supervision.',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    description: 'We monitor production进度, address issues promptly, and ensure on-time delivery from sample to mass production.',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'We coordinate freight forwarding, customs clearance, and documentation for seamless door-to-door delivery.',
  },
]

const process = [
  {
    step: '01',
    title: 'Submit Your Request',
    description: 'Tell us what you need—product specifications, quantity, target price, and timeline.',
  },
  {
    step: '02',
    title: 'We Find Suppliers',
    description: 'We research, vet, and shortlist 3-5 verified factories that match your requirements.',
  },
  {
    step: '03',
    title: 'Sample & Negotiation',
    description: 'We arrange samples, negotiate terms, and help you make an informed decision.',
  },
  {
    step: '04',
    title: 'Production & QC',
    description: 'We monitor production, conduct inspections, and ensure quality standards are met.',
  },
  {
    step: '05',
    title: 'Shipping & Delivery',
    description: 'We handle logistics, customs, and coordinate delivery to your warehouse.',
  },
]

const products = [
  { name: 'Electronics & Gadgets', image: 'electronics manufacturing factory' },
  { name: 'Textiles & Garments', image: 'textile factory manufacturing' },
  { name: 'Machinery & Parts', image: 'industrial machinery factory' },
  { name: 'Home & Garden', image: 'home products factory' },
  { name: 'Packaging & Printing', image: 'packaging factory production' },
  { name: 'Automotive Parts', image: 'auto parts manufacturing' },
]

const problems = [
  {
    title: 'Language Barriers',
    description: 'Communication gaps lead to misunderstandings, delays, and quality issues.',
    solution: 'Our bilingual team bridges the communication gap, ensuring clear specifications and expectations.',
  },
  {
    title: 'Supplier Scams',
    description: 'Fake factories, payment fraud, and bait-and-switch tactics are common risks.',
    solution: 'We verify every supplier in person—checking business licenses, factory facilities, and production capacity.',
  },
  {
    title: 'Quality Issues',
    description: 'Received products don\'t match samples or meet your standards.',
    solution: 'Professional QC inspections at key production stages catch defects before shipment.',
  },
  {
    title: 'Shipping Delays',
    description: 'Complex logistics, customs issues, and lack of coordination cause delays.',
    solution: 'End-to-end logistics management ensures smooth customs clearance and timely delivery.',
  },
]

const trustPoints = [
  { icon: Clock, value: '10+', label: 'Years Experience' },
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Package, value: '2000+', label: 'Orders Completed' },
  { icon: Globe, value: '30+', label: 'Countries' },
]

const caseStudies = [
  {
    client: 'European Retailer',
    category: 'Home Goods',
    challenge: 'Needed 50,000 units of kitchenware with specific quality standards',
    result: 'Found verified factory, 98% pass rate on QC, delivered on time',
    savings: '35% cost savings',
  },
  {
    client: 'US Distributor',
    category: 'Electronics',
    challenge: 'Sourcing smart home devices from unknown suppliers',
    result: 'Verified 8 factories, selected best match, zero quality issues',
    savings: '40% faster time-to-market',
  },
  {
    client: 'Australian Brand',
    category: 'Textiles',
    challenge: 'Finding reliable garment manufacturer for private label',
    result: 'Factory audit, production monitoring, 100% order accuracy',
    savings: '25% cost reduction',
  },
]

const faqs = [
  {
    question: 'How do you verify factories?',
    answer: 'We conduct in-person factory visits to verify business licenses, production capacity, equipment, worker count, and certifications. We also check financial stability and customer references.',
  },
  {
    question: 'What quality inspection standards do you use?',
    answer: 'We follow AQL (Acceptable Quality Level) standards and can customize inspection criteria based on your product specifications. Our inspectors are certified and use detailed checklist systems.',
  },
  {
    question: 'How do you charge your services?',
    answer: 'Our fee structure is transparent—typically a combination of service fee and success commission. We provide detailed quotes before starting any project, with no hidden costs.',
  },
  {
    question: 'Can you handle shipping and customs?',
    answer: 'Yes, we coordinate full logistics including freight forwarding, customs documentation, and door-to-door delivery. We work with reliable shipping partners to ensure smooth clearance.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We have experience across electronics, textiles, machinery, home goods, packaging, automotive parts, and more. Our team adapts to various product categories.',
  },
]

const Home = () => {
  const [openFaq, setOpenFaq] = React.useState(null)

  return (
    <>
      <Helmet>
        <title>China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China</title>
        <meta name="description" content="SSourcing China - Professional China sourcing agent helping overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping worldwide." />
      </Helmet>
      
      <style>{styles}</style>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-8">
              <Shield className="w-4 h-4 mr-2" />
              Trusted by 500+ Global Buyers
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for{' '}
              <span className="text-blue-400">Global Buyers</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              We help you find verified suppliers, ensure product quality, and manage 
              seamless shipping from China. Eliminate risks, save time, and scale your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/25"
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
          </div>
        </div>

        {/* Trust Stats */}
        <div className="bg-slate-800/50 border-t border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {trustPoints.map((point, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mx-auto mb-3">
                    <point.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">{point.value}</div>
                  <div className="text-sm text-slate-400">{point.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Sourcing Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              End-to-end sourcing solutions designed to protect your interests and ensure successful outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works - Brief */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A simple, transparent 5-step process from request to delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
                  <div className="text-4xl font-bold text-blue-100 mb-4">{step.step}</div>
                  <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              Learn More About Our Process
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Extensive experience across multiple product categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=450&fit=crop')`
                  }}
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              View All Product Categories
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Problems We Solve
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Common challenges when sourcing from China—and how we help you overcome them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 text-xl">✕</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{problem.description}</p>
                    <div className="flex items-start gap-3 bg-green-500/10 rounded-lg p-4">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-green-400 font-medium text-sm">Solution: </span>
                        <span className="text-slate-300 text-sm">{problem.solution}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real results from real clients who trusted us with their China sourcing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-sm text-blue-600 font-medium mb-2">{study.category}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{study.client}</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-slate-500">Challenge:</span>
                    <p className="text-sm text-slate-600 mt-1">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-500">Result:</span>
                    <p className="text-sm text-slate-600 mt-1">{study.result}</p>
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {study.savings}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              View All Case Studies
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Quick answers to common questions about our sourcing services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-slate-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Sourcing from China?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Get a free sourcing quote within 24 hours. No commitment required.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home