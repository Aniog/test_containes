import { useState } from 'react'
import { Send, Phone, Mail } from 'lucide-react'

export default function InquiryForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Inquiry submitted:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container max-w-3xl text-center">
          <div className="bg-brand-50 border border-brand-200 rounded-xl p-10">
            <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">Thank You for Your Inquiry</h2>
            <p className="text-neutral-500 mb-6">
              We have received your sourcing request. Our team will review your requirements and get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-neutral-500">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-500" /> +86 138 1234 5678
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-500" /> info@ssourcingchina.com
              </span>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="section-container max-w-3xl">
        <h2 className="section-title">Get a Free Sourcing Quote</h2>
        <p className="section-subtitle">
          Tell us about your product and we&apos;ll get back to you with a tailored sourcing plan.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 bg-neutral-50 border border-neutral-200 rounded-xl p-6 md:p-8">
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1.5">
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white"
                placeholder="ABC Corp"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
                Phone / WhatsApp
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white"
                placeholder="+1 555 1234"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="product" className="block text-sm font-medium text-neutral-700 mb-1.5">
                Product Description *
              </label>
              <input
                id="product"
                name="product"
                type="text"
                required
                value={form.product}
                onChange={handleChange}
                className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white"
                placeholder="e.g., Stainless steel bolts M10"
              />
            </div>
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-neutral-700 mb-1.5">
                Estimated Order Quantity
              </label>
              <input
                id="quantity"
                name="quantity"
                type="text"
                value={form.quantity}
                onChange={handleChange}
                className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white"
                placeholder="e.g., 10,000 pcs/month"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
              Additional Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white resize-none"
              placeholder="Tell us about your requirements, specifications, target price, timeline, or any other details..."
            />
          </div>

          <button type="submit" className="btn-primary w-full sm:w-auto text-base px-8 py-3">
            Submit Inquiry
          </button>

          <p className="text-xs text-neutral-400 mt-4">
            By submitting this form, you agree to our privacy policy. We&apos;ll never share your information.
          </p>
        </form>
      </div>
    </section>
  )
}