import React from 'react'
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
  Package,
  BarChart3
} from 'lucide-react'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              We help overseas buyers find reliable suppliers, verify factories, 
              inspect quality, follow production, and coordinate shipping from China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-blue-700 hover:bg-blue-50">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/how-it-works" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-700">
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Our Sourcing Services</h2>
            <p>Comprehensive solutions to help you source from China with confidence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Supplier Sourcing</h3>
              <p className="text-gray-600">
                We identify and evaluate reliable suppliers matching your requirements, 
                saving you time and reducing risks.
              </p>
            </div>

            {/* Service 2 */}
            <div className="card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Factory Verification</h3>
              <p className="text-gray-600">
                On-site factory audits to verify legitimacy, production capacity, 
                and quality management systems.
              </p>
            </div>

            {/* Service 3 */}
            <div className="card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <ClipboardCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Inspection</h3>
              <p className="text-gray-600">
                Pre-shipment and during-production inspections to ensure your products 
                meet specifications and quality standards.
              </p>
            </div>

            {/* Service 4 */}
            <div className="card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Production Monitoring</h3>
              <p className="text-gray-600">
                Regular updates and monitoring during production to ensure timelines 
                are met and quality is maintained.
              </p>
            </div>

            {/* Service 5 */}
            <div className="card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Shipping Coordination</h3>
              <p className="text-gray-600">
                End-to-end logistics support including freight forwarding, customs 
                clearance, and delivery coordination.
              </p>
            </div>

            {/* Service 6 */}
            <div className="card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Comprehensive quality control processes to protect your brand 
                reputation and ensure customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Process Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Our Sourcing Process</h2>
            <p>A systematic approach to ensure successful sourcing from China</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Requirements Analysis',
                description: 'We discuss your needs, specifications, target price, and quality standards.'
              },
              {
                step: '02',
                title: 'Supplier Identification',
                description: 'We search our network and databases to find qualified suppliers matching your criteria.'
              },
              {
                step: '03',
                title: 'Factory Verification',
                description: 'On-site audits to verify supplier legitimacy, capacity, and quality systems.'
              },
              {
                step: '04',
                title: 'Sample & Production',
                description: 'Coordinate samples, negotiate terms, and monitor production quality.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/how-it-works" className="btn-primary">
              View Full Process
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Products We Source</h2>
            <p>We have experience sourcing a wide range of products across industries</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Electronics & Gadgets',
              'Home & Garden',
              'Fashion & Accessories',
              'Health & Beauty',
              'Sports & Outdoor',
              'Toys & Gifts',
              'Automotive Parts',
              'Industrial Equipment',
              'Packaging & Printing'
            ].map((product, index) => (
              <div key={index} className="card flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="font-medium">{product}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary">
              View All Product Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Problems We Solve</h2>
            <p>Common challenges faced by buyers sourcing from China</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                problem: 'Finding Reliable Suppliers',
                solution: 'We have a verified network of trusted suppliers and conduct thorough factory audits.'
              },
              {
                problem: 'Quality Control Issues',
                solution: 'Our inspection team ensures products meet your specifications before shipment.'
              },
              {
                problem: 'Communication Barriers',
                solution: 'We bridge the language and cultural gap, negotiating on your behalf.'
              },
              {
                problem: 'Production Delays',
                solution: 'We monitor production progress and keep you updated with regular reports.'
              },
              {
                problem: 'Shipping & Logistics',
                solution: 'We coordinate with reliable freight forwarders to ensure timely delivery.'
              },
              {
                problem: 'Intellectual Property Risks',
                solution: 'We help protect your designs and negotiate proper confidentiality agreements.'
              }
            ].map((item, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold text-red-600 mb-2">Problem: {item.problem}</h3>
                <p className="text-gray-700">
                  <span className="font-semibold text-green-600">Solution: </span>
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points Section */}
      <section className="section bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2 className="text-white">Why Choose SSourcing China</h2>
            <p className="text-blue-100">We are committed to your success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: '10+ Years Experience',
                description: 'A decade of helping global buyers source successfully from China.'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Verified Suppliers Only',
                description: 'We only work with suppliers that pass our rigorous verification process.'
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: 'Transparent Pricing',
                description: 'No hidden fees. Clear, upfront pricing for all our services.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Success Stories</h2>
            <p>See how we've helped businesses like yours</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'US Retailer Reduces Costs by 30%',
                description: 'Helped a US-based retailer find a reliable supplier for home decor items, reducing their sourcing costs by 30%.',
                result: '30% cost reduction, 50% faster lead time'
              },
              {
                title: 'European Brand Ensures Quality',
                description: 'Conducted pre-shipment inspections for a European fashion brand, preventing 500 defective units from shipping.',
                result: 'Zero defective products delivered to customers'
              },
              {
                title: 'Australian Startup Scales Production',
                description: 'Helped an Australian startup scale from 100 to 10,000 units per month while maintaining quality standards.',
                result: '100x production increase in 6 months'
              }
            ].map((item, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-700 font-semibold text-sm">Result: {item.result}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/case-studies" className="btn-primary">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our sourcing services</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'How much do your services cost?',
                answer: 'Our pricing is transparent and depends on the scope of work. We offer competitive rates and provide detailed quotes after understanding your requirements. Contact us for a free consultation.'
              },
              {
                question: 'How long does the sourcing process take?',
                answer: 'The timeline varies depending on the complexity of your project. Typically, supplier identification takes 1-2 weeks, factory verification 1 week, and production monitoring continues throughout the manufacturing process.'
              },
              {
                question: 'Do you work with small businesses?',
                answer: 'Yes, we work with businesses of all sizes, from startups to large enterprises. We tailor our services to meet your specific needs and budget.'
              },
              {
                question: 'How do you ensure quality?',
                answer: 'We conduct pre-shipment inspections, during-production checks, and work with suppliers who have proper quality management systems in place.'
              },
              {
                question: 'Can you help with shipping and logistics?',
                answer: 'Yes, we coordinate with reliable freight forwarders and can help with shipping arrangements, customs clearance, and delivery to your warehouse.'
              }
            ].map((item, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Sourcing from China?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get a free sourcing quote today. No obligations, just professional advice 
            on how we can help your business.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-blue-700 hover:bg-blue-50 text-lg">
            Get Your Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
