import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const inquiryTypes = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Monitoring',
  'Shipping & Logistics',
  'Full End-to-End Sourcing',
  'Other',
]

const budgetRanges = [
  'Under $5,000',
  '$5,000 - $25,000',
  '$25,000 - $100,000',
  '$100,000 - $500,000',
  'Over $500,000',
  'Not sure yet',
]

export default function Contact() {
  const [formState, setFormState] = useState('idle')
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    inquiryType: '',
    budget: '',
    productDescription: '',
    quantity: '',
    timeline: '',
    additionalInfo: '',
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormState('submitting')
    setTimeout(() => {
      setFormState('success')
    }, 1500)
  }

  if (formState === 'success') {
    return (
      <>
        <section className="bg-gradient-to-br from-primary-dark to-primary py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">Contact Us</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-heading font-extrabold text-white">
              Get in Touch
            </h1>
          </div>
        </section>
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-xl mx-auto px-4 text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
            <h2 className="text-2xl font-heading font-extrabold text-text mb-3">
              Thank You, {values.name}!
            </h2>
            <p className="text-text-muted leading-relaxed mb-6">
              We've received your sourcing inquiry. Our team will review your requirements and respond within 24 hours with a tailored sourcing plan.
            </p>
            <button
              onClick={() => { setFormState('idle'); setValues({ name: '', email: '', company: '', country: '', phone: '', inquiryType: '', budget: '', productDescription: '', quantity: '', timeline: '', additionalInfo: '' }) }}
              className="text-primary font-semibold text-sm hover:text-primary-light transition-colors"
            >
              Submit another inquiry
            </button>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-primary-dark to-primary py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">Contact Us</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-heading font-extrabold text-white">
            Get a Free Sourcing Quote
          </h1>
          <p className="mt-5 text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us what products you need. Our team will respond within 24 hours with supplier recommendations, pricing, and a sourcing plan.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-heading font-bold text-xl text-text mb-6">Contact Information</h2>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-text">Email</div>
                    <a href="mailto:info@ssourcingchina.com" className="text-text-muted text-sm hover:text-primary transition-colors">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-text">Phone</div>
                    <a href="tel:+862112345678" className="text-text-muted text-sm hover:text-primary transition-colors">
                      +86 21 1234 5678
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-text">Office</div>
                    <p className="text-text-muted text-sm">
                      Shanghai, China
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-text">Response Time</div>
                    <p className="text-text-muted text-sm">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-surface-alt rounded-xl border border-border p-6">
                <h3 className="font-heading font-bold text-base text-text mb-2">What to Expect</h3>
                <ul className="space-y-2.5 text-sm text-text-muted">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    Free initial sourcing consultation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    Supplier recommendations within 3-5 days
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    Competitive pricing from multiple factories
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    No obligation to proceed
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-surface-alt rounded-xl border border-border p-6 md:p-8">
                <h2 className="font-heading font-bold text-xl text-text mb-6">Sourcing Inquiry Form</h2>

                <div className="space-y-5">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">Full Name *</label>
                      <input
                        id="name" name="name" type="text" required
                        value={values.name} onChange={onChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text text-sm placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">Email Address *</label>
                      <input
                        id="email" name="email" type="email" required
                        value={values.email} onChange={onChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text text-sm placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Company & Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-text mb-1.5">Company Name</label>
                      <input
                        id="company" name="company" type="text"
                        value={values.company} onChange={onChange}
                        placeholder="Your Company Ltd."
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text text-sm placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-text mb-1.5">Country *</label>
                      <input
                        id="country" name="country" type="text" required
                        value={values.country} onChange={onChange}
                        placeholder="United States"
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text text-sm placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text mb-1.5">Phone Number</label>
                    <input
                      id="phone" name="phone" type="tel"
                      value={values.phone} onChange={onChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text text-sm placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>

                  {/* Inquiry Type & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-text mb-1.5">Service Needed *</label>
                      <select
                        id="inquiryType" name="inquiryType" required
                        value={values.inquiryType} onChange={onChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      >
                        <option value="">Select a service</option>
                        {inquiryTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-text mb-1.5">Estimated Budget</label>
                      <select
                        id="budget" name="budget"
                        value={values.budget} onChange={onChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      >
                        <option value="">Select range</option>
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Product Description */}
                  <div>
                    <label htmlFor="productDescription" className="block text-sm font-medium text-text mb-1.5">Product Description *</label>
                    <textarea
                      id="productDescription" name="productDescription" rows={4} required
                      value={values.productDescription} onChange={onChange}
                      placeholder="Describe the products you need sourced. Include specifications, materials, dimensions, target price, and any reference links or images."
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text text-sm placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-vertical"
                    />
                  </div>

                  {/* Quantity & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-text mb-1.5">Estimated Quantity</label>
                      <input
                        id="quantity" name="quantity" type="text"
                        value={values.quantity} onChange={onChange}
                        placeholder="e.g. 5,000 units"
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text text-sm placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-text mb-1.5">Target Timeline</label>
                      <input
                        id="timeline" name="timeline" type="text"
                        value={values.timeline} onChange={onChange}
                        placeholder="e.g. 8 weeks"
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text text-sm placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-text mb-1.5">Additional Information</label>
                    <textarea
                      id="additionalInfo" name="additionalInfo" rows={3}
                      value={values.additionalInfo} onChange={onChange}
                      placeholder="Any other details, special requirements, or questions you have."
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text text-sm placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-vertical"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark disabled:opacity-60 text-white font-semibold text-base px-8 py-3.5 rounded-lg transition-colors"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Submit Inquiry
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
