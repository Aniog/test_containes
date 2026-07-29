import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Mail, MapPin, Phone, Clock, Send, CheckCircle } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const initialValues = {
  name: '',
  email: '',
  company: '',
  phone: '',
  product_description: '',
  quantity: '',
  target_price: '',
  timeline: '',
  services_needed: [],
  message: '',
}

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Full Service (End-to-End)',
]

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const onCheckboxChange = (service) => {
    setValues((v) => ({
      ...v,
      services_needed: v.services_needed.includes(service)
        ? v.services_needed.filter((s) => s !== service)
        : [...v.services_needed, service],
    }))
  }

  const validate = () => {
    if (!values.name.trim()) return 'Name is required'
    if (!values.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email'
    if (!values.product_description.trim()) return 'Please describe the product you want to source'
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
      const { data: response, error: insertError } = await client
        .from('Sourcing Inquiries')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company,
            phone: values.phone,
            product_description: values.product_description,
            quantity: values.quantity,
            target_price: values.target_price,
            timeline: values.timeline,
            services_needed: values.services_needed,
            message: values.message,
            status: 'new',
          },
        })

      if (insertError || response?.success === false) {
        const msg = response?.errors?.join(', ') || insertError?.message || 'Submission failed'
        throw new Error(msg)
      }

      setStatus('success')
      setValues(initialValues)
    } catch (err) {
      console.error('Form submission error:', err)
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div>
      <PageHero
        title="Get a Free Sourcing Quote"
        subtitle="Tell us what you need and our team will respond within 24 hours with an initial assessment and recommended next steps."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-brand-dark mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-brand-dark">Email</div>
                    <div className="text-sm text-brand-gray">info@ssourcingchina.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-brand-dark">Phone / WhatsApp</div>
                    <div className="text-sm text-brand-gray">+86 138 0000 0000</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-brand-dark">Office</div>
                    <div className="text-sm text-brand-gray">Guangzhou, Guangdong, China</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-brand-dark">Response Time</div>
                    <div className="text-sm text-brand-gray">Within 24 hours (Mon-Sat)</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-brand-light rounded-xl border border-brand-border">
                <h4 className="text-sm font-semibold text-brand-dark mb-2">What happens next?</h4>
                <ol className="space-y-2 text-sm text-brand-gray">
                  <li className="flex gap-2"><span className="font-medium text-brand-orange">1.</span> We review your requirements</li>
                  <li className="flex gap-2"><span className="font-medium text-brand-orange">2.</span> We assess feasibility and scope</li>
                  <li className="flex gap-2"><span className="font-medium text-brand-orange">3.</span> We send you a detailed proposal</li>
                  <li className="flex gap-2"><span className="font-medium text-brand-orange">4.</span> You decide — no obligation</li>
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-brand-dark mb-2">Inquiry Submitted Successfully</h3>
                  <p className="text-brand-gray">
                    Thank you for your inquiry. Our team will review your requirements and respond within 24 hours with an initial assessment.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2.5 bg-brand-orange text-white font-medium rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1.5">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={onChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1.5">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={onChange}
                        required
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-brand-dark mb-1.5">Company Name</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={values.company}
                        onChange={onChange}
                        placeholder="Your company"
                        className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-1.5">Phone / WhatsApp</label>
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        value={values.phone}
                        onChange={onChange}
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product_description" className="block text-sm font-medium text-brand-dark mb-1.5">Product Description *</label>
                    <textarea
                      id="product_description"
                      name="product_description"
                      rows={4}
                      value={values.product_description}
                      onChange={onChange}
                      required
                      placeholder="Describe the product you want to source: type, material, size, features, certifications needed..."
                      className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-y"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-brand-dark mb-1.5">Estimated Quantity</label>
                      <input
                        id="quantity"
                        name="quantity"
                        type="text"
                        value={values.quantity}
                        onChange={onChange}
                        placeholder="e.g. 1,000 units"
                        className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="target_price" className="block text-sm font-medium text-brand-dark mb-1.5">Target Price (USD)</label>
                      <input
                        id="target_price"
                        name="target_price"
                        type="text"
                        value={values.target_price}
                        onChange={onChange}
                        placeholder="e.g. $5-8 per unit"
                        className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-brand-dark mb-1.5">Timeline</label>
                      <input
                        id="timeline"
                        name="timeline"
                        type="text"
                        value={values.timeline}
                        onChange={onChange}
                        placeholder="e.g. Need by Oct 2026"
                        className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-2">Services Needed</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                      {serviceOptions.map((service) => (
                        <label key={service} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={values.services_needed.includes(service)}
                            onChange={() => onCheckboxChange(service)}
                            className="w-4 h-4 rounded border-brand-border text-brand-orange focus:ring-brand-orange"
                          />
                          <span className="text-sm text-brand-dark">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1.5">Additional Notes</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={values.message}
                      onChange={onChange}
                      placeholder="Any other details, questions, or requirements..."
                      className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-y"
                    />
                  </div>

                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    {status === 'submitting' ? 'Submitting...' : 'Get a Free Sourcing Quote'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
