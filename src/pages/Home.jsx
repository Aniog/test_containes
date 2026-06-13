import React from 'react'
import CTAButton from '../components/CTAButton'
import { CheckCircle, Users, Award, Truck } from 'lucide-react'

const Home = () => {
  const services = [
    { title: 'Supplier Identification', desc: 'Find qualified manufacturers matching your specifications and volume requirements.' },
    { title: 'Factory Verification', desc: 'On-site audits to confirm legitimacy, capacity, and compliance standards.' },
    { title: 'Quality Inspection', desc: 'Pre-shipment and in-process inspections to ensure product standards are met.' },
    { title: 'Production Monitoring', desc: 'Regular progress updates and timeline management throughout manufacturing.' },
    { title: 'Logistics Coordination', desc: 'Freight booking, customs documentation, and delivery scheduling.' },
  ]

  const process = [
    { step: '01', title: 'Requirement Analysis', desc: 'We review your product specifications, target price, and timeline.' },
    { step: '02', title: 'Supplier Matching', desc: 'We identify 3-5 verified suppliers that meet your criteria.' },
    { step: '03', title: 'Quotation & Samples', desc: 'Suppliers provide detailed quotes and sample production.' },
    { step: '04', title: 'Order Management', desc: 'We oversee production, quality checks, and coordinate shipping.' },
    { step: '05', title: 'Delivery & Support', desc: 'Products arrive on schedule with full documentation.' },
  ]

  const products = [
    'Consumer Electronics & Components',
    'Home & Kitchen Appliances',
    'Textiles & Apparel',
    'Industrial Machinery & Parts',
    'Automotive Components',
    'Furniture & Home Decor',
    'Packaging Materials',
    'Medical & Safety Equipment',
  ]

  const problems = [
    'Difficulty finding reliable suppliers who meet quality standards',
    'Uncertainty about factory legitimacy and production capacity',
    'Quality issues discovered only after products arrive',
    'Communication barriers and time zone challenges',
    'Complex logistics and customs procedures',
    'Lack of visibility into production progress',
  ]

  const trustPoints = [
    { icon: Users, label: '500+ Clients Served' },
    { icon: Award, label: '2,000+ Factories Audited' },
    { icon: CheckCircle, label: '98% On-Time Delivery' },
    { icon: Truck, label: '15 Years Experience' },
  ]

  const caseStudies = [
    { client: 'European Retail Chain', result: 'Reduced sourcing costs by 22% while improving product quality ratings.', category: 'Home Goods' },
    { client: 'US E-commerce Brand', result: 'Successfully onboarded 3 new suppliers within 6 weeks for seasonal product launch.', category: 'Electronics' },
    { client: 'Australian Distributor', result: 'Resolved recurring quality issues through factory process improvements.', category: 'Industrial' },
  ]

  const faqs = [
    { q: 'How do you verify suppliers?', a: 'We conduct on-site factory audits covering production capacity, quality systems, financial stability, and compliance documentation.' },
    { q: 'What are your service fees?', a: 'Our fees are project-based or percentage of order value, depending on scope. We provide transparent quotes before engagement.' },
    { q: 'How long does the sourcing process take?', a: 'Initial supplier identification typically takes 1-2 weeks. Full order management depends on production timelines.' },
    { q: 'Do you handle shipping and customs?', a: 'Yes, we coordinate freight, prepare export documentation, and work with your freight forwarder or ours.' },
    { q: 'What if quality issues arise?', a: 'We conduct pre-shipment inspections and work with suppliers to address issues before goods leave the factory.' },
  ]

  return (
    <div>
      <section className="bg-[#0A2540] text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Connect with verified Chinese manufacturers. Manage quality, production, and logistics with a dedicated sourcing partner.
          </p>
          <CTAButton>Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">End-to-end support for sourcing from China, from supplier discovery to delivery.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-8">
              <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <CTAButton to="/services">View All Services</CTAButton>
        </div>
      </section>

      <section className="bg-[#F3F4F6] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Sourcing Process</h2>
            <p className="text-gray-600">A structured approach to finding and managing suppliers.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6">
                <div className="text-[#1E40AF] font-semibold text-sm mb-2">{item.step}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/how-it-works">Learn More About Our Process</CTAButton>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Products We Source</h2>
            <p className="text-gray-600 mb-8">We work across diverse product categories with established supplier networks.</p>
            <CTAButton to="/products">Browse Product Categories</CTAButton>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {products.map((product, idx) => (
              <div key={idx} className="border border-gray-200 rounded px-4 py-3 text-sm">{product}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F4F6] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Problems We Solve</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((problem, idx) => (
              <div key={idx} className="flex gap-4 bg-white p-6 rounded-lg">
                <CheckCircle className="text-[#059669] flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Why Buyers Trust Us</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {trustPoints.map((point, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <point.icon className="text-[#1E40AF] mb-4" size={40} />
              <p className="font-semibold">{point.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F3F4F6] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Case Studies</h2>
              <p className="text-gray-600">Real results from our sourcing partnerships.</p>
            </div>
            <CTAButton to="/case-studies">View All Cases</CTAButton>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-4">{study.category}</div>
                <h3 className="font-semibold mb-3">{study.client}</h3>
                <p className="text-gray-600">{study.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="border border-gray-200 rounded-lg p-6 group">
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                {faq.q}
                <span className="text-gray-400 group-open:rotate-180 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-gray-600">{faq.a}</p>
            </details>
          ))}
        </div>
        <div className="text-center mt-10">
          <CTAButton to="/contact">Still Have Questions? Contact Us</CTAButton>
        </div>
      </section>

      <section className="bg-[#0A2540] text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Start Sourcing?</h2>
          <p className="text-gray-300 mb-8">Get a customized sourcing proposal within 24 hours.</p>
          <CTAButton>Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  )
}

export default Home