import { useState } from 'react'
import { Send } from 'lucide-react'

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('success')
    console.log('Inquiry submitted:', formData)
  }

  if (status === 'success') {
    return (
      <section className="py-16 md:py-24 bg-brand-navy">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl p-10">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-brand-green" />
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-2">Thank You!</h3>
            <p className="text-brand-muted">We have received your inquiry and will respond within 24 hours with a sourcing plan.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block text-sm font-semibold text-brand-orange uppercase tracking-wide mb-3">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get a Free Sourcing Quote
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Tell us what you are looking for and we will provide a sourcing plan within 24 hours — no obligation, no upfront cost.
            </p>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                Free initial consultation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                Supplier shortlist within 5-10 days
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                No commitment required
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1.5">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1.5">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1.5">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1.5">Estimated Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                  placeholder="e.g. 1,000 units"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-brand-dark mb-1.5">Product Description *</label>
              <input
                type="text"
                name="product"
                required
                value={formData.product}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                placeholder="What product are you looking to source?"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-brand-dark mb-1.5">Additional Details</label>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue resize-none"
                placeholder="Target price, certifications needed, timeline, etc."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brand-orange text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Submit Sourcing Inquiry
            </button>
            <p className="text-xs text-brand-muted text-center mt-3">
              We respond within 24 hours. Your information is kept confidential.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default InquiryForm
