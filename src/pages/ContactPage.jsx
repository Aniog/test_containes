import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Mail, MapPin, Phone, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const serviceOptions = [
  { value: 'full_sourcing', label: 'Full Sourcing (find suppliers + manage order)' },
  { value: 'supplier_verification', label: 'Supplier / Factory Verification' },
  { value: 'quality_inspection', label: 'Quality Inspection (QC)' },
  { value: 'production_followup', label: 'Production Follow-up' },
  { value: 'shipping_only', label: 'Shipping & Logistics Only' },
  { value: 'other', label: 'Other / Not Sure' },
]

const initialValues = {
  name: '',
  email: '',
  company: '',
  phone: '',
  country: '',
  product_description: '',
  estimated_quantity: '',
  target_price: '',
  service_needed: '',
  timeline: '',
  message: '',
}

export default function ContactPage() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = () => {
    if (!values.name.trim()) return 'Please enter your name.'
    if (!values.email.trim()) return 'Please enter your email.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
    if (!values.product_description.trim()) return 'Please describe the product you want to source.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    setStatus('submitting')

    try {
      const payload = {
        data: {
          name: values.name,
          email: values.email,
          company: values.company || undefined,
          phone: values.phone || undefined,
          country: values.country || undefined,
          product_description: values.product_description,
          estimated_quantity: values.estimated_quantity || undefined,
          target_price: values.target_price || undefined,
          service_needed: values.service_needed || undefined,
          timeline: values.timeline || undefined,
          message: values.message || undefined,
          status: 'new',
        },
      }

      const { data: response, error: insertError } = await client
        .from('Sourcing Inquiries')
        .insert(payload)
        .select()
        .single()

      if (insertError || response?.success === false) {
        const msg = Array.isArray(response?.errors)
          ? response.errors.join(', ')
          : insertError?.message || 'Submission failed. Please try again.'
        throw new Error(msg)
      }

      setStatus('success')
      setValues(initialValues)
    } catch (err) {
      console.error('Inquiry submission error:', err)
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0f2a4a] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#e86a2e] font-semibold text-sm uppercase tracking-wider mb-3">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Get a Free Sourcing Quote
            </h1>
            <p className="mt-5 text-lg text-neutral-200 leading-relaxed">
              Tell us what you're looking for and our team will respond with a detailed sourcing proposal within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">Inquiry Submitted!</h2>
                  <p className="text-neutral-700 leading-relaxed">
                    Thank you for your inquiry. Our sourcing team will review your requirements and respond within 24 hours with a detailed proposal.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 bg-[#e86a2e] hover:bg-[#d05a20] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#0f2a4a] mb-2">Sourcing Inquiry Form</h2>
                  <p className="text-neutral-700 text-sm mb-6">Fields marked with * are required.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-1.5">Full Name *</label>
                      <input
                        id="name" name="name" type="text" value={values.name} onChange={onChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#e86a2e]/30 focus:border-[#e86a2e]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-1.5">Email Address *</label>
                      <input
                        id="email" name="email" type="email" value={values.email} onChange={onChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#e86a2e]/30 focus:border-[#e86a2e]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-neutral-900 mb-1.5">Company</label>
                      <input
                        id="company" name="company" type="text" value={values.company} onChange={onChange}
                        placeholder="Your company name"
                        className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#e86a2e]/30 focus:border-[#e86a2e]"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-900 mb-1.5">Phone</label>
                      <input
                        id="phone" name="phone" type="tel" value={values.phone} onChange={onChange}
                        placeholder="+1 555 123 4567"
                        className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#e86a2e]/30 focus:border-[#e86a2e]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-neutral-900 mb-1.5">Country</label>
                      <input
                        id="country" name="country" type="text" value={values.country} onChange={onChange}
                        placeholder="United States"
                        className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#e86a2e]/30 focus:border-[#e86a2e]"
                      />
                    </div>
                    <div>
                      <label htmlFor="service_needed" className="block text-sm font-medium text-neutral-900 mb-1.5">Service Needed</label>
                      <select
                        id="service_needed" name="service_needed" value={values.service_needed} onChange={onChange}
                        className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#e86a2e]/30 focus:border-[#e86a2e] bg-white"
                      >
                        <option value="">Select a service...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product_description" className="block text-sm font-medium text-neutral-900 mb-1.5">Product Description *</label>
                    <textarea
                      id="product_description" name="product_description" rows={4} value={values.product_description} onChange={onChange}
                      placeholder="Describe the product(s) you want to source — include specs, materials, size, features, reference links, etc."
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#e86a2e]/30 focus:border-[#e86a2e] resize-y"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="estimated_quantity" className="block text-sm font-medium text-neutral-900 mb-1.5">Estimated Quantity</label>
                      <input
                        id="estimated_quantity" name="estimated_quantity" type="text" value={values.estimated_quantity} onChange={onChange}
                        placeholder="e.g. 1,000-5,000 pcs"
                        className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#e86a2e]/30 focus:border-[#e86a2e]"
                      />
                    </div>
                    <div>
                      <label htmlFor="target_price" className="block text-sm font-medium text-neutral-900 mb-1.5">Target Price</label>
                      <input
                        id="target_price" name="target_price" type="text" value={values.target_price} onChange={onChange}
                        placeholder="e.g. $2-5 per unit"
                        className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#e86a2e]/30 focus:border-[#e86a2e]"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-neutral-900 mb-1.5">Timeline</label>
                      <input
                        id="timeline" name="timeline" type="text" value={values.timeline} onChange={onChange}
                        placeholder="e.g. Need by Q4 2026"
                        className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#e86a2e]/30 focus:border-[#e86a2e]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-1.5">Additional Details</label>
                    <textarea
                      id="message" name="message" rows={3} value={values.message} onChange={onChange}
                      placeholder="Any other information, questions, or specific requirements..."
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#e86a2e]/30 focus:border-[#e86a2e] resize-y"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full md:w-auto bg-[#e86a2e] hover:bg-[#d05a20] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-base"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Get a Free Sourcing Quote'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-6">
                <h3 className="text-lg font-semibold text-[#0f2a4a] mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#e86a2e] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Email</p>
                      <p className="text-sm text-neutral-700">info@ssourcingchina.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#e86a2e] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Phone / WhatsApp</p>
                      <p className="text-sm text-neutral-700">+86 755 8888 6666</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#e86a2e] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Office</p>
                      <p className="text-sm text-neutral-700">Shenzhen, Guangdong, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#e86a2e] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Response Time</p>
                      <p className="text-sm text-neutral-700">Within 24 hours (business days)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-6">
                <h3 className="text-lg font-semibold text-[#0f2a4a] mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[#e86a2e] text-white text-xs font-bold flex items-center justify-center">1</span>
                    <p className="text-sm text-neutral-700">We review your requirements and research the market.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[#e86a2e] text-white text-xs font-bold flex items-center justify-center">2</span>
                    <p className="text-sm text-neutral-700">You receive a sourcing proposal with pricing and timeline.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[#e86a2e] text-white text-xs font-bold flex items-center justify-center">3</span>
                    <p className="text-sm text-neutral-700">We start sourcing once you approve the plan.</p>
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
