import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function InquirySection() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', product: '', quantity: '', message: ''
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
      <section className="py-16 md:py-24 bg-navy-900">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
          <p className="text-slate-300 text-lg">
            We've received your sourcing inquiry. Our team will review your requirements and get back to you within 24 hours.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-accent-500/20 text-accent-400 mb-4">
              Free Consultation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Get a Free Sourcing Quote
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Tell us what you're looking for and we'll provide a detailed sourcing plan, supplier options, and pricing estimate — at no cost.
            </p>
            <div className="space-y-4">
              {[
                'Response within 24 hours',
                'No obligation, no hidden fees',
                'Detailed supplier recommendations',
                'Transparent cost breakdown',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-300 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Company</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Estimated Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  value={form.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
                  placeholder="e.g. 1,000 units"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Description *</label>
              <input
                type="text"
                name="product"
                required
                value={form.product}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
                placeholder="What product are you looking to source?"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Additional Details</label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none resize-none"
                placeholder="Specs, certifications, target price, timeline..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors border-none cursor-pointer text-base"
            >
              <Send className="w-4 h-4" />
              Get a Free Sourcing Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
