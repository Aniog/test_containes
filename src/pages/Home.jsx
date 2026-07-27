import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CheckCircle, Users, Award, Clock, ArrowRight } from 'lucide-react'

const Home = () => {
  const services = [
    { title: 'Supplier Identification', desc: 'Find qualified manufacturers matching your product requirements and quality standards.' },
    { title: 'Factory Verification', desc: 'On-site audits to confirm legitimacy, production capacity, and compliance.' },
    { title: 'Quality Inspection', desc: 'Pre-shipment and in-process inspections to ensure products meet specifications.' },
    { title: 'Production Monitoring', desc: 'Regular updates and oversight throughout the manufacturing process.' },
    { title: 'Shipping Coordination', desc: 'Logistics management from factory to your destination port or warehouse.' },
    { title: 'Ongoing Support', desc: 'Continued assistance for repeat orders and supplier relationship management.' },
  ]

  const process = [
    { step: '01', title: 'Inquiry', desc: 'Submit your product requirements and specifications.' },
    { step: '02', title: 'Sourcing', desc: 'We identify and shortlist suitable suppliers.' },
    { step: '03', title: 'Verification', desc: 'Factory audits and sample evaluation.' },
    { step: '04', title: 'Production', desc: 'Order placement with production monitoring.' },
    { step: '05', title: 'Inspection', desc: 'Quality checks before shipment.' },
    { step: '06', title: 'Delivery', desc: 'Shipping coordination and documentation.' },
  ]

  const products = [
    'Consumer Electronics', 'Home & Kitchen', 'Textiles & Apparel', 'Industrial Components',
    'Furniture & Fixtures', 'Packaging Materials', 'Automotive Parts', 'Medical Supplies'
  ]

  const problems = [
    'Difficulty finding reliable suppliers who meet quality standards',
    'Uncertainty about factory legitimacy and production capabilities',
    'Quality issues discovered only after products arrive',
    'Communication barriers and time zone challenges',
    'Complex logistics and documentation requirements',
    'Lack of visibility into production progress'
  ]

  const trustPoints = [
    { icon: Users, label: '500+ Clients Served' },
    { icon: Award, label: '98% Client Retention' },
    { icon: Clock, label: '10+ Years Experience' },
    { icon: CheckCircle, label: '2,000+ Factories Audited' },
  ]

  const caseStudies = [
    { client: 'European Retail Chain', result: 'Reduced sourcing time by 60% while maintaining quality standards across 12 product categories.' },
    { client: 'US Industrial Distributor', result: 'Identified and verified 3 new suppliers, achieving 25% cost reduction without compromising specifications.' },
    { client: 'Australian E-commerce Brand', result: 'Established reliable supply chain for 50+ SKUs with consistent on-time delivery rates above 95%.' },
  ]

  const faqs = [
    { q: 'How do you verify suppliers?', a: 'We conduct on-site factory audits covering production capacity, quality systems, compliance documentation, and financial stability.' },
    { q: 'What is included in quality inspection?', a: 'Inspections include product specifications verification, workmanship checks, packaging assessment, and quantity confirmation.' },
    { q: 'How long does the sourcing process take?', a: 'Initial supplier identification typically takes 2-4 weeks. Full verification and sample approval adds 3-6 weeks depending on complexity.' },
    { q: 'Do you handle shipping and logistics?', a: 'Yes, we coordinate freight booking, documentation, customs clearance support, and delivery scheduling to your specified destination.' },
    { q: 'What are your service fees?', a: 'Fees vary by service scope. We provide transparent quotations based on project requirements. Contact us for a detailed proposal.' },
  ]

  return (
    <div>
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">China Sourcing Agent for Global Buyers</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">Professional sourcing, verification, and quality management services connecting overseas buyers with reliable Chinese manufacturers.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700">Get a Free Sourcing Quote</Button>
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive support throughout the sourcing lifecycle.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="p-8 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
              <h3 className="font-semibold text-lg mb-3 text-slate-900">{service.title}</h3>
              <p className="text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services"><Button variant="outline">View All Services <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Sourcing Process</h2>
            <p className="text-slate-600">A structured approach to reliable sourcing outcomes.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
            {process.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-slate-200">
                <div className="text-sky-600 font-mono text-sm mb-2">{item.step}</div>
                <h3 className="font-semibold mb-2 text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works"><Button variant="outline">Learn More About Our Process</Button></Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Products We Source</h2>
          <p className="text-slate-600">Experience across diverse product categories.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product, i) => (
            <div key={i} className="p-6 border border-slate-200 rounded-lg text-center text-slate-700 hover:bg-slate-50 transition-colors">{product}</div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products"><Button variant="outline">Explore Product Categories</Button></Link>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Problems We Solve</h2>
            <p className="text-slate-600">Common sourcing challenges we help buyers overcome.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((problem, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white rounded-lg border border-slate-200">
                <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Buyers Trust Us</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustPoints.map((point, i) => (
            <div key={i} className="text-center">
              <point.icon className="w-10 h-10 mx-auto mb-4 text-sky-600" />
              <div className="font-semibold text-lg text-slate-900">{point.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Case Studies</h2>
            <p className="text-slate-600">Real results for our clients.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-slate-200">
                <div className="font-semibold text-lg mb-4 text-slate-900">{study.client}</div>
                <p className="text-slate-600">{study.result}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies"><Button variant="outline">View All Case Studies</Button></Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group border border-slate-200 rounded-lg p-6">
              <summary className="font-semibold text-slate-900 cursor-pointer list-none flex justify-between items-center">
                {faq.q}
                <span className="text-slate-400 group-open:rotate-180 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/contact"><Button>Ask Us a Question</Button></Link>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Sourcing Project?</h2>
          <p className="text-slate-300 mb-8">Contact us for a free consultation and detailed quotation.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700">Get a Free Sourcing Quote</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home