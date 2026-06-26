import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productInterest: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const validate = () => {
    if (!form.name.trim()) return 'Name is required'
    if (!form.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Please enter a valid email'
    if (!form.message.trim()) return 'Message is required'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate()
    if (err) { setError(err); return }

    setStatus('submitting')

    try {
      // Simulate API call for now - will integrate with database
      await new Promise((resolve) => setTimeout(resolve, 1200))
      setStatus('success')
      setForm({ name: '', email: '', company: '', phone: '', productInterest: '', message: '' })
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="absolute inset-0 bg-navy-light/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-4">
            Let's Discuss Your Needs
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you need a quote, product advice, or technical support, our
            team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-navy mb-5">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone size={18} className="text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-navy">Phone</p>
                      <p className="text-sm text-muted">+1 (555) 123-4567</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail size={18} className="text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-navy">Email</p>
                      <p className="text-sm text-muted">info@artitectmachinery.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-navy">Address</p>
                      <p className="text-sm text-muted">1200 Industrial Parkway, Building 4<br />Chicago, IL 60608</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock size={18} className="text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-navy">Business Hours</p>
                      <p className="text-sm text-muted">Mon – Fri: 8:00 AM – 6:00 PM CST</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-navy rounded-xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Need Urgent Support?</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Our technical support hotline is available 24/7 for existing
                  customers.
                </p>
                <div className="flex items-center gap-2 text-gold font-semibold">
                  <Phone size={16} />
                  <span>+1 (555) 987-6543</span>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-navy mb-6">Send Us a Message</h3>

                {status === 'success' ? (
                  <div className="text-center py-10">
                    <CheckCircle2 size={56} className="text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-navy mb-2">
                      Message Sent Successfully
                    </h4>
                    <p className="text-muted mb-6">
                      Thank you for reaching out. Our team will get back to you
                      within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="inline-flex items-center gap-2 bg-navy text-white px-6 py-2.5 rounded-md font-semibold hover:bg-navy-light transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-navy mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-md border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-sm"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-md border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-sm"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-navy mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-md border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-sm"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-md border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-sm"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy mb-1">
                        Product Interest
                      </label>
                      <select
                        name="productInterest"
                        value={form.productInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-md border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-sm bg-white"
                      >
                        <option value="">Select a product</option>
                        <option value="double-folding-machine">Double Folding Machine</option>
                        <option value="double-folder">Double Folder</option>
                        <option value="sheet-metal-folder">Sheet Metal Folder</option>
                        <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                        <option value="metal-folder">Metal Folder</option>
                        <option value="metal-folder-machine">Metal Folder Machine</option>
                        <option value="metal-folding-machine">Metal Folding Machine</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy mb-1">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-2.5 rounded-md border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-sm resize-none"
                        placeholder="Tell us about your project, requirements, or questions..."
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-red-600">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-3 rounded-md font-semibold hover:bg-gold-hover transition-colors disabled:opacity-60"
                    >
                      {status === 'submitting' ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
