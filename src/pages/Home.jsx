import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { 
  Search, 
  ShieldCheck, 
  ClipboardCheck, 
  Ship, 
  CheckCircle2, 
  ArrowRight,
  Factory,
  PackageCheck,
  Truck,
  Globe,
  Star,
  Users,
  Award,
  Clock,
  ChevronRight,
  HelpCircle,
  FileText,
  MessageSquare
} from 'lucide-react'

const Home = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We find and vet reliable Chinese manufacturers that match your product requirements, budget, and quality standards.',
      features: ['Verified supplier database', 'Price negotiation', 'MOQ flexibility']
    },
    {
      icon: ShieldCheck,
      title: 'Factory Verification',
      description: 'On-site factory audits to verify business licenses, production capacity, and operational legitimacy.',
      features: ['Business license check', 'Factory tour', 'Production capacity assessment']
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control',
      description: 'Comprehensive QC inspections at every stage to ensure products meet your specifications and standards.',
      features: ['Pre-production inspection', 'During production inspection', 'Pre-shipment inspection']
    },
    {
      icon: Ship,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics management from factory to your warehouse, including customs clearance.',
      features: ['Freight forwarding', 'Customs documentation', 'Insurance coordination']
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Submit Your Requirements',
      description: 'Share your product specifications, target price, quantity, and quality requirements with our team.',
      icon: FileText
    },
    {
      step: '02',
      title: 'Supplier Matching',
      description: 'We source and verify multiple suppliers that match your criteria, providing detailed profiles.',
      icon: Search
    },
    {
      step: '03',
      title: 'Factory Verification & QC',
      description: 'We conduct factory audits and quality inspections to ensure supplier reliability.',
      icon: ShieldCheck
    },
    {
      step: '04',
      title: 'Production Monitoring',
      description: 'We oversee production, conduct inspections, and ensure timely delivery.',
      icon: ClipboardCheck
    },
    {
      step: '05',
      title: 'Shipping & Delivery',
      description: 'We coordinate logistics, handle documentation, and ship to your destination.',
      icon: Ship
    },
  ]

  const products = [
    { name: 'Electronics & Components', icon: '⚡' },
    { name: 'Home & Garden', icon: '🏠' },
    { name: 'Apparel & Textiles', icon: '👕' },
    { name: 'Toys & Gifts', icon: '🎁' },
    { name: 'Auto Parts', icon: '🚗' },
    { name: 'Industrial Equipment', icon: '⚙️' },
    { name: 'Health & Beauty', icon: '💄' },
    { name: 'Sports & Outdoors', icon: '⚽' },
  ]

  const problems = [
    {
      problem: 'Finding Reliable Suppliers',
      solution: 'We have a vetted network of verified manufacturers across China, saving you months of research.',
      icon: Search
    },
    {
      problem: 'Quality Control Issues',
      solution: 'Our experienced QC inspectors conduct thorough inspections at every production stage.',
      icon: ClipboardCheck
    },
    {
      problem: 'Communication Barriers',
      solution: 'Native English-speaking sourcing agents bridge the language and cultural gap.',
      icon: MessageSquare
    },
    {
      problem: 'Shipping & Logistics Complexity',
      solution: 'We handle all logistics, documentation, and customs clearance for seamless delivery.',
      icon: Ship
    },
  ]

  const trustPoints = [
    { icon: Users, stat: '500+', label: 'Clients Served' },
    { icon: Factory, stat: '200+', label: 'Verified Factories' },
    { icon: Award, stat: '98%', label: 'Client Satisfaction' },
    { icon: Clock, stat: '10+', label: 'Years Experience' },
  ]

  const caseStudies = [
    {
      client: 'US Retail Chain',
      product: 'Home Decor Items',
      result: 'Reduced sourcing costs by 25% while improving quality',
      category: 'Home & Garden'
    },
    {
      client: 'European Electronics Brand',
      product: 'Consumer Electronics',
      result: 'Found 3 reliable suppliers, reduced lead time by 30%',
      category: 'Electronics'
    },
    {
      client: 'Australian Apparel Brand',
      product: 'Fashion Apparel',
      result: 'Established long-term partnership with quality manufacturer',
      category: 'Apparel'
    },
  ]

  const faqs = [
    {
      question: 'What is a sourcing agent?',
      answer: 'A sourcing agent acts as your local representative in China, helping you find suppliers, verify factories, inspect quality, and coordinate shipping. We bridge the gap between your business and Chinese manufacturers.'
    },
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct comprehensive factory audits including business license verification, facility tours, production capacity assessment, and reference checks with existing clients.'
    },
    {
      question: 'What are your fees?',
      answer: 'Our fees vary based on project scope. We typically charge a percentage of the order value or a fixed project fee. Contact us for a customized quote based on your specific needs.'
    },
    {
      question: 'Do you handle shipping?',
      answer: 'Yes, we coordinate end-to-end logistics including freight forwarding, customs documentation, and insurance. We can ship by sea, air, or express courier depending on your needs.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We source across multiple industries including electronics, home & garden, apparel, toys, auto parts, industrial equipment, and more. Our team has expertise in various product categories.'
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm">
                <Globe className="mr-2 h-4 w-4" />
                Trusted by 500+ businesses worldwide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                China Sourcing Agent for{' '}
                <span className="text-blue-300">Global Buyers</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl">
                We help overseas businesses find reliable suppliers, verify factories, 
                inspect quality, and coordinate shipping from China. Your trusted partner 
                for hassle-free sourcing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                  <Link to="/contact">
                    Get a Free Sourcing Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <Link to="/how-it-works">Learn How It Works</Link>
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-700">
                      {String.fromCharCode(64+i)}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm">4.9/5 from 200+ reviews</span>
                </div>
              </div>
            </div>
            <div className="relative lg:pl-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  data-strk-img-id="hero-sourcing-img-8f2a9c"
                  data-strk-img="[hero-subtitle] [hero-title]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="China sourcing agent with factory"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Verified Suppliers</p>
                    <p className="text-xs text-gray-500">200+ factories audited</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 text-blue-600 mb-3">
                  <point.icon className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{point.stat}</div>
                <div className="text-sm text-gray-600">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Sourcing Solutions
            </h2>
            <p className="text-lg text-gray-600">
              From finding suppliers to delivering products, we handle every step of your China sourcing journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Sourcing Process Works
            </h2>
            <p className="text-lg text-gray-600">
              A simple, transparent 5-step process to take your product from concept to delivery.
            </p>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 hidden lg:block"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative z-10">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-lg mb-4 mx-auto">
                      {step.step}
                    </div>
                    <div className="flex justify-center mb-4">
                      <step.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 text-center">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/how-it-works">Learn More About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-gray-600">
              We source a wide range of products across multiple industries. Here are some of the categories we specialize in.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow cursor-pointer group">
                <div className="text-4xl mb-3">{product.icon}</div>
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{product.name}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/products">
                View All Product Categories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Problems We Solve
            </h2>
            <p className="text-lg text-gray-600">
              Common challenges overseas buyers face when sourcing from China, and how we help you overcome them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((item, index) => (
              <div key={index} className="flex gap-6 p-6 rounded-xl bg-gray-50 border border-gray-100">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.problem}</h3>
                  <p className="text-gray-600">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              See how we've helped businesses like yours succeed with China sourcing.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                    {study.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{study.client}</h3>
                <p className="text-sm text-gray-600 mb-4">{study.product}</p>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/case-studies">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our China sourcing services.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-gray-50 rounded-lg border border-gray-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ChevronRight className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Sourcing from China?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation sourcing quote. Tell us what you need, and we'll find the right suppliers for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              <Link to="/contact">
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <a href="mailto:info@ssourcingchina.com">Email Us Directly</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
