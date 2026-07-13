import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CheckCircle, Users, Award, Clock } from 'lucide-react'

const Home = () => {
  const services = [
    { title: 'Supplier Identification', desc: 'Find qualified manufacturers matching your requirements.' },
    { title: 'Factory Verification', desc: 'On-site audits and background checks on potential suppliers.' },
    { title: 'Quality Inspection', desc: 'Pre-shipment and in-process inspections to ensure standards.' },
    { title: 'Production Monitoring', desc: 'Track production milestones and timelines.' },
    { title: 'Logistics Coordination', desc: 'Manage shipping, customs, and delivery to your destination.' },
  ]

  const problems = [
    'Difficulty finding reliable suppliers',
    'Quality issues and inconsistent products',
    'Communication barriers and time zone challenges',
    'Complex logistics and customs procedures',
    'Risk of payment fraud or non-delivery',
  ]

  const trustPoints = [
    { icon: Users, label: '500+ Clients Served' },
    { icon: Award, label: '98% Satisfaction Rate' },
    { icon: Clock, label: '12+ Years Experience' },
    { icon: CheckCircle, label: '2,000+ Factories Verified' },
  ]

  const caseStudies = [
    { client: 'European Retail Chain', result: 'Reduced sourcing costs by 22% while improving product quality.' },
    { client: 'US Hardware Importer', result: 'Successfully onboarded 3 new suppliers with zero quality issues in first year.' },
    { client: 'Australian Furniture Brand', result: 'Cut lead times by 35% through optimized production monitoring.' },
  ]

  const faqs = [
    { q: 'What industries do you specialize in?', a: 'We work across consumer goods, electronics, home furnishings, apparel, industrial components, and more.' },
    { q: 'How do you verify suppliers?', a: 'We conduct on-site factory audits, review business licenses, check production capabilities, and interview key personnel.' },
    { q: 'What is your inspection process?', a: 'We follow AQL standards with detailed checklists covering materials, workmanship, functionality, packaging, and labeling.' },
    { q: 'Do you handle shipping and customs?', a: 'Yes, we coordinate with freight forwarders, prepare documentation, and assist with customs clearance procedures.' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">China Sourcing Agent for Global Buyers</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">Connect with verified Chinese manufacturers. Manage quality, production, and logistics with a dedicated sourcing partner.</p>
          <Button size="lg" asChild>
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-slate-200 bg-white py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustPoints.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 justify-center md:justify-start">
              <item.icon className="text-slate-600" size={24} />
              <span className="font-medium text-slate-700">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-3">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">End-to-end support from supplier discovery to final delivery.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="border border-slate-200 rounded-lg p-6 hover:border-slate-300 transition-colors">
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="outline" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Our Sourcing Process</h2>
            <p className="text-slate-600">A structured approach to minimize risk and maximize value.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {['Requirement Analysis', 'Supplier Research', 'Verification & Audit', 'Sample Evaluation', 'Order Management'].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center mx-auto mb-4 text-sm font-medium">{idx + 1}</div>
                <p className="font-medium text-sm">{step}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/how-it-works">Learn More About the Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-3">Products We Source</h2>
          <p className="text-slate-600">Categories we regularly support for international buyers.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Consumer Electronics', 'Home & Garden', 'Apparel & Textiles', 'Industrial Equipment', 'Furniture & Furnishings', 'Automotive Parts', 'Packaging Materials', 'Promotional Products'].map((cat, idx) => (
            <div key={idx} className="border border-slate-200 rounded p-4 text-center text-sm font-medium text-slate-700 hover:bg-slate-50">{cat}</div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="outline" asChild>
            <Link to="/products">Browse All Categories</Link>
          </Button>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-white border-y border-slate-200 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Problems We Solve</h2>
              <ul className="space-y-4">
                {problems.map((problem, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={20} />
                    {problem}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg">
              <p className="text-slate-600 italic">"Working with SSourcing China eliminated the uncertainty we faced when sourcing directly. Their verification process gave us confidence in every supplier we engaged."</p>
              <p className="mt-4 text-sm font-medium">— Operations Director, UK Import Company</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Case Studies</h2>
            <p className="text-slate-600">Real results for international clients.</p>
          </div>
          <Button variant="outline" asChild className="hidden md:block">
            <Link to="/case-studies">View All Cases</Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="border border-slate-200 rounded-lg p-6">
              <p className="font-semibold mb-3">{study.client}</p>
              <p className="text-sm text-slate-600">{study.result}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-white border border-slate-200 rounded-lg p-6 group">
                <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Start Sourcing?</h2>
          <p className="text-slate-300 mb-8">Request a free sourcing quote and receive a detailed proposal within 48 hours.</p>
          <Button size="lg" asChild>
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home