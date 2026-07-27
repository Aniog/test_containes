import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, Award, Clock, Shield } from 'lucide-react'

const Home = () => {
  const services = [
    { title: 'Supplier Sourcing', desc: 'Identify and qualify suppliers matching your requirements' },
    { title: 'Factory Verification', desc: 'On-site audits and background checks on potential suppliers' },
    { title: 'Quality Inspection', desc: 'Pre-shipment and in-process quality control inspections' },
    { title: 'Production Monitoring', desc: 'Track production progress and ensure delivery timelines' },
    { title: 'Logistics Coordination', desc: 'Manage shipping, customs clearance, and delivery' },
  ]

  const process = [
    { step: '01', title: 'Submit Requirements', desc: 'Share your product specifications, target price, and timeline' },
    { step: '02', title: 'Supplier Matching', desc: 'We identify 3-5 qualified suppliers based on your criteria' },
    { step: '03', title: 'Verification & Quotes', desc: 'Factory audits and competitive quotes from verified suppliers' },
    { step: '04', title: 'Order Management', desc: 'Quality checks, production monitoring, and shipping coordination' },
  ]

  const products = [
    'Consumer Electronics', 'Home Appliances', 'Furniture & Home Decor',
    'Industrial Machinery', 'Textiles & Apparel', 'Automotive Parts',
    'Packaging Materials', 'Building Supplies', 'Medical Equipment'
  ]

  const problems = [
    'Difficulty finding reliable suppliers who meet quality standards',
    'Uncertainty about factory legitimacy and production capabilities',
    'Quality issues discovered only after products arrive',
    'Communication barriers and time zone challenges',
    'Complex logistics and customs clearance processes',
  ]

  const trustPoints = [
    { icon: Users, label: '500+ Clients Served', value: 'Since 2015' },
    { icon: Award, label: '98% Satisfaction', value: 'Verified Reviews' },
    { icon: Clock, label: '15-Day Average', value: 'Sourcing Timeline' },
    { icon: Shield, label: 'ISO 9001', value: 'Certified Process' },
  ]

  const caseStudies = [
    { client: 'European Retail Chain', result: 'Reduced sourcing costs by 23% while improving product quality', category: 'Home Goods' },
    { client: 'US E-commerce Brand', result: 'Successfully onboarded 4 new suppliers in 6 weeks', category: 'Electronics' },
    { client: 'Australian Distributor', result: 'Cut lead times from 90 to 65 days through process optimization', category: 'Industrial' },
  ]

  const faqs = [
    { q: 'How much does your service cost?', a: 'Our fees are project-based and typically range from 3-8% of order value, depending on complexity and volume. We provide transparent quotes upfront.' },
    { q: 'How long does the sourcing process take?', a: 'Initial supplier identification takes 5-10 business days. Full verification and first order coordination typically requires 4-8 weeks.' },
    { q: 'Do you work with small businesses?', a: 'Yes. We work with businesses of all sizes, from startups placing their first order to established importers managing regular shipments.' },
    { q: 'What if I am not satisfied with the suppliers you find?', a: 'We offer a satisfaction guarantee. If the initial suppliers do not meet your requirements, we continue the search at no additional cost.' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm mb-6">
            Trusted by 500+ international buyers
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            China Sourcing Agent<br />for Global Buyers
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Find reliable suppliers, verify factories, and manage production with a dedicated sourcing partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
            >
              See How It Works
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-400">No obligation. Response within 24 hours.</p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                  <point.icon className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{point.label}</div>
                  <div className="text-sm text-slate-500">{point.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-slate-500 tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl font-semibold text-slate-900 mt-3">End-to-End Sourcing Services</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive support from supplier identification through final delivery.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-8 border border-gray-200 rounded-xl hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 bg-slate-900 rounded-lg mb-6" />
              <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center text-slate-900 font-medium hover:underline">
            View all services <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-slate-500 tracking-wider">OUR APPROACH</span>
            <h2 className="text-4xl font-semibold text-slate-900 mt-3">The Sourcing Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="text-4xl font-semibold text-slate-200 mb-4">{item.step}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center text-slate-900 font-medium hover:underline">
              Learn more about our process <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section id="products" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-medium text-slate-500 tracking-wider">INDUSTRIES WE SERVE</span>
            <h2 className="text-4xl font-semibold text-slate-900 mt-3 mb-6">Products We Source</h2>
            <p className="text-lg text-slate-600 mb-8">
              We work across diverse product categories with established supplier networks in each sector.
            </p>
            <Link to="/products" className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800">
              Browse Product Categories
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {products.map((product, index) => (
              <div key={index} className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-700">{product}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-slate-400 tracking-wider">COMMON CHALLENGES</span>
            <h2 className="text-4xl font-semibold mt-3">Problems We Solve</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white/5 rounded-xl border border-white/10">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-lg">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-sm font-medium text-slate-500 tracking-wider">RESULTS</span>
            <h2 className="text-4xl font-semibold text-slate-900 mt-2">Recent Case Studies</h2>
          </div>
          <Link to="/case-studies" className="hidden md:inline-flex items-center text-slate-900 font-medium hover:underline">
            View all case studies <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div key={index} className="p-8 border border-gray-200 rounded-xl">
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-4">{study.category}</div>
              <h3 className="font-semibold text-lg mb-3">{study.client}</h3>
              <p className="text-slate-600">{study.result}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 md:hidden">
          <Link to="/case-studies" className="inline-flex items-center text-slate-900 font-medium hover:underline">
            View all case studies <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-slate-500 tracking-wider">QUESTIONS</span>
            <h2 className="text-4xl font-semibold text-slate-900 mt-3">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-white border border-gray-200 rounded-xl p-6">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-600 pr-8">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-slate-600 mb-4">Still have questions?</p>
            <Link to="/contact" className="inline-flex items-center px-6 py-3 border border-slate-300 rounded-lg font-medium hover:bg-white transition-colors">
              Contact our team
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-semibold text-slate-900 mb-4">Ready to Start Sourcing?</h2>
        <p className="text-xl text-slate-600 mb-8">Get matched with verified suppliers within 10 business days.</p>
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors text-lg"
        >
          Get a Free Sourcing Quote
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
        <p className="mt-4 text-sm text-slate-500">Free consultation. No commitment required.</p>
      </section>
    </div>
  )
}

export default Home