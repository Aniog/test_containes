import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CheckCircle, Users, Award, Clock, Shield, Truck } from 'lucide-react'

const Home = () => {
  const services = [
    { icon: Users, title: 'Supplier Sourcing', desc: 'Identify and qualify manufacturers matching your product specifications and volume requirements.' },
    { icon: Shield, title: 'Factory Verification', desc: 'On-site audits to confirm legitimacy, capabilities, and compliance before you commit.' },
    { icon: CheckCircle, title: 'Quality Inspection', desc: 'Pre-shipment and in-process inspections to ensure products meet your standards.' },
    { icon: Clock, title: 'Production Monitoring', desc: 'Regular progress updates and milestone tracking throughout manufacturing.' },
    { icon: Truck, title: 'Shipping Coordination', desc: 'Logistics management including booking, documentation, and customs clearance support.' },
  ]

  const process = [
    { step: '01', title: 'Requirement Analysis', desc: 'We discuss your product needs, target price, quality standards, and timeline.' },
    { step: '02', title: 'Supplier Identification', desc: 'We shortlist 3-5 qualified factories based on your criteria and our database.' },
    { step: '03', title: 'Verification & Sampling', desc: 'We audit factories and arrange samples for your approval before production.' },
    { step: '04', title: 'Production Oversight', desc: 'We monitor manufacturing milestones and conduct quality checks at key stages.' },
    { step: '05', title: 'Inspection & Shipping', desc: 'Final inspection, documentation, and coordination with freight forwarders.' },
  ]

  const products = [
    'Consumer Electronics & Accessories',
    'Home & Kitchen Appliances',
    'Textiles, Apparel & Accessories',
    'Industrial Components & Tools',
    'Packaging Materials & Supplies',
    'Furniture & Home Furnishings',
    'Automotive Parts & Accessories',
    'Toys, Games & Sporting Goods',
  ]

  const problems = [
    { title: 'Unreliable Suppliers', desc: 'Many factories promise quality and delivery but fail to deliver. We verify before you order.' },
    { title: 'Quality Inconsistencies', desc: 'Without on-site presence, defects often surface too late. We inspect at critical points.' },
    { title: 'Communication Barriers', desc: 'Language and time zone gaps cause costly misunderstandings. We bridge the gap daily.' },
    { title: 'Hidden Costs', desc: 'Unexpected fees erode margins. We clarify all costs upfront and manage logistics transparently.' },
  ]

  const trustPoints = [
    { number: '10+', label: 'Years in Operation' },
    { number: '850+', label: 'Factories Audited' },
    { number: '2,400+', label: 'Orders Managed' },
    { number: '38', label: 'Countries Served' },
  ]

  const caseStudies = [
    {
      client: 'European Home Goods Retailer',
      product: 'Kitchenware Collection',
      result: 'Reduced defect rate from 12% to under 2% through structured QC protocols.',
      savings: '18% cost reduction vs. previous agent',
    },
    {
      client: 'North American Industrial Distributor',
      product: 'Precision Components',
      result: 'Successfully onboarded 3 new suppliers with full verification and first-batch inspection.',
      savings: 'On-time delivery improved to 97%',
    },
    {
      client: 'Australian E-commerce Brand',
      product: 'Private Label Textiles',
      result: 'Managed end-to-end sourcing for 4 product launches with consistent quality.',
      savings: '6-week average lead time maintained',
    },
  ]

  const faqs = [
    { q: 'How do you find suppliers?', a: 'We combine our existing verified factory database with targeted searches based on your specifications. Every shortlisted supplier undergoes initial screening before we present options.' },
    { q: 'Do you charge a commission?', a: 'We work on a transparent service fee model. There are no hidden markups on product costs. We provide a clear fee structure before engagement.' },
    { q: 'Can you handle small orders?', a: 'Yes. While many factories prefer larger volumes, we work with clients placing orders from a few hundred units upward, depending on the product category.' },
    { q: 'What if there is a quality issue?', a: 'We document everything during inspection. If issues arise, we work with the factory on corrective actions or negotiate remedies on your behalf before shipment.' },
    { q: 'How long does the sourcing process take?', a: 'Initial supplier shortlisting typically takes 1-2 weeks. Sampling and verification add 2-4 weeks. Production timelines vary by product and order size.' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-sm mb-6 tracking-wide">EST. 2014 • SHANGHAI</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
            China Sourcing Agent<br />for Global Buyers
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-10">
            We help overseas companies find reliable Chinese manufacturers, verify factories, 
            maintain quality standards, and manage logistics from order to delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </div>
          <div className="mt-8 text-xs text-slate-400 tracking-widest">NO OBLIGATION • RESPONSE WITHIN 24 HOURS</div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {trustPoints.map((item, idx) => (
            <div key={idx}>
              <div className="text-3xl font-semibold text-slate-900 tracking-tight">{item.number}</div>
              <div className="text-sm text-slate-600 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-sm tracking-[2px] text-slate-500 mb-3">WHAT WE DO</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Core Sourcing Services</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Practical support at every stage of the sourcing process, from supplier identification to delivery.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl p-8 hover:border-slate-300 transition-colors bg-white">
              <service.icon className="w-8 h-8 text-slate-700 mb-6" />
              <h3 className="font-semibold text-xl mb-3 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild variant="outline">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <div className="text-sm tracking-[2px] text-slate-500 mb-3">OUR APPROACH</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">The Sourcing Process</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">A structured, transparent workflow designed to reduce risk and improve outcomes.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="text-xs font-mono tracking-[3px] text-slate-400 mb-4">{item.step}</div>
                <h3 className="font-semibold text-lg mb-3 text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/how-it-works">Learn More About the Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm tracking-[2px] text-slate-500 mb-3">CATEGORIES</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Products We Source</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We work across a wide range of product categories. Our team has hands-on experience 
              with both consumer goods and industrial components.
            </p>
            <Button asChild variant="outline">
              <Link to="/products">Browse All Categories</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {products.map((product, idx) => (
              <div key={idx} className="flex items-center gap-3 px-5 py-4 border border-slate-200 rounded-lg bg-white text-slate-700">
                <CheckCircle className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span className="text-sm">{product}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <div className="text-sm tracking-[2px] text-slate-400 mb-3">COMMON CHALLENGES</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Problems We Help Solve</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, idx) => (
              <div key={idx} className="border border-white/20 rounded-xl p-8">
                <h3 className="font-semibold text-xl mb-3">{problem.title}</h3>
                <p className="text-slate-300 leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <div className="text-sm tracking-[2px] text-slate-500 mb-3">RESULTS</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Recent Case Studies</h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/case-studies">View All Case Studies</Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl p-8 bg-white flex flex-col">
              <div className="text-sm text-slate-500 mb-1">{study.client}</div>
              <div className="font-semibold text-lg mb-4 text-slate-900">{study.product}</div>
              <div className="text-slate-600 text-sm leading-relaxed flex-1">{study.result}</div>
              <div className="mt-6 pt-6 border-t border-slate-100 text-sm font-medium text-slate-900">{study.savings}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <div className="text-sm tracking-[2px] text-slate-500 mb-3">QUESTIONS</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white border border-slate-200 rounded-xl px-6 py-1">
                <summary className="flex justify-between items-center cursor-pointer py-4 font-medium text-slate-900 list-none">
                  {faq.q}
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="pb-5 text-slate-600 text-sm leading-relaxed pr-8">{faq.a}</div>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-sm text-slate-600 mb-4">Still have questions?</p>
            <Button asChild variant="outline">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Ready to Start Sourcing?</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">Tell us about your product requirements and we'll provide a no-obligation sourcing assessment within 24 hours.</p>
        <Button asChild size="lg">
          <Link to="/contact">Get a Free Sourcing Quote</Link>
        </Button>
      </section>
    </div>
  )
}

export default Home
