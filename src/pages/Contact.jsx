import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Monitoring',
  'Shipping Coordination',
  'Contract & Negotiation',
]

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product_description: '',
    estimated_volume: '',
    target_price: '',
    services_needed: [],
    how_did_you_hear: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setValues((v) => ({
        ...v,
        services_needed: checked
          ? [...v.services_needed, value]
          : v.services_needed.filter((s) => s !== value),
      }))
    } else {
      setValues((v) => ({ ...v, [name]: value }))
    }
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email'
    if (!v.product_description.trim()) return 'Product description is required'
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
      const { data: response, error: createError } = await client
        .from('Inquiry')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company,
            phone: values.phone,
            product_description: values.product_description,
            estimated_volume: values.estimated_volume,
            target_price: values.target_price,
            services_needed: values.services_needed,
            how_did_you_hear: values.how_did_you_hear,
            status: 'new',
          },
        })
        .select()
        .single()

      if (createError || response?.success === false) {
        const msg = Array.isArray(response?.errors) && response.errors.length > 0
          ? response.errors.join(', ')
          : createError?.message || 'Submission failed'
        setError(msg)
        setStatus('error')
        return
      }

      setStatus('success')
      setValues({
        name: '',
        email: '',
        company: '',
        phone: '',
        product_description: '',
        estimated_volume: '',
        target_price: '',
        services_needed: [],
        how_did_you_hear: '',
      })
    } catch (err) {
      setError(err.message || 'Something went wrong')
      setStatus('error')
    }
  }

  return (
    <div>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-slate-200 max-w-2xl mx-auto">
            Ready to source from China? Fill out the form below and we will send you a free, no-obligation sourcing quote within 48 hours.
          </p>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-surface rounded-xl border border-border-light p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-text-primary mb-2">Thank You!</h2>
                  <p className="text-text-secondary mb-6">
                    We have received your inquiry and will get back to you within 48 hours with a free sourcing quote.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center justify-center rounded-md bg-primary-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="bg-surface rounded-xl border border-border-light p-6 md:p-8"
                  aria-busy={status === 'submitting'}
                >
                  <h2 className="text-xl font-bold text-text-primary mb-6">Sourcing Inquiry</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={onChange}
                        required
                        className="w-full rounded-md border border-border-light px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-accent/40 focus:border-primary-accent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={onChange}
                        required
                        className="w-full rounded-md border border-border-light px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-accent/40 focus:border-primary-accent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-1.5">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={values.company}
                        onChange={onChange}
                        className="w-full rounded-md border border-border-light px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-accent/40 focus:border-primary-accent"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        value={values.phone}
                        onChange={onChange}
                        className="w-full rounded-md border border-border-light px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-accent/40 focus:border-primary-accent"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="product_description" className="block text-sm font-medium text-text-primary mb-1.5">
                      Product Description <span className="text-danger">*</span>
                    </label>
                    <textarea
                      id="product_description"
                      name="product_description"
                      rows={5}
                      value={values.product_description}
                      onChange={onChange}
                      required
                      className="w-full rounded-md border border-border-light px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-accent/40 focus:border-primary-accent resize-y"
                      placeholder="Describe the product you want to source, including materials, dimensions, colors, and any certifications required."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="estimated_volume" className="block text-sm font-medium text-text-primary mb-1.5">
                        Estimated Volume
                      </label>
                      <input
                        id="estimated_volume"
                        name="estimated_volume"
                        type="text"
                        value={values.estimated_volume}
                        onChange={onChange}
                        className="w-full rounded-md border border-border-light px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-accent/40 focus:border-primary-accent"
                        placeholder="e.g. 5,000 units / year"
                      />
                    </div>
                    <div>
                      <label htmlFor="target_price" className="block text-sm font-medium text-text-primary mb-1.5">
                        Target Price
                      </label>
                      <input
                        id="target_price"
                        name="target_price"
                        type="text"
                        value={values.target_price}
                        onChange={onChange}
                        className="w-full rounded-md border border-border-light px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-accent/40 focus:border-primary-accent"
                        placeholder="e.g. $4.50 per unit"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <span className="block text-sm font-medium text-text-primary mb-2">
                      Services Needed
                    </span>
                    <div className="flex flex-wrap gap-3">
                      {serviceOptions.map((opt) => (
                        <label
                          key={opt}
                          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm cursor-pointer transition-colors ${
                            values.services_needed.includes(opt)
                              ? 'bg-primary-accent/10 border-primary-accent text-primary-accent'
                              : 'border-border-light text-text-secondary hover:border-primary-accent/40'
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="services_needed"
                            value={opt}
                            checked={values.services_needed.includes(opt)}
                            onChange={onChange}
                            className="sr-only"
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="how_did_you_hear" className="block text-sm font-medium text-text-primary mb-1.5">
                      How Did You Hear About Us?
                    </label>
                    <input
                      id="how_did_you_hear"
                      name="how_did_you_hear"
                      type="text"
                      value={values.how_did_you_hear}
                      onChange={onChange}
                      className="w-full rounded-md border border-border-light px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-accent/40 focus:border-primary-accent"
                      placeholder="Google, referral, LinkedIn, etc."
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-danger mb-4" role="alert">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center rounded-md bg-primary-accent px-7 py-3 text-base font-semibold text-white hover:bg-blue-700 transition-colors disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5" />
                        Get a Free Sourcing Quote
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-surface rounded-xl border border-border-light p-6">
                <h3 className="text-base font-bold text-text-primary mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                    <Mail className="w-4 h-4 mt-0.5 text-primary-accent shrink-0" />
                    <span>hello@ssourcingchina.com</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                    <Phone className="w-4 h-4 mt-0.5 text-primary-accent shrink-0" />
                    <span>+86 138 0000 0000</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                    <MapPin className="w-4 h-4 mt-0.5 text-primary-accent shrink-0" />
                    <span>
                      SSourcing China
                      <br />
                      Nanshan District
                      <br />
                      Shenzhen, Guangdong, China
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-surface rounded-xl border border-border-light p-6">
                <h3 className="text-base font-bold text-text-primary mb-2">Response Time</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  We aim to reply to all inquiries within 24–48 hours during business days. For urgent requests, mention it in your message.
                </p>
              </div>

              <div className="bg-primary rounded-xl p-6 text-white">
                <h3 className="text-base font-bold mb-2">Prefer to Book a Call?</h3>
                <p className="text-sm text-slate-200 mb-4">
                  Schedule a free 20-minute discovery call with one of our sourcing managers.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-sm font-semibold text-white hover:text-blue-200 transition-colors"
                >
                  Book a call
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
