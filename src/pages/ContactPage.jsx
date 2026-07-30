import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const serviceOptions = [
  { value: 'supplier_sourcing', label: 'Supplier Sourcing' },
  { value: 'factory_audit', label: 'Factory Audit' },
  { value: 'quality_inspection', label: 'Quality Inspection' },
  { value: 'production_followup', label: 'Production Follow-up' },
  { value: 'shipping', label: 'Shipping & Logistics' },
  { value: 'negotiation', label: 'Negotiation Support' },
]

export default function ContactPage() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    product_description: '',
    quantity: '',
    budget: '',
    timeline: '',
    services_needed: [],
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const onServiceToggle = (serviceValue) => {
    setValues((v) => ({
      ...v,
      services_needed: v.services_needed.includes(serviceValue)
        ? v.services_needed.filter((s) => s !== serviceValue)
        : [...v.services_needed, serviceValue],
    }))
  }

  const validate = () => {
    if (!values.name.trim()) return 'Name is required'
    if (!values.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email'
    if (!values.product_description.trim()) return 'Product description is required'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate()
    if (err) { setError(err); return }

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
            country: values.country,
            product_description: values.product_description,
            quantity: values.quantity,
            budget: values.budget,
            timeline: values.timeline,
            services_needed: values.services_needed,
            message: values.message,
          },
        })
        .select()
        .single()

      if (insertError || response?.success === false) {
        const msg = Array.isArray(response?.errors) ? response.errors.join(', ') : insertError?.message || 'Submission failed'
        throw new Error(msg)
      }

      setStatus('success')
      setValues({
        name: '', email: '', company: '', phone: '', country: '',
        product_description: '', quantity: '', budget: '', timeline: '',
        services_needed: [], message: '',
      })
    } catch (err) {
      console.error('Form submission error:', err)
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="py-24 md:py-32">
        <div className="max-w-xl mx-auto px-4 text-center">
          <CheckCircle className="w-16 h-16 text-brand-green mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-brand-dark mb-4">Thank You!</h1>
          <p className="text-brand-gray text-lg leading-relaxed">
            We have received your sourcing inquiry. Our team will review your requirements and get back to you within 24 hours with a sourcing plan.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-8 bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer border-none"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Get a Free Sourcing Quote
            </h1>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              Tell us what you need and our sourcing team will provide a customized proposal within 24 hours. No commitment required.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-brand-white rounded-xl border border-brand-border p-6 md:p-8">
                <h2 className="text-xl font-bold text-brand-dark mb-6">Sourcing Inquiry Form</h2>

                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name" name="name" type="text" value={values.name} onChange={onChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email" name="email" type="email" value={values.email} onChange={onChange}
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-brand-dark mb-1.5">Company</label>
                      <input
                        id="company" name="company" type="text" value={values.company} onChange={onChange}
                        placeholder="Company name"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-1.5">Phone</label>
                      <input
                        id="phone" name="phone" type="tel" value={values.phone} onChange={onChange}
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-brand-dark mb-1.5">Country</label>
                      <input
                        id="country" name="country" type="text" value={values.country} onChange={onChange}
                        placeholder="Your country"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-brand-dark mb-1.5">Quantity</label>
                      <input
                        id="quantity" name="quantity" type="text" value={values.quantity} onChange={onChange}
                        placeholder="e.g. 5,000 units"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-brand-dark mb-1.5">Budget</label>
                      <input
                        id="budget" name="budget" type="text" value={values.budget} onChange={onChange}
                        placeholder="e.g. $2-5 per unit"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-brand-dark mb-1.5">Timeline</label>
                    <input
                      id="timeline" name="timeline" type="text" value={values.timeline} onChange={onChange}
                      placeholder="e.g. Need delivery by October 2026"
                      className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                    />
                  </div>

                  <div>
                    <label htmlFor="product_description" className="block text-sm font-medium text-brand-dark mb-1.5">
                      Product Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="product_description" name="product_description" rows={4}
                      value={values.product_description} onChange={onChange}
                      placeholder="Describe the product(s) you want to source — include specs, materials, certifications needed, etc."
                      className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue resize-y"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-2">Services Needed</label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => onServiceToggle(opt.value)}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium border transition cursor-pointer ${
                            values.services_needed.includes(opt.value)
                              ? 'bg-brand-blue text-white border-brand-blue'
                              : 'bg-brand-white text-brand-dark border-brand-border hover:border-brand-blue'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1.5">Additional Message</label>
                    <textarea
                      id="message" name="message" rows={3}
                      value={values.message} onChange={onChange}
                      placeholder="Any other details or questions..."
                      className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue resize-y"
                    />
                  </div>

                  {error && (
                    <p className="text-red-600 text-sm bg-red-50 px-4 py-2.5 rounded-lg">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-blue text-white px-6 py-3.5 rounded-lg font-semibold text-base hover:bg-blue-700 transition disabled:opacity-60 cursor-pointer border-none"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Get a Free Sourcing Quote'}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <div className="bg-brand-white rounded-xl border border-brand-border p-6">
                <h3 className="text-lg font-bold text-brand-dark mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-brand-dark">Email</p>
                      <p className="text-sm text-brand-gray">info@ssourcingchina.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-brand-dark">Phone / WhatsApp</p>
                      <p className="text-sm text-brand-gray">+86 138 0000 0000</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-brand-dark">Office</p>
                      <p className="text-sm text-brand-gray">Guangzhou, Guangdong, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-brand-dark">Response Time</p>
                      <p className="text-sm text-brand-gray">Within 24 hours (business days)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl border border-blue-100 p-6">
                <h3 className="text-lg font-bold text-brand-dark mb-3">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-brand-gray">
                  <li className="flex gap-2">
                    <span className="font-bold text-brand-blue shrink-0">1.</span>
                    We review your requirements within 24 hours.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-brand-blue shrink-0">2.</span>
                    Our team prepares a sourcing plan and fee proposal.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-brand-blue shrink-0">3.</span>
                    We schedule a call to discuss details and answer questions.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-brand-blue shrink-0">4.</span>
                    Once approved, we begin sourcing immediately.
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
