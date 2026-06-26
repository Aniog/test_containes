import React from 'react'
import { Link } from 'react-router-dom'
import { Search, CheckCircle, Factory, Truck, FileText, Users, ArrowRight, Star, Shield, Clock } from 'lucide-react'

const Home = () => {
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    // Load images when component mounts
    if (window.ImageHelper && containerRef.current) {
      window.ImageHelper.loadImages(window.strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl text-gray-600 mb-8 leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality,
              follow production, and coordinate shipping from China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sourcing Services
            </h2>
            <p id="services-subtitle" className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive sourcing solutions to help you buy from China with confidence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: 'Supplier Sourcing',
                description: 'We identify and evaluate reliable suppliers matching your requirements and quality standards.',
              },
              {
                icon: CheckCircle,
                title: 'Factory Verification',
                description: 'On-site audits to verify manufacturer credentials, capabilities, and compliance.',
              },
              {
                icon: Factory,
                title: 'Quality Inspection',
                description: 'Pre-shipment and during-production inspections to ensure product quality.',
              },
              {
                icon: Clock,
                title: 'Production Monitoring',
                description: 'Regular updates and oversight throughout the manufacturing process.',
              },
              {
                icon: Truck,
                title: 'Shipping Coordination',
                description: 'Logistics management from factory to your doorstep with proper documentation.',
              },
              {
                icon: FileText,
                title: 'Sample Management',
                description: 'Coordinate samples, testing, and approvals before mass production.',
              },
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p id="process-subtitle" className="text-lg text-gray-600">
              A structured approach to successful China sourcing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Understand Requirements',
                description: 'We discuss your product specs, quality standards, target price, and timeline.',
              },
              {
                step: '02',
                title: 'Source & Verify',
                description: 'We identify suitable suppliers and conduct factory audits to verify capabilities.',
              },
              {
                step: '03',
                title: 'Negotiate & Sample',
                description: 'We negotiate pricing, lead time, and payment terms. Coordinate samples for approval.',
              },
              {
                step: '04',
                title: 'Monitor & Ship',
                description: 'We oversee production, conduct quality checks, and coordinate shipping logistics.',
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-4xl font-bold text-blue-100 mb-4">{step.step}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-300">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Products We Source
            </h2>
            <p id="products-subtitle" className="text-lg text-gray-600">
              Experience across diverse industries and product categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Electronics & Gadgets',
              'Home & Garden',
              'Fashion & Accessories',
              'Health & Beauty',
              'Sports & Outdoor',
              'Toys & Gifts',
              'Automotive Parts',
              'Industrial Equipment',
              'Packaging & Printing',
              'Textiles & Fabrics',
              'Furniture & Home Decor',
              'Pet Supplies',
            ].map((product, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer">
                <span className="font-medium text-sm">{product}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="problems-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Problems We Solve
            </h2>
            <p id="problems-subtitle" className="text-lg text-gray-600">
              Common challenges we help you overcome
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                problem: 'Finding reliable suppliers',
                solution: 'We verify factories and check their track record before introduction.',
              },
              {
                problem: 'Quality inconsistency',
                solution: 'Multi-stage inspections ensure products meet your specifications.',
              },
              {
                problem: 'Communication barriers',
                solution: 'Bilingual team bridges the gap between you and Chinese suppliers.',
              },
              {
                problem: 'Production delays',
                solution: 'Regular follow-ups and production monitoring keep your order on track.',
              },
              {
                problem: 'Shipping complexities',
                solution: 'We handle export documentation and coordinate with freight forwarders.',
              },
              {
                problem: 'No local presence',
                solution: 'Our team in China acts as your eyes and ears on the ground.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Shield className="w-6 h-6 text-red-500 mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Challenge: {item.problem}</h3>
                    <p className="text-gray-600 text-sm">
                      <span className="font-medium text-green-600">Solution: </span>
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="trust-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SSourcing China
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Users,
                number: '500+',
                label: 'Clients Served',
                description: 'Businesses from North America, Europe, Australia, and beyond.',
              },
              {
                icon: CheckCircle,
                number: '2000+',
                label: 'Projects Completed',
                description: 'Successful sourcing projects across diverse industries.',
              },
              {
                icon: Star,
                number: '95%',
                label: 'Client Satisfaction',
                description: 'Based on feedback from our repeat clients.',
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="case-studies-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p id="case-studies-subtitle" className="text-lg text-gray-600">
              See how we've helped businesses source successfully from China
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                client: 'US Home Decor Retailer',
                challenge: 'Needed reliable furniture supplier with custom design capabilities',
                result: 'Reduced sourcing costs by 30% while maintaining quality standards',
              },
              {
                client: 'German Electronics Brand',
                challenge: 'Required strict quality control for electronic components',
                result: 'Achieved 99.5% pass rate through rigorous inspection process',
              },
              {
                client: 'Australian Fitness Equipment',
                challenge: 'Sourcing specialized gym equipment with certifications',
                result: 'Successfully sourced certified products and managed shipping to 3 warehouses',
              },
            ].map((study, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="mb-4">
                  <span className="text-sm font-medium text-blue-600">{study.client}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Challenge:</h3>
                <p className="text-gray-600 text-sm mb-4">{study.challenge}</p>
                <h3 className="font-semibold text-gray-900 mb-2">Result:</h3>
                <p className="text-gray-600 text-sm">{study.result}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-2"
            >
              View All Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="faq-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How does your sourcing service work?',
                answer: 'We start by understanding your requirements, then identify and verify suppliers, negotiate terms, manage samples, monitor production, conduct quality inspections, and coordinate shipping.',
              },
              {
                question: 'What are your service fees?',
                answer: 'Our fees are typically based on a percentage of the order value or a fixed service fee, depending on the project scope. We provide transparent pricing after understanding your needs.',
              },
              {
                question: 'Do you work with small businesses?',
                answer: 'Yes, we work with businesses of all sizes, from startups to established brands. Our services are scalable to match your sourcing volume and requirements.',
              },
              {
                question: 'How do you ensure product quality?',
                answer: 'We conduct pre-shipment inspections, during-production checks, and can arrange third-party testing. We also verify supplier quality management systems during factory audits.',
              },
              {
                question: 'What is your typical lead time?',
                answer: 'Lead times vary by product and order complexity. Typically, sourcing and sampling take 2-4 weeks, while production ranges from 30-60 days depending on the product and order quantity.',
              },
            ].map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-lg p-6">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-blue-600">+</span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </details>
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
            Get a free consultation and sourcing quote. No obligations.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
