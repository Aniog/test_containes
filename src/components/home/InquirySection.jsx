import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Send, CheckCircle } from 'lucide-react'

export default function InquirySection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Get a Free Sourcing Quote
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Tell us what you need and we will respond within 24 hours with a tailored sourcing plan and estimated timeline.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">No Obligation</h4>
                  <p className="text-sm text-slate-600">Our initial consultation and quote are completely free.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">24-Hour Response</h4>
                  <p className="text-sm text-slate-600">We reply to every inquiry within one business day.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Tailored Plan</h4>
                  <p className="text-sm text-slate-600">Every quote is customized to your product, volume, and timeline.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-sm text-slate-600">
                Prefer to email directly? Send your requirements to{' '}
                <a href="mailto:inquiry@ssourcingchina.com" className="text-brand font-medium hover:underline">
                  inquiry@ssourcingchina.com
                </a>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Quote Request Sent</h3>
                <p className="text-slate-600">
                  Thank you. Our team will review your requirements and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-brand font-medium hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="inq-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="inq-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand focus:border-brand outline-none transition"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="inq-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Business Email *
                    </label>
                    <input
                      id="inq-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand focus:border-brand outline-none transition"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="inq-company" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Company Name
                    </label>
                    <input
                      id="inq-company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand focus:border-brand outline-none transition"
                      placeholder="Your Company Ltd"
                    />
                  </div>
                  <div>
                    <label htmlFor="inq-quantity" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Estimated Quantity
                    </label>
                    <input
                      id="inq-quantity"
                      name="quantity"
                      type="text"
                      value={form.quantity}
                      onChange={handleChange}
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand focus:border-brand outline-none transition"
                      placeholder="e.g. 5,000 units"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inq-product" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Product Description *
                  </label>
                  <input
                    id="inq-product"
                    name="product"
                    type="text"
                    required
                    value={form.product}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand focus:border-brand outline-none transition"
                    placeholder="e.g. Bluetooth wireless earbuds with ANC"
                  />
                </div>

                <div>
                  <label htmlFor="inq-message" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Additional Details
                  </label>
                  <textarea
                    id="inq-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand focus:border-brand outline-none transition resize-none"
                    placeholder="Target price, certifications needed, delivery timeline, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold text-base px-8 py-3.5 rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Request Free Quote
                </button>

                <p className="text-xs text-slate-400 text-center">
                  By submitting, you agree to our privacy policy. We will never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
