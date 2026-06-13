import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const initialValues = {
  name: '',
  email: '',
  company: '',
  phone: '',
  product: '',
  quantity: '',
  message: '',
}

export default function Contact() {
  const [values, setValues] = useState(initialValues)
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
    if (!v.product.trim()) return 'Please describe the product you need'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) {
      setError(err)
      return
    }

    setStatus('submitting')

    try {
      const { data: response, error: insertError } = await client
        .from('Sourcing Inquiries')
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
        .select()
        .single()

      if (insertError || response?.success === false) {
        const msg = Array.isArray(response?.errors)
          ? response.errors.join(', ')
          : insertError?.message || 'Submission failed'
        throw new Error(msg)
      }

      setStatus('success')
      setValues(initialValues)
    } catch (err) {
      console.error('Contact form error:', err)
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div>
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-navy tracking-tight">
              Get a Free Sourcing Quote
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Tell us what you need to source from China. We&apos;ll analyze your requirements and respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-xl border border-gray-100 p-10 text-center">
                  <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                  <h2 className="text-xl font-semibold text-brand-navy mb-2">Thank You for Your Inquiry</h2>
                  <p className="text-gray-600 max-w-md mx-auto">
                    We&apos;ve received your sourcing request. Our team will review your requirements and get back to you within 24 hours with a tailored proposal.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="ct-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="ct-name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={onChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="ct-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="ct-email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={onChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange outline-none transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="ct-company" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        id="ct-company"
                        name="company"
                        type="text"
                        value={values.company}
                        onChange={onChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange outline-none transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="ct-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="ct-phone"
                        name="phone"
                        type="text"
                        value={values.phone}
                        onChange={onChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange outline-none transition-colors"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="ct-product" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Product You Need *
                      </label>
                      <input
                        id="ct-product"
                        name="product"
                        type="text"
                        value={values.product}
                        onChange={onChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange outline-none transition-colors"
                        placeholder="e.g., LED light fixtures"
                      />
                    </div>
                    <div>
                      <label htmlFor="ct-quantity" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Estimated Order Quantity
                      </label>
                      <input
                        id="ct-quantity"
                        name="quantity"
                        type="text"
                        value={values.quantity}
                        onChange={onChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange outline-none transition-colors"
                        placeholder="e.g., 1,000 units/month"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="ct-message" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Additional Details
                    </label>
                    <textarea
                      id="ct-message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={onChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange outline-none transition-colors resize-y"
                      placeholder="Target price, specifications, certifications needed, timeline, special requirements..."
                    />
                  </div>

                  {error && (
                    <div className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-3">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-medium rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-brand-navy mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Office Location</p>
                      <p className="text-sm text-gray-500">Nanshan District, Shenzhen, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Email</p>
                      <p className="text-sm text-gray-500">info@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Phone / WhatsApp</p>
                      <p className="text-sm text-gray-500">+86 755 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Business Hours</p>
                      <p className="text-sm text-gray-500">Monday - Friday, 9:00 - 18:00 (CST)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-semibold text-brand-navy mb-2">What Happens Next?</h3>
                <ol className="space-y-2.5 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="font-bold text-brand-orange shrink-0">1.</span>
                    We review your requirements within 24 hours.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-brand-orange shrink-0">2.</span>
                    We schedule a call to discuss details and answer your questions.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-brand-orange shrink-0">3.</span>
                    You receive a tailored sourcing proposal with timeline and fee structure.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-brand-orange shrink-0">4.</span>
                    Once you approve, we start the sourcing process immediately.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}