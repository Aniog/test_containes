import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, Award, Clock } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast.success('Thank you. Your inquiry has been received. We will respond within 24 hours.')
      setFormData({ name: '', email: '', company: '', product: '', message: '' })
      setSubmitting(false)
    }, 800)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              We help overseas companies find reliable suppliers, verify factories, manage quality control, and coordinate production and shipping from China.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-medium hover:bg-slate-100 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-sm text-slate-600">
            <div className="flex items-center gap-2"><Award className="w-4 h-4" /> 9+ Years Experience</div>
            <div className="flex items-center gap-2"><Users className="w-4 h-4" /> 340+ Clients Served</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> 1,200+ Supplier Audits</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> 48hr Response Time</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">End-to-end support for sourcing from China, from supplier identification to final delivery.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Supplier Sourcing', desc: 'Identify and shortlist qualified manufacturers matching your product specifications and volume requirements.' },
              { title: 'Factory Verification', desc: 'On-site audits to confirm legitimacy, production capacity, quality systems, and export compliance.' },
              { title: 'Quality Inspection', desc: 'Pre-shipment and in-process inspections to ensure products meet your quality standards.' },
              { title: 'Production Monitoring', desc: 'Regular progress updates and milestone checks throughout the manufacturing cycle.' },
              { title: 'Logistics Coordination', desc: 'Manage freight booking, customs documentation, and delivery scheduling to your destination.' },
              { title: 'Order Management', desc: 'End-to-end coordination including PO management, payment tracking, and issue resolution.' }
            ].map((service, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors">
                <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">A structured 6-step process designed for transparency and accountability.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Requirement Briefing', desc: 'Share your product specs, target price, volume, and timeline.' },
              { step: '02', title: 'Supplier Identification', desc: 'We research and shortlist 3-5 qualified factories.' },
              { step: '03', title: 'Factory Verification', desc: 'On-site audits and sample evaluation before proceeding.' },
              { step: '04', title: 'Order & Production', desc: 'We manage PO, deposits, and monitor production milestones.' },
              { step: '05', title: 'Quality Control', desc: 'Pre-shipment inspection and corrective actions if needed.' },
              { step: '06', title: 'Shipping & Delivery', desc: 'Freight booking, documentation, and final delivery coordination.' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="text-2xl font-semibold text-slate-300 w-12 flex-shrink-0">{item.step}</div>
                <div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline">
              Learn more about our process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Products We Source</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We work across multiple categories with established supplier networks.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Consumer Electronics', 'Home & Kitchen', 'Apparel & Textiles', 'Industrial Components', 'Furniture & Fixtures', 'Packaging Materials', 'Automotive Parts', 'Promotional Products'].map((cat, idx) => (
              <div key={idx} className="border border-slate-200 rounded-lg px-5 py-4 text-sm hover:border-slate-300 transition-colors">
                {cat}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline">
              Browse all categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-semibold mb-4">Common Sourcing Challenges We Address</h2>
            <p className="text-slate-600">Overseas buyers often face communication gaps, quality issues, and coordination difficulties when sourcing directly from China.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Difficulty identifying trustworthy suppliers among thousands of options',
              'Language and cultural barriers leading to miscommunication',
              'Quality issues discovered only after goods arrive',
              'Unclear production timelines and missed deadlines',
              'Complex logistics, documentation, and customs processes',
              'Payment risks and lack of accountability'
            ].map((problem, idx) => (
              <div key={idx} className="flex gap-3 text-sm">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-16 md:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Why Buyers Work With Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: 'Local Presence', desc: 'Our team is based in Shanghai with direct access to factories across China.' },
              { title: 'Transparent Reporting', desc: 'Detailed audit reports, inspection photos, and weekly production updates.' },
              { title: 'No Hidden Fees', desc: 'Clear service fees agreed upfront. No commissions from suppliers.' }
            ].map((item, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Case Studies</h2>
              <p className="text-slate-600">Real results from recent sourcing projects.</p>
            </div>
            <Link to="/case-studies" className="hidden md:inline-flex items-center gap-2 text-blue-600 font-medium hover:underline">
              View all cases <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { client: 'European Retail Chain', result: 'Reduced defect rate from 8% to under 1% through improved QC protocols.', category: 'Home Textiles' },
              { client: 'US E-commerce Brand', result: 'Identified and onboarded 3 new suppliers, cutting unit costs by 22%.', category: 'Consumer Electronics' },
              { client: 'Australian Distributor', result: 'Successfully managed first-time import with zero customs delays.', category: 'Furniture' }
            ].map((study, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="text-xs uppercase tracking-widest text-slate-500 mb-3">{study.category}</div>
                <h3 className="font-semibold mb-3">{study.client}</h3>
                <p className="text-sm text-slate-600">{study.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'How do you charge for your services?', a: 'We charge a transparent service fee based on project scope. Fees are agreed before work begins. We do not accept commissions from suppliers.' },
              { q: 'Do you work with small order quantities?', a: 'Yes. We work with both small businesses and large importers. Minimum order quantities depend on the product category and supplier.' },
              { q: 'How long does the sourcing process take?', a: 'Initial supplier shortlisting typically takes 1-2 weeks. Full verification and first order coordination can take 4-8 weeks depending on complexity.' },
              { q: 'Can you help with existing suppliers?', a: 'Yes. We can audit your current suppliers, implement quality controls, or help renegotiate terms.' }
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-slate-200 pb-6">
                <h3 className="font-medium mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/contact" className="text-blue-600 font-medium hover:underline">Still have questions? Contact us →</Link>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold mb-4">Start Your Sourcing Project</h2>
            <p className="text-slate-400">Tell us about your requirements and we will respond within 24 hours with a preliminary assessment.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm placeholder:text-slate-500 focus:outline-none focus:border-slate-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Business Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm placeholder:text-slate-500 focus:outline-none focus:border-slate-500"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                required
                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm placeholder:text-slate-500 focus:outline-none focus:border-slate-500"
              />
              <input
                type="text"
                name="product"
                placeholder="Product Category"
                value={formData.product}
                onChange={handleChange}
                required
                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm placeholder:text-slate-500 focus:outline-none focus:border-slate-500"
              />
            </div>
            <textarea
              name="message"
              placeholder="Describe your sourcing requirements, target price range, expected volume, and timeline..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm placeholder:text-slate-500 focus:outline-none focus:border-slate-500 resize-y"
            />
            <button
              type="submit"
              disabled={submitting}
              className="w-full md:w-auto bg-white text-slate-900 px-8 py-3.5 rounded-lg font-medium hover:bg-slate-100 transition-colors disabled:opacity-60"
            >
              {submitting ? 'Submitting...' : 'Get a Free Sourcing Quote'}
            </button>
            <p className="text-xs text-slate-500">We respect your privacy. Your information will not be shared with third parties.</p>
          </form>
        </div>
      </section>
    </div>
  )
}