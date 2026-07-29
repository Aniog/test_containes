import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

const initialForm = {
  name: '',
  email: '',
  company: '',
  product: '',
  quantity: '',
  budget: '',
  message: '',
}

export default function InquiryFormSection() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate submission
    setTimeout(() => {
      setStatus('success')
      setForm(initialForm)
    }, 1500)
  }

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4" id="inquiry-section-title">
              Get a Free Sourcing Quote
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Tell us about your sourcing needs and we will get back to you within 24 hours with a detailed proposal.
            </p>
            <div className="space-y-6">
              {[
                { title: 'What happens after I submit?', desc: 'Our team reviews your requirements and prepares a customized sourcing proposal within 24 hours.' },
                { title: 'Is this free?', desc: 'Yes, initial consultations and quotes are completely free with no obligation.' },
                { title: 'What information should I provide?', desc: 'The more details you share about your product, budget, and timeline, the more accurate your quote will be.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                    <p className="text-sm text-neutral-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6 md:p-8">
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Thank You!</h3>
                <p className="text-neutral-600">
                  Your inquiry has been submitted. We will review your requirements and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1.5">Company Name</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    placeholder="Your Company Ltd."
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-neutral-700 mb-1.5">Product to Source *</label>
                    <input
                      id="product"
                      name="product"
                      type="text"
                      required
                      value={form.product}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      placeholder="E.g. ceramic mugs"
                    />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-neutral-700 mb-1.5">Estimated Quantity</label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="text"
                      value={form.quantity}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      placeholder="E.g. 1,000 pcs"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-1.5">Target Budget (USD)</label>
                  <input
                    id="budget"
                    name="budget"
                    type="text"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    placeholder="E.g. $5,000 - $10,000"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
                    placeholder="Describe your requirements, specifications, timeline, or any other details..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 bg-brand-500 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-brand-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    'Submitting...'
                  ) : (
                    <>
                      Submit Inquiry <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}