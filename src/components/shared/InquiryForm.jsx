import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx'

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
  const [errorMsg, setErrorMsg] = useState('')

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email'
    if (!v.product.trim()) return 'Please describe the product you want to source'
    if (!v.message.trim()) return 'Please include a message'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    const err = validate(values)
    if (err) {
      setErrorMsg(err)
      return
    }

    setStatus('submitting')

    try {
      const { error: responseError } = await client
        .from('SourcingInquiry')
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

      if (responseError) throw responseError

      setStatus('success')
      setValues({ name: '', email: '', company: '', phone: '', product: '', quantity: '', message: '' })
    } catch (err) {
      console.error('Inquiry submission error:', err)
      setErrorMsg(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section id="inquiry-form" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Get Started</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900">
              Request a Free Sourcing Quote
            </h2>
            <p className="mt-4 text-lg text-neutral-500 leading-relaxed">
              Tell us about the product you want to source from China. Our team will review your requirements and get back to you within 24 hours with a sourcing plan and quote.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-neutral-700">No obligation — free initial consultation</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-neutral-700">Response within 24 business hours</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-neutral-700">Detailed sourcing plan and cost estimate</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-neutral-700">Your information is kept confidential</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-2xl p-6 md:p-8 border border-neutral-200">
            {status === 'success' ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">Thank You!</h3>
                <p className="text-neutral-500">
                  We have received your inquiry. Our team will review your requirements and contact you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={onChange}
                      required
                      placeholder="John Smith"
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={onChange}
                      required
                      placeholder="john@company.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={values.company}
                      onChange={onChange}
                      placeholder="Your company name"
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={onChange}
                      placeholder="+1 234 567 8900"
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-neutral-700 mb-1">
                      Product to Source *
                    </label>
                    <input
                      id="product"
                      name="product"
                      type="text"
                      value={values.product}
                      onChange={onChange}
                      required
                      placeholder="e.g., Bluetooth speakers"
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-neutral-700 mb-1">
                      Estimated Quantity
                    </label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="text"
                      value={values.quantity}
                      onChange={onChange}
                      placeholder="e.g., 1,000 units"
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Details / Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={values.message}
                    onChange={onChange}
                    required
                    placeholder="Describe your product requirements, specifications, target price, timeline, etc."
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  />
                </div>

                {errorMsg && (
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-accent-500 text-white px-6 py-3.5 rounded-lg font-bold text-lg hover:bg-accent-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Get a Free Sourcing Quote
                      <Send className="w-5 h-5" />
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
