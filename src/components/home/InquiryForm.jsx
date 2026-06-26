import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Send, Loader2 } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export default function InquiryForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email'
    if (!v.product.trim()) return 'Please describe the product you want to source'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) { setError(err); return }

    setStatus('submitting')

    try {
      const { error: insertError } = await client
        .from('SourcingInquiries')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company,
            phone: values.phone,
            product: values.product,
            quantity: values.quantity,
            message: values.message,
          },
        })

      if (insertError) throw insertError

      setStatus('success')
      setValues({ name: '', email: '', company: '', phone: '', product: '', quantity: '', message: '' })
    } catch (err) {
      console.error(err)
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
              Get a Free Sourcing Quote
            </h2>
            <div className="w-16 h-1 bg-accent mb-6" />
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Tell us about the product you want to source from China. We will respond within 24 hours with a tailored sourcing plan and quote.
            </p>
            <div className="space-y-4">
              {[
                'No commitment required',
                'Response within 24 hours',
                'Free initial consultation',
                'Tailored to your product needs',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full shrink-0" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="inq-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Full Name *
                </label>
                <input
                  id="inq-name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={onChange}
                  required
                  placeholder="John Smith"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="inq-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email *
                </label>
                <input
                  id="inq-email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={onChange}
                  required
                  placeholder="john@company.com"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="inq-company" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Company
                </label>
                <input
                  id="inq-company"
                  name="company"
                  type="text"
                  value={values.company}
                  onChange={onChange}
                  placeholder="Your Company"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="inq-phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Phone
                </label>
                <input
                  id="inq-phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={onChange}
                  placeholder="+1 234 567 890"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="inq-product" className="block text-sm font-medium text-slate-700 mb-1.5">
                Product You Want to Source *
              </label>
              <input
                id="inq-product"
                name="product"
                type="text"
                value={values.product}
                onChange={onChange}
                required
                placeholder="e.g., Stainless steel water bottles, 500ml"
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="inq-quantity" className="block text-sm font-medium text-slate-700 mb-1.5">
                Estimated Quantity
              </label>
              <input
                id="inq-quantity"
                name="quantity"
                type="text"
                value={values.quantity}
                onChange={onChange}
                placeholder="e.g., 5,000 units"
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="inq-message" className="block text-sm font-medium text-slate-700 mb-1.5">
                Additional Details
              </label>
              <textarea
                id="inq-message"
                name="message"
                rows={4}
                value={values.message}
                onChange={onChange}
                placeholder="Tell us more about your requirements, target price, timeline, etc."
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition resize-none"
              />
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            {status === 'success' ? (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-semibold text-sm">Thank you! We have received your inquiry and will respond within 24 hours.</p>
              </div>
            ) : (
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3 rounded-lg transition-colors disabled:opacity-60"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Inquiry
                  </>
                )}
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
