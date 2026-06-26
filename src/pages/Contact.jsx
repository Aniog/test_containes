import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'

export default function Contact() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState('idle')
  const [formError, setFormError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues((v) => ({ ...v, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError(null)

    if (!formValues.name.trim()) {
      setFormError('Please enter your full name.')
      return
    }
    if (!formValues.email.trim() || !/^\S+@\S+\.\S+$/.test(formValues.email)) {
      setFormError('Please enter a valid email address.')
      return
    }
    if (!formValues.product.trim()) {
      setFormError('Please describe the product you want to source.')
      return
    }

    setFormStatus('submitting')
    setTimeout(() => {
      setFormStatus('success')
      setFormValues({
        name: '',
        email: '',
        phone: '',
        company: '',
        product: '',
        quantity: '',
        message: '',
      })
    }, 1500)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent-gold font-semibold text-sm tracking-wide uppercase mb-3">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Tell us about your project and we&apos;ll get back to you within 24
            hours with a detailed proposal — no obligation.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Tell Us About Your Project
              </h2>

              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formValues.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formValues.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Phone / WhatsApp
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      value={formValues.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formValues.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="product"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Product You Want to Source *
                    </label>
                    <input
                      id="product"
                      name="product"
                      type="text"
                      value={formValues.product}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Bluetooth speakers, wooden furniture"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="quantity"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Estimated Order Quantity
                    </label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="text"
                      value={formValues.quantity}
                      onChange={handleChange}
                      placeholder="e.g., 1,000 units"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formValues.message}
                    onChange={handleChange}
                    placeholder="Target price, quality requirements, timeline, special requirements, etc."
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors resize-y"
                  />
                </div>

                {formError && (
                  <p className="text-accent-red text-sm mb-4">{formError}</p>
                )}

                {formStatus === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-green-800 text-sm font-medium">
                        Inquiry submitted successfully!
                      </p>
                      <p className="text-green-700 text-sm">
                        We&apos;ll get back to you within 24 hours with a detailed
                        proposal.
                      </p>
                    </div>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 bg-accent-red hover:bg-red-700 text-white font-semibold rounded-lg px-8 py-3.5 text-base transition-colors shadow-lg shadow-red-700/20 disabled:opacity-60"
                  >
                    {formStatus === 'submitting' ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Inquiry <Send size={16} />
                      </>
                    )}
                  </button>
                )}
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div>
              <div className="bg-navy rounded-2xl p-8 text-white sticky top-24">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">Phone</p>
                      <p className="text-sm text-gray-300">
                        +86 138 0013 8000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">Email</p>
                      <p className="text-sm text-gray-300">
                        info@ssourcingchina.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">Office</p>
                      <p className="text-sm text-gray-300">
                        Futian District, Shenzhen
                        <br />
                        Guangdong, China 518000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        Business Hours
                      </p>
                      <p className="text-sm text-gray-300">
                        Mon - Fri: 9:00 AM - 6:00 PM (CST)
                        <br />
                        Sat: 9:00 AM - 12:00 PM (CST)
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-white/10 my-6" />

                <h4 className="text-sm font-semibold text-white mb-3">
                  What Happens Next?
                </h4>
                <ol className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-gold font-bold">1.</span>
                    We review your inquiry within 24 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-gold font-bold">2.</span>
                    Free consultation call to discuss your needs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-gold font-bold">3.</span>
                    We prepare a tailored sourcing proposal
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-gold font-bold">4.</span>
                    You approve and we begin sourcing
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