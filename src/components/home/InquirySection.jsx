import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function InquirySection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setStatus('success')
    setForm({ name: '', email: '', company: '', product: '', quantity: '', message: '' })
  }

  if (status === 'success') {
    return (
      <section className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Thank You!</h2>
          <p className="text-lg text-slate-600 mb-4">
            Your inquiry has been received. Our team will get back to you within 24 hours with a free sourcing assessment.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="text-brand-700 hover:text-brand-800 font-medium"
          >
            Submit another inquiry
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get a Free Sourcing Quote
          </h2>
          <p className="text-lg text-slate-600">
            Tell us about your project and we will get back to you within 24 hours with a personalized plan.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                placeholder="Your company"
              />
            </div>
            <div>
              <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1.5">
                Product to Source *
              </label>
              <input
                id="product"
                name="product"
                type="text"
                required
                value={form.product}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                placeholder="e.g. Stainless steel cookware"
              />
            </div>
          </div>

          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1.5">
              Estimated Quantity
            </label>
            <input
              id="quantity"
              name="quantity"
              type="text"
              value={form.quantity}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
              placeholder="e.g. 500-1000 units per month"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
              Tell Us About Your Project *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 resize-vertical"
              placeholder="Describe the product you want to source, preferred specifications, target price, etc."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-accent-600 hover:bg-accent-700 disabled:bg-slate-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {status === 'submitting' ? (
              <>
                <svg className="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit Inquiry
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}