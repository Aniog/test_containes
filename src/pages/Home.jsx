import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Users, Award, Clock, ArrowRight } from 'lucide-react'
import { toast } from 'sonner'

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    setTimeout(() => {
      toast.success('Thank you. Your inquiry has been received. We will respond within 24 hours.')
      setFormData({ name: '', company: '', email: '', phone: '', product: '', message: '' })
      setSubmitting(false)
    }, 800)
  }

  const services = [
    { title: 'Supplier Identification', desc: 'Identify and shortlist qualified manufacturers matching your specifications.' },
    { title: 'Factory Verification', desc: 'On-site audits to confirm legitimacy, capacity, and compliance.' },
    { title: 'Quality Inspection', desc: 'Pre-shipment and in-process inspections to ensure product standards.' },
    { title: 'Production Monitoring', desc: 'Regular progress updates and milestone verification during manufacturing.' },
    { title: 'Logistics Coordination', desc: 'Freight booking, customs documentation, and delivery scheduling.' },
  ]

  const process = [
    { step: '01', title: 'Requirement Briefing', desc: 'Share product specifications, target price, and timeline.' },
    { step: '02', title: 'Supplier Sourcing', desc: 'We identify 3-5 qualified suppliers and provide comparison reports.' },
    { step: '03', title: 'Verification & Sampling', desc: 'Factory audits and sample evaluation before order placement.' },
    { step: '04', title: 'Production Oversight', desc: 'Quality checks and progress monitoring throughout manufacturing.' },
    { step: '05', title: 'Shipping & Delivery', desc: 'Logistics coordination and final documentation handover.' },
  ]

  const products = [
    'Consumer Electronics & Accessories',
    'Home & Kitchen Products',
    'Textiles & Apparel',
    'Industrial Components & Tools',
    'Furniture & Home Furnishings',
    'Packaging Materials',
    'Automotive Parts',
    'Medical & Safety Equipment',
  ]

  const problems = [
    'Difficulty finding reliable suppliers who meet quality standards',
    'Uncertainty about factory legitimacy and production capacity',
    'Quality issues discovered only after goods arrive',
    'Communication barriers and time zone challenges',
    'Complex logistics and customs documentation',
    'Lack of visibility into production progress',
  ]

  const trustPoints = [
    { icon: Users, label: '180+', sublabel: 'Active Clients' },
    { icon: Award, label: '850+', sublabel: 'Factories Audited' },
    { icon: Clock, label: '9 Years', sublabel: 'Industry Experience' },
    { icon: CheckCircle, label: '98%', sublabel: 'On-Time Delivery' },
  ]

  const caseStudies = [
    {
      client: 'European Home Goods Retailer',
      result: 'Reduced defect rate from 12% to 2.8%',
      detail: 'Implemented multi-stage QC protocol for ceramic tableware sourcing across 4 factories.',
    },
    {
      client: 'US Industrial Equipment Distributor',
      result: 'Cut lead time by 23 days',
      detail: 'Streamlined supplier coordination and consolidated shipping for hydraulic components.',
    },
    {
      client: 'Australian Consumer Electronics Brand',
      result: 'Secured 3 verified OEM suppliers',
      detail: 'Full factory verification and sample testing for wireless audio product line.',
    },
  ]

  const faqs = [
    { q: 'What is the minimum order quantity you typically handle?', a: 'Most projects start at 500-1000 units depending on product category. We assess feasibility case by case.' },
    { q: 'How long does the initial supplier sourcing take?', a: 'Initial supplier shortlist and comparison report is typically delivered within 7-10 business days.' },
    { q: 'Do you charge for factory audits?', a: 'Factory verification is included in our service packages. Travel expenses within the sourcing region are covered.' },
    { q: 'What payment terms do you recommend for suppliers?', a: 'We typically recommend 30% deposit, 70% before shipment, verified through letter of credit or escrow where appropriate.' },
    { q: 'Can you handle existing supplier relationships?', a: 'Yes. We can integrate with your current suppliers for QC, monitoring, and logistics coordination.' },
  ]

  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Professional supplier identification, factory verification, quality control, and logistics coordination for international businesses.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
          <p className="mt-4 text-sm text-slate-400">Response within 24 hours. No obligation.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-slate-900 mb-4">Our Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">End-to-end support for sourcing from China, from supplier discovery to final delivery.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl p-8 hover:border-slate-300 transition-colors">
              <h3 className="font-semibold text-xl text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700">
            View all services <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-slate-900 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600">A structured 5-step process from inquiry to delivery.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="text-teal-600 font-mono text-sm mb-3">{item.step}</div>
                <h3 className="font-semibold text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700">
              Learn more about our process <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-semibold text-slate-900 mb-6">Products We Source</h2>
            <p className="text-lg text-slate-600 mb-8">We work across diverse product categories with established supplier networks in each sector.</p>
            <Link to="/products" className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700">
              Browse product categories <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {products.map((product, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg">
                <CheckCircle className="text-teal-600 flex-shrink-0" size={20} />
                <span className="text-slate-700">{product}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold mb-4">Problems We Solve</h2>
            <p className="text-lg text-slate-300">Common sourcing challenges we address for our clients.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((problem, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-slate-800 rounded-xl p-6">
                <CheckCircle className="text-teal-500 mt-1 flex-shrink-0" size={22} />
                <span className="text-slate-200">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-slate-900 mb-4">Why Buyers Trust Us</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustPoints.map((point, idx) => (
            <div key={idx} className="text-center">
              <point.icon className="mx-auto text-teal-600 mb-4" size={40} />
              <div className="text-4xl font-semibold text-slate-900 mb-1">{point.label}</div>
              <div className="text-slate-600">{point.sublabel}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-4xl font-semibold text-slate-900 mb-2">Case Studies</h2>
              <p className="text-lg text-slate-600">Recent projects and measurable outcomes.</p>
            </div>
            <Link to="/case-studies" className="hidden md:inline-flex items-center text-teal-600 font-medium hover:text-teal-700">
              View all cases <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-8">
                <div className="text-sm text-teal-600 font-medium mb-4">{study.client}</div>
                <div className="text-xl font-semibold text-slate-900 mb-4">{study.result}</div>
                <p className="text-slate-600">{study.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-slate-900 mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="border border-slate-200 rounded-xl p-6 group">
              <summary className="font-semibold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                {faq.q}
                <span className="text-slate-400 group-open:rotate-180 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-slate-600 pr-8">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-semibold mb-4">Request a Sourcing Quote</h2>
            <p className="text-lg text-slate-300">Tell us about your sourcing needs. We respond within one business day.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5 bg-slate-800 rounded-2xl p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-600" placeholder="John Smith" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Company</label>
                <input type="text" name="company" value={formData.company} onChange={handleInputChange} required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-600" placeholder="Your Company Ltd" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Business Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-600" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Phone / WhatsApp</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-600" placeholder="+1 555 123 4567" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Product Category or Description</label>
              <input type="text" name="product" value={formData.product} onChange={handleInputChange} required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-600" placeholder="E.g., Stainless steel kitchenware, 500 units" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Additional Details</label>
              <textarea name="message" value={formData.message} onChange={handleInputChange} rows={5} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-600 resize-y" placeholder="Target price, timeline, certifications required, or any other specifications..." />
            </div>
            <button type="submit" disabled={submitting} className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-800 text-white py-4 rounded-lg font-medium text-lg transition-colors">
              {submitting ? 'Submitting...' : 'Submit Inquiry'}
            </button>
            <p className="text-center text-xs text-slate-400">Your information is confidential. We do not share client details with third parties.</p>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home