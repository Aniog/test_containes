import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, Award, Clock, Globe } from 'lucide-react'
import { toast } from 'sonner'

const Home = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.product) {
      toast.error('Please fill in all required fields')
      return
    }
    toast.success('Thank you. We will contact you within 24 hours.')
    setFormData({ name: '', email: '', company: '', product: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const trustPoints = [
    { icon: Users, label: '180+ Active Clients', desc: 'From 35 countries' },
    { icon: Award, label: '2,400+ Suppliers Verified', desc: 'Across 18 provinces' },
    { icon: Clock, label: '9+ Years Experience', desc: 'Since 2015' },
    { icon: Globe, label: '98% On-Time Delivery', desc: 'Last 12 months' }
  ]

  const services = [
    { title: 'Supplier Identification', desc: 'Find qualified manufacturers matching your requirements' },
    { title: 'Factory Verification', desc: 'On-site audits and background checks' },
    { title: 'Quality Inspection', desc: 'Pre-shipment and in-process quality control' },
    { title: 'Production Monitoring', desc: 'Weekly progress reports and timeline management' },
    { title: 'Logistics Coordination', desc: 'Freight booking, customs documentation, delivery tracking' }
  ]

  const problems = [
    'Difficulty finding reliable suppliers who meet quality standards',
    'Uncertainty about factory capabilities and legitimacy',
    'Quality issues discovered only after goods arrive',
    'Production delays with no visibility or communication',
    'Complex shipping and customs processes'
  ]

  const products = [
    'Consumer Electronics & Components',
    'Home & Kitchen Appliances',
    'Industrial Machinery & Parts',
    'Textiles & Apparel',
    'Furniture & Home Decor',
    'Automotive Parts & Accessories',
    'Packaging Materials',
    'Medical & Safety Equipment'
  ]

  return (
    <div>
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm mb-6">
            Shanghai • Since 2015
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            China Sourcing Agent<br />for Global Buyers
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            We help overseas companies find reliable Chinese suppliers, verify factories, 
            control quality, and manage logistics from start to finish.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium border border-white/30 rounded-lg hover:bg-white/5 transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <point.icon className="w-8 h-8 text-slate-700 mb-4" />
                <div className="font-semibold text-lg text-slate-900">{point.label}</div>
                <div className="text-sm text-slate-500 mt-1">{point.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-sm font-medium text-slate-500 tracking-wider mb-3">WHAT WE DO</div>
          <h2 className="text-4xl font-semibold text-slate-900">Our Services</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-8 border border-gray-200 rounded-xl hover:border-slate-300 transition-colors">
              <div className="font-semibold text-xl text-slate-900 mb-3">{service.title}</div>
              <p className="text-slate-600">{service.desc}</p>
            </div>
          ))}
          <div className="p-8 border border-gray-200 rounded-xl bg-slate-50 flex items-center justify-center">
            <Link to="/services" className="flex items-center gap-2 text-slate-900 font-medium hover:gap-3 transition-all">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-medium text-slate-500 tracking-wider mb-3">THE CHALLENGE</div>
              <h2 className="text-4xl font-semibold text-slate-900 mb-6">Problems We Solve</h2>
              <p className="text-lg text-slate-600 mb-8">
                Sourcing from China involves multiple risks. We reduce those risks through structured processes and on-the-ground presence.
              </p>
              <Link to="/services" className="inline-flex items-center gap-2 text-slate-900 font-medium">
                Learn more about our approach <ArrowRight size={18} />
              </Link>
            </div>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex gap-4 p-5 bg-white rounded-lg border border-gray-200">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-sm font-medium text-slate-500 tracking-wider mb-3">CATEGORIES</div>
          <h2 className="text-4xl font-semibold text-slate-900 mb-4">Products We Source</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We work across diverse product categories with established supplier networks.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors">
              {product}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="inline-flex items-center gap-2 text-slate-900 font-medium">
            Browse all categories <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-sm font-medium text-slate-400 tracking-wider mb-3">RESULTS</div>
          <h2 className="text-4xl font-semibold mb-6">Case Studies</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            See how we've helped companies across industries improve their China sourcing operations.
          </p>
          <Link
            to="/case-studies"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
          >
            View Case Studies
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-sm font-medium text-slate-500 tracking-wider mb-3">NEXT STEPS</div>
          <h2 className="text-4xl font-semibold text-slate-900 mb-4">Get Started</h2>
          <p className="text-lg text-slate-600">Tell us about your sourcing needs. We'll respond within one business day.</p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Business Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Product or Category *</label>
            <input
              type="text"
              name="product"
              value={formData.product}
              onChange={handleChange}
              placeholder="e.g., LED lighting components, kitchen appliances"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Additional Details</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Quantity, timeline, target price range, or other requirements"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500 resize-y"
            />
          </div>
          <button
            type="submit"
            className="w-full md:w-auto px-10 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
          >
            Submit Inquiry
          </button>
          <p className="text-xs text-slate-500 text-center md:text-left">We respect your privacy. Your information will not be shared.</p>
        </form>
      </section>
    </div>
  )
}

export default Home