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
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Inquiry submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl p-8 md:p-12">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-success" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary">Thank You!</h3>
            <p className="mt-3 text-text-body">
              We've received your sourcing inquiry. Our team will review your requirements and get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Get a Free Sourcing Quote
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            Tell us what you're looking for and we'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 md:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">Full Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-border rounded-lg text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">Email Address *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-border rounded-lg text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="john@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">Company Name</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-border rounded-lg text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="Your Company Ltd."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">Product You Need *</label>
              <input
                type="text"
                name="product"
                required
                value={formData.product}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-border rounded-lg text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="e.g. Bluetooth headphones"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">Estimated Quantity</label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-border rounded-lg text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="e.g. 1,000 units"
              />
            </div>
          </div>
          <div className="mt-5">
            <label className="block text-sm font-medium text-text-primary mb-1.5">Additional Details</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-border rounded-lg text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
              placeholder="Tell us more about your requirements, target price, timeline, etc."
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors border-none cursor-pointer text-base"
            >
              <Send className="w-4 h-4" />
              Submit Inquiry
            </button>
          </div>
          <p className="mt-4 text-text-muted text-xs">
            Your information is kept confidential. We typically respond within 24 hours on business days.
          </p>
        </form>
      </div>
    </section>
  )
}

export default InquiryForm
