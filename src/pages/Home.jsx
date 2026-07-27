import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { CheckCircle, Users, Award, Clock } from 'lucide-react'

const Home = () => {
  const services = [
    { title: 'Supplier Identification', desc: 'Find qualified manufacturers matching your requirements' },
    { title: 'Factory Verification', desc: 'On-site audits and background checks on potential suppliers' },
    { title: 'Quality Inspection', desc: 'Pre-shipment and in-process quality control checks' },
    { title: 'Production Monitoring', desc: 'Track production progress and ensure timelines are met' },
    { title: 'Logistics Coordination', desc: 'Manage shipping, customs, and delivery to your door' },
  ]

  const process = [
    { step: '01', title: 'Requirement Analysis', desc: 'We discuss your product specs, target price, and timeline.' },
    { step: '02', title: 'Supplier Sourcing', desc: 'We identify and shortlist 3-5 qualified suppliers.' },
    { step: '03', title: 'Verification & Quotes', desc: 'Factory visits, samples, and competitive quotations.' },
    { step: '04', title: 'Order Management', desc: 'Contract review, production oversight, and QC inspections.' },
    { step: '05', title: 'Shipping & Delivery', desc: 'Logistics coordination and final delivery tracking.' },
  ]

  const products = [
    'Consumer Electronics', 'Home & Kitchen', 'Textiles & Apparel',
    'Industrial Components', 'Packaging Materials', 'Furniture & Fixtures',
    'Automotive Parts', 'Medical Supplies'
  ]

  const problems = [
    'Difficulty finding reliable suppliers who meet quality standards',
    'Uncertainty about factory legitimacy and production capabilities',
    'Quality issues discovered only after goods arrive',
    'Communication barriers and time zone challenges',
    'Complex logistics and customs clearance processes',
  ]

  const trustPoints = [
    { icon: Users, label: '500+ Clients Served' },
    { icon: Award, label: '98% On-Time Delivery' },
    { icon: CheckCircle, label: '2,000+ Factories Audited' },
    { icon: Clock, label: '10+ Years Experience' },
  ]

  const cases = [
    { client: 'European Retail Chain', result: 'Reduced sourcing costs by 22% while improving product quality', category: 'Home Goods' },
    { client: 'US E-commerce Brand', result: 'Successfully onboarded 3 new suppliers within 6 weeks', category: 'Electronics' },
    { client: 'Australian Distributor', result: 'Resolved recurring quality issues through improved QC protocols', category: 'Apparel' },
  ]

  const faqs = [
    { q: 'How do you charge for your services?', a: 'We work on a transparent fee structure based on order value or a fixed project fee. No hidden costs.' },
    { q: 'Do you have minimum order requirements?', a: 'No minimums. We work with businesses of all sizes from startups to established importers.' },
    { q: 'How long does the sourcing process take?', a: 'Initial supplier shortlist within 2 weeks. Full order management depends on production timelines.' },
    { q: 'Can you handle existing supplier relationships?', a: 'Yes. We can audit and manage your current suppliers or help transition to better options.' },
    { q: 'What regions in China do you cover?', a: 'We have coverage across all major manufacturing regions including Guangdong, Zhejiang, Jiangsu, and Shandong.' },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">China Sourcing Agent for Global Buyers</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">Professional supplier verification, quality control, and logistics coordination. We help you source reliably from China.</p>
          <Button size="lg" asChild>
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-slate-200 py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustPoints.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 justify-center md:justify-start">
              <item.icon className="w-6 h-6 text-sky-600" />
              <span className="font-medium text-slate-700">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">End-to-end support throughout your sourcing journey.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="p-8 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
              <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="outline" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-slate-600">A clear, structured process from inquiry to delivery.</p>
          </div>
          <div className="space-y-6">
            {process.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 items-start bg-white p-8 rounded-lg border border-slate-200">
                <div className="text-4xl font-bold text-sky-600 w-16">{item.step}</div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/how-it-works">Learn More About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Products We Source</h2>
          <p className="text-slate-600">We work across diverse product categories and industries.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product, idx) => (
            <div key={idx} className="p-6 border border-slate-200 rounded-lg text-center hover:bg-slate-50 transition-colors">
              <span className="font-medium">{product}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="outline" asChild>
            <Link to="/products">Explore Product Categories</Link>
          </Button>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Problems We Solve</h2>
            <p className="text-slate-300">Common sourcing challenges we help our clients overcome.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-slate-800 rounded-lg">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <p>{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-slate-600">Real results for real businesses.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((item, idx) => (
            <div key={idx} className="p-8 border border-slate-200 rounded-lg">
              <div className="text-sm text-sky-600 font-medium mb-2">{item.category}</div>
              <h3 className="font-semibold text-lg mb-3">{item.client}</h3>
              <p className="text-slate-600">{item.result}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="outline" asChild>
            <Link to="/case-studies">Read More Case Studies</Link>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-white border border-slate-200 rounded-lg p-6 group">
                <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Sourcing?</h2>
          <p className="text-slate-600 mb-8">Get a free, no-obligation quote for your sourcing project.</p>
          <Button size="lg" asChild>
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home